import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import { Home, Battery, Wrench } from 'lucide-react';

export default function Manutenzione() {
  const faqItems = [
    {
      question: 'Quanto costa la manutenzione di un impianto fotovoltaico?',
      answer: 'Il costo dipende dalla potenza dell\'impianto, ma in media si aggira tra i 100€ e i 300€ all\'anno per impianti residenziali.',
    },
    {
      question: 'Ogni quanto va fatto il controllo?',
      answer: 'Si consiglia una manutenzione ordinaria almeno una volta all\'anno e un controllo dei pannelli ogni 6 mesi.',
    },
    {
      question: 'Cosa include la manutenzione?',
      answer: 'Pulizia dei pannelli, controllo delle connessioni elettriche, verifica dell\'inverter, analisi delle performance.',
    },
  ];

  const servizi = [
    {
      icon: Home,
      title: 'Manutenzione e riparazione impianto fotovoltaico',
      description: 'Interventi programmati e straordinari per garantire il massimo rendimento del tuo impianto.',
    },
    {
      icon: Battery,
      title: 'Riparazione e sostituzione inverter',
      description: 'Diagnosi e sostituzione di inverter guasti o obsoleti con modelli di ultima generazione.',
    },
    {
      icon: Wrench,
      title: 'Manutenzione e incremento di sistemi di accumulo',
      description: 'Verifica, manutenzione ed espansione della capacità delle batterie di accumulo.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/manutenzione.jpg" 
            alt="Tecnico pulisce pannello fotovoltaico" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Servizi di Assistenza e Manutenzione fotovoltaica
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Il nostro servizio di assistenza e manutenzione degli impianti fotovoltaici manterrà i sistemi installati sempre al massimo della loro efficienza.
          </p>
          <Link 
            to="/contatti"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>

      {/* I nostri servizi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">I nostri servizi</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tecnici specializzati assicureranno che l'impianto fotovoltaico installato rimanga efficiente nel tempo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {servizi.map((s, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FormPreventivo />
      <Recensioni />
      <FAQ title="FAQ Impianti Fotovoltaici" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
  );
}
