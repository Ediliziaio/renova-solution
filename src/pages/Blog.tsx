import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

interface Articolo {
  id: number;
  titolo: string;
  excerpt: string;
  categoria: string;
  data: string;
  dataISO: string;
  lettura: string;
  autore: string;
  immagine: string;
  slug: string;
  keywords: string[];
}

export default function Blog() {
  const articoli: Articolo[] = [
    {
      id: 1,
      titolo: 'Detrazioni fiscali 2026: guida completa a Ecobonus, Superbonus e detrazioni ristrutturazioni',
      excerpt: 'Guida completa alle detrazioni fiscali per il 2026: scopri come usufruire del 50% per ristrutturazioni ed efficientamento energetico su abitazione principale. Tutte le novità e i requisiti aggiornati.',
      categoria: 'Fisco',
      data: '15 Marzo 2026',
      dataISO: '2026-03-15',
      lettura: '8 min',
      autore: 'Renova Team',
      immagine: '/images/team.jpg',
      slug: 'detrazioni-fiscali-2026',
      keywords: ['detrazioni fiscali 2026', 'Ecobonus 2026', 'Superbonus', 'fotovoltaico detrazione', 'ristrutturazione detrazione']
    },
    {
      id: 2,
      titolo: 'Fotovoltaico con accumulo 2026: conviene davvero? Analisi costi-benefici aggiornata',
      excerpt: 'Analisi approfondita delle batterie di accumulo per impianti fotovoltaici nel 2026. Quanto si risparmia, tempi di ripiego dell\'investimento, migliori batterie sul mercato e consigli pratici.',
      categoria: 'Fotovoltaico',
      data: '10 Marzo 2026',
      dataISO: '2026-03-10',
      lettura: '10 min',
      autore: 'Marco Bianchi',
      immagine: '/images/batteria-accumulo.jpg',
      slug: 'fotovoltaico-accumulo-2026',
      keywords: ['fotovoltaico accumulo 2026', 'batterie fotovoltaico', 'accumulo energia', 'costi fotovoltaico', 'risparmio energetico']
    },
    {
      id: 3,
      titolo: 'Pompa di calore vs caldaia a gas 2026: quale scegliere? Guida completa',
      excerpt: 'Confronto dettagliato tra pompe di calore e caldaie a gas nel 2026: costi di installazione, consumi, manutenzione, risparmio energetico e impatto ambientale. Guida definitiva alla scelta.',
      categoria: 'Riscaldamento',
      data: '5 Marzo 2026',
      dataISO: '2026-03-05',
      lettura: '9 min',
      autore: 'Renova Team',
      immagine: '/images/climatizzazione.jpg',
      slug: 'pompa-calore-vs-caldaia-2026',
      keywords: ['pompa di calore 2026', 'caldaia a gas', 'riscaldamento casa', 'condizionamento', 'risparmio energetico']
    },
    {
      id: 4,
      titolo: 'Finestre PVC, alluminio o legno 2026: guida definitiva alla scelta',
      excerpt: 'Confronto completo tra PVC, alluminio e legno per infissi nel 2026: pro e contro, costi, isolamento termico, manutenzione e durata. Quale materiale scegliere per la tua casa.',
      categoria: 'Infissi',
      data: '28 Febbraio 2026',
      dataISO: '2026-02-28',
      lettura: '11 min',
      autore: 'Laura Rossi',
      immagine: '/images/confronto-finestre.jpg',
      slug: 'finestre-pvc-alluminio-legno-2026',
      keywords: ['finestre PVC 2026', 'finestre alluminio', 'finestre legno', 'infissi casa', 'isolamento termico']
    },
    {
      id: 5,
      titolo: 'Cappotto termico 2026: quanto si risparmia in bolletta? Dati reali e calcoli',
      excerpt: 'Analisi dettagliata dei risparmi reali ottenibili con il cappotto termico nel 2026. Dati sui consumi prima e dopo l\'intervento in diverse zone climatiche italiane. Calcolo del risparmio annuo.',
      categoria: 'Ristrutturazione',
      data: '20 Febbraio 2026',
      dataISO: '2026-02-20',
      lettura: '8 min',
      autore: 'Renova Team',
      immagine: '/images/cappotto.jpg',
      slug: 'cappotto-termico-risparmio-2026',
      keywords: ['cappotto termico 2026', 'isolamento casa', 'risparmio bolletta', 'efficienza energetica', 'coibentazione']
    },
    {
      id: 6,
      titolo: 'Manutenzione impianto fotovoltaico 2026: guida pratica completa',
      excerpt: 'Guida completa alla manutenzione dell\'impianto fotovoltaico nel 2026: pulizia pannelli, controllo inverter, costi degli interventi e frequenza consigliata per massimizzare la produzione.',
      categoria: 'Manutenzione',
      data: '12 Febbraio 2026',
      dataISO: '2026-02-12',
      lettura: '7 min',
      autore: 'Marco Bianchi',
      immagine: '/images/manutenzione.jpg',
      slug: 'manutenzione-fotovoltaico-2026',
      keywords: ['manutenzione fotovoltaico 2026', 'pulizia pannelli', 'inverter fotovoltaico', 'impianto fotovoltaico', 'manutenzione pannelli']
    },
    {
      id: 7,
      titolo: 'Infissi e risparmio energetico: quanto si risparmia davvero cambiando le finestre nel 2026',
      excerpt: 'Analisi dettagliata del risparmio reale ottenibile con la sostituzione degli infissi. Dati su trasmittanza termica, confronto materiali, vetri e case study con calcoli concreti su bollette prima e dopo.',
      categoria: 'Infissi',
      data: '8 Aprile 2026',
      dataISO: '2026-04-08',
      lettura: '14 min',
      autore: 'Renova Team',
      immagine: '/images/confronto-finestre.jpg',
      slug: 'infissi-risparmio-energetico-2026',
      keywords: ['risparmio energetico infissi', 'cambiare finestre risparmio', 'sostituzione infissi costo', 'infissi risparmio bolletta', 'trasmittanza termica infissi']
    },
    {
      id: 8,
      titolo: 'Conto Termico 3.0 nel 2026: come funziona, chi può accedere e quanto si risparmia',
      excerpt: 'Guida completa al Conto Termico 3.0: interventi ammessi, importi, tempistiche di erogazione, procedura di domanda al GSE e confronto con l\'Ecobonus. Tutto quello che serve sapere nel 2026.',
      categoria: 'Fisco',
      data: '2 Aprile 2026',
      dataISO: '2026-04-02',
      lettura: '12 min',
      autore: 'Renova Team',
      immagine: '/images/climatizzazione.jpg',
      slug: 'conto-termico-3-2026',
      keywords: ['conto termico 3.0 2026', 'incentivi pompe di calore', 'conto termico come funziona', 'conto termico requisiti', 'incentivi riscaldamento 2026']
    },
    {
      id: 9,
      titolo: 'Ristrutturazione completa della casa nel 2026: costi, tempi, bonus fiscali e consigli pratici',
      excerpt: 'Guida pratica alla ristrutturazione completa: costi al metro quadro, cronoprogramma reale, pratiche edilizie, bonus fiscali aggiornati al 2026 e consigli per evitare errori costosi.',
      categoria: 'Ristrutturazione',
      data: '25 Marzo 2026',
      dataISO: '2026-03-25',
      lettura: '15 min',
      autore: 'Renova Team',
      immagine: '/images/ristrutturazione.jpg',
      slug: 'ristrutturazione-completa-casa-2026',
      keywords: ['ristrutturazione completa casa 2026', 'costo ristrutturazione al mq', 'ristrutturazione appartamento costi', 'tempi ristrutturazione', 'bonus ristrutturazione 2026']
    },
    {
      id: 10,
      titolo: 'Fotovoltaico per aziende nel 2026: ROI, incentivi e vantaggi fiscali per le imprese',
      excerpt: 'Analisi approfondita del fotovoltaico aziendale: dimensionamento impianto, costi per taglia, calcolo ROI reale, incentivi disponibili, Comunità Energetiche e case study concreti.',
      categoria: 'Fotovoltaico',
      data: '18 Marzo 2026',
      dataISO: '2026-03-18',
      lettura: '13 min',
      autore: 'Marco Bianchi',
      immagine: '/images/fotovoltaico-azienda.jpg',
      slug: 'fotovoltaico-aziende-2026',
      keywords: ['fotovoltaico aziende 2026', 'impianto fotovoltaico industriale', 'fotovoltaico capannone', 'ROI fotovoltaico aziendale', 'autoconsumo fotovoltaico']
    },
    {
      id: 11,
      titolo: 'Classe energetica della casa: cos\'è, come migliorarla e quanto vale nel 2026',
      excerpt: 'Tutto sulla classe energetica: dalle classi A4-G all\'APE, la Direttiva Case Green, come migliorare la classe con interventi mirati e quanto incide sul valore dell\'immobile.',
      categoria: 'Ristrutturazione',
      data: '1 Marzo 2026',
      dataISO: '2026-03-01',
      lettura: '12 min',
      autore: 'Laura Rossi',
      immagine: '/images/ristrutturazione.jpg',
      slug: 'classe-energetica-casa-2026',
      keywords: ['classe energetica casa', 'APE attestato prestazione energetica', 'migliorare classe energetica', 'direttiva case green', 'certificazione energetica']
    },
    {
      id: 12,
      titolo: 'Umidità, condensa e muffa in casa: cause, soluzioni e come eliminare il problema definitivamente',
      excerpt: 'Guida completa per capire le cause di umidità, condensa e muffa nelle case del Friuli e Veneto. Soluzioni definitive con infissi moderni, cappotto termico, VMC e interventi mirati.',
      categoria: 'Infissi',
      data: '15 Febbraio 2026',
      dataISO: '2026-02-15',
      lettura: '11 min',
      autore: 'Renova Team',
      immagine: '/images/muffa-umidita.jpg',
      slug: 'umidita-condensa-muffa-soluzioni-2026',
      keywords: ['condensa finestre', 'muffa casa cause', 'umidità pareti soluzioni', 'condensa vetri finestre', 'eliminare condensa infissi']
    }
  ];

  const categorie = [
    { name: 'Tutti', slug: 'tutti', count: 12 },
    { name: 'Fotovoltaico', slug: 'fotovoltaico', count: 3 },
    { name: 'Ristrutturazione', slug: 'ristrutturazione', count: 3 },
    { name: 'Infissi', slug: 'infissi', count: 3 },
    { name: 'Fisco', slug: 'fisco', count: 2 },
    { name: 'Riscaldamento', slug: 'riscaldamento', count: 1 },
    { name: 'Manutenzione', slug: 'manutenzione', count: 1 }
  ];

  const articoliInEvidenza = articoli.slice(0, 2);
  const altriArticoli = articoli.slice(2);

  // Schema.org Blog structured data
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Renova Solution',
    description: 'Guide e consigli su fotovoltaico, infissi, ristrutturazioni e agevolazioni fiscali in Friuli Venezia Giulia e Veneto.',
    url: 'https://www.renovasolution.it/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Renova Solution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.renovasolution.it/logo.png'
      }
    }
  };

  // Schema.org Article structured data for featured articles
  const articlesSchema = articoli.map(articolo => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articolo.titolo,
    description: articolo.excerpt,
    image: articolo.immagine,
    datePublished: articolo.dataISO,
    dateModified: articolo.dataISO,
    author: {
      '@type': articolo.autore === 'Renova Team' ? 'Organization' : 'Person',
      name: articolo.autore
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
      '@id': `https://www.renovasolution.it/blog/${articolo.slug}`
    },
    keywords: articolo.keywords.join(', '),
    articleSection: articolo.categoria
  }));

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.renovasolution.it/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.renovasolution.it/blog'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Blog 2026 | Guide e Consigli su Fotovoltaico, Infissi e Ristrutturazioni | Renova Solution"
        description="Scopri le ultime novità 2026 su fotovoltaico, infissi, ristrutturazioni e agevolazioni fiscali in Friuli Venezia Giulia e Veneto. Guide pratiche, consigli degli esperti e aggiornamenti."
        keywords="blog fotovoltaico 2026, guide ristrutturazioni, consigli infissi, detrazioni fiscali 2026, agevolazioni casa, Ecobonus, Superbonus, risparmio energetico, fotovoltaico Friuli, ristrutturazione Veneto"
        ogType="website"
        canonical="https://www.renovasolution.it/blog"
        ogImage="/images/team.jpg"
      />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(articlesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[300px] md:min-h-[380px] flex items-center bg-gray-900" aria-label="Intestazione blog">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/images/hero-home.jpg" 
              alt="Blog Renova Solution - Guide e consigli" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-sm text-white/60">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white">Blog</li>
                </ol>
              </nav>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-[#C8E600] text-black text-xs font-bold px-3 py-1.5 rounded-full mb-4"
              >
                Guide e consigli 2026
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Il blog di Renova Solution
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-base md:text-lg"
              >
                Guide pratiche, consigli degli esperti e aggiornamenti 2026 su agevolazioni fiscali, 
                tecnologie e tendenze del settore energetico ed edile in Friuli Venezia Giulia e Veneto.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Categorie */}
        <section className="py-6 bg-gray-50 border-b border-gray-200" aria-label="Categorie articoli">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categorie.map((cat, i) => (
                <button
                  key={cat.slug}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0 
                      ? 'bg-[#C8E600] text-black' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  aria-label={`Filtra per categoria ${cat.name}`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articoli in Evidenza */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="articoli-evidenza">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 id="articoli-evidenza" className="text-2xl font-bold">In evidenza</h2>
              <Link to="/blog" className="text-sm font-medium text-[#C8E600] hover:underline flex items-center gap-1">
                Tutti gli articoli <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {articoliInEvidenza.map((art, i) => (
                <motion.article
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <meta itemProp="headline" content={art.titolo} />
                  <meta itemProp="description" content={art.excerpt} />
                  <meta itemProp="datePublished" content={art.dataISO} />
                  <meta itemProp="author" content={art.autore} />
                  <link itemProp="image" href={art.immagine} />
                  
                  <Link to={`/blog/${art.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img 
                        src={art.immagine} 
                        alt={art.titolo}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#C8E600] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {art.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1" itemProp="datePublished">
                        <Calendar className="w-4 h-4" /> {art.data}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {art.lettura}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" /> {art.autore}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#C8E600] transition-colors" itemProp="headline">
                      {art.titolo}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2" itemProp="description">
                      {art.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C8E600]">
                      Leggi l'articolo <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Altri Articoli */}
        <section className="py-16 md:py-20 bg-gray-50" aria-labelledby="ultimi-articoli">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="ultimi-articoli" className="text-2xl font-bold mb-8">Ultimi articoli</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {altriArticoli.map((art, i) => (
                <motion.article
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <meta itemProp="headline" content={art.titolo} />
                  <meta itemProp="description" content={art.excerpt} />
                  <meta itemProp="datePublished" content={art.dataISO} />
                  <meta itemProp="author" content={art.autore} />
                  <link itemProp="image" href={art.immagine} />
                  
                  <Link to={`/blog/${art.slug}`} className="block">
                    <div className="relative overflow-hidden">
                      <img 
                        src={art.immagine} 
                        alt={art.titolo}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#C8E600] text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {art.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1" itemProp="datePublished">
                          <Calendar className="w-3 h-3" /> {art.data}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {art.lettura}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-[#C8E600] transition-colors line-clamp-2" itemProp="headline">
                        {art.titolo}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4" itemProp="description">
                        {art.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C8E600]">
                        Leggi <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button 
                className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
                aria-label="Carica più articoli"
              >
                Carica altri articoli
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-20 bg-[#C8E600]" aria-labelledby="newsletter-title">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="newsletter-title" className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Resta aggiornato sulle novità 2026
            </h2>
            <p className="text-black/70 mb-6">
              Iscriviti alla nostra newsletter per ricevere guide, consigli e aggiornamenti 
              su agevolazioni fiscali e nuove tecnologie per la tua casa.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-newsletter" className="sr-only">Indirizzo email</label>
              <input
                id="email-newsletter"
                type="email"
                placeholder="La tua email"
                className="flex-1 px-5 py-3 rounded-full border-0 focus:ring-2 focus:ring-black outline-none"
                aria-required="true"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
              >
                Iscriviti
              </button>
            </form>
            <p className="text-black/50 text-xs mt-4">
              Ricevi una email al mese. Puoi disiscriverti in qualsiasi momento. 
              <Link to="/privacy" className="underline hover:text-black">Privacy Policy</Link>
            </p>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-12 bg-white border-t border-gray-100" aria-labelledby="seo-content">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="seo-content" className="text-xl font-bold mb-4">Guide e consigli 2026 per la tua casa</h2>
            <div className="prose prose-gray max-w-none text-gray-600 text-sm">
              <p className="mb-4">
                Benvenuto nel blog di <strong>Renova Solution</strong>, il tuo punto di riferimento per guide pratiche e consigli 
                su <strong>fotovoltaico</strong>, <strong>infissi</strong>, <strong>ristrutturazioni</strong> e <strong>agevolazioni fiscali 2026</strong> 
                in <strong>Friuli Venezia Giulia</strong> e <strong>Veneto</strong>. Il nostro team di esperti condivide con te le ultime 
                novità sul settore energetico ed edile, aiutandoti a prendere decisioni informate per migliorare l'efficienza 
                energetica della tua casa e ridurre i costi in bolletta.
              </p>
              <p className="mb-4">
                Scopri tutto sulle <strong>detrazioni fiscali 2026</strong>: dall'<strong>Ecobonus</strong> al <strong>Superbonus</strong>, 
                passando per le detrazioni per il <strong>fotovoltaico</strong> (65-70%) e le <strong>ristrutturazioni</strong> (50%). 
                Ti spieghiamo come funzionano, chi ne ha diritto e come richiederle, con guide aggiornate alle ultime normative.
              </p>
              <p>
                Approfondisci le tecnologie per il risparmio energetico: dalle <strong>pompe di calore</strong> alle 
                <strong> batterie di accumulo</strong> per fotovoltaico, dal <strong>cappotto termico</strong> ai migliori 
                <strong> infissi in PVC, alluminio e legno</strong>. Ogni articolo è pensato per offrirti informazioni 
                pratiche e verificabili, basate sull'esperienza diretta nel campo delle ristrutturazioni e degli 
                impianti energetici.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
