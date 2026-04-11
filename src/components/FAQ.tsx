import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  title?: string;
  items: { question: string; answer: string }[];
}

export default function FAQ({ title = "FAQ Impianti Fotovoltaici", items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-600 text-center mb-8">
          Domande frequenti in merito ai pannelli fotovoltaici, alla loro posa e al risparmio energetico
        </p>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-[#C8E600]/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-[#C8E600]/5 transition-colors"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openIndex === i ? (
                  <Minus size={20} className="text-[#C8E600]" />
                ) : (
                  <Plus size={20} className="text-[#C8E600]" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
