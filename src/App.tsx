import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FotovoltaicoPrivati from './pages/FotovoltaicoPrivati';
import FotovoltaicoAziende from './pages/FotovoltaicoAziende';
import Manutenzione from './pages/Manutenzione';
import Climatizzazione from './pages/Climatizzazione';
import PompeDiCalore from './pages/PompeDiCalore';
import Infissi from './pages/Infissi';
import FinestrePVC from './pages/infissi/FinestrePVC';
import FinestreAlluminio from './pages/infissi/FinestreAlluminio';
import FinestreLegnoAlluminio from './pages/infissi/FinestreLegnoAlluminio';
import PortePortoni from './pages/infissi/PortePortoni';
import Ristrutturazioni from './pages/Ristrutturazioni';
import RistrutturazioneCompleta from './pages/ristrutturazioni/RistrutturazioneCompleta';
import CappottoTermico from './pages/ristrutturazioni/CappottoTermico';
import ImpiantiIdraulici from './pages/ristrutturazioni/ImpiantiIdraulici';
import Blog from './pages/Blog';
import ChiSiamo from './pages/ChiSiamo';
import Assistenza from './pages/Assistenza';
import Contatti from './pages/Contatti';
import Progetti from './pages/Progetti';
import Preventivo from './pages/Preventivo';
import Privacy from './pages/Privacy';
import CookiePolicy from './pages/CookiePolicy';
import DetrazioniFiscali2026 from './pages/blog/DetrazioniFiscali2026';
import FotovoltaicoAccumulo2026 from './pages/blog/FotovoltaicoAccumulo2026';
import PompaCalore2026 from './pages/blog/PompaCalore2026';
import FinestreMateriali2026 from './pages/blog/FinestreMateriali2026';
import CappottoTermico2026 from './pages/blog/CappottoTermico2026';
import ManutenzioneFotovoltaico2026 from './pages/blog/ManutenzioneFotovoltaico2026';
import InfissiRisparmioEnergetico2026 from './pages/blog/InfissiRisparmioEnergetico2026';
import FotovoltaicoContoTermico2026 from './pages/blog/FotovoltaicoContoTermico2026';
import RistrutturazioneCompleta2026 from './pages/blog/RistrutturazioneCompleta2026';
import FotovoltaicoAziende2026 from './pages/blog/FotovoltaicoAziende2026';
import ClasseEnergeticaCasa2026 from './pages/blog/ClasseEnergeticaCasa2026';
import UmiditaCondensaMuffa2026 from './pages/blog/UmiditaCondensaMuffa2026';
import BonusInfissi2026 from './pages/blog/BonusInfissi2026';
import FotovoltaicoPompaCalore2026 from './pages/blog/FotovoltaicoPompaCalore2026';
import RistrutturazioneBagno2026 from './pages/blog/RistrutturazioneBagno2026';

// GEO Landing Pages — Fotovoltaico
import FotovoltaicoTrieste from './pages/geo/FotovoltaicoTrieste';
import FotovoltaicoUdine from './pages/geo/FotovoltaicoUdine';
import FotovoltaicoPordenone from './pages/geo/FotovoltaicoPordenone';
import FotovoltaicoGorizia from './pages/geo/FotovoltaicoGorizia';
import FotovoltaicoVenezia from './pages/geo/FotovoltaicoVenezia';
import FotovoltaicoPadova from './pages/geo/FotovoltaicoPadova';
import FotovoltaicoVerona from './pages/geo/FotovoltaicoVerona';
import FotovoltaicoVicenza from './pages/geo/FotovoltaicoVicenza';
import FotovoltaicoTreviso from './pages/geo/FotovoltaicoTreviso';
import FotovoltaicoBelluno from './pages/geo/FotovoltaicoBelluno';
import FotovoltaicoRovigo from './pages/geo/FotovoltaicoRovigo';

// GEO Landing Pages — Infissi
import InfissiTrieste from './pages/geo/InfissiTrieste';
import InfissiUdine from './pages/geo/InfissiUdine';
import InfissiPordenone from './pages/geo/InfissiPordenone';
import InfissiGorizia from './pages/geo/InfissiGorizia';
import InfissiVenezia from './pages/geo/InfissiVenezia';
import InfissiPadova from './pages/geo/InfissiPadova';
import InfissiVerona from './pages/geo/InfissiVerona';
import InfissiVicenza from './pages/geo/InfissiVicenza';
import InfissiTreviso from './pages/geo/InfissiTreviso';
import InfissiBelluno from './pages/geo/InfissiBelluno';
import InfissiRovigo from './pages/geo/InfissiRovigo';

