interface Partner {
  name: string;
  logo: string;
  alt: string;
}

export default function PartnerLogos() {
  const partners: Partner[] = [
    {
      name: 'AlphaESS',
      logo: '/images/partners/alpha-ess.png',
      alt: 'AlphaESS - Sistemi di accumulo fotovoltaico',
    },
    {
      name: 'Trina Solar',
      logo: '/images/partners/trina-solar.png',
      alt: 'Trina Solar - Pannelli fotovoltaici',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100" aria-labelledby="partner-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#C8E600]/20 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
            Fornitori certificati
          </span>
          <h2 id="partner-heading" className="text-xl md:text-2xl font-bold text-gray-900">
            I nostri partner tecnologici
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Lavoriamo solo con i migliori produttori mondiali per garantirti impianti fotovoltaici
            affidabili, con elevata efficienza e garanzie estese.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
