import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartnerLogos from '../components/PartnerLogos';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import Recensioni from '../components/Recensioni';
import FormPreventivo from '../components/FormPreventivo';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';

export default function FotovoltaicoAziende() {
  const faqItems = [
    {
      question: 'Quanti pannelli servono per un capannone industriale?',
      answer: 'Dipende dalla potenza richiesta, ma generalmente servono tra 50 e 200 pannelli per impianti da 20kW a 100kW.',
    },
    {
      question: 'Quali sono i vantaggi fiscali per le aziende?',
      answer: 'Le aziende possono beneficiare di detrazioni fiscali, ammortamento accelerato e conto termico per gli impianti fotovoltaici.',
    },
    {
      question: 'Quanto si risparmia in bolletta?',
      answer: 'Le aziende possono ridurre i costi energetici fino al 70-80% con un impianto fotovoltaico ben dimensionato.',
    },
  ];

  const vantaggiAziende = [
    {
      title: 'Risparmio',
      description: 'L\'energia che viene prodotta dall\'impianto non deve essere acquistata dalla rete.',
    },
    {
      title: 'Detrazioni Fiscali',
      description: 'Lo Stato rimborsa fino al 50% della somma spesa per gli interventi di ristrutturazione edilizia.',
    },
    {
      title: 'Affidabilità',
      description: 'L\'impianto fotovoltaico non ha parti in movimento e non necessita di trasporti per produrre energia.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/fotovoltaico.jpg" 
            alt="Pannelli fotovoltaici installazione professionale" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            Fotovoltaico ad alto rendimento per aziende
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Soluzioni di ultima generazione per ridurre i costi, aumentare l'autonomia energetica e trasformare il tetto in un asset strategico.
          </p>
          <Link 
            to="/contatti"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>

      <PartnerLogos />

      {/* Fotovoltaico per le imprese */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Fotovoltaico con accumulo per le imprese
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Gli impianti fotovoltaici aziendali Technogelox Ecoenergia sono progettati per soddisfare i reali consumi energetici della tua impresa, ottimizzando l'autoconsumo e sfruttando in modo intelligente gli incentivi fiscali disponibili.
                </p>
                <p>
                  Ogni impianto è studiato per garantire un rapido ritorno dell'investimento grazie al risparmio generato, ai contributi governativi mirati e ad un miglioramento dell'efficienza operativa.
                </p>
                <p>
                  Produci energia pulita, risparmia sulle spese e dai valore alla tua impresa.
                </p>
              </div>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors mt-6"
              >
                Contattaci
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop" 
                alt="Impianto fotovoltaico aziendale" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />

      {/* Vantaggi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4">I vantaggi</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Gli impianti per la produzione di energia elettrica mediante tecnologia fotovoltaica presentano numerosi vantaggi, tra i quali i più significativi sono:
              </p>
              <div className="w-12 h-1 bg-orange-500 mt-4"></div>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {vantaggiAziende.map((v) => (
                <div key={v.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sistemi di accumulo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop" 
                alt="Sistemi di accumulo" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Sistemi di accumulo per aziende
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I sistemi di accumulo sono la soluzione ideale per aziende di qualunque dimensione che vogliono massimizzare l'autoconsumo e ridurre i costi energetici.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                L'energia prodotta in eccesso dai pannelli fotovoltaici viene immagazzinata e resa disponibile nei momenti di maggiore richiesta o in caso di interruzioni dalla rete, garantendo continuità operativa e stabilità del tuo business.
              </p>
              <Link 
                to="/contatti"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Recensioni />
      <FormPreventivo />
      <FAQ title="FAQ Impianti Fotovoltaici" items={faqItems} />
      <BlogSection />
      <Footer />
    </div>
  );
}
