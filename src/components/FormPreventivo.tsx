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
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl" style={{minHeight:'650px'}}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/g2H271QFeRb5FT73aUyz"
              style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
              id="inline-g2H271QFeRb5FT73aUyz"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Invio Richiesta"
              data-height="623"
              data-layout-iframe-id="inline-g2H271QFeRb5FT73aUyz"
              data-form-id="g2H271QFeRb5FT73aUyz"
              title="Invio Richiesta"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
