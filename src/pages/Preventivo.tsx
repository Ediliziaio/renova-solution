import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { CheckCircle, Phone } from 'lucide-react';

export default function Preventivo() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Richiedi Preventivo Gratuito | Renova Solution"
        description="Richiedi un preventivo gratuito per fotovoltaico, infissi, ristrutturazioni e climatizzazione in Friuli Venezia Giulia e Veneto. Risposta entro 2 ore lavorative."
        keywords="preventivo gratuito, preventivo fotovoltaico, preventivo infissi, preventivo ristrutturazione, Friuli Venezia Giulia, Veneto"
        canonical="https://renovasolution.it/preventivo"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-home.jpg"
            alt="Richiedi preventivo gratuito"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/70 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Preventivo</span>
          </nav>
          <span className="inline-block bg-[#C8E600] text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
            Gratuito e senza impegno
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Richiedi il tuo preventivo gratuito
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Compila il form e ricevi un preventivo dettagliato entro 2 ore lavorative.
            Sopralluogo gratuito in tutto il Friuli Venezia Giulia e Veneto.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Compila il form
              </h2>
              <p className="text-gray-600 mb-8">
                Inserisci i tuoi dati e descrivici il tuo progetto. Ti ricontattiamo entro 2 ore lavorative con un preventivo chiaro e dettagliato.
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

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                <h3 className="font-bold text-xl mb-6">Cosa include il preventivo</h3>
                <div className="space-y-4">
                  {[
                    'Sopralluogo gratuito a domicilio',
                    'Analisi delle tue esigenze',
                    'Preventivo dettagliato e trasparente',
                    'Consulenza sulle detrazioni fiscali',
                    'Nessun costo nascosto',
                    'Garanzia 10 anni su tutti i lavori',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-[#C8E600] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">Preferisci parlare direttamente?</p>
                  <a
                    href="tel:+393939596194"
                    className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors w-full"
                  >
                    <Phone className="w-4 h-4" />
                    393 959 6194
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
