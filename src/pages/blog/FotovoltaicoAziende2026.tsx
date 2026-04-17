import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function FotovoltaicoAziende2026() {
  const articleData = {
    title: 'Fotovoltaico per aziende nel 2026: ROI, incentivi e vantaggi fiscali per le imprese',
    excerpt: 'Guida completa al fotovoltaico industriale nel 2026: calcolo ROI reale, incentivi fiscali per le imprese, credito d\'imposta, PPA e case study con impianto da 100 kW su capannone in Friuli Venezia Giulia.',
    date: '18 Marzo 2026',
    dateISO: '2026-03-18',
    readTime: '13 min',
    author: 'Marco Bianchi',
    category: 'Fotovoltaico',
    image: '/images/fotovoltaico-azienda.jpg',
    slug: 'fotovoltaico-aziende-2026'
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.title,
    description: articleData.excerpt,
    image: articleData.image,
    datePublished: articleData.dateISO,
    dateModified: articleData.dateISO,
    author: {
      '@type': 'Person',
      name: articleData.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Renova Solution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.renovasolution.it/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.renovasolution.it/blog/${articleData.slug}`
    },
    keywords: 'fotovoltaico aziende 2026, impianto fotovoltaico industriale, fotovoltaico capannone, incentivi fotovoltaico imprese, ROI fotovoltaico aziendale, autoconsumo fotovoltaico azienda, fotovoltaico partita IVA',
    articleSection: articleData.category
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.renovasolution.it/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.renovasolution.it/blog' },
      { '@type': 'ListItem', position: 3, name: articleData.title, item: `https://www.renovasolution.it/blog/${articleData.slug}` }
    ]
  };

  return (
    <>
      <SEO
        title={`${articleData.title} | Renova Solution`}
        description={articleData.excerpt}
        keywords="fotovoltaico aziende 2026, impianto fotovoltaico industriale, fotovoltaico capannone, incentivi fotovoltaico imprese, ROI fotovoltaico aziendale, autoconsumo fotovoltaico azienda, fotovoltaico partita IVA"
        ogType="article"
        canonical={`https://www.renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogPostSchema(articleData.title, articleData.excerpt, `https://www.renovasolution.it/blog/${articleData.slug}`, `https://www.renovasolution.it${articleData.image}`, articleData.dateISO, articleData.author))}</script>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[400px] md:min-h-[450px] flex items-end bg-gray-900">
          <div className="absolute inset-0">
            <img src={articleData.image} alt={articleData.title} className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li>/</li>
                <li className="text-white">{articleData.category}</li>
              </ol>
            </nav>

            <motion.span className="inline-block bg-[#C8E600] text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              {articleData.category}
            </motion.span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {articleData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {articleData.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {articleData.readTime}</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {articleData.author}</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 md:py-16 bg-white" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={articleData.title} />
          <meta itemProp="datePublished" content={articleData.dateISO} />
          <meta itemProp="author" content={articleData.author} />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C8E600] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Torna al blog
            </Link>

            <div className="prose prose-lg max-w-none text-gray-700">

              {/* Introduzione */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Nel 2026 investire in un <strong>impianto fotovoltaico aziendale</strong> non è più una scelta di nicchia
                riservata alle grandi corporazioni: è una decisione strategica alla portata di PMI, artigiani, commercianti
                e imprenditori con partita IVA. Tra costi dell'energia ancora elevati, incentivi fiscali solidi e tecnologie
                sempre più efficienti, il <strong>fotovoltaico per le aziende</strong> offre ritorni sull'investimento
                difficilmente replicabili da altre forme di spesa in conto capitale.
              </p>

              {/* 1. Perché le aziende investono nel fotovoltaico */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                1. Perché le aziende investono nel fotovoltaico nel 2026
              </h2>
              <p>
                Le imprese italiane pagano l'energia elettrica tra i prezzi più alti d'Europa. Una manifattura di media
                dimensione con consumi annui di 150.000-300.000 kWh può spendere tra <strong>€ 45.000 e € 90.000 l'anno</strong>
                solo in bollette elettriche. In questo contesto, un <strong>impianto fotovoltaico industriale</strong> da 100 kW
                riesce a coprire il 40-70% del fabbisogno elettrico annuo, abbattendo in modo strutturale questo costo fisso.
              </p>
              <p>
                Ma non è solo una questione di risparmio immediato. Nel 2026 pesano anche:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Rendicontazione ESG</strong>: sempre più clienti, banche e investitori valutano le imprese in base all'impatto ambientale. Un impianto fotovoltaico migliora il rating di sostenibilità.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Protezione dal rischio energetico</strong>: la volatilità dei prezzi dell'energia rimane alta. Produrre energia propria è la miglior assicurazione contro futuri aumenti.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Vantaggi competitivi</strong>: abbassare i costi operativi significa margini più alti o prezzi più competitivi sul mercato.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Incentivi fiscali strutturali</strong>: credito d'imposta e ammortamento accelerato riducono l'effettivo esborso di cassa in modo significativo.</span>
                </li>
              </ul>

              {/* 2. Autoconsumo aziendale */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                2. Autoconsumo aziendale: come massimizzare il risparmio
              </h2>
              <p>
                L'<strong>autoconsumo fotovoltaico aziendale</strong> è il cuore dell'investimento: ogni kWh prodotto e
                consumato direttamente dall'azienda vale quanto il prezzo dell'energia acquistata dalla rete, che nel 2026
                si aggira mediamente tra <strong>0,20 e 0,28 €/kWh</strong> per le utenze industriali (inclusi oneri di sistema).
              </p>
              <p>
                Per massimizzare l'autoconsumo è fondamentale:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4">Strategie per aumentare l'autoconsumo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Spostare i carichi pesanti nelle ore solari</strong>: compressori, forni, macchinari di produzione dovrebbero operare prevalentemente tra le 9:00 e le 16:00.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Sistema di Energy Management (EMS)</strong>: un software di gestione dell'energia monitora i consumi in tempo reale e ottimizza automaticamente l'utilizzo dell'energia prodotta.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Colonnine di ricarica per veicoli aziendali</strong>: caricare i veicoli elettrici aziendali con energia solare è uno dei modi più efficaci per aumentare l'autoconsumo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Sistemi di accumulo</strong>: le batterie industriali permettono di immagazzinare l'eccesso di produzione solare per utilizzarlo nelle ore serali o nei picchi di consumo.</span>
                  </li>
                </ul>
              </div>
              <p>
                Un'azienda con attività concentrata nelle ore diurne (turno unico, dalle 8:00 alle 17:00) può raggiungere
                un tasso di autoconsumo del <strong>70-85%</strong> senza accumulo, poiché i picchi di produzione solare
                coincidono con i picchi di attività produttiva.
              </p>

              {/* 3. Dimensionamento */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                3. Dimensionamento dell'impianto: come calcolare la taglia giusta
              </h2>
              <p>
                Il corretto <strong>dimensionamento di un impianto fotovoltaico industriale</strong> parte dall'analisi delle
                bollette degli ultimi 12 mesi. I parametri chiave da valutare sono:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Consumo annuo totale in kWh</li>
                <li>Profilo orario dei consumi (ore di maggior utilizzo)</li>
                <li>Potenza impegnata (kW) e picchi di consumo</li>
                <li>Disponibilità di superficie per i pannelli (tetto, pensilina, terreno)</li>
                <li>Esposizione e inclinazione delle superfici disponibili</li>
              </ul>
              <p>
                Come regola generale, per un'azienda con attività diurna si può stimare:
                <strong> 1 kWp di impianto per ogni 1.200-1.500 kWh di consumo annuo</strong> che si intende coprire con
                il solare. Tuttavia questa è solo una prima approssimazione: è sempre necessario un'analisi professionale
                del profilo energetico aziendale.
              </p>
              <div className="bg-[#C8E600]/10 border border-[#C8E600] rounded-xl p-5 my-6">
                <p className="flex items-start gap-3 text-gray-800">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Attenzione alla sovradimensione</strong>: un impianto troppo grande rispetto ai consumi diurni produce molta energia che viene immessa in rete a prezzi molto bassi (Ritiro Dedicato: ~0,06 €/kWh), abbassando il ROI complessivo. Meglio dimensionare con precisione o aggiungere accumulo.</span>
                </p>
              </div>

              {/* 4. Costi */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                4. Costi di un impianto fotovoltaico industriale nel 2026
              </h2>
              <p>
                I <strong>costi degli impianti fotovoltaici industriali</strong> nel 2026 si sono ulteriormente ridotti
                grazie alla diminuzione del prezzo dei pannelli e alla standardizzazione degli inverter di stringa per
                grandi impianti. La tabella seguente riassume i prezzi chiavi in mano (comprensivi di progettazione,
                installazione, pratiche GSE e allaccio):
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Taglia impianto</th>
                      <th className="px-4 py-3 text-right">Costo lordo</th>
                      <th className="px-4 py-3 text-right">Costo/kWp</th>
                      <th className="px-4 py-3 text-right">Produzione annua stimata*</th>
                      <th className="px-4 py-3 text-right rounded-tr-lg">Superficie necessaria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold">20 kWp</td>
                      <td className="px-4 py-3 text-right">€ 22.000 – 28.000</td>
                      <td className="px-4 py-3 text-right">€ 1.100 – 1.400</td>
                      <td className="px-4 py-3 text-right">~22.000 kWh</td>
                      <td className="px-4 py-3 text-right">~110 m²</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                      <td className="px-4 py-3 font-bold">50 kWp</td>
                      <td className="px-4 py-3 text-right">€ 48.000 – 60.000</td>
                      <td className="px-4 py-3 text-right">€ 960 – 1.200</td>
                      <td className="px-4 py-3 text-right">~55.000 kWh</td>
                      <td className="px-4 py-3 text-right">~275 m²</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-[#C8E600]">100 kWp</td>
                      <td className="px-4 py-3 text-right font-bold">€ 85.000 – 105.000</td>
                      <td className="px-4 py-3 text-right">€ 850 – 1.050</td>
                      <td className="px-4 py-3 text-right">~110.000 kWh</td>
                      <td className="px-4 py-3 text-right">~550 m²</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="px-4 py-3 font-bold">200 kWp+</td>
                      <td className="px-4 py-3 text-right">€ 150.000 – 190.000</td>
                      <td className="px-4 py-3 text-right">€ 750 – 950</td>
                      <td className="px-4 py-3 text-right">~220.000 kWh</td>
                      <td className="px-4 py-3 text-right">~1.100 m²</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">* Stima per impianti installati in Friuli Venezia Giulia e Veneto, irraggiamento medio zona (1.100-1.200 kWh/kWp/anno). I prezzi sono indicativi e soggetti a verifica in sopralluogo.</p>
              </div>
              <p>
                Al crescere della taglia dell'impianto, il <strong>costo per kWp installato diminuisce</strong> grazie alle
                economie di scala: acquisto di materiali in volume, tempi di installazione ottimizzati e minori costi fissi
                di progettazione ripartiti su più kilowatt. Questo rende gli impianti grandi proporzionalmente più convenienti.
              </p>

              {/* 5. ROI e payback */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                5. ROI e payback period: calcolo reale con esempi
              </h2>
              <p>
                Il <strong>ROI di un impianto fotovoltaico aziendale</strong> dipende da tre variabili principali: il costo
                dell'energia acquistata dalla rete, la percentuale di autoconsumo e gli incentivi fiscali disponibili.
                Vediamo due esempi concreti per impianti nel Nord-Est Italia.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-lg mb-4">Esempio A — PMI Commerciale, impianto 50 kWp</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Consumo annuo: <strong>60.000 kWh</strong></li>
                  <li>• Produzione annua impianto: <strong>55.000 kWh</strong></li>
                  <li>• Autoconsumo stimato: <strong>75% → 41.250 kWh</strong></li>
                  <li>• Energia immessa in rete: <strong>13.750 kWh × 0,06 €/kWh = 825 €/anno</strong></li>
                  <li>• Risparmio su acquisto energia: <strong>41.250 × 0,24 €/kWh = 9.900 €/anno</strong></li>
                  <li>• <strong>Beneficio totale annuo: ~ 10.725 €</strong></li>
                  <li className="pt-2 border-t border-gray-300 mt-2">• Costo impianto lordo: <strong>€ 54.000</strong></li>
                  <li>• Credito d'imposta 6% (Transizione 5.0): <strong>€ 3.240</strong></li>
                  <li>• Ammortamento accelerato (risparmio fiscale stimato 24%): <strong>€ 12.960</strong></li>
                  <li>• <strong>Costo netto effettivo: ~ € 37.800</strong></li>
                  <li className="pt-2 border-t border-gray-300 mt-2 font-bold text-green-700">Payback period: ~ 3,5 anni | ROI 25 anni: oltre 230%</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-lg mb-4">Esempio B — Azienda manifatturiera, impianto 100 kWp</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Consumo annuo: <strong>180.000 kWh</strong></li>
                  <li>• Produzione annua impianto: <strong>110.000 kWh</strong></li>
                  <li>• Autoconsumo stimato: <strong>80% → 88.000 kWh</strong></li>
                  <li>• Energia immessa in rete: <strong>22.000 kWh × 0,06 €/kWh = 1.320 €/anno</strong></li>
                  <li>• Risparmio su acquisto energia: <strong>88.000 × 0,25 €/kWh = 22.000 €/anno</strong></li>
                  <li>• <strong>Beneficio totale annuo: ~ 23.320 €</strong></li>
                  <li className="pt-2 border-t border-gray-300 mt-2">• Costo impianto lordo: <strong>€ 95.000</strong></li>
                  <li>• Credito d'imposta (Transizione 5.0): <strong>€ 5.700</strong></li>
                  <li>• Risparmio fiscale ammortamento: <strong>€ 22.800</strong></li>
                  <li>• <strong>Costo netto effettivo: ~ € 66.500</strong></li>
                  <li className="pt-2 border-t border-gray-300 mt-2 font-bold text-green-700">Payback period: ~ 2,9 anni | ROI 25 anni: oltre 780%</li>
                </ul>
              </div>

              {/* 6. Incentivi */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                6. Incentivi per le aziende: credito d'imposta, ammortamento e Comunità Energetiche Rinnovabili
              </h2>
              <p>
                Il quadro degli <strong>incentivi fotovoltaico per imprese nel 2026</strong> è articolato ma vantaggioso.
                Ecco i principali strumenti disponibili:
              </p>

              <div className="space-y-5 my-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Piano Transizione 5.0 — Credito d'imposta</h3>
                  <p className="text-gray-700 text-sm">
                    Il Piano Transizione 5.0 prevede un <strong>credito d'imposta per gli investimenti in efficienza energetica
                    e fonti rinnovabili</strong>, inclusi impianti fotovoltaici aziendali. Le aliquote variano in base
                    alla riduzione dei consumi energetici conseguita: dal <strong>6% fino al 45%</strong> dell'investimento
                    ammissibile, calcolato sulla riduzione percentuale dei consumi del processo produttivo o della struttura.
                    Il beneficio è direttamente utilizzabile in compensazione F24. I dettagli operativi sono definiti
                    dai decreti attuativi vigenti al momento dell'investimento.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Ammortamento accelerato (Industria 4.0 / 5.0)</h3>
                  <p className="text-gray-700 text-sm">
                    Un impianto fotovoltaico aziendale rientra nelle immobilizzazioni materiali deducibili. Per i beni
                    strumentali connessi a processi digitalizzati e a basso impatto ambientale, è possibile applicare
                    l'<strong>ammortamento accelerato al 100% nel primo anno</strong> (o comunque in modo più rapido
                    rispetto all'aliquota ordinaria del 9%). Questo genera un risparmio fiscale immediato pari all'aliquota
                    IRES (24%) applicata al costo del bene, riducendo significativamente il costo netto dell'investimento.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Comunità Energetiche Rinnovabili (CER)</h3>
                  <p className="text-gray-700 text-sm">
                    Le <strong>Comunità Energetiche Rinnovabili</strong> sono una delle novità più rilevanti del 2024-2026.
                    Un'azienda che installa un impianto fotovoltaico può entrare a far parte di una CER con altri soggetti
                    (privati, condomini, enti pubblici) connessi alla stessa cabina primaria. Per l'energia condivisa
                    virtualmente nella CER è riconosciuta una <strong>tariffa incentivante di 0,11 €/kWh</strong> (per
                    impianti fino a 200 kWp) erogata dal GSE per 20 anni, oltre al rimborso delle componenti evitate della
                    bolletta (~0,01 €/kWh). Le CER permettono di valorizzare l'energia che non si riesce ad autoconsumire
                    direttamente, aumentando il ROI dell'impianto.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">IVA agevolata e deducibilità costi</h3>
                  <p className="text-gray-700 text-sm">
                    Per le aziende con partita IVA, l'IVA sull'acquisto dell'impianto è interamente <strong>detraibile</strong>
                    (non è un costo), abbassando di fatto l'esborso iniziale del 22%. Tutti i costi di installazione,
                    manutenzione e monitoraggio sono inoltre deducibili dal reddito d'impresa, generando ulteriore risparmio
                    fiscale anno dopo anno.
                  </p>
                </div>
              </div>

              {/* 7. PPA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                7. Il contratto di Power Purchase Agreement (PPA)
              </h2>
              <p>
                Il <strong>Power Purchase Agreement (PPA)</strong> è una formula contrattuale che permette a un'azienda
                di beneficiare dell'energia solare <strong>senza sostenere il costo iniziale dell'impianto</strong>.
                Funziona così: un soggetto terzo (sviluppatore o investitore) installa l'impianto fotovoltaico sulla
                copertura o sul terreno dell'azienda a proprie spese e vende l'energia prodotta all'azienda stessa a
                un prezzo fisso concordato, generalmente inferiore a quello di mercato.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-green-800 mb-3">Vantaggi del PPA</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Zero investimento iniziale</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Risparmio immediato in bolletta dal primo giorno</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Prezzo energia bloccato per 10-20 anni</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Manutenzione a carico del provider</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Bilancio non gravato da debito</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5">
                  <h4 className="font-bold text-red-800 mb-3">Svantaggi del PPA</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Nessuna proprietà dell'impianto</li>
                    <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Risparmio inferiore rispetto all'acquisto diretto</li>
                    <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Contratto pluriennale vincolante</li>
                    <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Nessun accesso agli incentivi fiscali</li>
                    <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> Complessità in caso di vendita o trasferimento dell'immobile</li>
                  </ul>
                </div>
              </div>
              <p>
                Il PPA è indicato soprattutto per aziende con <strong>liquidità limitata</strong> o che preferiscono non
                immobilizzare capitali. Per le imprese che possono accedere agli incentivi fiscali e che hanno la
                possibilità di investire, l'acquisto diretto rimane più conveniente nel lungo periodo.
              </p>

              {/* 8. Accumulo per aziende */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                8. Accumulo per aziende: quando conviene
              </h2>
              <p>
                I <strong>sistemi di accumulo per aziende</strong> nel 2026 sono disponibili in taglie da 30 kWh fino
                a diversi MWh, con costi che si aggirano tra <strong>400 e 700 €/kWh</strong> installati. A differenza
                del residenziale, la valutazione della convenienza in ambito industriale è più articolata:
              </p>
              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Peak shaving</strong>: abbattere i picchi di potenza assorbita riduce la quota fissa in bolletta legata alla potenza impegnata. Per aziende con forte variabilità dei carichi, questo può valere migliaia di euro l'anno.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Arbitraggio orario</strong>: le aziende in fasce orarie (F1/F2/F3) possono caricare le batterie in fascia F3 (nottata, costi minimi) e scaricarle in fascia F1 (mattina, costi massimi).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Continuità operativa (UPS)</strong>: per aziende dove un'interruzione elettrica causa danni di produzione (es. alimenti, farmaceutica, stampa digitale), l'accumulo funziona da gruppo di continuità.</span>
                </li>
              </ul>
              <p>
                In generale, l'accumulo aziendale <strong>conviene maggiormente</strong> quando l'azienda ha attività
                anche nelle ore serali, ha picchi di consumo elevati o necessita di continuità operativa. Per le PMI
                con sola attività diurna il ROI dell'accumulo è meno immediato e va valutato caso per caso.
              </p>

              {/* 9. Dove installare */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                9. Fotovoltaico su capannone vs pensilina parcheggio vs terreno
              </h2>
              <p>
                La scelta della <strong>superficie di installazione</strong> incide su costi, producibilità e iter
                autorizzativo. Ecco un confronto tra le tre opzioni principali:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Fotovoltaico su capannone industriale</h4>
                  <p className="text-sm text-gray-700">
                    È la soluzione più comune. La copertura del capannone offre ampia superficie utile (spesso 500-2.000 m²
                    per i capannoni del Nord-Est), buona esposizione e costi di installazione contenuti grazie alla struttura
                    già esistente. L'inclinazione del tetto può essere ottimale (15-30°) o sub-ottimale (tetti piani), ma
                    in entrambi i casi si ottengono ottimi risultati. Non richiede ulteriore consumo di suolo.
                    <strong> Costo aggiuntivo rispetto al valore base: nessuno.</strong>
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Pensilina fotovoltaica sul parcheggio</h4>
                  <p className="text-sm text-gray-700">
                    Le <strong>pensiline fotovoltaiche</strong> trasformano il parcheggio aziendale in una piccola centrale
                    energetica. Offrono il doppio beneficio di proteggere i veicoli dagli agenti atmosferici e produrre
                    energia. Sono ideali per integrare colonnine di ricarica. Il costo è superiore rispetto al tetto
                    (struttura metallica aggiuntiva): <strong>si aggiunge circa 300-500 €/kWp</strong> rispetto a un
                    impianto su tetto piano. Può richiedere permesso edilizio (SCIA o PdC a seconda della Regione).
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Impianto fotovoltaico a terra (su terreno)</h4>
                  <p className="text-sm text-gray-700">
                    Gli <strong>impianti a terra</strong> permettono di sfruttare terreni agricoli o incolti di proprietà
                    aziendale, con libertà totale di orientamento e inclinazione dei pannelli. Sono i più produttivi per
                    kWp installato, ma richiedono iter autorizzativi più complessi (VIA, autorizzazione unica regionale per
                    impianti sopra una certa soglia) e consumano suolo, con implicazioni normative crescenti (tutela del
                    paesaggio, normativa agricola). In Friuli Venezia Giulia e Veneto la localizzazione su zone produttive
                    D è generalmente la più agevole.
                  </p>
                </div>
              </div>

              {/* 10. Manutenzione */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                10. Manutenzione e monitoraggio remoto degli impianti industriali
              </h2>
              <p>
                Un <strong>impianto fotovoltaico industriale</strong> ben mantenuto produce in modo costante per 25-30 anni.
                I costi di manutenzione sono contenuti ma non trascurabili: si stima mediamente tra lo <strong>0,5% e l'1%</strong>
                del valore dell'impianto all'anno.
              </p>
              <p>
                Le attività di manutenzione ordinaria includono:
              </p>
              <ul className="list-disc pl-6 space-y-1 my-4 text-sm text-gray-700">
                <li>Pulizia dei pannelli (1-2 volte/anno, fondamentale in zone polverose o vicine a strade)</li>
                <li>Ispezione visiva dei moduli, cablaggi e strutture di supporto</li>
                <li>Verifica termografica per individuare celle difettose (hotspot)</li>
                <li>Controllo e aggiornamento firmware degli inverter</li>
                <li>Test di isolamento e continuità dei circuiti</li>
                <li>Verifica del quadro di protezione e dei sistemi di sicurezza</li>
              </ul>
              <p>
                Il <strong>monitoraggio remoto</strong> è oggi uno standard per gli impianti industriali. Ogni inverter
                moderno trasmette dati in tempo reale a una piattaforma cloud che permette di:
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Monitorare la produzione in tempo reale e confrontarla con le previsioni meteo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rilevare anomalie e guasti entro pochi minuti dall'accadimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Analizzare l'autoconsumo e ottimizzare la strategia energetica aziendale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Generare report automatici per rendicontazione GSE, ESG e CFO</span>
                </li>
              </ul>
              <p>
                Renova Solution offre contratti di O&amp;M (Operation &amp; Maintenance) con SLA garantiti per gli impianti
                installati in Friuli Venezia Giulia e Veneto, con intervento tecnico entro 48 ore in caso di guasto.
              </p>

              {/* 11. Case Study */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                11. Case study: azienda manifatturiera a Pordenone con impianto da 100 kW
              </h2>
              <p>
                Presentiamo il caso reale (dati anonimizzati) di un'<strong>azienda metalmeccanica di Pordenone</strong>
                che nel 2025 ha installato un impianto fotovoltaico da 100 kWp sul tetto del proprio capannone produttivo
                di 1.200 m².
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-lg mb-4">Dati del progetto</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Settore</p>
                    <p className="font-bold">Metalmeccanico (lavorazione acciaio)</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Localizzazione</p>
                    <p className="font-bold">Pordenone, FVG</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Taglia impianto</p>
                    <p className="font-bold">100 kWp (244 pannelli 410 Wp)</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Inverter</p>
                    <p className="font-bold">2x inverter di stringa 50 kW</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Consumo annuo pre-installazione</p>
                    <p className="font-bold">195.000 kWh</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Produzione annua stimata</p>
                    <p className="font-bold">108.000 kWh</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Autoconsumo</p>
                    <p className="font-bold">82% (88.560 kWh)</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Copertura fabbisogno</p>
                    <p className="font-bold">45% del consumo totale</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-lg text-green-800 mb-4">Risultati economici (primo anno)</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Risparmio su acquisto energia (autoconsumo): <strong>€ 22.140</strong> (88.560 kWh × 0,25 €)</li>
                  <li>• Ricavi Ritiro Dedicato energia immessa: <strong>€ 1.166</strong> (19.440 kWh × 0,06 €)</li>
                  <li>• <strong>Beneficio economico totale primo anno: € 23.306</strong></li>
                  <li className="pt-2 border-t border-green-300 mt-2">• Costo impianto: <strong>€ 96.000</strong></li>
                  <li>• Credito d'imposta Transizione 5.0 (8%): <strong>€ 7.680</strong></li>
                  <li>• Risparmio fiscale ammortamento accelerato (24%): <strong>€ 23.040</strong></li>
                  <li>• <strong>Costo netto effettivo: € 65.280</strong></li>
                  <li className="pt-2 border-t border-green-300 mt-2 font-bold text-green-900">Payback period effettivo: 2 anni e 10 mesi</li>
                  <li className="font-bold text-green-900">ROI a 20 anni (con degradazione 0,5%/anno): 614%</li>
                  <li className="font-bold text-green-900">Riduzione CO₂: ~53 tonnellate/anno</li>
                </ul>
              </div>
              <p>
                L'azienda ha anche aderito a una <strong>Comunità Energetica Rinnovabile locale</strong>, valorizzando
                l'energia non autoconsumata con la tariffa incentivante GSE, aumentando ulteriormente il beneficio
                economico annuo di circa <strong>€ 2.100</strong>.
              </p>

              {/* 12. Normativa */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                12. Normativa e iter autorizzativo per impianti commerciali
              </h2>
              <p>
                La <strong>normativa per impianti fotovoltaici aziendali</strong> in Italia è regolata principalmente
                dal D.Lgs. 199/2021 (recepimento della Direttiva RED II) e dai regolamenti regionali. Nel Nord-Est il
                quadro è generalmente favorevole, con procedure snellite per impianti su coperture esistenti.
              </p>

              <div className="space-y-3 my-6 text-sm">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold mb-1">Impianti fino a 10 kWp su edifici esistenti</h4>
                  <p className="text-gray-600">Attività Libera (nessuna comunicazione obbligatoria al Comune, solo comunicazione al GSE per pratiche incentivo).</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold mb-1">Impianti da 10 a 50 kWp su edifici esistenti in zona non vincolata</h4>
                  <p className="text-gray-600">Comunicazione di inizio lavori asseverata (CILA). Procedura rapida, tempi medi 15-30 giorni.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold mb-1">Impianti oltre 50 kWp o in zone vincolate</h4>
                  <p className="text-gray-600">SCIA (Segnalazione Certificata di Inizio Attività) o, in alcuni casi, Permesso di Costruire. In Friuli Venezia Giulia e Veneto le zone industriali D spesso non richiedono procedure complesse anche sopra questa soglia.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold mb-1">Impianti oltre 1 MWp (grandi impianti industriali)</h4>
                  <p className="text-gray-600">Procedura Abilitativa Semplificata (PAS) o Autorizzazione Unica Regionale (AUE), con iter più lunghi (6-18 mesi) e possibile Valutazione di Impatto Ambientale.</p>
                </div>
              </div>
              <p>
                Per le pratiche GSE (connessione alla rete, Ritiro Dedicato, iscrizione al Registro CER), Renova Solution
                gestisce l'intero iter in autonomia per conto del cliente, garantendo tempi certi e conformità normativa
                completa.
              </p>

              {/* 13. Conclusioni e CTA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                13. Conclusioni: il fotovoltaico aziendale è l'investimento del 2026
              </h2>
              <p>
                Nel 2026, il <strong>fotovoltaico per aziende</strong> rappresenta uno degli investimenti con il miglior
                rapporto rischio/rendimento disponibile per le PMI italiane. Con payback period spesso inferiori ai
                4 anni (e in molti casi sotto i 3 anni grazie agli incentivi fiscali), un'aspettativa di vita dell'impianto
                di 25-30 anni e benefici che vanno ben oltre il semplice risparmio in bolletta (reputazione ESG, protezione
                dal rischio energetico, competitività di costo), l'installazione di un impianto fotovoltaico industriale
                è una decisione strategica che ogni imprenditore dovrebbe seriamente valutare.
              </p>
              <p>
                I fondamentali sono chiari: <strong>l'energia costa, continuerà a costare</strong> e produrla in proprio
                è diventato tecnicamente semplice, economicamente conveniente e normativamante accessibile. Il rischio
                di aspettare è molto più alto del rischio di investire.
              </p>
              <p>
                <strong>Renova Solution</strong> opera in Friuli Venezia Giulia e Veneto con un team specializzato in
                impianti fotovoltaici industriali, dalla progettazione alla manutenzione, passando per l'intero iter
                autorizzativo e le pratiche GSE. Contattaci per un'analisi energetica gratuita della tua azienda:
                in 48 ore ti forniremo un quadro completo del potenziale risparmio e del ROI atteso.
              </p>

              <div className="bg-[#C8E600] rounded-xl p-6 my-8 text-center">
                <h3 className="text-xl font-bold text-black mb-2">Richiedi un'analisi energetica gratuita per la tua azienda</h3>
                <p className="text-gray-800 text-sm mb-4">
                  Scopri quanto puoi risparmiare con un impianto fotovoltaico su misura per la tua impresa.
                  Preventivo dettagliato con calcolo ROI, incentivi applicabili e piano di ritorno dell'investimento.
                </p>
                <Link
                  to="/contatti"
                  className="inline-block bg-black text-[#C8E600] font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
                >
                  Contattaci ora — è gratuito
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Articoli correlati</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/blog/fotovoltaico-accumulo-2026"
                  className="block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors border border-gray-200 hover:border-[#C8E600]"
                >
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Fotovoltaico</span>
                  <p className="font-bold text-gray-900 mt-1 text-sm leading-snug">
                    Fotovoltaico con accumulo 2026: conviene davvero?
                  </p>
                </Link>
                <Link
                  to="/blog/manutenzione-fotovoltaico-2026"
                  className="block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors border border-gray-200 hover:border-[#C8E600]"
                >
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Fotovoltaico</span>
                  <p className="font-bold text-gray-900 mt-1 text-sm leading-snug">
                    Manutenzione fotovoltaico 2026: guida completa
                  </p>
                </Link>
                <Link
                  to="/blog/detrazioni-fiscali-2026"
                  className="block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors border border-gray-200 hover:border-[#C8E600]"
                >
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Incentivi</span>
                  <p className="font-bold text-gray-900 mt-1 text-sm leading-snug">
                    Detrazioni fiscali 2026: tutte le agevolazioni
                  </p>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'fotovoltaico aziende',
                  'impianto industriale',
                  'ROI fotovoltaico',
                  'incentivi imprese',
                  'autoconsumo',
                  'capannone',
                  'PPA',
                  'Transizione 5.0',
                  'CER',
                  '2026'
                ].map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
