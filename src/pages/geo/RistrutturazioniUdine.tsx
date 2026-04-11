import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniUdine() {
  return (
    <GeoServicePage
      provincia="Udine"
      provinciaSlug="udine"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-UD"
      lat={46.0711}
      lng={13.2346}
      comuni={['Udine', 'Codroipo', 'Cervignano del Friuli', 'Tolmezzo', 'Gemona del Friuli', 'Latisana', 'Cividale del Friuli', 'Tavagnacco', 'San Daniele del Friuli', 'Palmanova']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Udine: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazioni complete di case, appartamenti e facciate a Udine e in tutta la provincia. Coordinamento totale dei lavori, bonus 50%, preventivo trasparente."
      seoTitle="Ristrutturazioni Udine | Ristrutturazione Casa Udine | Renova Solution"
      seoDescription="Ristrutturazioni chiavi in mano a Udine e provincia. Appartamenti, bagni, cucine, cappotto termico. Bonus 50%, preventivo gratuito. Impresa edile in tutto il FVG."
      seoKeywords="ristrutturazioni udine, ristrutturazione casa udine, ristrutturazione bagno udine, ristrutturazione appartamento udine, bonus ristrutturazione udine, impresa ristrutturazioni udine"
      introText="La provincia di Udine presenta un tessuto edilizio estremamente variegato: dal centro storico cittadino con i suoi palazzi nobiliari e le case a corte friulane, fino alle abitazioni montane della Carnia e del Tarvisiano, passando per le villette della Bassa Friulana. Questa diversità richiede competenze specifiche per ogni tipologia di intervento, dalla ristrutturazione antisismica post-1976 alla riqualificazione energetica degli edifici anni '60-'80.

A Codroipo, Cervignano del Friuli, Latisana e Palmanova la domanda si concentra su ristrutturazioni di appartamenti e villette bifamiliari: rifacimento bagni, ammodernamento cucine, sostituzione impianti e cappotto termico per abbattere le bollette del gas nei lunghi inverni friulani. Nella zona collinare — Cividale del Friuli, San Daniele del Friuli — molti interventi riguardano il recupero di edifici rurali e case storiche in pietra.

Renova Solution copre l'intera provincia di Udine con un servizio di ristrutturazione chiavi in mano. Un unico capocantiere coordina tutti gli artigiani, rispettando il cronoprogramma e il budget concordato. Gestiamo anche le pratiche per il bonus ristrutturazione 50%, così puoi concentrarti solo sul risultato finale."
      benefici={[
        'Copertura di tutta la provincia di Udine — dalla città alla Carnia, dalla Bassa al Collinare',
        'Preventivo analitico voce per voce, con prezzo bloccato e nessun costo nascosto',
        'Bonus ristrutturazione 50%: ci occupiamo di pratica ENEA, bonifici parlanti e documentazione',
        'Coordinamento completo di muratori, elettricisti, idraulici, piastrellisti e imbianchini',
        'Soluzioni antisismiche e di consolidamento strutturale per edifici della zona sismica del Friuli',
        'Assistenza post-cantiere con garanzia decennale su tutti gli interventi eseguiti'
      ]}
      dettaglioServizio="Il percorso inizia con un sopralluogo gratuito nella tua abitazione a Udine o in qualsiasi comune della provincia. Il nostro tecnico valuta lo stato dell'immobile, rileva le misure, fotografa gli ambienti e discute con te le priorità di intervento. Entro 7 giorni lavorativi ricevi un preventivo dettagliato con voci separate per ogni lavorazione.

Approvato il preventivo, il capocantiere pianifica la sequenza operativa: demolizioni controllate, tracce per nuovi impianti elettrici e idraulici, massetti autolivellanti, intonaci, posa di pavimenti e rivestimenti, montaggio sanitari, tinteggiatura e pulizia finale. Ogni fase ha una durata stimata e un responsabile dedicato.

Per gli interventi di efficientamento energetico — cappotto termico, isolamento sottotetto, sostituzione serramenti — utilizziamo materiali certificati e sistemi a norma, assicurando il raggiungimento dei requisiti minimi per accedere alle detrazioni fiscali. Nella zona sismica del Friuli proponiamo anche interventi di miglioramento strutturale con analisi ingegneristica dedicata.

A fine lavori consegniamo la documentazione completa: conformità impiantistica, APE aggiornato, pratica ENEA e reportage fotografico del cantiere. Un servizio completo, trasparente e garantito."
      faqs={[
        { question: 'Quanto costa ristrutturare casa a Udine?', answer: "Una ristrutturazione completa a Udine ha un costo medio tra 550€ e 950€ al mq, in base al tipo di intervento e ai materiali scelti. Un bagno completo parte da 6.500€, mentre un appartamento di 90 mq con rifacimento integrale si colloca tra 50.000€ e 85.000€. Il bonus 50% dimezza il costo effettivo nel tempo." },
        { question: 'Ristrutturate anche in Carnia e nella Bassa Friulana?', answer: "Sì, operiamo in tutta la provincia di Udine: da Tolmezzo e Gemona del Friuli fino a Latisana, Cervignano del Friuli e Palmanova. Il nostro team si sposta su tutto il territorio provinciale senza costi aggiuntivi di trasferta." },
        { question: 'Servono permessi per ristrutturare un appartamento a Udine?', answer: "Per la manutenzione straordinaria (bagno, impianti, tramezzi interni) è necessaria una CILA. Per interventi strutturali o modifiche prospettiche serve la SCIA. Ci occupiamo noi della presentazione delle pratiche al Comune competente e degli eventuali nulla osta." },
        { question: 'Come funziona il bonus ristrutturazione 50% a Udine?', answer: "Il bonus consente di detrarre il 50% delle spese di ristrutturazione fino a 96.000€ per unità immobiliare, ripartito in 10 rate annuali. È necessario effettuare i pagamenti con bonifico parlante e, per alcuni interventi, trasmettere la pratica ENEA entro 90 giorni. Gestiamo noi ogni adempimento." }
      ]}
      ctaText="Descrivi il tuo progetto a Udine"
    />
  );
}
