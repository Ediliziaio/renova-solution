export default function PartnerLogos() {
  const partners = [
    { name: 'SUNPOWER', subtitle: 'Premier Partner' },
    { name: 'solaredge', subtitle: '' },
    { name: 'Tesla', subtitle: 'Energy Certified Installer' },
    { name: 'DAIKIN', subtitle: '' },
    { name: 'ATON', subtitle: 'GREEN STORAGE' },
    { name: 'ENPHASE', subtitle: '' },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center">
              <span className={`font-bold text-gray-800 ${
                partner.name === 'SUNPOWER' ? 'text-lg tracking-wider' :
                partner.name === 'solaredge' ? 'text-xl italic' :
                partner.name === 'Tesla' ? 'text-xl font-bold' :
                partner.name === 'DAIKIN' ? 'text-xl italic' :
                partner.name === 'ATON' ? 'text-lg tracking-widest' :
                'text-lg'
              }`}>
                {partner.name}
              </span>
              {partner.subtitle && (
                <span className="text-xs text-gray-500">{partner.subtitle}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
