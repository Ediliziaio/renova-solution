import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function RistrutturazioneBagno2026() {
  const articleData = {
    title: 'Ristrutturazione bagno 2026: costi al mq, tempi, idee e bonus fiscali',
    excerpt: 'Guida completa alla ristrutturazione del bagno nel 2026: costi reali al metro quadro, tempi di lavoro, tendenze di design, materiali migliori e come sfruttare la detrazione fiscale del 50%.',
    date: '16 Aprile 2026',
    dateISO: '2026-04-16',
    readTime: '14 min',
    author: 'Renova Team',
    category: 'Ristrutturazione',
    image: '/images/bagno-moderno.jpg',
    slug: 'ristrutturazione-bagno-2026'
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
    keywords: 'ristrutturazione bagno costi, rifacimento bagno 2026, bonus ristrutturazione bagno, costo bagno al mq, ristrutturazione bagno completa, bagno moderno 2026, impianto idraulico bagno',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto costa ristrutturare un bagno nel 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il costo di ristrutturazione di un bagno nel 2026 varia da 800 a 2.500 euro al metro quadro, a seconda della fascia scelta. Per un bagno medio di 6-8 mq, la spesa totale si aggira tra 5.000 e 20.000 euro. I costi includono demolizioni, impianto idraulico, piastrelle, sanitari, rubinetteria e manodopera.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo serve per ristrutturare un bagno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La ristrutturazione completa di un bagno richiede mediamente dalle 2 alle 4 settimane lavorative. I tempi variano in base alla complessità degli interventi: un semplice rifacimento delle superfici richiede circa 10 giorni, mentre un rifacimento completo con spostamento degli impianti può arrivare a 5 settimane.'
        }
      },
      {
        '@type': 'Question',
        name: 'Si può detrarre la ristrutturazione del bagno nel 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, la ristrutturazione del bagno rientra tra gli interventi di manutenzione straordinaria detraibili al 50% per la prima casa (massimo 96.000 euro di spesa) e al 36% per altri immobili. La detrazione si recupera in 10 rate annuali. È obbligatorio pagare con bonifico parlante e presentare la CILA.'
        }
      },
      {
        '@type': 'Question',
        name: 'Serve la CILA per ristrutturare il bagno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, per una ristrutturazione completa del bagno che prevede il rifacimento degli impianti idraulici è necessaria la CILA (Comunicazione di Inizio Lavori Asseverata). Deve essere redatta e presentata da un tecnico abilitato prima dell\'inizio dei lavori. Senza CILA si perde il diritto alla detrazione fiscale.'
        }
      },
      {
        '@type': 'Question',
        name: 'Meglio la doccia o la vasca nel bagno ristrutturato?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nel 2026 la tendenza è nettamente verso la doccia a filo pavimento (walk-in), che offre maggiore praticità, accessibilità e un design più moderno. La vasca freestanding resta una scelta valida in bagni ampi (oltre 8 mq) dove può diventare elemento di design. La scelta dipende dallo spazio disponibile e dalle esigenze personali.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali sono i materiali migliori per il bagno nel 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I materiali più apprezzati nel 2026 sono il gres porcellanato effetto pietra o cemento per pavimenti e pareti, la resina per superfici continue senza fughe, il Solid Surface o il Corian per piani lavabo, e la rubinetteria in acciaio inox o nero opaco. Il gres resta il miglior rapporto qualità-prezzo per durata e manutenzione.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quanto costa rifare l\'impianto idraulico del bagno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il rifacimento completo dell\'impianto idraulico di un bagno costa mediamente tra 1.500 e 3.500 euro, incluse le tracce a muro, le tubature nuove in multistrato, gli scarichi e gli allacci ai sanitari. Se si devono spostare gli scarichi principali o modificare la colonna di scarico condominiale, il costo può salire fino a 5.000 euro.'
        }
      },
      {
        '@type': 'Question',
        name: 'Si può ristrutturare il bagno senza rompere le piastrelle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, esistono soluzioni per rinnovare il bagno senza demolire le piastrelle esistenti: la posa di gres sottile sopra le vecchie piastrelle (spessore 3-5 mm), la resina decorativa applicata direttamente sulle superfici, o i pannelli in PVC per pareti. Tuttavia, se gli impianti sono vecchi o non a norma, la demolizione resta la scelta migliore per un risultato duraturo.'
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${articleData.title} | Renova Solution`}
        description={articleData.excerpt}
        keywords="ristrutturazione bagno costi, rifacimento bagno 2026, bonus ristrutturazione bagno, costo bagno al mq, ristrutturazione bagno completa, bagno moderno 2026, impianto idraulico bagno"
        ogType="article"
        canonical={`https://www.renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogPostSchema(articleData.title, articleData.excerpt, `https://www.renovasolution.it/blog/${articleData.slug}`, `https://www.renovasolution.it${articleData.image}`, articleData.dateISO, articleData.author))}</script>

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
                Il <strong>bagno</strong> e la cucina sono i due ambienti che invecchiano prima in una casa. Piastrelle scheggiate,
                sanitari datati, rubinetteria che perde, impianto idraulico degli anni '80: sono segnali che il momento di
                intervenire e arrivato. In questa guida analizziamo nel dettaglio la <strong>ristrutturazione del bagno nel 2026</strong>:
                quanto costa davvero, quanto tempo serve, quali materiali scegliere, le tendenze di design piu attuali e soprattutto
                come sfruttare il <strong>bonus ristrutturazione al 50%</strong> per dimezzare la spesa. Se stai pensando di
                rifare il bagno in Friuli Venezia Giulia o Veneto, qui trovi tutto quello che ti serve sapere prima di iniziare.
              </p>

              {/* 1. Perche ristrutturare il bagno nel 2026 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Perche ristrutturare il bagno nel 2026</h2>
              <p>
                Il bagno non e solo un ambiente funzionale: e lo spazio del benessere quotidiano. Un bagno obsoleto non
                e soltanto brutto da vedere — e anche inefficiente dal punto di vista energetico e idrico, potenzialmente
                pericoloso (pavimenti scivolosi, impianti non a norma) e penalizzante per il valore dell'immobile.
                Ecco perche il 2026 e l'anno giusto per intervenire:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Detrazione fiscale al 50%:</strong> il bonus ristrutturazione per la prima casa e confermato nel 2026, con tetto di spesa di 96.000 euro. Ristrutturare il bagno rientra pienamente tra gli interventi agevolabili.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Risparmio idrico:</strong> i sanitari e la rubinetteria di ultima generazione riducono il consumo d'acqua fino al 40-50% rispetto ai modelli degli anni '90. Un investimento che si ripaga in bolletta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Valore dell'immobile:</strong> un bagno moderno e curato incide direttamente sulla percezione dell'acquirente. Secondo le stime di settore, un bagno ristrutturato puo aumentare il valore dell'immobile del 5-8%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Sicurezza e normativa:</strong> gli impianti idraulici ed elettrici realizzati prima degli anni 2000 spesso non sono conformi alle normative vigenti. La ristrutturazione e l'occasione per mettersi in regola.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Comfort e benessere:</strong> docce walk-in, riscaldamento a pavimento, illuminazione LED calibrata e ventilazione meccanica trasformano il bagno in un ambiente dove prendersi cura di se stessi.</span>
                </li>
              </ul>

              {/* 2. Cosa comprende la ristrutturazione del bagno */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Cosa comprende la ristrutturazione completa del bagno</h2>
              <p>
                Prima di parlare di costi, e fondamentale capire <strong>quali lavori</strong> sono inclusi in una
                ristrutturazione completa del bagno. Non tutti i rifacimenti sono uguali: la differenza tra un semplice
                restyling e un intervento integrale e enorme, sia in termini di costi che di risultato.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Rifacimento parziale (restyling)</h3>
              <p>
                Un restyling del bagno comprende interventi superficiali che non toccano gli impianti. Si tratta tipicamente di:
              </p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione dei sanitari (wc, bidet, lavabo) mantenendo gli attacchi esistenti</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Nuova rubinetteria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Posa di piastrelle sopra le esistenti (con gres sottile da 3-5 mm)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Sostituzione del mobile lavabo e dello specchio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Tinteggiatura delle pareti non piastrellate</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Ristrutturazione completa</h3>
              <p>
                Una <strong>ristrutturazione completa del bagno</strong> prevede la demolizione totale e il rifacimento
                integrale dell'ambiente. Comprende:
              </p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Demolizione di pavimenti, rivestimenti e massetto esistente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rimozione di sanitari, rubinetteria e mobili</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Rifacimento completo dell'impianto idraulico</strong> (tubature di adduzione e scarico)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rifacimento dell'impianto elettrico del bagno (illuminazione, prese, scaldasalviette)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Impermeabilizzazione del piatto doccia e delle zone bagnate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Nuovo massetto e posa di pavimenti e rivestimenti</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Installazione di nuovi sanitari, rubinetteria e piatto doccia o vasca</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Montaggio di mobile lavabo, specchiera, accessori</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Smaltimento dei materiali di risulta (calcinacci, sanitari vecchi)</span>
                </li>
              </ul>
              <p>
                La ristrutturazione completa e l'opzione consigliata quando l'<Link to="/ristrutturazioni/impianti-idraulici" className="text-[#C8E600] hover:underline font-semibold">impianto idraulico</Link> ha
                piu di 25-30 anni o quando si desidera modificare la disposizione dei sanitari. Intervenire solo sulle
                superfici lasciando impianti vecchi e un risparmio apparente che si paga nel tempo con perdite d'acqua,
                problemi di pressione e guasti.
              </p>

              {/* 3. Costi al metro quadro */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Quanto costa ristrutturare il bagno nel 2026: costi al metro quadro</h2>
              <p>
                Il <strong>costo della ristrutturazione del bagno</strong> dipende da tre fattori principali: la metratura
                dell'ambiente, il livello dei materiali scelti e la complessita degli interventi impiantistici. In Friuli
                Venezia Giulia e Veneto, i costi medi per il 2026 si distribuiscono su tre fasce:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#C8E600] text-black">
                      <th className="p-3 text-left font-bold">Fascia</th>
                      <th className="p-3 text-left font-bold">Costo al m²</th>
                      <th className="p-3 text-left font-bold">Caratteristiche</th>
                      <th className="p-3 text-left font-bold">Esempio bagno 7 m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="p-3 font-semibold text-gray-800">Economica</td>
                      <td className="p-3 text-gray-700">€ 800 – 1.200</td>
                      <td className="p-3 text-gray-600">Gres porcellanato base, sanitari standard, rubinetteria cromo entry-level</td>
                      <td className="p-3 font-semibold text-gray-800">€ 5.600 – 8.400</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <td className="p-3 font-semibold text-gray-800">Media</td>
                      <td className="p-3 text-gray-700">€ 1.200 – 1.800</td>
                      <td className="p-3 text-gray-600">Gres effetto pietra/cemento, sanitari sospesi, rubinetteria di marca, doccia walk-in</td>
                      <td className="p-3 font-semibold text-gray-800">€ 8.400 – 12.600</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-semibold text-gray-800">Premium</td>
                      <td className="p-3 text-gray-700">€ 1.800 – 2.500+</td>
                      <td className="p-3 text-gray-600">Gres grande formato o resina, sanitari di design, rubinetteria nera opaca, riscaldamento a pavimento</td>
                      <td className="p-3 font-semibold text-gray-800">€ 12.600 – 17.500+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Dettaglio costi per singola voce</h3>
              <p>
                Per capire meglio dove va il budget, ecco il <strong>dettaglio dei costi</strong> per le principali voci
                di una ristrutturazione completa di un bagno di circa 6-8 m²:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="p-3 text-left font-bold">Voce di costo</th>
                      <th className="p-3 text-left font-bold">Fascia economica</th>
                      <th className="p-3 text-left font-bold">Fascia media</th>
                      <th className="p-3 text-left font-bold">Fascia premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="p-3 text-gray-800">Demolizioni e smaltimento</td>
                      <td className="p-3 text-gray-700">€ 600 – 900</td>
                      <td className="p-3 text-gray-700">€ 600 – 900</td>
                      <td className="p-3 text-gray-700">€ 800 – 1.200</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <td className="p-3 text-gray-800">Impianto idraulico</td>
                      <td className="p-3 text-gray-700">€ 1.200 – 1.800</td>
                      <td className="p-3 text-gray-700">€ 1.800 – 2.500</td>
                      <td className="p-3 text-gray-700">€ 2.500 – 3.500</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="p-3 text-gray-800">Impianto elettrico bagno</td>
                      <td className="p-3 text-gray-700">€ 400 – 600</td>
                      <td className="p-3 text-gray-700">€ 600 – 900</td>
                      <td className="p-3 text-gray-700">€ 900 – 1.500</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <td className="p-3 text-gray-800">Massetto e impermeabilizzazione</td>
                      <td className="p-3 text-gray-700">€ 500 – 800</td>
                      <td className="p-3 text-gray-700">€ 800 – 1.200</td>
                      <td className="p-3 text-gray-700">€ 1.200 – 1.800</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="p-3 text-gray-800">Piastrelle (fornitura + posa)</td>
                      <td className="p-3 text-gray-700">€ 1.000 – 1.500</td>
                      <td className="p-3 text-gray-700">€ 1.500 – 2.500</td>
                      <td className="p-3 text-gray-700">€ 2.500 – 4.500</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <td className="p-3 text-gray-800">Sanitari e rubinetteria</td>
                      <td className="p-3 text-gray-700">€ 800 – 1.200</td>
                      <td className="p-3 text-gray-700">€ 1.500 – 2.500</td>
                      <td className="p-3 text-gray-700">€ 2.500 – 5.000</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="p-3 text-gray-800">Box doccia o vasca</td>
                      <td className="p-3 text-gray-700">€ 400 – 800</td>
                      <td className="p-3 text-gray-700">€ 800 – 1.500</td>
                      <td className="p-3 text-gray-700">€ 1.500 – 3.000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 text-gray-800">Mobile lavabo e specchiera</td>
                      <td className="p-3 text-gray-700">€ 300 – 600</td>
                      <td className="p-3 text-gray-700">€ 600 – 1.200</td>
                      <td className="p-3 text-gray-700">€ 1.200 – 3.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Attenzione ai preventivi troppo bassi
                </h4>
                <p className="text-amber-800 text-sm">
                  Un preventivo per la ristrutturazione completa di un bagno di 6-7 m² inferiore a 4.000-5.000 euro
                  dovrebbe insospettire. Spesso nasconde l'esclusione dell'impianto idraulico, dello smaltimento
                  macerie o dell'IVA. Chiedi sempre un <strong>computo metrico dettagliato</strong> con tutte le voci
                  esplicitate. Se vuoi un preventivo trasparente,{' '}
                  <Link to="/preventivo" className="text-amber-900 underline font-semibold">richiedilo gratuitamente qui</Link>.
                </p>
              </div>

              {/* 4. Tempi di ristrutturazione */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Tempi di ristrutturazione del bagno: il cronoprogramma realistico</h2>
              <p>
                "Quanto tempo ci vuole per rifare il bagno?" e la domanda che riceviamo piu spesso. La risposta
                dipende dal tipo di intervento: un restyling richiede pochi giorni, una ristrutturazione completa
                puo richiedere da 2 a 5 settimane. Ecco il <strong>cronoprogramma tipo</strong> per una ristrutturazione
                completa di un bagno di 6-8 m²:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <div className="space-y-3">
                  {[
                    { week: 'Giorno 1-2', phase: 'Protezione delle aree adiacenti, demolizione pavimenti, rivestimenti e sanitari' },
                    { week: 'Giorno 3', phase: 'Smaltimento macerie e pulizia del locale' },
                    { week: 'Giorno 4-6', phase: 'Tracce a muro, posa nuove tubature idrauliche (adduzione e scarico) e cablaggio elettrico' },
                    { week: 'Giorno 7-8', phase: 'Chiusura tracce, intonaco, impermeabilizzazione zona doccia/vasca' },
                    { week: 'Giorno 9-10', phase: 'Realizzazione massetto (se necessario) e tempi di asciugatura' },
                    { week: 'Giorno 11-14', phase: 'Posa piastrelle pavimento e rivestimento pareti, stuccatura fughe' },
                    { week: 'Giorno 15-17', phase: 'Installazione sanitari, rubinetteria, box doccia, scaldasalviette' },
                    { week: 'Giorno 18-19', phase: 'Montaggio mobile lavabo, specchiera, accessori, completamento elettrico' },
                    { week: 'Giorno 20', phase: 'Sigillature finali, pulizia, collaudo impianti e consegna' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="bg-[#C8E600] text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap">{item.week}</span>
                      <span className="text-gray-700 text-sm">{item.phase}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Durata totale indicativa: <strong>3-4 settimane lavorative</strong> per una ristrutturazione completa.
                  Tempi piu lunghi (fino a 5 settimane) se si deve spostare la posizione dei sanitari o realizzare il riscaldamento a pavimento.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Consiglio pratico:</strong> durante i lavori il bagno non sara utilizzabile. Se la casa ha un
                  solo bagno, organizzati in anticipo: chiedi a un vicino, a un familiare, oppure verifica se l'impresa
                  puo installare un <strong>bagno chimico temporaneo</strong>. La pianificazione dei tempi e fondamentale
                  per ridurre al minimo il disagio.
                </p>
              </div>

              {/* 5. L'impianto idraulico */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. L'impianto idraulico: il cuore della ristrutturazione del bagno</h2>
              <p>
                L'<Link to="/ristrutturazioni/impianti-idraulici" className="text-[#C8E600] hover:underline font-semibold">impianto idraulico</Link> e
                l'elemento piu importante e spesso sottovalutato della ristrutturazione del bagno. Un impianto
                fatto bene dura 40-50 anni senza problemi; un impianto fatto male causa infiltrazioni, perdite di
                pressione e danni a pareti e pavimenti nel giro di pochi anni.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Quando e obbligatorio rifare l'impianto</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Tubature in piombo:</strong> se la casa e stata costruita prima degli anni '70, le tubature dell'acqua potrebbero essere in piombo. La sostituzione e obbligatoria per ragioni sanitarie.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Tubature in ferro zincato:</strong> tipiche degli anni '70-'90, sono soggette a corrosione e incrostazioni. Dopo 30-40 anni vanno sostituite.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Scarichi intasati o lenti:</strong> se l'acqua del lavandino o della doccia defluisce con difficolta nonostante la pulizia, il problema potrebbe essere nelle tubature di scarico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Perdite e macchie di umidita:</strong> macchie sui muri o sul soffitto del piano inferiore sono segno inequivocabile di perdite nell'impianto idraulico o nella impermeabilizzazione.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Materiali per le tubature nel 2026</h3>
              <p>
                Le tubature moderne sono realizzate in <strong>multistrato (PEX-AL-PEX)</strong> per l'acqua calda e
                fredda e in <strong>polipropilene (PP) o PVC</strong> per gli scarichi. Il multistrato offre eccellente
                resistenza alla corrosione, flessibilita nella posa e una durata stimata di oltre 50 anni. E il
                materiale standard per tutti gli impianti idraulici di nuova realizzazione.
              </p>
              <p className="mt-4">
                I raccordi possono essere a pressare (piu rapidi e affidabili) o a compressione. Per il bagno
                consigliamo sempre i raccordi a pressare: eliminano il rischio di perdite dovute a serraggio insufficiente.
              </p>

              {/* 6. Tendenze di design per il bagno 2026 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Tendenze di design per il bagno nel 2026</h2>
              <p>
                Il design del bagno nel 2026 si muove lungo tre direttrici: <strong>minimalismo funzionale</strong>,
                <strong> materiali naturali</strong> e <strong>tecnologia integrata</strong>. Ecco le tendenze piu
                rilevanti che osserviamo nei progetti dei nostri clienti:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Doccia walk-in a filo pavimento</h3>
                  <p className="text-gray-700 text-sm">
                    La doccia senza piatto rialzato, con scarico a filo pavimento e parete in vetro fisso (senza porta),
                    e la soluzione piu richiesta nel 2026. Offre un aspetto pulito e minimale, facilita la pulizia ed
                    e accessibile anche a persone con mobilita ridotta. Richiede un'impermeabilizzazione perfetta e
                    una pendenza accurata verso lo scarico (1-2%).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Sanitari sospesi</h3>
                  <p className="text-gray-700 text-sm">
                    WC e bidet sospesi (a parete) con cassetta di scarico incassata sono ormai lo standard di qualsiasi
                    bagno moderno. Facilitano enormemente la pulizia del pavimento, danno un senso di leggerezza
                    all'ambiente e permettono di regolare l'altezza di installazione. Richiedono una controparete
                    in cartongesso per alloggiare la struttura portante (telaio autoportante).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Gres effetto pietra naturale e grande formato</h3>
                  <p className="text-gray-700 text-sm">
                    Le piastrelle in gres porcellanato effetto pietra (travertino, ardesia, marmo) o cemento
                    in grande formato (60x120 o 120x120 cm) riducono le fughe e ampliano visivamente lo spazio.
                    Sono resistenti all'acqua, antigraffio e facili da pulire. Nel 2026 i colori piu richiesti
                    sono i toni caldi della terra, il greige, il grigio antracite e il bianco avorio.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Rubinetteria nera opaca e finiture metalliche scure</h3>
                  <p className="text-gray-700 text-sm">
                    La rubinetteria nera opaca (matt black) o in ottone brunito continua a essere tra le scelte
                    di design piu apprezzate. Crea un contrasto elegante con i rivestimenti chiari e dona
                    carattere all'ambiente. Alternative apprezzate: oro rosa, nickel spazzolato e gun metal.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Nicchia doccia e mensole incassate</h3>
                  <p className="text-gray-700 text-sm">
                    Le nicchie incassate nella parete della doccia per riporre shampoo e sapone sostituiscono
                    le mensole a ventosa o i portasapone esterni. Si realizzano durante la fase muraria e si
                    rivestono con lo stesso gres delle pareti, per un effetto integrato e pulito.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Illuminazione LED integrata</h3>
                  <p className="text-gray-700 text-sm">
                    L'illuminazione del bagno nel 2026 punta su LED incassati a soffitto (IP44 o IP65 nella
                    zona doccia), strisce LED dietro lo specchio per un'illuminazione morbida e indiretta,
                    e specchi retroilluminati con luce a temperatura regolabile. La luce giusta trasforma
                    completamente la percezione dell'ambiente.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Vasca freestanding (per bagni ampi)</h3>
                  <p className="text-gray-700 text-sm">
                    Nei bagni piu grandi (oltre 9-10 m²) la vasca freestanding resta un elemento di grande
                    impatto estetico. Nel 2026 si preferiscono forme ovali o tondeggianti, in materiali
                    come il Solid Surface bianco opaco o la resina. Richiede un attacco idraulico a pavimento
                    e uno scarico dedicato.
                  </p>
                </div>
              </div>

              {/* 7. Materiali: guida alla scelta */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Materiali per il bagno: guida alla scelta nel 2026</h2>
              <p>
                La scelta dei materiali incide profondamente sul costo finale, sull'estetica e sulla durata nel
                tempo del bagno ristrutturato. Ecco una panoramica dei materiali piu utilizzati, con vantaggi
                e svantaggi di ciascuno:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Pavimenti e rivestimenti</h3>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Gres porcellanato</h4>
                  <p className="text-sm text-gray-600 mb-2">Il materiale piu versatile e il miglior rapporto qualita-prezzo. Resistente all'acqua, ai graffi e agli agenti chimici. Disponibile in infiniti formati, colori e finiture (effetto legno, pietra, cemento, marmo).</p>
                  <p className="text-xs text-gray-500"><strong>Costo fornitura:</strong> € 15-80/m² | <strong>Posa:</strong> € 25-40/m²</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Resina decorativa</h4>
                  <p className="text-sm text-gray-600 mb-2">Superficie continua senza fughe, ideale per un effetto minimal e moderno. Applicabile anche sopra piastrelle esistenti. Richiede manodopera specializzata e una corretta preparazione del supporto.</p>
                  <p className="text-xs text-gray-500"><strong>Costo fornitura + posa:</strong> € 80-150/m²</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Mosaico</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfetto per zone specifiche (nicchia doccia, fascia decorativa, parete d'accento). Disponibile in vetro, ceramica o pietra naturale. Posa piu lenta e costosa rispetto al gres.</p>
                  <p className="text-xs text-gray-500"><strong>Costo fornitura:</strong> € 30-200/m² | <strong>Posa:</strong> € 40-60/m²</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pietra naturale</h4>
                  <p className="text-sm text-gray-600 mb-2">Marmo, travertino, ardesia: materiali pregiati che donano un aspetto lussuoso. Richiedono trattamenti idrorepellenti periodici e maggiore manutenzione rispetto al gres.</p>
                  <p className="text-xs text-gray-500"><strong>Costo fornitura:</strong> € 50-200/m² | <strong>Posa:</strong> € 35-50/m²</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Sanitari: cosa scegliere</h3>
              <p>
                I sanitari rappresentano circa il 15-20% del costo totale del bagno. La scelta principale e tra
                sanitari <strong>a terra</strong> (tradizionali, piu economici) e <strong>sospesi</strong> (moderni,
                piu costosi ma piu pratici). Nel 2026 i sanitari sospesi dominano il mercato, sia per l'estetica
                che per la facilita di pulizia.
              </p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>WC sospeso con scarico rimless:</strong> senza brida interna, si pulisce con un solo gesto. Consuma meno acqua (3/4,5 litri per scarico). Prezzo: € 200-800 a seconda della marca.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Bidet sospeso:</strong> abbinato al WC nella stessa linea estetica. In alternativa, il doccino igienico integrato nel WC e un'opzione sempre piu diffusa nei bagni piccoli.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Lavabo:</strong> da incasso nel top, da appoggio (a bacinella) o integrato nel mobile. Il lavabo da appoggio e il piu di tendenza ma richiede un mobile con piano resistente all'acqua.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Rubinetteria: cromo, nero o oro?</h3>
              <p>
                La rubinetteria non e solo un dettaglio funzionale: e un elemento di design che definisce il
                carattere del bagno. Nel 2026 le finiture piu richieste sono:
              </p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Nero opaco (matt black):</strong> elegante, contemporaneo, perfetto con gres chiaro. Prezzo medio: € 150-400 per miscelatore lavabo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Cromo lucido:</strong> il classico intramontabile. Facile da pulire, si abbina a tutto. Prezzo medio: € 80-250 per miscelatore lavabo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Nickel spazzolato / Gun metal:</strong> finiture neutre e raffinate, meno visibili le impronte d'acqua. Prezzo medio: € 200-500 per miscelatore lavabo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Oro rosa / Ottone brunito:</strong> per chi cerca un tocco caldo e distintivo. Da dosare con attenzione. Prezzo medio: € 250-600 per miscelatore lavabo.</span>
                </li>
              </ul>

              {/* 8. Doccia vs vasca */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Doccia o vasca? La scelta giusta per il tuo bagno</h2>
              <p>
                La scelta tra doccia e vasca e una delle decisioni piu personali nella ristrutturazione del bagno.
                Non esiste una risposta universale: dipende dallo spazio, dalle abitudini e dal budget. Ecco
                un confronto oggettivo per aiutarti a decidere:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-[#C8E600]/10 rounded-xl p-5 border border-[#C8E600]/30">
                  <h4 className="font-bold text-gray-900 mb-3">Doccia walk-in</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>+ Occupa meno spazio (da 80x80 cm)</li>
                    <li>+ Consumo d'acqua inferiore (-60% vs vasca)</li>
                    <li>+ Accessibile a tutti (no gradino)</li>
                    <li>+ Pulizia rapida e semplice</li>
                    <li>+ Design contemporaneo</li>
                    <li>- Meno rilassante (no immersione)</li>
                    <li>- Richiede impermeabilizzazione perfetta</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-800 mt-3">Costo: € 800 – 3.000</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Vasca da bagno</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>+ Relax e benessere (immersione)</li>
                    <li>+ Ideale per bambini piccoli</li>
                    <li>+ Puo diventare elemento di design</li>
                    <li>+ Combinabile con soffione doccia</li>
                    <li>- Occupa piu spazio (minimo 150x70 cm)</li>
                    <li>- Consumo d'acqua elevato (150-200 litri)</li>
                    <li>- Meno accessibile per anziani</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-800 mt-3">Costo: € 400 – 4.000 (freestanding)</p>
                </div>
              </div>

              <p>
                <strong>Il nostro consiglio:</strong> se il bagno e l'unico della casa e la metratura lo consente
                (almeno 7-8 m²), valuta la <strong>soluzione combinata</strong>: vasca con colonna doccia integrata.
                Se invece hai due bagni, il bagno principale con doccia walk-in ampia e il secondo con vasca
                (o doccia compatta) e la configurazione piu funzionale.
              </p>

              {/* 9. Riscaldamento del bagno */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Riscaldamento del bagno: soluzioni per il comfort invernale</h2>
              <p>
                Il bagno e l'ambiente dove la temperatura percepita conta di piu: uscire dalla doccia in un bagno
                freddo e sgradevole. Ecco le soluzioni di riscaldamento piu efficaci nel 2026:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Riscaldamento a pavimento radiante</h3>
                  <p className="text-gray-700 text-sm">
                    La soluzione ideale per il bagno: il calore uniforme dal basso garantisce un comfort senza eguali,
                    soprattutto sui pavimenti in gres. Si installa durante la fase di rifacimento del massetto, quindi
                    e perfetto in caso di ristrutturazione completa. Costo aggiuntivo: circa € 50-80/m².
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Scaldasalviette elettrico o idraulico</h3>
                  <p className="text-gray-700 text-sm">
                    Lo scaldasalviette e un radiatore specifico per il bagno che scalda l'ambiente e asciuga gli
                    asciugamani. Disponibile in versione idraulica (collegato all'impianto di riscaldamento) o
                    elettrica (indipendente, con timer e termostato). Nel 2026 i modelli di design in acciaio
                    inox o nero opaco sono particolarmente apprezzati. Costo: € 200-800 + installazione.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-[#C8E600]">
                  <h3 className="font-bold text-gray-900 mb-1">Termoventilatore a parete</h3>
                  <p className="text-gray-700 text-sm">
                    Soluzione economica e rapida per riscaldare il bagno in pochi minuti. Si incassa a parete
                    durante la ristrutturazione e si attiva con un timer o un sensore di presenza. Non sostituisce
                    un sistema di riscaldamento principale ma e un ottimo complemento. Costo: € 100-300 + installazione.
                  </p>
                </div>
              </div>

              {/* 10. Bonus fiscali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Bonus ristrutturazione bagno 2026: la detrazione fiscale al 50%</h2>
              <p>
                La <strong>ristrutturazione del bagno</strong> rientra pienamente tra gli interventi di <strong>manutenzione
                straordinaria</strong> ammessi al bonus ristrutturazione. Ecco come funziona nel 2026:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-[#C8E600]/10 rounded-xl p-5 border border-[#C8E600]/30">
                  <span className="text-4xl font-bold text-gray-900">50%</span>
                  <p className="font-semibold text-gray-900 mt-2">Abitazione principale</p>
                  <ul className="text-sm text-gray-700 mt-3 space-y-1">
                    <li>• Spesa massima: <strong>€ 96.000</strong></li>
                    <li>• Detrazione massima: <strong>€ 48.000</strong></li>
                    <li>• Ripartita in 10 anni</li>
                    <li>• Include tutti i lavori del bagno</li>
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

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Quali lavori del bagno sono detraibili</h3>
              <p>
                Attenzione: non tutti gli interventi sul bagno sono automaticamente detraibili. La detrazione si
                applica solo agli interventi di <strong>manutenzione straordinaria</strong>. Ecco la distinzione:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-green-900 mb-2">Detraibili (manutenzione straordinaria)</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Rifacimento impianto idraulico</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Rifacimento impianto elettrico</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Sostituzione pavimenti e rivestimenti</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Sostituzione sanitari con modifica impianto</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Impermeabilizzazione</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Modifica della distribuzione interna</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Eliminazione barriere architettoniche</span></li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5">
                  <h4 className="font-bold text-red-900 mb-2">NON detraibili (manutenzione ordinaria)</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Sostituzione rubinetto senza modifiche all'impianto</span></li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Tinteggiatura pareti</span></li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Sostituzione specchio o accessori</span></li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Sostituzione mobile bagno</span></li>
                    <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Riparazione di un singolo sanitario</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Regola pratica:</strong> perche la ristrutturazione del bagno sia detraibile, deve trattarsi
                  di un intervento <strong>complessivo</strong> che comporti la modifica degli impianti. La semplice
                  sostituzione dei sanitari "uno a uno" senza toccare le tubature e considerata manutenzione ordinaria
                  e NON e detraibile sulla singola unita abitativa (lo e solo sulle parti comuni condominiali).
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Come pagare per ottenere la detrazione</h3>
              <p>
                Per accedere alla detrazione fiscale e <strong>obbligatorio</strong> pagare tutti i lavori tramite
                <strong> bonifico parlante</strong> (bancario o postale). Il bonifico deve riportare:
              </p>
              <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-2 text-sm">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Causale:</strong> "Bonifico per detrazione fiscale ai sensi dell'art. 16-bis del DPR 917/86"</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Codice Fiscale del beneficiario</strong> della detrazione</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Partita IVA o Codice Fiscale dell'impresa</strong> che esegue i lavori</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Esempio pratico: quanto risparmi con il bonus</h3>
              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <p className="text-sm text-gray-700 mb-3">
                  Immagina di spendere <strong>€ 12.000</strong> per la ristrutturazione completa del bagno della tua prima casa:
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-500">Costo totale lavori:</span> <strong>€ 12.000</strong></p>
                  <p><span className="text-gray-500">Detrazione 50%:</span> <strong>€ 6.000</strong></p>
                  <p><span className="text-gray-500">Recupero annuo in 10 anni:</span> <strong>€ 600/anno</strong></p>
                  <p className="pt-2 border-t border-gray-200"><span className="text-gray-500">Spesa netta effettiva:</span> <strong className="text-lg">€ 6.000</strong></p>
                </div>
              </div>

              {/* 11. Pratiche edilizie */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Pratiche edilizie per la ristrutturazione del bagno: serve la CILA?</h2>
              <p>
                Si, per una ristrutturazione completa del bagno che prevede il <strong>rifacimento degli impianti</strong>
                e necessaria la <strong>CILA</strong> (Comunicazione di Inizio Lavori Asseverata). La CILA deve
                essere redatta da un tecnico abilitato (geometra, architetto o ingegnere) e presentata al Comune
                prima dell'inizio dei lavori.
              </p>
              <p className="mt-4">
                <strong>Quando NON serve la CILA:</strong> se ci si limita a sostituire i sanitari senza modificare
                gli impianti (manutenzione ordinaria), non serve alcuna pratica edilizia. Ma in questo caso, come
                detto sopra, non si ha diritto nemmeno alla detrazione fiscale.
              </p>
              <p className="mt-4">
                <strong>Costo della CILA:</strong> il compenso del tecnico per la redazione e presentazione della
                CILA varia da <strong>€ 500 a € 1.500</strong> a seconda della complessita e della zona. E un
                costo che rientra tra le spese detraibili.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Non saltare la CILA
                </h4>
                <p className="text-amber-800 text-sm">
                  Ristrutturare il bagno senza presentare la CILA espone a sanzioni amministrative, alla perdita
                  della detrazione fiscale e a problemi in caso di futura vendita dell'immobile. E un adempimento
                  semplice e poco costoso che tutela il proprietario sotto ogni aspetto. Per una <Link to="/ristrutturazioni/ristrutturazione-completa" className="text-amber-900 underline font-semibold">ristrutturazione completa</Link> la
                  CILA e sempre necessaria.
                </p>
              </div>

              {/* 12. Errori da evitare */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. I 7 errori piu comuni nella ristrutturazione del bagno</h2>
              <p>
                Anni di esperienza nel settore ci hanno insegnato quali sono gli errori che si ripetono piu
                frequentemente. Eccoli, per non cascarci:
              </p>

              <div className="space-y-3 my-6">
                {[
                  { n: '01', title: 'Sottovalutare l\'impianto idraulico', desc: 'Rifare le piastrelle e i sanitari lasciando le tubature vecchie e il classico risparmio che si paga carissimo. Se le tubature hanno piu di 25 anni, vanno sostituite. Punto.' },
                  { n: '02', title: 'Non impermeabilizzare correttamente la zona doccia', desc: 'L\'impermeabilizzazione sotto le piastrelle nella zona doccia e fondamentale per evitare infiltrazioni al piano inferiore. Si realizza con membrane liquide o in telo. Un\'operazione che costa poche centinaia di euro e previene danni da migliaia.' },
                  { n: '03', title: 'Scegliere le piastrelle solo per l\'estetica', desc: 'Nel bagno il pavimento deve essere antiscivolo (classe R10 minimo). Piastrelle lucide e lisce sul pavimento del bagno sono un pericolo concreto, soprattutto con i piedi bagnati. Scegli sempre finiture matt o strutturate per il pavimento.' },
                  { n: '04', title: 'Dimenticare le prese elettriche e i punti luce', desc: 'Phon, rasoio elettrico, spazzolino elettrico, piastra: le prese nel bagno servono. Pianificale nella fase progettuale, non dopo aver posato le piastrelle. Ricorda che nel bagno le prese devono rispettare le zone di sicurezza (norma CEI 64-8).' },
                  { n: '05', title: 'Non prevedere ventilazione adeguata', desc: 'Un bagno senza finestra o con scarsa ventilazione sviluppa muffa e cattivi odori in pochi mesi. Se non c\'e finestra, installa un aspiratore meccanico con timer. Se c\'e finestra ma piccola, valuta un aspiratore di supporto.' },
                  { n: '06', title: 'Pagare senza bonifico parlante', desc: 'Anche un solo pagamento in contanti o con bonifico ordinario fa perdere il diritto alla detrazione sull\'intera spesa relativa a quel pagamento. Ogni fattura deve essere saldata con bonifico parlante.' },
                  { n: '07', title: 'Non verificare la pendenza dello scarico doccia', desc: 'La pendenza del pavimento verso lo scarico della doccia walk-in deve essere di almeno l\'1-2%. Una pendenza insufficiente causa ristagni d\'acqua, cattivi odori e infiltrazioni. Verifica durante la posa del massetto, non dopo.' },
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

              {/* 13. Case study */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Caso reale: ristrutturazione bagno 7 m² a Pordenone</h2>
              <p>
                Per rendere tutto piu concreto, ecco il resoconto di una ristrutturazione completa di un bagno
                di <strong>7 m² in un appartamento a Pordenone</strong>, realizzata di recente.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-gray-900 mb-4">Dati dell'intervento</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><span className="text-gray-500">Immobile:</span> <strong>Appartamento anni '90, bagno principale 7 m²</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Stato iniziale:</span> <strong>Vasca in ghisa, piastrelle 20x20, tubature in ferro</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Durata lavori:</span> <strong>18 giorni lavorativi</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Pratica edilizia:</span> <strong>CILA</strong></p>
                  </div>
                  <div>
                    <p><span className="text-gray-500">Costo totale lavori:</span> <strong>€ 11.500 (IVA inclusa)</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Detrazione 50%:</span> <strong>€ 5.750</strong> (su 10 anni)</p>
                    <p className="mt-1"><span className="text-gray-500">Spesa netta effettiva:</span> <strong>€ 5.750</strong></p>
                    <p className="mt-1"><span className="text-gray-500">Costo al m²:</span> <strong>€ 1.643/m²</strong></p>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900 mt-5 mb-3">Lavori eseguiti</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Demolizione completa (pavimento, rivestimento, vasca, sanitari)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Rifacimento completo impianto idraulico in multistrato</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Rifacimento impianto elettrico con 3 punti luce e 2 prese</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Sostituzione vasca con doccia walk-in 120x80 a filo pavimento</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Posa gres porcellanato effetto cemento 60x120 (pavimento e pareti)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Sanitari sospesi rimless (WC + bidet) con cassetta incassata</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Rubinetteria nero opaco (miscelatore lavabo, miscelatore doccia incassato)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Mobile lavabo sospeso 80 cm con lavabo da appoggio</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Specchio retroilluminato LED 70x90 cm</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" /><span>Scaldasalviette elettrico cromato con timer</span></li>
                </ul>

                <div className="bg-[#C8E600]/10 rounded-lg p-4 mt-5">
                  <p className="text-sm font-semibold text-gray-800">
                    Risultato: un bagno completamente trasformato, da datato anni '90 a moderno e funzionale,
                    con un <strong>costo netto di circa € 5.750</strong> grazie alla detrazione del 50%.
                  </p>
                </div>
              </div>

              {/* 14. Bagno piccolo */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Ristrutturare un bagno piccolo: consigli per ottimizzare lo spazio</h2>
              <p>
                Molti appartamenti, soprattutto quelli costruiti negli anni '60-'80, hanno bagni di dimensioni
                ridotte (4-5 m²). Ristrutturare un bagno piccolo richiede attenzione particolare alla
                <strong> disposizione dei sanitari</strong> e alla scelta dei materiali per non creare un ambiente
                claustrofobico. Ecco i consigli piu efficaci:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Doccia al posto della vasca:</strong> il passaggio da vasca a doccia libera almeno 0,5-1 m² di spazio utile. Una doccia 80x80 cm e sufficiente per un utilizzo confortevole.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Sanitari compatti:</strong> esistono WC e bidet con profondita ridotta (48-50 cm invece dei classici 54 cm) che recuperano centimetri preziosi senza sacrificare il comfort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Mobile lavabo sospeso:</strong> liberare il pavimento sotto il lavabo crea un senso di maggiore ampiezza. Scegli un mobile di 60-70 cm con cassetti (no ante) per ottimizzare lo stoccaggio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Piastrelle grande formato:</strong> meno fughe significano un effetto visivo piu ampio. Piastrelle 60x120 o 80x80 funzionano bene anche in bagni piccoli.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Colori chiari:</strong> bianco, avorio, grigio chiaro e greige ampliano visivamente lo spazio. Evita colori scuri su tutte le pareti in bagni sotto i 5 m².</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Specchio grande:</strong> uno specchio ampio (minimo 70x90 cm) raddoppia visivamente la profondita dell'ambiente. Lo specchio retroilluminato aggiunge anche luce.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Nicchie a muro:</strong> sfrutta lo spessore delle pareti per ricavare nicchie per shampoo, sapone e asciugamani. Guadagni spazio senza ingombrare il pavimento.</span>
                </li>
              </ul>

              {/* 15. FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Domande frequenti sulla ristrutturazione del bagno</h2>

              <div className="space-y-4 my-6">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>

              {/* Conclusioni e CTA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">16. Conclusioni: il bagno dei tuoi sogni e a portata di mano</h2>
              <p>
                La <strong>ristrutturazione del bagno nel 2026</strong> e un intervento che trasforma radicalmente
                la qualita della vita quotidiana. Con costi che partono da circa 5.000-6.000 euro per un bagno
                di dimensioni standard e la possibilita di recuperare il 50% della spesa grazie alla detrazione
                fiscale, il rapporto investimento-beneficio e tra i piu vantaggiosi nel mondo della ristrutturazione.
              </p>
              <p className="mt-4">
                I punti chiave da ricordare:
              </p>
              <ul className="space-y-2 my-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Non lesinare sull'impianto idraulico: e la parte che deve durare piu a lungo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Scegli materiali resistenti all'acqua e facili da pulire (gres porcellanato su tutto).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Presenta la CILA e paga con bonifico parlante per accedere alla detrazione del 50%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Pianifica tutto prima di demolire: cambiare idea a lavori in corso costa caro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Affidati a un'impresa qualificata con esperienza documentabile nella ristrutturazione bagni.</span>
                </li>
              </ul>
              <p className="mt-4">
                <strong>Renova Solution</strong> opera in <strong>Friuli Venezia Giulia e Veneto</strong> con un team
                specializzato in <Link to="/ristrutturazioni/ristrutturazione-completa" className="text-[#C8E600] hover:underline font-semibold">ristrutturazioni complete</Link>,{' '}
                <Link to="/ristrutturazioni/impianti-idraulici" className="text-[#C8E600] hover:underline font-semibold">impianti idraulici</Link> e
                rifacimento bagni chiavi in mano. Un unico interlocutore dalla progettazione alla consegna,
                con preventivo dettagliato e tempi certi.
              </p>

              <div className="bg-[#C8E600] rounded-xl p-6 my-8 text-center">
                <h3 className="text-xl font-bold text-black mb-2">Vuoi ristrutturare il tuo bagno? Richiedi un preventivo gratuito</h3>
                <p className="text-black/80 text-sm mb-4">
                  Raccontaci il tuo progetto: dimensioni del bagno, cosa vorresti cambiare e il tuo budget indicativo.
                  Ti risponderemo entro 24 ore con una prima valutazione senza impegno.
                </p>
                <Link
                  to="/preventivo"
                  className="inline-block bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Richiedi preventivo gratuito
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Articoli correlati</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/blog/ristrutturazione-completa-casa-2026" className="group block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">Ristrutturazione</p>
                  <p className="font-semibold text-gray-900 group-hover:text-black text-sm leading-snug">Ristrutturazione completa della casa nel 2026: costi, tempi, bonus fiscali</p>
                </Link>
                <Link to="/blog/detrazioni-fiscali-2026" className="group block bg-gray-50 rounded-xl p-4 hover:bg-[#C8E600]/10 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">Fisco</p>
                  <p className="font-semibold text-gray-900 group-hover:text-black text-sm leading-snug">Detrazioni fiscali 2026: guida completa a Ecobonus e ristrutturazioni</p>
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
                {['ristrutturazione bagno', 'costo bagno al mq', 'rifacimento bagno 2026', 'bonus ristrutturazione bagno', 'doccia walk-in', 'sanitari sospesi', 'impianto idraulico bagno'].map(tag => (
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