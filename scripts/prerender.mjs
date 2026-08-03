/**
 * Prerender statico di tutte le route.
 *
 * Il sito è una SPA: senza questo passaggio i crawler che NON eseguono JavaScript
 * (GPTBot, ClaudeBot, PerplexityBot, CCBot, gli scraper dei social, e Googlebot
 * quando il rendering budget è saturo) vedono solo <div id="root"></div>.
 * Qui generiamo un file HTML completo — testo + head + JSON-LD — per ogni URL.
 *
 * Prerequisiti (li esegue `npm run build`):
 *   vite build                                → dist/index.html + assets
 *   vite build --ssr src/entry-server.tsx     → dist-ssr/entry-server.js
 *
 * Uso:  node scripts/prerender.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr/entry-server.js');

if (!fs.existsSync(ssrEntry)) {
  console.error(`[prerender] manca ${ssrEntry} — esegui prima il build SSR`);
  process.exit(1);
}

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(ssrEntry).href);

/**
 * Route da prerenderizzare ma volutamente ASSENTI dalla sitemap: pagine `noindex`
 * che devono comunque esistere come file statico (altrimenti risponderebbero 404,
 * dato che non c'è più il rewrite SPA catch-all).
 */
const ROUTE_FUORI_SITEMAP = [
  '/grazie', // thank you page post-invio form
];

// --- Elenco route: unica fonte di verità = sitemap.xml (già allineata alle Route) ---
const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
const urlSitemap = [...sitemap.matchAll(/<loc>https:\/\/www\.renovasolution\.it([^<]*)<\/loc>/g)].map(
  (m) => m[1] || '/'
);
const routes = [...urlSitemap, ...ROUTE_FUORI_SITEMAP];

if (routes.length === 0) {
  console.error('[prerender] nessuna route trovata nella sitemap');
  process.exit(1);
}

// --- Guardia: sitemap e App.tsx devono coincidere ---
// In produzione non c'è più il rewrite SPA catch-all: una route presente in App.tsx
// ma assente dalla sitemap non verrebbe prerenderizzata e risponderebbe 404.
const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const appRoutes = [...app.matchAll(/<Route path="([^"]*)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== '*');

const nonPrerenderizzate = appRoutes.filter((r) => !routes.includes(r));
const senzaRoute = routes.filter((r) => !appRoutes.includes(r));

if (nonPrerenderizzate.length || senzaRoute.length) {
  console.error('[prerender] route e sitemap non coincidono:');
  if (nonPrerenderizzate.length)
    console.error(
      '  in App.tsx ma non prerenderizzate — aggiungerle a sitemap.xml, oppure a\n' +
        '  ROUTE_FUORI_SITEMAP se sono noindex:\n' +
        nonPrerenderizzate.map((r) => '    ' + r).join('\n')
    );
  if (senzaRoute.length)
    console.error(
      '  da prerenderizzare ma senza <Route> in App.tsx:\n' +
        senzaRoute.map((r) => '    ' + r).join('\n')
    );
  process.exit(1);
}

/** Rimuove dal template i tag che ora arrivano da Helmet, per non duplicarli. */
function stripStaticHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="(description|keywords|robots|author)"[^>]*>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="geo\.[^"]*"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '');
}

/**
 * React 19 rende title/meta/link/JSON-LD nella posizione in cui compaiono nell'albero
 * (li sposta nel <head> solo a runtime, nel browser). Nell'HTML statico finirebbero
 * dentro <div id="root">, dove i crawler senza JS non li leggono come metadati del
 * documento. Qui li estraiamo e li spostiamo nel <head>.
 *
 * Vengono spostati solo i tag realmente "hoistable":
 *  - <title>
 *  - <meta> con name/property/http-equiv  (NON i <meta itemprop> dei microdati inline)
 *  - <link rel="canonical|alternate|preload">
 *  - <script type="application/ld+json">
 */
function hoistHead(html) {
  const hoisted = [];

  const patterns = [
    /<title[^>]*>[\s\S]*?<\/title>/gi,
    /<meta\b[^>]*\b(?:name|property|http-equiv)=[^>]*>/gi,
    /<link\b[^>]*\brel="(?:canonical|alternate|preload)"[^>]*>/gi,
    /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
  ];

  let body = html;
  for (const re of patterns) {
    body = body.replace(re, (tag) => {
      hoisted.push(tag);
      return '';
    });
  }

  return { body, hoisted: hoisted.join('\n    ') };
}

const base = stripStaticHead(template);
let ok = 0;
const errors = [];

for (const route of routes) {
  try {
    const rendered = render(route);
    const { body, hoisted } = hoistHead(rendered.html);
    const head = [rendered.head, hoisted].filter(Boolean).join('\n    ');

    let page = base.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    page = page.replace('</head>', `  ${head}\n  </head>`);

    const outDir = route === '/' ? distDir : path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), page);
    ok++;
  } catch (err) {
    errors.push(`${route}: ${err.message}`);
  }
}

// 404: pagina statica servita da Vercel per gli URL non mappati
try {
  const rendered = render('/__404__');
  const { body, hoisted } = hoistHead(rendered.html);
  const head = [rendered.head, hoisted].filter(Boolean).join('\n    ');
  let page = base.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  page = page.replace('</head>', `  ${head}\n  </head>`);
  fs.writeFileSync(path.join(distDir, '404.html'), page);
} catch (err) {
  errors.push(`404.html: ${err.message}`);
}

console.log(`[prerender] ${ok}/${routes.length} pagine generate + 404.html`);
if (errors.length) {
  console.error('[prerender] ERRORI:\n' + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
