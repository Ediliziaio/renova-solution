import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveParent = (paths: string[]) => paths.some(p => location.pathname.startsWith(p));

  // Struttura menu Servizi con macro-categorie e sottomenu
  const serviziDropdown = [
    {
      category: 'Fotovoltaico',
      path: '/fotovoltaico-privati',
      items: [
        { name: 'Per privati', path: '/fotovoltaico-privati' },
        { name: 'Per aziende', path: '/fotovoltaico-aziende' },
        { name: 'Manutenzione', path: '/manutenzione' },
      ]
    },
    {
      category: 'Climatizzazione',
      path: '/climatizzazione',
      items: []
    },
    {
      category: 'Infissi',
      path: '/infissi',
      items: [
        { name: 'Finestre PVC', path: '/infissi/finestre-pvc' },
        { name: 'Finestre Alluminio', path: '/infissi/finestre-alluminio' },
        { name: 'Legno-Alluminio', path: '/infissi/finestre-legno-alluminio' },
        { name: 'Porte blindate', path: '/infissi/porte-portoni' },
      ]
    },
    {
      category: 'Ristrutturazioni',
      path: '/ristrutturazioni',
      items: [
        { name: 'Ristrutturazione completa', path: '/ristrutturazioni/ristrutturazione-completa' },
        { name: 'Cappotto termico', path: '/ristrutturazioni/cappotto-termico' },
        { name: 'Impianti idraulici', path: '/ristrutturazioni/impianti-idraulici' },
      ]
    },
  ];

  // Verifica se un servizio è attivo
  const serviziPaths = serviziDropdown.flatMap(s => [s.path, ...s.items.map(i => i.path)]);
  const isServiziActive = isActiveParent(serviziPaths);

  // Gestione apertura/chiusura dropdown con delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown('servizi');
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Delay di 150ms per dare tempo di muovere il mouse sul dropdown
  };

  // Chiudi dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Chiudi menu mobile quando cambia pagina
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Renova Solution" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {/* Home */}
              <Link 
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-[#C8E600]' : 'text-gray-900 hover:text-[#C8E600]'
                }`}
              >
                Home
              </Link>

              {/* Servizi - Mega Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
                    isServiziActive ? 'text-[#C8E600]' : 'text-gray-900 hover:text-[#C8E600]'
                  }`}
                  onClick={() => setOpenDropdown(openDropdown === 'servizi' ? null : 'servizi')}
                >
                  Servizi
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${openDropdown === 'servizi' ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {/* Mega Dropdown */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[640px] bg-white shadow-2xl rounded-xl border border-gray-100 transition-all duration-200 z-50 ${
                    openDropdown === 'servizi' 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Freccetta del dropdown */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                  
                  <div className="relative bg-white rounded-xl p-5">
                    <div className="grid grid-cols-2 gap-2">
                      {serviziDropdown.map((service) => (
                        <div 
                          key={service.category} 
                          className="p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <Link 
                            to={service.path}
                            className="font-bold text-gray-900 group-hover:text-[#C8E600] transition-colors block mb-2"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {service.category}
                          </Link>
                          {service.items.length > 0 && (
                            <ul className="space-y-1.5">
                              {service.items.map((item) => (
                                <li key={item.path}>
                                  <Link 
                                    to={item.path}
                                    className="text-sm text-gray-600 hover:text-[#C8E600] transition-colors flex items-center gap-2 py-0.5"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#C8E600] rounded-full transition-colors"></span>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Altre voci */}
              <Link 
                to="/chi-siamo"
                className={`text-sm font-medium transition-colors ${
                  isActive('/chi-siamo') ? 'text-[#C8E600]' : 'text-gray-900 hover:text-[#C8E600]'
                }`}
              >
                Chi Siamo
              </Link>
              <Link 
                to="/assistenza"
                className={`text-sm font-medium transition-colors ${
                  isActive('/assistenza') ? 'text-[#C8E600]' : 'text-gray-900 hover:text-[#C8E600]'
                }`}
              >
                Assistenza
              </Link>
              <Link 
                to="/blog"
                className={`text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-[#C8E600]' : 'text-gray-900 hover:text-[#C8E600]'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contatti"
                className={`text-sm font-medium transition-colors ${
                  isActive('/contatti') ? 'text-[#C8E600]' : 'text-gray-900 hover:text-[#C8E600]'
                }`}
              >
                Contatti
              </Link>
            </div>

            {/* CTA Button - Desktop */}
            <Link 
              to="/contatti"
              className="hidden xl:block bg-[#C8E600] hover:bg-[#b3cc00] text-black px-5 py-2.5 rounded-full text-sm font-bold transition-colors"
            >
              Preventivo
            </Link>

            {/* Mobile menu button */}
            <button 
              className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`xl:hidden bg-white border-t border-gray-100 fixed top-14 md:top-16 left-0 right-0 z-50 transition-all duration-300 ${
            mobileMenuOpen 
              ? 'opacity-100 visible max-h-[calc(100vh-3.5rem)]' 
              : 'opacity-0 invisible max-h-0'
          } overflow-y-auto`}
        >
          <div className="px-4 py-4 space-y-1">
            <Link 
              to="/" 
              className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                isActive('/') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Servizi Mobile */}
            <div className="py-2">
              <div className="px-2 py-2 font-bold text-gray-900">Servizi</div>
              
              {/* Fotovoltaico */}
              <div className="mb-2">
                <Link 
                  to="/fotovoltaico-privati"
                  className={`block py-2 px-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive('/fotovoltaico-privati') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fotovoltaico
                </Link>
                <div className="pl-4 space-y-0.5 mt-1">
                  <Link 
                    to="/fotovoltaico-privati" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/fotovoltaico-privati') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Per privati
                  </Link>
                  <Link 
                    to="/fotovoltaico-aziende" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/fotovoltaico-aziende') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Per aziende
                  </Link>
                  <Link 
                    to="/manutenzione" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/manutenzione') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Manutenzione
                  </Link>
                </div>
              </div>
              
              {/* Climatizzazione */}
              <Link 
                to="/climatizzazione"
                className={`block py-2 px-2 text-sm font-medium rounded-lg transition-colors mb-2 ${
                  isActive('/climatizzazione') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Climatizzazione
              </Link>
              
              {/* Infissi */}
              <div className="mb-2">
                <Link 
                  to="/infissi"
                  className={`block py-2 px-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive('/infissi') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Infissi
                </Link>
                <div className="pl-4 space-y-0.5 mt-1">
                  <Link 
                    to="/infissi/finestre-pvc" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/infissi/finestre-pvc') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Finestre PVC
                  </Link>
                  <Link 
                    to="/infissi/finestre-alluminio" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/infissi/finestre-alluminio') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Finestre Alluminio
                  </Link>
                  <Link 
                    to="/infissi/finestre-legno-alluminio" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/infissi/finestre-legno-alluminio') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Legno-Alluminio
                  </Link>
                  <Link 
                    to="/infissi/porte-portoni" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/infissi/porte-portoni') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Porte blindate
                  </Link>
                </div>
              </div>
              
              {/* Ristrutturazioni */}
              <div>
                <Link 
                  to="/ristrutturazioni"
                  className={`block py-2 px-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive('/ristrutturazioni') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ristrutturazioni
                </Link>
                <div className="pl-4 space-y-0.5 mt-1">
                  <Link 
                    to="/ristrutturazioni/ristrutturazione-completa" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/ristrutturazioni/ristrutturazione-completa') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ristrutturazione completa
                  </Link>
                  <Link 
                    to="/ristrutturazioni/cappotto-termico" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/ristrutturazioni/cappotto-termico') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cappotto termico
                  </Link>
                  <Link 
                    to="/ristrutturazioni/impianti-idraulici" 
                    className={`block py-2 px-2 text-sm rounded-lg transition-colors ${
                      isActive('/ristrutturazioni/impianti-idraulici') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Impianti idraulici
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/chi-siamo" 
              className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                isActive('/chi-siamo') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            
            <Link 
              to="/assistenza" 
              className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                isActive('/assistenza') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Assistenza
            </Link>
            
            <Link 
              to="/blog" 
              className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                isActive('/blog') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link 
              to="/contatti" 
              className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                isActive('/contatti') ? 'text-[#C8E600] bg-[#C8E600]/10' : 'text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatti
            </Link>
            
            <Link 
              to="/contatti" 
              className="block w-full bg-[#C8E600] text-black text-center py-3 rounded-full font-bold mt-4 hover:bg-[#b3cc00] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Richiedi preventivo
            </Link>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed header */}
      <div className="h-14 md:h-16"></div>
    </>
  );
}
