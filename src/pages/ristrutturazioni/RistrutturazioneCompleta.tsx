import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import PromoBanner from '../../components/PromoBanner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Recensioni from '../../components/Recensioni';
import FormPreventivo from '../../components/FormPreventivo';
import FAQ from '../../components/FAQ';
import { Home, Paintbrush, Zap, Droplets, CheckCircle, Clock, Shield } from 'lucide-react';

export default function RistrutturazioneCompleta() {
  const faqItems = [
    {
      question: 'Quanto costa ristrutturare completamente una casa di 100mq?',
      answer: 'Il costo di una ristrutturazione completa varia molto in base ai materiali e alle finiture scelte. In media, si va dai 800€ ai 2.000€ al mq, quindi per 100mq il budget totale può oscillare tra gli 80.000€ e i 200.000€.',
    },
    {
      question: 'Quanto tempo richiede una ristrutturazione completa?',
      answer: 'Una ristrutturazione completa di un appartamento richiede generalmente tra 4 e 8 mesi, a seconda dell\'entità dei lavori, della disponibilità dei materiali e della coordinazione tra le diverse maestranze.',
    },
    {
      question: 'È possibile vivere in casa durante i lavori?',
      answer: 'Dipende dall\'entità dei lavori. Per interventi strutturali o di rifacimento impianti è consigliato trovare una sistemazione alternativa. Per lavori più limitati può essere possibile rimanere, organizzandosi con le maestranze.',
    },
    {
      question: 'Cosa include una ristrutturazione completa?',
      answer: 'Include il rifacimento di tutti gli impianti (elettrico, idraulico, termico), la rimozione e sostituzione di pavimenti e rivestimenti, la rasante e tinteggiatura delle pareti, la sostituzione di infissi, sanitari e porte interne.',
    },
  ];

  const servizi = [
    {
      icon: Zap,
      title: 'Impianto elettrico',
      description: 'Rifacimento completo con normativa vigente, quadro elettrico, predisposizione domotica e illuminazione LED.',
    },
    {
      icon: Droplets,
      title: 'Impianto idraulico',
      description: 'Sostituzione tubazioni, installazione nuovi sanitari, rubinetteria di design e sistemi di risparmio idrico.',
    },
    {
      icon: Paintbrush,
      title: 'Pavimenti e rivestimenti',
      description: 'Posa di pavimenti in ogni materiale, rivestimenti bagno e cucina, parquet, piastrelle grandi formati.',
    },
    {
      icon: Home,
      title: 'Controsoffitti e pareti',
      description: 'Realizzazione in cartongesso, velette luminose, nicchie, pareti attrezzate e soluzioni su misura.',
    },
  ];

  const percorso = [
    {
      step: '1',
      title: 'Sopralluogo e analisi',
      desc: 'Valutiamo lo stato dell\'immobile, ascoltiamo le tue esigenze e ti proponiamo le soluzioni più adatte.',
    },
    {
      step: '2',
      title: 'Progettazione',
      desc: 'Elaboriamo il progetto esecutivo con planimetrie, render 3D, computo metrico e cronoprogramma.',
    },
    {
      step: '3',
      title: 'Preventivo dettagliato',
      desc: 'Ti presentiamo un preventivo trasparente con tutte le voci di spesa, nessuna sorpresa.',
    },
    {
      step: '4',
      title: 'Esecuzione lavori',
      desc: 'Coordiniamo tutte le maestranze, rispettiamo i tempi concordati e ti aggiorniamo costantemente.',
    },
    {
      step: '5',
      title: 'Collaudo e consegna',
      desc: 'Verifichiamo ogni dettaglio, rilasciamo tutta la documentazione e ti consegnamo chiavi in mano.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <PromoBanner />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/ristrutturazioni.jpg" 
            alt="Ristrutturazione completa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/70 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/ristrutturazioni" className="hover:text-white">Ristrutturazioni</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ristrutturazione Completa</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
            Ristrutturazione Completa: Trasforma la Tua Casa Chiavi in Mano
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Affidaci il tuo progetto di ristrutturazione completa. Dalla progettazione alla consegna, gestiamo ogni fase con professionalità, trasparenza e rispetto dei tempi.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contatti"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Richiedi sopralluogo gratuito
            </Link>
            <Link 
              to="/contatti"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              Scopri i costi
            </Link>
          </div>
        </div>
      </section>

      {/* Perché sceglierci */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                La tua casa nuova, senza stress
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ristrutturare casa è un investimento importante, ma può diventare un'esperienza stressante se non affidata ai professionisti giusti. Con Technogelox, hai un unico interlocutore che coordina tutte le maestranze, rispetta i tempi concordati e ti tiene sempre informato sull'avanzamento dei lavori.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dalla demolizione alla consegna finale, gestiamo ogni aspetto della ristrutturazione: impianti, muratura, pavimenti, infissi, finiture. Tu devi solo scegliere i materiali e le finiture, noi ci occupiamo di tutto il resto.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Rispetto dei tempi</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Garanzia estesa</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Qualità certificata</div>
                </div>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Inizia il tuo progetto
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
                alt="Casa ristrutturata" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servizi inclusi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Tutto ciò che serve per la tua casa nuova</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Una ristrutturazione completa include tutti gli interventi necessari per trasformare la tua casa. Ecco cosa facciamo:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {servizi.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <s.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Il percorso */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Il tuo progetto, dal primo sopralluogo alla consegna
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {percorso.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-gray-600 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detrazioni */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ristruttura con il 50% di detrazione fiscale
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                La ristrutturazione edilizia rientra nelle detrazioni fiscali del 50%, con un limite massimo di 96.000€ per unità immobiliare. Puoi scegliere di detrarre in 10 anni, usufruire dello sconto in fattura o cedere il credito.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-400">50%</div>
                  <div className="text-sm text-white/80">Detrazione fiscale</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-400">96k€</div>
                  <div className="text-sm text-white/80">Limite massimo</div>
                </div>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Scopri come risparmiare
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop" 
                alt="Detrazioni fiscali" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ sulla Ristrutturazione Completa" items={faqItems} />
      <Footer />
    </div>
  );
}
