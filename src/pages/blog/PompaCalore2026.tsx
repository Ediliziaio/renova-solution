import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, Thermometer, Euro } from 'lucide-react';

export default function PompaCalore2026() {
  const articleData = {
    title: 'Pompa di calore vs caldaia a gas 2026: quale scegliere? Guida completa',
    excerpt: 'Confronto dettagliato tra pompe di calore e caldaie a gas nel 2026: costi di installazione, consumi, manutenzione, risparmio energetico e impatto ambientale. Guida definitiva alla scelta.',
    date: '5 Marzo 2026',
    dateISO: '2026-03-05',
    readTime: '9 min',
    author: 'Renova Team',
    category: 'Riscaldamento',
    image: '/images/climatizzazione.jpg',
    slug: 'pompa-calore-vs-caldaia-2026'
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
    keywords: 'pompa di calore 2026, caldaia a gas, riscaldamento casa, confronto riscaldamento, risparmio energetico',
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
        keywords="pompa di calore 2026, caldaia a gas, riscaldamento casa, confronto riscaldamento, risparmio energetico, condizionamento, impianto riscaldamento"
        ogType="article"
        canonical={`https://renovasolution.it/blog/${articleData.slug}`}
      />
      
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      
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
                La scelta tra <strong>pompa di calore</strong> e <strong>caldaia a gas</strong> è una delle decisioni più importanti 
                per chi deve installare o sostituire un impianto di riscaldamento. Nel 2026, con l'evoluzione delle tecnologie 
                e l'incremento dei costi dell'energia, questa scelta diventa ancora più strategica. Scopriamo insieme quale 
                soluzione è più adatta alle tue esigenze.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Come funziona la pompa di calore</h2>
              <p>
                La <strong>pompa di calore</strong> è un sistema che estrae calore dall'ambiente esterno (aria, acqua o terra) 
                e lo trasferisce all'interno della casa. A differenza delle caldaie tradizionali, non genera calore bruciando 
                combustibile, ma lo "pompa" da una fonte a un'altra.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                  <Thermometer className="w-5 h-5" /> Vantaggi pompa di calore
                </h3>
                <ul className="space-y-3 text-blue-900">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Risparmio energetico:</strong> fino al 70% rispetto alla caldaia a gas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Riscaldamento e raffrescamento</strong> con un unico impianto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Zero emissioni</strong> in loco (se abbinata a energia rinnovabile)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <span><strong>Detrazione 50%</strong> come intervento di efficientamento energetico</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Confronto costi: pompa di calore vs caldaia a gas</h2>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Caratteristica</th>
                      <th className="p-4 text-left font-bold text-[#C8E600]">Pompa di calore</th>
                      <th className="p-4 text-left font-bold">Caldaia a gas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Costo installazione</td>
                      <td className="p-4">€ 8.000 - 15.000</td>
                      <td className="p-4">€ 2.500 - 5.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Detrazione fiscale</td>
                      <td className="p-4 text-[#C8E600] font-bold">50%</td>
                      <td className="p-4">50% (solo sostituzione caldaia)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Costo annuo energia*</td>
                      <td className="p-4 text-[#C8E600] font-bold">€ 600 - 900</td>
                      <td className="p-4">€ 1.500 - 2.200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Manutenzione annuale</td>
                      <td className="p-4">€ 150 - 250</td>
                      <td className="p-4">€ 150 - 200</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Durata vita utile</td>
                      <td className="p-4">15 - 20 anni</td>
                      <td className="p-4">12 - 15 anni</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-2">*Per un appartamento di 100 m² in zona climatica E</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Efficienza: il COP della pompa di calore</h2>
              <p>
                L'efficienza di una pompa di calore si misura con il <strong>Coefficiente di Performance (COP)</strong>: 
                indica quanti kW di calore vengono prodotti con 1 kW di energia elettrica consumata. Un COP di 4 significa 
                che per ogni kW elettrico ottieni 4 kW termici.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4">COP medio per tecnologia</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-40 text-sm">Pompa aria-acqua</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div className="bg-[#C8E600] h-4 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="font-bold w-16 text-right">COP 3.0-4.0</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-40 text-sm">Pompa geotermica</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div className="bg-[#C8E600] h-4 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="font-bold w-16 text-right">COP 4.0-5.0</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-40 text-sm">Caldaia a condensazione</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div className="bg-gray-400 h-4 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    <span className="font-bold w-16 text-right">COP 1.1</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quando scegliere la pompa di calore</h2>
              <p>La pompa di calore è la scelta ideale quando:</p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Vuoi <strong>risparmiare</strong> a lungo termine sulle bollette</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Hai bisogno sia di <strong>riscaldamento che raffrescamento</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Vivi in una <strong>zona climatica mite</strong> (Nord-Est Italia ideale)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Hai un <strong>impianto fotovoltaico</strong> o pianifichi di installarlo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span>Vuoi ridurre l'<strong>impatto ambientale</strong></span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quando scegliere la caldaia a gas</h2>
              <p>La caldaia a gas rimane la scelta migliore quando:</p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Hai un <strong>budget limitato</strong> per l'installazione</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Vivi in una zona con <strong>inverni molto rigidi</strong> e non hai isolamento adeguato</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>La tua abitazione ha un <strong>impianto radiante datato</strong> (alte temperature)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Non hai spazio per l'unità esterna della pompa di calore</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Risparmio annuo: il calcolo reale</h2>
              <p>
                Ecco una stima del <strong>risparmio annuo</strong> passando da una caldaia a gas a una pompa di calore, 
                per un appartamento di 100 m² in zona climatica E (Friuli-Venezia Giulia):
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5" /> Confronto spese annuali
                </h4>
                <div className="space-y-4">
                  <div className="pb-3 border-b border-green-200">
                    <p className="text-green-800 font-medium">Caldaia a gas condensazione</p>
                    <p className="text-2xl font-bold text-green-700">€ 1.800/anno</p>
                    <p className="text-sm text-green-600">Gas + manutenzione + elettricità</p>
                  </div>
                  <div>
                    <p className="text-green-800 font-medium">Pompa di calore aria-acqua</p>
                    <p className="text-2xl font-bold text-green-700">€ 750/anno</p>
                    <p className="text-sm text-green-600">Solo elettricità + manutenzione</p>
                  </div>
                  <div className="pt-3 border-t border-green-300 bg-green-100 -mx-6 -mb-6 px-6 py-4 rounded-b-xl">
                    <p className="text-green-800 font-bold text-lg">Risparmio annuo: € 1.050</p>
                    <p className="text-green-700">Tempo di ripiego: 5-7 anni</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                Nel <strong>2026 la pompa di calore è la scelta più conveniente</strong> per la maggior parte delle famiglie, 
                specialmente in Friuli Venezia Giulia e Veneto dove il clima è ideale per questo tipo di tecnologia. 
                Con la detrazione del 50% e i risparmi in bolletta, l'investimento si ripaga in 6-8 anni.
              </p>
              <p>
                La caldaia a gas rimane un'opzione valida per chi ha budget limitati o vive in edifici con scarso isolamento. 
                In ogni caso, <strong>Renova Solution</strong> ti aiuta a valutare la soluzione migliore per la tua casa 
                con una consulenza tecnica gratuita.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['pompa di calore', 'caldaia a gas', 'riscaldamento', 'risparmio energetico', 'condizionamento', '2026'].map(tag => (
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
