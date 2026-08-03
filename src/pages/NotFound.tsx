import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { CONTATTI } from '../data/contatti';
import { Home as HomeIcon, ArrowRight, Phone } from 'lucide-react';

const scorciatoie = [
  { label: 'Fotovoltaico per privati', to: '/fotovoltaico-privati' },
  { label: 'Fotovoltaico per aziende', to: '/fotovoltaico-aziende' },
  { label: 'Infissi e serramenti', to: '/infissi' },
  { label: 'Ristrutturazioni', to: '/ristrutturazioni' },
  { label: 'Pompe di calore', to: '/pompe-di-calore' },
  { label: 'Climatizzazione', to: '/climatizzazione' },
  { label: 'Blog e guide', to: '/blog' },
  { label: 'Contatti', to: '/contatti' },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="Pagina non trovata (404)"
        description="La pagina che cerchi non esiste o è stata spostata. Torna alla home di Renova Solution o scegli uno dei nostri servizi: fotovoltaico, infissi, ristrutturazioni."
        noindex
      />

      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <main className="flex-1">
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <p className="text-[#C8E600] font-bold text-sm uppercase tracking-wider mb-3">
              Errore 404
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Questa pagina non esiste
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-10">
              Il link potrebbe essere scaduto o scritto male. Qui sotto trovi le pagine più
              cercate, oppure chiamaci: rispondiamo noi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <Link
                to="/"
                className="bg-[#C8E600] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b3cc00] transition-colors inline-flex items-center justify-center gap-2"
              >
                <HomeIcon className="w-4 h-4" />
                Torna alla home
              </Link>
              <a
                href={CONTATTI.telefonoLink}
                className="bg-gray-100 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {CONTATTI.telefonoBreve}
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {scorciatoie.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex items-center justify-between gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl px-5 py-4 transition-colors"
                >
                  <span className="font-medium text-sm">{s.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
