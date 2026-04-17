import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function UmiditaCondensaMuffa2026() {
  const articleData = {
    title: 'Umidità, condensa e muffa in casa: cause, soluzioni e come eliminare il problema definitivamente',
    excerpt: 'Scopri perché si forma condensa sulle finestre e muffa negli angoli, quali sono le cause profonde (ponti termici, infissi vecchi, ventilazione insufficiente) e come risolverle con infissi moderni, cappotto termico e VMC nel 2026.',
    date: '15 Febbraio 2026',
    dateISO: '2026-02-15',
    readTime: '11 min',
    author: 'Renova Team',
    category: 'Infissi',
    image: '/images/muffa-umidita.jpg',
    slug: 'umidita-condensa-muffa-soluzioni-2026'
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
    keywords: 'condensa finestre, muffa casa cause, umidità pareti soluzioni, condensa vetri finestre, muffa angoli casa, eliminare condensa infissi, ponte termico finestre, ventilazione casa',
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
        keywords="condensa finestre, muffa casa cause, umidità pareti soluzioni, condensa vetri finestre, muffa angoli casa, eliminare condensa infissi, ponte termico finestre, ventilazione casa"
        ogType="article"
        canonical={`https://www.renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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

        {/* Article body */}
        <article className="py-12 md:py-16 bg-white" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={articleData.title} />
          <meta itemProp="datePublished" content={articleData.dateISO} />
          <meta itemProp="author" content={articleData.author} />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C8E600] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Torna al blog
            </Link>

            <div className="prose prose-lg max-w-none text-gray-700">

              {/* 1. Introduzione */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <strong>Umidità alle pareti, condensa sui vetri ogni mattina, macchie nere di muffa negli angoli</strong>:
                sono problemi che conosce bene chi vive in Friuli Venezia Giulia o in Veneto. Il clima di queste regioni —
                con inverni rigidi, primavere umide e sbalzi termici frequenti — crea le condizioni ideali per la formazione
                di condensa e muffa all'interno delle abitazioni. Eppure molte famiglie continuano ad affrontare il problema
                con rimedi temporanei, senza mai risolverlo alla radice. In questo articolo spieghiamo <strong>perché si forma
                la muffa</strong>, quali sono le cause profonde e come risolverle definitivamente nel 2026.
              </p>

              {/* 2. Condensa, umidità e muffa: sono lo stesso problema? */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Condensa, umidità e muffa: sono lo stesso problema?</h2>
              <p>
                Spesso si usano i termini in modo intercambiabile, ma <strong>condensa, umidità e muffa sono tre fenomeni distinti</strong>,
                anche se strettamente correlati.
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Umidità relativa</strong>: è la percentuale di vapore acqueo presente nell'aria rispetto al
                    massimo che l'aria può contenere a quella temperatura. Un'umidità interna ideale si aggira tra il 40%
                    e il 60%. Sopra il 70% si creano condizioni favorevoli alla muffa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Condensa</strong>: si forma quando il vapore acqueo contenuto nell'aria calda entra in
                    contatto con una superficie fredda e si trasforma in acqua liquida. È il classico vetro appannato
                    d'inverno o le goccioline agli angoli delle pareti.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Muffa</strong>: è la conseguenza biologica di condensa e umidità prolungata. Le spore di
                    muffe (come <em>Aspergillus</em>, <em>Cladosporium</em> e <em>Stachybotrys</em>) sono onnipresenti
                    nell'aria; trovano substrato e umidità sufficiente sulle pareti fredde e iniziano a proliferare,
                    causando macchie nere o verdi e odori sgradevoli.
                  </span>
                </li>
              </ul>
              <p>
                In sintesi: <strong>l'umidità crea condensa, la condensa crea muffa</strong>. Combattere la muffa senza
                agire sull'umidità e sulla condensa equivale a tagliare le foglie di una pianta infestante senza estirparne
                le radici.
              </p>

              {/* 3. Il punto di rugiada */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Il punto di rugiada: perché la condensa si forma sui vetri e negli angoli</h2>
              <p>
                Il concetto chiave per capire la condensa è il <strong>punto di rugiada</strong> (<em>dew point</em>):
                la temperatura alla quale l'aria deve essere raffreddata affinché il vapore acqueo in essa contenuto inizi
                a condensare. Più l'aria è umida, più alto è il punto di rugiada.
              </p>
              <p>
                Esempio pratico: se in casa hai 21°C con il 60% di umidità relativa, il punto di rugiada è circa 12°C.
                Questo significa che qualsiasi superficie con temperatura inferiore a 12°C — il bordo di un vecchio
                serramento, un angolo di una parete con scarsa coibentazione — diventerà un punto di accumulo di condensa.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Perché gli angoli sono i punti più a rischio?</h3>
                <p className="text-gray-700">
                  Gli angoli sono le zone strutturalmente più fredde delle stanze: la geometria tridimensionale fa sì che
                  in quel punto convergano tre superfici disperdenti (due pareti e un pavimento o soffitto). Il risultato è
                  una temperatura superficiale localmente molto più bassa rispetto al centro della parete, spesso al di
                  sotto del punto di rugiada. Senza un isolamento adeguato, la condensa — e poi la muffa — è quasi inevitabile.
                </p>
              </div>

              {/* 4. Le cause principali */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Le cause principali della condensa in casa</h2>
              <p>
                Prima di scegliere una soluzione, è fondamentale identificare correttamente le cause. Le principali sono
                tre, e spesso agiscono in combinazione:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 text-lg mb-2">1. Ponti termici</h4>
                  <p className="text-red-900">
                    Sono interruzioni dell'isolamento termico nell'involucro edilizio: angoli strutturali,
                    davanzali, travi, pilastri, giunzioni tra parete e solaio. In questi punti la temperatura
                    superficiale scende drasticamente, favorendo condensa e muffa.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-400">
                  <h4 className="font-bold text-orange-800 text-lg mb-2">2. Ventilazione insufficiente</h4>
                  <p className="text-orange-900">
                    Una casa troppo ermetica — o dove non si aerano mai i locali — accumula vapore acqueo prodotto
                    dalla respirazione, dalla cottura, dalle docce e dal bucato. Senza un ricambio d'aria adeguato,
                    l'umidità relativa sale oltre la soglia critica.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-400">
                  <h4 className="font-bold text-amber-800 text-lg mb-2">3. Infissi vecchi e poco isolanti</h4>
                  <p className="text-amber-900">
                    I serramenti datati — con vetro singolo, profili in legno o alluminio senza taglio termico —
                    costituiscono il punto più freddo dell'involucro. Il telaio e il vetro raggiungono temperature
                    superficiali bassissime, concentrando tutta la condensa dell'ambiente in quel punto.
                  </p>
                </div>
              </div>

              {/* 5. Infissi vecchi e ponti termici */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Infissi vecchi e ponti termici: il collegamento diretto con muffa e condensa</h2>
              <p>
                Un vecchio infisso con vetro singolo ha una <strong>trasmittanza termica (Uw)</strong> che può
                superare 5 W/m²K. In pratica, in una notte invernale a -2°C fuori e 20°C dentro, la temperatura
                superficiale del vetro scende a 2-4°C: molto al di sotto del punto di rugiada tipico di
                un'abitazione occupata. La condensa si forma in abbondanza, cola sul davanzale e, nel tempo,
                impregna il muro sotto al serramento, creando le condizioni per la muffa.
              </p>
              <p>
                Ma il problema non si limita al vetro. <strong>Il telaio degli infissi vecchi crea un ponte
                termico lineare</strong> lungo tutto il perimetro della finestra. In un appartamento con 10
                finestre, questo significa decine di metri di superficie fredda che ogni notte raccoglie
                condensa. I profili in alluminio senza taglio termico sono particolarmente critici: il metallo
                conduce il freddo esterno direttamente all'interno.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Come riconoscere un infisso che causa condensa</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /> Vetri appannati ogni mattina anche con finestre chiuse</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /> Gocce d'acqua sul davanzale interno o sul telaio</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /> Muffa o aloni scuri nell'angolo tra parete e finestra</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /> Intonaco che si gonfia o si sfoglia vicino al serramento</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /> Correnti d'aria fredda percepibili anche con la finestra chiusa</li>
                </ul>
              </div>

              {/* 6. Come gli infissi moderni risolvono il problema */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Come gli infissi moderni risolvono il problema</h2>
              <p>
                Un infisso ad alta efficienza energetica è progettato per mantenere la sua superficie interna
                calda — il che significa sopra il punto di rugiada — e per eliminare i ponti termici lineari
                lungo il perimetro. Le tecnologie che rendono questo possibile sono tre:
              </p>

              <div className="space-y-5 my-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Vetri bassoemissivi (low-E) e doppio/triplo vetro</h4>
                  <p className="text-gray-700">
                    Il vetro <strong>basso-emissivo</strong> è rivestito con uno strato microscopico di ossido
                    metallico che riflette il calore infrarosso verso l'interno. Abbinato a un'intercapedine
                    riempita di gas argon, porta la trasmittanza del solo vetro (Ug) a valori di 1,0–1,2 W/m²K
                    per il doppio vetro e sotto 0,7 W/m²K per il triplo vetro. La temperatura superficiale
                    interna del vetro rimane ben sopra il punto di rugiada anche nelle notti più fredde del
                    Friuli o del Veneto.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Warm-edge: il distanziatore caldo</h4>
                  <p className="text-gray-700">
                    Il <strong>distanziatore warm-edge</strong> è il profilo metallico (o in materiale composito)
                    che separa i due vetri sul bordo del vetrocamera. Nei vetri tradizionali era in alluminio
                    (pessimo isolante); nei serramenti moderni è in materiale a bassa conduttività. Questo
                    elimina il ponte termico sul bordo del vetro, che è proprio la zona dove si concentra
                    la condensa più fastidiosa (quella "a cornice" lungo il perimetro del vetro).
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Profili multicamera con taglio termico</h4>
                  <p className="text-gray-700">
                    I profili PVC moderni hanno <strong>5, 6 o 7 camere interne</strong> che interrompono il
                    flusso di calore. I profili in alluminio ad alte prestazioni integrano un inserto in
                    poliammide (il "taglio termico") che separa la parte esterna fredda da quella interna
                    calda. Entrambe le soluzioni portano la trasmittanza del telaio (Uf) sotto 1,3 W/m²K,
                    mantenendo il telaio interno caldo e asciutto.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3 text-green-800">Confronto trasmittanza: vecchio vs. nuovo infisso</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="p-3 text-left font-bold">Tipo di infisso</th>
                        <th className="p-3 text-left font-bold">Uw (W/m²K)</th>
                        <th className="p-3 text-left font-bold">Rischio condensa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-100">
                        <td className="p-3">Vecchio con vetro singolo</td>
                        <td className="p-3 font-bold text-red-600">4,5 – 5,5</td>
                        <td className="p-3 text-red-700">Molto alto</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="p-3">Doppio vetro anni '90 senza low-E</td>
                        <td className="p-3 font-bold text-orange-600">2,8 – 3,5</td>
                        <td className="p-3 text-orange-700">Alto</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="p-3">PVC moderno doppio vetro low-E</td>
                        <td className="p-3 font-bold text-yellow-600">1,3 – 1,6</td>
                        <td className="p-3 text-yellow-700">Basso</td>
                      </tr>
                      <tr>
                        <td className="p-3">PVC o alluminio triplo vetro</td>
                        <td className="p-3 font-bold text-green-600">0,8 – 1,1</td>
                        <td className="p-3 text-green-700">Molto basso</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7. Il ruolo del controtelaio coibentato */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Il ruolo del controtelaio coibentato e della posa certificata</h2>
              <p>
                Anche il miglior infisso del mondo, se posato male, genererà condensa e infiltrazioni. La
                <strong> posa certificata secondo la norma UNI EN ISO 10077 e il sistema a tre strati</strong>
                (tenuta all'aria, barriera al vapore, tenuta all'acqua) è fondamentale:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Controtelaio coibentato</strong>: avvolge il telaio dell'infisso eliminando il
                    ponte termico tra il serramento e la muratura circostante. È particolarmente importante
                    negli edifici anni '60-'80 dove la muratura è poco isolata.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Schiuma poliuretanica a bassa espansione</strong>: riempie i vuoti tra il telaio
                    e la muratura, eliminando le infiltrazioni d'aria che portano freddo e umidità.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Nastri interni ed esterni</strong>: il nastro interno (vapor-resistente) impedisce
                    al vapore dell'interno di raggiungere la muratura; quello esterno (diffusivo) permette
                    all'eventuale umidità di evaporare verso l'esterno.
                  </span>
                </li>
              </ul>
              <p>
                Una posa a regola d'arte richiede un installatore certificato e l'uso di materiali specifici.
                Il risparmio su una posa improvvisata si paga caro in pochi anni con infiltrazioni, condensa
                e danni strutturali alla muratura.
              </p>

              {/* 8. Cappotto termico */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cappotto termico: la soluzione per i ponti termici strutturali</h2>
              <p>
                Quando la condensa e la muffa non si limitano alle zone attorno alle finestre ma coinvolgono
                gli angoli delle stanze, il bordo dei soffitti o i punti di attacco dei solai, il problema
                è strutturale: ci sono <strong>ponti termici nell'involucro edilizio</strong> che nessuna
                sostituzione di infissi può eliminare da sola.
              </p>
              <p>
                Il <strong>cappotto termico esterno</strong> è la soluzione più efficace in questi casi:
                avvolgendo l'intero edificio con uno strato continuo di materiale isolante (EPS, lana di
                roccia, fibra di legno), si eliminano i ponti termici strutturali — angoli, davanzali,
                travi, pilastri — alzando la temperatura superficiale di tutte le pareti interne sopra
                il punto di rugiada.
              </p>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Cappotto + nuovi infissi: la combinazione vincente</h4>
                <p className="text-gray-700">
                  Intervenire solo sugli infissi senza cappotto lascia intatti i ponti termici strutturali
                  degli angoli. Intervenire solo con il cappotto senza sostituire gli infissi lascia i
                  serramenti come il punto più freddo dell'involucro. <strong>La soluzione definitiva
                  per eliminare condensa e muffa è la combinazione di cappotto termico + nuovi infissi ad
                  alta efficienza</strong>, coordinata in un progetto di riqualificazione energetica globale.
                </p>
              </div>

              {/* 9. VMC */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">VMC (Ventilazione Meccanica Controllata): quando è necessaria</h2>
              <p>
                In un edificio ben isolato e con infissi nuovi ad alta tenuta all'aria, nasce paradossalmente
                un nuovo rischio: la casa diventa talmente ermetica che il naturale ricambio d'aria — che
                avveniva attraverso le infiltrazioni degli infissi vecchi — si riduce drasticamente.
                Il vapore acqueo prodotto dalla vita quotidiana non riesce a uscire, e l'umidità relativa sale.
              </p>
              <p>
                La <strong>Ventilazione Meccanica Controllata (VMC)</strong> risolve questo problema in modo
                intelligente: espelle l'aria viziata e umida degli ambienti (bagni, cucina, camere da letto)
                e introduce aria fresca dall'esterno, facendola passare attraverso un <strong>recuperatore
                di calore</strong> che trasferisce il calore dell'aria espulsa all'aria entrante, senza
                sprecare energia.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Quando è indispensabile la VMC?</h4>
                  <ul className="text-blue-900 space-y-1">
                    <li>• Dopo la sostituzione integrale degli infissi con modelli ad alta tenuta</li>
                    <li>• Dopo un intervento di cappotto termico completo sull'edificio</li>
                    <li>• In appartamenti dove non è possibile aprire le finestre per aerare (rumore, inquinamento)</li>
                    <li>• In abitazioni con molti occupanti o con produzione elevata di vapore (piscine, lavanderie)</li>
                    <li>• Dove ci sono state ricorrenti problematiche di muffa nonostante interventi parziali</li>
                  </ul>
                </div>
              </div>

              <p>
                Un impianto VMC a recupero di calore con efficienza del 90% recupera quasi tutta l'energia
                termica dell'aria espulsa. Questo significa un ricambio d'aria continuativo e salubre
                <strong> senza alcun aumento della bolletta</strong> rispetto a una ventilazione naturale
                inefficace. Il comfort percepito migliora drasticamente: aria sempre fresca, umidità stabile
                tra il 45% e il 55%, nessuna muffa.
              </p>

              {/* 10. Soluzioni fai-da-te */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Soluzioni fai-da-te: cosa funziona e cosa no</h2>
              <p>
                Prima di investire in un intervento strutturale, molte famiglie provano soluzioni di
                emergenza. Vediamo onestamente cosa funziona e cosa no.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-50 rounded-xl p-5">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Cosa NON risolve il problema
                  </h4>
                  <ul className="text-red-900 space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Pitture antimuffa</strong>: rallentano la crescita delle spore ma non eliminano le cause. La muffa ritornerà entro 6-12 mesi se l'umidità è ancora presente.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Candeggina o detergenti antifungini</strong>: trattamenti superficiali temporanei. Rimuovono le macchie visibili ma non le spore radicate nella parete.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Pannelli isolanti interni autoadesivi</strong>: rischiano di spostare il punto di condensa in profondità nella parete, peggiorando il danno strutturale.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Cosa può aiutare nel breve termine
                  </h4>
                  <ul className="text-green-900 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Deumidificatore portatile</strong>: riduce l'umidità relativa dell'aria e limita la formazione di condensa. È una misura palliativa utile nell'attesa di un intervento strutturale.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Aerazione quotidiana</strong>: aprire le finestre 5-10 minuti al mattino e alla sera per ricambiare l'aria è il rimedio più economico ed efficace a breve termine.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Evitare di asciugare il bucato in casa</strong>: ogni kg di bucato asciutto rilascia circa 0,5 litri di vapore nell'aria. Usare l'asciugatrice o asciugare sul balcone fa grande differenza.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                La conclusione è chiara: le soluzioni fai-da-te sono utili per gestire l'emergenza, ma
                <strong> non eliminano il problema alla radice</strong>. Solo un intervento strutturale
                sull'involucro edilizio risolve definitivamente la questione.
              </p>

              {/* 11. Quanto costa */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quanto costa risolvere definitivamente il problema</h2>
              <p>
                Il costo varia molto in base alla gravità del problema, alla dimensione dell'abitazione e
                alle soluzioni scelte. Ecco una panoramica orientativa per un appartamento di 80-100 m²
                in Friuli o Veneto:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Intervento</th>
                      <th className="p-4 text-left font-bold">Costo indicativo</th>
                      <th className="p-4 text-left font-bold">Efficacia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Sostituzione 6 finestre PVC doppio vetro low-E</td>
                      <td className="p-4">€ 3.000 – 5.000</td>
                      <td className="p-4 text-green-700 font-medium">Alta sui vetri</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Sostituzione 6 finestre PVC triplo vetro</td>
                      <td className="p-4">€ 5.000 – 8.000</td>
                      <td className="p-4 text-green-700 font-medium">Molto alta sui vetri</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Cappotto termico (facciata 150 m²)</td>
                      <td className="p-4">€ 15.000 – 22.000</td>
                      <td className="p-4 text-green-700 font-medium">Alta sui ponti termici</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">VMC a recupero di calore (appartamento 80 m²)</td>
                      <td className="p-4">€ 3.500 – 6.000</td>
                      <td className="p-4 text-green-700 font-medium">Alta sull'umidità</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Pacchetto completo (infissi + cappotto + VMC)</td>
                      <td className="p-4 font-bold">€ 22.000 – 35.000</td>
                      <td className="p-4 text-green-700 font-bold">Definitiva</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                A prima vista può sembrare una cifra importante, ma considerando le detrazioni fiscali
                disponibili nel 2026 e i risparmi energetici, il ritorno sull'investimento è molto più
                rapido di quanto si immagini.
              </p>

              {/* 12. Detrazione fiscale 50% */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Detrazione fiscale del 50% per infissi e cappotto nel 2026</h2>
              <p>
                Nel 2026 il <strong>Bonus Infissi</strong> e l'<strong>Ecobonus Cappotto</strong> consentono
                di detrarre il <strong>50% della spesa dall'IRPEF</strong> in 10 anni, per gli interventi
                di riqualificazione energetica su unità immobiliari residenziali esistenti.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 my-6">
                <h4 className="font-bold text-amber-800 mb-3">Requisiti principali per accedere alla detrazione 50%</h4>
                <ul className="text-amber-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Infissi con <strong>trasmittanza Uw ≤ 1,4 W/m²K</strong> (zona E, come Friuli e gran parte del Veneto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Per il cappotto: <strong>miglioramento di almeno 2 classi energetiche</strong> e asseverazione di un tecnico abilitato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Pagamento tramite <strong>bonifico parlante</strong> con causale dedicata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Trasmissione dati all'<strong>ENEA</strong> entro 90 giorni dalla fine dei lavori</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>L'immobile deve essere <strong>già esistente e accatastato</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Esempio di risparmio con detrazioni</h4>
                <p className="text-gray-700">
                  Investimento totale (infissi + VMC): <strong>€ 10.000</strong><br />
                  Detrazione 50% in 10 anni: <strong>€ 5.000</strong><br />
                  Spesa netta effettiva: <strong>€ 5.000</strong><br />
                  Risparmio bolletta stimato: <strong>€ 400/anno</strong><br />
                  <strong className="text-lg mt-2 block">Tempo di ritorno sull'investimento netto: circa 12 anni</strong>
                </p>
              </div>

              {/* 13. Case study */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Case study: appartamento con muffa a Trieste risolto con infissi + VMC</h2>
              <p>
                Uno dei casi più emblematici seguiti da Renova Solution nel 2025 riguarda un appartamento
                al secondo piano di un condominio anni '70 nel quartiere di Roiano, a Trieste. La famiglia
                conviveva da anni con un problema grave: <strong>macchie di muffa nera diffuse in tutti gli
                angoli delle camere da letto</strong>, condensa abbondante sui vetri ogni mattina e un'aria
                che d'inverno sembrava sempre umida e pesante.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Diagnosi iniziale</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Infissi</strong>: alluminio anni '80 con vetro singolo, Uw stimato 5,2 W/m²K</li>
                  <li>• <strong>Struttura</strong>: pareti in laterizio senza isolamento, ponti termici agli angoli</li>
                  <li>• <strong>Umidità relativa misurata</strong>: 72-78% nelle camere da letto di mattina</li>
                  <li>• <strong>Temperatura superficiale angoli</strong>: 7-9°C (punto di rugiada dell'aria: 15°C)</li>
                  <li>• <strong>Ventilazione</strong>: nulla — doppi vetri nuovi installati 3 anni prima senza VMC</li>
                </ul>
              </div>

              <p>
                La diagnosi termografica con termocamera ha rivelato che l'intervento precedente di
                sostituzione parziale delle finestre (solo in soggiorno) aveva in parte migliorato la
                situazione sul serramento, ma aveva peggiorato quella sulle pareti: l'appartamento,
                diventato più ermetico in soggiorno, accumulava ancora più vapore nelle camere con le
                finestre vecchie.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Soluzione adottata</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sostituzione di tutte le restanti finestre con <strong>PVC 5 camere + doppio vetro low-E con warm-edge</strong> (Uw 1,3 W/m²K)</li>
                  <li>• Installazione di <strong>controtelai coibentati</strong> su tutti i serramenti</li>
                  <li>• Installazione di un impianto <strong>VMC decentralizzata</strong> con recuperatori ad alta efficienza (92%) nelle camere da letto e nel soggiorno</li>
                  <li>• Trattamento risanante delle pareti con intonaco deumidificante nelle zone già danneggiate dalla muffa</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-3">Risultati dopo 3 mesi</h4>
                <ul className="space-y-2 text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Umidità relativa stabile al <strong>48-55%</strong> in tutti i locali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Zero condensa</strong> sui vetri anche nelle notti più fredde (gennaio, -3°C fuori)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Temperatura superficiale degli angoli risalita a <strong>15-17°C</strong> grazie ai nuovi infissi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Nessuna recidiva di muffa</strong> nelle zone trattate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Riduzione della bolletta del riscaldamento stimata dal cliente: <strong>-28%</strong></span>
                  </li>
                </ul>
              </div>

              <p>
                Il costo totale dell'intervento è stato di circa <strong>€ 9.200</strong>, di cui
                <strong> € 4.600 recuperati con la detrazione fiscale del 50%</strong>. La famiglia ha
                definitivamente risolto un problema che durava da oltre 10 anni.
              </p>

              {/* 14. Conclusioni e CTA */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni: l'approccio definitivo a umidità, condensa e muffa</h2>
              <p>
                Umidità, condensa e muffa non sono problemi estetici o secondari: indicano che l'involucro
                edilizio non funziona correttamente e che l'aria di casa può avere un impatto negativo sulla
                salute, specialmente per bambini, anziani e persone con allergie o problemi respiratori.
              </p>
              <p>
                La buona notizia è che <strong>esiste una soluzione definitiva</strong>: un approccio
                integrato che combina infissi ad alta efficienza energetica, posa certificata con controtelaio
                coibentato, eventuale cappotto termico e — quando necessario — un impianto di ventilazione
                meccanica controllata. Non è necessario fare tutto in una volta: un professionista esperto
                saprà individuare gli interventi prioritari e pianificare il resto nel tempo.
              </p>
              <p>
                <strong>Renova Solution</strong> opera in Friuli Venezia Giulia e Veneto con un team
                specializzato in infissi, cappotto termico e sistemi di ventilazione. Eseguiamo una
                <strong> diagnosi termografica gratuita</strong> per identificare esattamente dove si
                formano ponti termici e condensa nella tua abitazione, e ti proponiamo una soluzione
                su misura che ottimizza il risultato e massimizza le detrazioni fiscali del 50% disponibili
                nel 2026.
              </p>

              <div className="bg-[#C8E600] rounded-xl p-6 my-8 text-center">
                <h3 className="font-bold text-xl text-black mb-2">Hai problemi di muffa o condensa?</h3>
                <p className="text-black/80 mb-4">
                  Richiedi una consulenza gratuita: analizziamo la situazione della tua casa e ti offriamo
                  una soluzione definitiva con preventivo trasparente.
                </p>
                <Link
                  to="/contatti"
                  className="inline-block bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Richiedi consulenza gratuita
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['condensa finestre', 'muffa casa', 'umidità pareti', 'infissi moderni', 'ponte termico', 'VMC', 'cappotto termico', '2026'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articoli correlati</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link to="/blog/infissi-risparmio-energetico-2026" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-36 bg-gray-200 overflow-hidden">
                  <img
                    src="/images/confronto-finestre.jpg"
                    alt="Infissi e risparmio energetico 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#C8E600] bg-[#C8E600]/10 px-2 py-0.5 rounded-full">Infissi</span>
                  <h3 className="font-bold text-gray-900 mt-2 text-sm leading-snug group-hover:text-[#C8E600] transition-colors">
                    Infissi e risparmio energetico 2026: guida completa
                  </h3>
                </div>
              </Link>

              <Link to="/blog/cappotto-termico-risparmio-2026" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-36 bg-gray-200 overflow-hidden">
                  <img
                    src="/images/cappotto.jpg"
                    alt="Cappotto termico risparmio 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#C8E600] bg-[#C8E600]/10 px-2 py-0.5 rounded-full">Ristrutturazione</span>
                  <h3 className="font-bold text-gray-900 mt-2 text-sm leading-snug group-hover:text-[#C8E600] transition-colors">
                    Cappotto termico 2026: quanto si risparmia in bolletta?
                  </h3>
                </div>
              </Link>

              <Link to="/blog/finestre-pvc-alluminio-legno-2026" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-36 bg-gray-200 overflow-hidden">
                  <img
                    src="/images/confronto-finestre.jpg"
                    alt="Finestre PVC alluminio legno 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#C8E600] bg-[#C8E600]/10 px-2 py-0.5 rounded-full">Infissi</span>
                  <h3 className="font-bold text-gray-900 mt-2 text-sm leading-snug group-hover:text-[#C8E600] transition-colors">
                    Finestre PVC, alluminio o legno: guida alla scelta 2026
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
