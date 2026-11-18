import { Link } from 'react-router-dom';

const guides = {
  ristrutturazioni: [
    ['Ristrutturazione del bagno', '/blog/ristrutturazione-bagno-2026'],
    ['Ristrutturazione completa della casa', '/blog/ristrutturazione-completa-casa-2026'],
    ['Cappotto termico', '/blog/cappotto-termico-risparmio-2026'],
  ],
  riscaldamento: [
    ['Pompa di calore e caldaia', '/blog/pompa-calore-vs-caldaia-2026'],
    ['Conto Termico: guida dedicata', '/blog/conto-termico-3-2026'],
    ['Fotovoltaico e pompa di calore', '/blog/fotovoltaico-pompa-calore-2026'],
  ],
} as const;

export default function ServiceGuides({ topic }: { topic: keyof typeof guides }) {
  return <nav aria-labelledby={`guide-${topic}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
    <h2 id={`guide-${topic}`} className="text-2xl font-bold mb-3">Approfondimenti per il tuo intervento</h2>
    <p className="text-gray-600 mb-4">Scegli l’argomento da approfondire prima del confronto con Renova Solution.</p>
    <ul className="list-disc pl-5 space-y-2">{guides[topic].map(([title, path]) => <li key={path}><Link className="font-medium underline" to={path}>{title}</Link></li>)}</ul>
  </nav>;
}
