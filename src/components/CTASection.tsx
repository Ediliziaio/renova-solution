import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
              Preventivo gratuito per il tuo impianto
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Sopralluogo senza impegno in tutto il Veneto e Friuli V.G.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Link 
              to="/contatti"
              className="bg-[#C8E600] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#b3cc00] transition-colors text-center"
            >
              Richiedi preventivo
            </Link>
            <a 
              href="tel:+393939596194"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-colors"
            >
              <Phone size={18} />
              393 959 6194
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
