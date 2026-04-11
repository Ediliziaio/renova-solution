import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, TrendingUp, Euro, Home } from 'lucide-react';

export default function CappottoTermico2026() {
  const articleData = {
    title: 'Cappotto termico 2026: quanto si risparmia in bolletta? Dati reali e calcoli',
    excerpt: 'Analisi dettagliata dei risparmi reali ottenibili con il cappotto termico nel 2026. Dati sui consumi prima e dopo l\'intervento in diverse zone climatiche italiane. Calcolo del risparmio annuo.',
    date: '20 Febbraio 2026',
    dateISO: '2026-02-20',
    readTime: '8 min',
    author: 'Renova Team',
    category: 'Ristrutturazione',
    image: '/images/cappotto.jpg',
    slug: 'cappotto-termico-risparmio-2026'
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
    keywords: 'cappotto termico 2026, isolamento casa, risparmio bolletta, coibentazione, efficienza energetica',
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
        keywords="cappotto termico 2026, isolamento casa, risparmio bolletta, coibentazione, efficienza energetica, isolamento termico, ristrutturazione casa"
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
                Il <strong>cappotto termico</strong> è considerato uno degli interventi di riqualificazione energetica 
                più efficaci per ridurre i consumi di riscaldamento e raffrescamento. Ma quanto si risparmia 
                realmente in bolletta? In questo articolo analizziamo i <strong>dati reali</strong> e i calcoli 
                per diverse tipologie di abitazioni e zone climatiche.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cos'è il cappotto termico</h2>
              <p>
                Il <strong>cappotto termico</strong> (o isolamento a cappotto) è un sistema di coibentazione applicato 
                all'esterno dell'edificio. Consiste in uno strato isolante (solitamente in polistirene espanso o 
                minerale) fissato alle pareti e protetto da un rivestimento finito.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-[#C8E600]" /> Componenti del cappotto termico
                </h3>
                <ul className="space-y-2">
                  <li>• <strong>Strato isolante</strong>: EPS, XPS, lana di roccia o fibra di legno</li>
                  <li>• <strong>Spessore</strong>: da 6 a 16 cm in base alla zona climatica</li>
                  <li>• <strong>Collante e tasselli</strong>: per il fissaggio alla parete</li>
                  <li>• <strong>Rete in fibra di vetro</strong>: per armatura e anti-fessurazione</li>
                  <li>• <strong>Rasante e finitura</strong>: intonaco, pittura o rivestimento</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quanto si risparmia con il cappotto termico?</h2>
              <p>
                I <strong>risparmi in bolletta</strong> dipendono da diversi fattori: zona climatica, tipologia 
                dell'edificio, spessore dell'isolante e sistema di riscaldamento. Ecco i dati medi per una 
                casa unifamiliare di 150 m²:
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                  <TrendingUp className="w-5 h-5" /> Risparmio energetico stimato
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="text-4xl font-bold text-green-600">25-30%</span>
                    <p className="text-gray-600 mt-2">Risparmio riscaldamento<br/>zona climatica E (Friuli)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="text-4xl font-bold text-green-600">20-25%</span>
                    <p className="text-gray-600 mt-2">Risparmio riscaldamento<br/>zona climatica D (Veneto)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Calcolo risparmio annuo in euro</h2>
              <p>
                Ecco un esempio pratico di <strong>calcolo del risparmio</strong> per una casa in Friuli Venezia Giulia 
                (zona climatica E) con riscaldamento a gas metano:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4">Casa unifamiliare 150 m² - Prima del cappotto</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Consumo annuo gas: <strong>2.500 Smc</strong></li>
                  <li>• Costo gas (€ 1,20/Smc): <strong>€ 3.000/anno</strong></li>
                  <li>• Classe energetica: <strong>G</strong></li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4 text-green-800">Dopo il cappotto termico (10 cm EPS)</h4>
                <ul className="space-y-2 text-green-900">
                  <li>• Consumo annuo gas: <strong>1.750 Smc</strong> (-30%)</li>
                  <li>• Costo gas: <strong>€ 2.100/anno</strong></li>
                  <li>• <strong>Risparmio annuo: € 900</strong></li>
                  <li>• Classe energetica: <strong>D</strong></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Costi e tempi di ripiego</h2>
              <p>
                I <strong>costi di installazione del cappotto termico</strong> nel 2026 variano in base alla superficie 
                da isolare, allo spessore e alla finitura scelta:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Tipologia</th>
                      <th className="p-4 text-left font-bold">Costo al m²</th>
                      <th className="p-4 text-left font-bold">Esempio 150 m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Cappotto base (6-8 cm)</td>
                      <td className="p-4">€ 80 - 100</td>
                      <td className="p-4">€ 12.000 - 15.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Cappotto standard (10-12 cm)</td>
                      <td className="p-4">€ 100 - 130</td>
                      <td className="p-4">€ 15.000 - 19.500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Cappotto premium (14-16 cm)</td>
                      <td className="p-4">€ 130 - 160</td>
                      <td className="p-4">€ 19.500 - 24.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#C8E600]/10 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-[#C8E600]" /> Calcolo tempi di ripiego
                </h4>
                <p className="text-gray-700">
                  Investimento: <strong>€ 18.000</strong> (cappotto standard 150 m²)<br />
                  Detrazione 50%: <strong>€ 9.000</strong><br />
                  Spesa netta: <strong>€ 9.000</strong><br />
                  Risparmio annuo: <strong>€ 900</strong><br />
                  <strong className="text-lg mt-2 block">Tempo di ripiego: 10 anni</strong>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Detrazione fiscale 50% nel 2026</h2>
              <p>
                L'isolamento delle superfici opache verticali, orizzontali e inclini che influiscono sul volume 
                riscaldato beneficia della <strong>detrazione del 50%</strong> (Ecobonus 2026) quando l'intervento 
                interessa l'intero edificio o l'unità immobiliare.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 mb-2">Requisiti per la detrazione 50%</h4>
                <ul className="text-amber-900 space-y-1">
                  <li>• Intervento su <strong>più del 25% della superficie</strong> disperdente</li>
                  <li>• <strong>Miglioramento di due classi energetiche</strong> (o classe più alta se già in A/B)</li>
                  <li>• Asseverazione di un <strong>tecnico abilitato</strong></li>
                  <li>• Trasmissione dati all'<strong>ENEA</strong></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Benefici oltre al risparmio economico</h2>
              <p>
                Il <strong>cappotto termico</strong> offre vantaggi che vanno oltre il risparmio in bolletta:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Comfort abitativo</strong>: eliminazione dei ponti termici e temperature uniformi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Valorizzazione immobile</strong>: aumento del valore di mercato</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Riduzione muffe e condensa</strong>: pareti più calde e asciutte</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Isolamento acustico</strong>: riduzione del rumore esterno</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Protezione della facciata</strong>: maggiore durata dell'edificio</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                Il <strong>cappotto termico è un investimento che si ripaga</strong> in 10-12 anni considerando la detrazione 
                fiscale del 50%. Oltre al risparmio economico (€ 600-1.200/anno per una casa media), offre comfort, 
                salubrità e valorizzazione dell'immobile.
              </p>
              <p>
                Per massimizzare i benefici, è fondamentale affidarsi a un'azienda esperta che sappia dimensionare 
                correttamente l'isolamento e garantire una posa a regola d'arte. <strong>Renova Solution</strong> opera 
                in Friuli Venezia Giulia e Veneto con materiali certificati e personale qualificato. 
                Richiedi una consulenza gratuita per valutare la soluzione più adatta alla tua casa!
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['cappotto termico', 'isolamento casa', 'risparmio bolletta', 'coibentazione', 'efficienza energetica', '2026'].map(tag => (
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
