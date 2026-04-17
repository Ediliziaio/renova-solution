import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormPreventivo from '../components/FormPreventivo';
import SEO, { serviceSchema } from '../components/SEO';
import { progetti } from '../components/GalleriaLavori';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import type { Progetto } from '../components/GalleriaLavori';

const categorieLabel: Record<string, string> = {
  tutti: 'Tutti i lavori',
  infissi: 'Infissi e Serramenti',
  fotovoltaico: 'Fotovoltaico',
  ristrutturazioni: 'Ristrutturazioni',
  climatizzazione: 'Climatizzazione',
};

const categorieColori: Record<string, string> = {
  infissi: 'bg-blue-100 text-blue-800',
  fotovoltaico: 'bg-yellow-100 text-yellow-800',
  ristrutturazioni: 'bg-orange-100 text-orange-800',
  climatizzazione: 'bg-green-100 text-green-800',
};

export default function Progetti() {
  const [categoriaAttiva, setCategoriaAttiva] = useState('tutti');
  const [lightbox, setLightbox] = useState<{ progetto: Progetto; indice: number } | null>(null);

  const progettiFiltrati = progetti.filter(
    p => categoriaAttiva === 'tutti' || p.categoria === categoriaAttiva
  );

  const stats = {
    totale: 3000,
    infissi: 1200,
    fotovoltaico: 800,
    ristrutturazioni: 1000,
  };

  const apriLightbox = (progetto: Progetto, indice: number) => {
    setLightbox({ progetto, indice });
  };

  const chiudiLightbox = () => setLightbox(null);

  const navigaLightbox = (direzione: number) => {
    if (!lightbox) return;
    const nuovoIndice = (lightbox.indice + direzione + lightbox.progetto.immagini.length) % lightbox.progetto.immagini.length;
    setLightbox({ ...lightbox, indice: nuovoIndice });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Progetti e Lavori Realizzati | Renova Solution"
        description="Scopri i progetti e i lavori realizzati da Renova Solution in Friuli Venezia Giulia e Veneto: installazioni fotovoltaiche, sostituzione infissi, ristrutturazioni complete. Foto reali dei nostri interventi."
        keywords="progetti fotovoltaico, lavori infissi, ristrutturazioni friuli, installazioni fotovoltaico veneto, portfolio lavori edili, foto installazioni"
        canonical="https://www.renovasolution.it/progetti"
        ogImage="/images/fotovoltaico-casa.jpg"
        schema={[serviceSchema('Progetti e Lavori', 'Portfolio dei lavori realizzati da Renova Solution', 'https://www.renovasolution.it/progetti')]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[450px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/progetti/fotovoltaico-casa-1.jpg"
            alt="Progetti e lavori realizzati da Renova Solution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Progetti</li>
            </ol>
          </nav>
          <span className="inline-block bg-[#C8E600] text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
            Portfolio lavori
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Progetti e lavori realizzati
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Le nostre installazioni parlano per noi. Scopri i lavori realizzati per i clienti
            in Friuli Venezia Giulia e Veneto.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#C8E600]">{stats.totale}+</div>
              <div className="text-sm text-white/70 mt-1">Progetti completati</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C8E600]">{stats.fotovoltaico}</div>
              <div className="text-sm text-white/70 mt-1">Impianti fotovoltaici</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C8E600]">{stats.infissi}</div>
              <div className="text-sm text-white/70 mt-1">Installazioni infissi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C8E600]">{stats.ristrutturazioni}</div>
              <div className="text-sm text-white/70 mt-1">Ristrutturazioni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtri */}
      <section className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(categorieLabel).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCategoriaAttiva(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoriaAttiva === key
                    ? 'bg-[#C8E600] text-black'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Griglia progetti */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {progettiFiltrati.map(progetto => (
              <div
                key={progetto.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100"
              >
                <div
                  className="relative h-64 cursor-pointer overflow-hidden"
                  onClick={() => apriLightbox(progetto, 0)}
                >
                  <img
                    src={progetto.immagini[0]}
                    alt={progetto.titolo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                      <span className="text-white text-sm font-medium">Clicca per ingrandire</span>
                      {progetto.immagini.length > 1 && (
                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                          {progetto.immagini.length} foto
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categorieColori[progetto.categoria]}`}>
                      {categorieLabel[progetto.categoria]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {progetto.localita}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {progetto.anno}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{progetto.titolo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{progetto.descrizione}</p>
                </div>
              </div>
            ))}
          </div>

          {progettiFiltrati.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Nessun progetto trovato per questa categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vuoi vedere il tuo progetto qui?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contattaci per un sopralluogo gratuito. Ti proporremo la soluzione migliore per la tua casa
            o la tua azienda, con preventivo chiaro e dettagliato.
          </p>
          <Link
            to="/contatti"
            className="inline-block bg-[#C8E600] text-black px-8 py-3 rounded-full font-bold hover:bg-[#b3cc00] transition-colors"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>

      <FormPreventivo />
      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={chiudiLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#C8E600] transition-colors z-10"
            onClick={chiudiLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {lightbox.progetto.immagini.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C8E600] transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigaLightbox(-1); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C8E600] transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigaLightbox(1); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.progetto.immagini[lightbox.indice]}
              alt={`${lightbox.progetto.titolo} - foto ${lightbox.indice + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-lg">{lightbox.progetto.titolo}</h3>
              <p className="text-white/70 text-sm mt-1">
                {lightbox.progetto.localita} — {lightbox.progetto.anno}
              </p>
              <p className="text-white/50 text-sm mt-2 max-w-xl mx-auto">
                {lightbox.progetto.descrizione}
              </p>
              {lightbox.progetto.immagini.length > 1 && (
                <p className="text-white/40 text-xs mt-3">
                  {lightbox.indice + 1} / {lightbox.progetto.immagini.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
