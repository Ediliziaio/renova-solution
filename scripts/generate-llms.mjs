/**
 * Genera public/llms.txt e public/llms-full.txt a partire dalle route reali
 * e dai meta tag SEO dichiarati nelle pagine.
 *
 * Uso:  node scripts/generate-llms.mjs
 * Viene eseguito in automatico dal `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const SITE = 'https://www.renovasolution.it';

const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');

const importMap = Object.fromEntries(
  [...app.matchAll(/import\s+([A-Za-z0-9_]+)\s+from\s+'\.\/(pages\/[^']+)'/g)].map((m) => [
    m[1],
    m[2],
  ])
);

// Pagine noindex: fuori da llms.txt come sono fuori dalla sitemap
const ESCLUSE = ['*', '/grazie'];

const routes = [...app.matchAll(/<Route path="([^"]*)" element=\{<([A-Za-z0-9_]+)\s*\/>/g)]
  .map((m) => ({ path: m[1], comp: m[2] }))
  .filter((r) => !ESCLUSE.includes(r.path));

/** Isola il blocco <SEO ... /> (o le props passate a GeoServicePage) per non pescare
 *  attributi `title=` appartenenti ad altri elementi della pagina. */
function seoBlock(src) {
  const i = src.indexOf('<SEO');
  if (i !== -1) return src.slice(i, src.indexOf('/>', i) + 2);
  const g = src.indexOf('<GeoServicePage');
  if (g !== -1) return src.slice(g);
  return src;
}

function attr(src, name) {
  const m =
    src.match(new RegExp(`\\b${name}="((?:[^"\\\\]|\\\\.)*)"`)) ||
    src.match(new RegExp(`\\b${name}=\\{\`([^\`]*)\``));
  return m ? m[1] : null;
}

const pages = [];
for (const r of routes) {
  const rel = importMap[r.comp];
  if (!rel) continue;
  const file = path.join(root, 'src', rel + '.tsx');
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');

  // pagine GEO: i meta stanno nelle props passate a GeoServicePage
  const block = seoBlock(src);
  const title = attr(block, 'seoTitle') || attr(block, 'title');
  const description = attr(block, 'seoDescription') || attr(block, 'description');

  // articoli blog: title/description arrivano da articleData (solo in pages/blog/)
  const isArticle = rel.startsWith('pages/blog/');
  const articleTitle = isArticle && src.match(/^\s*title: '((?:[^'\\]|\\.)*)',$/m);
  const articleExcerpt = isArticle && src.match(/^\s*excerpt: '((?:[^'\\]|\\.)*)',$/m);

  const unescape = (s) => (s ? s.replace(/\\'/g, "'") : s);

  pages.push({
    path: r.path,
    title: unescape(articleTitle ? articleTitle[1] : title) || r.path,
    description: unescape(articleExcerpt ? articleExcerpt[1] : description) || '',
  });
}

const group = (pred) => pages.filter((p) => pred(p.path));

const servizi = group(
  (p) =>
    /^\/(fotovoltaico-privati|fotovoltaico-aziende|manutenzione|climatizzazione|pompe-di-calore|infissi|ristrutturazioni|assistenza)$/.test(
      p
    ) || /^\/(infissi|ristrutturazioni)\//.test(p)
);
const PROVINCE =
  'trieste|udine|pordenone|gorizia|venezia|padova|verona|vicenza|treviso|belluno|rovigo';
const geo = group((p) =>
  new RegExp(`^/(fotovoltaico|infissi|ristrutturazioni)-(${PROVINCE})$`).test(p)
);
const blog = group((p) => p.startsWith('/blog/'));
const azienda = group((p) =>
  ['/chi-siamo', '/progetti', '/contatti', '/preventivo', '/blog'].includes(p)
);
const legali = group((p) => ['/privacy', '/cookie-policy'].includes(p));

const line = (p) => `- [${p.title}](${SITE}${p.path})${p.description ? `: ${p.description}` : ''}`;

const intro = `# Renova Solution

> Renova Solution srl è un'azienda di Prata di Pordenone (PN) specializzata in impianti fotovoltaici, infissi e serramenti, ristrutturazioni chiavi in mano, climatizzazione e pompe di calore. Opera su tutto il Friuli Venezia Giulia e il Veneto con sopralluogo e preventivo gratuiti.

## Informazioni essenziali

- Ragione sociale: Renova Solution srl — P.IVA 01941970939
- Sede operativa: Via Friuli, 92 — 33080 Prata di Pordenone (PN)
- Sede legale: Via Revedole 78/B — 33170 Pordenone (PN)
- Telefono: +39 376 1293952
- Email: commerciale@renovasolution.it
- Orari: lunedì–venerdì 8:30–18:00, sabato 9:00–12:00
- Aree servite: Friuli Venezia Giulia (Pordenone, Udine, Trieste, Gorizia) e Veneto (Treviso, Venezia, Padova, Vicenza, Verona, Belluno, Rovigo)
- Punti chiave: sopralluogo e preventivo gratuiti, risposta entro 2 ore lavorative, oltre 3.000 progetti completati, garanzia 10 anni sui lavori, gestione completa delle pratiche (ENEA, GSE, detrazioni fiscali)

## Servizi

${servizi.map(line).join('\n')}

## Pagine per provincia

${geo.map(line).join('\n')}

## Azienda e contatti

${azienda.map(line).join('\n')}

## Guide e approfondimenti

${blog.map(line).join('\n')}

## Note legali

${legali.map(line).join('\n')}
`;

fs.writeFileSync(path.join(root, 'public/llms.txt'), intro);

// llms-full.txt: stessa struttura ma con l'elenco completo e piatto di tutte le URL
const full = `# Renova Solution — indice completo

> Elenco integrale delle pagine di ${SITE} con titolo e descrizione.
> Azienda di Prata di Pordenone (PN) specializzata in fotovoltaico, infissi, ristrutturazioni,
> climatizzazione e pompe di calore in Friuli Venezia Giulia e Veneto.
> Contatti: +39 376 1293952 — commerciale@renovasolution.it

## Tutte le pagine (${pages.length})

${pages.map(line).join('\n')}
`;

fs.writeFileSync(path.join(root, 'public/llms-full.txt'), full);

console.log(
  `llms.txt generato: ${servizi.length} servizi, ${geo.length} pagine provincia, ${blog.length} articoli, ${pages.length} pagine totali`
);
