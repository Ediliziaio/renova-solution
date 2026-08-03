import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'https://rsbrguhkodgnqfomrevo.supabase.co/functions/v1/form-submit';
const FORM_ID = '7803a2ee-c604-42f0-9c48-1d07ac28a7ac';
const GRAZIE = '/grazie';

type CampoId = 'nome_e_cognome' | 'email' | 'telefono' | 'citta';

const CAMPI: {
  id: CampoId;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
}[] = [
  {
    id: 'nome_e_cognome',
    label: 'Nome e cognome',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Mario Rossi',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'nome@esempio.it',
  },
  {
    id: 'telefono',
    label: 'Telefono',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: '+39 333 1234567',
  },
  {
    id: 'citta',
    label: 'Città',
    type: 'text',
    autoComplete: 'address-level2',
    placeholder: 'Pordenone',
  },
];

const VUOTO = { nome_e_cognome: '', email: '', telefono: '', citta: '' };

function valido(id: CampoId, valore: string) {
  const v = valore.trim();
  if (!v) return false;
  if (id === 'email') return /.+@.+\..+/.test(v);
  return true;
}

interface LeadFormProps {
  className?: string;
  /** Etichetta accessibile del form (non mostrata) */
  title?: string;
  submitLabel?: string;
}

/**
 * Form contatti/preventivo.
 *
 * Invia direttamente alla edge function `form-submit` e, a invio riuscito,
 * porta l'utente su /grazie (o sul redirect_url restituito dall'API).
 * Il campo `website` è un honeypot antispam: visivamente fuori schermo,
 * se compilato l'invio viene scartato in silenzio.
 */
export default function LeadForm({
  className = '',
  title = 'Richiedi informazioni',
  submitLabel = 'Invia richiesta',
}: LeadFormProps) {
  const navigate = useNavigate();
  const [valori, setValori] = useState<Record<CampoId, string>>({ ...VUOTO });
  const [honeypot, setHoneypot] = useState('');
  const [errati, setErrati] = useState<CampoId[]>([]);
  const [invio, setInvio] = useState(false);
  const [errore, setErrore] = useState('');

  function aggiorna(id: CampoId, valore: string) {
    setValori((v) => ({ ...v, [id]: valore }));
    if (errati.includes(id) && valido(id, valore)) {
      setErrati((e) => e.filter((x) => x !== id));
    }
  }

  function vaiA(url: string) {
    // Se l'API rimanda a una pagina del sito, navighiamo lato client;
    // per destinazioni esterne serve un cambio di pagina vero.
    try {
      const u = new URL(url, window.location.origin);
      if (u.origin === window.location.origin) {
        navigate(u.pathname + u.search);
        return;
      }
    } catch {
      /* url malformato: sotto usiamo comunque il fallback */
    }
    window.location.href = url;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (invio) return;

    const mancanti = CAMPI.map((c) => c.id).filter((id) => !valido(id, valori[id]));
    if (mancanti.length) {
      setErrati(mancanti);
      setErrore('Controlla i campi evidenziati.');
      document.getElementById(`rs-${mancanti[0]}`)?.focus();
      return;
    }
    if (honeypot) return;

    setErrati([]);
    setErrore('');
    setInvio(true);

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: FORM_ID,
          data: {
            nome_e_cognome: valori.nome_e_cognome.trim(),
            email: valori.email.trim(),
            telefono: valori.telefono.trim(),
            citta: valori.citta.trim(),
          },
          page_url: window.location.href,
          referrer: document.referrer || null,
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok || body.error) throw new Error(body.error || 'errore');

      vaiA(body.redirect_url || GRAZIE);
    } catch {
      setInvio(false);
      setErrore('Invio non riuscito. Riprova, oppure scrivici su WhatsApp.');
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label={title}
      className={`w-full max-w-lg mx-auto ${className}`}
    >
      {CAMPI.map((c) => {
        const ko = errati.includes(c.id);
        return (
          <div key={c.id} className="mb-4">
            <label
              htmlFor={`rs-${c.id}`}
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              {c.label} <span className="text-red-600">*</span>
            </label>
            <input
              id={`rs-${c.id}`}
              name={c.id}
              type={c.type}
              required
              autoComplete={c.autoComplete}
              placeholder={c.placeholder}
              value={valori[c.id]}
              onChange={(e) => aggiorna(c.id, e.target.value)}
              aria-invalid={ko}
              className={`w-full px-3.5 py-3 rounded-lg border bg-white text-gray-900 text-base outline-none transition-colors focus:border-[#C8E600] focus:ring-4 focus:ring-[#C8E600]/25 ${
                ko ? 'border-red-600' : 'border-gray-300'
              }`}
            />
          </div>
        );
      })}

      {/* Honeypot antispam: fuori schermo, mai compilato da un utente reale */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="rs-website">Non compilare</label>
        <input
          id="rs-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={invio}
        className="w-full py-3.5 rounded-full bg-[#C8E600] text-black text-base font-bold transition-opacity hover:opacity-90 disabled:opacity-55 disabled:cursor-not-allowed"
      >
        {invio ? 'Invio in corso…' : submitLabel}
      </button>

      <p role="status" aria-live="polite" className="mt-3 min-h-[1.2em] text-sm text-red-600">
        {errore}
      </p>
    </form>
  );
}
