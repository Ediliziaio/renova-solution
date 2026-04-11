export default function ProcessSteps() {
  const steps = [
    {
      number: '1',
      title: 'Sopralluogo gratuito',
      description: 'Un nostro tecnico visita il tuo immobile, analizza i consumi e le caratteristiche del tetto per proporti la soluzione ottimale.',
    },
    {
      number: '2',
      title: 'Progetto e preventivo',
      description: 'Elaboriamo un progetto personalizzato con il dimensionamento dell\'impianto, i materiali consigliati e un preventivo trasparente.',
    },
    {
      number: '3',
      title: 'Installazione rapida',
      description: 'I nostri tecnici qualificati installano l\'impianto in 2-3 giorni, con pulizia finale e collaudo completo.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-[#C8E600] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
            Come funziona
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Dal sopralluogo all'installazione in <span className="text-[#C8E600]">3 passaggi</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-100"></div>
              )}
              
              <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#C8E600] text-black rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 md:text-center">
                  <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
