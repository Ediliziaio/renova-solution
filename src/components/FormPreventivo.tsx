import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function FormPreventivo() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#C8E600] via-[#a8c400] to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info side */}
          <div className="text-white">
            <span className="inline-block text-black/60 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
              Contatti
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">
              Richiedi un preventivo gratuito
            </h2>
            <p className="text-black/70 text-sm md:text-base mb-6 md:mb-8">
              Compila il form e sarai ricontattato entro 24 ore da un nostro tecnico.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 text-black">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">Veneto e Friuli Venezia Giulia</span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">+39 393 959 6194</span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">info@renovasolution.it</span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">Lun-Ven: 8:30-18:00 | Sab: 9:00-12:00</span>
              </div>
            </div>
          </div>
          
          {/* Form side */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl">
            <form className="space-y-3 md:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <input 
                  type="text" 
                  placeholder="Nome*" 
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]" 
                />
                <input 
                  type="text" 
                  placeholder="Cognome*" 
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]" 
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]" 
                />
                <input 
                  type="tel" 
                  placeholder="Telefono*" 
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]" 
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]">
                  <option>Provincia*</option>
                  <option>Treviso</option>
                  <option>Venezia</option>
                  <option>Padova</option>
                  <option>Vicenza</option>
                  <option>Verona</option>
                  <option>Udine</option>
                  <option>Pordenone</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Città" 
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]" 
                />
              </div>
              
              <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600]">
                <option>Servizio di interesse*</option>
                <option>Fotovoltaico per privati</option>
                <option>Fotovoltaico per aziende</option>
                <option>Climatizzazione</option>
                <option>Pompe di calore</option>
                <option>Infissi</option>
                <option>Ristrutturazioni</option>
              </select>
              
              <textarea 
                placeholder="Messaggio" 
                rows={3}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8E600] focus:ring-1 focus:ring-[#C8E600] resize-none"
              ></textarea>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#C8E600] focus:ring-[#C8E600]" />
                <span className="text-xs text-gray-500">
                  Acconsento al trattamento dei dati personali (<a href="#" className="underline hover:text-[#C8E600]">Privacy Policy</a>)
                </span>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#C8E600] text-black py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-[#b3cc00] transition-colors"
              >
                Richiedi preventivo
              </button>
              
              <p className="text-center text-gray-500 text-xs md:text-sm">
                Oppure chiama il <a href="tel:+393939596194" className="font-bold text-gray-900 hover:text-[#C8E600]">393 959 6194</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
