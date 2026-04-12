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
    immagini: ['/images/infissi.jpg'],
    localita: 'Udine',
    anno: '2026',
  },
  {
    id: 2,
    titolo: 'Impianto fotovoltaico 6kW con accumulo',
    descrizione: 'Impianto fotovoltaico SunPower da 6kW con batteria Tesla Powerwall da 13,5kWh su villetta. Autoconsumo al 85%, bolletta ridotta del 90%.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-casa-1.jpg', '/images/progetti/fotovoltaico-casa-2.jpg'],
    localita: 'Treviso',
    anno: '2026',
  },
  {
    id: 3,
    titolo: 'Ristrutturazione completa appartamento 95mq',
    descrizione: 'Ristrutturazione chiavi in mano: demolizioni, impianti, pavimenti, bagni, cucina e tinteggiatura. Consegnato in 75 giorni.',
    categoria: 'ristrutturazioni',
    immagini: ['/images/ristrutturazioni.jpg'],
    localita: 'Padova',
    anno: '2025',
  },
  {
    id: 5,
    titolo: 'Impianto fotovoltaico industriale 100kW',
    descrizione: 'Impianto fotovoltaico su capannone industriale da 100kW. Produzione annua di 115.000 kWh, risparmio di 28.000€/anno in bolletta.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-industriale-1.jpg'],
    localita: 'Pordenone',
    anno: '2025',
  },
  {
    id: 6,
    titolo: 'Cappotto termico condominio 16 unità',
    descrizione: 'Isolamento esterno con EPS da 12cm su condominio. Classe energetica da F a C, risparmio medio del 40% in bolletta per ogni famiglia.',
    categoria: 'ristrutturazioni',
    immagini: ['/images/cappotto.jpg'],
    localita: 'Venezia',
    anno: '2024',
  },
  {
    id: 7,
    titolo: 'Impianto fotovoltaico 4,5kW con pompa di calore',
    descrizione: 'Sistema integrato fotovoltaico + pompa di calore Daikin per riscaldamento, raffrescamento e acqua calda sanitaria. Autonomia energetica quasi totale.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-tetto-residenziale.png'],
    localita: 'Vicenza',
    anno: '2026',
  },
  {
    id: 20,
    titolo: 'Fotovoltaico residenziale 4kW su villetta',
    descrizione: 'Installazione di 10 pannelli monocristallini full black su tetto a falda orientato a sud. Produzione annua stimata 5.200 kWh, autoconsumo all\'80%.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-fullblack.webp'],
    localita: 'Gorizia',
    anno: '2026',
  },
  {
    id: 21,
    titolo: 'Fotovoltaico villette a schiera 3kW ciascuna',
    descrizione: 'Installazione di impianti fotovoltaici da 3kW su 4 villette a schiera. Pannelli full black integrati nel tetto, inverter Huawei con monitoraggio remoto.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-tetto-colline.jpg'],
    localita: 'Treviso',
    anno: '2025',
  },
  {
    id: 22,
    titolo: 'Impianto fotovoltaico aziendale 50kW',
    descrizione: 'Impianto fotovoltaico su copertura capannone commerciale da 50kW. Riduzione dei costi energetici del 65%, rientro dell\'investimento in 4 anni.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-azienda-agricola.webp'],
    localita: 'Venezia',
    anno: '2026',
  },
  {
    id: 23,
    titolo: 'Ristrutturazione bagno e cucina',
    descrizione: 'Rifacimento completo bagno e cucina con nuovi impianti, piastrelle in gres porcellanato, sanitari sospesi e rubinetteria di design. Completato in 30 giorni.',
    categoria: 'ristrutturazioni',
    immagini: ['/images/progetti/ristrutturazione-bagno.jpg'],
    localita: 'Udine',
    anno: '2026',
  },
  {
    id: 24,
    titolo: 'Installazione pannelli su tetto piano',
    descrizione: 'Montaggio di 24 pannelli fotovoltaici su tetto piano con struttura inclinata a 30°. Impianto da 10kW con ottimizzatori e monitoraggio da app.',
    categoria: 'fotovoltaico',
    immagini: ['/images/progetti/fotovoltaico-villa-aerea.jpg'],
    localita: 'Padova',
    anno: '2025',
  },
  {
    id: 9,
    titolo: 'Finestre PVC con cassonetto coibentato',
    descrizione: 'Sostituzione finestre in PVC a 5 camere con nuovo cassonetto coibentato e avvolgibile integrato. Eliminati spifferi e ponti termici, comfort acustico migliorato nettamente.',
    categoria: 'infissi',
    immagini: ['/images/progetti/infissi-pvc-studio.jpg'],
    localita: 'Udine',
    anno: '2026',
  },
  {
    id: 10,
    titolo: 'Infissi PVC camera da letto con cassonetto',
    descrizione: 'Installazione finestre in PVC bianco con cassonetto monoblocco e avvolgibile in camera da letto. Isolamento termico e acustico ottimale per un riposo senza disturbi.',
    categoria: 'infissi',
    immagini: ['/images/progetti/infissi-pvc-camera.jpg'],
    localita: 'Pordenone',
    anno: '2026',
  },
  {
    id: 11,
    titolo: 'Portafinestra PVC con accesso balcone',
    descrizione: 'Posa di portafinestra in PVC a doppia anta con cassonetto nuovo e tapparella motorizzata. Accesso diretto al balcone con massima luminosità e tenuta termica.',
    categoria: 'infissi',
    immagini: ['/images/progetti/portafinestra-pvc-balcone.jpg'],
    localita: 'Gorizia',
    anno: '2026',
  },
  {
    id: 12,
    titolo: 'Porta blindata con sopraluce in vetro',
    descrizione: 'Installazione porta blindata classe 3 con pannello decorativo in legno e sopraluce in vetro temperato. Sicurezza certificata e design elegante per l\'ingresso.',
    categoria: 'infissi',
    immagini: ['/images/progetti/porta-blindata-sopraluce.jpg'],
    localita: 'Trieste',
    anno: '2026',
  },
  {
    id: 13,
    titolo: 'Portafinestra scorrevole traslante',
    descrizione: 'Installazione di ampia portafinestra scorrevole traslante in PVC con accesso al terrazzo. Grande superficie vetrata per massima luminosità, guida a pavimento a filo.',
    categoria: 'infissi',
    immagini: ['/images/progetti/portafinestra-scorrevole.jpg'],
    localita: 'Treviso',
    anno: '2026',
  },
  {
    id: 14,
    titolo: 'Portafinestra con scuroni in alluminio',
    descrizione: 'Portafinestra in PVC bianco con scuroni in alluminio effetto legno scuro. Design elegante che unisce la praticità del PVC alla bellezza degli oscuranti tradizionali.',
    categoria: 'infissi',
    immagini: ['/images/progetti/finestre_pvc_ruvodipuglia.jpg'],
    localita: 'Udine',
    anno: '2026',
  },
  {
    id: 15,
    titolo: 'Finestra PVC cucina con cassonetto',
    descrizione: 'Sostituzione finestra cucina in PVC bianco con cassonetto coibentato e avvolgibile integrato. Posa a regola d\'arte con rivestimento in piastrelle a diamante.',
    categoria: 'infissi',
    immagini: ['/images/progetti/finestra-pvc-su-misura-modena-vetreria-gbm.jpg'],
    localita: 'Pordenone',
    anno: '2026',
  },
  {
    id: 16,
    titolo: 'Vetrate scorrevoli villa in legno-alluminio',
    descrizione: 'Installazione di grandi vetrate scorrevoli in legno-alluminio color ciliegio su villa rustica. Ampie superfici vetrate per massima luminosità e vista sul giardino.',
    categoria: 'infissi',
    immagini: ['/images/progetti/1Giani-serramenti-pvc-infissi-pvc.jpg'],
    localita: 'Treviso',
    anno: '2025',
  },
  {
    id: 17,
    titolo: 'Portafinestra PVC con tenda plissé',
    descrizione: 'Portafinestra in PVC bianco a doppia anta con tenda plissé integrata e maniglia dorata. Vista panoramica dal balcone, isolamento termico e acustico superiore.',
    categoria: 'infissi',
    immagini: ['/images/progetti/Immagine WhatsApp 2025-01-22 ore 06.39.05_d91c4a2e.jpeg'],
    localita: 'Trieste',
    anno: '2025',
  },
  {
    id: 18,
    titolo: 'Porta scorrevole con zanzariera a scomparsa',
    descrizione: 'Installazione portafinestra scorrevole in PVC con zanzariera laterale a scomparsa e persiane in legno. Accesso diretto al giardino con protezione totale dagli insetti.',
    categoria: 'infissi',
    immagini: ['/images/progetti/infisso-2.jpg'],
    localita: 'Venezia',
    anno: '2025',
  },
  {
    id: 19,
    titolo: 'Portafinestra scorrevole con zanzariera',
    descrizione: 'Ampia portafinestra scorrevole in alluminio con zanzariera integrata e accesso al terrazzo panoramico. Profili sottili per massima superficie vetrata e vista sulla città.',
    categoria: 'infissi',
    immagini: ['/images/progetti/1-768x1024.jpg'],
    localita: 'Padova',
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
