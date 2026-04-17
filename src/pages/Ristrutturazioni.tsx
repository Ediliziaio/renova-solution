import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';
import SEO, { serviceSchema, faqSchema } from '../components/SEO';
import { Home, Paintbrush, Zap, Droplets, CheckCircle, TrendingDown, Thermometer, ArrowRight } from 'lucide-react';

export default function Ristrutturazioni() {
  const faqItems = [
    {
      question: 'Quanto costa ristrutturare casa al metro quadro?',
      answer: 'Il costo di una ristrutturazione completa varia dai 800€ ai 1.500€ al metro quadro, a seconda dell\'entità dei lavori e delle finiture scelte. Per un appartamento di 100 mq, il budget indicativo è compreso tra 80.000€ e 150.000€. Renova Solution fornisce un preventivo dettagliato e trasparente dopo il sopralluogo gratuito, senza sorprese o costi nascosti durante i lavori.',
    },
    {
      question: 'Quanto tempo ci vuole per ristrutturare un appartamento?',
      answer: 'I tempi di una ristrutturazione dipendono dalla complessità dell\'intervento: per un appartamento di 80-100 mq con ristrutturazione completa (impianti, pavimenti, bagni e finiture) servono mediamente 3-5 mesi. Prima dell\'inizio dei lavori, forniamo un cronoprogramma dettagliato con le tempistiche di ogni fase, dalla demolizione alla consegna chiavi in mano.',
    },
    {
      question: 'Quali permessi servono per ristrutturare casa?',
      answer: 'Per la manutenzione straordinaria leggera (sostituzione pavimenti, rifacimento bagno, tinteggiatura) è sufficiente la CILA (Comunicazione Inizio Lavori Asseverata). Per interventi strutturali come abbattimento di pareti portanti o ampliamenti, è necessaria la SCIA o il Permesso di Costruire. Renova Solution si occupa di tutta la gestione burocratica, dalla richiesta dei permessi alla chiusura lavori, in collaborazione con tecnici abilitati.',
    },
    {
      question: 'Come funziona la detrazione del 50% per ristrutturazione?',
      answer: 'La detrazione fiscale del 50% per ristrutturazione edilizia consente di recuperare metà delle spese sostenute, fino a un massimo di 96.000€ per unità immobiliare, in 10 rate annuali nella dichiarazione dei redditi (per l\'abitazione principale). Per le seconde case la detrazione è del 36%. Per accedere al beneficio è necessario effettuare i pagamenti tramite bonifico parlante. Renova Solution gestisce tutta la pratica, inclusa la comunicazione ENEA per gli interventi di efficientamento energetico.',
    },
    {
      question: 'Che garanzia offrite sui lavori di ristrutturazione?',
      answer: 'Renova Solution offre una garanzia di 10 anni sulle opere strutturali e di 2 anni sulle finiture, come previsto dalla normativa vigente. Tutti i materiali utilizzati sono certificati e garantiti dai rispettivi produttori. Al termine dei lavori rilasciamo la documentazione completa, incluse le certificazioni di conformità degli impianti elettrico e idraulico, per la massima tutela del cliente.',
    },
  ];

  const servizi = [
    {
      icon: Home,
      title: 'Ristrutturazione completa',
      desc: 'Dalla demolizione alla consegna chiavi in mano',
      link: '/ristrutturazioni/ristrutturazione-completa',
    },
    {
      icon: Thermometer,
      title: 'Cappotto termico',
      desc: 'Isolamento esterno per risparmiare fino al 40%',
      link: '/ristrutturazioni/cappotto-termico',
    },
    {
      icon: Droplets,
      title: 'Impianti idraulici',
      desc: 'Rifacimento completo con materiali di qualità',
      link: '/ristrutturazioni/impianti-idraulici',
    },
    {
      icon: Zap,
      title: 'Impianto elettrico',
      desc: 'A norma di legge con predisposizione domotica',
      link: '/contatti',
    },
    {
      icon: Paintbrush,
      title: 'Pavimenti e rivestimenti',
      desc: 'Ogni materiale, ogni finitura',
      link: '/contatti',
    },
    {
      icon: TrendingDown,
      title: 'Riqualificazione energetica',
      desc: 'Detrazione fino al 50%',
      link: '/contatti',
    },
  ];

  const percorso = [
    { step: '1', title: 'Sopralluogo', desc: 'Valutiamo lo stato dell\'immobile' },
    { step: '2', title: 'Progetto', desc: 'Elaboriamo il progetto dettagliato' },
    { step: '3', title: 'Preventivo', desc: 'Costi trasparenti, nessuna sorpresa' },
    { step: '4', title: 'Lavori', desc: 'Esecuzione con maestranze qualificate' },
    { step: '5', title: 'Consegna', desc: 'Chiavi in mano e garanzia estesa' },
  ];

  const schema = serviceSchema(
    'Ristrutturazioni Edilizie',
    'Ristrutturazioni complete, cappotto termico, impianti idraulici ed elettrici. Dalla progettazione alla consegna chiavi in mano in Veneto e Friuli.',
    'https://www.renovasolution.it/ristrutturazioni'
  );

  const faqStructuredData = faqSchema(faqItems);

  return (
    <>
      <SEO 
        title="Ristrutturazioni Edilizie | Chiavi in Mano in Veneto e Friuli"
        description="Ristrutturazioni complete, cappotto termico, impianti idraulici ed elettrici. Dalla progettazione alla consegna chiavi in mano. Detrazione 50%."
        keywords="ristrutturazione casa, ristrutturazione appartamento, cappotto termico, impianti idraulici, ristrutturazione Treviso, ristrutturazione Udine"
        schema={[schema, faqStructuredData]}
        canonical="https://www.renovasolution.it/ristrutturazioni"
        ogImage="/images/ristrutturazione.jpg"
      />
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/ristrutturazioni.jpg" 
            alt="Operaio applica cappotto termico su facciata casa" 
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
              Ristrutturazioni edilizie in Veneto e Friuli
            </h1>
            <p className="text-white/80 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-xl">
              Dalla progettazione alla consegna chiavi in mano. Impianti, pavimenti, 
              cappotto termico e finiture di qualità. Detrazione fiscale 50%.
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

      {/* Servizi */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
              I nostri servizi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Tutto ciò che serve per la tua casa nuova
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {servizi.map((s) => (
              <Link 
                key={s.title}
                to={s.link}
                className="group p-4 md:p-6 bg-gray-50 rounded-xl md:rounded-2xl hover:bg-[#C8E600]/10 hover:shadow-md transition-all"
              >
                <s.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C8E600] mb-3 md:mb-4" />
                <h3 className="font-bold text-sm md:text-base mb-1">{s.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-gray-900 group-hover:text-[#C8E600] transition-colors">
                  Scopri <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Percorso */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
              Come lavoriamo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Dal sopralluogo alla consegna
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {percorso.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C8E600] text-black rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-2 md:mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1">{p.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{p.desc}</p>
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
                Ristruttura con il 50% di detrazione
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6">
                La ristrutturazione edilizia prevede una detrazione del 50% delle spese, 
                con un limite massimo di 96.000€ per unità immobiliare. 
                Puoi detrarre il 50% delle spese in 10 rate annuali nella dichiarazione dei redditi.
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-white/10 p-3 md:p-4 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#C8E600]">50%</div>
                  <div className="text-xs md:text-sm text-white/70">Detrazione</div>
                </div>
                <div className="bg-white/10 p-3 md:p-4 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#C8E600]">96k€</div>
                  <div className="text-xs md:text-sm text-white/70">Limite massimo</div>
                </div>
              </div>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  'Detrazione del 50% in 10 rate annuali (abitazione principale)',
                  'Detrazione del 36% per seconde case e altri immobili',
                  'Limite massimo di 96.000€ per unità immobiliare',
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
                Scopri come risparmiare
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="/images/casa-ristrutturata.jpg" 
                alt="Ristrutturazione interni" 
                className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ Ristrutturazioni" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
    </>
  );
}
