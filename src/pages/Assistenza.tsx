import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormPreventivo from '../components/FormPreventivo';
import SEO, { serviceSchema, faqSchema } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Clock, 
  Wrench, 
  Shield, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';

export default function Assistenza() {
  const faqItems = [
    {
      question: 'Quanto costa la manutenzione di un impianto fotovoltaico?',
      answer: 'La manutenzione ordinaria di un impianto fotovoltaico residenziale costa in media 150-250€ all\'anno. Include pulizia pannelli, controllo inverter e verifica connessioni. Per gli impianti con accumulo, aggiungere 100-150€ per il check delle batterie.'
    },
    {
      question: 'Ogni quanto va pulito un impianto fotovoltaico?',
      answer: 'Consigliamo la pulizia almeno una volta all\'anno, idealmente in primavera. In zone con molta polvere, smog o vicino al mare, può essere necessario pulire ogni 6 mesi. Un impianto sporco può perdere fino al 20% di efficienza.'
    },
    {
      question: 'Cosa fare se l\'inverter smette di funzionare?',
      answer: 'Contattaci immediatamente al 393 959 6194. L\'inverter è il cuore dell\'impianto e senza di esso non produci energia. Offriamo interventi in 24-48h in tutto il Veneto e Friuli V.G. con ricambi originali delle principali marche.'
    },
    {
      question: 'La batteria di accumulo ha bisogno di manutenzione?',
      answer: 'Le batterie moderne (Tesla Powerwall, LG, BYD) sono praticamente a zero manutenzione. Consigliamo solo un check annuale del software e della capacità residua. La vita utile è di 10-15 anni con garanzia.'
    },
    {
      question: 'Offrite assistenza anche per impianti non vostri?',
      answer: 'Sì, offriamo assistenza e manutenzione per impianti fotovoltaici, infissi e ristrutturazioni realizzati da altre ditte. Effettuiamo prima un sopralluogo di verifica per valutare lo stato dei lavori.'
    }
  ];

  const servizi = [
    {
      icon: Wrench,
      title: 'Manutenzione Fotovoltaico',
      description: 'Pulizia pannelli, controllo inverter, verifica connessioni e performance. Preveniamo i guasti prima che accadano.',
      prezzo: 'Da 150€/anno',
      cta: 'Prenota manutenzione'
    },
    {
      icon: Shield,
      title: 'Assistenza Batterie',
      description: 'Monitoraggio performance, aggiornamento firmware, verifica capacità residua. Tutte le marche: Tesla, LG, BYD, Fimer.',
      prezzo: 'Da 100€/anno',
      cta: 'Verifica batteria'
    },
    {
      icon: AlertTriangle,
      title: 'Interventi Urgenti',
      description: 'Guasto inverter? Problema elettrico? Interveniamo in 24-48h in tutto il Veneto e Friuli con ricambi originali.',
      prezzo: 'Da 120€ intervento',
      cta: 'Richiedi urgente'
    },
    {
      icon: TrendingUp,
      title: 'Monitoraggio Remoto',
      description: 'Controlliamo le performance del tuo impianto 24/7. Ti avvisiamo immediatamente se qualcosa non va.',
      prezzo: 'Incluso',
      cta: 'Attiva monitoraggio'
    }
  ];

  const copertura = [
    { city: 'Udine', time: '24h' },
    { city: 'Treviso', time: '24h' },
    { city: 'Pordenone', time: '24h' },
    { city: 'Venezia', time: '48h' },
    { city: 'Padova', time: '48h' },
    { city: 'Vicenza', time: '48h' },
    { city: 'Trieste', time: '48h' },
    { city: 'Gorizia', time: '48h' },
  ];

  const schema = serviceSchema(
    'Assistenza e Manutenzione Impianti Fotovoltaici',
    'Servizio di assistenza tecnica e manutenzione impianti fotovoltaici, batterie di accumulo e infissi in Friuli Venezia Giulia e Veneto. Interventi in 24-48h.',
    'https://renovasolution.it/assistenza'
  );

  const faqStructuredData = faqSchema(faqItems);

  return (
    <>
      <SEO 
        title="Assistenza e Manutenzione Impianti Fotovoltaici | Renova Solution"
        description="Servizio di assistenza tecnica e manutenzione impianti fotovoltaici, batterie di accumulo e infissi in Friuli Venezia Giulia e Veneto. Interventi in 24-48h."
        keywords="assistenza fotovoltaico, manutenzione impianti solari, riparazione inverter, manutenzione batterie, assistenza tecnica Friuli, assistenza tecnica Veneto"
        schema={[schema, faqStructuredData]}
        canonical="https://renovasolution.it/assistenza"
      />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[400px] md:min-h-[450px] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/images/manutenzione.jpg" 
              alt="Tecnico assistenza fotovoltaico" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-[#C8E600] text-black text-xs font-bold px-3 py-1.5 rounded-full mb-4"
              >
                Interventi in 24-48h
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Assistenza tecnica che risolve, non che promette
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-base md:text-lg mb-6"
              >
                Manutenzione programmata, interventi urgenti e monitoraggio remoto 
                per impianti fotovoltaici, batterie e infissi in Veneto e Friuli V.G.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a 
                  href="tel:+393939596194"
                  className="bg-[#C8E600] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b3cc00] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Chiama ora 393 959 6194
                </a>
                <Link 
                  to="/contatti"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-colors text-center"
                >
                  Richiedi assistenza
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Numeri chiave */}
        <section className="py-10 md:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C8E600]">24-48h</div>
                <p className="text-gray-600 text-sm mt-1">Tempo intervento</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C8E600]">+500</div>
                <p className="text-gray-600 text-sm mt-1">Impianti seguiti</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C8E600]">10</div>
                <p className="text-gray-600 text-sm mt-1">Anni garanzia</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C8E600]">8</div>
                <p className="text-gray-600 text-sm mt-1">Province coperte</p>
              </div>
            </div>
          </div>
        </section>

        {/* Servizi di assistenza */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-[#C8E600] text-xs font-bold uppercase tracking-wider mb-2">
                I nostri servizi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Assistenza su misura per il tuo impianto
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servizi.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#C8E600] rounded-xl flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.description}</p>
                  <div className="text-[#C8E600] font-bold text-sm mb-4">{s.prezzo}</div>
                  <Link 
                    to="/contatti"
                    className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-[#C8E600] transition-colors"
                  >
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Copertura territoriale */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-[#C8E600] text-xs font-bold uppercase tracking-wider mb-2">
                  Dove interveniamo
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Assistenza in tutto il Veneto e Friuli V.G.
                </h2>
                <p className="text-white/70 mb-6">
                  Squadre tecniche locali per interventi rapidi. Non mandiamo tecnici da 300km 
                  con settimane di attesa.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {copertura.map((c) => (
                    <div key={c.city} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-white font-medium">{c.city}</span>
                      <span className="text-[#C8E600] text-sm">{c.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <h3 className="font-bold text-xl mb-4">Contatti assistenza</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8E600]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#C8E600]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telefono urgente</p>
                      <a href="tel:+393939596194" className="font-bold text-lg hover:text-[#C8E600]">393 959 6194</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8E600]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#C8E600]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:assistenza@renovasolution.it" className="font-bold hover:text-[#C8E600]">assistenza@renovasolution.it</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8E600]/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#C8E600]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Orari</p>
                      <p className="font-bold">Lun-Ven: 8:30-18:00 | Sab: 9:00-12:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8E600]/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#C8E600]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Interventi urgenti</p>
                      <p className="font-bold">7 giorni su 7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-[#C8E600] text-xs font-bold uppercase tracking-wider mb-2">
                Domande frequenti
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Tutto quello che devi sapere
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-base mb-2 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-16 md:py-20 bg-[#C8E600]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Il tuo impianto ha bisogno di assistenza?
            </h2>
            <p className="text-black/70 text-base md:text-lg mb-6">
              Chiamaci ora o compila il form. Ti ricontattiamo entro 2 ore lavorative.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+393939596194"
                className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                393 959 6194
              </a>
              <Link 
                to="/contatti"
                className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                Richiedi assistenza online
              </Link>
            </div>
          </div>
        </section>

        <FormPreventivo />
        <Footer />
      </div>
    </>
  );
}
