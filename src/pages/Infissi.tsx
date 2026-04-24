import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import GalleriaLavori from '../components/GalleriaLavori';
import PartnerLogosInfissi from '../components/PartnerLogosInfissi';
import SEO, { serviceSchema, faqSchema } from '../components/SEO';
import { Shield, Thermometer, VolumeX, Sun, Wind, Lock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Infissi() {
  const faqItems = [
    {
      question: 'Quanto costa la sostituzione degli infissi in un appartamento?',
      answer: 'Il costo per la sostituzione degli infissi dipende dal materiale scelto, dalle dimensioni e dal numero di finestre. Per un appartamento di 100 mq con 6-8 finestre, il prezzo varia dai 4.000€ ai 10.000€ per infissi in PVC, e dai 6.000€ ai 14.000€ per il legno-alluminio. Con la detrazione fiscale del 50% per l\'abitazione principale, il costo effettivo si dimezza notevolmente.',
    },
    {
      question: 'Meglio infissi in PVC o in alluminio?',
      answer: 'Gli infissi in PVC offrono il miglior rapporto qualità-prezzo con eccellenti proprietà di isolamento termico e acustico, richiedono poca manutenzione e sono disponibili in molte finiture. L\'alluminio è più indicato per grandi vetrate e contesti moderni grazie ai profili più sottili e alla maggiore resistenza strutturale. Il legno-alluminio rappresenta la scelta premium, combinando il calore estetico del legno interno con la durabilità dell\'alluminio esterno.',
    },
    {
      question: 'Quali detrazioni fiscali sono previste per la sostituzione degli infissi?',
      answer: 'La sostituzione degli infissi rientra nella detrazione fiscale del 50% per l\'abitazione principale (bonus ristrutturazione), con un limite massimo di spesa di 96.000€ per unità immobiliare, recuperabile in 10 rate annuali nella dichiarazione dei redditi. Per accedere alla detrazione è necessario che i nuovi serramenti rispettino i valori di trasmittanza termica previsti dalla normativa. Renova Solution gestisce integralmente la pratica ENEA richiesta.',
    },
    {
      question: 'Quanto si risparmia in bolletta con infissi nuovi?',
      answer: 'Sostituendo vecchi infissi con modelli di ultima generazione a doppio o triplo vetro, è possibile ridurre le dispersioni termiche fino al 40%, con un risparmio annuo in bolletta compreso tra 400€ e 700€ a seconda della superficie vetrata e del tipo di riscaldamento utilizzato. L\'investimento si ripaga generalmente in 5-8 anni, considerando anche il beneficio della detrazione fiscale.',
    },
    {
      question: 'Quali sono i tempi di installazione per la sostituzione degli infissi?',
      answer: 'Per un appartamento standard con 6-8 finestre, l\'installazione completa richiede generalmente 1-2 giorni lavorativi. I nostri tecnici specializzati lavorano dall\'esterno, quindi non è necessario lasciare la casa durante i lavori. Dalla firma del contratto alla posa in opera, i tempi di consegna sono di circa 4-6 settimane, necessarie per la produzione su misura dei serramenti.',
    },
  ];

  const vantaggi = [
    {
      icon: Thermometer,
      title: 'Isolamento termico',
      description: 'Riduci le dispersioni fino al 70%',
    },
    {
      icon: VolumeX,
      title: 'Isolamento acustico',
      description: 'Fino a 45dB di riduzione del rumore',
    },
    {
      icon: Shield,
      title: 'Sicurezza',
      description: 'Serrature multipunto e vetri antisfondamento',
    },
    {
      icon: Sun,
      title: 'Risparmio energetico',
      description: 'Fino al 40% in meno in bolletta',
    },
    {
      icon: Wind,
      title: 'Tenuta all\'aria',
      description: 'Guarnizioni di ultima generazione',
    },
    {
      icon: Lock,
      title: 'Zero manutenzione',
      description: 'Materiali che durano nel tempo',
    },
  ];

  const prodotti = [
    {
      title: 'Finestre in PVC',
      price: 'Da 350€',
      desc: 'Il miglior isolamento al miglior prezzo. Ideale per chi cerca comfort e risparmio.',
      link: '/infissi/finestre-pvc',
    },
    {
      title: 'Finestre in Alluminio',
      price: 'Da 450€',
      desc: 'Design moderno, profili sottili e resistenza superiore. Per chi non scende a compromessi.',
      link: '/infissi/finestre-alluminio',
    },
    {
      title: 'Finestre Legno-Alluminio',
      price: 'Da 650€',
      desc: 'Il calore del legno dentro, la resistenza dell\'alluminio fuori. L\'eccellenza assoluta.',
      link: '/infissi/finestre-legno-alluminio',
    },
    {
      title: 'Porte Blindate',
      price: 'Da 1.500€',
      desc: 'Sicurezza certificata, isolamento termico e design moderno per la tua casa.',
      link: '/infissi/porte-portoni',
    },
  ];

  const schema = serviceSchema(
    'Infissi e Serramenti',
    'Finestre in PVC, alluminio e legno-alluminio con doppio o triplo vetro. Installazione rapida, detrazione fiscale 50%.',
    'https://www.renovasolution.it/infissi'
  );

  const faqStructuredData = faqSchema(faqItems);

  return (
    <>
      <SEO 
        title="Infissi e Serramenti | Finestre PVC, Alluminio, Legno in Veneto e Friuli"
        description="Finestre in PVC, alluminio e legno-alluminio con doppio o triplo vetro. Risparmia fino al 40% in bolletta. Detrazione 50%, installazione rapida."
        keywords="infissi PVC, finestre alluminio, serramenti legno, infissi Treviso, finestre Udine, doppio vetro, detrazione infissi"
        schema={[schema, faqStructuredData]}
        canonical="https://www.renovasolution.it/infissi"
        ogImage="/images/confronto-finestre.jpg"
      />
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/infissi.jpg" 
            alt="Finestra moderna in PVC con vista giardino" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#C8E600] text-black text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 md:mb-4">
              Detrazione 50%
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Infissi nuovi: risparmia fino al 40% in bolletta
            </h1>
            <p className="text-white/80 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-xl">
              Finestre in PVC, alluminio e legno-alluminio con doppio o triplo vetro. 
              Installazione rapida, detrazione fiscale 50%.
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
                Chiama ora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
              Perché cambiare gli infissi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Comfort, risparmio e sicurezza
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {vantaggi.map((v) => (
              <div key={v.title} className="text-center p-4 md:p-6 bg-gray-50 rounded-xl md:rounded-2xl">
                <v.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C8E600] mx-auto mb-3" />
                <h3 className="font-bold text-sm md:text-base mb-1">{v.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prodotti */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
              Le nostre soluzioni
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Scegli il materiale giusto per te
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {prodotti.map((p) => (
              <div key={p.title} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base md:text-lg mb-1">{p.title}</h3>
                <p className="text-[#C8E600] font-bold text-sm md:text-base mb-2 md:mb-3">{p.price}</p>
                <p className="text-gray-600 text-xs md:text-sm mb-4">{p.desc}</p>
                <Link 
                  to={p.link}
                  className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-[#C8E600] transition-colors"
                >
                  Scopri <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detrazione */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                Detrazione fiscale
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Risparmia il 50% con la detrazione fiscale
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6">
                La sostituzione degli infissi rientra nella detrazione fiscale del 50% per il risparmio energetico (abitazione principale).
                La detrazione viene ripartita in 10 rate annuali di pari importo nella dichiarazione dei redditi.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  'Detrazione del 50% sulle spese (abitazione principale)',
                  'Limite massimo di 96.000€ per unità immobiliare',
                  'Recupero in 10 rate annuali tramite dichiarazione dei redditi',
                  'Gestione completa pratica ENEA inclusa',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm md:text-base text-white/80">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#C8E600] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contatti"
                className="inline-block bg-[#C8E600] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b3cc00] transition-colors"
              >
                Calcola il tuo risparmio
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="/images/finestra-pvc.jpg" 
                alt="Finestre moderne" 
                className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <GalleriaLavori filtroCategoria="infissi" maxProgetti={3} />
      <PartnerLogosInfissi />
      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ Infissi e Serramenti" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
    </>
  );
}
