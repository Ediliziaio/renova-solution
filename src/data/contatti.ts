/**
 * Fonte unica dei dati di contatto aziendali.
 * Modificare SOLO qui: ogni componente/pagina legge da questo file.
 */

export const CONTATTI = {
  // Telefono
  telefono: '+39 376 1293952',
  telefonoBreve: '376 1293952',
  telefonoLink: 'tel:+393761293952',
  telefonoSchema: '+39-376-1293952',
  telefonoE164: '393761293952',

  // WhatsApp
  whatsappUrl:
    'https://wa.me/393761293952?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi',

  // Email
  email: 'commerciale@renovasolution.it',
  emailLink: 'mailto:commerciale@renovasolution.it',
  pec: 'renovasolution@pec.it',

  // Dati societari
  ragioneSociale: 'Renova Solution srl',
  piva: '01941970939',

  // Sedi
  sedeOperativa: {
    via: 'Via Friuli, 92',
    cap: '33080',
    citta: 'Prata di Pordenone',
    provincia: 'PN',
    completo: 'Via Friuli, 92 — 33080 Prata di Pordenone (PN)',
  },
  sedeLegale: {
    via: 'Via Revedole 78/B',
    cap: '33170',
    citta: 'Pordenone',
    provincia: 'PN',
    completo: 'Via Revedole 78/B — 33170 Pordenone (PN)',
  },

  // Web
  sito: 'https://www.renovasolution.it',
  facebook: 'https://www.facebook.com/profile.php?id=100095204480095',
} as const;

export default CONTATTI;
