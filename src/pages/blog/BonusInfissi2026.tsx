import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, AlertCircle, Euro, FileText, Shield, Thermometer, Home, ArrowRight } from 'lucide-react';

export default function BonusInfissi2026() {
  const articleData = {
    title: 'Bonus infissi 2026: guida completa alla detrazione del 50% per finestre e serramenti',
    excerpt: 'Tutto sul bonus infissi 2026: requisiti, importi massimi, documenti necessari, come richiederlo e quali infissi scegliere per massimizzare risparmio energetico e detrazione fiscale.',
    date: '12 Aprile 2026',
    dateISO: '2026-04-12',
    readTime: '12 min',
    author: 'Renova Team',
    category: 'Fisco',
    image: '/images/confronto-finestre.jpg',
    slug: 'bonus-infissi-2026'
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
      '@id': 'https://www.renovasolution.it/blog/bonus-infissi-2026'
    },
    keywords: 'bonus infissi 2026, detrazione infissi, sostituzione finestre detrazione, ecobonus infissi, detrazione 50% finestre',
    articleSection: articleData.category
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.renovasolution.it/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.renovasolution.it/blog' },
      { '@type': 'ListItem', position: 3, name: articleData.title, item: 'https://www.renovasolution.it/blog/bonus-infissi-2026' }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto si detrae con il bonus infissi 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il bonus infissi 2026 prevede una detrazione IRPEF del 50% sulla spesa sostenuta per la sostituzione di finestre e serramenti, con un tetto massimo di spesa di 60.000 euro per unita immobiliare. La detrazione viene ripartita in 10 rate annuali di pari importo.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali infissi rientrano nel bonus infissi 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rientrano nel bonus infissi 2026 le finestre in PVC, alluminio a taglio termico, legno e legno-alluminio, purche rispettino i valori di trasmittanza termica previsti dal DM 26 gennaio 2010. Sono inclusi anche persiane, scuri, tapparelle, cassonetti e zanzariere con schermatura solare.'
        }
      },
      {
        '@type': 'Question',
        name: 'Serve la comunicazione ENEA per il bonus infissi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, la comunicazione ENEA e obbligatoria per il bonus infissi 2026. Deve essere trasmessa entro 90 giorni dalla fine dei lavori attraverso il portale detrazionifiscali.enea.it, indicando i valori di trasmittanza termica degli infissi sostituiti e di quelli nuovi installati.'
        }
      },
      {
        '@type': 'Question',
        name: 'Posso usare il bonus infissi anche per la seconda casa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, il bonus infissi 2026 e applicabile sia alla prima casa (abitazione principale) sia alle seconde case. Tuttavia, per le seconde case la detrazione e del 36% anziche del 50%. Il tetto massimo di spesa resta invariato a 60.000 euro per unita immobiliare.'
        }
      },
      {
        '@type': 'Question',
        name: 'Come devo pagare per ottenere la detrazione infissi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il pagamento deve avvenire esclusivamente tramite bonifico bancario o postale parlante, che riporti la causale del versamento con riferimento alla norma (art. 1 commi 344-347 Legge 296/2006), il codice fiscale del beneficiario della detrazione e la partita IVA o codice fiscale del fornitore.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali documenti servono per il bonus infissi 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I documenti necessari sono: asseverazione di un tecnico abilitato o dichiarazione del produttore, schede tecniche dei nuovi infissi, attestato di prestazione energetica (APE) ante e post intervento, ricevute dei bonifici parlanti, fatture e ricevute fiscali, e la ricevuta della comunicazione ENEA.'
        }
      },
      {
        '@type': 'Question',
        name: 'Meglio infissi in PVC o in alluminio per il bonus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entrambi i materiali rientrano nel bonus infissi 2026 purche rispettino i limiti di trasmittanza termica. Il PVC offre un eccellente rapporto qualita-prezzo e ottime prestazioni isolanti. L alluminio a taglio termico e ideale per grandi superfici vetrate e garantisce massima durabilita. La scelta dipende dalle esigenze specifiche dell immobile.'
        }
      },
      {
        '@type': 'Question',
        name: 'Il bonus infissi 2026 e cumulabile con altri bonus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il bonus infissi 2026 non e cumulabile con altre detrazioni per lo stesso intervento (non si puo detrarre la stessa spesa due volte). Tuttavia, e possibile combinare il bonus infissi con altri bonus per interventi diversi sullo stesso immobile, ad esempio ristrutturazione e fotovoltaico.'
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${articleData.title} | Renova Solution`}
        description={articleData.excerpt}
        keywords="bonus infissi 2026, detrazione infissi, sostituzione finestre detrazione, ecobonus infissi, detrazione 50% finestre, bonus serramenti 2026, sostituzione infissi detrazione fiscale"
        ogType="article"
        canonical="https://www.renovasolution.it/blog/bonus-infissi-2026"
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogPostSchema(articleData.title, articleData.excerpt, 'https://www.renovasolution.it/blog/bonus-infissi-2026', `https://www.renovasolution.it${articleData.image}`, articleData.dateISO, articleData.author))}</script>

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
                Il <strong>bonus infissi 2026</strong> rappresenta una delle agevolazioni fiscali più vantaggiose per chi desidera
                sostituire le vecchie finestre con serramenti di ultima generazione. Grazie alla <strong>detrazione del 50%</strong> sulle
                spese sostenute, è possibile rinnovare gli infissi della propria abitazione risparmiando fino alla metà del costo totale.
                In questa guida completa analizziamo nel dettaglio requisiti, importi, documenti necessari e le migliori soluzioni
                per massimizzare il risparmio energetico e fiscale.
              </p>

              <p>
                La <strong>sostituzione finestre con detrazione fiscale</strong> è un intervento che migliora il comfort abitativo,
                riduce i consumi energetici e valorizza l'immobile. Nel 2026 le condizioni sono particolarmente favorevoli:
                l'<strong>Ecobonus infissi</strong> è stato confermato al 50% per la prima casa, con possibilità di detrazione
                anche per le seconde abitazioni, seppur con aliquota ridotta.
              </p>

              {/* Sommario */}
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Sommario della guida</h3>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">1.</span>
                    <span>Cos'è il bonus infissi 2026 e come funziona</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">2.</span>
                    <span>Detrazione 50% o 36%: prima casa vs seconda casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">3.</span>
                    <span>Requisiti tecnici e limiti di trasmittanza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">4.</span>
                    <span>Spese ammesse in detrazione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">5.</span>
                    <span>Importi massimi detraibili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">6.</span>
                    <span>Come richiedere il bonus: procedura passo dopo passo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">7.</span>
                    <span>Documenti necessari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">8.</span>
                    <span>Migliori materiali per infissi: PVC, alluminio, legno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">9.</span>
                    <span>Vetri e prestazioni energetiche</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">10.</span>
                    <span>Errori da evitare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#C8E600]">11.</span>
                    <span>Domande frequenti (FAQ)</span>
                  </li>
                </ol>
              </div>

              {/* Sezione 1: Cos'è il bonus infissi */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Cos'è il bonus infissi 2026 e come funziona</h2>
              <p>
                Il <strong>bonus infissi 2026</strong> è un'agevolazione fiscale che consente di detrarre dall'IRPEF il 50% delle spese
                sostenute per la sostituzione di finestre, porte-finestre e serramenti. Rientra nell'ambito dell'<strong>Ecobonus</strong>,
                ovvero le detrazioni per interventi di riqualificazione energetica degli edifici esistenti, disciplinate dall'articolo 1,
                commi 344-347 della Legge 296/2006 e successive proroghe.
              </p>

              <p>
                L'obiettivo del legislatore è incentivare la sostituzione degli infissi obsoleti con modelli ad alta efficienza energetica,
                riducendo così le dispersioni termiche e i consumi di energia per riscaldamento e raffrescamento. In Italia,
                si stima che attraverso finestre vecchie e mal isolate si perda fino al <strong>25-30% del calore</strong> prodotto
                dall'impianto di riscaldamento.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-[#C8E600]" /> I numeri del bonus infissi 2026
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">50%</span>
                    <p className="text-sm text-gray-600 mt-1">Aliquota di detrazione per la prima casa</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">36%</span>
                    <p className="text-sm text-gray-600 mt-1">Aliquota di detrazione per la seconda casa</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">60.000 &euro;</span>
                    <p className="text-sm text-gray-600 mt-1">Tetto massimo di spesa detraibile per unità immobiliare</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">10 anni</span>
                    <p className="text-sm text-gray-600 mt-1">Rate annuali di pari importo in dichiarazione dei redditi</p>
                  </div>
                </div>
              </div>

              <p>
                A differenza del vecchio Superbonus 110%, il <strong>bonus infissi 2026</strong> non prevede cessione del credito
                né sconto in fattura: la detrazione si ottiene esclusivamente attraverso la dichiarazione dei redditi (modello 730 o
                modello Redditi PF), suddivisa in 10 rate annuali di pari importo.
              </p>

              {/* Sezione 2: Prima casa vs seconda casa */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Detrazione 50% o 36%: prima casa vs seconda casa</h2>
              <p>
                Una delle novità più importanti introdotte dalla Legge di Bilancio 2025 e confermata per il 2026 riguarda la
                differenziazione dell'aliquota in base alla tipologia di immobile:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Prima casa (abitazione principale):</strong> detrazione del <strong>50%</strong> delle spese sostenute,
                  con tetto massimo di spesa di 60.000 euro per unità immobiliare</span>
                </li>
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Seconda casa e altri immobili:</strong> detrazione del <strong>36%</strong> delle spese sostenute,
                  con lo stesso tetto massimo di 60.000 euro per unità immobiliare</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Esempio pratico:</strong> se spendi 20.000 euro per sostituire tutti gli infissi della tua prima casa,
                  potrai detrarre <strong>10.000 euro</strong> in 10 anni (1.000 euro all'anno nella dichiarazione dei redditi).
                  Se invece l'intervento riguarda la seconda casa, la detrazione sarà di <strong>7.200 euro</strong> (720 euro all'anno).
                </p>
              </div>

              <p>
                Per "abitazione principale" si intende l'immobile nel quale il contribuente e il suo nucleo familiare dimorano
                abitualmente e risiedono anagraficamente. È importante verificare che la residenza anagrafica sia effettivamente
                nell'immobile oggetto dell'intervento al momento della richiesta della detrazione.
              </p>

              {/* Sezione 3: Requisiti tecnici */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Requisiti tecnici e limiti di trasmittanza termica</h2>
              <p>
                Per accedere al <strong>bonus infissi 2026</strong>, i nuovi serramenti devono rispettare precisi requisiti
                di prestazione energetica. Il parametro chiave è la <strong>trasmittanza termica (Uw)</strong>, che misura
                la capacità dell'infisso di trattenere il calore: più basso è il valore, migliore è l'isolamento termico.
              </p>

              <p>
                I limiti massimi di trasmittanza termica variano in base alla <strong>zona climatica</strong> in cui si trova
                l'immobile. L'Italia è suddivisa in 6 zone climatiche (dalla A alla F), e ciascuna ha requisiti diversi:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-[#C8E600]" /> Limiti di trasmittanza termica Uw (W/m²K) per zona climatica
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-2 px-3 font-bold">Zona climatica</th>
                        <th className="text-left py-2 px-3 font-bold">Uw massimo</th>
                        <th className="text-left py-2 px-3 font-bold">Esempio città</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Zona A</td>
                        <td className="py-2 px-3 font-semibold">2,60 W/m²K</td>
                        <td className="py-2 px-3 text-gray-500">Lampedusa, Pantelleria</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Zona B</td>
                        <td className="py-2 px-3 font-semibold">2,60 W/m²K</td>
                        <td className="py-2 px-3 text-gray-500">Palermo, Catania, Cagliari</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Zona C</td>
                        <td className="py-2 px-3 font-semibold">1,75 W/m²K</td>
                        <td className="py-2 px-3 text-gray-500">Napoli, Bari, Reggio Calabria</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Zona D</td>
                        <td className="py-2 px-3 font-semibold">1,67 W/m²K</td>
                        <td className="py-2 px-3 text-gray-500">Roma, Firenze, Genova</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Zona E</td>
                        <td className="py-2 px-3 font-semibold">1,30 W/m²K</td>
                        <td className="py-2 px-3 text-gray-500">Milano, Torino, Bologna</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Zona F</td>
                        <td className="py-2 px-3 font-semibold">1,00 W/m²K</td>
                        <td className="py-2 px-3 text-gray-500">Belluno, Cuneo, L'Aquila</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                I moderni <Link to="/infissi/finestre-pvc" className="text-[#C8E600] hover:underline font-semibold">infissi in PVC</Link> e
                gli <Link to="/infissi/finestre-alluminio" className="text-[#C8E600] hover:underline font-semibold">infissi in alluminio a taglio termico</Link> raggiungono
                facilmente valori di trasmittanza termica inferiori a 1,0 W/m²K, risultando idonei anche per le zone climatiche
                più rigide (zona E e F).
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Attenzione: requisito fondamentale
                </h4>
                <p className="text-amber-800 text-sm">
                  Il bonus infissi 2026 si applica esclusivamente alla <strong>sostituzione</strong> di infissi esistenti.
                  Non è ammessa la detrazione per l'installazione di nuovi infissi in aperture precedentemente inesistenti
                  (ad esempio in caso di ampliamento dell'immobile). L'intervento deve configurarsi come miglioramento
                  dell'efficienza energetica di un elemento già presente nell'edificio.
                </p>
              </div>

              <p>
                Oltre alla trasmittanza termica del serramento completo (Uw), è importante considerare anche la trasmittanza
                del vetro (Ug) e del telaio (Uf). I vetri basso-emissivi e i telai con camere d'aria multiple o schiuma isolante
                contribuiscono a raggiungere prestazioni ottimali.
              </p>

              {/* Sezione 4: Spese ammesse */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Spese ammesse in detrazione</h2>
              <p>
                La <strong>detrazione infissi 2026</strong> copre un'ampia gamma di spese connesse all'intervento di sostituzione.
                È fondamentale conoscere nel dettaglio cosa rientra e cosa resta escluso per evitare brutte sorprese in fase
                di dichiarazione dei redditi.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Spese detraibili</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Fornitura e posa in opera</strong> di finestre, porte-finestre, portoni d'ingresso (se disperdenti)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Persiane, scuri, avvolgibili e cassonetti</strong> installati contestualmente agli infissi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Zanzariere con schermatura solare</strong> (fattore di trasmissione solare gtot inferiore a 0,35)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Davanzali e soglie</strong> quando la sostituzione è necessaria per la corretta installazione</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Opere murarie accessorie</strong> (demolizione e ricostruzione spallette, ripristino intonaco)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Smaltimento dei vecchi infissi</strong> rimossi durante l'intervento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Prestazioni professionali</strong> (progettazione, asseverazione, certificazione energetica)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>IVA</strong> sulla fornitura e installazione (aliquota agevolata del 10%)</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Spese non detraibili</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Installazione di infissi su <strong>nuove costruzioni</strong> (non esiste un infisso precedente da sostituire)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Sostituzione di infissi che <strong>non delimitano il volume riscaldato</strong> (es. verande non riscaldate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Infissi che <strong>non rispettano i limiti di trasmittanza</strong> previsti dalla normativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Interventi su <strong>immobili in costruzione</strong> o non ancora accatastati</span>
                </li>
              </ul>

              {/* Sezione 5: Importi massimi */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Importi massimi detraibili: quanto puoi risparmiare</h2>
              <p>
                Il tetto massimo di spesa per il <strong>bonus infissi 2026</strong> nell'ambito dell'Ecobonus è fissato a
                <strong> 60.000 euro per unità immobiliare</strong>. Questo significa che la detrazione massima ottenibile è:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-green-700 mb-2">Prima casa (50%)</p>
                  <p className="text-4xl font-bold text-green-700">30.000 &euro;</p>
                  <p className="text-sm text-green-600 mt-2">detrazione massima in 10 anni</p>
                  <p className="text-xs text-green-500 mt-1">= 3.000 &euro;/anno in dichiarazione</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-blue-700 mb-2">Seconda casa (36%)</p>
                  <p className="text-4xl font-bold text-blue-700">21.600 &euro;</p>
                  <p className="text-sm text-blue-600 mt-2">detrazione massima in 10 anni</p>
                  <p className="text-xs text-blue-500 mt-1">= 2.160 &euro;/anno in dichiarazione</p>
                </div>
              </div>

              <p>
                Per dare un'idea concreta dei costi, ecco una stima indicativa per la sostituzione degli infissi
                in un appartamento medio:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4">Esempio di costo e detrazione per un appartamento di 100 m²</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">6 finestre + 2 porte-finestre in PVC con triplo vetro</span>
                    <span className="font-bold">12.000 - 18.000 &euro;</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Avvolgibili e cassonetti coibentati</span>
                    <span className="font-bold">3.000 - 5.000 &euro;</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Posa in opera e opere accessorie</span>
                    <span className="font-bold">2.000 - 4.000 &euro;</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Pratiche e asseverazione</span>
                    <span className="font-bold">500 - 1.000 &euro;</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-gray-900">Totale indicativo</span>
                    <span className="font-bold text-[#C8E600] text-lg">17.500 - 28.000 &euro;</span>
                  </div>
                  <div className="flex justify-between items-center bg-white rounded-lg p-3">
                    <span className="font-bold text-gray-900">Detrazione 50% (prima casa)</span>
                    <span className="font-bold text-green-600 text-lg">8.750 - 14.000 &euro;</span>
                  </div>
                </div>
              </div>

              {/* Sezione 6: Come richiedere il bonus */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Come richiedere il bonus infissi 2026: procedura passo dopo passo</h2>
              <p>
                Richiedere il <strong>bonus infissi 2026</strong> è un processo che richiede attenzione nella documentazione
                e nei pagamenti. Ecco la procedura completa suddivisa in fasi:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fase 1: Prima dell'intervento</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span><strong>Verifica la zona climatica</strong> del tuo immobile e i relativi limiti di trasmittanza termica richiesti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span><strong>Richiedi un sopralluogo</strong> a un serramentista qualificato per valutare lo stato degli infissi esistenti
                  e individuare la soluzione più adatta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span><strong>Ottieni un preventivo dettagliato</strong> che specifichi marca, modello, dimensioni e valori di
                  trasmittanza termica dei nuovi infissi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span><strong>Verifica i requisiti catastali</strong> dell'immobile: deve essere regolarmente accatastato e in regola
                  con i tributi dovuti</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fase 2: Durante l'intervento</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <span><strong>Effettua il pagamento con bonifico parlante</strong>, indicando: causale del versamento con riferimento
                  alla Legge 296/2006, codice fiscale del beneficiario e partita IVA del fornitore</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
                  <span><strong>Conserva tutte le fatture</strong> relative alla fornitura, posa in opera e prestazioni professionali</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">7</span>
                  <span><strong>Richiedi le schede tecniche</strong> dei nuovi infissi al produttore, con certificazione dei valori
                  di trasmittanza termica</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fase 3: Dopo l'intervento</h3>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">8</span>
                  <span><strong>Ottieni l'asseverazione</strong> di un tecnico abilitato che certifichi il rispetto dei requisiti tecnici
                  e la congruità della spesa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">9</span>
                  <span><strong>Invia la comunicazione ENEA</strong> entro 90 giorni dalla fine dei lavori attraverso il portale
                  detrazionifiscali.enea.it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#C8E600] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">10</span>
                  <span><strong>Inserisci la detrazione nella dichiarazione dei redditi</strong> (modello 730 o Redditi PF) dell'anno
                  successivo a quello di sostenimento della spesa</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Comunicazione ENEA: non dimenticarla!
                </h4>
                <p className="text-amber-800 text-sm">
                  La mancata trasmissione della comunicazione ENEA entro 90 giorni dalla fine dei lavori comporta la
                  <strong> perdita del diritto alla detrazione</strong>. È uno degli errori più comuni e costosi.
                  Il nostro team si occupa di tutta la pratica per conto tuo, inclusa la comunicazione ENEA.
                </p>
              </div>

              {/* Sezione 7: Documenti necessari */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Documenti necessari per il bonus infissi 2026</h2>
              <p>
                Per ottenere la <strong>detrazione infissi 2026</strong> è necessario conservare e, in caso di controllo,
                esibire i seguenti documenti:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#C8E600]" /> Checklist documenti obbligatori
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Asseverazione tecnica</strong> redatta da un tecnico abilitato (ingegnere, architetto, geometra)
                    che attesti la rispondenza dell'intervento ai requisiti tecnici richiesti. Per interventi su singole
                    unità immobiliari, può essere sostituita dalla <strong>dichiarazione del produttore</strong> degli infissi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Attestato di Prestazione Energetica (APE)</strong> dell'immobile, se previsto dalla normativa
                    regionale vigente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Schede tecniche dei nuovi infissi</strong> con certificazione della trasmittanza termica
                    (marcatura CE e dichiarazione di prestazione DoP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Fatture e ricevute fiscali</strong> che evidenzino la tipologia di intervento, i materiali
                    utilizzati e i relativi costi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Ricevute dei bonifici parlanti</strong> (bancari o postali) con causale specifica, codice fiscale
                    del beneficiario e partita IVA del fornitore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Ricevuta della comunicazione ENEA</strong> trasmessa entro 90 giorni dalla fine lavori</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Visura catastale</strong> dell'immobile oggetto dell'intervento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Consenso all'esecuzione dei lavori</strong> da parte del proprietario (se il beneficiario è
                    un inquilino, un comodatario o un familiare convivente)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Suggerimento:</strong> conserva tutti i documenti per almeno <strong>15 anni</strong> dalla data
                  dell'ultima rata di detrazione, in quanto l'Agenzia delle Entrate può effettuare controlli entro questo termine.
                  Ti consigliamo di digitalizzare tutta la documentazione e conservarla anche in formato elettronico.
                </p>
              </div>

              {/* Sezione 8: Migliori materiali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Migliori materiali per infissi: PVC, alluminio o legno?</h2>
              <p>
                La scelta del materiale è fondamentale sia per le prestazioni energetiche sia per il risultato estetico.
                Ecco un confronto dettagliato tra le principali opzioni disponibili per la <strong>sostituzione finestre
                con detrazione fiscale</strong>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Infissi in PVC: il miglior rapporto qualità-prezzo</h3>
              <p>
                Le <Link to="/infissi/finestre-pvc" className="text-[#C8E600] hover:underline font-semibold">finestre in PVC</Link> rappresentano
                la scelta più diffusa in Italia per la sostituzione degli infissi con detrazione fiscale. Ecco perché:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Eccellente isolamento termico:</strong> il PVC è un isolante naturale con valori di Uw che arrivano
                  fino a 0,7 W/m²K con triplo vetro e profili multi-camera</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Manutenzione minima:</strong> non richiede verniciatura o trattamenti periodici, si pulisce
                  facilmente con acqua e detergente neutro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Prezzo competitivo:</strong> costo inferiore del 20-30% rispetto all'alluminio a taglio termico
                  e al legno-alluminio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ampia gamma di colori:</strong> disponibile in decine di finiture, inclusi effetti legno
                  indistinguibili dall'originale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Riciclabile al 100%:</strong> il PVC può essere riciclato fino a 7 volte senza perdita di qualità,
                  rendendolo una scelta ecosostenibile</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Infissi in alluminio a taglio termico: resistenza e design</h3>
              <p>
                Le <Link to="/infissi/finestre-alluminio" className="text-[#C8E600] hover:underline font-semibold">finestre in alluminio a taglio termico</Link> sono
                la scelta ideale per chi cerca linee sottili, grandi superfici vetrate e massima resistenza:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Profili sottili:</strong> grazie alla resistenza meccanica dell'alluminio, i profili sono più
                  stretti rispetto al PVC, massimizzando la superficie vetrata e la luminosità</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Durabilità estrema:</strong> l'alluminio non si deforma, non si corrode e mantiene le sue
                  caratteristiche inalterate per oltre 50 anni</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Taglio termico:</strong> l'inserimento di barrette in poliammide tra la parte esterna e interna
                  del profilo interrompe il ponte termico, garantendo eccellente isolamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ideale per grandi dimensioni:</strong> perfetto per alzanti scorrevoli, vetrate panoramiche e
                  applicazioni architettoniche di pregio</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Infissi in legno e legno-alluminio: tradizione e innovazione</h3>
              <p>
                Il legno resta un materiale nobile e apprezzato per chi ricerca calore estetico e naturalezza:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Isolamento termico naturale:</strong> il legno è un eccellente isolante con valori di conducibilità
                  termica molto bassi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Estetica senza compromessi:</strong> la bellezza e il calore del legno naturale sono ineguagliabili,
                  perfetti per immobili di pregio e centri storici</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Legno-alluminio:</strong> la combinazione unisce l'estetica interna del legno con la protezione
                  esterna dell'alluminio, riducendo drasticamente la manutenzione</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4">Confronto rapido tra i materiali</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-2 px-3 font-bold">Caratteristica</th>
                        <th className="text-center py-2 px-3 font-bold">PVC</th>
                        <th className="text-center py-2 px-3 font-bold">Alluminio TT</th>
                        <th className="text-center py-2 px-3 font-bold">Legno-Alluminio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Isolamento termico</td>
                        <td className="py-2 px-3 text-center">Ottimo</td>
                        <td className="py-2 px-3 text-center">Buono</td>
                        <td className="py-2 px-3 text-center">Eccellente</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Manutenzione</td>
                        <td className="py-2 px-3 text-center">Minima</td>
                        <td className="py-2 px-3 text-center">Minima</td>
                        <td className="py-2 px-3 text-center">Bassa</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Durabilità</td>
                        <td className="py-2 px-3 text-center">40+ anni</td>
                        <td className="py-2 px-3 text-center">50+ anni</td>
                        <td className="py-2 px-3 text-center">40+ anni</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">Prezzo (indicativo)</td>
                        <td className="py-2 px-3 text-center font-semibold text-green-600">€€</td>
                        <td className="py-2 px-3 text-center font-semibold text-amber-600">€€€</td>
                        <td className="py-2 px-3 text-center font-semibold text-red-600">€€€€</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Profili sottili</td>
                        <td className="py-2 px-3 text-center">No</td>
                        <td className="py-2 px-3 text-center">Sì</td>
                        <td className="py-2 px-3 text-center">Medio</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sezione 9: Vetri e prestazioni */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Vetri e prestazioni energetiche: quale vetrata scegliere</h2>
              <p>
                Il vetro rappresenta circa il 70-80% della superficie di un infisso, ed è quindi il componente che incide
                maggiormente sulle prestazioni termiche complessive. Per il <strong>bonus infissi 2026</strong>, la scelta
                della vetrata è cruciale.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Doppio vetro basso-emissivo</h3>
              <p>
                Il doppio vetro con trattamento basso-emissivo è lo standard minimo per accedere alle detrazioni nella maggior
                parte delle zone climatiche. È composto da due lastre di vetro con interposta una camera riempita di gas argon
                o kripton, che riduce la conducibilità termica. La lastra interna ha un rivestimento basso-emissivo che riflette
                il calore verso l'interno dell'abitazione.
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ug tipico:</strong> 1,0 - 1,1 W/m²K (con gas argon)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Spessore:</strong> 24-28 mm (4/16/4 o 4/20/4)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ideale per:</strong> zone climatiche A, B, C, D</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Triplo vetro basso-emissivo</h3>
              <p>
                Il triplo vetro è la scelta ottimale per le zone climatiche più fredde (E e F) e per chi desidera il
                massimo isolamento termico e acustico. Tre lastre di vetro con due camere riempite di gas nobile garantiscono
                prestazioni eccezionali.
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ug tipico:</strong> 0,5 - 0,7 W/m²K (con gas argon)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Spessore:</strong> 36-44 mm (4/12/4/12/4 o 4/16/4/16/4)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ideale per:</strong> zone climatiche E, F e per chi cerca massimo isolamento acustico</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Consiglio degli esperti:</strong> nella zona climatica E (Milano, Torino, Bologna, Verona), il triplo vetro
                  rappresenta la scelta migliore. L'investimento iniziale leggermente superiore viene ampiamente ripagato dal
                  risparmio in bolletta, stimato tra il <strong>20% e il 35%</strong> sui costi di riscaldamento, e dalla
                  maggiore detrazione ottenibile grazie ai valori di trasmittanza più bassi.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Vetri con controllo solare</h3>
              <p>
                Per le esposizioni a sud e ovest, i vetri con trattamento a controllo solare rappresentano un'ottima
                integrazione. Questi vetri riducono l'ingresso del calore estivo senza compromettere la luminosità,
                abbattendo i costi di raffrescamento estivo. Sono particolarmente indicati per le zone climatiche calde
                (A, B, C) dove il surriscaldamento estivo è un problema significativo.
              </p>

              {/* Sezione 10: Errori da evitare */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. I 7 errori più comuni da evitare con il bonus infissi</h2>
              <p>
                Ogni anno migliaia di contribuenti perdono il diritto alla detrazione per errori banali ma fatali.
                Ecco i più frequenti e come evitarli:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 1: Pagamento non conforme
                  </h4>
                  <p className="text-red-700 text-sm">
                    Pagare con assegno, contanti, carta di credito o bonifico ordinario (non "parlante") fa perdere
                    automaticamente il diritto alla detrazione. <strong>Usa sempre il bonifico parlante</strong> con
                    la causale specifica per detrazioni Ecobonus.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 2: Comunicazione ENEA in ritardo
                  </h4>
                  <p className="text-red-700 text-sm">
                    La comunicazione ENEA deve essere trasmessa entro <strong>90 giorni dalla fine dei lavori</strong>.
                    Un ritardo, anche di un solo giorno, comporta la perdita della detrazione. Segna la scadenza in agenda
                    o affidati a un professionista.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 3: Infissi non conformi ai requisiti
                  </h4>
                  <p className="text-red-700 text-sm">
                    Acquistare infissi che non rispettano i limiti di trasmittanza termica della propria zona climatica.
                    <strong> Verifica sempre i valori Uw prima dell'acquisto</strong> e richiedi la certificazione al produttore.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 4: Mancanza di documentazione
                  </h4>
                  <p className="text-red-700 text-sm">
                    Non conservare fatture, bonifici, schede tecniche o asseverazione. In caso di controllo da parte
                    dell'Agenzia delle Entrate, la mancanza di anche un solo documento può far perdere l'intera detrazione.
                    <strong> Conserva tutto per almeno 15 anni.</strong>
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 5: Confondere nuova installazione con sostituzione
                  </h4>
                  <p className="text-red-700 text-sm">
                    Il bonus infissi vale solo per la <strong>sostituzione di infissi esistenti</strong>, non per nuove
                    installazioni. Se stai ampliando l'immobile o creando nuove aperture, queste non rientrano nell'agevolazione.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 6: Intestazione errata del bonifico
                  </h4>
                  <p className="text-red-700 text-sm">
                    Il codice fiscale indicato nel bonifico parlante deve corrispondere al soggetto che richiede la detrazione.
                    Se il coniuge paga ma la casa è intestata all'altro, <strong>assicurati che tutti i dati siano corretti</strong>.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" /> Errore 7: Non verificare la capienza fiscale
                  </h4>
                  <p className="text-red-700 text-sm">
                    La detrazione riduce l'IRPEF dovuta. Se la rata annua di detrazione supera l'imposta che devi pagare,
                    <strong> la parte eccedente viene persa</strong> (non è rimborsabile né riportabile all'anno successivo).
                    Verifica la tua capienza fiscale con un commercialista.
                  </p>
                </div>
              </div>

              {/* Sezione 11: FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Domande frequenti sul bonus infissi 2026</h2>

              <div className="space-y-6 my-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quanto si detrae con il bonus infissi 2026?</h3>
                  <p>
                    Il <strong>bonus infissi 2026</strong> prevede una detrazione IRPEF del <strong>50%</strong> sulla spesa
                    sostenuta per la sostituzione di finestre e serramenti nella prima casa, con un tetto massimo di spesa
                    di 60.000 euro per unità immobiliare. La detrazione viene ripartita in 10 rate annuali di pari importo.
                    Per le seconde case, l'aliquota scende al 36%.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quali infissi rientrano nel bonus infissi 2026?</h3>
                  <p>
                    Rientrano nel <strong>bonus infissi</strong> le finestre in PVC, alluminio a taglio termico, legno e
                    legno-alluminio, purché rispettino i valori di trasmittanza termica previsti dal DM 26 gennaio 2010.
                    Sono inclusi anche persiane, scuri, tapparelle, cassonetti e zanzariere con schermatura solare
                    (fattore gtot inferiore a 0,35).
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Serve la comunicazione ENEA per il bonus infissi?</h3>
                  <p>
                    Sì, la <strong>comunicazione ENEA</strong> è obbligatoria. Deve essere trasmessa entro 90 giorni dalla
                    fine dei lavori attraverso il portale detrazionifiscali.enea.it, indicando i valori di trasmittanza
                    termica degli infissi sostituiti e di quelli nuovi installati. La mancata trasmissione comporta la
                    perdita della detrazione.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Posso usare il bonus infissi anche per la seconda casa?</h3>
                  <p>
                    Sì, il <strong>bonus infissi 2026</strong> è applicabile anche alle seconde case e ad altri immobili
                    non adibiti ad abitazione principale. In questo caso, però, l'aliquota di detrazione scende
                    al <strong>36%</strong> anziché il 50%. Il tetto massimo di spesa resta invariato a 60.000 euro
                    per unità immobiliare.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Come devo pagare per ottenere la detrazione infissi?</h3>
                  <p>
                    Il pagamento deve avvenire esclusivamente tramite <strong>bonifico bancario o postale parlante</strong>.
                    Il bonifico deve riportare: la causale del versamento con riferimento alla norma (art. 1 commi 344-347
                    Legge 296/2006), il codice fiscale del beneficiario della detrazione e la partita IVA o codice fiscale
                    del fornitore. Qualsiasi altra forma di pagamento non è ammessa.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quali documenti servono per il bonus infissi 2026?</h3>
                  <p>
                    I documenti necessari includono: asseverazione di un tecnico abilitato (o dichiarazione del produttore per
                    singole unità), schede tecniche dei nuovi infissi con certificazione di trasmittanza termica, fatture e
                    ricevute fiscali, ricevute dei bonifici parlanti, ricevuta della comunicazione ENEA, visura catastale
                    dell'immobile e, se applicabile, l'APE ante e post intervento.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Meglio infissi in PVC o in alluminio per il bonus?</h3>
                  <p>
                    Entrambi i materiali rientrano nel <strong>bonus infissi 2026</strong> purché rispettino i limiti di
                    trasmittanza termica. Il <Link to="/infissi/finestre-pvc" className="text-[#C8E600] hover:underline font-semibold">PVC</Link> offre
                    un eccellente rapporto qualità-prezzo e ottime prestazioni isolanti.
                    L'<Link to="/infissi/finestre-alluminio" className="text-[#C8E600] hover:underline font-semibold">alluminio a taglio termico</Link> è
                    ideale per grandi superfici vetrate e garantisce massima durabilità. La scelta dipende dalle esigenze
                    specifiche dell'immobile, dal budget e dalle preferenze estetiche.
                  </p>
                </div>

                <div className="pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Il bonus infissi 2026 è cumulabile con altri bonus?</h3>
                  <p>
                    Il <strong>bonus infissi 2026</strong> non è cumulabile con altre detrazioni per lo stesso intervento
                    (non si può detrarre la stessa spesa due volte). Tuttavia, è possibile combinare il bonus infissi con
                    altri bonus per interventi diversi sullo stesso immobile: ad esempio, puoi detrarre al 50% la sostituzione
                    degli infissi e contemporaneamente usufruire della detrazione per ristrutturazione per altri lavori
                    come il rifacimento del bagno o dell'impianto elettrico.
                  </p>
                </div>
              </div>

              {/* CTA Preventivo */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 my-10 text-white">
                <h2 className="text-2xl font-bold mb-4">Vuoi sostituire i tuoi infissi con il bonus 50%?</h2>
                <p className="text-white/80 mb-6">
                  Il team di <strong>Renova Solution</strong> ti accompagna in tutto il percorso: dal sopralluogo gratuito
                  alla scelta degli infissi più adatti, dalla posa in opera certificata alla gestione completa delle
                  pratiche fiscali, inclusa la comunicazione ENEA. Richiedi subito un preventivo personalizzato e
                  scopri quanto puoi risparmiare.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/preventivo"
                    className="inline-flex items-center gap-2 bg-[#C8E600] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#b5d000] transition-colors"
                  >
                    Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/infissi/finestre-pvc"
                    className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Scopri i nostri infissi <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Conclusioni */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                Il <strong>bonus infissi 2026</strong> rappresenta un'opportunità concreta per migliorare il comfort
                abitativo, ridurre i consumi energetici e valorizzare il proprio immobile, risparmiando fino al 50%
                sulle spese di sostituzione dei serramenti. Per massimizzare i vantaggi è fondamentale:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Scegliere infissi con prestazioni energetiche adeguate alla propria zona climatica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Affidarsi a un installatore qualificato che garantisca la corretta posa in opera</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Rispettare scrupolosamente le procedure di pagamento e documentazione</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Non dimenticare la comunicazione ENEA entro i 90 giorni previsti</span>
                </li>
              </ul>
              <p>
                <strong>Renova Solution</strong> è il partner ideale per la sostituzione dei tuoi infissi con detrazione
                fiscale. Con anni di esperienza nella fornitura e posa di serramenti ad alte prestazioni, ci occupiamo
                di tutto: dalla consulenza iniziale al sopralluogo, dalla scelta dei materiali alla gestione completa
                delle pratiche fiscali. <Link to="/preventivo" className="text-[#C8E600] hover:underline font-semibold">Contattaci
                per una consulenza gratuita</Link> e inizia a risparmiare subito.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['bonus infissi 2026', 'detrazione infissi', 'ecobonus infissi', 'sostituzione finestre', 'serramenti PVC', 'detrazioni fiscali', 'risparmio energetico'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Articoli correlati */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Articoli correlati</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Link to="/blog/detrazioni-fiscali-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Fisco</span>
                  <h4 className="font-bold text-gray-900 mt-2 group-hover:text-[#C8E600] transition-colors">
                    Detrazioni fiscali 2026: guida completa a Ecobonus e detrazioni ristrutturazioni
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">Tutte le agevolazioni fiscali disponibili per ristrutturare casa nel 2026.</p>
                </Link>
                <Link to="/blog/finestre-materiali-confronto-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Infissi</span>
                  <h4 className="font-bold text-gray-900 mt-2 group-hover:text-[#C8E600] transition-colors">
                    Finestre: confronto tra PVC, alluminio e legno nel 2026
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">Quale materiale scegliere per i tuoi nuovi infissi? Guida completa al confronto.</p>
                </Link>
                <Link to="/blog/infissi-risparmio-energetico" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Energia</span>
                  <h4 className="font-bold text-gray-900 mt-2 group-hover:text-[#C8E600] transition-colors">
                    Infissi e risparmio energetico: quanto si risparmia davvero
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">Analisi dettagliata del risparmio ottenibile con la sostituzione degli infissi.</p>
                </Link>
                <Link to="/blog/classe-energetica-casa-2026" className="group block bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-[#C8E600] uppercase">Energia</span>
                  <h4 className="font-bold text-gray-900 mt-2 group-hover:text-[#C8E600] transition-colors">
                    Classe energetica casa: come migliorarla nel 2026
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">Scopri come innalzare la classe energetica del tuo immobile e aumentarne il valore.</p>
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