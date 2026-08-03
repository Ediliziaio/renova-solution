import { useEffect, useRef } from 'react';

const FORM_ORIGIN = 'https://rsbrguhkodgnqfomrevo.supabase.co';
const FORM_SLUG = 'renova-solution-contatti';
const COMPANY_ID = 'f2a16dd8-36c3-4d92-8d78-267d6374dcb5';

const FORM_SRC = `${FORM_ORIGIN}/functions/v1/form-render?slug=${FORM_SLUG}&company_id=${COMPANY_ID}`;

interface LeadFormProps {
  /** Altezza minima prima che il form comunichi la sua altezza reale */
  minHeight?: number;
  className?: string;
  title?: string;
}

/**
 * Form contatti/preventivo (Edilizia in Cloud lead form).
 * L'iframe comunica la propria altezza via postMessage: qui la applichiamo
 * accettando solo i messaggi provenienti dall'origin del form.
 */
export default function LeadForm({
  minHeight = 520,
  className = '',
  title = 'Richiedi informazioni',
}: LeadFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== FORM_ORIGIN) return;
      const data = e.data;
      if (
        data &&
        data.type === 'eic-lead-form-height' &&
        data.slug === FORM_SLUG &&
        iframeRef.current
      ) {
        iframeRef.current.style.height = `${data.height}px`;
      }
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={FORM_SRC}
      title={title}
      loading="lazy"
      className={className}
      style={{ width: '100%', border: 0, minHeight: `${minHeight}px` }}
    />
  );
}
