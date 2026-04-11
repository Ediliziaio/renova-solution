import { Link } from 'react-router-dom';
import SEO, { serviceSchema, faqSchema } from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import { Zap, Snowflake, Leaf, Thermometer } from 'lucide-react';

export default function PompeDiCalore() {
  const faqItems = [
    {
      question: 'Quanto consuma una pompa di calore rispetto a un impianto tradizionale?',
      answer: 'Una pompa di calore consuma circa il 60-70% in meno rispetto a una caldaia a gas tradizionale per la stessa quantità di calore prodotta.',
    },
    {
      question: 'Si può sostituire la caldaia a gas con una pompa di calore?',
      answer: 'Sì, è possibile sostituire la caldaia con una pompa di calore aria-acqua che si integra con i radiatori esistenti o con un impianto a pavimento radiante.',
    },
    {
      question: 'Quanto dura l\'installazione di una pompa di calore?',
      answer: 'L\'installazione di una pompa di calore richiede generalmente 1-3 giorni lavorativi, a seconda della complessità dell\'impianto.',
    },
    {
      question: 'La posa delle pompe di calore è inclusa nelle detrazioni fiscali in vigore?',
      answer: 'Sì, l\'installazione di pompe di calore rientra nelle detrazioni fiscali per il risparmio energetico con aliquota al 65%.',
    },
  ];

  const vantaggi = [
    {
      icon: Zap,
      title: 'Efficienza',
      description: 'Con una pompa di calore è possibile risparmiare in media dal 30 al 50% rispetto ad un impianto tradizionale.',
    },
    {
      icon: Snowflake,
      title: 'Versatilità',
      description: 'Avrai a tua disposizione un unico sistema che riscalda, raffresca e produce acqua calda sanitaria.',
    },
    {
      icon: Leaf,
      title: 'Sostenibilità',
      description: 'Niente emissioni locali: sfrutta l\'energia aerotermica o geotermica e si integra con il fotovoltaico.',
    },
    {
      icon: Thermometer,
      title: 'Comfort',
      description: 'Le pompe di calore sono silenziose e mantengono una temperatura confortevole e costante.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pompe di Calore | Riscaldamento Efficiente per Casa e Azienda | Renova Solution"
        description="Installazione pompe di calore aria-acqua e aria-aria in Friuli Venezia Giulia e Veneto. Risparmio fino al 60% sul riscaldamento. Detrazione fiscale 65%. Sopralluogo gratuito."
        keywords="pompe di calore friuli, pompa di calore veneto, pompa calore aria acqua, riscaldamento pompa di calore, pompa di calore casa, installazione pompa calore"
        canonical="https://renovasolution.it/pompe-di-calore"
        schema={[
          serviceSchema('Pompe di Calore', 'Installazione e manutenzione pompe di calore per casa e azienda', 'https://renovasolution.it/pompe-di-calore'),
          faqSchema(faqItems)
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/climatizzazione.jpg" 
            alt="Pompa di calore" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Pompe di calore Per la casa e l'azienda
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Technogelox Ecoenergia offre un servizio completo di posa e installazione delle pompe di calore aria-aria, aria-acqua e geotermiche. Risparmia fino al 65% con il Conto Termico 3.0. Richiedi lo sconto in fattura. L'incentivo rimarrà in vigore per tutto il 2026.
          </p>
          <Link 
            to="/contatti"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>

      {/* Posa e manutenzione */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Posa e manutenzione Pompe di calore ad alta efficienza
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I tecnici di Technogelox Ecoenergia si occuperanno della consulenza, fornitura e posa della pompa di calore più adatta agli ambienti della tua casa e della tua impresa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dal 2007 affianchiamo famiglie e aziende nella scelta di soluzioni ad alta efficienza per il riscaldamento, il raffrescamento e la produzione di acqua calda sanitaria, realizzando impianti su misura e offrendo un servizio di assistenza post vendita dedicato.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold italic text-gray-800">DAIKIN</span>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Contattaci
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop" 
                alt="Pompa di calore installazione" 
                className="rounded-2xl shadow-xl"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-orange-500 border-b-8 border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sconto in fattura */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                SCONTO IN FATTURA DEL 65%
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Acquistando un climatizzatore provvisto di pompa di calore, è possibile usufruire del contro termico e delle detrazioni fiscali previste per gli interventi di ristrutturazione edilizia, con un risparmio fino al 65%. Lo sconto in fattura permette di recuperare l'importo, che viene scalato progressivamente dalle imposte dovute.
              </p>
              <Link 
                to="/contatti"
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contattaci
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop" 
                alt="Sconto in fattura" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* I vantaggi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">I vantaggi</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Gli impianti di climatizzazione dotati di pompa di calore presentano numerosi vantaggi rispetto ai sistemi tradizionali, i più significativi sono:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {vantaggi.map((v) => (
              <div key={v.title} className="text-center p-6">
                <v.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sulle pompe di calore" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
  );
}
