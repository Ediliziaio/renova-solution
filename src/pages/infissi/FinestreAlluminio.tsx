import { Link } from 'react-router-dom';
import SEO, { serviceSchema, faqSchema } from '../../components/SEO';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { Sparkles, Thermometer, Shield, Wind, CheckCircle, Euro } from 'lucide-react';

export default function FinestreAlluminio() {
  const faqItems = [
    {
      question: 'Le finestre in alluminio sono migliori di quelle in PVC?',
      answer: 'Dipende dalle esigenze. L\'alluminio offre profili più sottili, maggiore resistenza meccanica e una vasta gamma di colori. Il PVC ha un isolamento termico leggermente superiore e costa meno. Entrambi sono eccellenti scelte.',
    },
    {
      question: 'L\'alluminio fa condensa?',
      answer: 'I moderni profili in alluminio a taglio termico eliminano il problema della condensa. La barriera termica interposta tra l\'interno e l\'esterno impedisce il passaggio del freddo, mantenendo la superficie interna sempre sopra il punto di rugiada.',
    },
    {
      question: 'Quanto costano le finestre in alluminio?',
      answer: 'Le finestre in alluminio costano generalmente il 20-30% in più rispetto al PVC. Il prezzo di una finestra in alluminio a taglio termico con doppio vetro oscilla tra i 400€ e gli 800€, posa inclusa.',
    },
    {
      question: 'L\'alluminio si ossida?',
      answer: 'I profili in alluminio sono anodizzati o verniciati a polvere, trattamenti che proteggono il metallo dall\'ossidazione e mantengono il colore inalterato per decenni, anche in ambienti marini.',
    },
  ];

  const caratteristiche = [
    {
      icon: Sparkles,
      title: 'Design minimal e moderno',
      description: 'Profili sottili che massimizzano la superficie vetrate, per ambienti luminosi e una vista mozzafiato.',
    },
    {
      icon: Thermometer,
      title: 'Taglio termico avanzato',
      description: 'Barriera termica in poliammide che separa il profilo interno da quello esterno, eliminando ponti termici.',
    },
    {
      icon: Shield,
      title: 'Robustezza e sicurezza',
      description: 'Resistenza meccanica superiore, ideale per grandi vetrate e aperture di dimensioni importanti.',
    },
    {
      icon: Wind,
      title: 'Tenuta all\'aria perfetta',
      description: 'Sistemi di tenuta multi-guarnizione che garantiscono isolamento termico e acustico eccellente.',
    },
    {
      icon: Euro,
      title: 'Valore nel tempo',
      description: 'Investimento che aumenta il valore dell\'immobile grazie alla qualità percepita e alla durabilità.',
    },
    {
      icon: CheckCircle,
      title: 'Infinite personalizzazioni',
      description: 'Centinaia di colori RAL, finiture legno, effetti metallici per un\'estetica su misura.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Finestre in Alluminio | Infissi Alluminio a Taglio Termico | Renova Solution"
        description="Finestre e infissi in alluminio a taglio termico in Friuli Venezia Giulia e Veneto. Design moderno, resistenza e durabilità. Detrazione fiscale 50%. Misurazione gratuita."
        keywords="finestre alluminio, infissi alluminio, finestre alluminio taglio termico, serramenti alluminio, infissi alluminio friuli, finestre alluminio veneto"
        canonical="https://renovasolution.it/infissi/finestre-alluminio"
        schema={[
          serviceSchema('Finestre in Alluminio', 'Vendita e installazione finestre in alluminio a taglio termico', 'https://renovasolution.it/infissi/finestre-alluminio'),
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
            alt="Finestre in Alluminio" 
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
            <span className="text-white">Finestre in Alluminio</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Finestre in Alluminio: Eleganza, Resistenza e Design Senza Compromessi
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Scopri il fascino senza tempo dell'alluminio. Profili sottili, infinite personalizzazioni cromatiche e prestazioni tecniche di altissimo livello per chi non accetta compromessi.
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
              Vedi colori disponibili
            </Link>
          </div>
        </div>
      </section>

      {/* Perché scegliere l'alluminio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Perché scegliere le finestre in alluminio?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                L'alluminio è il materiale dei grandi architetti. Offre resistenza meccanica superiore, permette profili estremamente sottili e si adatta a qualsiasi stile architettonico, dal classico al contemporaneo più spinto.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I nostri sistemi in alluminio a taglio termico combinano l'eleganza estetica del metallo con prestazioni termiche eccellenti. La barriera in poliammide interposta tra il profilo interno ed esterno elimina i ponti termici, garantendo isolamento e comfort.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-sm text-gray-600">Anni di durata</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">200+</div>
                  <div className="text-sm text-gray-600">Colori disponibili</div>
                </div>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Prenota consulenza gratuita
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
                alt="Finestra alluminio design" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Prestazioni che fanno la differenza</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tecnologia all'avanguardia per finestre che uniscono bellezza, funzionalità e durabilità.
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

      {/* Taglio termico */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop" 
                alt="Taglio termico alluminio" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">
                Il segreto dell'alluminio moderno? Il taglio termico
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I vecchi profili in alluminio erano criticati per la condensa e le dispersioni termiche. I moderni sistemi a taglio termico hanno rivoluzionato il settore.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Una barriera in poliammide rinforzata con fibra di vetro separa il profilo interno da quello esterno, creando un isolamento termico efficace che elimina la condensa e riduce le dispersioni.
              </p>
              <ul className="space-y-3">
                {[
                  'Eliminazione completa della condensa',
                  'Trasmittanza termica Uf fino a 1,0 W/m²K',
                  'Profili certificati per case passive',
                  'Resistenza meccanica inalterata',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Colori */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Infinite possibilità cromatiche</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Dalla verniciatura a polvere all'anodizzazione, dall'effetto legno ai metallizzati: personalizza le tue finestre come preferisci.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bianco', desc: 'Classico e senza tempo' },
              { name: 'Antracite', desc: 'Moderno ed elegante' },
              { name: 'Effetto legno', desc: 'Calore del legno, resistenza dell\'alluminio' },
              { name: 'Colori RAL', desc: 'Qualsiasi tonalità desideri' },
            ].map((c) => (
              <div key={c.name} className="text-center p-6 bg-white/10 rounded-lg">
                <h3 className="font-semibold mb-2">{c.name}</h3>
                <p className="text-white/70 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sconto in fattura */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Investi nel valore della tua casa con il 50% di detrazione
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Le finestre in alluminio non sono una spesa, sono un investimento che aumenta il valore del tuo immobile. E con le detrazioni fiscali, l'investimento diventa ancora più conveniente.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Detrazione fiscale del 50%',
                  'Aumento del valore dell\'immobile',
                  'Risparmio energetico immediato',
                  'Durata nel tempo superiore',
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
                Calcola il tuo risparmio
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop" 
                alt="Finestre alluminio moderne" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sulle Finestre in Alluminio" items={faqItems} />
      <Footer />
    </div>
  );
}
