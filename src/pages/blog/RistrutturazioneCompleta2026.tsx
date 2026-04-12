import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function RistrutturazioneCompleta2026() {
  const articleData = {
    title: 'Ristrutturazione completa della casa nel 2026: costi, tempi, bonus fiscali e consigli pratici',
    excerpt: 'Guida completa alla ristrutturazione integrale della casa nel 2026: quanto costa al metro quadro, quanto tempo richiede, quali pratiche edilizie servono e come sfruttare il bonus 50% per risparmiare fino a metà spesa.',
    date: '25 Marzo 2026',
    dateISO: '2026-03-25',
    readTime: '15 min',
    author: 'Renova Team',
    category: 'Ristrutturazione',
    image: '/images/ristrutturazione.jpg',
    slug: 'ristrutturazione-completa-casa-2026'
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
        url: 'https://renovasolution.it/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://renovasolution.it/blog/${articleData.slug}`
    },
    keywords: 'ristrutturazione completa casa 2026, costo ristrutturazione al mq, ristrutturazione appartamento costi, tempi ristrutturazione casa, bonus ristrutturazione 2026, ristrutturare casa guida, permessi ristrutturazione',
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
        keywords="ristrutturazione completa casa 2026, costo ristrutturazione al mq, ristrutturazione appartamento costi, tempi ristrutturazione casa, bonus ristrutturazione 2026, ristrutturare casa guida, permessi ristrutturazione"
        ogType="article"
        canonical={`https://renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogPostSchema(articleData.title, articleData.excerpt, `https://renovasolution.it/blog/${articleData.slug}`, `https://renovasolution.it${articleData.image}`, articleData.dateISO, articleData.author))}</script>

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

        {/* Content */}
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
                La <strong>ristrutturazione completa della casa nel 2026</strong> è uno degli investimenti immobiliari più intelligenti
                che un proprietario possa fare. Tra il <strong>bonus ristrutturazione al 50%</strong> ancora attivo, il costo
                dell'energia in continua crescita e i valori di mercato degli immobili ristrutturati, rimandare significa perdere
                denaro. In questa guida ti spieghiamo tutto: costi reali, tempi, pratiche burocratiche, errori da evitare e come
                scegliere l'impresa giusta in Friuli Venezia Giulia e Veneto.
              </p>

              {/* 1. Perché ristrutturare nel 2026 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Perché ristrutturare nel 2026 è un investimento intelligente</h2>
              <p>
                Il mercato immobiliare premia in modo crescente gli immobili ristrutturati. Secondo le rilevazioni del settore,
                un appartamento completamente riqualificato può valere fino al <strong>20-30% in più</strong> rispetto a uno
                non ristrutturato nella stessa zona. Ma ci sono altri fattori che rendono il 2026 un anno particolarmente
                favorevole per avviare i lavori:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Bonus ristrutturazione al 50%:</strong> la detrazione fiscale del 50% sull'abitazione principale è ancora in vigore per il 2026, con spesa massima di € 96.000 per unità immobiliare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Efficienza energetica:</strong> una casa ristrutturata con nuovi impianti e infissi può ridurre i consumi energetici del 40-60%, con bollette significativamente più basse ogni anno.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Normative europee:</strong> la direttiva europea sulle case green (EPBD) spinge verso la riqualificazione: prima si interviene, più si è preparati agli obblighi futuri.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Comfort abitativo:</strong> vivere in un'abitazione ristrutturata, con impianti moderni e buon isolamento, migliora concretamente la qualità della vita quotidiana.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Costi dei materiali:</strong> dopo i rincari post-pandemia, il mercato dei materiali da costruzione si è stabilizzato, rendendo i preventivi più prevedibili rispetto al biennio 2022-2023.</span>
                </li>
              </ul>

              {/* 2. Ristrutturazione completa vs parziale */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Ristrutturazione completa vs parziale: cosa comprende</h2>
              <p>
                Prima di avviare qualsiasi lavoro, è fondamentale capire la differenza tra una <strong>ristrutturazione parziale</strong>
                e una <strong>ristrutturazione completa</strong>.
              </p>
              <p className="mt-4">
                Una ristrutturazione <strong>parziale</strong> riguarda singoli ambienti o impianti: la sostituzione del bagno,
                il rifacimento della cucina, la verniciatura delle pareti o la sostituzione della caldaia. Interventi mirati, con
                costi e tempi contenuti, che non richiedono di lasciare l'abitazione.
              </p>
              <p className="mt-4">
                Una ristrutturazione <strong>completa</strong>, invece, comprende la riqualificazione integrale dell'immobile.
                Tipicamente include:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Demolizione e rifacimento di <strong>tramezze e divisori interni</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rifacimento completo degli <strong>impianti elettrici e idraulici</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione di <strong>pavimenti e rivestimenti</strong> in tutti gli ambienti</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione di <strong>infissi e serramenti</strong> interni ed esterni</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rinnovo di <strong>bagni e cucina</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Tinteggiatura e rifinitura di <strong>tutte le superfici</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Eventuale <strong>sostituzione del sistema di riscaldamento/raffrescamento</strong></span>
                </li>
              </ul>
              <p>
                Una ristrutturazione completa richiede generalmente di <strong>liberare l'appartamento</strong> per tutta la durata
                dei lavori: impossibile abitarvi durante le fasi più invasive.
              </p>

              {/* 3. Le fasi della ristrutturazione */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Le fasi della ristrutturazione: dalla progettazione alle finiture</h2>
              <p>
                Una ristrutturazione completa si articola in fasi ben precise. Conoscerle aiuta a capire il cronoprogramma
                e a evitare spiacevoli sorprese.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Fase 1 — Progettazione e pratiche (2-4 settimane)</h3>
                  <p className="text-gray-700 text-sm">
                    Il tecnico incaricato (architetto o geometra) effettua il rilievo dell'immobile, elabora il progetto
                    architettonico, redige i computi metrici e presenta le pratiche edilizie al Comune. In questa fase si
                    scelgono anche materiali e finiture.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Fase 2 — Demolizioni e smantellamenti (1-2 settimane)</h3>
                  <p className="text-gray-700 text-sm">
                    Si demoliscono tramezze, si rimuovono pavimenti vecchi, sanitari, porte, infissi e tutto ciò che deve
                    essere sostituito. È la fase più rumorosa e polverosa; va coordinata la gestione dei rifiuti edili (RENTRI/tracciabilità).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Fase 3 — Impianti (2-4 settimane)</h3>
                  <p className="text-gray-700 text-sm">
                    Gli impiantisti realizzano le tracce a muro per l'impianto elettrico (a norma CEI 64-8) e idraulico.
                    Si posizionano le tubature, le canaline, le scatole da incasso. È il momento giusto per prevedere
                    impianto fotovoltaico, pompa di calore o VMC (ventilazione meccanica controllata).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Fase 4 — Murature e intonaci (2-3 settimane)</h3>
                  <p className="text-gray-700 text-sm">
                    Si costruiscono le nuove tramezze, si chiudono le tracce degli impianti con malta e si realizzano
                    gli intonaci. È necessario rispettare i tempi di asciugatura prima di procedere con le finiture.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Fase 5 — Massetti e pavimenti (2-3 settimane)</h3>
                  <p className="text-gray-700 text-sm">
                    Si realizza il massetto (spesso con sistema radiante a pavimento) e si posa il rivestimento: ceramica,
                    gres porcellanato, parquet o vinilico. Anche qui i tempi di presa del massetto (28 giorni per cemento
                    tradizionale, 7-10 per anidrite) condizionano il calendario lavori.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Fase 6 — Finiture (3-5 settimane)</h3>
                  <p className="text-gray-700 text-sm">
                    Installazione di infissi e porte interne, posa dei sanitari, completamento dell'impianto elettrico
                    (frutti, prese, quadro), tinteggiatura e verniciatura. È la fase più lunga ma anche quella che
                    trasforma visivamente l'appartamento.
                  </p>
                </div>
              </div>

              {/* 4. Costi al metro quadro */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Quanto costa ristrutturare al metro quadro nel 2026</h2>
              <p>
                Il <strong>costo di una ristrutturazione completa al metro quadro</strong> varia in base alla qualità dei
                materiali scelti, alla complessità degli interventi e alla zona geografica. In Friuli Venezia Giulia e Veneto,
                i valori medi per il 2026 si attestano su tre fasce principali:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#C8E600] text-black">
                      <th className="p-3 text-left font-bold">Fascia</th>
                      <th className="p-3 text-left font-bold">Costo al m²</th>
                      <th className="p-3 text-left font-bold">Caratteristiche</th>
                      <th className="p-3 text-left font-bold">Esempio 90 m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="p-3 font-semibold text-gray-800">Economica</td>
                      <td className="p-3 text-gray-700">€ 500 – 700</td>
                      <td className="p-3 text-gray-600">Materiali standard, impresa locale, finiture base</td>
                      <td className="p-3 font-semibold text-gray-800">€ 45.000 – 63.000</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <td className="p-3 font-semibold text-gray-800">Media</td>
                      <td className="p-3 text-gray-700">€ 700 – 1.000</td>
                      <td className="p-3 text-gray-600">Materiali di buona qualità, impianti moderni, finiture medio-alte</td>
                      <td className="p-3 font-semibold text-gray-800">€ 63.000 – 90.000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-semibold text-gray-800">Premium</td>
                      <td className="p-3 text-gray-700">€ 1.000 – 1.500+</td>
                      <td className="p-3 text-gray-600">Materiali di design, domotica, finiture su misura, progettista d'interni</td>
                      <td className="p-3 font-semibold text-gray-800">€ 90.000 – 135.000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Attenzione ai preventivi troppo bassi
                </h4>
                <p className="text-amber-800 text-sm">
                  Preventivi inferiori a € 400/m² per una ristrutturazione completa devono destare sospetti: spesso
                  nascondono l'uso di materiali scadenti, lavoro in nero o la mancata inclusione di voci importanti
                  (impianti, smaltimento macerie, pratiche tecniche). Chiedi sempre un computo metrico dettagliato.
                </p>
              </div>

              <p>
                A questi importi vanno aggiunti i <strong>costi professionali</strong>: progettista (1-3% del costo lavori),
                direttore dei lavori (1-2%), pratiche edilizie (€ 500-2.000 a seconda del tipo) e collaudi impiantistici.
                Metti in conto anche un <strong>fondo imprevisti del 10-15%</strong>: in ogni ristrutturazione emergono
                sempre lavorazioni non preventivabili (umidità nascosta, tubature fuori posto, strutture da rinforzare).
              </p>

              {/* 5. Tempi reali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Tempi reali di una ristrutturazione completa: il cronoprogramma tipo</h2>
              <p>
                Quante settimane servono davvero per ristrutturare un appartamento? La risposta dipende dalla metratura e
                dalla complessità. Per un appartamento di <strong>80-100 m²</strong> con ristrutturazione completa, il
                cronoprogramma tipo è il seguente:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <div className="space-y-3">
                  {[
                    { week: 'Settimane 1-4', phase: 'Progettazione, pratiche edilizie, scelta materiali' },
                    { week: 'Settimane 5-6', phase: 'Demolizioni, smantellamenti, smaltimento macerie' },
                    { week: 'Settimane 7-10', phase: 'Tracce e impianti (elettrico, idraulico, termico)' },
                    { week: 'Settimane 11-13', phase: 'Murature nuove, intonaci, chiusura tracce' },
                    { week: 'Settimane 14-17', phase: 'Massetto (+ asciugatura), posa pavimenti e rivestimenti' },
                    { week: 'Settimane 18-22', phase: 'Finiture: infissi, porte, sanitari, tinteggiatura, completamento impianti' },
                    { week: 'Settimane 23-24', phase: 'Collaudi, pulizie finali, consegna e documentazione' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="bg-[#C8E600] text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap">{item.week}</span>
                      <span className="text-gray-700 text-sm">{item.phase}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Durata totale indicativa: <strong>5-6 mesi</strong> per una ristrutturazione completa su 80-100 m².
                  Appartamenti più grandi o con lavorazioni speciali possono richiedere 7-9 mesi.
                </p>
              </div>

              {/* 6. Pratiche edilizie */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Pratiche edilizie: CILA, SCIA e Permesso di Costruire — quando serve cosa</h2>
              <p>
                La burocrazia è spesso la parte più temuta di una ristrutturazione. Tuttavia, conoscere in anticipo quale
                pratica è necessaria evita errori gravi e sanzioni. Ecco la guida rapida:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-2">CILA — Comunicazione di Inizio Lavori Asseverata</h3>
                  <p className="text-blue-800 text-sm mb-2">
                    È la pratica più semplice. Si usa per la maggior parte degli interventi di <strong>manutenzione
                    straordinaria</strong> che non modificano la struttura portante né la sagoma dell'edificio.
                  </p>
                  <p className="text-blue-800 text-sm"><strong>Quando si usa:</strong> rifacimento bagno, cucina, impianti, pavimenti, infissi, tinteggiatura, rifacimento intonaci interni.</p>
                  <p className="text-blue-800 text-sm mt-1"><strong>Chi la presenta:</strong> tecnico abilitato (geometra, architetto, ingegnere). Non richiede approvazione preventiva.</p>
                </div>

                <div className="bg-indigo-50 rounded-xl p-5">
                  <h3 className="font-bold text-indigo-900 mb-2">SCIA — Segnalazione Certificata di Inizio Attività</h3>
                  <p className="text-indigo-800 text-sm mb-2">
                    Si usa per interventi più significativi: <strong>modifiche alla distribuzione interna</strong> con
                    spostamento di tramezze portanti, cambio di destinazione d'uso, interventi sulle parti strutturali.
                  </p>
                  <p className="text-indigo-800 text-sm"><strong>Quando si usa:</strong> apertura o chiusura di porte su pareti portanti, variazioni planimetriche rilevanti, ampliamenti di superficie.</p>
                  <p className="text-indigo-800 text-sm mt-1"><strong>Attenzione:</strong> la SCIA è immediatamente efficace ma il Comune può verificare e chiedere la sospensione entro 60 giorni.</p>
                </div>

                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-red-900 mb-2">Permesso di Costruire (ex Concessione Edilizia)</h3>
                  <p className="text-red-800 text-sm mb-2">
                    Necessario per <strong>interventi di trasformazione urbanistica o edilizia rilevante</strong>: nuove costruzioni,
                    ampliamenti volumetrici, cambi di destinazione d'uso da non residenziale a residenziale, interventi su
                    edifici vincolati.
                  </p>
                  <p className="text-red-800 text-sm"><strong>Quando si usa:</strong> sopraelevazioni, ampliamenti di volumetria, ristrutturazioni con cambio d'uso rilevante.</p>
                  <p className="text-red-800 text-sm mt-1"><strong>Tempi:</strong> l'approvazione del permesso può richiedere da 60 a 90 giorni (e oltre) a seconda del Comune.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Ristrutturare senza pratiche: i rischi
                </h4>
                <p className="text-amber-800 text-sm">
                  Eseguire lavori edilizi senza la pratica corretta espone a sanzioni amministrative (da € 516 in su),
                  obbligo di ripristino, problemi in caso di vendita dell'immobile e invalidità delle detrazioni fiscali.
                  Il tecnico abilitato è il tuo alleato: non è un costo inutile, ma una tutela legale.
                </p>
              </div>

              {/* 7. Bonus ristrutturazione 2026 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Bonus ristrutturazione 2026: la detrazione fiscale al 50% e 36%</h2>
              <p>
                Il <strong>bonus ristrutturazione 2026</strong> rimane uno degli incentivi fiscali più solidi e accessibili
                per i proprietari di casa. Ecco come funziona attualmente:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-[#C8E600]/10 rounded-xl p-5 border border-[#C8E600]/30">
                  <span className="text-4xl font-bold text-gray-900">50%</span>
                  <p className="font-semibold text-gray-900 mt-2">Abitazione principale</p>
                  <ul className="text-sm text-gray-700 mt-3 space-y-1">
                    <li>• Spesa massima: <strong>€ 96.000</strong></li>
                    <li>• Detrazione massima: <strong>€ 48.000</strong></li>
                    <li>• Ripartita in 10 anni</li>
                    <li>• Per proprietari e affittuari</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <span className="text-4xl font-bold text-gray-900">36%</span>
                  <p className="font-semibold text-gray-900 mt-2">Altri immobili</p>
                  <ul className="text-sm text-gray-700 mt-3 space-y-1">
                    <li>• Seconde case, immobili locati</li>
                    <li>• Spesa massima: <strong>€ 48.000</strong></li>
                    <li>• Detrazione massima: <strong>€ 17.280</strong></li>
                    <li>• Ripartita in 10 anni</li>
                  </ul>
                </div>
              </div>

              <p><strong>Quali interventi sono ammessi?</strong> Il bonus copre una vasta gamma di lavori:</p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Manutenzione straordinaria (rifacimento impianti, bagni, cucine, pavimenti)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Restauro e risanamento conservativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Ristrutturazione edilizia (modifiche planimetriche, cambio destinazione d'uso)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione infissi, serramenti, porte blindate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Installazione di impianti anti-intrusione e antifurto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Eliminazione delle barriere architettoniche</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Buone notizie:</strong> la <strong>detrazione fiscale del 50%</strong> per le ristrutturazioni
                  sulla prima casa è confermata anche nel 2026. L'importo viene recuperato comodamente in
                  <strong> 10 rate annuali di pari importo</strong> tramite la dichiarazione dei redditi (IRPEF).
                  Verifica sempre con il tuo commercialista prima di avviare i lavori.
                </p>
              </div>

              {/* 8. Come pagare: il bonifico parlante */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Come pagare: il bonifico parlante obbligatorio</h2>
              <p>
                Per accedere al bonus ristrutturazione è <strong>obbligatorio pagare tramite bonifico bancario o
                postale "parlante"</strong>. Non è possibile pagare in contanti, con assegno o con carta di credito
                se si vuole mantenere il diritto alla detrazione.
              </p>
              <p className="mt-4">Il bonifico parlante deve contenere queste informazioni obbligatorie:</p>

              <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-2 text-sm">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Causale:</strong> "Bonifico per detrazione fiscale ai sensi dell'art. 16-bis del DPR 917/86 — Lavori di ristrutturazione edilizia presso [indirizzo immobile]"</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Codice Fiscale del beneficiario</strong> (chi detrae)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Codice Fiscale o Partita IVA dell'impresa</strong> che esegue i lavori</span>
                </div>
              </div>

              <p>
                Le banche e le Poste applicano una <strong>ritenuta d'acconto del 8%</strong> sull'importo del bonifico
                parlante (per le imprese). Questo è normale e non riduce la tua detrazione: l'importo da detrarre rimane
                quello indicato in fattura.
              </p>
              <p className="mt-4">
                Conserva scrupolosamente tutti i <strong>bonifici, le fatture e le ricevute</strong> per almeno 10 anni
                dalla fine dei lavori: l'Agenzia delle Entrate può richiederli in caso di controllo.
              </p>

              {/* 9. Comunicazione ENEA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Comunicazione ENEA: quando è necessaria</h2>
              <p>
                La <strong>comunicazione all'ENEA</strong> (Agenzia Nazionale per le Nuove Tecnologie, l'Energia e lo Sviluppo
                Economico Sostenibile) è obbligatoria per gli interventi che migliorano l'efficienza energetica dell'immobile.
              </p>
              <p className="mt-4"><strong>Quando è obbligatoria:</strong></p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione di <strong>finestre e infissi</strong> con modelli ad alta efficienza</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Installazione di <strong>pannelli solari termici</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione di <strong>impianti di climatizzazione invernale</strong> (caldaie, pompe di calore)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Installazione di <strong>schermature solari</strong> (tende esterne, frangisole)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Qualsiasi intervento</strong> per cui si richiede la detrazione Ecobonus</span>
                </li>
              </ul>
              <p>
                La comunicazione va inviata sul portale ENEA entro <strong>90 giorni dalla fine dei lavori</strong>.
                La mancata trasmissione comporta la perdita del diritto alla detrazione fiscale per quegli interventi.
                Il tuo tecnico o la tua impresa si occupano solitamente di questo adempimento: verificalo in anticipo.
              </p>

              {/* 10. Errori da evitare */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. I 10 errori da evitare nella ristrutturazione</h2>
              <p>
                Dopo anni di esperienza nel settore, abbiamo identificato i <strong>10 errori più comuni</strong> che
                trasformano una ristrutturazione in un'esperienza costosa e stressante. Eccoli:
              </p>

              <div className="space-y-3 my-6">
                {[
                  { n: '01', title: 'Non affidarsi a un tecnico abilitato', desc: 'Progettare autonomamente senza un professionista porta spesso a errori di progettazione, pratiche edilizie errate e perdita delle detrazioni fiscali.' },
                  { n: '02', title: 'Sottostimare il budget', desc: 'Partire con un budget troppo ottimistico porta a dover interrompere i lavori o tagliare voci importanti come gli impianti. Aggiungi sempre un fondo imprevisti del 10-15%.' },
                  { n: '03', title: 'Scegliere il preventivo più basso senza verificare', desc: 'Il prezzo più basso spesso nasconde materiali scadenti, personale non qualificato o esclusioni importanti. Chiedi un computo dettagliato e confronta voci per voci.' },
                  { n: '04', title: 'Non pianificare gli impianti prima di fare le pareti', desc: 'Modificare il percorso degli impianti dopo aver intonacato costa il doppio. Gli impianti vanno progettati nella fase iniziale, prima di qualsiasi altra lavorazione.' },
                  { n: '05', title: 'Dimenticare il bonifico parlante', desc: 'Pagare con contanti o con bonifici normali fa perdere automaticamente il diritto alla detrazione fiscale. Ogni pagamento deve essere documentato con bonifico parlante.' },
                  { n: '06', title: 'Non fare un contratto scritto con l\'impresa', desc: 'Lavorare senza contratto scritto che indichi lavori, materiali, prezzi e tempi espone a rischi enormi in caso di controversia.' },
                  { n: '07', title: 'Non verificare la regolarità dell\'impresa', desc: 'L\'impresa deve avere DURC regolare, iscrizione alla Camera di Commercio e assicurazione RC professionale. Chiedi sempre questi documenti prima di firmare.' },
                  { n: '08', title: 'Cambiare idea in corso d\'opera', desc: 'Le varianti in corso d\'opera sono le principali cause di aumento dei costi e dei tempi. Definisci tutto nella fase di progettazione e rispetta le scelte.' },
                  { n: '09', title: 'Dimenticare la comunicazione ENEA', desc: 'Per gli interventi di efficientamento energetico, la comunicazione ENEA entro 90 giorni dalla fine lavori è obbligatoria per la detrazione. Non dimenticarla.' },
                  { n: '10', title: 'Non aggiornare la planimetria catastale', desc: 'Se i lavori modificano la distribuzione interna, è obbligatorio aggiornare la planimetria al Catasto. Non farlo può creare problemi gravi in caso di vendita.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 items-start bg-gray-50 rounded-lg p-4">
                    <span className="text-2xl font-black text-[#C8E600] w-8 flex-shrink-0">{item.n}</span>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 11. Come scegliere l'impresa */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Come scegliere l'impresa giusta: cosa verificare</h2>
              <p>
                La scelta dell'impresa è la decisione più importante di tutta la ristrutturazione. Un'impresa seria fa la
                differenza tra un lavoro ben fatto nei tempi previsti e un cantiere che si trascina per mesi con problemi
                continui. Ecco cosa verificare:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Iscrizione alla Camera di Commercio:</strong> verifica online sul registro imprese (registroimprese.it). L'impresa deve avere codici ATECO coerenti con i lavori da eseguire.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>DURC in regola:</strong> il Documento Unico di Regolarità Contributiva certifica che l'impresa paga regolarmente i contributi per i propri dipendenti. Puoi richiederlo direttamente all'impresa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Assicurazione RC:</strong> l'impresa deve avere una polizza di responsabilità civile professionale attiva che copra eventuali danni a terzi durante i lavori.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Referenze verificabili:</strong> chiedi contatti di clienti precedenti o visita cantieri già completati. Un'impresa seria non ha problemi a fornire referenze.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Preventivo dettagliato:</strong> diffida di preventivi generici. Un buon preventivo elenca ogni singola voce con quantità, materiale e prezzo unitario.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Contratto scritto:</strong> mai iniziare lavori senza un contratto che specifichi lavori da eseguire, materiali, importo totale, modalità di pagamento, penali per i ritardi e garanzia post-lavoro.</span>
                </li>
              </ul>

              {/* 12. Ristrutturazione e classe energetica */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Ristrutturazione e classe energetica: come migliorarla</h2>
              <p>
                Una ristrutturazione completa è l'occasione ideale per <strong>migliorare la classe energetica</strong>
                dell'immobile. In Italia gli edifici sono classificati dalla classe G (la peggiore, tipica degli edifici
                anni '70-'80) alla classe A4 (la più efficiente). Passare da classe G a classe C o B non è un obiettivo
                irraggiungibile: con i giusti interventi è assolutamente fattibile.
              </p>
              <p className="mt-4">Gli interventi che incidono maggiormente sulla classe energetica sono:</p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Isolamento termico</h4>
                  <p className="text-sm text-gray-600">Cappotto esterno, isolamento copertura e pavimento su terreno. Riduce drasticamente le dispersioni attraverso l'involucro.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Infissi ad alta efficienza</h4>
                  <p className="text-sm text-gray-600">Finestre con doppio o triplo vetro basso emissivo e telaio in PVC o legno-alluminio. Eliminano i ponti termici sul perimetro.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pompa di calore</h4>
                  <p className="text-sm text-gray-600">Sostituisce la caldaia a gas con un sistema elettrico ad alta efficienza (COP 3-5). Spesso abbinata al fotovoltaico per massimizzare i risparmi.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Fotovoltaico + accumulo</h4>
                  <p className="text-sm text-gray-600">L'energia prodotta dal sole copre buona parte del fabbisogno elettrico. Con il sistema di accumulo si sfrutta l'energia prodotta di giorno anche nelle ore notturne.</p>
                </div>
              </div>

              <p>
                Al termine di ogni ristrutturazione che ha modificato l'involucro o gli impianti, è obbligatorio ottenere
                un nuovo <strong>APE (Attestato di Prestazione Energetica)</strong>. Il certificatore energetico abilitato
                esegue la diagnosi e rilascia il documento che certifica la nuova classe energetica: fondamentale per
                le detrazioni e per la futura vendita o locazione dell'immobile.
              </p>

              {/* 13. Case study */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Case study: ristrutturazione di un appartamento 90 m² a Treviso</h2>
              <p>
                Per rendere concreti tutti i concetti esposti finora, vediamo il caso reale di una ristrutturazione
                completa su un <strong>appartamento di 90 m² a Treviso</strong>, realizzata nel 2025 e completata
                in 5 mesi.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-gray-900 mb-4">Dati dell'intervento</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><span className="text-gray-500">Immobile:</span> <strong>Appartamento anni '80, 90 m², piano terzo</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Classe energetica iniziale:</span> <strong>G</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Classe energetica finale:</span> <strong>C</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Durata lavori:</span> <strong>22 settimane</strong></p>
                  </div>
                  <div>
                    <p><span className="text-gray-500">Pratica edilizia:</span> <strong>CILA + variante catastale</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Costo totale lavori:</span> <strong>€ 82.000 (IVA inc.)</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Detrazione 50%:</span> <strong>€ 41.000</strong> (su 10 anni)</p>
                    <p className="mt-1"><span className="text-gray-500">Spesa netta effettiva:</span> <strong>€ 41.000</strong></p>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900 mt-5 mb-3">Lavori eseguiti</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Demolizione e rifacimento totale tramezze interne (nuovo layout open space cucina-soggiorno)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Rifacimento completo impianto elettrico (CEI 64-8) e idraulico</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Installazione impianto radiante a pavimento (massetto anidritico)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Sostituzione di tutti gli infissi con finestre triplo vetro PVC (Uw 0,8)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Pompa di calore aria-acqua da 12 kW (sostituzione caldaia a gas)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Posa gres porcellanato 120x60 in tutti gli ambienti</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Rifacimento completo bagno principale e secondo bagno</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Nuova cucina su misura con elettrodomestici A+++</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Tinteggiatura e finitura di tutti gli ambienti</span></li>
                </ul>

                <div className="bg-[#C8E600]/10 rounded-lg p-4 mt-5">
                  <p className="text-sm font-semibold text-gray-800">
                    Risparmio energetico stimato: <strong>-55% sui consumi annui</strong>.<br />
                    Valorizzazione immobiliare stimata: <strong>+22%</strong> rispetto al valore pre-ristrutturazione.
                  </p>
                </div>
              </div>

              {/* Conclusioni e CTA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Conclusioni: ristrutturare conviene, se lo si fa bene</h2>
              <p>
                La <strong>ristrutturazione completa della casa nel 2026</strong> è un percorso complesso ma assolutamente
                gestibile se si pianifica con cura, si sceglie il team giusto e si sfruttano al massimo le agevolazioni
                fiscali disponibili. Con il bonus al 50%, metà della spesa torna indietro in 10 anni, e il risparmio
                energetico contribuisce a ridurre ulteriormente il costo reale dell'intervento.
              </p>
              <p className="mt-4">
                I punti chiave da ricordare:
              </p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Pianifica tutto nella fase progettuale: cambiare idea in corso d'opera costa caro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Scegli l'impresa per competenza e affidabilità, non solo per il prezzo più basso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rispetta gli adempimenti fiscali: bonifico parlante, comunicazione ENEA, APE finale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Approfitta del bonus ristrutturazione 2026 prima che le condizioni cambino ulteriormente.</span>
                </li>
              </ul>
              <p className="mt-4">
                <strong>Renova Solution</strong> opera in <strong>Friuli Venezia Giulia e Veneto</strong> con un team
                di professionisti che segue il cliente dalla progettazione alla consegna chiavi in mano. Infissi,
                impianti fotovoltaici, pompe di calore, cappotto termico e ristrutturazioni complete: un unico
                interlocutore per tutto il progetto.
              </p>

              <div className="bg-[#C8E600] rounded-xl p-6 my-8 text-center">
                <h3 className="text-xl font-bold text-black mb-2">Richiedi un preventivo gratuito</h3>
                <p className="text-black/80 text-sm mb-4">
                  Raccontaci il tuo progetto: ti risponderemo entro 24 ore con una prima valutazione senza impegno.
                </p>
                <Link
                  to="/contatti"
                  className="inline-block bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Contattaci ora
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Articoli correlati</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/blog/detrazioni-fiscali-2026" className="group block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">Fisco</p>
                  <p className="font-semibold text-gray-900 group-hover:text-black text-sm leading-snug">Detrazioni fiscali 2026: guida completa a Ecobonus e ristrutturazioni</p>
                </Link>
                <Link to="/blog/cappotto-termico-risparmio-2026" className="group block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">Efficienza Energetica</p>
                  <p className="font-semibold text-gray-900 group-hover:text-black text-sm leading-snug">Cappotto termico 2026: quanto si risparmia in bolletta</p>
                </Link>
                <Link to="/blog/infissi-risparmio-energetico-2026" className="group block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">Infissi</p>
                  <p className="font-semibold text-gray-900 group-hover:text-black text-sm leading-snug">Infissi e risparmio energetico nel 2026: la guida completa</p>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['ristrutturazione 2026', 'bonus ristrutturazione', 'costi ristrutturazione', 'permessi edilizi', 'efficienza energetica', 'bonifico parlante'].map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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
