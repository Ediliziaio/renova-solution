import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, AlertCircle, Euro, FileText } from 'lucide-react';

export default function DetrazioniFiscali2026() {
  const articleData = {
    title: 'Detrazioni fiscali 2026: guida completa a Ecobonus e detrazioni ristrutturazioni',
    excerpt: 'Guida completa alle detrazioni fiscali per il 2026: scopri come usufruire del 50% per ristrutturazioni e efficientamento energetico. Tutte le novità e i requisiti aggiornati.',
    date: '15 Marzo 2026',
    dateISO: '2026-03-15',
    readTime: '8 min',
    author: 'Renova Team',
    category: 'Fisco',
    image: '/images/team.jpg',
    slug: 'detrazioni-fiscali-2026'
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
    keywords: 'detrazioni fiscali 2026, Ecobonus, detrazione ristrutturazioni, detrazione fotovoltaico, agevolazioni fiscali casa',
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
        keywords="detrazioni fiscali 2026, Ecobonus 2026, detrazione 50% ristrutturazioni, detrazione 50% fotovoltaico, agevolazioni fiscali casa, bonus edilizia"
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
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Le <strong>detrazioni fiscali 2026</strong> rappresentano un'opportunità imperdibile per chi vuole ristrutturare casa 
                o installare impianti fotovoltaici. In questa guida completa ti spieghiamo tutte le agevolazioni disponibili, 
                i requisiti necessari e come massimizzare il risparmio fiscale.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Detrazione ristrutturazioni: il 50% di risparmio</h2>
              <p>
                La <strong>detrazione del 50% per ristrutturazioni</strong> (ex bonus ristrutturazioni) è una delle agevolazioni 
                più richieste dagli italiani. Ecco cosa devi sapere:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Aliquota:</strong> 50% della spesa sostenuta</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Spesa massima detraibile:</strong> € 96.000 per unità immobiliare</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ripartizione:</strong> in 10 anni in quote annuali di pari importo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Interventi ammessi:</strong> manutenzione ordinaria e straordinaria, restauro, risanamento conservativo</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ecobonus 2026: efficientamento energetico al 50%</h2>
              <p>
                L'<strong>Ecobonus 2026</strong> offre detrazioni più elevate per interventi che migliorano l'efficienza energetica 
                degli edifici. Le aliquote variano in base al tipo di intervento:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-[#C8E600]" /> Aliquote Ecobonus 2026
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">50%</span>
                    <p className="text-sm text-gray-600 mt-1">Isolamento termico involucro (cappotto)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">50%</span>
                    <p className="text-sm text-gray-600 mt-1">Sostituzione infissi, caldaie, pannelli solari</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">50%</span>
                    <p className="text-sm text-gray-600 mt-1">Impianti fotovoltaici con accumulo</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-3xl font-bold text-[#C8E600]">50%</span>
                    <p className="text-sm text-gray-600 mt-1">Altre opere di riqualificazione energetica</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Detrazione fotovoltaico 2026: il 50% per energia pulita</h2>
              <p>
                L'installazione di <strong>impianti fotovoltaici</strong> beneficia della detrazione del 50% come intervento 
                di riqualificazione energetica. Ecco i dettagli:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Detrazione del <strong>50%</strong> sul costo totale dell'impianto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Include anche le <strong>batterie di accumulo</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Spesa massima: <strong>€ 60.000</strong> per abitazioni unifamiliari</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Ripartizione in <strong>10 anni</strong></span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Requisiti per accedere alle detrazioni 2026</h2>
              <p>Per beneficiare delle detrazioni fiscali è necessario rispettare alcuni requisiti fondamentali:</p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5" /> Requisiti obbligatori
                </h4>
                <ul className="text-amber-800 space-y-2">
                  <li>• Pagamento tramite <strong>bonifico bancario o postale " parlante"</strong></li>
                  <li>• Indicazione del <strong>Codice Fiscale</strong> del beneficiario</li>
                  <li>• Indicazione della <strong>causale del versamento</strong></li>
                  <li>• <strong>Asseverazione</strong> di un tecnico abilitato (per Ecobonus)</li>
                  <li>• <strong>Certificazione energetica</strong> prima e dopo l'intervento</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Detrazione in 10 anni: come funziona</h2>
              <p>
                Le detrazioni fiscali per ristrutturazioni ed efficientamento energetico si ottengono 
                <strong>riducendo le tasse in 10 anni</strong>. Ecco come funziona:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>La detrazione viene <strong>ripartita in 10 quote annuali</strong> di pari importo</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Ogni anno puoi detrarre la quota dal <strong>reddito complessivo</strong> nella dichiarazione dei redditi</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>La detrazione spetta anche se non hai imposte da pagare (si recupera negli anni successivi)</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 text-sm">
                  <strong>Nota:</strong> Dal 2025 la cessione del credito e lo sconto in fattura non sono più disponibili 
                  per la maggior parte degli interventi. L'unica opzione è la detrazione diretta in 10 anni.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                Le <strong>detrazioni fiscali 2026</strong> offrono opportunità significative per chi vuole migliorare la propria casa 
                riducendo l'impatto fiscale. Che si tratti di una semplice ristrutturazione o dell'installazione di un impianto 
                fotovoltaico, è fondamentale rispettare tutti i requisiti e affidarsi a professionisti qualificati.
              </p>
              <p>
                <strong>Renova Solution</strong> ti accompagna in tutto il percorso: dalla progettazione alla realizzazione, 
                fino alla gestione delle pratiche per le detrazioni fiscali. Contattaci per una consulenza gratuita!
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['detrazioni fiscali', 'Ecobonus 2026', 'fotovoltaico', 'ristrutturazioni', 'agevolazioni fiscali'].map(tag => (
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
