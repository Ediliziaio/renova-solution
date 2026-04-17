import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle, Euro } from 'lucide-react';

export default function FotovoltaicoContoTermico2026() {
  const articleData = {
    title: 'Conto Termico 3.0 nel 2026: come funziona, chi può accedere e quanto si risparmia',
    excerpt: 'Guida completa al Conto Termico 3.0 nel 2026: interventi ammessi, calcolo degli incentivi, importi massimi, procedura GSE e confronto con l\'Ecobonus. Tutto quello che devi sapere per ottenere il massimo rimborso.',
    date: '2 Aprile 2026',
    dateISO: '2026-04-02',
    readTime: '12 min',
    author: 'Renova Team',
    category: 'Fisco',
    image: '/images/climatizzazione.jpg',
    slug: 'conto-termico-3-2026'
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
      '@type': 'Organization',
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
    keywords: 'conto termico 3.0 2026, incentivi pompe di calore, conto termico come funziona, conto termico requisiti, conto termico importo, incentivi riscaldamento 2026, conto termico fotovoltaico',
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
        keywords="conto termico 3.0 2026, incentivi pompe di calore, conto termico come funziona, conto termico requisiti, conto termico importo, incentivi riscaldamento 2026, conto termico fotovoltaico"
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
                Il <strong>Conto Termico 3.0</strong> è il principale strumento di incentivazione diretta per gli interventi
                di efficienza energetica nel settore termico. Nel 2026 rappresenta una delle opportunità più concrete
                per chi vuole installare una <strong>pompa di calore</strong>, un impianto solare termico o una caldaia
                a biomassa: a differenza delle detrazioni fiscali, il Conto Termico eroga un <strong>rimborso in denaro
                direttamente sul conto corrente</strong> del beneficiario, spesso entro soli due mesi.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Cos'è il Conto Termico 3.0 e perché è importante nel 2026</h2>
              <p>
                Il <strong>Conto Termico</strong> è un meccanismo di incentivazione istituito dal Decreto Ministeriale
                del 28 dicembre 2012 e successivamente aggiornato (da cui la denominazione "3.0" che indica la versione
                in vigore con le modifiche più recenti). Il gestore del programma è il <strong>GSE (Gestore dei Servizi
                Energetici)</strong>, l'ente pubblico italiano che si occupa di promuovere lo sviluppo sostenibile
                attraverso fonti rinnovabili e risparmio energetico.
              </p>
              <p>
                Nel 2026, il Conto Termico assume un'importanza ancora maggiore per due ragioni fondamentali. Prima
                di tutto, con la progressiva riduzione delle aliquote di detrazione fiscale per alcuni interventi,
                l'incentivo diretto del Conto Termico diventa spesso la scelta più vantaggiosa. In secondo luogo,
                la spinta verso la <strong>transizione energetica</strong> imposta dalle direttive europee (in
                particolare la direttiva Case Green) rende urgente per milioni di proprietari italiani aggiornare
                i propri impianti di riscaldamento.
              </p>
              <p>
                A differenza di quanto accade con le detrazioni fiscali, che richiedono anni per essere recuperate
                attraverso la dichiarazione dei redditi, il Conto Termico funziona come un <strong>contributo
                a fondo perduto</strong>: il GSE accredita l'incentivo direttamente sul conto corrente del
                beneficiario, in un'unica soluzione (per importi fino a 5.000€) oppure in rate annuali (per
                importi superiori).
              </p>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6 border-l-4 border-[#C8E600]">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8E600]" /> Il Conto Termico in sintesi
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Tipo di incentivo:</strong> contributo diretto in denaro (non detrazione fiscale)</li>
                  <li>• <strong>Gestore:</strong> GSE – Gestore dei Servizi Energetici</li>
                  <li>• <strong>Beneficiari:</strong> privati, condomini, Pubblica Amministrazione, imprese</li>
                  <li>• <strong>Erogazione:</strong> unica rata entro 2 mesi (importi fino a 5.000€) o rate annuali</li>
                  <li>• <strong>Interventi principali:</strong> pompe di calore, solare termico, caldaie biomassa, building automation</li>
                </ul>
              </div>

              {/* Differenze CT vs Ecobonus */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Differenze tra Conto Termico e detrazione fiscale (Ecobonus)</h2>
              <p>
                La confusione tra <strong>Conto Termico</strong> ed <strong>Ecobonus</strong> è molto comune, ma si tratta
                di strumenti profondamente diversi. Capire la differenza è il primo passo per scegliere il meccanismo
                più conveniente per il proprio intervento.
              </p>
              <p>
                L'<strong>Ecobonus</strong> è una detrazione IRPEF/IRES che riduce le imposte dovute, spalmata su
                10 anni nella dichiarazione dei redditi. Chi paga poche tasse (o non ne paga affatto, come molti
                pensionati o proprietari senza reddito imponibile sufficiente) potrebbe non riuscire a recuperare
                l'intero importo detraibile. Il Conto Termico, invece, è un <strong>rimborso in denaro reale</strong>,
                indipendente dalla situazione fiscale del richiedente.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-3 text-left font-bold">Caratteristica</th>
                      <th className="p-3 text-left font-bold">Conto Termico 3.0</th>
                      <th className="p-3 text-left font-bold">Ecobonus 50%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white">
                      <td className="p-3 font-medium">Tipo di beneficio</td>
                      <td className="p-3 text-green-700 font-semibold">Contributo in denaro diretto</td>
                      <td className="p-3">Detrazione IRPEF/IRES</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-medium">Erogazione</td>
                      <td className="p-3">Entro 2 mesi (sotto 5.000€)</td>
                      <td className="p-3">In 10 anni dalla dichiarazione</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-3 font-medium">Requisiti reddituali</td>
                      <td className="p-3 text-green-700">Nessuno</td>
                      <td className="p-3">Serve capienza IRPEF</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-medium">Percentuale massima</td>
                      <td className="p-3">Fino al 65% della spesa ammissibile</td>
                      <td className="p-3">50% della spesa sostenuta</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-3 font-medium">Chi gestisce</td>
                      <td className="p-3">GSE</td>
                      <td className="p-3">Agenzia delle Entrate</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 font-medium">Domanda da presentare a</td>
                      <td className="p-3">Portale GSE (online)</td>
                      <td className="p-3">ENEA + dichiarazione redditi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Interventi ammessi */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Interventi ammessi al Conto Termico 3.0</h2>
              <p>
                Il Conto Termico 3.0 finanzia una serie di interventi di <strong>piccola generazione di energia
                termica da fonti rinnovabili</strong> e di <strong>incremento dell'efficienza energetica</strong>
                degli edifici esistenti. Ecco i principali:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Pompe di calore</h3>
              <p>
                Le <strong>pompe di calore aria-aria, aria-acqua, acqua-acqua e geotermiche</strong> sono tra gli
                interventi più incentivati dal Conto Termico. Questi sistemi possono produrre calore per il
                riscaldamento degli ambienti, per la produzione di acqua calda sanitaria o per entrambe le funzioni
                (pompe di calore ibride). L'incentivo si applica sia alla sostituzione di un vecchio generatore
                termico sia all'installazione in edifici già dotati di un impianto di distribuzione del calore.
              </p>
              <p>
                Un requisito fondamentale è che la pompa di calore installata abbia un <strong>COP (Coefficient of
                Performance) minimo</strong> specificato nelle tabelle allegate al decreto. Per le pompe di calore
                aria-acqua destinate al riscaldamento, il COP minimo è generalmente 2,5 (misurato a +7°C esterno
                e +35°C mandata), requisito facilmente soddisfatto dai modelli più recenti.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Solare termico</h3>
              <p>
                I <strong>collettori solari termici</strong> per la produzione di acqua calda sanitaria e/o per
                il riscaldamento degli ambienti sono incentivati a condizione che utilizzino il marchio europeo
                Solar Keymark o certificazione equivalente. Rientrano nell'incentivo sia gli impianti con
                circolazione forzata sia quelli a circolazione naturale (termosifone), con qualsiasi superficie
                di captazione.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Caldaie e stufe a biomassa</h3>
              <p>
                Le <strong>caldaie a biomassa</strong> (pellet, cippato, legna), le stufe e i caminetti con
                termostato e sistema di controllo automatico dell'aria rientrano tra gli interventi ammissibili.
                Condizione necessaria è che abbiano emissioni di particolato inferiori a determinati limiti
                (generalmente 4 stellette EU Ecolabel o classe 5 EN 303-5 per le caldaie, classe 5 EN 13240
                per le stufe) e rendimento stagionale elevato.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Building Automation e sistemi di controllo</h3>
              <p>
                Il Conto Termico 3.0 incentiva anche l'installazione di <strong>sistemi di building automation</strong>
                per la gestione intelligente degli impianti termici. Questo include cronotermostati intelligenti,
                sistemi di controllo remoto dell'impianto di riscaldamento/raffrescamento, valvole termostatiche
                elettroniche e sistemi di building management di classe A (secondo la norma EN 15232). L'incentivo
                è cumulabile con quello per la sostituzione della pompa di calore o della caldaia.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Isolamento e sostituzione infissi (solo per PA)</h3>
              <p>
                Va precisato che gli interventi di <strong>isolamento termico dell'involucro</strong> (cappotto,
                sostituzione infissi) sono ammessi al Conto Termico solo per i soggetti della <strong>Pubblica
                Amministrazione</strong>. I privati che intendono coibentare o sostituire le finestre devono
                ricorrere all'Ecobonus 50%.
              </p>

              {/* Chi può accedere */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Chi può accedere al Conto Termico 3.0</h2>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-green-800 mb-3">Privati</h4>
                  <ul className="text-green-900 space-y-1 text-sm">
                    <li>• Persone fisiche</li>
                    <li>• Condomini</li>
                    <li>• Soggetti titolari di reddito d'impresa o di lavoro autonomo</li>
                    <li>• Società semplici</li>
                    <li>• Associazioni e fondazioni</li>
                    <li>• Enti del terzo settore</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5">
                  <h4 className="font-bold text-blue-800 mb-3">Pubblica Amministrazione</h4>
                  <ul className="text-blue-900 space-y-1 text-sm">
                    <li>• Comuni e Province</li>
                    <li>• Regioni</li>
                    <li>• Scuole e università statali</li>
                    <li>• Ospedali e ASL</li>
                    <li>• Enti pubblici non economici</li>
                    <li>• Aziende pubbliche di servizi</li>
                  </ul>
                </div>
              </div>

              <p>
                L'accesso è consentito a prescindere dal titolo di possesso dell'immobile: possono fare domanda
                sia i <strong>proprietari</strong> dell'edificio sia gli <strong>usufruttuari</strong>, sia chi
                detiene l'immobile in affitto (con consenso del proprietario), sia chi ha un diritto reale
                di godimento sull'immobile.
              </p>
              <p>
                Una condizione imprescindibile è che l'<strong>edificio in cui viene realizzato l'intervento
                esista già</strong> e sia dotato di impianto di riscaldamento funzionante (con alcune eccezioni
                per il solare termico installato su edifici di nuova costruzione). Non sono ammessi edifici
                di nuova costruzione per la maggior parte degli interventi.
              </p>

              {/* Calcolo incentivo */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Come si calcola l'incentivo: formule semplificate con esempi concreti</h2>
              <p>
                Il calcolo dell'incentivo del Conto Termico si basa sull'<strong>energia producibile o risparmiata
                stimata</strong> dall'impianto nel corso della sua vita utile. La formula generale è:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6 font-mono text-sm">
                <p className="font-bold text-gray-900 mb-2">Formula base:</p>
                <p className="text-gray-700"><strong>I = P × η × h × τ × c</strong></p>
                <ul className="mt-3 text-gray-600 space-y-1 font-sans">
                  <li><strong>I</strong> = incentivo totale (€)</li>
                  <li><strong>P</strong> = potenza termica dell'impianto (kW)</li>
                  <li><strong>η</strong> = rendimento stagionale</li>
                  <li><strong>h</strong> = ore equivalenti di funzionamento annue</li>
                  <li><strong>τ</strong> = durata dell'incentivo in anni (2 o 5 anni a seconda dell'intervento)</li>
                  <li><strong>c</strong> = tariffa incentivante (€/kWh)</li>
                </ul>
              </div>

              <p>
                In pratica, il GSE ha predisposto delle <strong>tabelle semplificate</strong> che permettono di
                calcolare l'incentivo in funzione della potenza installata e della zona climatica. Vediamo due
                esempi concreti:
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-3">Esempio 1: Pompa di calore aria-acqua 10 kW (zona E – Friuli VG)</h4>
                <ul className="text-green-900 space-y-2">
                  <li>• Potenza nominale: <strong>10 kW</strong></li>
                  <li>• Tariffa incentivante zona E: <strong>0,112 €/kWh</strong></li>
                  <li>• Ore equivalenti zona E: <strong>1.750 h/anno</strong></li>
                  <li>• Durata incentivo: <strong>2 anni</strong></li>
                  <li>• <strong>Incentivo totale stimato: circa 3.920 €</strong></li>
                  <li>• Erogazione: unica soluzione entro 2 mesi (importo inferiore a 5.000€)</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-blue-800 mb-3">Esempio 2: Pompa di calore geotermica 15 kW (zona D – Veneto)</h4>
                <ul className="text-blue-900 space-y-2">
                  <li>• Potenza nominale: <strong>15 kW</strong></li>
                  <li>• Tariffa incentivante zona D: <strong>0,116 €/kWh</strong></li>
                  <li>• Ore equivalenti zona D: <strong>1.500 h/anno</strong></li>
                  <li>• Durata incentivo: <strong>2 anni</strong></li>
                  <li>• <strong>Incentivo totale stimato: circa 5.220 €</strong></li>
                  <li>• Erogazione: in 2 rate annuali (importo superiore a 5.000€)</li>
                </ul>
              </div>

              <p>
                Per il <strong>solare termico</strong>, il calcolo è più semplice e si basa sulla superficie
                netta dei collettori: l'incentivo tipico per una famiglia è nell'ordine di <strong>800-1.200€</strong>
                per un impianto di 4-6 m².
              </p>

              {/* Importi massimi */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Importi massimi per tipo di intervento</h2>
              <p>
                Il decreto fissa dei <strong>limiti massimi di incentivo</strong> per ciascuna tipologia di
                intervento, che variano in base alla potenza installata e al soggetto beneficiario.
                Di seguito la tabella riepilogativa per i privati (soggetti non PA):
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-3 text-left font-bold">Tipo di intervento</th>
                      <th className="p-3 text-left font-bold">Potenza max</th>
                      <th className="p-3 text-left font-bold">Incentivo max totale</th>
                      <th className="p-3 text-left font-bold">Durata incentivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white">
                      <td className="p-3">Pompa di calore elettrica (riscaldamento)</td>
                      <td className="p-3">500 kW</td>
                      <td className="p-3 font-semibold text-green-700">fino a 35.000 €</td>
                      <td className="p-3">2 anni</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3">Pompa di calore per ACS</td>
                      <td className="p-3">500 kW</td>
                      <td className="p-3 font-semibold text-green-700">fino a 18.000 €</td>
                      <td className="p-3">2 anni</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-3">Collettori solari termici</td>
                      <td className="p-3">—</td>
                      <td className="p-3 font-semibold text-green-700">fino a 12.000 €</td>
                      <td className="p-3">2 anni</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3">Caldaia a pellet/cippato</td>
                      <td className="p-3">500 kW</td>
                      <td className="p-3 font-semibold text-green-700">fino a 45.000 €</td>
                      <td className="p-3">2 anni</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="p-3">Stufa/camino a biomassa</td>
                      <td className="p-3">35 kW</td>
                      <td className="p-3 font-semibold text-green-700">fino a 5.000 €</td>
                      <td className="p-3">2 anni</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3">Building automation (classe A)</td>
                      <td className="p-3">—</td>
                      <td className="p-3 font-semibold text-green-700">fino a 5.000 €</td>
                      <td className="p-3">2 anni</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3">Solare termico + fotovoltaico integrato</td>
                      <td className="p-3">—</td>
                      <td className="p-3 font-semibold text-green-700">fino a 65.000 €</td>
                      <td className="p-3">5 anni</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <p className="flex items-start gap-2 text-amber-900">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Attenzione:</strong> gli importi massimi si riferiscono all'incentivo totale, non
                    alla spesa sostenuta. La percentuale di copertura varia dal 40% al 65% della spesa ammissibile
                    a seconda dell'intervento e della zona climatica. Consultare sempre le tabelle ufficiali
                    del GSE o affidarsi a un professionista per il calcolo preciso.
                  </span>
                </p>
              </div>

              {/* Tempi di erogazione */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Tempi di erogazione: entro 2 mesi per importi sotto 5.000€</h2>
              <p>
                Uno dei punti di forza del Conto Termico rispetto ad altri strumenti incentivanti è la
                <strong> rapidità di erogazione</strong>. Il decreto distingue due modalità:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Incentivo sotto 5.000€
                  </h4>
                  <p className="text-green-900 text-sm">
                    <strong>Unica soluzione entro 60 giorni</strong> dalla data di ricevimento della documentazione
                    completa da parte del GSE. Ideale per impianti di piccola taglia come solare termico
                    residenziale, stufe a pellet o piccole pompe di calore.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <Euro className="w-5 h-5" /> Incentivo sopra 5.000€
                  </h4>
                  <p className="text-blue-900 text-sm">
                    <strong>Rate annuali per 2 o 5 anni</strong> a seconda della tipologia di intervento.
                    Il GSE eroga la prima rata entro 60 giorni dall'approvazione della domanda, le successive
                    nelle stesse date degli anni seguenti.
                  </p>
                </div>
              </div>

              <p>
                I termini di 60 giorni decorrono dalla ricezione da parte del GSE della documentazione
                completa e corretta. In caso di documentazione incompleta, il GSE sospende i termini e
                richiede integrazioni: è quindi fondamentale presentare una domanda accurata e completa
                fin dall'inizio.
              </p>

              {/* Procedura GSE */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Come presentare la domanda al GSE: procedura step-by-step</h2>
              <p>
                La domanda di accesso al Conto Termico si presenta esclusivamente in <strong>modalità online</strong>
                attraverso il portale del GSE (gse.it), nella sezione dedicata al Conto Termico. Ecco la procedura
                passo dopo passo:
              </p>

              <ol className="space-y-4 my-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#C8E600] text-black rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <strong className="text-gray-900">Registrazione sul portale GSE</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Se non si dispone già di un account, registrarsi su gse.it con dati anagrafici e codice
                      fiscale. La registrazione è gratuita e istantanea.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#C8E600] text-black rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <strong className="text-gray-900">Accesso alla sezione Conto Termico</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Dal portale GSE, selezionare "Conto Termico" e poi "Nuova richiesta di incentivo".
                      Il sistema guiderà attraverso una procedura guidata.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#C8E600] text-black rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <strong className="text-gray-900">Inserimento dati dell'intervento</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Compilare le schede relative all'edificio (tipologia, superficie, zona climatica,
                      classe energetica prima e dopo), all'intervento (tipo, potenza, marca e modello
                      dell'apparecchio) e all'installatore.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#C8E600] text-black rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <strong className="text-gray-900">Caricamento della documentazione</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Allegare tutti i documenti richiesti (vedi sezione successiva) in formato PDF,
                      rispettando i limiti di dimensione indicati dal portale.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#C8E600] text-black rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <div>
                    <strong className="text-gray-900">Firma digitale e invio</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      La domanda deve essere firmata digitalmente (firma digitale qualificata o CRS/CNS)
                      dal soggetto beneficiario o da un delegato con procura. Dopo la firma, inviare
                      la domanda tramite il portale.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#C8E600] text-black rounded-full flex items-center justify-center font-bold text-sm">6</span>
                  <div>
                    <strong className="text-gray-900">Attesa di istruttoria e accettazione</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Il GSE effettua un controllo formale e, se la documentazione è completa, emette
                      la "Scheda di Adesione". Il richiedente ha 30 giorni per accettarla. Solo dopo
                      l'accettazione iniziano a decorrere i 60 giorni per l'erogazione.
                    </p>
                  </div>
                </li>
              </ol>

              <p>
                <strong>Attenzione alle tempistiche:</strong> la domanda al GSE deve essere presentata
                <strong> entro 60 giorni dalla data di fine lavori</strong>. Superato questo termine,
                si perde il diritto all'incentivo. Affidatevi sempre a un'azienda installatrice esperta
                che vi assista nella compilazione della pratica.
              </p>

              {/* Documentazione */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Documentazione necessaria</h2>
              <p>
                La documentazione richiesta varia leggermente in base alla tipologia di intervento e al
                soggetto beneficiario. Per i privati che installano una pompa di calore o un solare termico,
                i documenti generalmente richiesti sono:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4">Documenti standard per i privati</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>Documento d'identità</strong> del richiedente in corso di validità</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>Titolo di possesso dell'immobile</strong> (atto di proprietà, contratto di locazione con autorizzazione del proprietario, ecc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>Fattura dell'installazione</strong> con IVA agevolata al 10%, intestata al richiedente, con indicazione del numero di matricola dell'apparecchio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>Scheda tecnica dell'apparecchio</strong> (pompa di calore, solare termico, ecc.) con prestazioni certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>Relazione tecnica dell'installatore</strong> con dati dell'impianto, calcolo dell'incentivo e dichiarazione di conformità</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>APE (Attestato di Prestazione Energetica)</strong> post-intervento, per gli interventi che lo richiedono</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>Comunicazione ENEA</strong> (per gli interventi soggetti anche a Ecobonus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span><strong>IBAN</strong> del conto corrente sul quale ricevere l'incentivo</span>
                  </li>
                </ul>
              </div>

              <p>
                Per <strong>interventi di importo superiore a 50.000€</strong> è richiesta anche
                l'asseverazione di un <strong>tecnico abilitato</strong> (ingegnere, architetto,
                geometra o perito industriale iscritto all'albo), che certifichi la conformità
                dell'intervento ai requisiti minimi del decreto.
              </p>

              {/* CT + Fotovoltaico */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Conto Termico + fotovoltaico: si possono combinare?</h2>
              <p>
                Questa è una delle domande più frequenti che riceviamo dai nostri clienti in Friuli
                Venezia Giulia e Veneto. La risposta è articolata: il Conto Termico, in linea di
                principio, <strong>non incentiva direttamente il fotovoltaico</strong> (che è invece
                incentivato tramite le tariffe di scambio sul posto e l'autoconsumo). Tuttavia,
                esistono importanti connessioni tra i due sistemi.
              </p>
              <p>
                La combinazione più efficace è quella della <strong>pompa di calore alimentata da
                fotovoltaico</strong>: in questo scenario, si può accedere al Conto Termico per
                la pompa di calore e beneficiare contemporaneamente degli incentivi del
                fotovoltaico (GSE Scambio sul posto, detrazione fiscale 50%) per l'impianto
                solare. I due incentivi non sono in concorrenza tra loro e possono essere
                richiesti separatamente.
              </p>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4">Scenario ottimale: pompa di calore + fotovoltaico</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Pompa di calore 10 kW:</strong> incentivo Conto Termico circa 3.900€ (unica soluzione)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Impianto fotovoltaico 6 kWp:</strong> detrazione fiscale 50% in 10 anni</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Risparmio in bolletta:</strong> fino all'80% dei costi di riscaldamento e dell'energia elettrica</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Tempo di ripiego:</strong> 8-10 anni considerando entrambi gli incentivi</span>
                  </div>
                </div>
              </div>

              <p>
                Esiste anche la possibilità di installare un <strong>sistema solare termico + fotovoltaico
                ibrido</strong> (impianti PVT), che produce contemporaneamente energia elettrica e calore
                termico. In questo caso, la quota termica del sistema può beneficiare del Conto Termico,
                mentre la quota fotovoltaica viene incentivata separatamente.
              </p>

              {/* CT vs Ecobonus */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Conto Termico vs Ecobonus 50%: quando conviene l'uno o l'altro</h2>
              <p>
                Non esiste una risposta universale: la scelta dipende dalla situazione fiscale del
                beneficiario, dalla tipologia di intervento e dall'importo della spesa. Ecco una
                guida pratica:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">Preferire il Conto Termico quando...</h4>
                  <ul className="text-green-900 space-y-2 text-sm">
                    <li>• Si ha <strong>poca capienza IRPEF</strong> (pensionati, lavoratori part-time)</li>
                    <li>• Si vuole il rimborso <strong>in tempi brevi</strong> (entro 2 mesi)</li>
                    <li>• Si installa una <strong>pompa di calore o solare termico</strong></li>
                    <li>• L'importo dell'incentivo è <strong>inferiore a 5.000€</strong> (unica rata)</li>
                    <li>• Si preferisce un <strong>contributo certo</strong> indipendente dalla dichiarazione dei redditi</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">Preferire l'Ecobonus 50% quando...</h4>
                  <ul className="text-blue-900 space-y-2 text-sm">
                    <li>• Si ha <strong>alta capienza IRPEF</strong> (redditi elevati)</li>
                    <li>• Si realizzano interventi <strong>sull'involucro</strong> (infissi, cappotto)</li>
                    <li>• Non si ha necessità di liquidità immediata</li>
                    <li>• L'intervento non è tra quelli ammessi al Conto Termico per privati</li>
                    <li>• Si vuole massimizzare il <strong>risparmio fiscale complessivo</strong></li>
                  </ul>
                </div>
              </div>

              <p>
                Per alcune tipologie di intervento (come la sostituzione della caldaia con una pompa di
                calore), in linea di principio entrambi gli strumenti possono essere applicabili,
                ma <strong>non sono cumulabili sullo stesso intervento</strong>. Bisogna quindi scegliere
                uno dei due percorsi prima di iniziare i lavori.
              </p>

              {/* Errori comuni */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Errori comuni da evitare nella richiesta</h2>
              <p>
                L'esperienza accumulata dalla gestione di centinaia di pratiche in Friuli Venezia Giulia
                e Veneto ci ha permesso di identificare gli errori più frequenti che portano al rigetto
                della domanda o alla riduzione dell'incentivo:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">Presentare la domanda oltre i 60 giorni dalla fine lavori</strong>
                    <p className="text-red-700 text-sm mt-1">
                      Il termine di 60 giorni è perentorio. Superarlo significa perdere completamente
                      il diritto all'incentivo, senza possibilità di sanatoria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">Fattura non intestata al beneficiario dell'incentivo</strong>
                    <p className="text-red-700 text-sm mt-1">
                      La fattura dell'installazione deve essere intestata alla stessa persona che
                      presenta la domanda al GSE. Errori in questo senso sono tra i più comuni
                      e difficili da correggere a posteriori.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">Apparecchio non certificato o fuori listino GSE</strong>
                    <p className="text-red-700 text-sm mt-1">
                      Non tutti i modelli di pompe di calore o collettori solari sono ammessi: il GSE
                      aggiorna periodicamente l'elenco dei prodotti eligible. Verificare sempre che
                      il modello scelto sia presente nell'elenco prima dell'acquisto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">Mancata comunicazione ENEA (per gli interventi soggetti)</strong>
                    <p className="text-red-700 text-sm mt-1">
                      Alcuni interventi richiedono anche la comunicazione all'ENEA entro 90 giorni
                      dalla fine lavori. Dimenticarsi di questo adempimento può compromettere
                      anche l'accesso all'Ecobonus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">Documentazione tecnica incompleta o errata</strong>
                    <p className="text-red-700 text-sm mt-1">
                      La relazione tecnica dell'installatore deve contenere tutti i dati previsti
                      dal decreto. Dati mancanti (come il numero di targa della caldaia dismessa o
                      il COP effettivo misurato) portano a richieste di integrazione che allungano
                      i tempi e rischiano di far scadere i termini.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-800">Installazione su edificio non idoneo</strong>
                    <p className="text-red-700 text-sm mt-1">
                      Il Conto Termico richiede che l'edificio abbia già un impianto di riscaldamento
                      preesistente (salvo eccezioni). Edifici di nuova costruzione o privi di impianto
                      termico non sono ammissibili per la maggior parte degli interventi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusioni CTA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Conclusioni: sfrutta il Conto Termico 3.0 con Renova Solution</h2>
              <p>
                Il <strong>Conto Termico 3.0 nel 2026</strong> è uno degli strumenti più efficaci e sottoutilizzati
                per chi vuole rinnovare il proprio impianto di riscaldamento o raffrescamento. A differenza delle
                detrazioni fiscali, eroga un <strong>contributo reale in denaro</strong>, disponibile in tempi
                rapidi e accessibile a tutti, indipendentemente dal reddito.
              </p>
              <p>
                I vantaggi sono chiari:
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rimborso diretto sul conto corrente, non detrazione da dichiarazione dei redditi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Erogazione rapida: entro 60 giorni per importi fino a 5.000€</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Copertura fino al 65% della spesa ammissibile per le pompe di calore</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Cumulabile con il fotovoltaico per un risparmio energetico totale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Nessuna limitazione di reddito o capienza fiscale</span>
                </li>
              </ul>
              <p>
                La gestione della pratica richiede attenzione e competenza: errori nella documentazione
                o nel rispetto dei termini possono vanificare l'intero incentivo. Per questo motivo,
                affidarsi a un'azienda specializzata è fondamentale.
              </p>

              <div className="bg-gray-900 rounded-2xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Vuoi installare una pompa di calore o un solare termico?
                </h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  <strong className="text-[#C8E600]">Renova Solution</strong> opera in Friuli Venezia Giulia e Veneto.
                  Gestiamo noi tutta la pratica GSE: dalla valutazione iniziale alla ricezione dell'incentivo.
                  Richiedi un preventivo gratuito e scopri quanto puoi risparmiare già quest'anno.
                </p>
                <Link
                  to="/contatti"
                  className="inline-block bg-[#C8E600] text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-lg"
                >
                  Richiedi consulenza gratuita
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articoli correlati</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link
                to="/blog/detrazioni-fiscali-2026"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src="/images/detrazione.jpg"
                    alt="Detrazioni fiscali 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#C8E600] uppercase tracking-wide">Fisco</span>
                  <h3 className="font-semibold text-gray-900 mt-1 text-sm leading-snug group-hover:text-[#8aad00] transition-colors">
                    Detrazioni fiscali 2026: guida completa agli incentivi per la casa
                  </h3>
                </div>
              </Link>

              <Link
                to="/blog/pompa-calore-vs-caldaia-2026"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src="/images/climatizzazione.jpg"
                    alt="Pompa di calore vs caldaia 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#C8E600] uppercase tracking-wide">Riscaldamento</span>
                  <h3 className="font-semibold text-gray-900 mt-1 text-sm leading-snug group-hover:text-[#8aad00] transition-colors">
                    Pompa di calore vs caldaia nel 2026: quale conviene davvero?
                  </h3>
                </div>
              </Link>

              <Link
                to="/blog/fotovoltaico-accumulo-2026"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src="/images/batteria-accumulo.jpg"
                    alt="Fotovoltaico con accumulo 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#C8E600] uppercase tracking-wide">Fotovoltaico</span>
                  <h3 className="font-semibold text-gray-900 mt-1 text-sm leading-snug group-hover:text-[#8aad00] transition-colors">
                    Fotovoltaico con accumulo 2026: conviene davvero? Analisi costi-benefici
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
