import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, XCircle, Thermometer, Euro } from 'lucide-react';

export default function FinestreMateriali2026() {
  const articleData = {
    title: 'Finestre PVC, alluminio o legno 2026: guida definitiva alla scelta',
    excerpt: 'Confronto completo tra PVC, alluminio e legno per infissi nel 2026: pro e contro, costi, isolamento termico, manutenzione e durata. Quale materiale scegliere per la tua casa.',
    date: '28 Febbraio 2026',
    dateISO: '2026-02-28',
    readTime: '11 min',
    author: 'Laura Rossi',
    category: 'Infissi',
    image: '/images/confronto-finestre.jpg',
    slug: 'finestre-pvc-alluminio-legno-2026'
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
    keywords: 'finestre PVC 2026, finestre alluminio, finestre legno, infissi casa, confronto materiali finestre',
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
        keywords="finestre PVC 2026, finestre alluminio, finestre legno, infissi casa, confronto materiali finestre, isolamento termico finestre, serramenti"
        ogType="article"
        canonical={`https://www.renovasolution.it/blog/${articleData.slug}`}
      />
      
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogPostSchema(articleData.title, articleData.excerpt, `https://www.renovasolution.it/blog/${articleData.slug}`, `https://www.renovasolution.it${articleData.image}`, articleData.dateISO, articleData.author))}</script>

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
                La scelta dei <strong>materiali per le finestre</strong> è fondamentale per il comfort, l'efficienza energetica 
                e l'estetica della tua casa. <strong>PVC, alluminio o legno</strong>: ogni materiale ha vantaggi e svantaggi. 
                In questa guida del 2026 analizziamo tutti gli aspetti per aiutarti a fare la scelta giusta.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Finestre in PVC: il best seller del 2026</h2>
              <p>
                Il <strong>PVC (cloruro di polivinile)</strong> è il materiale più venduto per gli infissi in Italia. 
                Le sue caratteristiche lo rendono ideale per la maggior parte delle abitazioni.
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5 text-[#C8E600]" /> Vantaggi PVC
                </h3>
                <ul className="space-y-2 text-green-900">
                  <li>• <strong>Ottimo isolamento termico</strong> (coefficiente Uw basso)</li>
                  <li>• <strong>Prezzo competitivo</strong>: il più economico tra i tre materiali</li>
                  <li>• <strong>Manutenzione praticamente nulla</strong></li>
                  <li>• <strong>Resistenza all'umidità</strong> e agenti atmosferici</li>
                  <li>• <strong>Isolamento acustico</strong> eccellente</li>
                  <li>• Ampia gamma di <strong>colori e finiture</strong></li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-800">
                  <XCircle className="w-5 h-5 text-red-500" /> Svantaggi PVC
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li>• <strong>Estetica meno elegante</strong> rispetto al legno</li>
                  <li>• <strong>Dilatazione termica</strong> maggiore</li>
                  <li>• <strong>Riciclabilità limitata</strong> (impatto ambientale)</li>
                  <li>• Profili più <strong>ingombranti</strong></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Finestre in alluminio: resistenza e design</h2>
              <p>
                L'<strong>alluminio</strong> è sinonimo di resistenza, durata e design moderno. Ideale per chi cerca 
                finestre sottili, leggere e di grande impatto estetico.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                  <CheckCircle className="w-5 h-5 text-[#C8E600]" /> Vantaggi alluminio
                </h3>
                <ul className="space-y-2 text-blue-900">
                  <li>• <strong>Durata eccezionale</strong>: oltre 50 anni</li>
                  <li>• <strong>Profili sottili</strong> e leggerezza</li>
                  <li>• <strong>Design moderno</strong> ed elegante</li>
                  <li>• <strong>100% riciclabile</strong> (eco-friendly)</li>
                  <li>• <strong>Resistenza meccanica</strong> superiore</li>
                  <li>• Ideale per <strong>porte scorrevoli</strong> e grandi vetrate</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-800">
                  <XCircle className="w-5 h-5 text-red-500" /> Svantaggi alluminio
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li>• <strong>Conduttività termica elevata</strong> (senza taglio termico)</li>
                  <li>• <strong>Costo superiore</strong> al PVC</li>
                  <li>• <strong>Isolamento acustico</strong> inferiore al PVC</li>
                  <li>• Rischio di <strong>condensa</strong> sui profili esterni</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Finestre in legno: tradizione e naturalezza</h2>
              <p>
                Il <strong>legno</strong> è il materiale più antico per gli infissi e rimane una scelta prestigiosa 
                per chi cerca calore, naturalezza e valore estetico ineguagliabile.
              </p>

              <div className="bg-amber-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-800">
                  <CheckCircle className="w-5 h-5 text-[#C8E600]" /> Vantaggi legno
                </h3>
                <ul className="space-y-2 text-amber-900">
                  <li>• <strong>Estetica superiore</strong> e calore naturale</li>
                  <li>• <strong>Ottimo isolamento termico</strong> naturale</li>
                  <li>• <strong>Materiale naturale</strong> e rinnovabile</li>
                  <li>• <strong>Valorizza l'immobile</strong></li>
                  <li>• <strong>Riparabile</strong> in caso di danneggiamenti</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-800">
                  <XCircle className="w-5 h-5 text-red-500" /> Svantaggi legno
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li>• <strong>Manutenzione costante</strong> richiesta (verniciatura ogni 3-5 anni)</li>
                  <li>• <strong>Costo elevato</strong>: il più caro dei tre materiali</li>
                  <li>• <strong>Sensibile all'umidità</strong> e agli insetti</li>
                  <li>• <strong>Dilatazione e deformazione</strong> nel tempo</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Confronto costi finestre 2026</h2>
              <p>
                Ecco una stima dei <strong>prezzi medi</strong> per una finestra standard (100x120 cm) con doppio vetro 
                camera e ferramenta di qualità:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-green-800 mb-2">PVC</h4>
                  <p className="text-3xl font-bold text-green-700">€ 350 - 550</p>
                  <p className="text-sm text-green-600 mt-2">Miglior rapporto qualità-prezzo</p>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-blue-800 mb-2">Alluminio</h4>
                  <p className="text-3xl font-bold text-blue-700">€ 500 - 800</p>
                  <p className="text-sm text-blue-600 mt-2">Design e durata</p>
                </div>
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-amber-800 mb-2">Legno</h4>
                  <p className="text-3xl font-bold text-amber-700">€ 700 - 1.200</p>
                  <p className="text-sm text-amber-600 mt-2">Eleganza e tradizione</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Isolamento termico: il fattore Uw</h2>
              <p>
                Il <strong>coefficiente Uw</strong> misura la dispersione termica della finestra: più è basso, 
                migliore è l'isolamento. Ecco i valori medi per materiale:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-[#C8E600]" /> Confronto coefficiente Uw
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>PVC (3-5 camere)</span>
                      <span className="font-bold">Uw 0,9 - 1,2 W/m²K</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Alluminio con taglio termico</span>
                      <span className="font-bold">Uw 1,2 - 1,6 W/m²K</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Legno</span>
                      <span className="font-bold">Uw 1,0 - 1,4 W/m²K</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div className="bg-amber-500 h-3 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quale materiale scegliere? La nostra guida</h2>

              <div className="space-y-4 my-6">
                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 text-lg mb-2">Scegli PVC se:</h4>
                  <ul className="text-green-900 space-y-1">
                    <li>• Cerci il <strong>miglior rapporto qualità-prezzo</strong></li>
                    <li>• Vuoi <strong>zero manutenzione</strong></li>
                    <li>• Abiti in una zona con <strong>inverni freddi</strong></li>
                    <li>• Priorità all'<strong>isolamento termico e acustico</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Scegli alluminio se:</h4>
                  <ul className="text-blue-900 space-y-1">
                    <li>• Preferisci un <strong>design moderno</strong> e minimale</li>
                    <li>• Vuoi <strong>grandi vetrate</strong> o porte scorrevoli</li>
                    <li>• Cerchi <strong>massima durata</strong> nel tempo</li>
                    <li>• Abiti in una zona <strong>molto ventosa</strong> o salmastra</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-800 text-lg mb-2">Scegli legno se:</h4>
                  <ul className="text-amber-900 space-y-1">
                    <li>• Vuoi il <strong>massimo dell'estetica</strong></li>
                    <li>• Abiti in un <strong>edificio storico</strong> o rustico</li>
                    <li>• Sei disposto alla <strong>manutenzione periodica</strong></li>
                    <li>• Vuoi un materiale <strong>naturale ed eco-sostenibile</strong></li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Detrazione fiscale 50% per nuovi infissi</h2>
              <p>
                Nel 2026 la sostituzione delle finestre con infissi ad <strong>alta efficienza energetica</strong> 
                (classe A o superiore) permette di accedere alla detrazione del <strong>50%</strong> come 
                intervento di riqualificazione energetica.
              </p>
              <div className="bg-[#C8E600]/10 rounded-xl p-5 my-6">
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-[#C8E600]" /> Esempio pratico:
                </p>
                <p className="text-gray-700 mt-2">
                  Sostituzione di 6 finestre in PVC: <strong>€ 3.000</strong><br />
                  Detrazione 50%: <strong>€ 1.500</strong><br />
                  Spesa effettiva: <strong>€ 1.500</strong> (€ 150/anno per 10 anni)
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                La scelta del materiale per le finestre dipende dalle tue priorità: <strong>PVC</strong> per chi cerca 
                il miglior compromesso costo-prestazioni, <strong>alluminio</strong> per chi vuole design e durata, 
                <strong> legno</strong> per chi non rinuncia all'eleganza naturale.
              </p>
              <p>
                In ogni caso, affidati a un <strong>installatore qualificato</strong> che ti guidi nella scelta 
                e garantisca una posa corretta. <strong>Renova Solution</strong> opera in Friuli Venezia Giulia e Veneto 
                con finestre dei migliori marchi italiani. Richiedi un preventivo gratuito!
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['finestre PVC', 'finestre alluminio', 'finestre legno', 'infissi', 'isolamento termico', 'serramenti'].map(tag => (
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
