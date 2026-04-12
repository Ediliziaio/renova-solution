import { Link } from 'react-router-dom';
import SEO, { serviceSchema, faqSchema } from '../../components/SEO';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { Thermometer, VolumeX, Shield, Sparkles, CheckCircle, Euro } from 'lucide-react';

export default function FinestrePVC() {
  const faqItems = [
    {
      question: 'Quanto durano le finestre in PVC?',
      answer: 'Le finestre in PVC di qualità hanno una vita utile di 40-50 anni. Sono resistenti alle intemperie, non si deformano e mantengono le loro prestazioni nel tempo senza necessitare di manutenzione straordinaria.',
    },
    {
      question: 'Le finestre in PVC sono sicure?',
      answer: 'Sì, le nostre finestre in PVC sono dotate di sistemi di chiusura multipunto, cardini antieffrazione e possono essere montate con vetri stratificati di sicurezza per una protezione massima.',
    },
    {
      question: 'Quanto costa una finestra in PVC?',
      answer: 'Il costo dipende dalle dimensioni e dalle caratteristiche, ma in media una finestra in PVC di qualità con doppio vetro oscilla tra i 300€ e i 600€, posa inclusa. Richiedi un preventivo gratuito per un prezzo preciso.',
    },
    {
      question: 'Il PVC si deteriora con il sole?',
      answer: 'I profili in PVC moderni sono trattati con formulazioni specifiche anti-UV che impediscono l\'ingiallimento e la degradazione. I nostri infissi mantengono il colore e le prestazioni per decenni.',
    },
  ];

  const caratteristiche = [
    {
      icon: Thermometer,
      title: 'Isolamento termico superiore',
      description: 'Profili multi-camera che creano barriere termiche, riducendo le dispersioni di calore fino al 70% rispetto ai vecchi infissi.',
    },
    {
      icon: VolumeX,
      title: 'Schermo acustico efficace',
      description: 'Doppi e tripli vetri con camera d\'aria argon che riducono il rumore esterno fino a 45 dB, per una casa silenziosa.',
    },
    {
      icon: Shield,
      title: 'Sicurezza certificata',
      description: 'Serrature multipunto, cardini antieffrazione e vetri di sicurezza per proteggere la tua famiglia da intrusioni.',
    },
    {
      icon: Sparkles,
      title: 'Zero manutenzione',
      description: 'Non necessitano di verniciatura né trattamenti. Basta una semplice pulizia con acqua e sapone per mantenerle come nuove.',
    },
    {
      icon: Euro,
      title: 'Risparmio garantito',
      description: 'Riduzione dei consumi di riscaldamento e raffrescamento fino al 30%, con un ritorno dell\'investimento in pochi anni.',
    },
    {
      icon: CheckCircle,
      title: 'Eco-sostenibili',
      description: 'PVC riciclabile al 100% e produzione a basso impatto ambientale, per una scelta responsabile verso il pianeta.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Finestre in PVC | Infissi PVC Alta Efficienza Termica | Renova Solution"
        description="Finestre e infissi in PVC ad alta efficienza termica in Friuli Venezia Giulia e Veneto. Isolamento termico e acustico superiore, zero manutenzione, detrazione 50%. Preventivo gratuito."
        keywords="finestre pvc, infissi pvc, finestre pvc friuli, infissi pvc veneto, finestre pvc prezzi, serramenti pvc, finestre isolamento termico"
        canonical="https://renovasolution.it/infissi/finestre-pvc"
        ogImage="/images/confronto-finestre.jpg"
        schema={[
          serviceSchema('Finestre in PVC', 'Vendita e installazione finestre in PVC ad alta efficienza termica', 'https://renovasolution.it/infissi/finestre-pvc'),
          faqSchema(faqItems)
        ]}
      />
      <TopBar />
      <PromoBanner />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/infissi.jpg"
            alt="Finestre in PVC moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/70 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/infissi" className="hover:text-white">Infissi</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Finestre in PVC</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Finestre in PVC: Comfort, Risparmio e Sicurezza per la Tua Casa
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Scopri perché le finestre in PVC sono la scelta intelligente per chi cerca isolamento termico, silenziosità e zero manutenzione a un prezzo competitivo.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contatti"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Richiedi preventivo gratuito
            </Link>
            <Link 
              to="/contatti"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              Scopri i prezzi
            </Link>
          </div>
        </div>
      </section>

      {/* Perché scegliere il PVC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Perché le finestre in PVC sono la scelta più intelligente?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Il PVC è il materiale più utilizzato in Europa per la realizzazione di infissi, e non è un caso. Offre un rapporto qualità-prezzo imbattibile, prestazioni eccellenti in termini di isolamento e una durata nel tempo che supera i 40 anni, tutto senza richiedere manutenzione.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I nostri profili in PVC multi-camera creano una barriera termica efficace che mantiene il calore dentro in inverno e fuori in estate. Il risultato? Una casa più confortevole e bollette drasticamente ridotte.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">40+</div>
                  <div className="text-sm text-gray-600">Anni di durata</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">70%</div>
                  <div className="text-sm text-gray-600">Meno dispersioni</div>
                </div>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Prenota sopralluogo gratuito
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop" 
                alt="Dettaglio finestra PVC" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Tecnologia e prestazioni al top</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Le nostre finestre in PVC sono progettate con le tecnologie più avanzate per garantire il massimo comfort abitativo.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {caratteristiche.map((c) => (
              <div key={c.title} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <c.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurazioni */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Configurazioni disponibili</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Battente', desc: 'La classica apertura verso l\'interno o l\'esterno' },
              { name: 'Scorrevole', desc: 'Ideale per spazi ridotti e grandi vetrate' },
              { name: 'Tilt-and-Turn', desc: 'Apertura a vasistas e a battente in un solo sistema' },
              { name: 'Fissa', desc: 'Per lucernari e aperture decorative' },
            ].map((t) => (
              <div key={t.name} className="text-center p-6 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                <h3 className="font-semibold mb-2">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detrazione fiscale */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Detrazione fiscale del 50% sulle finestre in PVC
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                La sostituzione delle finestre rientra nelle detrazioni fiscali per il risparmio energetico. La detrazione del 50% (per abitazione principale) viene recuperata in 10 rate annuali nella dichiarazione dei redditi.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Detrazione del 50% sulle spese (abitazione principale)',
                  'Limite massimo di 96.000€ per unità immobiliare',
                  'Recupero in 10 rate annuali tramite 730 o Redditi PF',
                  'Gestione completa pratica ENEA inclusa',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contatti"
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Scopri come risparmiare
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop" 
                alt="Detrazioni fiscali" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Colori e finiture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Colori e finiture</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Le nostre finestre in PVC sono disponibili in una vasta gamma di colori e finiture per abbinarsi perfettamente allo stile della tua casa.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {['Bianco', 'Avorio', 'Noce', 'Mogano', 'Grigio', 'Antracite'].map((colore) => (
              <div key={colore} className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-2 ${
                  colore === 'Bianco' ? 'bg-white border-2 border-gray-200' :
                  colore === 'Avorio' ? 'bg-yellow-50 border-2 border-yellow-100' :
                  colore === 'Noce' ? 'bg-amber-700' :
                  colore === 'Mogano' ? 'bg-red-900' :
                  colore === 'Grigio' ? 'bg-gray-400' :
                  'bg-gray-800'
                }`}></div>
                <span className="text-sm text-gray-600">{colore}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sulle Finestre in PVC" items={faqItems} />
      <Footer />
    </div>
  );
}
