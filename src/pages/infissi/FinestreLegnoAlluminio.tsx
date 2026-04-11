import { Link } from 'react-router-dom';
import SEO, { serviceSchema, faqSchema } from '../../components/SEO';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { TreePine, Thermometer, Shield, Sparkles, CheckCircle, Euro } from 'lucide-react';

export default function FinestreLegnoAlluminio() {
  const faqItems = [
    {
      question: 'Come funziona la finestra legno-alluminio?',
      answer: 'È un sistema ibrido: il telaio interno è in legno massello, che offre calore estetico e isolamento naturale, mentre il rivestimento esterno è in alluminio, che protegge il legno dalle intemperie senza necessità di manutenzione.',
    },
    {
      question: 'Quanto costano le finestre legno-alluminio?',
      answer: 'Sono la soluzione premium, con prezzi che partono da circa 600-700€ per finestra. Il costo superiore è giustificato dalla qualità dei materiali, dalla lavorazione artigianale e dalle prestazioni superiori.',
    },
    {
      question: 'Che tipo di legno viene utilizzato?',
      answer: 'Utilizziamo legni pregiati come larice, rovere e mogano, selezionati per la loro stabilità dimensionale e resistenza nel tempo. Tutti i legni sono trattati con impregnanti ecologici per una durata massima.',
    },
    {
      question: 'Richiedono manutenzione?',
      answer: 'L\'alluminio esterno è a zero manutenzione. Il legno interno può richiedere una riverniciatura ogni 7-10 anni, a seconda dell\'esposizione. Offriamo anche servizi di manutenzione programmata.',
    },
  ];

  const caratteristiche = [
    {
      icon: TreePine,
      title: 'Il calore del legno in casa',
      description: 'Il legno naturale crea un\'atmosfera accogliente e calda, con un\'estetica senza tempo che valorizza ogni ambiente.',
    },
    {
      icon: Shield,
      title: 'Protezione totale all\'esterno',
      description: 'L\'alluminio esterno protegge il legno da pioggia, gelo e raggi UV, eliminando la manutenzione costante.',
    },
    {
      icon: Thermometer,
      title: 'Isolamento naturale superiore',
      description: 'Il legno è un ottimo isolante naturale. Combinato con i vetri camera, offre prestazioni termiche eccellenti.',
    },
    {
      icon: Sparkles,
      title: 'Eleganza senza compromessi',
      description: 'L\'unione perfetta tra la bellezza tradizionale del legno e la praticità moderna dell\'alluminio.',
    },
    {
      icon: Euro,
      title: 'Valore immobiliare',
      description: 'Le finestre legno-alluminio sono un segno di qualità che aumenta significativamente il valore dell\'immobile.',
    },
    {
      icon: CheckCircle,
      title: 'Sostenibilità certificata',
      description: 'Legno proveniente da foreste gestite in modo sostenibile (FSC), per una scelta rispettosa dell\'ambiente.',
    },
  ];

  const legni = [
    { name: 'Larice', desc: 'Resistente, stabile, ideale per climi rigidi', color: 'bg-amber-200' },
    { name: 'Rovere', desc: 'Elegante, durevole, perfetto per interni classici', color: 'bg-amber-400' },
    { name: 'Mogano', desc: 'Pregiato, caldo, per un tocco di lusso', color: 'bg-red-900' },
    { name: 'Pino', desc: 'Economico, versatile, disponibile in varie tonalità', color: 'bg-yellow-200' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Finestre Legno-Alluminio | Infissi Premium Legno Alluminio | Renova Solution"
        description="Finestre e infissi in legno-alluminio in Friuli Venezia Giulia e Veneto. Il calore del legno all'interno, la resistenza dell'alluminio all'esterno. Detrazione 50%. Preventivo gratuito."
        keywords="finestre legno alluminio, infissi legno alluminio, serramenti legno alluminio, finestre legno alluminio prezzi, infissi legno alluminio friuli veneto"
        canonical="https://renovasolution.it/infissi/finestre-legno-alluminio"
        schema={[
          serviceSchema('Finestre Legno-Alluminio', 'Vendita e installazione finestre in legno-alluminio premium', 'https://renovasolution.it/infissi/finestre-legno-alluminio'),
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
            src="/images/confronto-finestre.jpg"
            alt="Finestre in Legno-Alluminio" 
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
            <span className="text-white">Finestre Legno-Alluminio</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Finestre Legno-Alluminio: Il Meglio di Due Mondi
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Il calore naturale del legno all'interno, la resistenza senza manutenzione dell'alluminio all'esterno. L'eccellenza per chi cerca il massimo senza compromessi.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contatti"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Richiedi consulenza premium
            </Link>
            <Link 
              to="/contatti"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              Scopri i legni disponibili
            </Link>
          </div>
        </div>
      </section>

      {/* Il meglio di due mondi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Il meglio del legno, la praticità dell'alluminio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Da sempre il legno è sinonimo di qualità, calore e bellezza naturale. Ma richiede manutenzione costante per resistere agli agenti atmosferici. L'alluminio è pratico e resistente, ma non ha l'anima del legno.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Le finestre legno-alluminio uniscono il meglio di entrambi i materiali: il telaio interno in legno massello porta in casa il calore e l'eleganza naturale del legno, mentre il rivestimento esterno in alluminio protegge il legno da pioggia, gelo e sole, eliminando la necessità di manutenzioni periodiche.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <p className="text-orange-800 font-medium italic">
                  "Una finestra legno-alluminio non è solo un infisso: è un pezzo di natura che entra in casa tua, protetto per durare una vita intera."
                </p>
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
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop" 
                alt="Dettaglio finestra legno-alluminio" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Prestazioni di eccellenza</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ogni dettaglio è curato per offrire il massimo in termini di estetica, comfort e durabilità.
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

      {/* Tipi di legno */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Scegli il legno che più ti rappresenta</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ogni tipo di legno ha la sua personalità. Scegli quello che meglio si abbina allo stile della tua casa.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {legni.map((l) => (
              <div key={l.name} className="text-center p-6 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                <div className={`w-20 h-20 ${l.color} rounded-full mx-auto mb-4`}></div>
                <h3 className="font-semibold mb-2">{l.name}</h3>
                <p className="text-gray-600 text-sm">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come è fatta */}
      <section className="py-16 bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Anatomia di una finestra legno-alluminio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-3">Telaio interno in legno</h3>
              <p className="text-white/80 text-sm">Massello di qualità, lavorato artigianalmente e trattato con impregnanti ecologici per una durata massima.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-3">Isolamento termico</h3>
              <p className="text-white/80 text-sm">Camera d'aria isolante e guarnizioni multi-labbro che garantiscono tenuta stagna e isolamento termico.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-3">Rivestimento alluminio</h3>
              <p className="text-white/80 text-sm">Profilo in alluminio a taglio termico che protegge il legno dagli agenti atmosferici senza manutenzione.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detrazioni */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Un investimento nel valore della tua casa
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Le finestre legno-alluminio sono la scelta di chi non accetta compromessi. E con le detrazioni fiscali del 50%, questo investimento di qualità diventa accessibile.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Detrazione fiscale del 50%',
                  'Aumento significativo del valore immobiliare',
                  'Legno FSC da foreste gestite sostenibilmente',
                  'Garanzia estesa fino a 10 anni',
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
                Richiedi preventivo personalizzato
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop" 
                alt="Finestre legno-alluminio eleganti" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sulle Finestre Legno-Alluminio" items={faqItems} />
      <Footer />
    </div>
  );
}
