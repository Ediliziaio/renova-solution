import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO, { organizationSchema, localBusinessSchema } from '../components/SEO';
import { 
  Sun, 
  Home as HomeIcon, 
  Wrench, 
  FileText, 
  User, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Quote
} from 'lucide-react';

// Hook per animazione counter
function useCounter(end: number, duration: number = 2, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
}

// Componente per sezione animata al scroll
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Card servizio con animazione hover
function ServiceCard({ icon: Icon, title, description, cta, ctaLink, delay }: { 
  icon: any, 
  title: string, 
  description: string, 
  cta: string, 
  ctaLink: string,
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
    >
      <motion.div 
        className="w-14 h-14 bg-[#C8E600] rounded-xl flex items-center justify-center mb-5"
        whileHover={{ rotate: 5, scale: 1.05 }}
      >
        <Icon className="w-7 h-7 text-black" />
      </motion.div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">{description}</p>
      <Link 
        to={ctaLink}
        className="inline-flex items-center gap-2 text-black font-bold text-sm group"
      >
        <span className="bg-[#C8E600] px-4 py-2.5 rounded-full group-hover:bg-[#b3cc00] transition-colors">
          {cta}
        </span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

// Feature block per "Perché noi"
function FeatureBlock({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 items-start"
    >
      <motion.div 
        className="w-12 h-12 bg-[#C8E600]/10 rounded-xl flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(200, 230, 0, 0.3)" }}
      >
        <Icon className="w-6 h-6 text-[#C8E600]" />
      </motion.div>
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Stat counter
function StatCounter({ value, suffix = '', label, delay }: { value: number, suffix?: string, label: string, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(value, 2, isInView);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C8E600] mb-2">
        {value === 0 ? '€ 0' : `+${count}${suffix}`}
      </div>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

// Testimonianza
function Testimonial({ quote, author, location, delay }: { quote: string, author: string, location: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-50 rounded-2xl p-6 md:p-8 relative"
    >
      <Quote className="w-10 h-10 text-[#C8E600]/30 absolute top-4 right-4" />
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#C8E600] rounded-full flex items-center justify-center text-black font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  
  return (
    <>
      <SEO 
        title="Renova Solution | Fotovoltaico, Infissi e Ristrutturazioni in Friuli Venezia Giulia e Veneto"
        description="Impianti fotovoltaici, infissi ad alta efficienza e ristrutturazioni chiavi in mano in Friuli Venezia Giulia e Veneto. Sopralluogo gratuito a Trieste, Udine, Pordenone, Gorizia, Treviso, Venezia, Padova, Vicenza, Verona, Belluno, Rovigo."
        keywords="fotovoltaico friuli venezia giulia, fotovoltaico veneto, infissi friuli, infissi veneto, ristrutturazioni friuli venezia giulia, ristrutturazioni veneto, pannelli solari trieste, infissi udine, ristrutturazioni padova, fotovoltaico treviso, infissi pordenone, fotovoltaico vicenza, infissi verona, ristrutturazioni venezia, cappotto termico, finestre PVC, detrazione fiscale 50%"
        canonical="https://www.renovasolution.it/"
        schema={[organizationSchema, localBusinessSchema]}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
      
      {/* ① HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center">
        {/* Background con overlay gradiente */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/hero-home.jpg" 
            alt="Casa moderna con pannelli fotovoltaici in Friuli Venezia Giulia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-[#C8E600] text-black text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6"
            >
              Operiamo in Friuli Venezia Giulia e Veneto
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Casa tua paga ancora bollette che non dovrebbe pagare.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-white/80 text-base md:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed"
            >
              Fotovoltaico, infissi ad alta efficienza e ristrutturazioni chiavi in mano.
              <br className="hidden sm:block" />
              In Friuli Venezia Giulia e Veneto, da chi fa solo questo — da anni.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/contatti"
                className="group bg-[#C8E600] text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#b3cc00] transition-all flex items-center justify-center gap-2"
              >
                Richiedi il sopralluogo gratuito
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
              <Link 
                to="/chi-siamo"
                className="text-white font-bold text-base hover:text-[#C8E600] transition-colors flex items-center justify-center gap-2 underline underline-offset-4"
              >
                Guarda i lavori realizzati
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* ② SEZIONE PROBLEMA — "Chi siamo davvero" */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Basta lavori a metà. Basta preventivi che cambiano strada facendo.
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              <p>Hai già sentito questa storia.</p>
              <p>Chiamate l'impresa. Arriva il preventivo. I lavori iniziano.</p>
              <p>Poi rallentano. Poi qualcosa non torna.</p>
              <p>Poi finisce che chiami tu — non loro.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="w-20 h-1 bg-[#C8E600] mx-auto mb-10"></div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-10">
              <p className="font-medium">Noi lavoriamo in modo diverso.</p>
              <p>Un referente. Un preventivo chiaro. Una data di fine lavori reale.</p>
              <p>E tu ricevi aggiornamenti — senza doverli chiedere.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.7}>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              <span className="font-bold text-[#C8E600]">Renova Solution</span> interviene su fotovoltaico, infissi e ristrutturazioni.
              <br />
              Non facciamo di tutto. Facciamo bene queste tre cose.
              <br />
              In Friuli Venezia Giulia e in Veneto.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ③ SEZIONE SERVIZI */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-3">
              I nostri servizi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Tre cose. Fatte bene.
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={Sun}
              title="Smetti di regalare soldi all'ENEL ogni mese."
              description={`Un impianto fotovoltaico ben fatto si ripaga.

Non tra 20 anni — tra 5 o 6.

Il problema è che molti vengono installati male, sovradimensionati, o senza un'analisi seria dei tuoi consumi reali.

Noi partiamo dai tuoi dati — bolletta, metratura, orientamento del tetto.
Poi ti diciamo quanto produci, quanto risparmi, in quanti anni rientri.

Numeri veri. Non stime ottimistiche per chiudere la vendita.`}
              cta="Calcola il risparmio reale"
              ctaLink="/fotovoltaico-privati"
              delay={0}
            />
            
            <ServiceCard
              icon={HomeIcon}
              title="D'inverno senti il freddo vicino alle finestre. Non è normale."
              description={`Non è colpa del riscaldamento che non funziona.
Sono i serramenti.

Ogni finestra vecchia è un buco nell'energia che paghi.

Sostituire gli infissi con materiali ad alta efficienza termica può tagliare il consumo energetico di casa fino al 30%.

E nel Triveneto — dove gli inverni si fanno sentire — è un investimento che senti già alla prima stagione.

Misuriamo, consigliamo il materiale giusto per il tuo tipo di casa, installiamo con cura. Senza sorprese sul prezzo finale.`}
              cta="Prenota la misurazione gratuita"
              ctaLink="/infissi"
              delay={0.15}
            />
            
            <ServiceCard
              icon={Wrench}
              title="Una ristrutturazione non dovrebbe essere un lavoro a part-time per te."
              description={`Eppure è quello che succede.

Chiami il piastrellista, poi l'idraulico, poi l'elettricista.
Ognuno aspetta l'altro. Tu aspetti tutti.
E nel mezzo c'è la tua casa — o il tuo immobile — fermo.

Con Renova Solution hai un unico interlocutore.
Gestisce i lavori, coordina le maestranze, ti aggiorna.

Tu decidi e approvi. Il resto lo facciamo noi.

Interventi in Friuli Venezia Giulia e Veneto.
Bagni, cucine, rifacimenti facciate, adeguamenti energetici.`}
              cta="Descrivi il tuo progetto"
              ctaLink="/ristrutturazioni"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ④ SEZIONE PERCHÉ NOI — "Il metodo Renova" */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-3">
              Il nostro metodo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Cosa cambia scegliendo Renova Solution.
            </h2>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <FeatureBlock
              icon={FileText}
              title="Preventivo fisso, non indicativo"
              description="Quello che scritto è quello che paghi. Se emergono imprevisti strutturali non visibili in fase di sopralluogo, te lo diciamo prima di procedere — non dopo."
              delay={0}
            />
            <FeatureBlock
              icon={User}
              title="Un referente per tutto il lavoro"
              description="Non insegui nessuno. Hai un numero. Una persona. Risponde."
              delay={0.1}
            />
            <FeatureBlock
              icon={Calendar}
              title="Consegna nelle date pattuite"
              description="Lo scriviamo nel contratto. Se non rispettiamo i tempi per cause nostre, ci assumiamo la responsabilità. Senza discussioni."
              delay={0.2}
            />
            <FeatureBlock
              icon={MapPin}
              title="Conosciamo il territorio"
              description="Lavoriamo in Friuli Venezia Giulia e Veneto da anni. Sappiamo come funzionano i comuni, le pratiche, le detrazioni fiscali disponibili nella tua zona."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ⑤ SEZIONE NUMERI */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              I numeri parlano. Lasciamoli parlare.
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value={350} suffix="" label="Interventi completati in FVG e Veneto" delay={0} />
            <StatCounter value={0} suffix="" label="Sorprese in fattura rispetto al preventivo firmato" delay={0.15} />
            <StatCounter value={30} suffix="%" label="Consumo energetico medio dopo intervento" delay={0.3} />
            <StatCounter value={24} suffix="h" label="Tempo massimo per ricevere il nostro primo risposto" delay={0.45} />
          </div>
        </div>
      </section>

      {/* ⑥ SEZIONE TESTIMONIANZE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-3">
              Testimonianze
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Quello che dicono chi ha scelto Renova Solution.
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Testimonial
              quote="Avevo già avuto brutte esperienze con altre ditte. Ho aspettato prima di dare il giudizio finale. Ma i lavori sono stati consegnati in tempo, il preventivo non è cambiato di un euro, e il fotovoltaico produce esattamente quello che mi avevano detto. Non capita spesso."
              author="Marco T."
              location="Udine"
              delay={0}
            />
            <Testimonial
              quote="Le finestre le avevo cambiate già una volta dieci anni fa con un'altra ditta. Non ero mai soddisfatta del risultato. Questa volta hanno misurato tutto con cura, spiegato ogni materiale, e in casa si sente davvero la differenza d'inverno."
              author="Giulia M."
              location="Treviso"
              delay={0.15}
            />
            <Testimonial
              quote="Ristrutturazione del bagno e della cucina insieme. Non pensavo fosse possibile senza impazzire. Invece hanno coordinato tutto loro. Io sono tornato a casa e i lavori erano finiti. Puliti, nei tempi, senza casino."
              author="Roberto F."
              location="Pordenone"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ⑦ SEZIONE DETRAZIONI */}
      <section className="py-20 md:py-28 bg-[#C8E600]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Stato paga parte del tuo intervento. Sai quanto?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-black/80 text-base md:text-lg leading-relaxed mb-8">
              Le detrazioni fiscali per fotovoltaico, infissi e ristrutturazioni esistono.
              Ma cambiano ogni anno. Dipendono dal tipo di intervento, dalla tua situazione fiscale, dal comune in cui vivi.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <p className="text-black/80 text-base md:text-lg leading-relaxed mb-10">
              Noi ti diciamo esattamente a cosa hai diritto — <span className="font-bold">prima di iniziare</span>.
              Non a lavori finiti.
              Gestiamo la documentazione tecnica necessaria per accedere alle detrazioni.
              Tu non devi fare ricerche o chiamare il CAF.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <Link 
              to="/contatti"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-800 transition-colors"
            >
              Scopri le detrazioni disponibili per il tuo caso
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ⑧ SEZIONE AREA GEOGRAFICA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-[#C8E600] text-sm font-bold uppercase tracking-wider mb-3">
                Dove operiamo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Operiamo dove vivi tu.
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Renova Solution lavora in Friuli Venezia Giulia e in Veneto.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Trieste, Udine, Pordenone, Gorizia, Treviso, Venezia, Padova, Vicenza, Verona, Belluno, Rovigo.
                Non mandiamo squadre a 300 km di distanza con i tempi che ne conseguono.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Conosciamo i fornitori locali, i professionisti, le normative comunali.
                E quando serve essere in cantiere, ci siamo.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img 
                  src="/images/team.jpg" 
                  alt="Team Renova Solution al lavoro su impianto fotovoltaico" 
                  className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {['Trieste', 'Udine', 'Pordenone', 'Gorizia', 'Treviso', 'Venezia', 'Padova', 'Vicenza', 'Verona', 'Belluno', 'Rovigo'].map((city) => (
                      <span key={city} className="bg-white/90 text-black text-xs font-bold px-3 py-1.5 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ⑨ SEZIONE FORM / CTA FINALE */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inizia da qui. Senza impegno.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Raccontaci cosa vuoi fare. Ti risponde una persona — non un bot.
              <br />
              Entro 24 ore fissate il sopralluogo gratuito.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <form className="bg-white rounded-2xl p-6 md:p-10 shadow-xl">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome e Cognome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C8E600] focus:ring-2 focus:ring-[#C8E600]/20 outline-none transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C8E600] focus:ring-2 focus:ring-[#C8E600]/20 outline-none transition-all"
                    placeholder="+39 3xx xxx xxxx"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comune (dove si trova l'immobile)</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C8E600] focus:ring-2 focus:ring-[#C8E600]/20 outline-none transition-all text-gray-700">
                    <option value="">Seleziona il comune</option>
                    <option value="udine">Udine</option>
                    <option value="trieste">Trieste</option>
                    <option value="gorizia">Gorizia</option>
                    <option value="pordenone">Pordenone</option>
                    <option value="treviso">Treviso</option>
                    <option value="venezia">Venezia</option>
                    <option value="padova">Padova</option>
                    <option value="vicenza">Vicenza</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Di cosa hai bisogno?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C8E600] focus:ring-2 focus:ring-[#C8E600]/20 outline-none transition-all text-gray-700">
                    <option value="">Seleziona il servizio</option>
                    <option value="fotovoltaico">Fotovoltaico</option>
                    <option value="infissi">Infissi</option>
                    <option value="ristrutturazione">Ristrutturazione</option>
                    <option value="non-so">Non so ancora</option>
                  </select>
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#C8E600] text-black py-4 rounded-full font-bold text-base hover:bg-[#b3cc00] transition-colors flex items-center justify-center gap-2"
                >
                  Invia la richiesta
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              
              <p className="text-center text-gray-400 text-xs mt-5">
                Nessuno ti chiamerà 40 volte. Un contatto. Una risposta.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
