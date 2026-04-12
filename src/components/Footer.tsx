import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const serviziLinks = [
    { 
      category: 'Fotovoltaico',
      items: [
        { name: 'Per privati', path: '/fotovoltaico-privati' },
        { name: 'Per aziende', path: '/fotovoltaico-aziende' },
        { name: 'Manutenzione', path: '/manutenzione' },
      ]
    },
    { 
      category: 'Climatizzazione',
      items: [
        { name: 'Climatizzazione', path: '/climatizzazione' },
      ]
    },
    { 
      category: 'Infissi',
      items: [
        { name: 'Finestre PVC', path: '/infissi/finestre-pvc' },
        { name: 'Finestre Alluminio', path: '/infissi/finestre-alluminio' },
        { name: 'Legno-Alluminio', path: '/infissi/finestre-legno-alluminio' },
        { name: 'Porte blindate', path: '/infissi/porte-portoni' },
      ]
    },
    { 
      category: 'Ristrutturazioni',
      items: [
        { name: 'Ristrutturazione completa', path: '/ristrutturazioni/ristrutturazione-completa' },
        { name: 'Cappotto termico', path: '/ristrutturazioni/cappotto-termico' },
        { name: 'Impianti idraulici', path: '/ristrutturazioni/impianti-idraulici' },
      ]
    },
  ];

  const aziendaLinks = [
    { name: 'Progetti', path: '/progetti' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Assistenza', path: '/assistenza' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contatti', path: '/contatti' },
  ];

  const zone = [
    'Udine', 'Trieste', 'Gorizia', 'Pordenone',
    'Treviso', 'Venezia', 'Padova', 'Vicenza'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Slogan section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed">
              <span className="text-[#C8E600]">Renova Solution</span> — Meno bolletta. Meno freddo. 
              <br className="hidden sm:block" />
              Casa finita come l'avevi immaginata.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Logo & Info */}
          <div>
            <img 
              src="/logo.png" 
              alt="Renova Solution" 
              className="h-9 md:h-10 w-auto mb-5"
            />
            <p className="text-gray-400 text-sm mb-5">
              Fotovoltaico, infissi e ristrutturazioni in Friuli Venezia Giulia e Veneto.
            </p>
            <div className="space-y-2.5 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8E600]" />
                <span>Via Friuli, 92<br />33080 Prata di Pordenone PN</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#C8E600]" />
                <span>+39 393 959 6194</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#C8E600]" />
                <span>info@renovasolution.it</span>
              </div>
            </div>
          </div>

          {/* Servizi */}
          <div className="sm:col-span-1">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#C8E600]">Servizi</h4>
            <div className="space-y-4">
              {serviziLinks.map((group) => (
                <div key={group.category}>
                  <Link 
                    to={group.items[0]?.path || '#'}
                    className="font-medium text-white text-sm hover:text-[#C8E600] transition-colors"
                  >
                    {group.category}
                  </Link>
                  {group.items.length > 1 && (
                    <ul className="mt-1.5 space-y-1">
                      {group.items.map((item) => (
                        <li key={item.path}>
                          <Link 
                            to={item.path}
                            className="text-gray-400 hover:text-[#C8E600] transition-colors text-xs flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
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

          {/* Azienda */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#C8E600]">Azienda</h4>
            <ul className="space-y-2.5">
              {aziendaLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#C8E600] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#C8E600]">Dove operiamo</h4>
            <div className="flex flex-wrap gap-1.5">
              {zone.map((city) => (
                <span key={city} className="bg-gray-800 text-gray-400 text-xs px-2.5 py-1 rounded-full">
                  {city}
                </span>
              ))}
            </div>
            
            <div className="mt-6">
              <p className="text-gray-500 text-xs mb-3">Seguici</p>
              <div className="flex gap-2.5">
                <a href="https://www.facebook.com/profile.php?id=100095204480095" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C8E600] hover:text-black transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C8E600] hover:text-black transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C8E600] hover:text-black transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dati legali */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-6 text-xs text-gray-500">
            <div>
              <p className="font-bold text-gray-400 mb-2">Sede Operativa</p>
              <p>Via Friuli, 92 — 33080 Prata di Pordenone (PN)</p>
              <p>Tel: +39 393 959 6194</p>
            </div>
            <div>
              <p className="font-bold text-gray-400 mb-2">Sede Legale</p>
              <p>Via Revedole 78/B — 33170 Pordenone (PN)</p>
              <p>P.IVA: 01941970939</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>© 2026 Renova Solution srl — P.IVA 01941970939</p>
            <div className="flex gap-5">
              <Link to="/privacy" className="hover:text-[#C8E600] transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" className="hover:text-[#C8E600] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
