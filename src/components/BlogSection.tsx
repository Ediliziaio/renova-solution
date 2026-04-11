import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  const articles = [
    {
      image: '/images/batteria-accumulo.jpg',
      category: 'Fotovoltaico',
      title: 'Quando conviene il fotovoltaico con accumulo?',
      date: '25 Marzo 2026',
      excerpt: 'Il fotovoltaico con batteria è quasi sempre conveniente. Scopri perché e quanto puoi risparmiare.',
      slug: '/blog/fotovoltaico-accumulo-2026',
    },
    {
      image: '/images/fotovoltaico.jpg',
      category: 'Detrazioni',
      title: 'Detrazione 50% fotovoltaico: come funziona nel 2026',
      date: '18 Marzo 2026',
      excerpt: 'Tutto quello che devi sapere per sfruttare la detrazione fiscale sul fotovoltaico.',
      slug: '/blog/detrazioni-fiscali-2026',
    },
    {
      image: '/images/climatizzazione.jpg',
      category: 'Pompe di calore',
      title: 'Pompa di calore: consumi reali e risparmio',
      date: '10 Marzo 2026',
      excerpt: 'Quanto consuma una pompa di calore? Ecco i dati reali dopo un anno di utilizzo.',
      slug: '/blog/pompa-calore-vs-caldaia-2026',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
              Blog
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Consigli e guide
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 max-w-xl">
              Approfondimenti sul fotovoltaico, detrazioni fiscali e ristrutturazioni in Veneto e Friuli.
            </p>
          </div>
          <Link 
            to="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#C8E600] transition-colors"
          >
            Vedi tutti gli articoli <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {articles.map((article, i) => (
            <article 
              key={i} 
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#C8E600] text-black text-xs font-bold px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2 md:mb-3">
                  <Calendar size={12} />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="font-bold text-base md:text-lg mb-2 line-clamp-2 group-hover:text-[#C8E600] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-3 md:mb-4">
                  {article.excerpt}
                </p>
                
                <Link 
                  to={article.slug}
                  className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 group-hover:text-[#C8E600] transition-colors"
                >
                  Leggi <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 md:mt-8 text-center sm:hidden">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900"
          >
            Vedi tutti gli articoli <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
