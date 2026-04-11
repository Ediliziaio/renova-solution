import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import { Building2, Home, Zap, Volume2, Wind } from 'lucide-react';

export default function Climatizzazione() {
  const faqItems = [
    {
      question: 'Quanto costa climatizzare un ambiente da 100mq con sistemi di ultima generazione?',
      answer: 'Il costo dipende dal tipo di sistema scelto, ma per un appartamento di 100mq si va dai 3.000€ ai 8.000€ per impianti multi-split di ultima generazione.',
    },
    {
      question: 'Quanto si risparmia collegando l\'impianto di climatizzazione a un sistema fotovoltaico?',
      answer: 'Collegando la climatizzazione al fotovoltaico si può risparmiare fino al 70-80% sui costi di raffrescamento e riscaldamento.',
    },
    {
      question: 'Quanti pannelli fotovoltaici servono per far funzionare un condizionatore?',
      answer: 'Per alimentare un condizionatore da 3kW servono circa 8-10 pannelli fotovoltaici da 400W.',
    },
    {
      question: 'Il sistema di accumulo è necessario per climatizzare la casa?',
      answer: 'Non è obbligatorio, ma consente di utilizzare l\'energia solare anche di sera e durante la notte per il riscaldamento o il raffrescamento.',
    },
  ];

  const vantaggi = [
    {
      icon: Zap,
      title: 'Efficienza',
      description: 'I nuovi impianti garantiscono una climatizzazione rapida e uniforme, ottimizzando i consumi energetici senza compromettere il comfort.',
    },
    {
      icon: Volume2,
      title: 'Silenziosità',
      description: 'Progettati per operare con livelli sonori minimi, assicurano un funzionamento discreto e rilassante, ideale per qualsiasi ambiente domestico o professionale.',
    },
    {
      icon: Wind,
      title: 'Qualità aria',
      description: 'Grazie a filtri avanzati e sistemi di purificazione, mantengono l\'aria pulita e salubre, contribuendo al benessere di chi vive o lavora negli spazi climatizzati.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/climatizzazione.jpg" 
            alt="Pompa di calore e climatizzatore installati esterno casa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Climatizzazione per la casa e l'ambiente di lavoro
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Technogelox Ecoenergia installa e si occupa della manutenzione di climatizzatori efficienti, silenziosi e personalizzati.
          </p>
          <Link 
            to="/contatti"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>

      {/* Climatizzazione per una temperatura ottimale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Climatizzazione per una temperatura ottimale in ogni stagione
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I nostri tecnici valuteranno le esigenze ambientali della tua abitazione e del tuo luogo di lavoro, progettando una soluzione interamente su misura.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Garantiamo interventi tempestivi, manutenzione programmata e supporto continuativo, con il quale possiamo assicurare efficienza costante degli impianti, riduzione dei consumi energetici e il massimo comfort.
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
                src="/images/climatizzazione.jpg" 
                alt="Pompa di calore moderna installata" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* I vantaggi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4">I vantaggi</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Gli impianti per la produzione di energia elettrica mediante tecnologia fotovoltaica presentano numerosi vantaggi, tra i quali i più significativi sono:
              </p>
              <div className="w-12 h-1 bg-orange-500 mt-4"></div>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {vantaggi.map((v) => (
                <div key={v.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <v.icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="font-semibold mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-orange-200'}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluzioni Business e Casa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Soluzioni per il tuo business</h3>
              <p className="text-gray-600 text-sm">Impianti efficienti, silenziosi e smart, curati da un servizio di manutenzione programmata</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Soluzioni per la tua casa</h3>
              <p className="text-gray-600 text-sm">Climatizzatori che assicurano comfort tutto l'anno, aria pulita e consumi ridotti</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/contatti"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Richiedi un preventivo gratuito
            </Link>
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
                Acquistando un climatizzatore provvisto di pompa di calore, è possibile usufruire del contro termico e delle detrazioni fiscali previste per gli interventi di ristrutturazione edilizia, con un risparmio fino al 65%.
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

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sugli impianti di Climatizzazione" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
  );
}
