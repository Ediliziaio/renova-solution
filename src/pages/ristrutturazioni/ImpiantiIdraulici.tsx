import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { Droplets, Thermometer, ShowerHead, CheckCircle, Shield, Clock } from 'lucide-react';

export default function ImpiantiIdraulici() {
  const faqItems = [
    {
      question: 'Quando va rifatto l\'impianto idraulico?',
      answer: 'Gli impianti idraulici in rame o acciaio hanno una vita utile di 40-50 anni. Se la tua casa ha più di 30 anni e presenta perdite, calcare o pressione insufficiente, è consigliabile valutare il rifacimento.',
    },
    {
      question: 'Quanto costa rifare l\'impianto idraulico?',
      answer: 'Il costo dipende dalle dimensioni della casa e dai materiali scelti. In media, per un appartamento di 100mq si va dai 4.000€ agli 8.000€ per l\'impianto base, sanitari esclusi.',
    },
    {
      question: 'Quali tubi sono migliori?',
      answer: 'I tubi in multistrato sono la scelta più comune per la loro versatilità, durata e facilità di installazione. Il rame rimane il top per qualità e longevità. Il PEX è economico e flessibile.',
    },
    {
      question: 'Quanto dura l\'installazione?',
      answer: 'Per un appartamento di 100mq il rifacimento completo dell\'impianto idraulico richiede generalmente 5-10 giorni lavorativi, a seconda della complessità.',
    },
  ];

  const servizi = [
    {
      icon: Droplets,
      title: 'Rifacimento impianto idrico',
      description: 'Sostituzione completa delle tubazioni con materiali moderni e duraturi: multistrato, rame o PEX.',
    },
    {
      icon: Thermometer,
      title: 'Impianto di riscaldamento',
      description: 'Installazione di caldaie, termosifoni, impianti a pavimento radiante e sistemi di termoregolazione.',
    },
    {
      icon: ShowerHead,
      title: 'Bagno completo',
      description: 'Fornitura e posa di sanitari, box doccia, vasche, rubinetteria di design e accessori bagno.',
    },
    {
      icon: Shield,
      title: 'Impianto scarico',
      description: 'Rifacimento tubazioni di scarico in PVC, installazione di pozzetti, sifoni e sistemi di trattamento acque.',
    },
  ];

  const materiali = [
    { name: 'Multistrato', desc: 'Versatile, duraturo, ideale per la maggior parte delle installazioni', vantaggi: ['Facile installazione', 'Resistente alla corrosione', 'Buon isolamento termico'] },
    { name: 'Rame', desc: 'Il top per qualità, durata e resistenza', vantaggi: ['Vita utile 50+ anni', 'Resistente alle alte temperature', 'Antibatterico naturale'] },
    { name: 'PEX', desc: 'Economico, flessibile, facile da posare', vantaggi: ['Prezzo contenuto', 'Flessibile e leggero', 'Resistente al gelo'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <PromoBanner />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/ristrutturazioni.jpg" 
            alt="Impianto idraulico" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/70 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/ristrutturazioni" className="hover:text-white">Ristrutturazioni</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Impianti Idraulici</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Impianti Idraulici: Acqua che Scorre Senza Pensieri
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Rifacimento impianti idrici e sanitari con materiali di qualità, installazione a regola d'arte e garanzia estesa. Per una casa senza perdite e con il massimo comfort.
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
              Scopri i materiali
            </Link>
          </div>
        </div>
      </section>

      {/* Perché rifare */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Quando è il momento di rifare l'impianto idraulico?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                L'impianto idraulico è il sistema circolatorio della tua casa. Quando inizia a dare problemi, le conseguenze possono essere costose: perdite, infiltrazioni, muffa, calcare e pressione insufficiente.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Se la tua casa ha più di 30 anni, se hai tubi in piombo o ferro, se noti cali di pressione o macchie di umidità, è il momento di valutare il rifacimento. Un impianto nuovo ti darà tranquillità per decenni.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Perdite e infiltrazioni ricorrenti',
                  'Calcare e tubi otturati',
                  'Pressione acqua insufficiente',
                  'Tubi in materiali obsoleti',
                  'Acqua con sapore o odore strano',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" 
                alt="Tubi idraulici" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">I nostri servizi idraulici</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dalla sostituzione di un rubinetto al rifacimento completo dell'impianto, siamo pronti a risolvere ogni tua esigenza.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {servizi.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <s.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materiali */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Scegli il materiale giusto</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ogni materiale ha i suoi punti di forza. Ti aiutiamo a scegliere quello più adatto alle tue esigenze e al tuo budget.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {materiali.map((m) => (
              <div key={m.name} className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
                <h3 className="font-semibold text-xl mb-2">{m.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{m.desc}</p>
                <ul className="space-y-2">
                  {m.vantaggi.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagno */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Rinnova il tuo bagno con stile
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Oltre agli impianti, ci occupiamo della fornitura e posa di sanitari, rubinetteria, box doccia e accessori bagno. Collaboriamo con i migliori marchi per offrirti soluzioni di design che trasformano il tuo bagno in un'oasi di relax.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Sanitari sospesi e a pavimento',
                  'Rubinetteria di design',
                  'Box doccia su misura',
                  'Vasche da bagno',
                  'Mobili bagno e accessori',
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
                Scopri le nostre proposte
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop" 
                alt="Bagno moderno" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Garanzia */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Qualità certificata, garanzia estesa
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Utilizziamo solo materiali certificati e installiamo secondo le normative vigenti. Offriamo garanzia estesa su tutti i lavori eseguiti e assistenza post-installazione.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm text-white/80">10 anni di garanzia</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm text-white/80">Materiali certificati</div>
                </div>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Richiedi preventivo
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop" 
                alt="Installazione professionale" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sugli Impianti Idraulici" items={faqItems} />
      <Footer />
    </div>
  );
}
