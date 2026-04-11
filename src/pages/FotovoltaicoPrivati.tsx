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
import SEO, { serviceSchema, faqSchema } from '../components/SEO';
import { CheckCircle, Zap, Sun, Battery } from 'lucide-react';

export default function FotovoltaicoPrivati() {
  const faqItems = [
    {
      question: 'Quanto costa un impianto fotovoltaico da 6 kW?',
      answer: 'Un impianto da 6 kW (ideale per una famiglia di 4 persone) costa generalmente tra 8.000€ e 12.000€ prima delle detrazioni. Con il 50% di detrazione fiscale, il costo effettivo si riduce a 4.000€-6.000€.',
    },
    {
      question: 'Quanto si risparmia in bolletta?',
      answer: 'Con un impianto da 6 kW puoi ridurre la bolletta elettrica fino al 70-80%, con un risparmio annuo di 800€-1.500€ a seconda dei tuoi consumi.',
    },
    {
      question: 'Serve la batteria di accumulo?',
      answer: 'Consigliatissima! Senza accumulo, l\'energia non consumata immediatamente viene immessa in rete. Con la batteria, la conservi per usarla di sera e di notte, massimizzando il risparmio fino al 90%.',
    },
    {
      question: 'Quanto dura un impianto fotovoltaico?',
      answer: 'I pannelli fotovoltaici hanno una vita utile di 25-30 anni, con garanzia di prestazione che garantisce almeno l\'80% dell\'efficienza iniziale dopo 25 anni.',
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
    'https://renovasolution.it/fotovoltaico-privati'
  );

  const faqStructuredData = faqSchema(faqItems);

  return (
    <>
      <SEO 
        title="Fotovoltaico per Privati | Impianti Solari con Accumulo in Veneto e Friuli"
        description="Impianti fotovoltaici con batterie di accumulo per casa. Risparmia fino al 70% in bolletta. Sopralluogo gratuito, installazione in 2-3 giorni. Detrazione 50%."
        keywords="fotovoltaico casa, impianto solare privati, pannelli fotovoltaici, batterie accumulo, fotovoltaico Treviso, fotovoltaico Udine"
        schema={[schema, faqStructuredData]}
        canonical="https://renovasolution.it/fotovoltaico-privati"
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
                  'Detrazione fiscale 50% e sconto in fattura',
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
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop" 
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
                src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop" 
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

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ Fotovoltaico per Privati" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
    </>
  );
}
