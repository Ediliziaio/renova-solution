import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniTrieste() {
  return (
    <GeoServicePage
      provincia="Trieste"
      provinciaSlug="trieste"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-TS"
      lat={45.6495}
      lng={13.7768}
      comuni={['Trieste', 'Muggia', 'Duino-Aurisina', 'Sgonico', 'Monrupino', 'San Dorligo della Valle']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Trieste: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazioni complete di appartamenti, bagni e facciate a Trieste e provincia. Preventivo dettagliato, bonus 50%, un unico referente per tutto il cantiere."
      seoTitle="Ristrutturazioni Trieste | Ristrutturazione Casa Trieste | Renova Solution"
      seoDescription="Ristrutturazioni chiavi in mano a Trieste e provincia. Bagni, cucine, facciate, cappotto termico. Bonus 50%, preventivo gratuito. Renova Solution opera in tutto il FVG."
      seoKeywords="ristrutturazioni trieste, ristrutturazione casa trieste, ristrutturazione bagno trieste, ristrutturazione appartamento trieste, bonus ristrutturazione trieste, impresa ristrutturazioni trieste"
      introText="Il patrimonio edilizio di Trieste è tra i più caratteristici del Nord-Est: palazzi asburgici, edifici liberty del centro storico e condomini del secondo dopoguerra che oggi necessitano di interventi strutturali e impiantistici importanti. Ristrutturare a Trieste significa confrontarsi con vincoli architettonici, solai in legno, impianti obsoleti e la necessità di migliorare l'efficienza energetica di edifici costruiti quando il comfort termico non era una priorità.

Nei comuni della provincia — Muggia, Duino-Aurisina, Sgonico, Monrupino e San Dorligo della Valle — si aggiunge un patrimonio di villette e case indipendenti dove gli interventi più richiesti riguardano il rifacimento del bagno, l'ammodernamento della cucina, il cappotto termico e la sostituzione dei serramenti. Molti proprietari triestini approfittano del bonus ristrutturazione al 50% per recuperare metà dell'investimento in dieci anni.

Renova Solution è il partner ideale per chi cerca un'impresa di ristrutturazioni a Trieste affidabile, con preventivi trasparenti e un unico referente di cantiere. Coordiniamo muratori, idraulici, elettricisti e piastrellisti, garantendo tempi certi e risultati a regola d'arte."
      benefici={[
        'Preventivo dettagliato e trasparente — sai esattamente cosa paghi prima di iniziare i lavori',
        'Bonus ristrutturazione 50%: gestiamo noi tutta la pratica fiscale e la comunicazione ENEA',
        'Un unico referente di cantiere che coordina tutti i mestieri — zero stress per te',
        'Ristrutturazioni complete: bagno, cucina, pavimenti, impianti elettrici e idraulici',
        'Cappotto termico e isolamento facciata per ridurre i consumi energetici fino al 40%',
        'Garanzia di 10 anni su tutti i lavori eseguiti e assistenza post-cantiere dedicata'
      ]}
      dettaglioServizio="Il nostro metodo parte sempre da un sopralluogo gratuito nell'immobile a Trieste. Analizziamo lo stato degli impianti, la struttura portante, i materiali esistenti e ascoltiamo le tue esigenze. Entro una settimana ricevi un preventivo dettagliato, voce per voce, senza sorprese a fine lavori.

Una volta approvato il progetto, il nostro capocantiere organizza la sequenza dei lavori: demolizioni, rifacimento impianti idraulici ed elettrici, massetti, intonaci, posa pavimenti e rivestimenti, tinteggiatura finale. Ogni fase è programmata per ridurre al minimo i tempi di cantiere e il disagio abitativo.

Per le facciate e il cappotto termico, lavoriamo con sistemi certificati ETICS e materiali isolanti ad alte prestazioni, rispettando le normative comunali di Trieste e gli eventuali vincoli della Soprintendenza per gli edifici storici del centro.

Al termine dei lavori consegniamo tutta la documentazione: dichiarazione di conformità impianti, attestato di prestazione energetica aggiornato e pratica ENEA per il bonus 50%. Un unico interlocutore, dall'inizio alla fine."
      faqs={[
        { question: 'Quanto costa ristrutturare un appartamento a Trieste?', answer: "Il costo di una ristrutturazione completa a Trieste varia tra 600€ e 1.000€ al metro quadro, a seconda della complessità degli interventi. Un bagno completo parte da 7.000-8.000€, mentre la ristrutturazione integrale di un appartamento di 80 mq si colloca tra 48.000€ e 80.000€. Con il bonus 50% recuperi metà della spesa in 10 anni." },
        { question: 'Quanto tempo richiede una ristrutturazione completa a Trieste?', answer: "Per un appartamento di 80-100 mq con rifacimento completo di impianti, bagno e cucina, i tempi medi sono di 8-12 settimane. Il rifacimento del solo bagno richiede circa 3-4 settimane. Definiamo un cronoprogramma preciso prima dell'inizio lavori." },
        { question: 'Quali permessi servono per ristrutturare a Trieste?', answer: "Per la manutenzione straordinaria (rifacimento bagno, impianti, tramezzi) serve una CILA al Comune di Trieste. Per interventi strutturali è necessaria la SCIA. Gestiamo noi tutte le pratiche edilizie, comprese quelle per edifici vincolati del centro storico." },
        { question: 'Posso usufruire del bonus ristrutturazione 50% a Trieste?', answer: "Sì, il bonus ristrutturazione al 50% è attivo e copre interventi di manutenzione straordinaria, restauro e risanamento conservativo. La detrazione si applica su una spesa massima di 96.000€ per unità immobiliare, suddivisa in 10 rate annuali. Ci occupiamo noi della pratica ENEA e dei bonifici parlanti." }
      ]}
      ctaText="Descrivi il tuo progetto a Trieste"
    />
  );
}
