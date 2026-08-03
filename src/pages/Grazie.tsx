import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { CONTATTI } from '../data/contatti';
import {
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Calendar,
  FileText,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

/**
 * Thank you page mostrata dopo l'invio del form contatti.
 *
 * Nessuna animazione d'ingresso, a differenza del resto del sito. Sia
 * framer-motion (`opacity: 0` finché React non parte) sia le animazioni CSS
 * (sospese dal browser sulle schede in background) possono lasciare il
 * contenuto invisibile. Qui l'utente atterra subito dopo aver inviato i propri
 * dati: la conferma deve essere leggibile all'istante, sempre.
 */

const passaggi = [
  {
    icon: Phone,
    titolo: 'Ti chiamiamo entro 2 ore',
    testo:
      'Un nostro tecnico ti contatta nelle prossime 2 ore lavorative per capire cosa ti serve. Nessun call center: parli direttamente con chi seguirà il lavoro.',
  },
  {
    icon: Calendar,
    titolo: 'Fissiamo il sopralluogo',
    testo:
      'Concordiamo insieme giorno e orario. Il sopralluogo è gratuito e senza impegno, in tutto il Friuli Venezia Giulia e Veneto.',
  },
  {
    icon: FileText,
    titolo: 'Ricevi il preventivo',
    testo:
      'Un preventivo scritto, dettagliato e a prezzo fisso. Con il calcolo delle detrazioni fiscali a cui hai diritto e i tempi di realizzazione.',
  },
];

const approfondimenti = [
  {
    titolo: 'Detrazioni fiscali 2026',
    testo: 'Come funziona il 50% e quali documenti servono.',
    to: '/blog/detrazioni-fiscali-2026',
  },
  {
    titolo: 'I nostri lavori',
    testo: 'Foto reali dei cantieri completati in FVG e Veneto.',
    to: '/progetti',
  },
  {
    titolo: 'Chi siamo',
    testo: 'Chi ti risponderà e come lavoriamo.',
    to: '/chi-siamo',
  },
];

export default function Grazie() {
  return (
    <>
      <SEO
        title="Richiesta inviata | Renova Solution"
        description="Abbiamo ricevuto la tua richiesta. Ti ricontattiamo entro 2 ore lavorative per fissare il sopralluogo gratuito."
        noindex
      />

      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* Conferma */}
          <section className="bg-gray-900 text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
              <div className="w-20 h-20 bg-[#C8E600] rounded-full flex items-center justify-center mx-auto mb-7">
                <CheckCircle className="w-11 h-11 text-black" strokeWidth={2.5} />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Richiesta ricevuta. Grazie.
              </h1>

              <p className="text-white/80 text-base md:text-lg mb-8">
                È già sulla scrivania di un nostro tecnico. Ti ricontattiamo{' '}
                <strong className="text-[#C8E600]">entro 2 ore lavorative</strong> — non tra
                qualche giorno.
              </p>

              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 text-sm">
                <Clock className="w-4 h-4 text-[#C8E600]" />
                <span>Lun–Ven 8:30–18:00 · Sab 9:00–12:00</span>
              </div>
            </div>
          </section>

          {/* Cosa succede adesso */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
                Cosa succede adesso
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
                Tre passaggi, nessuna sorpresa. Sai già cosa aspettarti.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {passaggi.map((p, i) => (
                  <div key={p.titolo} className="bg-gray-50 rounded-2xl p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-[#C8E600] rounded-xl flex items-center justify-center flex-shrink-0">
                        <p.icon className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-4xl font-bold text-gray-200 leading-none">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{p.titolo}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.testo}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contatto diretto */}
          <section className="py-14 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-7 md:p-10 text-center shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  Hai fretta o vuoi aggiungere un dettaglio?
                </h2>
                <p className="text-gray-600 mb-7 text-sm md:text-base">
                  Chiamaci pure: rispondiamo negli orari di ufficio, altrimenti ti richiamiamo noi.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={CONTATTI.telefonoLink}
                    className="bg-[#C8E600] text-black px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#b3cc00] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {CONTATTI.telefono}
                  </a>
                  <a
                    href={CONTATTI.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#20bd5a] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Scrivici su WhatsApp
                  </a>
                  <a
                    href={CONTATTI.emailLink}
                    className="bg-gray-100 text-black px-6 py-3.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Nel frattempo */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Nel frattempo</h2>

              <div className="grid sm:grid-cols-3 gap-5">
                {approfondimenti.map((a) => (
                  <Link
                    key={a.to}
                    to={a.to}
                    className="group block h-full bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-colors"
                  >
                    <h3 className="font-bold mb-2 flex items-start justify-between gap-2">
                      <span>{a.titolo}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a.testo}</p>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/"
                  className="text-sm font-bold text-gray-500 hover:text-black transition-colors"
                >
                  ← Torna alla home
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
