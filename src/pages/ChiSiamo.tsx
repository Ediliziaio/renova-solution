import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO, { organizationSchema } from '../components/SEO';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Phone,
  Shield,
  Clock,
  Star,
  Zap,
  Heart,
  ArrowRight,
  Quote,
  Lightbulb,
  Handshake,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Calendar
} from 'lucide-react';

// Componente per contatore animato
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {value.includes('+') ? count + '+' : value.includes('%') ? count + '%' : count}
      {suffix}
    </span>
  );
}

export default function ChiSiamo() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const valori = [
    {
      icon: Shield,
      title: 'Affidabilità',
      desc: 'Rispettiamo tempi e costi concordati. Se promettiamo qualcosa, la manteniamo.'
    },
    {
      icon: Award,
      title: 'Qualità',
      desc: 'Utilizziamo solo materiali certificati e marchi leader del settore.'
    },
    {
      icon: Users,
      title: 'Trasparenza',
      desc: 'Preventivi chiari, nessuna sorpresa. Spieghiamo tutto prima di iniziare.'
    },
    {
      icon: Clock,
      title: 'Puntualità',
      desc: 'Interveniamo in 24-48h. Non ti facciamo aspettare settimane.'
    }
  ];

  const numeri = [
    { value: '10+', label: 'Anni di esperienza', sub: 'Dal 2014' },
    { value: '500+', label: 'Impianti installati', sub: 'Fotovoltaici' },
    { value: '8', label: 'Province servite', sub: 'Veneto e FVG' },
    { value: '98%', label: 'Clienti soddisfatti', sub: 'Feedback positivi' }
  ];

  const percorso = [
    {
      anno: '2014',
      titolo: 'Le origini',
      desc: 'Nascita a Prata di Pordenone con la missione di portare energia pulita nelle case del Nordest.'
    },
    {
      anno: '2017',
      titolo: 'Specializzazione',
      desc: 'Focus sul fotovoltaico residenziale e prime partnership con brand internazionali.'
    },
    {
      anno: '2019',
      titolo: 'Espansione',
      desc: 'Aggiunta infissi e ristrutturazioni per un servizio completo di riqualificazione energetica.'
    },
    {
      anno: '2022',
      titolo: 'Rinnovamento',
      desc: 'Nuovo brand Renova Solution e espansione in tutto il Veneto e Friuli Venezia Giulia.'
    },
    {
      anno: '2024',
      titolo: 'Oggi',
      desc: 'Leader regionale con oltre 500 impianti installati e un team di esperti qualificati.'
    }
  ];

  const servizi = [
    {
      img: '/images/fotovoltaico.jpg',
      title: 'Fotovoltaico',
      desc: 'Impianti solari per casa e azienda con batterie di accumulo',
      link: '/fotovoltaico-privati'
    },
    {
      img: '/images/infissi.jpg',
      title: 'Infissi',
      desc: 'Finestre in PVC, alluminio e legno-alluminio',
      link: '/infissi'
    },
    {
      img: '/images/ristrutturazioni.jpg',
      title: 'Ristrutturazioni',
      desc: 'Cappotto termico e ristrutturazioni complete',
      link: '/ristrutturazioni'
    },
    {
      img: '/images/climatizzazione.jpg',
      title: 'Climatizzazione',
      desc: 'Pompe di calore e climatizzatori ad alta efficienza',
      link: '/climatizzazione'
    }
  ];

  const certificazioni = [
    { nome: 'ISO 9001', desc: 'Qualità' },
    { nome: 'ISO 14001', desc: 'Ambiente' },
    { nome: 'CEI 0-21', desc: 'Connessioni' },
    { nome: 'F-Gas', desc: 'Gas fluorurati' }
  ];

  const partner = ['SunPower', 'SolarEdge', 'Tesla', 'LG', 'BYD', 'Daikin', 'Mitsubishi', 'Rehau'];

  const percheSceglierci = [
    { icon: Zap, title: 'Esperienza', desc: '10 anni e 500+ impianti installati' },
    { icon: Heart, title: 'Passione', desc: 'Crediamo nelle energie rinnovabili' },
    { icon: Handshake, title: 'Affidabilità', desc: 'Partner per i prossimi 20 anni' },
    { icon: Lightbulb, title: 'Innovazione', desc: 'Sempre aggiornati sulle ultime tecnologie' }
  ];

  const processo = [
    { step: '1', title: 'Consulenza', desc: 'Analisi delle tue esigenze' },
    { step: '2', title: 'Sopralluogo', desc: 'Valutazione tecnica gratuita' },
    { step: '3', title: 'Progetto', desc: 'Proposta personalizzata' },
    { step: '4', title: 'Installazione', desc: 'Esecuzione a regola d\'arte' },
    { step: '5', title: 'Assistenza', desc: 'Supporto post-installazione' }
  ];

  const testimonianze = [
    {
      quote: 'Ho scelto Renova dopo 5 preventivi. Sono stati gli unici a spiegarmi davvero come funziona il fotovoltaico. Dopo 2 anni, l\'impianto produce esattamente quello promesso.',
      autore: 'Paolo M.',
      ruolo: 'Treviso',
      rating: 5
    },
    {
      quote: 'Professionalità impressionante. 8 finestre installate in un giorno, tutto pulito e perfetto. In inverno si sente davvero la differenza.',
      autore: 'Silvia R.',
      ruolo: 'Udine',
      rating: 5
    },
    {
      quote: 'Ristrutturazione completa coordinata alla perfezione. Consegnata in tempo e nel budget. Consigliatissimi.',
      autore: 'Roberto F.',
      ruolo: 'Pordenone',
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Chi Siamo | Renova Solution - Azienda Fotovoltaico Veneto e Friuli"
        description="Renova Solution: 10+ anni di esperienza in fotovoltaico, infissi e ristrutturazioni. 500+ impianti installati in Veneto e Friuli."
        keywords="Renova Solution chi siamo, azienda fotovoltaico Pordenone, riqualificazione energetica"
        schema={organizationSchema}
        canonical="https://renovasolution.it/chi-siamo"
      />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section con Parallax */}
        <section ref={heroRef} className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ scale: heroScale }}
          >
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop" 
              alt="Impianti fotovoltaici" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          </motion.div>
          
          <motion.div 
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
            style={{ opacity: heroOpacity }}
          >
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-[#C8E600] text-black text-xs font-bold px-4 py-2 rounded-full">
                  <Award className="w-3 h-3" />
                  Dal 2014
                </span>
                <span className="inline-flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Prata di Pordenone, PN
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Il partner per la tua casa{' '}
                <span className="text-[#C8E600]">efficiente</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl"
              >
                Da oltre 10 anni trasformiamo case e aziende in luoghi più sostenibili. 
                Fotovoltaico, infissi, ristrutturazioni: un unico partner per il tuo risparmio energetico.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contatti"
                  className="group bg-[#C8E600] text-black px-8 py-4 rounded-full font-bold hover:bg-[#b8d600] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#C8E600]/30 flex items-center justify-center gap-2"
                >
                  Richiedi preventivo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#servizi"
                  className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                >
                  Scopri i servizi
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 bg-[#C8E600] rounded-full"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Numeri con contatori animati */}
        <section className="py-12 md:py-16 bg-[#C8E600] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {numeri.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-1">
                    <AnimatedCounter value={n.value} />
                  </div>
                  <p className="text-black/80 font-medium text-sm md:text-base">{n.label}</p>
                  <p className="text-black/50 text-xs">{n.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chi siamo - Descrizione */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                  <div className="w-8 h-0.5 bg-[#C8E600]"></div>
                  Chi siamo
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Da un sogno a una <span className="text-[#C8E600]">realtà</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Renova Solution nasce nel 2014 con un'idea semplice ma ambiziosa: 
                    aiutare famiglie e aziende del Veneto e del Friuli Venezia Giulia 
                    a risparmiare energia e contribuire a un futuro più sostenibile.
                  </p>
                  <p>
                    Partiamo come piccola ditta di installazioni elettriche a Prata di Pordenone. 
                    I primi anni non sono facili, ma la passione per le energie rinnovabili 
                    ci spinge avanti.
                  </p>
                  <p>
                    Oggi siamo una realtà solida con un team di tecnici qualificati 
                    e oltre 500 impianti installati. Sempre guidati dai valori di 
                    <strong> passione, qualità e trasparenza</strong>.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#C8E600]" />
                    <span>Installazione in 2-3 giorni</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#C8E600]" />
                    <span>Garanzia 10 anni</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#C8E600]" />
                    <span>Detrazione fiscale 50%</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" 
                      alt="Installazione fotovoltaico" 
                      className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl mt-6 md:mt-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1548613053-220e75581890?w=600&h=400&fit=crop" 
                      alt="Pannelli solari" 
                      className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl -mt-6 md:-mt-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop" 
                      alt="Tecnici al lavoro" 
                      className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" 
                      alt="Infissi" 
                      className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* I nostri servizi - Card moderne */}
        <section id="servizi" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-[#C8E600]"></div>
                I nostri servizi
                <div className="w-8 h-0.5 bg-[#C8E600]"></div>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Tutto per la tua casa
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un unico partner per fotovoltaico, infissi, ristrutturazioni e climatizzazione.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {servizi.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={s.link} className="group block relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/5]">
                    <img 
                      src={s.img} 
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-1 md:mb-2 group-hover:text-[#C8E600] transition-colors">{s.title}</h3>
                      <p className="text-white/70 text-sm mb-3 md:mb-4 line-clamp-2">{s.desc}</p>
                      <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                        Scopri di più <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline moderna */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <Calendar className="w-4 h-4" />
                Il nostro percorso
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                10 anni di <span className="text-[#C8E600]">crescita</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Linea centrale animata */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-[#C8E600]"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>

              {percorso.map((p, i) => (
                <motion.div
                  key={p.anno}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative flex items-start gap-6 md:gap-8 mb-10 md:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:block w-5/12 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{p.titolo}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{p.desc}</p>
                  </div>
                  
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-[#C8E600] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 shadow-lg">
                    <span className="text-[#C8E600] font-bold text-xs md:text-sm">{p.anno.slice(-2)}</span>
                  </div>
                  
                  <div className="pl-16 md:pl-0 md:w-5/12">
                    <span className="text-2xl md:text-3xl font-bold text-[#C8E600]">{p.anno}</span>
                    <div className="md:hidden mt-2">
                      <h3 className="text-lg font-bold mb-1">{p.titolo}</h3>
                      <p className="text-gray-600 text-sm">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Missione e Visione - Card moderne */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#C8E600] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-black" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">La nostra missione</h2>
                <p className="text-gray-600 leading-relaxed">
                  Aiutare famiglie e aziende del Veneto e del Friuli Venezia Giulia a ridurre 
                  i consumi energetici, abbattere i costi in bolletta e contribuire a un futuro 
                  più sostenibile. Con soluzioni su misura e assistenza che dura nel tempo.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-3xl p-6 md:p-10 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#C8E600]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">La nostra visione</h2>
                <p className="text-white/70 leading-relaxed">
                  Diventare il partner di riferimento per la riqualificazione energetica 
                  in tutto il Nordest. Dove qualità e soddisfazione del cliente vengono prima di tutto.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valori - Card con hover */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <Shield className="w-4 h-4" />
                I nostri valori
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Cosa ci guida ogni giorno
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {valori.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-[#C8E600] hover:shadow-xl hover:shadow-[#C8E600]/20 transition-all cursor-default"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C8E600] group-hover:bg-black rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5 transition-colors">
                    <v.icon className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:text-[#C8E600] transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 group-hover:text-black transition-colors">{v.title}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-black/80 transition-colors">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificazioni - Badge moderne */}
        <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8E600] rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <Award className="w-4 h-4" />
                Qualità certificata
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Le nostre certificazioni
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {certificazioni.map((c, i) => (
                <motion.div
                  key={c.nome}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[#C8E600]/50 transition-all"
                >
                  <Award className="w-10 h-10 md:w-12 md:h-12 text-[#C8E600] mx-auto mb-3 md:mb-4" />
                  <p className="text-white font-bold text-lg md:text-xl">{c.nome}</p>
                  <p className="text-white/50 text-xs md:text-sm">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner - Logo grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <Handshake className="w-4 h-4" />
                I nostri partner
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Collaboriamo con i migliori
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {partner.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(200, 230, 0, 0.1)' }}
                  className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all border border-transparent hover:border-[#C8E600]/30"
                >
                  <p className="font-bold text-gray-900 text-sm md:text-base">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perché sceglierci - Feature list */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                  <Zap className="w-4 h-4" />
                  Perché noi
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Cosa ci rende <span className="text-[#C8E600]">diversi</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Scegliere Renova Solution significa affidarsi a un partner che mette 
                  la qualità e la soddisfazione del cliente al primo posto.
                </p>

                <div className="space-y-4">
                  {percheSceglierci.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C8E600] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                        <p.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg mb-1">{p.title}</h3>
                        <p className="text-gray-600 text-sm">{p.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop" 
                    alt="Tecnico al lavoro" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#C8E600] rounded-2xl p-4 md:p-6 shadow-xl">
                  <p className="text-black font-bold text-2xl md:text-3xl">500+</p>
                  <p className="text-black/70 text-sm">Impianti installati</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Processo - Steps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <Clock className="w-4 h-4" />
                Come lavoriamo
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Processo collaudato
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {processo.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#C8E600] group-hover:bg-black rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-black group-hover:text-[#C8E600] mx-auto transition-colors shadow-lg group-hover:shadow-xl">
                      {p.step}
                    </div>
                    {i < processo.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2">
                        <div className="w-full h-full bg-[#C8E600] origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1">{p.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonianze - Carousel style */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-4">
                <Star className="w-4 h-4" />
                Cosa dicono di noi
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                La voce dei clienti
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {testimonianze.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/10 hover:border-[#C8E600]/30 transition-all"
                >
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#C8E600]/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-[#C8E600] fill-[#C8E600]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C8E600] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{t.autore.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{t.autore}</p>
                      <p className="text-white/50 text-xs">{t.ruolo}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 md:py-24 bg-[#C8E600] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                Pronto a iniziare?
              </h2>
              <p className="text-black/70 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Richiedi una consulenza gratuita. Ti aiuteremo a trovare la soluzione 
                perfetta per le tue esigenze.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link 
                  to="/contatti"
                  className="group bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Richiedi preventivo
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:+393939596194"
                  className="group bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  393 959 6194
                </a>
              </div>
              <p className="text-black/50 text-xs md:text-sm mt-4 md:mt-6">
                Sopralluogo gratuito in tutto il Veneto e Friuli V.G.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
