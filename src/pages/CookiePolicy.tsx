import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function CookiePolicy() {
  return (
    <>
      <SEO 
        title="Cookie Policy | Renova Solution"
        description="Informativa sui cookie di Renova Solution. Scopri quali cookie utilizziamo e come gestire le tue preferenze."
        keywords="cookie policy, cookie, GDPR, privacy, Renova Solution"
      />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-400 mb-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Cosa sono i cookie
                </h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, 
                  dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. 
                  I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, 
                  monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni 
                  riguardanti gli utenti che accedono al server.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Tipologie di cookie utilizzati
                </h2>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">Cookie tecnici (necessari)</h3>
                <p className="mb-4">
                  Questi cookie sono essenziali per il corretto funzionamento del sito. Senza questi cookie, 
                  il sito non funzionerebbe correttamente. Sono utilizzati per:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
                  <li>Mantenere la sessione utente attiva</li>
                  <li>Memorizzare le preferenze di navigazione</li>
                  <li>Garantire la sicurezza del sito</li>
                </ul>
                <p className="text-sm bg-gray-50 p-3 rounded-lg">
                  <strong>Durata:</strong> Sessione o massimo 12 mesi<br />
                  <strong>Base giuridica:</strong> Legittimo interesse
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-2 mt-6">Cookie analitici</h3>
                <p className="mb-4">
                  Utilizziamo cookie di terze parti per raccogliere informazioni statistiche anonime 
                  sull'utilizzo del sito, al fine di migliorare i nostri servizi. Questi cookie ci permettono di:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
                  <li>Contare le visite al sito</li>
                  <li>Identificare le pagine più visitate</li>
                  <li>Analizzare il comportamento degli utenti</li>
                </ul>
                <p className="text-sm bg-gray-50 p-3 rounded-lg">
                  <strong>Servizi utilizzati:</strong> Google Analytics 4<br />
                  <strong>Durata:</strong> 12-24 mesi<br />
                  <strong>Base giuridica:</strong> Consenso (può essere revocato)
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-2 mt-6">Cookie di profilazione/marketing</h3>
                <p className="mb-4">
                  Al momento <strong>non utilizziamo</strong> cookie di profilazione per finalità di marketing 
                  o remarketing. In caso di future implementazioni, verrà richiesto il tuo consenso esplicito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Tabella dei cookie utilizzati
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left">Nome</th>
                        <th className="border p-3 text-left">Tipologia</th>
                        <th className="border p-3 text-left">Durata</th>
                        <th className="border p-3 text-left">Finalità</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">_ga</td>
                        <td className="border p-3">Analitico (terze parti)</td>
                        <td className="border p-3">2 anni</td>
                        <td className="border p-3">Google Analytics - distinguere gli utenti</td>
                      </tr>
                      <tr>
                        <td className="border p-3">_gid</td>
                        <td className="border p-3">Analitico (terze parti)</td>
                        <td className="border p-3">24 ore</td>
                        <td className="border p-3">Google Analytics - distinguere gli utenti</td>
                      </tr>
                      <tr>
                        <td className="border p-3">_gat</td>
                        <td className="border p-3">Analitico (terze parti)</td>
                        <td className="border p-3">1 minuto</td>
                        <td className="border p-3">Google Analytics - limitare le richieste</td>
                      </tr>
                      <tr>
                        <td className="border p-3">session_id</td>
                        <td className="border p-3">Tecnico</td>
                        <td className="border p-3">Sessione</td>
                        <td className="border p-3">Mantenere la sessione utente</td>
                      </tr>
                      <tr>
                        <td className="border p-3">cookie_consent</td>
                        <td className="border p-3">Tecnico</td>
                        <td className="border p-3">12 mesi</td>
                        <td className="border p-3">Memorizzare le preferenze sui cookie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Come gestire i cookie
                </h2>
                <p className="mb-4">
                  Puoi gestire le tue preferenze sui cookie in diversi modi:
                </p>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">1. Banner dei cookie</h3>
                <p className="mb-4">
                  Al primo accesso al sito, ti viene mostrato un banner che ti permette di:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
                  <li>Accettare tutti i cookie</li>
                  <li>Rifiutare i cookie non necessari</li>
                  <li>Personalizzare le tue preferenze</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">2. Impostazioni del browser</h3>
                <p className="mb-4">
                  Puoi configurare il tuo browser per accettare, rifiutare o eliminare i cookie. 
                  Ecco i link alle guide dei principali browser:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C8E600] hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#C8E600] hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C8E600] hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#C8E600] hover:underline">Microsoft Edge</a></li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">3. Servizi di terze parti</h3>
                <p>
                  Per disattivare i cookie di Google Analytics, puoi installare il 
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#C8E600] hover:underline"> componente aggiuntivo del browser</a> 
                  fornito da Google.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Conseguenze della disattivazione dei cookie
                </h2>
                <p>
                  La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento 
                  del sito e limitare alcune funzionalità. La disattivazione dei cookie analitici non 
                  influisce sulla navigazione ma ci impedisce di migliorare i nostri servizi basandoci 
                  su dati statistici.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Trasferimenti di dati verso paesi terzi
                </h2>
                <p>
                  I dati raccolti tramite Google Analytics possono essere trasferiti al di fuori dell'UE, 
                  in particolare negli Stati Uniti. Google è certificato nel framework Privacy Shield e 
                  ha adottato le Standard Contractual Clauses approvate dalla Commissione Europea per 
                  garantire un adeguato livello di protezione dei dati.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Modifiche alla cookie policy
                </h2>
                <p>
                  Ci riserviamo il diritto di modificare questa cookie policy in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina con l'indicazione della data di aggiornamento. 
                  Ti invitiamo a consultare periodicamente questa pagina per rimanere informato.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Contatti
                </h2>
                <p>
                  Per qualsiasi domanda relativa all'utilizzo dei cookie, puoi contattarci:
                </p>
                <p className="mt-2">
                  <strong>Renova Solution S.r.l.</strong><br />
                  Via Revedole 78/B, 33170 Pordenone (PN)<br />
                  Email: info@renovasolution.it<br />
                  Tel: +39 393 959 6194
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Link utili
                </h2>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a href="/privacy" className="text-[#C8E600] hover:underline">Privacy Policy</a></li>
                  <li><a href="https://www.garanteprivacy.it/cookie" target="_blank" rel="noopener noreferrer" className="text-[#C8E600] hover:underline">Garante Privacy - Cookie</a></li>
                </ul>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
