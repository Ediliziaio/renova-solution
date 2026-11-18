import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO, { breadcrumbSchema } from '../components/SEO';

export default function Fotovoltaico() {
  return <>
    <SEO title="Fotovoltaico per casa e aziende | Renova Solution" description="Scegli il percorso per il tuo impianto fotovoltaico: casa, azienda o manutenzione. Servizi e guide di Renova Solution in Friuli Venezia Giulia e Veneto." canonical="https://www.renovasolution.it/fotovoltaico" ogImage="/images/fotovoltaico.jpg" schema={breadcrumbSchema([{ name: 'Fotovoltaico', path: '/fotovoltaico' }])} />
    <Navbar />
    <main className="pt-36 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6"><Link to="/" className="underline">Home</Link> / Fotovoltaico</nav>
        <header className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Fotovoltaico per casa e azienda</h1>
          <p className="text-lg text-gray-700 leading-relaxed">Vuoi installare un impianto o seguire quello che hai già? Parti dall’immobile e dall’esigenza da discutere. Renova Solution presenta qui i percorsi dedicati a privati, aziende e manutenzione in Friuli Venezia Giulia e Veneto.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <section className="border border-gray-200 rounded-xl p-6"><h2 className="text-2xl font-bold mb-3">Per la casa</h2><p className="text-gray-700 mb-5">Approfondisci il servizio residenziale e prepara il confronto sull’impianto e sull’eventuale accumulo. Porta le informazioni dell’immobile e dei consumi disponibili.</p><Link className="font-semibold underline" to="/fotovoltaico-privati">Fotovoltaico per privati</Link></section>
          <section className="border border-gray-200 rounded-xl p-6"><h2 className="text-2xl font-bold mb-3">Per l’azienda</h2><p className="text-gray-700 mb-5">Consulta il percorso dedicato agli edifici aziendali. Il confronto parte dalle attività svolte, dagli spazi disponibili e dal profilo dei consumi.</p><Link className="font-semibold underline" to="/fotovoltaico-aziende">Fotovoltaico per aziende</Link></section>
          <section className="border border-gray-200 rounded-xl p-6"><h2 className="text-2xl font-bold mb-3">Per un impianto esistente</h2><p className="text-gray-700 mb-5">Hai già un impianto e vuoi parlare di controlli o assistenza? Raccogli i documenti disponibili e descrivi la richiesta nel percorso di manutenzione.</p><Link className="font-semibold underline" to="/manutenzione">Manutenzione fotovoltaico</Link></section>
        </div>
        <section aria-labelledby="guide-fotovoltaico" className="border-t border-gray-200 pt-8"><h2 id="guide-fotovoltaico" className="text-2xl font-bold mb-4">Guide per preparare le domande</h2><p className="text-gray-700 mb-4">Le guide approfondiscono singoli argomenti. Per un preventivo riferito al tuo immobile usa invece la pagina di servizio pertinente o <Link to="/contatti" className="underline">contatta Renova Solution</Link>.</p><ul className="list-disc pl-5 space-y-3"><li><Link className="underline" to="/blog/fotovoltaico-accumulo-2026">Fotovoltaico con accumulo</Link></li><li><Link className="underline" to="/blog/fotovoltaico-aziende-2026">Fotovoltaico per aziende: approfondimento</Link></li><li><Link className="underline" to="/blog/manutenzione-fotovoltaico-2026">Manutenzione di un impianto fotovoltaico</Link></li></ul></section>
      </div>
    </main>
    <Footer />
  </>;
}
