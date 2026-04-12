import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, XCircle, Battery, Zap, TrendingUp } from 'lucide-react';

export default function FotovoltaicoAccumulo2026() {
  const articleData = {
    title: 'Fotovoltaico con accumulo 2026: conviene davvero? Analisi costi-benefici aggiornata',
    excerpt: 'Analisi approfondita delle batterie di accumulo per impianti fotovoltaici nel 2026. Quanto si risparmia, tempi di ripiego dell\'investimento, migliori batterie sul mercato e consigli pratici.',
    date: '10 Marzo 2026',
    dateISO: '2026-03-10',
    readTime: '10 min',
    author: 'Marco Bianchi',
    category: 'Fotovoltaico',
    image: '/images/batteria-accumulo.jpg',
    slug: 'fotovoltaico-accumulo-2026'
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
    keywords: 'fotovoltaico accumulo 2026, batterie fotovoltaico, accumulo energia, costi batterie, risparmio fotovoltaico',
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
        keywords="fotovoltaico accumulo 2026, batterie fotovoltaico, accumulo energia, costi batterie fotovoltaico, risparmio energetico, fotovoltaico casa"
        ogType="article"
        canonical={`https://renovasolution.it/blog/${articleData.slug}`}
      />
      
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogPostSchema(articleData.title, articleData.excerpt, `https://renovasolution.it/blog/${articleData.slug}`, `https://renovasolution.it${articleData.image}`, articleData.dateISO, articleData.author))}</script>

      <div className="min-h-screen bg-white">
        <Navbar />
        
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

        <article className="py-12 md:py-16 bg-white" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={articleData.title} />
          <meta itemProp="datePublished" content={articleData.dateISO} />
          <meta itemProp="author" content={articleData.author} />
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C8E600] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Torna al blog
            </Link>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Il <strong>fotovoltaico con accumulo</strong> è una delle soluzioni più richieste nel 2026 per chi vuole 
                massimizzare l'autoconsumo e ridurre la dipendenza dalla rete elettrica. Ma conviene davvero l'investimento? 
                Scopriamolo insieme con un'analisi dettagliata di costi, benefici e tempi di ripiego.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Come funziona l'accumulo fotovoltaico</h2>
              <p>
                Un sistema di <strong>accumulo fotovoltaico</strong> consiste in una batteria che immagazzina l'energia 
                prodotta dai pannelli solari durante il giorno, permettendoti di utilizzarla quando ne hai bisogno, 
                anche di sera o di notte.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Battery className="w-5 h-5 text-[#C8E600]" /> Vantaggi dell'accumulo
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Autoconsumo fino al 70-80%</strong> contro il 30-40% senza accumulo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Indipendenza energetica</strong> dalla rete elettrica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Riduzione bolletta</strong> fino al 90%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Backup</strong> in caso di blackout (con funzione UPS)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Costi delle batterie fotovoltaico 2026</h2>
              <p>
                I <strong>costi delle batterie</strong> per fotovoltaico sono diminuiti significativamente negli ultimi anni. 
                Ecco i prezzi aggiornati per il 2026:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="bg-white border-2 border-gray-100 rounded-xl p-5 text-center hover:border-[#C8E600] transition-colors">
                  <span className="text-3xl font-bold text-[#C8E600]">5 kWh</span>
                  <p className="text-gray-600 mt-2">Ideale per coppie</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">€ 3.500 - 4.500</p>
                </div>
                <div className="bg-white border-2 border-[#C8E600] rounded-xl p-5 text-center relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8E600] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Più richiesto
                  </span>
                  <span className="text-3xl font-bold text-[#C8E600]">10 kWh</span>
                  <p className="text-gray-600 mt-2">Famiglia media</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">€ 6.000 - 8.000</p>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-5 text-center hover:border-[#C8E600] transition-colors">
                  <span className="text-3xl font-bold text-[#C8E600]">15 kWh</span>
                  <p className="text-gray-600 mt-2">Grandi famiglie</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">€ 9.000 - 12.000</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quanto si risparmia con l'accumulo?</h2>
              <p>
                I <strong>risparmi con l'accumulo fotovoltaico</strong> dipendono da diversi fattori: dimensione dell'impianto, 
                capacità della batteria, consumi domestici e abitudini di utilizzo. Ecco una stima realistica:
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                  <TrendingUp className="w-5 h-5" /> Risparmio annuo stimato
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-green-200">
                    <span className="text-green-800">Impianto 3 kWp + batteria 5 kWh</span>
                    <span className="font-bold text-green-700">€ 800 - 1.000/anno</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-green-200">
                    <span className="text-green-800">Impianto 6 kWp + batteria 10 kWh</span>
                    <span className="font-bold text-green-700">€ 1.500 - 1.800/anno</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Impianto 10 kWp + batteria 15 kWh</span>
                    <span className="font-bold text-green-700">€ 2.200 - 2.800/anno</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tempo di ripiego dell'investimento</h2>
              <p>
                Considerando i costi attuali e i risparmi in bolletta, il <strong>tempo di ripiego</strong> di una batteria 
                per fotovoltaico si aggira tra i 6 e i 9 anni. Ecco il calcolo per un impianto medio:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4">Esempio: impianto 6 kWp + batteria 10 kWh</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Costo impianto fotovoltaico: <strong>€ 8.000</strong></li>
                  <li>• Costo batteria 10 kWh: <strong>€ 7.000</strong></li>
                  <li>• <strong>Totale investimento: € 15.000</strong></li>
                  <li>• Detrazione fiscale 50%: <strong>€ 7.500</strong></li>
                  <li>• Spesa netta effettiva: <strong>€ 7.500</strong></li>
                  <li>• Risparmio annuo stimato: <strong>€ 1.600</strong></li>
                  <li className="pt-2 border-t mt-2"><strong>Tempo di ripiego: ~4,7 anni</strong></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Migliori batterie fotovoltaico 2026</h2>
              <p>
                Sul mercato italiano del 2026 le <strong>migliori batterie per fotovoltaico</strong> sono:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#C8E600]" /> Tesla Powerwall 3
                  </h4>
                  <p className="text-gray-600 mt-2">Capacità: 13,5 kWh | Garanzia: 10 anni | Prezzo: ~€ 9.000</p>
                  <p className="text-sm text-gray-500 mt-1">La batteria più famosa, integrazione perfetta con impianti Tesla</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#C8E600]" /> BYD Battery-Box Premium
                  </h4>
                  <p className="text-gray-600 mt-2">Capacità: 5,1 - 40,96 kWh modulari | Garanzia: 10 anni | Prezzo: da € 3.500</p>
                  <p className="text-sm text-gray-500 mt-1">Flessibilità dimensionale, ottimo rapporto qualità-prezzo</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#C8E600]" /> LG Chem RESU
                  </h4>
                  <p className="text-gray-600 mt-2">Capacità: 6,5 - 16 kWh | Garanzia: 10 anni | Prezzo: da € 4.500</p>
                  <p className="text-sm text-gray-500 mt-1">Affidabilità comprovata, compatibile con molti inverter</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quando NON conviene l'accumulo</h2>
              <p>
                L'accumulo non è sempre la scelta migliore. Ecco alcuni casi in cui potrebbe non convenire:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Consumi prevalentemente <strong>diurni</strong> (es. lavoro da casa, pompa di calore accesa di giorno)</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Impianti fotovoltaici <strong>piccoli</strong> (meno di 3 kWp) con produzione insufficiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Budget <strong>limitato</strong> e impossibilità di accedere alla detrazione 50%</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                Nel <strong>2026 il fotovoltaico con accumulo conviene</strong> nella maggior parte dei casi, specialmente 
                per famiglie con consumi serali e notturni significativi. Con la detrazione fiscale del 50% e i prezzi 
                delle batterie in calo, il tempo di ripiego si è ridotto notevolmente.
              </p>
              <p>
                La chiave è dimensionare correttamente sia l'impianto fotovoltaico che la batteria in base ai tuoi consumi 
                reali. <strong>Renova Solution</strong> ti offre una consulenza gratuita per trovare la soluzione più adatta 
                alle tue esigenze. Richiedi un preventivo personalizzato!
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['fotovoltaico', 'accumulo energia', 'batterie', 'risparmio energetico', 'autoconsumo', '2026'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Tag className="w-3 h-3" /> {tag}
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
