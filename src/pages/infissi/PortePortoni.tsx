import { Link } from 'react-router-dom';
import SEO, { serviceSchema, faqSchema } from '../../components/SEO';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { Lock, Thermometer, Shield, Key } from 'lucide-react';

export default function PortePortoni() {
  const faqItems = [
    {
      question: 'Quanto costa una porta blindata di qualità?',
      answer: 'Una porta blindata di buona qualità con serratura di sicurezza e vetro antisfondamento parte da circa 1.500-2.000€, posa inclusa. I modelli premium con certificazioni superiori possono arrivare a 4.000-5.000€.',
    },
    {
      question: 'Qual è la differenza tra porta blindata e portoncino blindato?',
      answer: 'La porta blindata è un unico elemento strutturale blindato. Il portoncino blindato ha una struttura blindata interna rivestita esternamente da un pannello (legno, alluminio, PVC) per una migliore estetica.',
    },
    {
      question: 'Quanto è sicura una porta blindata?',
      answer: 'Le porte blindate moderne sono certificate in classe 3 o 4 di resistenza all\'effrazione, con serrature a cilindro europeo anti-bumping, anti-drilling e scrocco automatico multiplo.',
    },
    {
      question: 'Le porte blindate isolano termicamente?',
      answer: 'Sì, le porte blindate moderne sono dotate di isolamento termico e acustico, con coibentazione interna e guarnizioni perimetrali che migliorano il comfort abitativo.',
    },
  ];

  const tipologie = [
    {
      icon: Lock,
      title: 'Porte blindate',
      description: 'Sicurezza certificata con struttura in acciaio, serrature multipunto e vetri di sicurezza. Disponibili in classe 3 e 4 di resistenza all\'effrazione.',
    },
    {
      icon: Shield,
      title: 'Portoncini d\'ingresso',
      description: 'L\'eleganza si unisce alla sicurezza. Rivestimenti in legno, alluminio o PVC per un ingresso che fa subito bella impressione.',
    },
    {
      icon: Key,
      title: 'Porte interne',
      description: 'Dalla classica porta a battente alle scorrevoli, dal moderno al classico. Soluzioni per ogni stile e esigenza di spazio.',
    },
    {
      icon: Thermometer,
      title: 'Porte tagliafuoco',
      description: 'Certificazioni REI 30, 60, 120 per la sicurezza degli edifici pubblici e privati. Conformi alle normative vigenti.',
    },
  ];

  const caratteristicheSicurezza = [
    'Struttura in acciaio zincato spessore 1,5-2 mm',
    'Serratura a cilindro europeo anti-bumping e anti-drilling',
    'Scrocco automatico multipunto (5 punti di chiusura)',
    'Cerniere a scomparsa rinforzate anti-strappo',
    'Vetro stratificato antisfondamento (classe 2P2)',
    'Spioncino ottico grandangolare con copri-spioncino',
    'Guarnizioni perimetrali antieffrazione',
    'Certificazione classe 3 o 4 resistenza all\'effrazione',
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Porte Blindate e Portoni | Sicurezza e Isolamento | Renova Solution"
        description="Porte blindate, portoni sezionali e porte d'ingresso in Friuli Venezia Giulia e Veneto. Massima sicurezza, isolamento termico e acustico. Installazione professionale e detrazione 50%."
        keywords="porte blindate friuli, portoni sezionali veneto, porte ingresso sicurezza, porte blindate prezzi, portoni garage, porte antieffrazione"
        canonical="https://renovasolution.it/infissi/porte-portoni"
        schema={[
          serviceSchema('Porte Blindate e Portoni', 'Vendita e installazione porte blindate e portoni di sicurezza', 'https://renovasolution.it/infissi/porte-portoni'),
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
            alt="Porte e Portoni" 
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
            <span className="text-white">Porte e Portoni</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Porte e Portoni Blindati: La Sicurezza Inizia dall'Ingresso
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Proteggi la tua casa e la tua famiglia con porte blindate certificate, serrature di ultima generazione e design che valorizza il tuo ingresso.
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
              Scopri i modelli
            </Link>
          </div>
        </div>
      </section>

      {/* La prima barriera di sicurezza */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                La sicurezza della tua casa inizia dalla porta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                La porta d'ingresso è il primo elemento di sicurezza di una casa. Una porta blindata di qualità non è solo una barriera fisica contro i malintenzionati, ma anche un elemento che migliora l'isolamento termico e acustico, aumentando il comfort abitativo e il valore dell'immobile.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Proponiamo soluzioni certificate di classe 3 e 4 di resistenza all'effrazione, con serrature di ultima generazione, cilindri europei anti-bumping e strutture in acciaio ad alto spessore. Ogni porta è personalizzabile in termini di estetica, finiture e accessori.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <p className="text-orange-800 font-medium">
                  <Lock className="w-5 h-5 inline mr-2" />
                  Tutte le nostre porte blindate sono certificate secondo la normativa UNI EN 1627
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
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop" 
                alt="Porta blindata moderna" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipologie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">La soluzione giusta per ogni esigenza</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dalla porta blindata per l'appartamento al portone condominiale, dalla porta interna a quella tagliafuoco: abbiamo la risposta per ogni necessità.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tipologie.map((t) => (
              <div key={t.title} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <t.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold mb-3">{t.title}</h3>
                <p className="text-gray-600 text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caratteristiche sicurezza */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tecnologia di sicurezza all'avanguardia
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Le nostre porte blindate incorporano le tecnologie più avanzate per garantire la massima sicurezza. Ogni componente è studiato per resistere ai tentativi di effrazione più sofisticati.
              </p>
              <ul className="space-y-3">
                {caratteristicheSicurezza.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop" 
                alt="Dettagli sicurezza porta" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Finiture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Sicurezza senza rinunciare all'estetica</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Le nostre porte blindate sono disponibili in infinite finiture per abbinarsi perfettamente allo stile della tua casa.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=400&h=300&fit=crop" 
                alt="Finitura legno" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Effetto legno</h3>
              <p className="text-gray-600 text-sm">Il calore del legno con la sicurezza dell'acciaio</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=300&fit=crop" 
                alt="Finitura moderna" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Design moderno</h3>
              <p className="text-gray-600 text-sm">Linee pulite e minimal per case contemporanee</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop" 
                alt="Finitura classica" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">Stile classico</h3>
              <p className="text-gray-600 text-sm">Eleganza senza tempo per ambienti tradizionali</p>
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
                Investi nella sicurezza con il 50% di detrazione
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                La sostituzione della porta d'ingresso rientra nelle detrazioni fiscali per il risparmio energetico. Puoi detrarre il 50% delle spese o usufruire dello sconto immediato in fattura.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-400">50%</div>
                  <div className="text-sm text-white/80">Detrazione fiscale</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-400">10</div>
                  <div className="text-sm text-white/80">Anni di rateizzazione</div>
                </div>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Scopri come risparmiare
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop" 
                alt="Porta blindata elegante" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ su Porte e Portoni Blindati" items={faqItems} />
      <Footer />
    </div>
  );
}
