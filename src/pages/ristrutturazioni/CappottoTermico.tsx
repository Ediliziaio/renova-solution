import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { Thermometer, TrendingDown, Leaf, Home, Euro, CheckCircle } from 'lucide-react';

export default function CappottoTermico() {
  const faqItems = [
    {
      question: 'Quanto si risparmia con il cappotto termico?',
      answer: 'Il cappotto termico permette di ridurre i consumi di riscaldamento fino al 30-40%. In una casa di 100mq, questo si traduce in un risparmio annuo di 500-800€ in bolletta.',
    },
    {
      question: 'Quanto costa il cappotto termico?',
      answer: 'Il costo del cappotto termico esterno varia tra i 150€ e i 300€ al mq, a seconda dello spessore dell\'isolante e delle finiture scelte. Per un appartamento di 100mq si va dai 15.000€ ai 30.000€.',
    },
    {
      question: 'Quali detrazioni si possono ottenere?',
      answer: 'Il cappotto termico rientra nell\'Ecobonus con detrazione del 65% (o 50% in base alle specifiche) per interventi di riqualificazione energetica. Lo sconto in fattura è disponibile.',
    },
    {
      question: 'Quanto dura l\'installazione?',
      answer: 'Per un appartamento di 100mq l\'installazione richiede generalmente 2-3 settimane, a seconda delle condizioni meteorologiche e della complessità dei lavori.',
    },
  ];

  const vantaggi = [
    {
      icon: TrendingDown,
      title: 'Risparmio energetico immediato',
      description: 'Riduzione dei consumi di riscaldamento e raffrescamento fino al 40%, con un ritorno dell\'investimento in 5-7 anni.',
    },
    {
      icon: Thermometer,
      title: 'Comfort abitativo superiore',
      description: 'Eliminazione dei ponti termici, pareti calde in inverno e fresche in estate, niente più muffa e condensa.',
    },
    {
      icon: Home,
      title: 'Valore immobiliare aumentato',
      description: 'La classe energetica migliora di 1-2 lettere, aumentando il valore di mercato dell\'immobile del 10-15%.',
    },
    {
      icon: Leaf,
      title: 'Impatto ambientale ridotto',
      description: 'Minori emissioni di CO₂ per il riscaldamento, contribuendo alla lotta contro il cambiamento climatico.',
    },
    {
      icon: Euro,
      title: 'Detrazione fiscale al 65%',
      description: 'L\'intervento rientra nell\'Ecobonus con detrazione del 65%, sconto in fattura o cessione del credito.',
    },
  ];

  const spessori = [
    { cm: '6', risparmio: '20%', ideale: 'Climi temperati' },
    { cm: '8', risparmio: '25%', ideale: 'Climi continentali' },
    { cm: '10', risparmio: '30%', ideale: 'Climi rigidi' },
    { cm: '12+', risparmio: '40%', ideale: 'Case passive' },
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
            src="/images/cappotto.jpg" 
            alt="Cappotto termico" 
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
            <span className="text-white">Cappotto Termico</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Cappotto Termico Esterno: Isola la Tua Casa e Risparmia fino al 40%
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Il sistema di isolamento più efficace per migliorare il comfort abitativo, ridurre i consumi energetici e aumentare il valore della tua casa.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contatti"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Richiedi sopralluogo gratuito
            </Link>
            <Link 
              to="/contatti"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              Calcola il risparmio
            </Link>
          </div>
        </div>
      </section>

      {/* Cos'è il cappotto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Cos'è il cappotto termico esterno?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Il cappotto termico esterno è un sistema di isolamento applicato sulle pareti esterne dell'edificio. Consiste in uno strato di materiale isolante (generalmente in polistirene espanso o fibra di legno) rivestito da una finitura protettiva e decorativa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A differenza dell'isolamento interno, il cappotto esterno avvolge l'intero edificio eliminando i ponti termici e mantenendo la massa termica dei muri all'interno. Il risultato è un comfort abitativo superiore e un risparmio energetico significativo.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <p className="text-orange-800 font-medium">
                  <TrendingDown className="w-5 h-5 inline mr-2" />
                  Riduzione dei consumi energetici fino al 40%
                </p>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Scopri se fa al caso tuo
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop" 
                alt="Dettaglio cappotto termico" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Perché scegliere il cappotto termico?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Il cappotto termico è l'investimento più efficace per migliorare l'efficienza energetica della tua casa.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vantaggi.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <v.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spessori */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Scegli lo spessore giusto per la tua casa</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Lo spessore dell'isolante dipende dal clima della tua zona e dall'efficienza energetica che vuoi raggiungere.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {spessori.map((s) => (
              <div key={s.cm} className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                <div className="text-4xl font-bold text-orange-500 mb-2">{s.cm}cm</div>
                <div className="text-lg font-semibold mb-1">{s.risparmio} di risparmio</div>
                <div className="text-gray-600 text-sm">{s.ideale}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Come funziona l'installazione</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Preparazione', desc: 'Pulizia e preparazione della superficie muraria' },
              { step: '2', title: 'Colla', desc: 'Applicazione dell\'adesivo sui pannelli isolanti' },
              { step: '3', title: 'Posa', desc: 'Installazione dei pannelli con doppio ancoraggio' },
              { step: '4', title: 'Rasante', desc: 'Applicazione della malta di rasante e rete' },
              { step: '5', title: 'Finitura', desc: 'Applicazione del rivestimento decorativo finale' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-white/80 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detrazioni */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ecobonus 65%: il cappotto ti costa la metà
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Il cappotto termico rientra nell'Ecobonus con detrazione del 65% delle spese. Puoi scegliere di detrarre in 10 anni, usufruire dello sconto immediato in fattura o cedere il credito a banche e intermediari finanziari.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-400">65%</div>
                  <div className="text-sm text-white/80">Detrazione Ecobonus</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-400">5-7</div>
                  <div className="text-sm text-white/80">Anni di rientro</div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Detrazione del 65% in 10 anni',
                  'Sconto immediato in fattura',
                  'Cessione del credito disponibile',
                  'Nessun limite di spesa per condomini',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contatti"
                className="inline-block bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Calcola il tuo risparmio
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop" 
                alt="Casa con cappotto termico" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sul Cappotto Termico" items={faqItems} />
      <Footer />
    </div>
  );
}
