import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, Sun, Euro, Zap, Home, TrendingUp, HelpCircle } from 'lucide-react';

export default function FotovoltaicoPompaCalore2026() {
  const articleData = {
    title: 'Fotovoltaico con pompa di calore 2026: la combinazione perfetta per azzerare le bollette',
    excerpt: 'Come abbinare impianto fotovoltaico e pompa di calore per eliminare le bollette di gas e luce. Costi, risparmi reali, dimensionamento e incentivi fiscali disponibili nel 2026.',
    date: '14 Aprile 2026',
    dateISO: '2026-04-14',
    readTime: '13 min',
    author: 'Marco Bianchi',
    category: 'Fotovoltaico',
    image: '/images/impianto-fotovoltaico.jpg',
    slug: 'fotovoltaico-pompa-calore-2026'
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
    keywords: 'fotovoltaico pompa di calore, casa senza bollette, fotovoltaico riscaldamento, autoconsumo fotovoltaico, impianto fotovoltaico 2026',
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
        name: 'Quanto costa un impianto fotovoltaico con pompa di calore nel 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un sistema completo fotovoltaico (6 kW) con pompa di calore (12 kW termici) e accumulo (10 kWh) costa tra 25.000 e 35.000 euro chiavi in mano. Con le detrazioni fiscali del 50%, il costo netto scende a 12.500-17.500 euro.'
        }
      },
      {
        '@type': 'Question',
        name: 'È possibile azzerare le bollette con fotovoltaico e pompa di calore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, con un dimensionamento corretto è possibile ridurre le bollette del 85-95%. Per arrivare vicino allo zero è necessario un impianto fotovoltaico da almeno 6 kW con batteria di accumulo da 10 kWh e una pompa di calore ad alta efficienza con COP superiore a 4.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quanti kW di fotovoltaico servono per alimentare una pompa di calore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Per una casa di 100-120 m² in zona climatica E (Friuli Venezia Giulia), servono almeno 6 kW di fotovoltaico per coprire il fabbisogno della pompa di calore e degli altri consumi domestici. Con accumulo da 10 kWh si massimizza l\'autoconsumo.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quanto si risparmia con fotovoltaico e pompa di calore rispetto a gas e rete elettrica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il risparmio annuo medio per una famiglia in Friuli Venezia Giulia è di circa 2.800-3.200 euro, considerando l\'eliminazione della bolletta del gas (circa 1.800 euro/anno) e la drastica riduzione di quella elettrica (circa 1.000-1.400 euro/anno).'
        }
      },
      {
        '@type': 'Question',
        name: 'In quanto tempo si ripaga l\'investimento fotovoltaico più pompa di calore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con le detrazioni fiscali del 50% e il risparmio in bolletta, il tempo di ritorno dell\'investimento è mediamente di 5-7 anni. Dopo il ripiego, il risparmio netto è di circa 2.800-3.200 euro all\'anno per i successivi 18-20 anni.'
        }
      },
      {
        '@type': 'Question',
        name: 'La pompa di calore funziona anche d\'inverno in Friuli Venezia Giulia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, le moderne pompe di calore aria-acqua funzionano fino a -20°C. In Friuli Venezia Giulia, dove le temperature invernali raramente scendono sotto i -5°C/-10°C, la pompa di calore lavora con ottima efficienza (COP 2.5-3.5 anche in pieno inverno).'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali incentivi fiscali sono disponibili nel 2026 per fotovoltaico e pompa di calore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nel 2026 sono disponibili la detrazione fiscale del 50% per il fotovoltaico (come ristrutturazione edilizia) e la detrazione del 50% per la pompa di calore (come efficientamento energetico). Entrambe sono recuperabili in 10 anni di dichiarazione dei redditi.'
        }
      },
      {
        '@type': 'Question',
        name: 'Serve la batteria di accumulo con fotovoltaico e pompa di calore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La batteria di accumulo è fortemente consigliata perché aumenta l\'autoconsumo dal 30-40% al 70-85%. Senza accumulo, gran parte dell\'energia prodotta dal fotovoltaico viene immessa in rete a un prezzo molto inferiore rispetto a quello di acquisto.'
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${articleData.title} | Renova Solution`}
        description={articleData.excerpt}
        keywords="fotovoltaico pompa di calore, casa senza bollette, fotovoltaico riscaldamento, autoconsumo fotovoltaico, impianto fotovoltaico 2026, pompa di calore fotovoltaico, bollette zero, risparmio energetico"
        ogType="article"
        canonical={`https://www.renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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

        {/* Article Content */}
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
                Immagina di non pagare più né la bolletta del gas né quella della luce. Non è fantascienza: nel 2026,
                la combinazione di <strong>impianto fotovoltaico</strong> e <strong>pompa di calore</strong> permette di
                raggiungere l'<strong>autosufficienza energetica</strong> della tua casa, eliminando fino al 95% dei costi
                in bolletta. In questa guida completa scoprirai come funziona questo abbinamento, quanto costa realmente,
                come dimensionarlo correttamente e quali incentivi fiscali sfruttare nel 2026.
              </p>

              <p>
                Se stai pensando di ristrutturare casa o di sostituire la vecchia caldaia a gas, il <strong>fotovoltaico
                con pompa di calore</strong> rappresenta oggi la soluzione tecnologica ed economica più vantaggiosa.
                Renova Solution, con sede in Friuli Venezia Giulia, ha installato centinaia di sistemi integrati nella
                regione e in Veneto, e in questa guida condividiamo l'esperienza maturata sul campo con dati reali e
                casi studio concreti.
              </p>

              {/* Sommario */}
              <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Sommario dell'articolo</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Come funziona la combinazione fotovoltaico + pompa di calore</li>
                  <li>2. Perché questa combinazione azzera le bollette</li>
                  <li>3. Dimensionamento corretto: quanti kW servono</li>
                  <li>4. Il ruolo fondamentale della batteria di accumulo</li>
                  <li>5. Costi reali nel 2026: quanto si spende</li>
                  <li>6. Calcolo del ROI e tempo di ritorno</li>
                  <li>7. Incentivi fiscali e detrazioni 2026</li>
                  <li>8. Caso studio reale: villetta in Friuli Venezia Giulia</li>
                  <li>9. I 5 errori da evitare</li>
                  <li>10. Pompa di calore e fotovoltaico in condominio</li>
                  <li>11. Domande frequenti (FAQ)</li>
                </ol>
              </div>

              {/* Sezione 1: Come funziona la combinazione */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                1. Come funziona la combinazione fotovoltaico + pompa di calore
              </h2>
              <p>
                Il principio alla base di questa combinazione è tanto semplice quanto geniale: il <strong>fotovoltaico
                produce energia elettrica gratuita dal sole</strong>, e la <strong>pompa di calore utilizza questa
                energia elettrica per riscaldare (e raffrescare) la casa</strong>. Il risultato è un sistema che
                funziona quasi interamente a energia rinnovabile e gratuita.
              </p>
              <p>
                La pompa di calore, a differenza della caldaia a gas, non brucia combustibile. Funziona come un
                frigorifero al contrario: estrae calore dall'aria esterna (anche a temperature sotto zero) e lo
                trasferisce all'interno dell'abitazione. Per ogni kW di energia elettrica consumata, produce 3-5 kW
                di energia termica. Questo rapporto si chiama <strong>COP (Coefficient of Performance)</strong>.
              </p>
              <p>
                Quando il fotovoltaico alimenta direttamente la pompa di calore, il costo del riscaldamento si
                avvicina allo zero. In pratica, stai usando <strong>energia solare gratuita</strong> per far funzionare
                un sistema che moltiplica quell'energia per 3-5 volte. Il risultato è un'efficienza complessiva
                straordinaria, impossibile da raggiungere con qualsiasi combustibile fossile.
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-yellow-800">
                  <Sun className="w-5 h-5" /> Il ciclo virtuoso energia-calore
                </h3>
                <div className="space-y-4 text-yellow-900">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-200 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <span>I <strong>pannelli fotovoltaici</strong> captano la radiazione solare e la convertono in energia elettrica in corrente continua</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-200 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <span>L'<strong>inverter</strong> trasforma la corrente continua in corrente alternata, utilizzabile dagli elettrodomestici</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-200 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <span>La <strong>pompa di calore</strong> utilizza l'energia elettrica per estrarre calore dall'aria e trasferirlo in casa (COP 3-5)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-200 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <span>L'energia in eccesso viene <strong>immagazzinata nella batteria</strong> per l'uso serale e notturno</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-200 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <span>L'eventuale surplus viene <strong>immesso in rete</strong> con il meccanismo dello Scambio sul Posto</span>
                  </div>
                </div>
              </div>

              <p>
                D'estate il sistema si inverte: la <Link to="/pompe-di-calore" className="text-[#C8E600] hover:underline font-medium">pompa
                di calore</Link> funziona come condizionatore, raffrescando la casa, sempre alimentata dall'energia gratuita
                del fotovoltaico. Proprio nelle giornate più calde, quando il fabbisogno di raffrescamento è massimo,
                la produzione solare è al suo picco: una sinergia perfetta.
              </p>

              {/* Sezione 2: Perché azzera le bollette */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                2. Perché questa combinazione azzera le bollette
              </h2>
              <p>
                Per capire come si arriva a <strong>bollette vicine allo zero</strong>, bisogna analizzare le due
                voci di spesa principali di una famiglia italiana: gas ed elettricità. Una famiglia media in Friuli
                Venezia Giulia spende circa:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Voce di spesa</th>
                      <th className="p-4 text-left font-bold">Costo annuo medio</th>
                      <th className="p-4 text-left font-bold text-[#C8E600]">Con FV + PdC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Bolletta gas (riscaldamento + ACS)</td>
                      <td className="p-4">€ 1.600 - 2.200</td>
                      <td className="p-4 text-[#C8E600] font-bold">€ 0 (eliminata)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Bolletta elettrica (senza PdC)</td>
                      <td className="p-4">€ 800 - 1.200</td>
                      <td className="p-4 text-[#C8E600] font-bold">€ 100 - 250</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Manutenzione caldaia</td>
                      <td className="p-4">€ 150 - 200</td>
                      <td className="p-4 text-[#C8E600] font-bold">€ 0 (eliminata)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Manutenzione PdC + FV</td>
                      <td className="p-4">-</td>
                      <td className="p-4">€ 200 - 300</td>
                    </tr>
                    <tr className="bg-gray-50 font-bold">
                      <td className="p-4">TOTALE ANNUO</td>
                      <td className="p-4">€ 2.550 - 3.600</td>
                      <td className="p-4 text-[#C8E600]">€ 300 - 550</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-2">*Dati riferiti a un'abitazione di 120 m² in zona climatica E (Friuli Venezia Giulia)</p>
              </div>

              <p>
                Il <strong>risparmio annuo</strong> si attesta tra <strong>2.200 e 3.050 euro</strong>. La bolletta del
                gas viene completamente eliminata perché la pompa di calore sostituisce la caldaia sia per il riscaldamento
                che per la produzione di acqua calda sanitaria. La bolletta elettrica si riduce drasticamente perché
                il fotovoltaico copre la maggior parte del fabbisogno, incluso quello della pompa di calore.
              </p>

              <p>
                Il piccolo residuo di bolletta elettrica (100-250 euro/anno) è dovuto ai costi fissi del contatore,
                agli oneri di sistema e al consumo notturno invernale che eccede la capacità della batteria. Con
                l'ottimizzazione dei consumi e un accumulo adeguato, alcune famiglie riescono a ridurre questo residuo
                a meno di 100 euro l'anno.
              </p>

              {/* Sezione 3: Dimensionamento */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                3. Dimensionamento corretto: quanti kW servono
              </h2>
              <p>
                Il dimensionamento è la fase più critica dell'intero progetto. Un sistema sovradimensionato costa
                troppo e non si ripaga nei tempi previsti; un sistema sottodimensionato non copre i consumi. Ecco
                le linee guida per un <strong>dimensionamento ottimale</strong> in base alla superficie abitativa:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Superficie casa</th>
                      <th className="p-4 text-left font-bold">FV (kWp)</th>
                      <th className="p-4 text-left font-bold">PdC (kW termici)</th>
                      <th className="p-4 text-left font-bold">Batteria (kWh)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">60-80 m²</td>
                      <td className="p-4">4-5 kWp</td>
                      <td className="p-4">8-10 kW</td>
                      <td className="p-4">5-7 kWh</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">80-120 m²</td>
                      <td className="p-4">5-6 kWp</td>
                      <td className="p-4">10-12 kW</td>
                      <td className="p-4">7-10 kWh</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">120-160 m²</td>
                      <td className="p-4">6-8 kWp</td>
                      <td className="p-4">12-16 kW</td>
                      <td className="p-4">10-13 kWh</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">160-200 m²</td>
                      <td className="p-4">8-10 kWp</td>
                      <td className="p-4">16-20 kW</td>
                      <td className="p-4">13-15 kWh</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-2">*Valori indicativi per zona climatica E, isolamento medio, esposizione sud. Il dimensionamento esatto richiede un sopralluogo tecnico.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fattori che influenzano il dimensionamento</h3>
              <p>
                Il dimensionamento dipende da diversi fattori che vanno valutati caso per caso durante il sopralluogo tecnico:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Zona climatica:</strong> in Friuli Venezia Giulia (zona E-F) il fabbisogno termico invernale è superiore rispetto alle regioni del centro-sud, richiedendo una pompa di calore più potente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Isolamento termico:</strong> una casa ben isolata (cappotto termico, infissi a triplo vetro) riduce il fabbisogno della pompa di calore anche del 40-50%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Orientamento del tetto:</strong> un'esposizione a sud con inclinazione di 30-35 gradi massimizza la produzione fotovoltaica annua</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ombreggiamenti:</strong> alberi, camini, edifici vicini possono ridurre significativamente la produzione del fotovoltaico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Tipologia di emissione:</strong> impianto a pavimento radiante (ideale, bassa temperatura) oppure radiatori tradizionali (richiede pompa di calore più potente)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Numero di occupanti:</strong> più persone significano maggiore consumo di acqua calda sanitaria e maggiore fabbisogno elettrico</span>
                </li>
              </ul>

              <p>
                Per un <Link to="/preventivo" className="text-[#C8E600] hover:underline font-medium">dimensionamento
                personalizzato</Link>, il nostro team tecnico effettua un sopralluogo gratuito con analisi termografica
                dell'edificio e simulazione energetica su software certificato.
              </p>

              {/* Sezione 4: Batteria di accumulo */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                4. Il ruolo fondamentale della batteria di accumulo
              </h2>
              <p>
                La batteria di accumulo è il componente che trasforma un buon impianto in un sistema eccellente.
                Senza accumulo, l'<strong>autoconsumo fotovoltaico</strong> si ferma al 30-40%: il resto dell'energia
                prodotta viene immessa in rete e valorizzata a un prezzo molto inferiore rispetto a quello di acquisto
                (circa 0,08 euro/kWh immessi vs 0,25 euro/kWh acquistati).
              </p>
              <p>
                Con una batteria da 10 kWh, l'autoconsumo sale al <strong>70-85%</strong>, e l'energia accumulata
                durante il giorno viene utilizzata la sera e la notte per alimentare la pompa di calore, gli
                elettrodomestici, l'illuminazione e tutti gli altri consumi domestici.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4">Autoconsumo con e senza batteria di accumulo</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-48 text-sm">Solo FV (no batteria)</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-5">
                      <div className="bg-orange-400 h-5 rounded-full flex items-center justify-end pr-2" style={{ width: '35%' }}>
                        <span className="text-xs font-bold text-white">35%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-48 text-sm">FV + batteria 5 kWh</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-5">
                      <div className="bg-yellow-500 h-5 rounded-full flex items-center justify-end pr-2" style={{ width: '55%' }}>
                        <span className="text-xs font-bold text-white">55%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-48 text-sm">FV + batteria 10 kWh</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-5">
                      <div className="bg-[#C8E600] h-5 rounded-full flex items-center justify-end pr-2" style={{ width: '75%' }}>
                        <span className="text-xs font-bold text-gray-800">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-48 text-sm">FV + batteria 15 kWh</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-5">
                      <div className="bg-green-500 h-5 rounded-full flex items-center justify-end pr-2" style={{ width: '85%' }}>
                        <span className="text-xs font-bold text-white">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">Percentuali di autoconsumo medie annue per impianto 6 kWp in Friuli Venezia Giulia</p>
              </div>

              <p>
                Le moderne batterie al litio ferro fosfato (LiFePO4) offrono oltre 6.000 cicli di carica/scarica,
                corrispondenti a circa 15-20 anni di vita utile. La garanzia del produttore copre generalmente 10 anni
                con almeno il 70% della capacità residua. Il costo delle batterie è sceso notevolmente negli ultimi
                anni, rendendo l'accumulo un investimento sempre più conveniente.
              </p>

              {/* Sezione 5: Costi reali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                5. Costi reali nel 2026: quanto si spende
              </h2>
              <p>
                Veniamo ai numeri concreti. Ecco i <strong>costi chiavi in mano</strong> per un sistema completo
                fotovoltaico + pompa di calore nel 2026, basati sui prezzi reali praticati da Renova Solution:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Componente</th>
                      <th className="p-4 text-left font-bold">Taglia</th>
                      <th className="p-4 text-left font-bold">Costo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Impianto fotovoltaico</td>
                      <td className="p-4">6 kWp (14-16 pannelli)</td>
                      <td className="p-4">€ 8.000 - 10.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Batteria di accumulo</td>
                      <td className="p-4">10 kWh</td>
                      <td className="p-4">€ 4.500 - 6.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Pompa di calore aria-acqua</td>
                      <td className="p-4">12 kW termici</td>
                      <td className="p-4">€ 8.000 - 12.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Installazione e collaudo</td>
                      <td className="p-4">-</td>
                      <td className="p-4">€ 3.000 - 4.500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Pratiche e autorizzazioni</td>
                      <td className="p-4">-</td>
                      <td className="p-4">€ 1.000 - 1.500</td>
                    </tr>
                    <tr className="bg-gray-50 font-bold border-t-2">
                      <td className="p-4">TOTALE LORDO</td>
                      <td className="p-4">-</td>
                      <td className="p-4">€ 24.500 - 34.000</td>
                    </tr>
                    <tr className="bg-green-50 font-bold">
                      <td className="p-4 text-green-800">Detrazione fiscale 50%</td>
                      <td className="p-4 text-green-800">-</td>
                      <td className="p-4 text-green-800">- € 12.250 / - € 17.000</td>
                    </tr>
                    <tr className="bg-[#C8E600]/10 font-bold border-t-2">
                      <td className="p-4 text-gray-900">COSTO NETTO EFFETTIVO</td>
                      <td className="p-4">-</td>
                      <td className="p-4 text-[#6B8F00] text-lg">€ 12.250 - 17.000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-2">*Prezzi IVA 10% inclusa, riferiti a casa singola 100-120 m² in Friuli Venezia Giulia</p>
              </div>

              <p>
                Il costo varia in base alla taglia dell'impianto, alla marca dei componenti scelti, alla complessità
                dell'installazione (tetto piano vs tetto inclinato, distanza tra i componenti, necessità di opere
                murarie) e alla zona geografica. I prezzi indicati includono tutto: materiali, manodopera, collaudo,
                pratiche Enel, pratiche GSE per lo Scambio sul Posto e assistenza post-vendita.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                  <Euro className="w-5 h-5" /> Opzioni di pagamento flessibili
                </h3>
                <ul className="space-y-3 text-blue-900">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Pagamento in un'unica soluzione:</strong> sconto aggiuntivo del 3-5% sul totale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Finanziamento a tasso agevolato:</strong> rate da 150-250 euro/mese per 10 anni, inferiori al risparmio in bolletta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Pagamento a SAL:</strong> 30% all'ordine, 40% a metà lavori, 30% al collaudo</span>
                  </li>
                </ul>
              </div>

              {/* Sezione 6: Calcolo del ROI */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                6. Calcolo del ROI e tempo di ritorno dell'investimento
              </h2>
              <p>
                Il <strong>ritorno sull'investimento (ROI)</strong> è il parametro più importante per valutare la
                convenienza economica del sistema. Ecco un calcolo dettagliato basato su un caso tipo:
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> Calcolo ROI - Casa 120 m² in FVG
                </h4>
                <div className="space-y-4">
                  <div className="pb-3 border-b border-green-200">
                    <p className="text-green-800 font-medium">Investimento totale lordo</p>
                    <p className="text-2xl font-bold text-green-700">€ 29.000</p>
                    <p className="text-sm text-green-600">FV 6 kWp + Batteria 10 kWh + PdC 12 kW + installazione</p>
                  </div>
                  <div className="pb-3 border-b border-green-200">
                    <p className="text-green-800 font-medium">Detrazione fiscale 50% (recuperata in 10 anni)</p>
                    <p className="text-2xl font-bold text-green-700">- € 14.500</p>
                    <p className="text-sm text-green-600">€ 1.450/anno per 10 anni in dichiarazione dei redditi</p>
                  </div>
                  <div className="pb-3 border-b border-green-200">
                    <p className="text-green-800 font-medium">Costo netto effettivo</p>
                    <p className="text-2xl font-bold text-green-700">€ 14.500</p>
                  </div>
                  <div className="pb-3 border-b border-green-200">
                    <p className="text-green-800 font-medium">Risparmio annuo in bolletta</p>
                    <p className="text-2xl font-bold text-green-700">€ 2.800/anno</p>
                    <p className="text-sm text-green-600">Eliminazione gas (€ 1.800) + riduzione elettricità (€ 1.000)</p>
                  </div>
                  <div className="pt-3 border-t border-green-300 bg-green-100 -mx-6 -mb-6 px-6 py-4 rounded-b-xl">
                    <p className="text-green-800 font-bold text-lg">Tempo di ritorno: 5-6 anni</p>
                    <p className="text-green-700">Risparmio nei 25 anni di vita utile: oltre € 55.000</p>
                    <p className="text-green-700 font-medium mt-1">ROI complessivo: oltre 280%</p>
                  </div>
                </div>
              </div>

              <p>
                Dopo il tempo di ritorno (5-6 anni), il risparmio diventa <strong>profitto netto</strong>. Considerando
                una vita utile del fotovoltaico di 25-30 anni e della pompa di calore di 15-20 anni, il vantaggio
                economico complessivo supera abbondantemente i 55.000 euro. Inoltre, il risparmio cresce nel tempo
                perché i costi dell'energia tendono ad aumentare, mentre la produzione del fotovoltaico rimane
                sostanzialmente stabile (con un degrado fisiologico dello 0,5% annuo).
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">L'effetto moltiplicatore del COP</h3>
              <p>
                Un aspetto spesso sottovalutato è l'<strong>effetto moltiplicatore</strong> della pompa di calore
                sull'energia fotovoltaica. Con un COP medio stagionale di 3,5:
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>1 kWh elettrico dal fotovoltaico = 3,5 kWh termici dalla pompa di calore</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>6 kWp di fotovoltaico producono circa 7.200 kWh/anno in FVG</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Di cui circa 3.500 kWh utilizzati dalla pompa di calore = 12.250 kWh termici</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Equivalenti a circa 1.225 m³ di gas metano risparmiati ogni anno</span>
                </li>
              </ul>

              {/* Sezione 7: Incentivi fiscali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                7. Incentivi fiscali e detrazioni disponibili nel 2026
              </h2>
              <p>
                Nel 2026, il panorama degli incentivi fiscali per <strong>fotovoltaico e pompa di calore</strong> offre
                diverse opportunità di risparmio. Ecco il quadro completo e aggiornato:
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                  <Euro className="w-5 h-5" /> Detrazioni fiscali 2026
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Fotovoltaico - Detrazione 50%</h4>
                    <ul className="space-y-1 text-blue-900 text-sm">
                      <li>- Rientra nella ristrutturazione edilizia (art. 16-bis TUIR)</li>
                      <li>- Tetto massimo di spesa: € 96.000</li>
                      <li>- Recupero in 10 rate annuali di pari importo</li>
                      <li>- Include pannelli, inverter, batteria di accumulo, installazione</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Pompa di calore - Detrazione 50%</h4>
                    <ul className="space-y-1 text-blue-900 text-sm">
                      <li>- Rientra nell'efficientamento energetico (Ecobonus)</li>
                      <li>- Tetto massimo di spesa: € 30.000 per unità immobiliare</li>
                      <li>- Recupero in 10 rate annuali di pari importo</li>
                      <li>- Include pompa di calore, installazione, adeguamento impianto</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Conto Termico 2.0 (alternativa alla detrazione per PdC)</h4>
                    <ul className="space-y-1 text-blue-900 text-sm">
                      <li>- Incentivo diretto erogato dal GSE in 2-5 anni</li>
                      <li>- Fino al 65% della spesa ammissibile per pompe di calore</li>
                      <li>- Non cumulabile con la detrazione fiscale</li>
                      <li>- Vantaggioso per chi ha capienza fiscale ridotta</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                La scelta tra detrazione fiscale e Conto Termico dipende dalla situazione fiscale personale. Chi ha
                un reddito sufficiente a sfruttare la detrazione in 10 anni preferirà generalmente questa opzione.
                Chi ha un reddito basso o è incapiente fiscalmente potrà optare per il Conto Termico, che offre
                un rimborso diretto e più rapido. Il nostro ufficio tecnico ti aiuta a individuare la soluzione
                fiscale più vantaggiosa.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Requisiti per accedere alle detrazioni</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Pagamento tracciabile:</strong> bonifico parlante con causale specifica per detrazione fiscale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Comunicazione ENEA:</strong> da inviare entro 90 giorni dalla fine dei lavori per la pompa di calore</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Asseverazione tecnica:</strong> per interventi superiori a determinati importi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Conformità urbanistica:</strong> l'immobile deve essere in regola dal punto di vista edilizio</span>
                </li>
              </ul>

              <p>
                Renova Solution gestisce tutte le pratiche burocratiche e fiscali: dalla comunicazione ENEA
                all'asseverazione tecnica, dalla pratica Enel alla richiesta dello Scambio sul Posto al GSE.
                Non dovrai preoccuparti di nulla.
              </p>

              {/* Sezione 8: Caso studio FVG */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                8. Caso studio reale: villetta a Udine, Friuli Venezia Giulia
              </h2>
              <p>
                Per rendere concreti tutti i numeri presentati finora, vediamo un <strong>caso studio reale</strong> di
                un intervento completato da Renova Solution nella provincia di Udine nel 2025.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                  <Home className="w-5 h-5" /> Dati dell'intervento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Abitazione</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>- Villetta bifamiliare, anno costruzione 2005</li>
                      <li>- Superficie: 130 m² su due livelli</li>
                      <li>- Zona climatica E (2.900 GG)</li>
                      <li>- Isolamento: cappotto 8 cm, infissi doppio vetro</li>
                      <li>- Riscaldamento preesistente: caldaia a condensazione + radiatori</li>
                      <li>- 4 persone (2 adulti + 2 bambini)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Sistema installato</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>- Fotovoltaico: 6,6 kWp (16 pannelli 415W monocristallino)</li>
                      <li>- Inverter ibrido con ottimizzatori</li>
                      <li>- Batteria LiFePO4: 10,2 kWh</li>
                      <li>- Pompa di calore aria-acqua: 14 kW termici</li>
                      <li>- Serbatoio ACS: 200 litri</li>
                      <li>- Sistema di monitoraggio smart via app</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5" /> Risultati economici dopo 12 mesi
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-sm text-green-700">Spesa annua PRIMA</p>
                      <p className="text-2xl font-bold text-red-600">€ 3.200</p>
                      <p className="text-xs text-gray-500">Gas € 1.900 + Luce € 1.300</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-sm text-green-700">Spesa annua DOPO</p>
                      <p className="text-2xl font-bold text-green-600">€ 380</p>
                      <p className="text-xs text-gray-500">Solo costi fissi contatore + residuo invernale</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-sm text-green-700">Risparmio annuo</p>
                      <p className="text-2xl font-bold text-[#C8E600]">€ 2.820</p>
                      <p className="text-xs text-gray-500">-88% rispetto a prima</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <p className="text-gray-500">Investimento lordo</p>
                        <p className="font-bold">€ 31.500</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Costo netto (post detrazione)</p>
                        <p className="font-bold text-green-700">€ 15.750</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Tempo di ritorno</p>
                        <p className="font-bold text-[#C8E600]">5,6 anni</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Risparmio in 25 anni</p>
                        <p className="font-bold text-green-700">€ 54.750</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Il proprietario ci ha raccontato: "Non pensavamo fosse possibile. La prima bolletta dopo
                l'installazione era di 28 euro. Prima pagavamo 180-200 euro al mese solo di gas. È stato il
                miglior investimento che abbiamo mai fatto per la nostra casa."
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Produzione e consumi mese per mese</h3>
              <p>
                Ecco l'andamento della produzione fotovoltaica e dei consumi della pompa di calore nei 12 mesi
                di monitoraggio:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left font-bold">Mese</th>
                      <th className="p-3 text-left font-bold">Produzione FV (kWh)</th>
                      <th className="p-3 text-left font-bold">Consumo PdC (kWh)</th>
                      <th className="p-3 text-left font-bold">Autoconsumo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Gennaio</td>
                      <td className="p-3">280</td>
                      <td className="p-3">620</td>
                      <td className="p-3 text-orange-600">45%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Febbraio</td>
                      <td className="p-3">380</td>
                      <td className="p-3">550</td>
                      <td className="p-3 text-orange-500">55%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Marzo</td>
                      <td className="p-3">580</td>
                      <td className="p-3">420</td>
                      <td className="p-3 text-yellow-600">72%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Aprile</td>
                      <td className="p-3">720</td>
                      <td className="p-3">180</td>
                      <td className="p-3 text-green-600">92%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Maggio</td>
                      <td className="p-3">850</td>
                      <td className="p-3">80</td>
                      <td className="p-3 text-green-600">98%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Giugno</td>
                      <td className="p-3">920</td>
                      <td className="p-3">150</td>
                      <td className="p-3 text-green-600">95%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Luglio</td>
                      <td className="p-3">950</td>
                      <td className="p-3">220</td>
                      <td className="p-3 text-green-600">93%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Agosto</td>
                      <td className="p-3">880</td>
                      <td className="p-3">200</td>
                      <td className="p-3 text-green-600">94%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Settembre</td>
                      <td className="p-3">680</td>
                      <td className="p-3">100</td>
                      <td className="p-3 text-green-600">96%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Ottobre</td>
                      <td className="p-3">480</td>
                      <td className="p-3">280</td>
                      <td className="p-3 text-yellow-600">78%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Novembre</td>
                      <td className="p-3">300</td>
                      <td className="p-3">520</td>
                      <td className="p-3 text-orange-500">50%</td>
                    </tr>
                    <tr>
                      <td className="p-3">Dicembre</td>
                      <td className="p-3">240</td>
                      <td className="p-3">650</td>
                      <td className="p-3 text-orange-600">40%</td>
                    </tr>
                    <tr className="bg-gray-50 font-bold border-t-2">
                      <td className="p-3">TOTALE ANNO</td>
                      <td className="p-3">7.260 kWh</td>
                      <td className="p-3">3.970 kWh</td>
                      <td className="p-3 text-[#C8E600]">76% medio</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Come si vede, nei mesi estivi l'autoconsumo supera il 93%, con surplus di energia immesso in rete
                che viene valorizzato tramite lo Scambio sul Posto. Nei mesi invernali, quando la produzione solare
                è minore e il fabbisogno della pompa di calore è massimo, si acquista energia dalla rete, ma in
                quantità nettamente inferiore rispetto a prima.
              </p>

              {/* Sezione 9: Errori da evitare */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                9. I 5 errori da evitare nell'installazione
              </h2>
              <p>
                Dalla nostra esperienza di centinaia di installazioni in Friuli Venezia Giulia e Veneto, abbiamo
                identificato gli errori più comuni che possono compromettere le prestazioni del sistema:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-2">Errore 1: Sottodimensionare il fotovoltaico</h4>
                  <p className="text-red-900 text-sm">
                    Installare un impianto fotovoltaico troppo piccolo rispetto al consumo della pompa di calore
                    vanifica gran parte del vantaggio economico. Se la pompa di calore consuma 4.000 kWh/anno e il
                    fotovoltaico ne produce solo 3.000, il risparmio sarà molto inferiore al previsto. Meglio
                    sovradimensionare leggermente il fotovoltaico: il surplus viene comunque valorizzato con lo
                    Scambio sul Posto.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-2">Errore 2: Non installare la batteria di accumulo</h4>
                  <p className="text-red-900 text-sm">
                    Senza batteria, l'autoconsumo crolla al 30-35%. La pompa di calore lavora molto nelle ore serali
                    e notturne (quando il fotovoltaico non produce), quindi senza accumulo si acquista molta energia
                    dalla rete a prezzo pieno. La batteria è un investimento che si ripaga in 4-5 anni grazie
                    all'aumento dell'autoconsumo.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-2">Errore 3: Scegliere la pompa di calore sbagliata</h4>
                  <p className="text-red-900 text-sm">
                    Non tutte le pompe di calore sono uguali. Per il clima del Friuli Venezia Giulia serve un modello
                    progettato per funzionare efficientemente anche a temperature esterne molto basse (-10/-15°C).
                    Le pompe di calore economiche perdono efficienza rapidamente sotto i 5°C e consumano molto
                    più energia elettrica.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-2">Errore 4: Ignorare l'isolamento dell'edificio</h4>
                  <p className="text-red-900 text-sm">
                    Installare una pompa di calore in un edificio mal isolato è come riscaldare con la finestra
                    aperta. Prima di investire nel sistema FV + PdC, è fondamentale verificare (e se necessario
                    migliorare) l'isolamento termico: cappotto, infissi, cassonetti, sottotetto. Un buon isolamento
                    può ridurre il fabbisogno della pompa di calore del 40-50%.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-2">Errore 5: Affidarsi a installatori non qualificati</h4>
                  <p className="text-red-900 text-sm">
                    L'integrazione tra fotovoltaico, batteria e pompa di calore richiede competenze specifiche in
                    ambito elettrico, termoidraulico e di regolazione. Un'installazione mal eseguita può portare a
                    consumi superiori al previsto, guasti frequenti e mancata ottimizzazione dell'autoconsumo.
                    Affidati sempre a un'azienda certificata con esperienza comprovata nei sistemi integrati.
                  </p>
                </div>
              </div>

              {/* Sezione 10: Condominio */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                10. Fotovoltaico e pompa di calore in condominio
              </h2>
              <p>
                Anche chi vive in <strong>condominio</strong> può beneficiare della combinazione fotovoltaico + pompa
                di calore, sebbene con alcune specificità:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Fotovoltaico individuale su balcone:</strong> i sistemi "plug & play" fino a 800W possono essere installati senza autorizzazioni particolari e riducono la bolletta elettrica del 20-30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Fotovoltaico condominiale:</strong> con l'approvazione dell'assemblea, si possono installare pannelli sul tetto condominiale e suddividere l'energia tra i condomini (comunità energetica)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Pompa di calore individuale:</strong> si può sostituire la caldaia autonoma con una pompa di calore aria-aria (split) o aria-acqua, previa verifica della potenza elettrica disponibile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Climatizzazione a pompa di calore:</strong> i moderni <Link to="/climatizzazione" className="text-[#C8E600] hover:underline font-medium">climatizzatori a pompa di calore</Link> possono riscaldare e raffrescare singoli ambienti con alta efficienza</span>
                </li>
              </ul>

              <p>
                Per chi vive in condominio, la soluzione più pratica è spesso un <strong>impianto di climatizzazione
                a pompa di calore</strong> (split o multisplit) abbinato a un piccolo fotovoltaico da balcone. Anche
                con questa configurazione ridotta, il risparmio annuo può raggiungere i 600-1.000 euro.
              </p>

              {/* CTA intermedio */}
              <div className="bg-gray-900 rounded-xl p-8 my-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Vuoi sapere quanto puoi risparmiare con la tua casa?</h3>
                <p className="text-gray-300 mb-6">
                  Richiedi un sopralluogo gratuito e ricevi un preventivo personalizzato con calcolo del risparmio
                  e del tempo di ritorno dell'investimento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/preventivo"
                    className="inline-flex items-center justify-center gap-2 bg-[#C8E600] text-black font-bold px-8 py-3 rounded-full hover:bg-[#b5d000] transition-colors"
                  >
                    Richiedi preventivo gratuito
                  </Link>
                  <Link
                    to="/fotovoltaico-privati"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Scopri il fotovoltaico
                  </Link>
                </div>
              </div>

              {/* Sezione 11: FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6" /> 11. Domande frequenti (FAQ)
              </h2>

              <div className="space-y-4 my-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Quanto costa un impianto fotovoltaico con pompa di calore nel 2026?</h3>
                  <p className="text-gray-700 text-sm">
                    Un sistema completo fotovoltaico (6 kWp) con pompa di calore (12 kW termici) e accumulo (10 kWh)
                    costa tra 25.000 e 35.000 euro chiavi in mano. Con le detrazioni fiscali del 50%, il costo netto
                    scende a 12.500-17.500 euro. Il costo varia in base alla taglia dell'impianto, alla marca dei
                    componenti e alla complessità dell'installazione.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">È possibile azzerare le bollette con fotovoltaico e pompa di calore?</h3>
                  <p className="text-gray-700 text-sm">
                    Con un dimensionamento corretto è possibile ridurre le bollette dell'85-95%. Per arrivare vicino
                    allo zero è necessario un impianto fotovoltaico da almeno 6 kWp con batteria di accumulo da 10 kWh
                    e una pompa di calore ad alta efficienza con COP superiore a 4. Il residuo riguarda principalmente
                    i costi fissi del contatore e il consumo invernale notturno.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Quanti kW di fotovoltaico servono per alimentare una pompa di calore?</h3>
                  <p className="text-gray-700 text-sm">
                    Per una casa di 100-120 m² in zona climatica E (Friuli Venezia Giulia), servono almeno 6 kWp di
                    fotovoltaico per coprire il fabbisogno della pompa di calore e degli altri consumi domestici.
                    Con accumulo da 10 kWh si massimizza l'autoconsumo portandolo al 70-85%.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Quanto si risparmia con fotovoltaico e pompa di calore rispetto a gas e rete elettrica?</h3>
                  <p className="text-gray-700 text-sm">
                    Il risparmio annuo medio per una famiglia in Friuli Venezia Giulia è di circa 2.800-3.200 euro,
                    considerando l'eliminazione della bolletta del gas (circa 1.800 euro/anno) e la drastica riduzione
                    di quella elettrica (circa 1.000-1.400 euro/anno). Su 25 anni di vita utile del fotovoltaico, il
                    risparmio complessivo supera i 55.000 euro.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">In quanto tempo si ripaga l'investimento fotovoltaico più pompa di calore?</h3>
                  <p className="text-gray-700 text-sm">
                    Con le detrazioni fiscali del 50% e il risparmio in bolletta, il tempo di ritorno dell'investimento
                    è mediamente di 5-7 anni. Dopo il ripiego, il risparmio netto è di circa 2.800-3.200 euro all'anno
                    per i successivi 18-20 anni di vita utile dell'impianto.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">La pompa di calore funziona anche d'inverno in Friuli Venezia Giulia?</h3>
                  <p className="text-gray-700 text-sm">
                    Assolutamente sì. Le moderne pompe di calore aria-acqua funzionano fino a -20°C. In Friuli
                    Venezia Giulia, dove le temperature invernali raramente scendono sotto i -5°C/-10°C, la pompa di
                    calore lavora con ottima efficienza (COP 2,5-3,5 anche in pieno inverno). Nei giorni più freddi
                    il COP scende ma resta comunque molto più conveniente della caldaia a gas.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Quali incentivi fiscali sono disponibili nel 2026 per fotovoltaico e pompa di calore?</h3>
                  <p className="text-gray-700 text-sm">
                    Nel 2026 sono disponibili la detrazione fiscale del 50% per il fotovoltaico (come ristrutturazione
                    edilizia, tetto di spesa € 96.000) e la detrazione del 50% per la pompa di calore (come
                    efficientamento energetico). Entrambe sono recuperabili in 10 anni di dichiarazione dei redditi.
                    In alternativa, per la pompa di calore è disponibile il Conto Termico 2.0 del GSE.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Serve la batteria di accumulo con fotovoltaico e pompa di calore?</h3>
                  <p className="text-gray-700 text-sm">
                    La batteria di accumulo è fortemente consigliata perché aumenta l'autoconsumo dal 30-40% al 70-85%.
                    Senza accumulo, gran parte dell'energia prodotta dal fotovoltaico nelle ore centrali viene immessa
                    in rete a un prezzo molto inferiore rispetto a quello di acquisto. Con la batteria, l'energia viene
                    utilizzata la sera e la notte, quando la pompa di calore lavora maggiormente.
                  </p>
                </div>
              </div>

              {/* Conclusioni */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                La combinazione di <strong>fotovoltaico e pompa di calore</strong> nel 2026 rappresenta la soluzione
                più intelligente e conveniente per chi vuole <strong>azzerare le bollette</strong> e rendere la propria
                casa energeticamente indipendente. I numeri parlano chiaro: con un investimento netto di 12.000-17.000
                euro (grazie alle detrazioni fiscali del 50%), si ottiene un risparmio annuo di 2.800-3.200 euro, con
                un tempo di ritorno di soli 5-7 anni.
              </p>
              <p>
                In Friuli Venezia Giulia e Veneto, dove il clima è ideale per entrambe le tecnologie (buona radiazione
                solare e temperature invernali moderate), questa combinazione raggiunge le massime prestazioni. La
                pompa di calore funziona efficientemente anche in pieno inverno, e il fotovoltaico produce energia
                sufficiente a coprire la gran parte dei consumi annuali.
              </p>
              <p>
                <strong>Renova Solution</strong> ti accompagna in ogni fase del progetto: dal sopralluogo tecnico
                al dimensionamento ottimale, dall'installazione alla gestione delle pratiche burocratiche e fiscali.
                Con la nostra esperienza maturata in centinaia di installazioni integrate nella regione, ti garantiamo
                un sistema performante, affidabile e con il miglior rapporto qualità-prezzo.
              </p>
              <p>
                Non aspettare che le bollette aumentino ancora. <Link to="/preventivo" className="text-[#C8E600] hover:underline font-medium">Richiedi
                un preventivo gratuito</Link> e scopri quanto puoi risparmiare con la combinazione fotovoltaico + pompa
                di calore per la tua casa.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['fotovoltaico', 'pompa di calore', 'bollette zero', 'autoconsumo', 'risparmio energetico', 'batteria accumulo', 'incentivi 2026', 'casa senza bollette'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Articoli correlati</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/blog/pompa-calore-vs-caldaia-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Riscaldamento</span>
                  <h5 className="font-bold text-gray-900 mt-1 group-hover:text-[#C8E600] transition-colors">
                    Pompa di calore vs caldaia a gas 2026: quale scegliere?
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">Confronto dettagliato tra pompe di calore e caldaie a gas: costi, consumi e risparmio.</p>
                </Link>
                <Link to="/blog/detrazioni-fiscali-infissi-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Detrazioni</span>
                  <h5 className="font-bold text-gray-900 mt-1 group-hover:text-[#C8E600] transition-colors">
                    Detrazioni fiscali infissi 2026: guida completa
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">Tutte le detrazioni disponibili per la sostituzione degli infissi nel 2026.</p>
                </Link>
                <Link to="/blog/cappotto-termico-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Isolamento</span>
                  <h5 className="font-bold text-gray-900 mt-1 group-hover:text-[#C8E600] transition-colors">
                    Cappotto termico 2026: costi, materiali e vantaggi
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">Guida completa all'isolamento termico a cappotto: quanto costa e quanto fa risparmiare.</p>
                </Link>
                <Link to="/blog/risparmio-energetico-casa-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Risparmio</span>
                  <h5 className="font-bold text-gray-900 mt-1 group-hover:text-[#C8E600] transition-colors">
                    Risparmio energetico casa 2026: 10 interventi efficaci
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">I migliori interventi per ridurre i consumi energetici della tua abitazione.</p>
                </Link>
              </div>
            </div>

          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
