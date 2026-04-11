import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy | Renova Solution"
        description="Informativa sulla privacy di Renova Solution. Come trattiamo i tuoi dati personali in conformità con il GDPR."
        keywords="privacy policy, GDPR, protezione dati personali, Renova Solution"
        canonical="https://renovasolution.it/privacy"
      />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-400 mb-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  1. Titolare del trattamento
                </h2>
                <p>
                  Il Titolare del trattamento dei dati personali è Renova Solution S.r.l., 
                  con sede legale in Via Revedole 78/B, 33170 Pordenone (PN), P.IVA 01941970939.
                </p>
                <p className="mt-2">
                  <strong>Contatti:</strong><br />
                  Email: info@renovasolution.it<br />
                  Telefono: +39 393 959 6194<br />
                  PEC: renovasolution@pec.it
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  2. Dati personali raccolti
                </h2>
                <p>Raccogliamo i seguenti tipi di dati personali:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Dati identificativi:</strong> nome, cognome</li>
                  <li><strong>Dati di contatto:</strong> indirizzo email, numero di telefono, indirizzo</li>
                  <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate</li>
                  <li><strong>Dati forniti volontariamente:</strong> informazioni inserite nei form di contatto</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  3. Finalità del trattamento
                </h2>
                <p>I dati personali sono trattati per le seguenti finalità:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Rispondere alle richieste di informazioni e preventivi</li>
                  <li>Erogazione dei servizi richiesti</li>
                  <li>Gestione amministrativa e contabile</li>
                  <li>Invio di comunicazioni commerciali (con consenso)</li>
                  <li>Miglioramento dei servizi offerti</li>
                  <li>Adempimento di obblighi legali</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  4. Base giuridica del trattamento
                </h2>
                <p>Il trattamento dei dati si basa su:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Esecuzione di un contratto:</strong> per l'erogazione dei servizi</li>
                  <li><strong>Consenso:</strong> per l'invio di comunicazioni marketing</li>
                  <li><strong>Obbligo legale:</strong> per adempimenti fiscali e amministrativi</li>
                  <li><strong>Legittimo interesse:</strong> per la sicurezza e il miglioramento dei servizi</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  5. Conservazione dei dati
                </h2>
                <p>
                  I dati personali sono conservati per il tempo necessario al conseguimento delle finalità 
                  per cui sono stati raccolti, o per il tempo richiesto dalla legge. In particolare:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Dati contrattuali: 10 anni (obblighi fiscali)</li>
                  <li>Dati di contatto per marketing: fino alla revoca del consenso</li>
                  <li>Dati di navigazione: 12 mesi</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  6. Diritti dell'interessato
                </h2>
                <p>In conformità con il GDPR, hai il diritto di:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Accesso:</strong> ottenere conferma del trattamento e copia dei dati</li>
                  <li><strong>Rettifica:</strong> richiedere la correzione di dati inesatti</li>
                  <li><strong>Cancellazione:</strong> richiedere l'eliminazione dei dati ("diritto all'oblio")</li>
                  <li><strong>Limitazione:</strong> richiedere la limitazione del trattamento</li>
                  <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato</li>
                  <li><strong>Opposizione:</strong> opporsi al trattamento per finalità di marketing</li>
                </ul>
                <p className="mt-2">
                  Per esercitare i tuoi diritti, contattaci all'indirizzo email: <strong>info@renovasolution.it</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  7. Cookie
                </h2>
                <p>
                  Il nostro sito utilizza cookie tecnici necessari al funzionamento del sito e cookie 
                  di terze parti per analisi statistiche. Per maggiori informazioni, consulta la nostra 
                  <a href="/cookie-policy" className="text-[#C8E600] hover:underline"> Cookie Policy</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  8. Sicurezza dei dati
                </h2>
                <p>
                  Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali 
                  da accessi non autorizzati, perdita, distruzione o alterazione. I dati sono conservati 
                  su server sicuri con accesso limitato al personale autorizzato.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  9. Modifiche alla privacy policy
                </h2>
                <p>
                  Ci riserviamo il diritto di modificare questa privacy policy in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina con l'indicazione della data di aggiornamento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  10. Contatti
                </h2>
                <p>
                  Per qualsiasi domanda o richiesta relativa alla privacy, puoi contattarci:
                </p>
                <p className="mt-2">
                  <strong>Renova Solution S.r.l.</strong><br />
                  Via Revedole 78/B, 33170 Pordenone (PN)<br />
                  Email: info@renovasolution.it<br />
                  Tel: +39 393 959 6194
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
