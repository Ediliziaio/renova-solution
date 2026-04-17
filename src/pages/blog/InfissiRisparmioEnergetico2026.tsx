import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO, { blogPostSchema } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function InfissiRisparmioEnergetico2026() {
  const articleData = {
    title: 'Infissi e risparmio energetico: quanto si risparmia davvero cambiando le finestre nel 2026',
    excerpt: 'Scopri quanto si risparmia in bolletta sostituendo le finestre nel 2026: dati reali, tabelle comparative, valori Uw, materiali a confronto, detrazione 50% e case study da Udine e Padova.',
    date: '8 Aprile 2026',
    dateISO: '2026-04-08',
    readTime: '14 min',
    author: 'Renova Team',
    category: 'Infissi',
    image: '/images/confronto-finestre.jpg',
    slug: 'infissi-risparmio-energetico-2026'
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
    keywords: 'risparmio energetico infissi, cambiare finestre risparmio, sostituzione infissi costo, infissi risparmio bolletta, trasmittanza termica infissi, infissi classe energetica, finestre risparmio riscaldamento 2026',
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
        keywords="risparmio energetico infissi, cambiare finestre risparmio, sostituzione infissi costo, infissi risparmio bolletta, trasmittanza termica infissi, infissi classe energetica, finestre risparmio riscaldamento 2026"
        ogType="article"
        canonical={`https://www.renovasolution.it/blog/${articleData.slug}`}
      />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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

        {/* Article Body */}
        <article className="py-12 md:py-16 bg-white" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={articleData.title} />
          <meta itemProp="datePublished" content={articleData.dateISO} />
          <meta itemProp="author" content={articleData.author} />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C8E600] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Torna al blog
            </Link>

            <div className="prose prose-lg max-w-none text-gray-700">

              {/* INTRO */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Hai mai misurato il freddo che entra dalle finestre d'inverno con il palmo della mano? Se la risposta è sì,
                stai letteralmente riscaldando l'esterno. In Italia si stima che dal <strong>25% al 35% del calore prodotto da
                un impianto di riscaldamento</strong> venga disperso attraverso infissi obsoleti. Cambiare le finestre nel 2026
                non è solo una questione estetica: è un investimento concreto che si ripaga nel tempo. In questo articolo ti
                mostriamo <strong>dati reali, tabelle comparative e calcoli pratici</strong> per capire quanto si risparmia
                davvero — e come farlo nel modo giusto.
              </p>

              {/* SEZIONE 1 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Quanto si perde con gli infissi vecchi</h2>
              <p>
                Un infisso con vetro singolo degli anni '70 o '80 ha una trasmittanza termica (Uw) che spesso supera i
                <strong> 4,5–5,5 W/m²K</strong>. Tradotto in parole semplici: ogni metro quadro di finestra disperde, ogni ora,
                oltre 4,5 watt di energia termica per ogni grado di differenza tra interno ed esterno. In una casa di 100 m²
                con 12 m² totali di superficie finestrata, in una giornata invernale con 20°C in casa e 0°C fuori, la dispersione
                oraria attraverso le sole finestre supera i <strong>1.000 watt</strong> — pari a far funzionare continuamente
                10 stufe elettriche da 100W.
              </p>
              <p>
                Anche gli infissi con doppio vetro installati prima del 2000 spesso non rispettano gli standard attuali: il
                vetrocamera aveva intercapedine d'aria (non gas argon), profili senza taglio termico e guarnizioni deteriorate.
                Risultato: Uw attorno a <strong>2,5–3,0 W/m²K</strong>, ancora molto lontano dai valori richiesti dalla
                normativa vigente (<strong>≤ 1,4 W/m²K</strong> nelle zone climatiche E come Udine e Padova).
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-xl p-5 my-6">
                <p className="flex items-start gap-3 text-red-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                  <span>
                    <strong>Dato ENEA 2025:</strong> in Italia ci sono ancora circa 12 milioni di abitazioni con infissi
                    datati pre-2000. Il costo annuo stimato in bolletta dovuto alle sole dispersioni termiche delle finestre
                    obsolete è di oltre <strong>3 miliardi di euro</strong> l'anno a livello nazionale.
                  </span>
                </p>
              </div>

              {/* SEZIONE 2 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Come funziona la dispersione termica attraverso le finestre</h2>
              <p>
                La <strong>trasmittanza termica Uw</strong> (Window, totale) è l'indice che misura quanta energia termica
                attraversa l'infisso per ogni metro quadro e per ogni grado Kelvin di differenza di temperatura tra interno
                ed esterno. Si esprime in <strong>W/m²K</strong> (watt per metro quadro per kelvin).
              </p>
              <p>
                Il valore Uw dipende da tre componenti:
              </p>
              <ul className="list-none space-y-2 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ug</strong> — trasmittanza del vetro (glass): dipende dal tipo di vetrocamera e dai trattamenti superficiali</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Uf</strong> — trasmittanza del telaio (frame): dipende dal materiale (PVC, alluminio con taglio termico, legno)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ψg</strong> — ponte termico lineare del distanziale (spacer): il listello perimetrale tra i due vetri</span>
                </li>
              </ul>
              <p>
                La formula semplificata è: <strong>Uw = (Uf × Af + Ug × Ag + Ψg × Lg) / (Af + Ag)</strong>
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Valori limite Uw per legge in Italia (D.Lgs. 192/2005 e s.m.i.)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="text-left p-2 rounded-tl">Zona climatica</th>
                        <th className="text-left p-2">Province principali FVG/Veneto</th>
                        <th className="text-left p-2 rounded-tr">Uw massimo ammesso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-2 font-medium">Zona D</td>
                        <td className="p-2">Venezia, Rovigo, Padova (costa)</td>
                        <td className="p-2 font-bold text-green-700">≤ 1,8 W/m²K</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-2 font-medium">Zona E</td>
                        <td className="p-2">Udine, Trieste, Pordenone, Padova, Treviso, Vicenza, Verona</td>
                        <td className="p-2 font-bold text-orange-700">≤ 1,4 W/m²K</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Zona F</td>
                        <td className="p-2">Zone montane (Tarvisio, Cortina)</td>
                        <td className="p-2 font-bold text-red-700">≤ 1,0 W/m²K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SEZIONE 3 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Quanto si risparmia in bolletta: dati reali</h2>
              <p>
                Il risparmio effettivo dipende da quante finestre sostituisci, dalla superficie totale, dalla zona climatica
                e dal tuo sistema di riscaldamento. Ecco una simulazione basata su una casa tipo di <strong>110 m²</strong> con
                <strong> 12 m² di superficie finestrata</strong>, situata in <strong>zona climatica E</strong> (Udine/Padova),
                riscaldamento a gas con caldaia a condensazione (rendimento medio 92%).
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#C8E600]">
                      <th className="text-left p-3 font-bold text-black">Tipologia infisso</th>
                      <th className="text-center p-3 font-bold text-black">Uw (W/m²K)</th>
                      <th className="text-center p-3 font-bold text-black">Dispersione annua (kWh)</th>
                      <th className="text-center p-3 font-bold text-black">Costo annuo gas (€)</th>
                      <th className="text-center p-3 font-bold text-black">Risparmio vs vetro singolo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-red-50">
                      <td className="p-3 font-medium">Vetro singolo anni '70</td>
                      <td className="p-3 text-center text-red-700 font-bold">5,2</td>
                      <td className="p-3 text-center">3.900</td>
                      <td className="p-3 text-center font-bold text-red-700">€ 430</td>
                      <td className="p-3 text-center text-gray-400">—</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-orange-50">
                      <td className="p-3 font-medium">Doppio vetro pre-2000 (aria)</td>
                      <td className="p-3 text-center text-orange-700 font-bold">2,8</td>
                      <td className="p-3 text-center">2.100</td>
                      <td className="p-3 text-center font-bold text-orange-700">€ 230</td>
                      <td className="p-3 text-center text-green-700 font-semibold">- € 200/anno</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-yellow-50">
                      <td className="p-3 font-medium">Doppio vetro basso emissivo (argon)</td>
                      <td className="p-3 text-center text-yellow-700 font-bold">1,4</td>
                      <td className="p-3 text-center">1.050</td>
                      <td className="p-3 text-center font-bold text-yellow-700">€ 115</td>
                      <td className="p-3 text-center text-green-700 font-semibold">- € 315/anno</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-green-50">
                      <td className="p-3 font-medium">Doppio vetro premium (Uw 1,1)</td>
                      <td className="p-3 text-center text-green-700 font-bold">1,1</td>
                      <td className="p-3 text-center">825</td>
                      <td className="p-3 text-center font-bold text-green-700">€ 91</td>
                      <td className="p-3 text-center text-green-700 font-semibold">- € 339/anno</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="p-3 font-medium">Triplo vetro (argon/krypton)</td>
                      <td className="p-3 text-center text-emerald-700 font-bold">0,7</td>
                      <td className="p-3 text-center">525</td>
                      <td className="p-3 text-center font-bold text-emerald-700">€ 58</td>
                      <td className="p-3 text-center text-green-700 font-semibold">- € 372/anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic">
                * Simulazione basata su gradi-giorno zona E (2.500 GG), prezzo gas 1,10 €/m³, potere calorifico 9,5 kWh/m³.
                I valori sono indicativi e variano in base all'esposizione, alla qualità della posa e al sistema di riscaldamento.
              </p>

              <div className="bg-[#C8E600]/10 rounded-xl p-5 my-6 border border-[#C8E600]/40">
                <p className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#C8E600]" /> Conclusione pratica
                </p>
                <p className="text-gray-700">
                  Passando da infissi con vetro singolo a infissi con doppio vetro basso emissivo e argon (Uw 1,4),
                  una famiglia media risparmia tra i <strong>300 e 370 euro l'anno</strong> in bolletta del gas.
                  Con il triplo vetro si arriva a quasi <strong>400 euro in meno ogni anno</strong>.
                </p>
              </div>

              {/* SEZIONE 4 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Il valore Uw: come leggere le schede tecniche degli infissi</h2>
              <p>
                Quando chiedi un preventivo per nuovi infissi, il venditore ti mostrerà una scheda tecnica con una serie di
                valori. Ecco come interpretarli correttamente per non fare errori:
              </p>
              <ul className="list-none space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Uw dichiarato vs. Uw calcolato:</strong> il valore pubblicizzato si riferisce spesso a una dimensione
                    standard (es. 1,23 × 1,48 m). Per finestre più piccole il Uw è leggermente peggiore, perché aumenta
                    l'incidenza del telaio rispetto al vetro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Ug del vetro:</strong> chiedi sempre il valore Ug specifico del vetrocamera montato. Un Ug di
                    1,0 W/m²K è molto diverso da uno da 1,4 W/m²K, anche se il profilo è lo stesso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Fattore solare g:</strong> indica quanta energia solare entra attraverso il vetro. Un valore alto
                    (es. 0,6) è utile in ambienti freddi per sfruttare il guadagno solare gratuito; un valore basso (es. 0,3)
                    protegge dal surriscaldamento estivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Rw (isolamento acustico):</strong> espresso in decibel. 32–35 dB per ambienti normali, 38–42 dB
                    per zone rumorose (strade trafficate, ferrovie).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Permeabilità all'aria (classe 4):</strong> la classe massima per le finestre secondo EN 12207.
                    Un infisso di classe 4 riduce le infiltrazioni d'aria a zero e contribuisce significativamente al risparmio.</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 my-6">
                <p className="flex items-start gap-3 text-amber-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                  <span>
                    <strong>Attenzione alle promozioni:</strong> un infisso pubblicizzato come "Uw 1,0" potrebbe avere
                    un Ug del vetro da 1,4 abbinato a un telaio molto performante. Chiedi sempre il certificato CE con tutti
                    i valori dichiarati, firmato dal produttore ai sensi della norma EN 14351-1.
                  </span>
                </p>
              </div>

              {/* SEZIONE 5 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Confronto tra materiali: PVC vs alluminio vs legno-alluminio</h2>
              <p>
                La scelta del materiale del telaio incide sia sul valore Uw complessivo sia sui costi di acquisto e manutenzione.
                Ecco un confronto aggiornato al 2026:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-left p-3">Caratteristica</th>
                      <th className="text-center p-3">PVC</th>
                      <th className="text-center p-3">Alluminio T.T.</th>
                      <th className="text-center p-3">Legno-Alluminio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Uf telaio (W/m²K)</td>
                      <td className="p-3 text-center text-green-700 font-bold">1,0 – 1,3</td>
                      <td className="p-3 text-center text-yellow-700 font-bold">1,4 – 2,0</td>
                      <td className="p-3 text-center text-green-700 font-bold">1,0 – 1,4</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-medium">Uw tipico (doppio vetro argon)</td>
                      <td className="p-3 text-center font-bold text-green-700">0,9 – 1,3</td>
                      <td className="p-3 text-center font-bold text-yellow-700">1,2 – 1,6</td>
                      <td className="p-3 text-center font-bold text-green-700">0,9 – 1,3</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Durata stimata</td>
                      <td className="p-3 text-center">25 – 35 anni</td>
                      <td className="p-3 text-center">40 – 60 anni</td>
                      <td className="p-3 text-center">30 – 50 anni</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-medium">Manutenzione</td>
                      <td className="p-3 text-center text-green-700">Minima</td>
                      <td className="p-3 text-center text-green-700">Minima</td>
                      <td className="p-3 text-center text-yellow-700">Medio-bassa</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Prezzo medio (finestra 100×120 cm)</td>
                      <td className="p-3 text-center">€ 350 – 600</td>
                      <td className="p-3 text-center">€ 550 – 900</td>
                      <td className="p-3 text-center">€ 700 – 1.400</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-medium">Riciclabilità</td>
                      <td className="p-3 text-center text-yellow-700">Parziale</td>
                      <td className="p-3 text-center text-green-700">100%</td>
                      <td className="p-3 text-center text-green-700">Alta</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Estetica</td>
                      <td className="p-3 text-center">Buona</td>
                      <td className="p-3 text-center">Ottima (design)</td>
                      <td className="p-3 text-center text-green-700">Eccellente</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 font-medium">Ideale per</td>
                      <td className="p-3 text-center text-sm">Risparmio + isolamento</td>
                      <td className="p-3 text-center text-sm">Design + durabilità</td>
                      <td className="p-3 text-center text-sm">Prestazioni + estetica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Per chi vive in <strong>Friuli Venezia Giulia o Veneto</strong> e vuole massimizzare il risparmio energetico,
                il <strong>PVC di alta gamma</strong> a 5 o 6 camere (con Uf ≤ 1,1 W/m²K) rimane la scelta più efficiente
                per il rapporto costo-prestazioni. Il <strong>legno-alluminio</strong> è la scelta premium per chi non vuole
                rinunciare all'estetica e può permettersi l'investimento superiore.
              </p>

              {/* SEZIONE 6 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Vetro camera, triplo vetro e gas argon: cosa scegliere</h2>
              <p>
                Il <strong>vetrocamera</strong> moderno è molto diverso da quello di 20 anni fa. Oggi i sistemi di vetro
                disponibili sono tre: doppio vetro standard, doppio vetro basso emissivo con argon, e triplo vetro.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Doppio vetro standard (aria)</h4>
                  <p className="text-gray-700 text-sm">
                    Intercapedine d'aria da 12–16 mm. Ug tipico: <strong>2,7–3,0 W/m²K</strong>. Non è più accettabile
                    per nuove installazioni nelle zone E/F. Adatto solo a interventi in zona D con budget limitatissimo.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 text-lg mb-2">Doppio vetro basso emissivo + argon</h4>
                  <p className="text-green-900 text-sm">
                    Strato basso emissivo (rivestimento soft-coat) + intercapedine riempita con gas argon (12–18 mm).
                    Ug tipico: <strong>1,0–1,2 W/m²K</strong>. Lo standard di mercato nel 2026 per la zona E.
                    Ottimo rapporto prestazioni/costo. Costo aggiuntivo rispetto al doppio vetro standard: +15–20% sul vetro.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 border-l-4 border-emerald-600">
                  <h4 className="font-bold text-emerald-800 text-lg mb-2">Triplo vetro + argon/krypton</h4>
                  <p className="text-emerald-900 text-sm">
                    Tre lastre con due intercapedini riempite con argon o krypton. Ug tipico: <strong>0,5–0,7 W/m²K</strong>.
                    Consigliato per zone F (montagna) o per chi punta a case passive (Passivhaus). Peso maggiore del 35–40%
                    rispetto al doppio: verificare che la ferramenta e il telaio siano predisposti. Costo aggiuntivo: +30–45%
                    sul vetro rispetto al doppio basso emissivo.
                  </p>
                </div>
              </div>

              <div className="bg-[#C8E600]/10 rounded-xl p-5 my-6 border border-[#C8E600]/40">
                <p className="font-bold text-gray-900 mb-2">La nostra raccomandazione per FVG e Veneto (zona E):</p>
                <p className="text-gray-700">
                  Per la stragrande maggioranza delle abitazioni in zona E, il <strong>doppio vetro basso emissivo con
                  gas argon</strong> è la scelta ottimale. Il triplo vetro garantisce prestazioni leggermente superiori
                  ma con un costo aggiuntivo che allunga il payback di 4–6 anni. Scegli il triplo vetro se:
                  stai costruendo casa nuova, punti alla classe A4, oppure le tue finestre si affacciano su pareti molto
                  esposte a nord o nord-est.
                </p>
              </div>

              {/* SEZIONE 7 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Ponti termici e condensa: come gli infissi moderni risolvono il problema</h2>
              <p>
                La <strong>condensa sulle finestre</strong> è uno dei segnali più visibili di un infisso inadeguato.
                Si forma quando la superficie interna del vetro o del telaio è sufficientemente fredda da portare il vapore
                acqueo dell'aria interna a condensare. Oltre al fastidio visivo, la condensa prolungata causa muffe, danni
                ai davanzali e peggioramento della qualità dell'aria indoor.
              </p>
              <p>
                Con gli infissi moderni il problema viene risolto su tre fronti:
              </p>
              <ul className="list-none space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Distanziale "warm edge":</strong> il listello perimetrale tra i vetri realizzato in materiale
                    a bassa conduttività (acciaio inox, fibra di vetro, polimero) riduce il ponte termico lineare Ψg da
                    0,08–0,10 W/mK a 0,03–0,04 W/mK, alzando la temperatura alla base del vetro di 2–4°C.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Profili con taglio termico rinforzato:</strong> nei telai in alluminio e nei profili PVC a molte
                    camere, l'isolamento tra la parte interna ed esterna del telaio impedisce che la superficie interna
                    si raffreddi sotto il punto di rugiada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Guarnizioni perimetrali tri-strato:</strong> le guarnizioni moderne in EPDM a tre livelli
                    creano una camera d'aria supplementare che impedisce le infiltrazioni d'aria fredda e mantiene la
                    temperatura di interfaccia telaio-muro più alta, prevenendo la condensa interstiziale nei ponti termici
                    di giunzione con la muratura.</span>
                </li>
              </ul>

              {/* SEZIONE 8 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Classe energetica dell'edificio: come cambia con i nuovi infissi</h2>
              <p>
                In Italia la classe energetica degli edifici (A4, A3, A2, A1, B, C, D, E, F, G) è determinata dall'EPgl,nr
                — l'indice di prestazione energetica globale non rinnovabile, espresso in kWh/m²anno. Gli infissi influiscono
                direttamente su questa stima attraverso la voce <strong>"dispersioni per trasmissione"</strong> nel calcolo
                del fabbisogno termico invernale.
              </p>
              <p>
                In un edificio degli anni '80 con classe energetica G o F, la sostituzione di tutti gli infissi con unità
                a Uw ≤ 1,1 W/m²K può contribuire a un miglioramento di <strong>1–2 classi energetiche</strong>, specialmente
                se combinata con altri interventi (cappotto termico, nuova caldaia). In un edificio con superficie finestrata
                abbondante (ampi saloni, grandi vetrate), il miglioramento può essere ancora più significativo.
              </p>

              <div className="bg-blue-50 rounded-xl p-5 my-6">
                <h4 className="font-bold text-blue-900 mb-3">Esempio di miglioramento classe energetica:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-500 uppercase mb-1">Prima</p>
                    <p className="text-3xl font-bold text-red-600">Classe F</p>
                    <p className="text-sm text-gray-600 mt-1">EPgl,nr ≈ 185 kWh/m²anno</p>
                    <p className="text-xs text-gray-500">Infissi vetro singolo anni '80</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-300">
                    <p className="text-xs text-gray-500 uppercase mb-1">Dopo sostituzione infissi</p>
                    <p className="text-3xl font-bold text-green-600">Classe D</p>
                    <p className="text-sm text-gray-600 mt-1">EPgl,nr ≈ 130 kWh/m²anno</p>
                    <p className="text-xs text-gray-500">Nuovi infissi PVC Uw 1,1 W/m²K</p>
                  </div>
                </div>
                <p className="text-sm text-blue-800 mt-3">
                  Un miglioramento di classe energetica aumenta il valore catastale e di mercato dell'immobile, con
                  stime che vanno dal <strong>+3% al +8%</strong> sul prezzo di vendita (dati Nomisma 2025).
                </p>
              </div>

              {/* SEZIONE 9 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. La posa in opera certificata UNI 11673: perché è fondamentale</h2>
              <p>
                Avere infissi di altissima qualità non basta se la posa in opera è scadente. La norma <strong>UNI 11673-1:2017
                </strong> definisce i requisiti per la corretta installazione dei serramenti, introducendo il concetto di
                "posa certificata". In pratica, il posatore deve:
              </p>
              <ul className="list-none space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Misurare correttamente il vano:</strong> tolleranze di ±3 mm per garantire la corretta
                    tenuta delle guarnizioni senza tensioni meccaniche sul telaio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Applicare il nastro a tre strati:</strong> nastro espandente impermeabile lato esterno
                    (contro la pioggia e vento), nastro fonoassorbente nell'intercapedine, nastro traspirante lato interno
                    (permette l'uscita del vapore). Schema "esterno impermeabile / interno traspirante".</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Eliminare ogni ponte termico di giunzione:</strong> il giunto telaio-muratura deve essere
                    completamente sigillato con schiuma poliuretanica ad alta densità a bassa espansione e coperto con
                    i nastri di cui sopra. Un giunto aperto di 5 mm su tutto il perimetro può vanificare il 30–40% del
                    miglioramento Uw dell'infisso stesso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                  <span><strong>Verificare la regolazione della ferramenta:</strong> una cerniera mal regolata riduce la
                    pressione della guarnizione e crea infiltrazioni d'aria equivalenti a un foro di 3–4 cm².</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-5 my-6">
                <p className="flex items-start gap-3 text-amber-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
                  <span>
                    <strong>Richiedi sempre la dichiarazione di corretta posa in opera</strong> dal posatore,
                    con indicazione esplicita del rispetto della UNI 11673-1. Questo documento è necessario per
                    accedere alla detrazione fiscale del 50% e può essere richiesto dall'Agenzia delle Entrate
                    in caso di controllo.
                  </span>
                </p>
              </div>

              {/* SEZIONE 10 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Detrazione fiscale del 50% nel 2026</h2>
              <p>
                La sostituzione degli infissi rientra tra gli interventi di <strong>riqualificazione energetica</strong>
                agevolati dalla <strong>detrazione IRPEF del 50%</strong> (ex Ecobonus ridotto) ripartita in 10 anni.
                Ecco le regole aggiornate al 2026:
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-6">
                <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8E600]" /> Requisiti per accedere alla detrazione 50%
                </h4>
                <ul className="space-y-2 text-green-900">
                  <li>• Infisso con <strong>Uw ≤ 1,4 W/m²K</strong> (zona E) o ≤ 1,8 W/m²K (zona D)</li>
                  <li>• Intervento su <strong>edificio esistente</strong> (non su nuove costruzioni)</li>
                  <li>• Pagamento tramite <strong>bonifico parlante</strong> con causale specifica ("Detrazione 50% art. 16-bis DPR 917/86")</li>
                  <li>• <strong>Asseverazione tecnica</strong> del rispetto dei requisiti minimi (per importi elevati)</li>
                  <li>• Dichiarazione di corretta posa in opera (UNI 11673-1)</li>
                  <li>• Invio comunicazione ad ENEA entro 90 giorni dal collaudo (per l'ex Ecobonus 65%)</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 my-6">
                <p className="flex items-start gap-3 text-green-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                  <span>
                    <strong>Detrazione fiscale del 50% per la prima casa:</strong> nel 2026 puoi usufruire della
                    detrazione fiscale del 50% sulle spese per la sostituzione degli infissi sulla tua abitazione
                    principale. L'importo detraibile viene recuperato in <strong>10 rate annuali di pari importo
                    tramite la dichiarazione dei redditi</strong>, riducendo concretamente il costo dell'investimento
                    in nuovi serramenti ad alta efficienza energetica.
                  </span>
                </p>
              </div>

              <div className="bg-[#C8E600]/10 rounded-xl p-5 my-4 border border-[#C8E600]/40">
                <p className="font-bold text-gray-900 mb-2">Esempio di calcolo detrazione 50%:</p>
                <div className="grid sm:grid-cols-3 gap-3 mt-3">
                  <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                    <p className="text-xs text-gray-500">Spesa totale (8 finestre PVC)</p>
                    <p className="text-xl font-bold text-gray-800">€ 4.800</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                    <p className="text-xs text-gray-500">Detrazione 50% (totale)</p>
                    <p className="text-xl font-bold text-[#C8E600]">€ 2.400</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                    <p className="text-xs text-gray-500">Rata annua (× 10 anni)</p>
                    <p className="text-xl font-bold text-green-700">€ 240/anno</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Il costo effettivo dopo detrazione è di <strong>€ 2.400</strong>, che si recupera interamente in circa
                  7–8 anni grazie al risparmio in bolletta (€ 315–370/anno), considerando una casa con infissi pre-2000.
                </p>
              </div>

              {/* SEZIONE 11 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Quanto costa sostituire gli infissi: fasce di prezzo per materiale</h2>
              <p>
                I prezzi indicati includono la fornitura dell'infisso con vetrocamera basso emissivo + argon, la posa in
                opera professionale conforme UNI 11673-1 e lo smaltimento degli infissi vecchi. Non includono lavori murari
                aggiuntivi, ripresa di intonaci o davanzali.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-left p-3">Materiale e tipologia</th>
                      <th className="text-center p-3">Fascia bassa</th>
                      <th className="text-center p-3">Fascia media</th>
                      <th className="text-center p-3">Fascia alta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">PVC 3 camere (base)</td>
                      <td className="p-3 text-center text-green-700">€ 280 – 380</td>
                      <td className="p-3 text-center">€ 380 – 520</td>
                      <td className="p-3 text-center text-gray-500">—</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-medium">PVC 5-6 camere (alta efficienza)</td>
                      <td className="p-3 text-center text-green-700">€ 420 – 560</td>
                      <td className="p-3 text-center">€ 560 – 750</td>
                      <td className="p-3 text-center">€ 750 – 950</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Alluminio con taglio termico</td>
                      <td className="p-3 text-center">€ 500 – 680</td>
                      <td className="p-3 text-center">€ 680 – 900</td>
                      <td className="p-3 text-center">€ 900 – 1.300</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-medium">Legno-alluminio</td>
                      <td className="p-3 text-center">€ 700 – 950</td>
                      <td className="p-3 text-center">€ 950 – 1.400</td>
                      <td className="p-3 text-center">€ 1.400 – 2.200</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">PVC con triplo vetro</td>
                      <td className="p-3 text-center">€ 580 – 750</td>
                      <td className="p-3 text-center">€ 750 – 1.000</td>
                      <td className="p-3 text-center">€ 1.000 – 1.400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 font-medium">Porta finestra scorrevole alluminio</td>
                      <td className="p-3 text-center">€ 1.200 – 1.800</td>
                      <td className="p-3 text-center">€ 1.800 – 2.800</td>
                      <td className="p-3 text-center">€ 2.800 – 4.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic">
                * Prezzi per singola finestra standard (indicativamente 100×120 cm), fornitura + posa, IVA 10% inclusa.
                Per appartamenti con 6–10 finestre sono spesso disponibili sconti quantità del 10–20%.
              </p>

              {/* SEZIONE 12 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Case study: risparmio reale in due casi concreti</h2>

              <div className="grid sm:grid-cols-1 gap-6 my-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Case study 1 — Casa a Udine (zona climatica E)</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500 mb-1 font-medium">Abitazione</p>
                      <ul className="text-blue-900 space-y-1">
                        <li>• Villetta bifamiliare, 135 m², anno di costruzione 1978</li>
                        <li>• 10 finestre + 2 porte finestre, superficie tot. 18 m²</li>
                        <li>• Infissi originali: vetro singolo, telaio in legno deteriorato</li>
                        <li>• Riscaldamento: caldaia a gas a condensazione</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 font-medium">Intervento eseguito</p>
                      <ul className="text-blue-900 space-y-1">
                        <li>• 12 serramenti in PVC 5 camere</li>
                        <li>• Doppio vetro basso emissivo + argon (Ug 1,0)</li>
                        <li>• Uw medio: 1,1 W/m²K</li>
                        <li>• Posa certificata UNI 11673-1</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 mt-2">
                    <div className="bg-white rounded-lg p-3 text-center border border-blue-200">
                      <p className="text-xs text-gray-500">Costo intervento</p>
                      <p className="text-xl font-bold text-gray-800">€ 7.800</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-blue-200">
                      <p className="text-xs text-gray-500">Risparmio annuo bolletta</p>
                      <p className="text-xl font-bold text-green-700">€ 520 / anno</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-blue-200">
                      <p className="text-xs text-gray-500">Payback con detrazione 50%</p>
                      <p className="text-xl font-bold text-blue-700">~7,5 anni</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-800 mt-4">
                    La famiglia ha anche dichiarato un miglioramento significativo del comfort invernale: niente più correnti
                    fredde nelle stanze esposte a nord-est, e la formazione di condensa sulle finestre è completamente
                    scomparsa. La classe energetica è passata da F a D.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-lg font-bold text-amber-900 mb-3">Case study 2 — Appartamento a Padova (zona climatica E)</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500 mb-1 font-medium">Abitazione</p>
                      <ul className="text-amber-900 space-y-1">
                        <li>• Appartamento in condominio anni '90, 85 m², piano terzo</li>
                        <li>• 6 finestre + 1 porta finestra, superficie tot. 11 m²</li>
                        <li>• Infissi: doppio vetro anni '95, aria, Uw stimato 2,8 W/m²K</li>
                        <li>• Riscaldamento centralizzato (contabilizzato)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 font-medium">Intervento eseguito</p>
                      <ul className="text-amber-900 space-y-1">
                        <li>• 7 serramenti in alluminio taglio termico</li>
                        <li>• Doppio vetro basso emissivo + argon (Ug 1,1)</li>
                        <li>• Uw medio: 1,3 W/m²K</li>
                        <li>• Posa certificata UNI 11673-1</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 mt-2">
                    <div className="bg-white rounded-lg p-3 text-center border border-amber-200">
                      <p className="text-xs text-gray-500">Costo intervento</p>
                      <p className="text-xl font-bold text-gray-800">€ 5.600</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-amber-200">
                      <p className="text-xs text-gray-500">Risparmio annuo riscaldamento</p>
                      <p className="text-xl font-bold text-green-700">€ 240 / anno</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-amber-200">
                      <p className="text-xs text-gray-500">Payback con detrazione 50%</p>
                      <p className="text-xl font-bold text-amber-700">~11,7 anni</p>
                    </div>
                  </div>
                  <p className="text-sm text-amber-800 mt-4">
                    Il risparmio è minore rispetto alla villetta di Udine perché la partenza era da un doppio vetro (non
                    vetro singolo) e la superficie finestrata è inferiore. Tuttavia il beneficio principale è stato
                    l'isolamento acustico (Rw 38 dB) in una zona della città con traffico intenso, e l'eliminazione
                    totale della condensa che causava muffa sul davanzale della camera da letto.
                  </p>
                </div>
              </div>

              {/* SEZIONE 13 — CONCLUSIONI */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Conclusioni: vale davvero la pena cambiare le finestre nel 2026?</h2>
              <p>
                La risposta è <strong>sì, quasi sempre</strong> — ma con le dovute considerazioni. Se parti da infissi con
                vetro singolo o doppio vetro pre-2000, il risparmio in bolletta è concreto e misurabile: tra i <strong>300
                e i 520 euro l'anno</strong> per una casa unifamiliare nella zona E. Con la detrazione fiscale del 50%
                spalmata in 10 anni, il payback effettivo si attesta tra i <strong>7 e i 12 anni</strong>, a seconda della
                superficie finestrata e del punto di partenza.
              </p>
              <p>
                Ma il risparmio energetico non è l'unico vantaggio: gli infissi nuovi migliorano il <strong>comfort
                visivo e acustico</strong>, eliminano condensa e muffe, aumentano il <strong>valore dell'immobile</strong>
                e spesso sono prerequisiti per raggiungere le classi energetiche richieste dai nuovi regolamenti europei
                sulla prestazione energetica degli edifici (EPBD 2024).
              </p>
              <p>
                La chiave è scegliere il <strong>materiale giusto per le proprie esigenze</strong>, abbinato al giusto
                tipo di vetrocamera, e affidarsi a un <strong>installatore qualificato che garantisca la posa certificata
                UNI 11673-1</strong>. Senza una posa corretta, anche il miglior infisso del mondo perderà gran parte
                del suo potenziale.
              </p>
              <p>
                <strong>Renova Solution</strong> è il partner di riferimento in <strong>Friuli Venezia Giulia e Veneto</strong>
                per la sostituzione di infissi con installatori certificati e consulenti energetici. Offriamo un sopralluogo
                gratuito con analisi termica delle dispersioni esistenti e un preventivo dettagliato con simulazione del
                risparmio atteso. Contattaci oggi stesso!
              </p>

              <div className="bg-[#C8E600] rounded-xl p-6 mt-8 text-center">
                <h4 className="text-xl font-bold text-black mb-2">Richiedi un sopralluogo gratuito</h4>
                <p className="text-gray-800 mb-4">
                  Analizziamo i tuoi infissi, calcoliamo il risparmio reale e ti prepariamo un preventivo personalizzato
                  con gestione completa della pratica per la detrazione fiscale 50%.
                </p>
                <Link
                  to="/contatti"
                  className="inline-block bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Contattaci ora
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Tag</h4>
              <div className="flex flex-wrap gap-2">
                {['risparmio energetico', 'infissi', 'sostituzione finestre', 'trasmittanza termica', 'detrazione 50%', 'classe energetica', 'PVC', 'posa certificata'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Articoli correlati</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/blog/finestre-pvc-alluminio-legno-2026"
                  className="group block bg-gray-50 rounded-xl p-5 hover:bg-[#C8E600]/10 transition-colors border border-gray-200 hover:border-[#C8E600]"
                >
                  <span className="text-xs font-bold text-[#C8E600] uppercase mb-2 block">Infissi</span>
                  <h5 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 leading-snug">
                    Finestre PVC, alluminio o legno 2026: guida definitiva alla scelta
                  </h5>
                  <span className="text-xs text-gray-500 mt-2 block">Leggi l'articolo →</span>
                </Link>
                <Link
                  to="/blog/detrazioni-fiscali-2026"
                  className="group block bg-gray-50 rounded-xl p-5 hover:bg-[#C8E600]/10 transition-colors border border-gray-200 hover:border-[#C8E600]"
                >
                  <span className="text-xs font-bold text-[#C8E600] uppercase mb-2 block">Fisco</span>
                  <h5 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 leading-snug">
                    Detrazioni fiscali 2026: guida completa agli incentivi per la casa
                  </h5>
                  <span className="text-xs text-gray-500 mt-2 block">Leggi l'articolo →</span>
                </Link>
                <Link
                  to="/blog/cappotto-termico-risparmio-2026"
                  className="group block bg-gray-50 rounded-xl p-5 hover:bg-[#C8E600]/10 transition-colors border border-gray-200 hover:border-[#C8E600]"
                >
                  <span className="text-xs font-bold text-[#C8E600] uppercase mb-2 block">Ristrutturazioni</span>
                  <h5 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 leading-snug">
                    Cappotto termico: quanto si risparmia davvero nel 2026
                  </h5>
                  <span className="text-xs text-gray-500 mt-2 block">Leggi l'articolo →</span>
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
