import { Star, Quote } from 'lucide-react';

export default function Recensioni() {
  const recensioni = [
    {
      name: 'Marco B.',
      location: 'Treviso',
      rating: 5,
      text: 'Installazione perfetta in 2 giorni. Impianto da 6kW con batteria, bolletta ridotta del 75%. Consigliatissimi!',
      service: 'Fotovoltaico + Accumulo',
    },
    {
      name: 'Laura M.',
      location: 'Venezia',
      rating: 5,
      text: 'Professionali e puntuali. Hanno seguito tutto dalla A alla Z, compresa la pratica per le detrazioni.',
      service: 'Fotovoltaico',
    },
    {
      name: 'Giuseppe T.',
      location: 'Padova',
      rating: 5,
      text: 'Ottimo rapporto qualità-prezzo. Pannelli SunPower e batteria Tesla, monitoraggio via app sempre funzionante.',
      service: 'Fotovoltaico + Accumulo',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
            Testimonianze
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Cosa dicono i nostri clienti
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {recensioni.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-xl md:rounded-2xl p-5 md:p-6 relative">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#C8E600]/30 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-[#C8E600] text-[#C8E600]" />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                "{r.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C8E600] rounded-full flex items-center justify-center text-black font-bold text-sm md:text-base">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base">{r.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{r.location} • {r.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <p className="text-gray-500 text-xs md:text-sm">
            Voto medio 4.9/5 su oltre 200 recensioni verificate
          </p>
        </div>
      </div>
    </section>
  );
}
