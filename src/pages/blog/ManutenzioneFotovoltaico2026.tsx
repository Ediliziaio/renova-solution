import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle, AlertTriangle, Droplets, Wrench, Zap, Sun } from 'lucide-react';

export default function ManutenzioneFotovoltaico2026() {
  const articleData = {
    title: 'Manutenzione impianto fotovoltaico 2026: guida pratica completa',
    excerpt: 'Guida completa alla manutenzione dell\'impianto fotovoltaico nel 2026: pulizia pannelli, controllo inverter, costi degli interventi e frequenza consigliata per massimizzare la produzione.',
    date: '12 Febbraio 2026',
    dateISO: '2026-02-12',
    readTime: '7 min',
    author: 'Marco Bianchi',
    category: 'Manutenzione',
    image: '/images/manutenzione.jpg',
    slug: 'manutenzione-fotovoltaico-2026'
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
    keywords: 'manutenzione fotovoltaico 2026, pulizia pannelli, inverter fotovoltaico, impianto fotovoltaico, manutenzione pannelli',
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
        keywords="manutenzione fotovoltaico 2026, pulizia pannelli solari, inverter fotovoltaico, impianto fotovoltaico, manutenzione pannelli, fotovoltaico casa"
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
                Un <strong>impianto fotovoltaico</strong> ben mantenuto può produrre fino al <strong>20% in più</strong> 
                rispetto a uno trascurato. La manutenzione non è complessa, ma richiede costanza e attenzione. 
                In questa guida del 2026 ti spieghiamo tutto quello che devi sapere per mantenere il tuo impianto 
                efficiente nel tempo.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Perché la manutenzione è importante</h2>
              <p>
                I pannelli fotovoltaici sono progettati per durare <strong>25-30 anni</strong>, ma la loro efficienza 
                può diminuire se non vengono mantenuti correttamente. Polvere, sporcizia, foglie e ombre riducono 
                la quantità di luce che raggiunge le celle, diminuendo la produzione di energia.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5" /> Perdita di efficienza senza manutenzione
                </h4>
                <ul className="text-amber-900 space-y-1">
                  <li>• <strong>5-10%</strong> di perdita con polvere e sporco leggero</li>
                  <li>• <strong>15-20%</strong> di perdita con sporco pesante o feci di uccelli</li>
                  <li>• <strong>Fino al 50%</strong> se parti dell'impianto sono in ombra o danneggiate</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pulizia pannelli fotovoltaici</h2>
              <p>
                La <strong>pulizia dei pannelli</strong> è l'intervento di manutenzione più importante e frequente. 
                Ecco quando e come farla:
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                  <Droplets className="w-5 h-5" /> Frequenza pulizia consigliata
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Zone rurali/campagna</h4>
                    <p className="text-2xl font-bold text-blue-700">2-3 volte/anno</p>
                    <p className="text-sm text-blue-600">Polvere, polline, escrementi</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Zone urbane/città</h4>
                    <p className="text-2xl font-bold text-blue-700">1-2 volte/anno</p>
                    <p className="text-sm text-blue-600">Smog, polvere fine</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Zone industriali</h4>
                    <p className="text-2xl font-bold text-blue-700">3-4 volte/anno</p>
                    <p className="text-sm text-blue-600">Inquinamento atmosferico</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Zone marine</h4>
                    <p className="text-2xl font-bold text-blue-700">3-4 volte/anno</p>
                    <p className="text-sm text-blue-600">Salsedine, sabbia</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Come pulire i pannelli: la procedura corretta</h3>
              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#C8E600] rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">1</span>
                    <div>
                      <strong>Scegli il momento giusto</strong>
                      <p className="text-gray-600 text-sm">Preferibilmente al mattino presto o alla sera, quando i pannelli sono freddi. Evita il sole diretto.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#C8E600] rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">2</span>
                    <div>
                      <strong>Rimuovi detriti grossolani</strong>
                      <p className="text-gray-600 text-sm">Foglie, rametti, escrementi con una scopa morbida o soffiatore.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#C8E600] rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">3</span>
                    <div>
                      <strong>Lava con acqua demineralizzata</strong>
                      <p className="text-gray-600 text-sm">Usa un tubo con getto non troppo potente. Evita l'acqua calcaree che lascia aloni.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#C8E600] rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">4</span>
                    <div>
                      <strong>Usa una spugna morbida</strong>
                      <p className="text-gray-600 text-sm">Per sporco ostinato, usa spugna non abrasiva. Mai spazzole metalliche o pagliette!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#C8E600] rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">5</span>
                    <div>
                      <strong>Risciacqua e asciuga</strong>
                      <p className="text-gray-600 text-sm">Rimuovi tutti i residui di sapone. Usa una spatola in gomma per l'acqua in eccesso.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Cosa NON fare
                </h4>
                <ul className="text-red-900 space-y-1">
                  <li>• ❌ Usare detergenti aggressivi o solventi</li>
                  <li>• ❌ Pulire con pannelli bollenti al sole</li>
                  <li>• ❌ Camminare sui pannelli (rischio scheggiature)</li>
                  <li>• ❌ Usare idropulitrici ad alta pressione</li>
                  <li>• ❌ Pulire in condizioni di vento forte</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Controllo e manutenzione inverter</h2>
              <p>
                L'<strong>inverter</strong> è il "cuore" dell'impianto fotovoltaico. Converte la corrente continua 
                prodotta dai pannelli in corrente alternata utilizzabile in casa. Una manutenzione regolare 
                previene guasti costosi.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#C8E600]" /> Controlli inverter consigliati
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Controllo visivo mensile</strong>
                      <p className="text-gray-600 text-sm">Verifica che i LED di stato siano accesi correttamente, nessun messaggio di errore sul display.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Pulizia filtri aria</strong>
                      <p className="text-gray-600 text-sm">Ogni 3-6 mesi, a seconda della polvere nell'ambiente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Controllo connessioni</strong>
                      <p className="text-gray-600 text-sm">Annuale: verifica che i cavi non siano danneggiati o allentati.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Monitoraggio produzione</strong>
                      <p className="text-gray-600 text-sm">Controlla mensilmente i dati di produzione. Una diminuzione anomala può indicare problemi.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Costi manutenzione fotovoltaico 2026</h2>
              <p>
                Ecco una stima dei <strong>costi di manutenzione</strong> per un impianto fotovoltaico residenziale 
                nel 2026:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Servizio</th>
                      <th className="p-4 text-left font-bold">Frequenza</th>
                      <th className="p-4 text-left font-bold">Costo stimato</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Pulizia pannelli (fai da te)</td>
                      <td className="p-4">2-3 volte/anno</td>
                      <td className="p-4">Gratuito</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Pulizia pannelli (professionale)</td>
                      <td className="p-4">1-2 volte/anno</td>
                      <td className="p-4">€ 100 - 200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Controllo inverter</td>
                      <td className="p-4">Annuale</td>
                      <td className="p-4">€ 80 - 150</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Manutenzione programmata completa</td>
                      <td className="p-4">Annuale</td>
                      <td className="p-4">€ 200 - 400</td>
                    </tr>
                    <tr>
                      <td className="p-4">Sostituzione inverter</td>
                      <td className="p-4">Ogni 10-15 anni</td>
                      <td className="p-4">€ 800 - 2.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Manutenzione ordinaria vs straordinaria</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-green-800 text-lg mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5" /> Manutenzione ordinaria
                  </h4>
                  <ul className="text-green-900 space-y-2 text-sm">
                    <li>• Pulizia pannelli</li>
                    <li>• Controllo visivo componenti</li>
                    <li>• Pulizia filtri inverter</li>
                    <li>• Verifica produzione</li>
                    <li>• <strong>Costo: € 200-400/anno</strong></li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h4 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Manutenzione straordinaria
                  </h4>
                  <ul className="text-amber-900 space-y-2 text-sm">
                    <li>• Sostituzione inverter</li>
                    <li>• Riparazione cavi danneggiati</li>
                    <li>• Sostituzione ottimizzatori</li>
                    <li>• Riparazione scheggiature pannelli</li>
                    <li>• <strong>Costo: a preventivo</strong></li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Monitoraggio produzione: i segnali di allarme</h2>
              <p>
                Il <strong>monitoraggio continuo</strong> della produzione è il modo migliore per individuare 
                problemi prima che diventino costosi. Ecco i segnali da non sottovalutare:
              </p>

              <div className="bg-red-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-red-800 mb-4">⚠️ Quando chiamare un tecnico</h4>
                <ul className="text-red-900 space-y-2">
                  <li>• Calo produzione <strong>superiore al 20%</strong> rispetto allo stesso periodo dell'anno precedente</li>
                  <li>• <strong>Inverter spento</strong> o con LED rosso/arancione</li>
                  <li>• <strong>Messaggi di errore</strong> sul display o sull'app di monitoraggio</li>
                  <li>• <strong>Scheggiature o crepe</strong> visibili sui pannelli</li>
                  <li>• <strong>Cavi scoperti</strong> o morsetti ossidati</li>
                  <li>• <strong>Rumori anomali</strong> dall'inverter</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Garanzia e manutenzione: cosa copre</h2>
              <p>
                Le garanzie standard di un impianto fotovoltaico nel 2026 coprono:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Sun className="w-10 h-10 text-[#C8E600] mx-auto mb-2" />
                    <h4 className="font-bold">Pannelli</h4>
                    <p className="text-2xl font-bold text-[#C8E600]">10-15 anni</p>
                    <p className="text-sm text-gray-600">Garanzia prodotto</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-10 h-10 text-[#C8E600] mx-auto mb-2" />
                    <h4 className="font-bold">Inverter</h4>
                    <p className="text-2xl font-bold text-[#C8E600]">5-10 anni</p>
                    <p className="text-sm text-gray-600">Garanzia prodotto</p>
                  </div>
                  <div className="text-center">
                    <Wrench className="w-10 h-10 text-[#C8E600] mx-auto mb-2" />
                    <h4 className="font-bold">Prestazioni</h4>
                    <p className="text-2xl font-bold text-[#C8E600]">25 anni</p>
                    <p className="text-sm text-gray-600">Garanzia di output</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusioni</h2>
              <p>
                La <strong>manutenzione regolare dell'impianto fotovoltaico</strong> è un investimento piccolo 
                (€ 200-400/anno) che garantisce la massima produzione di energia e prolunga la vita dell'impianto. 
                Con una pulizia periodica e controlli annuali, puoi ottenere il massimo dal tuo investimento 
                per i prossimi 25-30 anni.
              </p>
              <p>
                <strong>Renova Solution</strong> offre servizi di manutenzione programmata per impianti fotovoltaici 
                in Friuli Venezia Giulia e Veneto. I nostri tecnici qualificati garantiscono interventi rapidi 
                e professionali. Contattaci per un piano di manutenzione personalizzato!
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['manutenzione fotovoltaico', 'pulizia pannelli', 'inverter', 'impianto fotovoltaico', 'pannelli solari', '2026'].map(tag => (
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
