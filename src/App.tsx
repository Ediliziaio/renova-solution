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
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
