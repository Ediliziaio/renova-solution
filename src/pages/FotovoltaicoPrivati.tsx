import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartnerLogos from '../components/PartnerLogos';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import Vantaggi from '../components/Vantaggi';
import Soluzioni from '../components/Soluzioni';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import GalleriaLavori from '../components/GalleriaLavori';
import SEO, { serviceSchema, faqSchema } from '../components/SEO';
import { CheckCircle, Zap, Sun, Battery } from 'lucide-react';

export default function FotovoltaicoPrivati() {
  const faqItems = [
    {
      question: 'Quanto costa un impianto fotovoltaico per casa?',
      answer: 'Il costo di un impianto fotovoltaico residenziale varia in base alla potenza: un impianto da 3 kW costa tra 5.000€ e 7.000€, mentre uno da 6 kW (ideale per una famiglia di 4 persone) si aggira tra 8.000€ e 12.000€. Grazie alla detrazione fiscale del 50%, il costo effettivo si dimezza, rendendo l\'investimento ancora più conveniente e recuperabile in 4-6 anni.',
    },
    {
      question: 'Quanto produce un impianto fotovoltaico da 6 kW?',
      answer: 'In Veneto e Friuli Venezia Giulia, un impianto fotovoltaico da 6 kW produce mediamente tra 7.000 e 8.500 kWh all\'anno, grazie alle ottime condizioni di irraggiamento solare del Nord-Est Italia. Questa produzione copre abbondantemente il fabbisogno energetico annuo di una famiglia media, che si attesta intorno ai 4.000-5.000 kWh, con la possibilità di immettere il surplus in rete tramite lo scambio sul posto.',
    },
    {
      question: 'Quali detrazioni fiscali sono previste per il fotovoltaico?',
      answer: 'L\'installazione di un impianto fotovoltaico beneficia della detrazione fiscale del 50% per l\'abitazione principale, recuperabile in 10 rate annuali nella dichiarazione dei redditi, con un limite massimo di spesa di 96.000€. Per le seconde case la detrazione è del 36%. Renova Solution si occupa di tutta la pratica burocratica, inclusa la comunicazione ENEA e la gestione della connessione con il GSE.',
    },
    {
      question: 'Quanto durano i pannelli fotovoltaici?',
      answer: 'I pannelli fotovoltaici di ultima generazione hanno una durata garantita di 25-30 anni, con una garanzia di prestazione che assicura almeno l\'80% dell\'efficienza iniziale dopo 25 anni. L\'inverter ha generalmente una garanzia di 10-15 anni. La manutenzione richiesta è minima: basta un controllo annuale e la pulizia periodica dei moduli per mantenere le prestazioni ottimali.',
    },
    {
      question: 'Conviene installare una batteria di accumulo con il fotovoltaico?',
      answer: 'La batteria di accumulo è fortemente consigliata perché permette di immagazzinare l\'energia solare prodotta durante il giorno e utilizzarla di sera e di notte, portando l\'autoconsumo dal 30-40% fino al 90%. Questo significa una riduzione drastica della bolletta elettrica e una maggiore indipendenza dalla rete. Le batterie moderne al litio hanno una garanzia di 10 anni e una vita utile superiore ai 15 anni.',
    },
  ];

  const features = [
    { icon: Sun, title: 'Pannelli top di gamma', desc: 'Efficienza superiore al 21%' },
    { icon: Battery, title: 'Batterie garantite', desc: '10 anni di garanzia' },
    { icon: Zap, title: 'Inverter ibridi', desc: 'Monitoraggio in tempo reale' },
  ];

  const schema = serviceSchema(
    'Impianti Fotovoltaici per Privati',
    'Impianti fotovoltaici con accumulo per famiglie in Veneto e Friuli. Sopralluogo gratuito, installazione in 2-3 giorni, detrazione 50%.',
    'https://www.renovasolution.it/fotovoltaico-privati'
  );

  const faqStructuredData = faqSchema(faqItems);

  return (
    <>
      <SEO 
        title="Fotovoltaico per Privati | Impianti Solari con Accumulo in Veneto e Friuli"
        description="Impianti fotovoltaici con batterie di accumulo per casa. Risparmia fino al 70% in bolletta. Sopralluogo gratuito, installazione in 2-3 giorni. Detrazione 50%."
        keywords="fotovoltaico casa, impianto solare privati, pannelli fotovoltaici, batterie accumulo, fotovoltaico Treviso, fotovoltaico Udine"
        schema={[schema, faqStructuredData]}
        canonical="https://www.renovasolution.it/fotovoltaico-privati"
        ogImage="/images/fotovoltaico-casa.jpg"
      />
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/fotovoltaico.jpg" 
            alt="Tecnico installa pannelli fotovoltaici su tetto casa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#C8E600] text-black text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 md:mb-4">
              Per privati
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Fotovoltaico per la tua casa: risparmia fino al 70%
            </h1>
            <p className="text-white/80 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-xl">
              Impianti fotovoltaici con accumulo per famiglie in Veneto e Friuli. 
              Sopralluogo gratuito, installazione in 2-3 giorni, detrazione 50%.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link 
                to="/contatti"
                className="bg-[#C8E600] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#b3cc00] transition-colors text-center"
              >
                Preventivo gratuito
              </Link>
              <a 
                href="tel:+393939596194"
                className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-colors text-center"
              >
                Chiama 393 959 6194
              </a>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />

      {/* Perché scegliere noi */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                Perché scegliere Renova Solution
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Impianti su misura per il tuo tetto
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Ogni casa è diversa. Per questo il nostro tecnico effettua un sopralluogo gratuito 
                per valutare l'esposizione solare, la superficie disponibile e i tuoi consumi energetici. 
                Solo così possiamo proporti l'impianto perfetto per le tue esigenze.
              </p>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  'Progetto personalizzato su misura',
                  'Materiali delle migliori marche (SunPower, Tesla, Daikin)',
                  'Installazione in 2-3 giorni lavorativi',
                  'Assistenza e monitoraggio inclusi',
                  'Detrazione fiscale del 50% in 10 rate annuali',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#C8E600] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {features.map((f) => (
                  <div key={f.title} className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                    <f.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C8E600] mx-auto mb-2" />
                    <div className="font-bold text-xs md:text-sm">{f.title}</div>
                    <div className="text-[10px] md:text-xs text-gray-500">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/impianto-fotovoltaico.jpg" 
                alt="Installazione fotovoltaica" 
                className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
      <Vantaggi />
      <Soluzioni />

      {/* Accumulo */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="/images/batteria-accumulo-ext.jpg" 
                alt="Batteria di accumulo" 
                className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                Accumulo energetico
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                La batteria che ti libera dalla rete
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Con le batterie di accumulo accumuli l'energia solare prodotta durante il giorno 
                e la utilizzi quando ne hai bisogno: di sera, di notte, nei giorni nuvolosi.
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <div className="text-xl md:text-2xl font-bold text-[#C8E600]">90%</div>
                  <div className="text-xs md:text-sm text-gray-600">Autoconsumo</div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <div className="text-xl md:text-2xl font-bold text-[#C8E600]">15+</div>
                  <div className="text-xs md:text-sm text-gray-600">Anni di vita</div>
                </div>
              </div>
              
              <Link 
                to="/contatti"
                className="inline-block bg-[#C8E600] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b3cc00] transition-colors"
              >
                Scopri le batterie disponibili
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GalleriaLavori filtroCategoria="fotovoltaico" maxProgetti={3} />
      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ Fotovoltaico per Privati" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
    </>
  );
}
