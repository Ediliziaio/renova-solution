export default function Vantaggi() {
  const vantaggi = [
    {
      title: 'Risparmio',
      description: 'L\'energia che viene prodotta dall\'impianto non deve essere acquistata dalla rete.',
    },
    {
      title: 'Detrazioni Fiscali',
      description: 'Lo Stato rimborsa parte della somma spesa per gli interventi di ristrutturazione edilizia.',
    },
    {
      title: 'Affidabilità',
      description: 'L\'impianto fotovoltaico non ha parti in movimento e non necessita di trasporti per produrre energia.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">I vantaggi</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gli impianti per la produzione di energia elettrica mediante tecnologia fotovoltaica presentano numerosi vantaggi, tra i quali i più significativi sono:
            </p>
            <div className="w-12 h-1 bg-[#C8E600] mt-4"></div>
          </div>
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {vantaggi.map((v) => (
              <div key={v.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#C8E600]' : 'bg-gray-200'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
