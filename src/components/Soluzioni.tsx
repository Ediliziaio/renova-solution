import { Link } from 'react-router-dom';

export default function Soluzioni() {
  const soluzioni = [
    {
      name: 'Soluzione 1',
      power: '3kW',
      price: 'a partire da',
      monthly: '57€/mese',
    },
    {
      name: 'Soluzione 2',
      power: '6kW',
      price: 'a partire da',
      monthly: '79€/mese',
    },
    {
      name: 'Soluzione 3',
      power: '10kW',
      price: 'a partire da',
      monthly: '109€/mese',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-[#C8E600]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Scegli la soluzione su misura per te
        </h2>
        <p className="text-white/80 text-center mb-12">
          Impianti fotovoltaici in base ai kW necessari per la tua abitazione
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {soluzioni.map((s) => (
            <div key={s.name} className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">{s.name}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">{s.power}</div>
              <p className="text-gray-500 text-sm mb-4">{s.price}</p>
              <div className="text-2xl font-bold text-[#C8E600] mb-6">{s.monthly}</div>
              <Link 
                to="/contatti"
                className="block w-full bg-[#C8E600] text-black py-2 rounded-full text-sm font-bold hover:bg-[#b3cc00] transition-colors"
              >
                Richiedi una consulenza gratuita
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
