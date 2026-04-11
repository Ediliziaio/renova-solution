import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniPadova() {
  return (
    <GeoServicePage
      provincia="Padova"
      provinciaSlug="padova"
      regione="Veneto"
      regioneShort="Veneto"
      codiceISO="IT-PD"
      lat={45.4064}
      lng={11.8768}
      comuni={['Padova', 'Abano Terme', 'Albignasego', 'Cittadella', 'Selvazzano Dentro', 'Vigonza', 'Camposampiero', 'Este', 'Rubano', 'Monselice']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Padova: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazione completa di appartamenti, bagni, cucine e facciate a Padova e provincia. Cappotto termico, bonus 50% e gestione completa delle pratiche."
      seoTitle="Ristrutturazioni Padova | Ristrutturazione Casa Padova | Renova Solution"
      seoDescription="Ristrutturazioni a Padova e provincia: appartamento, bagno, cucina, facciate e cappotto termico. Bonus ristrutturazione 50%. Preventivo gratuito Renova Solution."
      seoKeywords="ristrutturazioni padova, ristrutturazione casa padova, ristrutturazione bagno padova, impresa ristrutturazioni padova, bonus ristrutturazione padova, ristrutturazione appartamento padova"
      introText="La provincia di Padova presenta un tessuto edilizio variegato: il centro storico con edifici di pregio vincolati dalla Soprintendenza, le periferie e i comuni della prima cintura — Albignasego, Selvazzano, Rubano, Vigonza — caratterizzati da condomini e villette degli anni '60 e '70 con scarso isolamento termico, e i centri minori come Cittadella, Este e Monselice dove convivono edilizia storica e residenziale più recente. Ogni contesto richiede un approccio diverso alla ristrutturazione.

Negli edifici delle periferie padovane il problema principale è l'inefficienza energetica: murature a cassetta senza coibentazione, infissi datati, impianti di riscaldamento sovradimensionati e obsoleti. Un intervento di ristrutturazione con cappotto termico, nuovi serramenti e caldaia a condensazione può ridurre i consumi fino al 50%, migliorando contemporaneamente il comfort abitativo e il valore dell'immobile sul mercato.

Renova Solution opera su tutta la provincia di Padova con un modello chiavi in mano: dal sopralluogo tecnico gratuito alla consegna del cantiere, passando per progettazione, pratiche edilizie CILA/SCIA, esecuzione dei lavori e gestione completa del bonus ristrutturazione del 50%. Un referente dedicato vi segue in ogni fase, con cronoprogramma condiviso e aggiornamenti puntuali."
      benefici={[
        'Sopralluogo tecnico gratuito con progetto dettagliato, rendering 3D e preventivo trasparente voce per voce',
        'Bonus ristrutturazione 50% gestito integralmente: pratiche CILA, comunicazione ENEA e bonifici guidati',
        'Cappotto termico EPS o lana minerale per abbattere le dispersioni degli edifici anni 60-70 fino al 45%',
        'Ristrutturazione bagno completa in 10-15 giorni lavorativi con finiture personalizzabili e sanitari di marca',
        'Adeguamento impianti elettrici e idraulici alle normative vigenti con predisposizione domotica e fotovoltaico',
        'Garanzia decennale sulle opere strutturali e quinquennale sulle finiture, con servizio post-vendita dedicato'
      ]}
      dettaglioServizio="Il processo di ristrutturazione a Padova parte da un sopralluogo tecnico approfondito: verifichiamo lo stato delle murature, degli impianti e delle finiture, analizziamo la classe energetica attuale e proponiamo gli interventi prioritari per massimizzare il risultato con il budget disponibile. Il preventivo è dettagliato per singola lavorazione, senza voci generiche o costi a sorpresa.

Per le ristrutturazioni complete di appartamenti a Padova interveniamo su tutti gli aspetti: demolizione e rifacimento di tramezze per nuovi layout, massetto e pavimenti, impianto elettrico e idraulico a norma, rifacimento completo di bagni e cucine, tinteggiatura e finiture. Per le villette della cintura padovana aggiungiamo cappotto termico esterno, coibentazione del tetto e sostituzione della caldaia con sistemi a condensazione o pompa di calore.

Nei centri storici di Padova, Cittadella, Este e Monselice operiamo nel rispetto dei vincoli architettonici, utilizzando materiali compatibili con l'edilizia storica: intonaci a calce, pavimenti in cotto e pietra, infissi in legno-alluminio che mantengono l'estetica originale con prestazioni moderne. Ci occupiamo delle autorizzazioni della Soprintendenza e del coordinamento con gli uffici tecnici comunali.

Ogni cantiere è gestito con un cronoprogramma condiviso e un referente dedicato che aggiorna il cliente settimanalmente. Gestiamo interamente la pratica per il bonus 50%, dalla comunicazione preventiva all'ASL alla dichiarazione ENEA, fino alla corretta documentazione fiscale per la detrazione in 10 anni."
      faqs={[
        { question: 'Quanto costa una ristrutturazione completa a Padova?', answer: "Per un appartamento di 80-100 mq in provincia di Padova, il costo di una ristrutturazione completa varia tra 550 e 900 €/mq, a seconda dell'entità degli interventi. Un bagno completo parte da 5.500€, una cucina da 7.500€. Con il bonus ristrutturazione del 50% la spesa effettiva si dimezza nell'arco di 10 anni." },
        { question: 'Quali permessi servono per ristrutturare a Padova?', answer: "Per una ristrutturazione interna senza modifiche strutturali è sufficiente la CILA (Comunicazione Inizio Lavori Asseverata). Per interventi strutturali o modifiche ai prospetti serve la SCIA. Renova Solution gestisce tutte le pratiche edilizie necessarie, incluso il coordinamento con l'ufficio tecnico del Comune di Padova." },
        { question: 'Conviene fare il cappotto termico a Padova?', answer: "Assolutamente sì. Gli inverni padovani con nebbia e umidità rendono il cappotto termico un investimento strategico: riduce le dispersioni fino al 45%, elimina muffe e condense, e migliora il comfort estivo. Con il bonus 50% il rientro dell'investimento è di 5-7 anni grazie al risparmio in bolletta." },
        { question: 'Quanto tempo dura una ristrutturazione completa a Padova?', answer: "I tempi variano in base alla superficie e alla complessità: un bagno richiede 10-15 giorni, una cucina 15-20 giorni, un appartamento completo di 80-100 mq circa 8-12 settimane. Forniamo un cronoprogramma dettagliato prima dell'inizio lavori e ci impegniamo contrattualmente al rispetto delle tempistiche." }
      ]}
      ctaText="Descrivi il tuo progetto a Padova"
    />
  );
}
