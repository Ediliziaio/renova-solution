import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO, { localBusinessSchema } from '../components/SEO';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  Calendar,
  Users,
  Shield,
  Headphones
} from 'lucide-react';

export default function Contatti() {
  const contatti = [
    {
      icon: Phone,
      title: 'Telefono',
      lines: ['393 959 6194'],
      action: 'tel:+393939596194',
      actionText: 'Chiama ora',
      highlight: true
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@renovasolution.it', 'preventivi@renovasolution.it'],
      action: 'mailto:info@renovasolution.it',
      actionText: 'Scrivici'
    },
    {
      icon: MapPin,
      title: 'Ufficio',
      lines: ['Via Friuli, 92', '33080 Prata di Pordenone (PN)'],
      note: 'Veneto e Friuli V.G.',
      actionText: 'Come arrivare'
    },
    {
      icon: MapPin,
      title: 'Sede Legale',
      lines: ['Via Revedole 78/B', '33170 Pordenone (PN)'],
      note: 'P.IVA 01941970939'
    }
  ];

  const percheSceglierci = [
    {
      icon: Headphones,
      title: 'Risposta in 2h',
      desc: 'Ti ricontattiamo entro 2 ore lavorative'
    },
    {
      icon: Calendar,
      title: 'Sopralluogo gratuito',
      desc: 'Senza impegno in tutta la zona'
    },
    {
      icon: Users,
      title: 'Consulenza personalizzata',
      desc: 'Soluzioni su misura per le tue esigenze'
    },
    {
      icon: Shield,
      title: 'Garanzia 10 anni',
      desc: 'Su tutti i lavori eseguiti'
    }
  ];

  const zoneOperative = [
    { city: 'Udine', region: 'FVG' },
    { city: 'Trieste', region: 'FVG' },
    { city: 'Gorizia', region: 'FVG' },
    { city: 'Pordenone', region: 'FVG' },
    { city: 'Treviso', region: 'Veneto' },
    { city: 'Venezia', region: 'Veneto' },
    { city: 'Padova', region: 'Veneto' },
    { city: 'Vicenza', region: 'Veneto' },
  ];

  return (
    <>
      <SEO 
        title="Contatti Renova Solution | Preventivi Gratuiti in Veneto e Friuli"
        description="Contatta Renova Solution per preventivi gratuiti su fotovoltaico, infissi e ristrutturazioni. Ufficio a Prata di Pordenone (PN). Operiamo in tutto il Veneto e Friuli Venezia Giulia. Tel: 393 959 6194"
        keywords="contatti Renova Solution, preventivo fotovoltaico, preventivo infissi, sopralluogo gratuito, Prata di Pordenone, Pordenone, Veneto, Friuli"
        schema={localBusinessSchema}
        canonical="https://renovasolution.it/contatti"
        ogImage="/images/team.jpg"
      />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[350px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/images/team.jpg" 
              alt="Contatta Renova Solution" 
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
                Sempre a tua disposizione
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Contattaci, ti aiutiamo a risparmiare
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-base md:text-lg mb-6"
              >
                Preventivi gratuiti, sopralluoghi senza impegno e consulenza personalizzata 
                in tutto il Veneto e il Friuli Venezia Giulia.
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
                  Chiama 393 959 6194
                </a>
                <a 
                  href="mailto:info@renovasolution.it"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Scrivici
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contatti Cards */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contatti.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-2xl p-6 ${c.highlight ? 'ring-2 ring-[#C8E600]' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${c.highlight ? 'bg-[#C8E600]' : 'bg-[#C8E600]/10'}`}>
                    <c.icon className={`w-6 h-6 ${c.highlight ? 'text-black' : 'text-[#C8E600]'}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{c.title}</h3>
                  {c.lines.map((line, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{line}</p>
                  ))}
                  {c.note && <p className="text-[#C8E600] text-xs font-medium mt-2">{c.note}</p>}
                  {c.action && (
                    <a 
                      href={c.action}
                      className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-[#C8E600] transition-colors mt-4"
                    >
                      {c.actionText} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Perché Sceglierci */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Form */}
              <div className="lg:col-span-3">
                <span className="inline-block text-[#C8E600] text-xs font-bold uppercase tracking-wider mb-2">
                  Richiedi informazioni
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Scrivici per un preventivo gratuito
                </h2>
                <p className="text-gray-600 mb-8">
                  Compila il form e ti ricontattiamo entro 2 ore lavorative. 
                  Nessun impegno, solo informazioni utili.
                </p>

                <div style={{minHeight:'650px'}}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/g2H271QFeRb5FT73aUyz"
                    style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                    id="inline-g2H271QFeRb5FT73aUyz"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Invio Richiesta"
                    data-height="623"
                    data-layout-iframe-id="inline-g2H271QFeRb5FT73aUyz"
                    data-form-id="g2H271QFeRb5FT73aUyz"
                    title="Invio Richiesta"
                  >
                  </iframe>
                </div>
              </div>

              {/* Sidebar - Perché sceglierci */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                  <h3 className="font-bold text-xl mb-6">Perché contattarci</h3>
                  <div className="space-y-5">
                    {percheSceglierci.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-[#C8E600] rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Preferisci parlare direttamente?
                    </p>
                    <a 
                      href="tel:+393939596194"
                      className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      393 959 6194
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zone Operative */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-[#C8E600] text-xs font-bold uppercase tracking-wider mb-2">
                Dove operiamo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Presenti in 8 province del Veneto e Friuli
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Squadre tecniche locali per interventi rapidi. 
                Non mandiamo tecnici da 300km con settimane di attesa.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {zoneOperative.map((z, i) => (
                <motion.div
                  key={z.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#C8E600] mx-auto mb-2" />
                  <p className="text-white font-medium">{z.city}</p>
                  <p className="text-white/50 text-xs">{z.region}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 md:py-20 bg-[#C8E600]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MessageSquare className="w-12 h-12 text-black mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Hai domande? Siamo qui per te
            </h2>
            <p className="text-black/70 text-base md:text-lg mb-6">
              Il nostro team commerciale è disponibile dal lunedì al sabato 
              per rispondere a tutte le tue domande.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+393939596194"
                className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Chiama 393 959 6194
              </a>
              <a 
                href="mailto:info@renovasolution.it"
                className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Scrivici una email
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