// GEO Landing Pages — Ristrutturazioni
import RistrutturazioniTrieste from './pages/geo/RistrutturazioniTrieste';
import RistrutturazioniUdine from './pages/geo/RistrutturazioniUdine';
import RistrutturazioniPordenone from './pages/geo/RistrutturazioniPordenone';
import RistrutturazioniGorizia from './pages/geo/RistrutturazioniGorizia';
import RistrutturazioniVenezia from './pages/geo/RistrutturazioniVenezia';
import RistrutturazioniPadova from './pages/geo/RistrutturazioniPadova';
import RistrutturazioniVerona from './pages/geo/RistrutturazioniVerona';
import RistrutturazioniVicenza from './pages/geo/RistrutturazioniVicenza';
import RistrutturazioniTreviso from './pages/geo/RistrutturazioniTreviso';
import RistrutturazioniBelluno from './pages/geo/RistrutturazioniBelluno';
import RistrutturazioniRovigo from './pages/geo/RistrutturazioniRovigo';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fotovoltaico-privati" element={<FotovoltaicoPrivati />} />
          <Route path="/fotovoltaico-aziende" element={<FotovoltaicoAziende />} />
          <Route path="/manutenzione" element={<Manutenzione />} />
          <Route path="/climatizzazione" element={<Climatizzazione />} />
          <Route path="/pompe-di-calore" element={<PompeDiCalore />} />
          <Route path="/infissi" element={<Infissi />} />
          <Route path="/infissi/finestre-pvc" element={<FinestrePVC />} />
          <Route path="/infissi/finestre-alluminio" element={<FinestreAlluminio />} />
          <Route path="/infissi/finestre-legno-alluminio" element={<FinestreLegnoAlluminio />} />
          <Route path="/infissi/porte-portoni" element={<PortePortoni />} />
          <Route path="/ristrutturazioni" element={<Ristrutturazioni />} />
          <Route path="/ristrutturazioni/ristrutturazione-completa" element={<RistrutturazioneCompleta />} />
          <Route path="/ristrutturazioni/cappotto-termico" element={<CappottoTermico />} />
          <Route path="/ristrutturazioni/impianti-idraulici" element={<ImpiantiIdraulici />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/assistenza" element={<Assistenza />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/preventivo" element={<Preventivo />} />
          <Route path="/progetti" element={<Progetti />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Blog Articles */}
          <Route path="/blog/detrazioni-fiscali-2026" element={<DetrazioniFiscali2026 />} />
          <Route path="/blog/fotovoltaico-accumulo-2026" element={<FotovoltaicoAccumulo2026 />} />
          <Route path="/blog/pompa-calore-vs-caldaia-2026" element={<PompaCalore2026 />} />
          <Route path="/blog/finestre-pvc-alluminio-legno-2026" element={<FinestreMateriali2026 />} />
          <Route path="/blog/cappotto-termico-risparmio-2026" element={<CappottoTermico2026 />} />
          <Route path="/blog/manutenzione-fotovoltaico-2026" element={<ManutenzioneFotovoltaico2026 />} />
          <Route path="/blog/infissi-risparmio-energetico-2026" element={<InfissiRisparmioEnergetico2026 />} />
          <Route path="/blog/conto-termico-3-2026" element={<FotovoltaicoContoTermico2026 />} />
          <Route path="/blog/ristrutturazione-completa-casa-2026" element={<RistrutturazioneCompleta2026 />} />
          <Route path="/blog/fotovoltaico-aziende-2026" element={<FotovoltaicoAziende2026 />} />
          <Route path="/blog/classe-energetica-casa-2026" element={<ClasseEnergeticaCasa2026 />} />
          <Route path="/blog/umidita-condensa-muffa-soluzioni-2026" element={<UmiditaCondensaMuffa2026 />} />
          <Route path="/blog/bonus-infissi-2026" element={<BonusInfissi2026 />} />
          <Route path="/blog/fotovoltaico-pompa-calore-2026" element={<FotovoltaicoPompaCalore2026 />} />
          <Route path="/blog/ristrutturazione-bagno-2026" element={<RistrutturazioneBagno2026 />} />

          {/* GEO — Fotovoltaico per provincia */}
          <Route path="/fotovoltaico-trieste" element={<FotovoltaicoTrieste />} />
          <Route path="/fotovoltaico-udine" element={<FotovoltaicoUdine />} />
          <Route path="/fotovoltaico-pordenone" element={<FotovoltaicoPordenone />} />
          <Route path="/fotovoltaico-gorizia" element={<FotovoltaicoGorizia />} />
          <Route path="/fotovoltaico-venezia" element={<FotovoltaicoVenezia />} />
          <Route path="/fotovoltaico-padova" element={<FotovoltaicoPadova />} />
          <Route path="/fotovoltaico-verona" element={<FotovoltaicoVerona />} />
          <Route path="/fotovoltaico-vicenza" element={<FotovoltaicoVicenza />} />
          <Route path="/fotovoltaico-treviso" element={<FotovoltaicoTreviso />} />
          <Route path="/fotovoltaico-belluno" element={<FotovoltaicoBelluno />} />
          <Route path="/fotovoltaico-rovigo" element={<FotovoltaicoRovigo />} />

          {/* GEO — Infissi per provincia */}
          <Route path="/infissi-trieste" element={<InfissiTrieste />} />
          <Route path="/infissi-udine" element={<InfissiUdine />} />
          <Route path="/infissi-pordenone" element={<InfissiPordenone />} />
          <Route path="/infissi-gorizia" element={<InfissiGorizia />} />
          <Route path="/infissi-venezia" element={<InfissiVenezia />} />
          <Route path="/infissi-padova" element={<InfissiPadova />} />
          <Route path="/infissi-verona" element={<InfissiVerona />} />
          <Route path="/infissi-vicenza" element={<InfissiVicenza />} />
          <Route path="/infissi-treviso" element={<InfissiTreviso />} />
          <Route path="/infissi-belluno" element={<InfissiBelluno />} />
          <Route path="/infissi-rovigo" element={<InfissiRovigo />} />

          {/* GEO — Ristrutturazioni per provincia */}
          <Route path="/ristrutturazioni-trieste" element={<RistrutturazioniTrieste />} />
          <Route path="/ristrutturazioni-udine" element={<RistrutturazioniUdine />} />
          <Route path="/ristrutturazioni-pordenone" element={<RistrutturazioniPordenone />} />
          <Route path="/ristrutturazioni-gorizia" element={<RistrutturazioniGorizia />} />
          <Route path="/ristrutturazioni-venezia" element={<RistrutturazioniVenezia />} />
          <Route path="/ristrutturazioni-padova" element={<RistrutturazioniPadova />} />
          <Route path="/ristrutturazioni-verona" element={<RistrutturazioniVerona />} />
          <Route path="/ristrutturazioni-vicenza" element={<RistrutturazioniVicenza />} />
          <Route path="/ristrutturazioni-treviso" element={<RistrutturazioniTreviso />} />
          <Route path="/ristrutturazioni-belluno" element={<RistrutturazioniBelluno />} />
          <Route path="/ristrutturazioni-rovigo" element={<RistrutturazioniRovigo />} />
        </Routes>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/393939596194?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatta su WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors hover:scale-110 transform duration-200"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.742 3.047 9.379L1.054 31.27l6.1-1.957a15.906 15.906 0 008.85 2.691C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.61c-.39 1.098-1.932 2.01-3.172 2.276-.848.18-1.957.324-5.688-1.222-4.773-1.977-7.84-6.816-8.078-7.133-.23-.316-1.932-2.574-1.932-4.91 0-2.335 1.222-3.48 1.656-3.957.39-.434 1.04-.629 1.664-.629.2 0 .379.01.54.018.476.02.715.048 1.03.796.39.933 1.34 3.27 1.457 3.508.12.238.238.554.078.87-.15.324-.282.468-.52.738-.238.27-.464.476-.702.766-.22.254-.468.524-.192.988.276.457 1.226 2.02 2.633 3.27 1.81 1.609 3.336 2.108 3.81 2.344.476.238.754.2 1.03-.12.282-.324 1.21-1.41 1.533-1.894.316-.484.64-.402 1.078-.238.442.16 2.776 1.308 3.252 1.547.476.238.793.355.91.554.12.2.12 1.14-.27 2.238z"/>
          </svg>
        </a>
      </Router>
    </HelmetProvider>
  );
}

export default App;
