import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function ClasseEnergeticaCasa2026() {
  const articleData = {
    title: 'Classe energetica della casa: cos\'è, come migliorarla e quanto vale nel 2026',
    excerpt: 'Guida completa alla classe energetica degli immobili nel 2026: dalla scala A4-G all\'APE, dalla Direttiva Case Green agli interventi più efficaci per migliorare la classe e aumentare il valore della casa.',
    date: '1 Marzo 2026',
    dateISO: '2026-03-01',
    readTime: '12 min',
    author: 'Laura Rossi',
    category: 'Ristrutturazione',
    image: '/images/ristrutturazione.jpg',
    slug: 'classe-energetica-casa-2026'
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
        url: 'https://renovasolution.it/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://renovasolution.it/blog/${articleData.slug}`
    },
    keywords: 'classe energetica casa, APE attestato prestazione energetica, migliorare classe energetica, classe energetica immobile, certificazione energetica costo, direttiva case green, classe energetica e valore casa',
    articleSection: articleData.category
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://renovasolution.it/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://renovasolution.it/blog' },
      { '@type': 'ListItem', position: 3, name: articleData.title, item: `https://renovasolution.it/blog/${articleData.slug}` }
    ]
  };

  return (
    <>
      <SEO
        title={`${articleData.title} | Renova Solution`}
        description={articleData.excerpt}
        keywords="classe energetica casa, APE attestato prestazione energetica, migliorare classe energetica, classe energetica immobile, certificazione energetica costo, direttiva case green, classe energetica e valore casa"
        ogType="article"
        canonical={`https://renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
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
                La <strong>classe energetica della casa</strong> è diventata uno dei parametri più importanti nel
                mercato immobiliare italiano. Nel 2026, con la Direttiva Case Green già in vigore e i bonus
                fiscali ridisegnati, conoscere la propria classe energetica e sapere come migliorarla non è
                più solo una questione di risparmio in bolletta: è un fattore determinante per il <strong>valore
                dell'immobile</strong>, la facilità di vendita o locazione e l'accesso alle detrazioni fiscali.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                1. Cos'è la classe energetica e perché conta nel 2026
              </h2>
              <p>
                La <strong>classe energetica di un immobile</strong> è un indicatore sintetico che esprime quanto
                energia consuma un edificio per riscaldarsi, raffrescarsi, produrre acqua calda sanitaria e,
                nei sistemi più moderni, illuminarsi. Viene calcolata sulla base dell'<strong>Indice di Prestazione
                Energetica Globale Non Rinnovabile (IPE<sub>GL,nren</sub>)</strong>, espresso in kWh/m²anno.
              </p>
              <p>
                Nel 2026 questo indicatore conta più che mai per tre ragioni fondamentali:
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Valore di mercato:</strong> gli istituti di credito e i compratori valutano la classe energetica prima di qualsiasi trattativa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Obblighi normativi:</strong> la Direttiva Europea EPBD (Case Green) impone precisi obiettivi di ristrutturazione entro il 2030 e il 2033.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Accesso ai bonus fiscali:</strong> le detrazioni 2026 sono condizionate al miglioramento di almeno due classi energetiche.</span>
                </li>
              </ul>
              <p>
                In Friuli Venezia Giulia e nel Veneto, due regioni con inverni rigidi e un patrimonio
                edilizio prevalentemente datato, la quota di abitazioni in classe F o G supera il 60%:
                questo significa che la maggior parte delle famiglie ha ancora enormi margini di miglioramento
                — e di risparmio.
              </p>

              {/* Classi A4-G */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                2. Le classi energetiche dalla A4 alla G: cosa significano
              </h2>
              <p>
                Il sistema italiano di classificazione energetica degli edifici è articolato in
                <strong> dieci livelli</strong>, dal più performante al più dispendioso:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-3 text-left font-bold">Classe</th>
                      <th className="p-3 text-left font-bold">IPE (kWh/m²anno)</th>
                      <th className="p-3 text-left font-bold">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-green-100">
                      <td className="p-3 font-bold text-green-800">A4</td>
                      <td className="p-3">&lt; 0,40 · EPH,nd</td>
                      <td className="p-3">Edificio a energia quasi zero (NZEB)</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="p-3 font-bold text-green-700">A3</td>
                      <td className="p-3">0,41–0,60 · EPH,nd</td>
                      <td className="p-3">Eccellente, passivo o quasi</td>
                    </tr>
                    <tr className="border-b bg-lime-50">
                      <td className="p-3 font-bold text-lime-700">A2</td>
                      <td className="p-3">0,61–0,80 · EPH,nd</td>
                      <td className="p-3">Molto efficiente</td>
                    </tr>
                    <tr className="border-b bg-lime-100">
                      <td className="p-3 font-bold text-lime-800">A1</td>
                      <td className="p-3">0,81–1,00 · EPH,nd</td>
                      <td className="p-3">Alta efficienza</td>
                    </tr>
                    <tr className="border-b bg-yellow-50">
                      <td className="p-3 font-bold text-yellow-700">B</td>
                      <td className="p-3">1,01–1,20 · EPH,nd</td>
                      <td className="p-3">Buona efficienza</td>
                    </tr>
                    <tr className="border-b bg-yellow-100">
                      <td className="p-3 font-bold text-yellow-800">C</td>
                      <td className="p-3">1,21–1,50 · EPH,nd</td>
                      <td className="p-3">Media efficienza</td>
                    </tr>
                    <tr className="border-b bg-orange-50">
                      <td className="p-3 font-bold text-orange-700">D</td>
                      <td className="p-3">1,51–2,00 · EPH,nd</td>
                      <td className="p-3">Bassa efficienza</td>
                    </tr>
                    <tr className="border-b bg-orange-100">
                      <td className="p-3 font-bold text-orange-800">E</td>
                      <td className="p-3">2,01–2,60 · EPH,nd</td>
                      <td className="p-3">Molto bassa efficienza</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="p-3 font-bold text-red-700">F</td>
                      <td className="p-3">2,61–3,50 · EPH,nd</td>
                      <td className="p-3">Scarsa efficienza</td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="p-3 font-bold text-red-800">G</td>
                      <td className="p-3">&gt; 3,50 · EPH,nd</td>
                      <td className="p-3">Pessima efficienza (classe peggiore)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                La soglia di riferimento (EPH,nd) è calcolata in base alla <strong>zona climatica</strong> e alla
                geometria dell'edificio, per questo due case con lo stesso consumo assoluto possono avere
                classi diverse se si trovano a Udine (zona E) rispetto a Venezia (zona E/D).
              </p>

              {/* APE */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                3. L'APE (Attestato di Prestazione Energetica): quando serve e quanto costa
              </h2>
              <p>
                L'<strong>APE – Attestato di Prestazione Energetica</strong> è il documento ufficiale che certifica
                la classe energetica di un immobile. Viene redatto da un <strong>certificatore energetico accreditato</strong>
                (ingegnere, architetto, geometra o perito abilitato) e ha validità di <strong>10 anni</strong>,
                salvo interventi che modifichino le prestazioni energetiche dell'edificio.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Quando è obbligatorio l'APE?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Compravendita immobiliare:</strong> obbligatorio allegarlo al rogito notarile.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Locazione:</strong> obbligatorio per contratti di affitto di durata superiore ai 30 giorni.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Ristrutturazioni importanti:</strong> quando si interviene su oltre il 25% della superficie disperdente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Accesso ai bonus fiscali:</strong> per Ecobonus e detrazione 50% sull'efficienza energetica.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Costo dell'APE nel 2026</h3>
                <p className="text-gray-700 mb-2">
                  Il costo della <strong>certificazione energetica</strong> varia in base alla tipologia e alla
                  complessità dell'immobile:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Appartamento fino a 100 m²: <strong>€ 150 – 250</strong></li>
                  <li>• Casa unifamiliare 100-200 m²: <strong>€ 250 – 400</strong></li>
                  <li>• Edificio plurifamiliare (condominio): <strong>€ 400 – 800</strong></li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  * Prezzi indicativi per Friuli Venezia Giulia e Veneto. Il costo può variare in base al
                  professionista e alla complessità dell'impianto.
                </p>
              </div>

              {/* Direttiva Case Green */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                4. La Direttiva Case Green europea: cosa prevede e le scadenze
              </h2>
              <p>
                La <strong>Direttiva EPBD 2024/1275</strong> (comunemente chiamata "Direttiva Case Green"),
                approvata dal Parlamento Europeo nell'aprile 2024 e recepita progressivamente dagli Stati membri,
                stabilisce obiettivi ambiziosi per la riduzione dei consumi energetici del parco edilizio europeo:
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 my-6">
                <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> Scadenze chiave per l'Italia
                </h4>
                <ul className="space-y-2 text-amber-900">
                  <li>• <strong>2030:</strong> gli immobili residenziali dovranno raggiungere almeno la <strong>classe E</strong>.</li>
                  <li>• <strong>2033:</strong> obbligo di portare gli edifici residenziali almeno in <strong>classe D</strong>.</li>
                  <li>• <strong>2050:</strong> obiettivo di un parco edilizio completamente <strong>decarbonizzato</strong>.</li>
                </ul>
              </div>

              <p>
                L'Italia ha recepito la direttiva con margini di flessibilità per gli edifici storici e per
                i condomini, ma il messaggio è chiaro: chi possiede un immobile in classe F o G ha poco
                tempo per adeguarsi prima che il valore di mercato subisca un calo strutturale.
              </p>
              <p>
                Secondo le stime del Ministero dell'Ambiente, in Italia circa <strong>9 milioni di abitazioni</strong>
                si trovano in classe F o G: quasi il 40% del totale. In Friuli Venezia Giulia e in Veneto,
                la quota è ancora più alta a causa dell'elevata presenza di edifici costruiti tra gli anni
                '50 e '80 senza adeguato isolamento termico.
              </p>

              {/* Come migliorare */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                5. Come migliorare la classe energetica: interventi più efficaci in ordine di impatto
              </h2>
              <p>
                Non tutti gli interventi di efficientamento energetico hanno lo stesso impatto sulla
                <strong> classe energetica dell'immobile</strong>. Ecco i quattro principali, ordinati per
                efficacia crescente:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-2">1. Cappotto termico — Impatto: molto alto</h3>
                  <p className="text-gray-700">
                    L'<strong>isolamento delle pareti esterne</strong> (cappotto) riduce le dispersioni
                    termiche attraverso l'involucro fino al <strong>30-40%</strong>. È l'intervento con il
                    maggiore impatto sull'indice EPE, perché agisce direttamente sulla componente di
                    dispersione più significativa di un edificio anni '70-'80.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Salto di classe tipico: 2-3 classi</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-2">2. Sostituzione infissi — Impatto: alto</h3>
                  <p className="text-gray-700">
                    Le <strong>finestre e le porte finestre</strong> sono responsabili di circa il 20-25%
                    delle dispersioni totali di un edificio non isolato. Passare da vetri singoli a
                    doppi o tripli vetri con telaio in PVC o legno-alluminio migliora sensibilmente l'APE.
                    L'intervento è spesso complementare al cappotto termico.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Salto di classe tipico: 1-2 classi (se combinato con cappotto: 2-3 classi)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-2">3. Pompa di calore — Impatto: alto</h3>
                  <p className="text-gray-700">
                    La sostituzione della <strong>caldaia a gas con una pompa di calore</strong> (aria-aria
                    o aria-acqua) riduce drasticamente il consumo di energia non rinnovabile, che è
                    esattamente il parametro su cui si basa la classe energetica. Con un COP medio di
                    3,5-4, la pompa di calore produce 3,5-4 kWh di calore per ogni kWh di elettricità
                    consumata.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Salto di classe tipico: 2-3 classi</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-2">4. Impianto fotovoltaico — Impatto: medio-alto</h3>
                  <p className="text-gray-700">
                    Il <strong>fotovoltaico</strong> contribuisce all'APE riducendo il fabbisogno di energia
                    dalla rete (energia non rinnovabile). Con l'accumulo in batteria, l'autoconsumosale
                    al 60-70%, abbattendo ulteriormente la quota di energia primaria non rinnovabile. Da solo
                    non porta a grandi salti di classe, ma in combinazione con cappotto e pompa di calore
                    può spingere l'edificio fino alla classe A2 o A1.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Salto di classe tipico: 1 classe (da solo); 2-4 classi (combinato)</p>
                </div>
              </div>

              {/* Valore immobile */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                6. Quanto vale il salto di classe energetica: impatto sul valore dell'immobile
              </h2>
              <p>
                Diversi studi e analisi di mercato documentano l'effetto diretto della
                <strong> classe energetica sul valore degli immobili</strong>. I dati più recenti, aggiornati
                al 2025-2026, mostrano un differenziale significativo:
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 text-green-800">Differenziale di valore per classe energetica (dati 2025)</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold text-green-600">+15 / +25%</span>
                    <p className="text-gray-600 mt-2 text-sm">Valore aggiunto di un immobile<br/>in classe A rispetto a classe G<br/>(mercato nord-est Italia)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="text-3xl font-bold text-green-600">+5 / +8%</span>
                    <p className="text-gray-600 mt-2 text-sm">Premio per ogni salto<br/>di una classe energetica<br/>(es. da D a C)</p>
                  </div>
                </div>
              </div>

              <p>
                Secondo un'analisi di Nomisma su transazioni immobiliari in Emilia-Romagna, Veneto e
                Friuli del 2024, un appartamento di 100 m² in classe A vale mediamente <strong>€ 30.000-50.000
                in più</strong> rispetto allo stesso appartamento in classe G nelle stesse zone. Il dato
                è particolarmente rilevante nelle città universitarie e nei centri urbani più dinamici,
                dove la domanda di abitazioni efficienti è cresciuta del 35% negli ultimi tre anni.
              </p>

              {/* Vendita casa */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                7. Classe energetica e vendita casa: quanto incide sul prezzo
              </h2>
              <p>
                Chi vende un immobile in classe F o G nel 2026 si trova in una posizione negoziale
                svantaggiata. Le banche sono sempre più reticenti a concedere mutui su immobili a bassa
                efficienza energetica, e molti acquirenti richiedono uno sconto "green" per compensare i
                futuri costi di adeguamento.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 my-6">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> Attenzione: sconto "green" in trattativa
                </h4>
                <p className="text-amber-900">
                  Uno studio di Scenari Immobiliari (2024) rileva che il <strong>62% degli acquirenti</strong>
                  chiede uno sconto medio del 10-15% su immobili in classe F o G, citando esplicitamente
                  i futuri costi di ristrutturazione e gli obblighi della Direttiva Case Green come
                  motivazione per la trattativa al ribasso.
                </p>
              </div>

              <p>
                Al contrario, gli immobili in classe B o superiore si vendono mediamente in <strong>30-45 giorni
                in meno</strong> rispetto a quelli in classe E-G, con prezzi più vicini alla richiesta iniziale.
                Investire nel miglioramento della classe energetica prima di mettere in vendita può quindi
                trasformarsi in un'operazione finanziariamente vantaggiosa.
              </p>

              {/* Affitto */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                8. Classe energetica e affitto: obblighi e vantaggi
              </h2>
              <p>
                In ambito locativo, la <strong>classe energetica incide in due direzioni</strong>: sul canone
                mensile che il proprietario può richiedere e sugli obblighi di comunicazione verso l'inquilino.
              </p>
              <p>
                Dal punto di vista normativo, l'APE deve essere allegato al contratto di locazione (pena una
                sanzione da € 3.000 a € 18.000). Il locatario ha il diritto di conoscere la classe energetica
                prima di firmare il contratto.
              </p>
              <p>
                Dal punto di vista economico, le ricerche mostrano che gli inquilini sono disposti a pagare
                un <strong>premium di canone del 5-10%</strong> per abitazioni in classe A o B, grazie al
                risparmio sulle bollette che compensa in parte il canone più elevato. Un appartamento in
                classe A a Udine o Trieste costa mediamente <strong>€ 50-80/mese in più</strong> rispetto
                allo stesso immobile in classe E, ma l'inquilino risparmia € 60-100/mese in bollette.
              </p>

              {/* Interventi combinati */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                9. Interventi combinati: cappotto + infissi + pompa di calore = massimo salto di classe
              </h2>
              <p>
                La strategia più efficace per migliorare la <strong>classe energetica di un immobile</strong>
                in modo radicale è combinare gli interventi sull'involucro con quelli sull'impianto. Questa
                sinergia produce risultati che nessun intervento singolo potrebbe raggiungere:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-3 text-left">Intervento</th>
                      <th className="p-3 text-left">Riduzione consumi</th>
                      <th className="p-3 text-left">Costo indicativo (150 m²)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Cappotto termico 12 cm</td>
                      <td className="p-3">-30%</td>
                      <td className="p-3">€ 18.000 – 22.000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3">Sostituzione infissi (doppio vetro basso-emissivo)</td>
                      <td className="p-3">-15%</td>
                      <td className="p-3">€ 10.000 – 15.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Pompa di calore aria-acqua + fancoil</td>
                      <td className="p-3">-45%</td>
                      <td className="p-3">€ 12.000 – 18.000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3">Fotovoltaico 6 kWp + batteria 10 kWh</td>
                      <td className="p-3">-20%</td>
                      <td className="p-3">€ 14.000 – 18.000</td>
                    </tr>
                    <tr className="bg-[#C8E600]/10 font-bold">
                      <td className="p-3">Pacchetto completo</td>
                      <td className="p-3">-75 / -80%</td>
                      <td className="p-3">€ 54.000 – 73.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Combinando cappotto, infissi e pompa di calore su un'abitazione in classe G, è possibile
                arrivare in classe <strong>B o A1</strong>. Aggiungendo il fotovoltaico con accumulo, si
                può raggiungere la classe <strong>A2 o A3</strong>, trasformando la casa in un edificio
                a energia quasi zero.
              </p>

              {/* Bonus fiscali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                10. I bonus fiscali per migliorare la classe energetica nel 2026
              </h2>
              <p>
                Con la legge di Bilancio 2025 e le relative disposizioni attuative, il quadro dei
                <strong> bonus fiscali per l'efficienza energetica nel 2026</strong> si è semplificato
                rispetto agli anni precedenti. Ecco cosa prevede:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4">Detrazione 50% per interventi sull'involucro</h3>
                <p className="text-gray-700 mb-3">
                  La <strong>detrazione IRPEF del 50%</strong> si applica agli interventi di
                  riqualificazione energetica che comportano un miglioramento di almeno due classi
                  energetiche, oppure il raggiungimento della classe più alta disponibile se si parte
                  già da A2 o superiore.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span>Si applica a <strong>cappotto termico, infissi, pompa di calore</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span>Limite di spesa: <strong>€ 60.000 per unità immobiliare</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span>Ripartizione in <strong>10 quote annuali di pari importo</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-1" />
                    <span>Obbligo di asseverazione tecnica e trasmissione ad <strong>ENEA</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-5 my-6">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> Attenzione: lo sconto in fattura non è più disponibile
                </h4>
                <p className="text-red-900">
                  Dal 2024 lo <strong>sconto in fattura e la cessione del credito</strong> sono stati
                  definitivamente aboliti per la quasi totalità degli interventi. Nel 2026 la detrazione
                  fiscale può essere utilizzata <strong>solo direttamente in dichiarazione dei redditi</strong>.
                  Assicurati di avere un reddito IRPEF sufficiente per poter sfruttare tutta la detrazione
                  nel periodo di 10 anni.
                </p>
              </div>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Esempio calcolo detrazione 50%</h3>
                <p className="text-gray-700">
                  Spesa totale interventi: <strong>€ 48.000</strong><br />
                  Detrazione 50%: <strong>€ 24.000</strong><br />
                  Rata annua detraibile (10 anni): <strong>€ 2.400/anno</strong><br />
                  Spesa netta effettiva: <strong>€ 24.000</strong>
                </p>
              </div>

              {/* Zone climatiche */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                11. Le zone climatiche italiane e il loro impatto sulla classe energetica
              </h2>
              <p>
                L'Italia è suddivisa in <strong>sei zone climatiche</strong> (dalla A alla F), definite in
                base ai Gradi Giorno (GG), che rappresentano la severità del clima invernale. Questa
                zonazione influenza direttamente la classe energetica perché le soglie di consumo
                variano da zona a zona.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-3 text-left">Zona</th>
                      <th className="p-3 text-left">Gradi Giorno</th>
                      <th className="p-3 text-left">Esempi città</th>
                      <th className="p-3 text-left">Consumo tipico G (kWh/m²)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-bold">A</td>
                      <td className="p-3">&lt; 600</td>
                      <td className="p-3">Pantelleria, Lampedusa</td>
                      <td className="p-3">&gt; 140</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-bold">B</td>
                      <td className="p-3">601–900</td>
                      <td className="p-3">Palermo, Reggio Calabria</td>
                      <td className="p-3">&gt; 160</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-bold">C</td>
                      <td className="p-3">901–1.400</td>
                      <td className="p-3">Roma, Napoli, Bari</td>
                      <td className="p-3">&gt; 200</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-bold">D</td>
                      <td className="p-3">1.401–2.100</td>
                      <td className="p-3">Venezia, Firenze, Bologna</td>
                      <td className="p-3">&gt; 250</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-bold">E</td>
                      <td className="p-3">2.101–3.000</td>
                      <td className="p-3">Udine, Trieste, Milano, Torino</td>
                      <td className="p-3">&gt; 300</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 font-bold">F</td>
                      <td className="p-3">&gt; 3.000</td>
                      <td className="p-3">Belluno, Aosta, Bolzano</td>
                      <td className="p-3">&gt; 380</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                In Friuli Venezia Giulia (zona E, con alcune aree in zona F nell'entroterra alpino) e in
                Veneto (zona D per la pianura, E-F per le zone montane), i fabbisogni di riscaldamento sono
                tra i più elevati d'Italia. Questo rende gli interventi di efficientamento particolarmente
                redditizi, perché il risparmio assoluto in kWh — e in euro — è proporzionalmente maggiore
                rispetto alle regioni meridionali.
              </p>

              {/* Esempio pratico */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                12. Esempio pratico: da classe G a classe B con interventi mirati
              </h2>
              <p>
                Ecco un caso reale gestito da <strong>Renova Solution</strong> in provincia di Udine:
                una <strong>villetta bifamiliare degli anni '70</strong>, 160 m², zona climatica E, con
                muri a cassone non isolati, finestre a vetro singolo e caldaia a gas a condensazione
                installata nel 2010.
              </p>

              <div className="bg-red-50 rounded-xl p-5 my-4">
                <h4 className="font-bold text-red-800 mb-3">Situazione di partenza</h4>
                <ul className="space-y-1 text-red-900 text-sm">
                  <li>• Classe energetica: <strong>G</strong></li>
                  <li>• Consumo annuo gas: <strong>3.200 Smc</strong></li>
                  <li>• Costo bollette (gas + elettricità): <strong>€ 4.800/anno</strong></li>
                  <li>• Trasmittanza media pareti: <strong>1,4 W/m²K</strong></li>
                  <li>• Trasmittanza media finestre: <strong>5,0 W/m²K</strong></li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 my-4">
                <h4 className="font-bold text-gray-800 mb-3">Interventi eseguiti</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Cappotto termico 14 cm</strong> in lana di roccia su pareti esterne e tetto piano (230 m² di superficie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Sostituzione di 12 finestre</strong> con triplo vetro basso-emissivo e telaio PVC (Uw = 0,9 W/m²K)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Pompa di calore aria-acqua 16 kW</strong> con sistema radiante a pavimento a bassa temperatura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Impianto fotovoltaico 7 kWp</strong> + batteria LFP 13 kWh</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-5 my-4">
                <h4 className="font-bold text-green-800 mb-3">Risultati dopo gli interventi</h4>
                <ul className="space-y-1 text-green-900 text-sm">
                  <li>• Nuova classe energetica: <strong>B</strong></li>
                  <li>• Consumo annuo elettricità (pompa di calore): <strong>4.500 kWh</strong></li>
                  <li>• Produzione fotovoltaico: <strong>7.700 kWh/anno</strong></li>
                  <li>• Energia acquistata dalla rete: <strong>1.200 kWh/anno</strong></li>
                  <li>• Costo bollette (solo elettricità): <strong>€ 300/anno</strong></li>
                  <li>• <strong>Risparmio annuo: € 4.500</strong></li>
                  <li>• Investimento totale: <strong>€ 68.000</strong> | Detrazione 50%: <strong>€ 34.000</strong></li>
                  <li>• Spesa netta: <strong>€ 34.000</strong> | Tempo di ripiego: <strong>7,5 anni</strong></li>
                </ul>
              </div>

              <p>
                In questo caso, il salto da classe G a classe B ha aumentato il valore di mercato
                dell'immobile di circa <strong>€ 40.000-55.000</strong> (stima periziale). Considerando
                che la spesa netta è stata di € 34.000, il proprietario ha ottenuto un aumento di valore
                netto positivo già dal primo anno dopo i lavori.
              </p>

              {/* Conclusioni */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                13. Conclusioni e come agire nel 2026
              </h2>
              <p>
                La <strong>classe energetica della casa</strong> non è più un dettaglio tecnico per
                addetti ai lavori: è un indicatore economico che impatta direttamente sul patrimonio
                di ogni famiglia. Nel 2026, tra Direttiva Case Green, mercato immobiliare sempre più
                selettivo e bollette che non torneranno ai livelli pre-crisi, migliorare la classe
                energetica della propria abitazione è un investimento con un <strong>ritorno concreto
                e misurabile</strong>.
              </p>
              <p>
                I passaggi da compiere sono semplici:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Verifica la tua classe energetica attuale:</strong> controlla l'APE allegato al rogito o richiedi una nuova certificazione energetica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Fai un'analisi energetica gratuita:</strong> un esperto ti dirà quali interventi portano al massimo salto di classe con il minimo investimento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Pianifica il pacchetto di interventi:</strong> cappotto, infissi, pompa di calore e fotovoltaico danno i massimi risultati se progettati insieme.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Approfitta della detrazione 50%:</strong> entro il 2026, gli incentivi sono ancora solidi. Agire prima evita di dover operare in emergenza vicino alle scadenze europee del 2030.</span>
                </li>
              </ul>
              <p>
                <strong>Renova Solution</strong> opera in Friuli Venezia Giulia e Veneto con un team di
                esperti in cappotto termico, infissi ad alta efficienza, pompe di calore e fotovoltaico.
                Offriamo un <strong>sopralluogo gratuito e un'analisi energetica senza impegno</strong>:
                ti mostriamo quanto puoi risparmiare e quanto può aumentare il valore della tua casa prima
                di chiederti di firmare qualsiasi cosa. Contattaci oggi per iniziare.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['classe energetica', 'APE', 'certificazione energetica', 'direttiva case green', 'cappotto termico', 'infissi', 'pompa di calore', 'risparmio energetico', '2026'].map(tag => (
                  <span key={tag} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Articoli correlati</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                to="/blog/cappotto-termico-risparmio-2026"
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <span className="inline-block bg-[#C8E600]/20 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full mb-3">Ristrutturazione</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#C8E600] transition-colors leading-snug">
                  Cappotto termico 2026: quanto si risparmia in bolletta? Dati reali e calcoli
                </h3>
              </Link>
              <Link
                to="/blog/infissi-risparmio-energetico-2026"
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <span className="inline-block bg-[#C8E600]/20 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full mb-3">Infissi</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#C8E600] transition-colors leading-snug">
                  Infissi e risparmio energetico: guida alla scelta nel 2026
                </h3>
              </Link>
              <Link
                to="/blog/detrazioni-fiscali-2026"
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <span className="inline-block bg-[#C8E600]/20 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full mb-3">Bonus &amp; Detrazioni</span>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#C8E600] transition-colors leading-snug">
                  Detrazioni fiscali 2026: guida completa per ristrutturazioni ed efficienza energetica
                </h3>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
