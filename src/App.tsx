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
import Privacy from './pages/Privacy';
import CookiePolicy from './pages/CookiePolicy';
import DetrazioniFiscali2026 from './pages/blog/DetrazioniFiscali2026';
import FotovoltaicoAccumulo2026 from './pages/blog/FotovoltaicoAccumulo2026';
import PompaCalore2026 from './pages/blog/PompaCalore2026';
import FinestreMateriali2026 from './pages/blog/FinestreMateriali2026';
import CappottoTermico2026 from './pages/blog/CappottoTermico2026';
import ManutenzioneFotovoltaico2026 from './pages/blog/ManutenzioneFotovoltaico2026';

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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Blog Articles */}
          <Route path="/blog/detrazioni-fiscali-2026" element={<DetrazioniFiscali2026 />} />
          <Route path="/blog/fotovoltaico-accumulo-2026" element={<FotovoltaicoAccumulo2026 />} />
          <Route path="/blog/pompa-calore-vs-caldaia-2026" element={<PompaCalore2026 />} />
          <Route path="/blog/finestre-pvc-alluminio-legno-2026" element={<FinestreMateriali2026 />} />
          <Route path="/blog/cappotto-termico-risparmio-2026" element={<CappottoTermico2026 />} />
          <Route path="/blog/manutenzione-fotovoltaico-2026" element={<ManutenzioneFotovoltaico2026 />} />

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
      </Router>
    </HelmetProvider>
  );
}

export default App;
