import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTATTI } from '../data/contatti';
import LeadForm from './LeadForm';


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
                <a href={CONTATTI.telefonoLink} className="text-sm md:text-base hover:underline">
                  {CONTATTI.telefono}
                </a>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href={CONTATTI.emailLink} className="text-sm md:text-base hover:underline">
                  {CONTATTI.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">Lun-Ven: 8:30-18:00 | Sab: 9:00-12:00</span>
              </div>
            </div>
          </div>
          
          {/* Form side */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl">
            <LeadForm title="Richiedi un preventivo gratuito" />
          </div>
        </div>
      </div>
    </section>
  );
}
