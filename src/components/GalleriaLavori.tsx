import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface Progetto {
  id: number;
  titolo: string;
  descrizione: string;
  categoria: 'infissi' | 'fotovoltaico' | 'ristrutturazioni' | 'climatizzazione';
  immagini: string[];
  localita: string;
  anno: string;
}

// Dati progetti — per aggiungere nuovi lavori basta aggiungere oggetti a questo array
// e inserire le foto nella cartella /public/images/progetti/
export const progetti: Progetto[] = [
  {
    id: 1,
    titolo: 'Sostituzione infissi villa bifamiliare',
    descrizione: 'Installazione di 12 finestre in PVC a 7 camere con triplo vetro e persiane in alluminio. Eliminata condensa e ridotto il rumore stradale del 70%.',
    categoria: 'infissi',
    immagini: ['/images/confronto-finestre.jpg', '/images/confronto-finestre.jpg'],
    localita: 'Udine',
    anno: '2026',
  },
  {
    id: 2,
    titolo: 'Impianto fotovoltaico 6kW con accumulo',
    descrizione: 'Impianto fotovoltaico SunPower da 6kW con batteria Tesla Powerwall da 13,5kWh su villetta. Autoconsumo al 85%, bolletta ridotta del 90%.',
    categoria: 'fotovoltaico',
    immagini: ['/images/fotovoltaico-casa.jpg', '/images/batteria-accumulo.jpg'],
    localita: 'Treviso',
    anno: '2026',
  },
  {
    id: 3,
    titolo: 'Ristrutturazione completa appartamento 95mq',
    descrizione: 'Ristrutturazione chiavi in mano: demolizioni, impianti, pavimenti, bagni, cucina e tinteggiatura. Consegnato in 75 giorni.',
    categoria: 'ristrutturazioni',
    immagini: ['/images/ristrutturazione.jpg', '/images/ristrutturazione.jpg'],
    localita: 'Padova',
    anno: '2025',
  },
  {
    id: 4,
    titolo: 'Finestre in legno-alluminio centro storico',
    descrizione: 'Sostituzione di 8 finestre in legno-alluminio con vetro basso-emissivo in edificio vincolato. Approvazione Soprintendenza e posa certificata.',
    categoria: 'infissi',
    immagini: ['/images/confronto-finestre.jpg', '/images/confronto-finestre.jpg'],
    localita: 'Trieste',
    anno: '2025',
  },
  {
    id: 5,
    titolo: 'Impianto fotovoltaico industriale 100kW',
    descrizione: 'Impianto fotovoltaico su capannone industriale da 100kW. Produzione annua di 115.000 kWh, risparmio di 28.000€/anno in bolletta.',
    categoria: 'fotovoltaico',
    immagini: ['/images/fotovoltaico-azienda.jpg', '/images/fotovoltaico-azienda.jpg'],
    localita: 'Pordenone',
    anno: '2025',
  },
  {
    id: 6,
    titolo: 'Cappotto termico condominio 16 unità',
    descrizione: 'Isolamento esterno con EPS da 12cm su condominio. Classe energetica da F a C, risparmio medio del 40% in bolletta per ogni famiglia.',
    categoria: 'ristrutturazioni',
    immagini: ['/images/cappotto.jpg', '/images/cappotto.jpg'],
    localita: 'Venezia',
    anno: '2024',
  },
  {
    id: 7,
    titolo: 'Impianto fotovoltaico 4,5kW con pompa di calore',
    descrizione: 'Sistema integrato fotovoltaico + pompa di calore Daikin per riscaldamento, raffrescamento e acqua calda sanitaria. Autonomia energetica quasi totale.',
    categoria: 'fotovoltaico',
    immagini: ['/images/fotovoltaico-casa.jpg', '/images/climatizzazione.jpg'],
    localita: 'Vicenza',
    anno: '2026',
  },
  {
    id: 8,
    titolo: 'Serramenti alluminio a taglio termico',
    descrizione: 'Installazione di 6 grandi vetrate scorrevoli in alluminio a taglio termico per una villa moderna. Profili slim, massima luminosità.',
    categoria: 'infissi',
    immagini: ['/images/confronto-finestre.jpg', '/images/confronto-finestre.jpg'],
    localita: 'Verona',
    anno: '2026',
  },
];

const categorieLabel: Record<string, string> = {
  tutti: 'Tutti i lavori',
  infissi: 'Infissi',
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

interface GalleriaLavoriProps {
  filtroCategoria?: 'infissi' | 'fotovoltaico' | 'ristrutturazioni' | 'climatizzazione';
  mostraTitolo?: boolean;
  maxProgetti?: number;
  mostraLinkCompleto?: boolean;
}

export default function GalleriaLavori({
  filtroCategoria,
  mostraTitolo = true,
  maxProgetti,
  mostraLinkCompleto = true
}: GalleriaLavoriProps) {
  const [categoriaAttiva, setCategoriaAttiva] = useState<string>(filtroCategoria || 'tutti');
  const [lightbox, setLightbox] = useState<{ progetto: Progetto; indice: number } | null>(null);

  const progettiFiltrati = progetti
    .filter(p => categoriaAttiva === 'tutti' || p.categoria === categoriaAttiva)
    .slice(0, maxProgetti);

  const categorieFiltro = filtroCategoria
    ? null
    : ['tutti', 'infissi', 'fotovoltaico', 'ristrutturazioni'];

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {mostraTitolo && (
          <div className="text-center mb-10">
            <span className="text-[#C8E600] text-xs font-bold uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              I nostri lavori
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scopri alcuni dei progetti realizzati per i nostri clienti in Friuli Venezia Giulia e Veneto.
              Ogni lavoro è documentato con foto reali delle installazioni.
            </p>
          </div>
        )}

        {/* Filtri categoria */}
        {categorieFiltro && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categorieFiltro.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaAttiva(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoriaAttiva === cat
                    ? 'bg-[#C8E600] text-black'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {categorieLabel[cat]}
              </button>
            ))}
          </div>
        )}

        {/* Griglia progetti */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progettiFiltrati.map(progetto => (
            <div
              key={progetto.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div
                className="relative h-56 cursor-pointer overflow-hidden"
                onClick={() => apriLightbox(progetto, 0)}
              >
                <img
                  src={progetto.immagini[0]}
                  alt={progetto.titolo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categorieColori[progetto.categoria]}`}>
                    {categorieLabel[progetto.categoria]}
                  </span>
                </div>
                {progetto.immagini.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {progetto.immagini.length} foto
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>{progetto.localita}</span>
                  <span>•</span>
                  <span>{progetto.anno}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{progetto.titolo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{progetto.descrizione}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link a pagina completa */}
        {mostraLinkCompleto && (
          <div className="text-center mt-10">
            <Link
              to="/progetti"
              className="inline-flex items-center gap-2 bg-[#C8E600] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b3cc00] transition-colors"
            >
              Vedi tutti i progetti <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

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

          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.progetto.immagini[lightbox.indice]}
              alt={`${lightbox.progetto.titolo} - foto ${lightbox.indice + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-lg">{lightbox.progetto.titolo}</h3>
              <p className="text-white/70 text-sm mt-1">{lightbox.progetto.localita} — {lightbox.progetto.anno}</p>
              {lightbox.progetto.immagini.length > 1 && (
                <p className="text-white/50 text-xs mt-2">
                  {lightbox.indice + 1} / {lightbox.progetto.immagini.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
