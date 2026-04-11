import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniVenezia() {
  return (
    <GeoServicePage
      provincia="Venezia"
      provinciaSlug="venezia"
      regione="Veneto"
      regioneShort="Veneto"
      codiceISO="IT-VE"
      lat={45.4408}
      lng={12.3155}
      comuni={['Venezia', 'Chioggia', 'Mestre', 'San Dona di Piave', 'Mira', 'Spinea', 'Jesolo', 'Mirano', 'Portogruaro', 'Noale']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Venezia: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazione completa di appartamenti, bagni, cucine e facciate a Venezia e provincia. Cappotto termico, bonus 50% e gestione burocratica inclusa."
      seoTitle="Ristrutturazioni Venezia | Ristrutturazione Casa Venezia | Renova Solution"
      seoDescription="Ristrutturazioni a Venezia e provincia: bagno, cucina, appartamento completo, facciate e cappotto termico. Bonus 50%, preventivo gratuito. Renova Solution."
      seoKeywords="ristrutturazioni venezia, ristrutturazione casa venezia, ristrutturazione bagno venezia, impresa ristrutturazioni venezia, bonus ristrutturazione venezia, ristrutturazione appartamento venezia"
      introText="Il patrimonio edilizio veneziano è unico al mondo: palazzi storici affacciati sui canali, edilizia lagunare soggetta all'acqua alta e all'umidità di risalita, e una terraferma — da Mestre a Spinea, da Mira a Noale — dove predominano condomini degli anni '60 e '70 con evidenti carenze di isolamento termico e impiantistica obsoleta. Ristrutturare in provincia di Venezia significa affrontare sfide tecniche specifiche che richiedono competenza ed esperienza locale.

A Venezia centro storico ogni intervento deve tenere conto dei vincoli della Soprintendenza, dell'accessibilità limitata via acqua e della necessità di proteggere le strutture dall'umidità salmastra. In terraferma le priorità cambiano: cappotto termico per ridurre i consumi energetici, rifacimento completo di bagni e cucine datati, adeguamento degli impianti elettrici e idraulici alle normative vigenti e miglioramento sismico degli edifici meno recenti.

Renova Solution opera su tutta la provincia di Venezia — da Chioggia a Portogruaro, da Jesolo a San Donà di Piave — con un servizio chiavi in mano che comprende progettazione, pratiche edilizie, esecuzione dei lavori e gestione del bonus ristrutturazione del 50%. Un unico interlocutore, tempi certi e preventivo dettagliato prima di iniziare."
      benefici={[
        'Ristrutturazione chiavi in mano con progetto, pratiche edilizie e direzione lavori inclusi nel servizio',
        'Bonus ristrutturazione 50% — gestiamo noi tutta la documentazione fiscale e le comunicazioni ENEA',
        'Esperienza specifica nell\'edilizia lagunare veneziana: trattamenti anti-umidità e materiali resistenti alla salsedine',
        'Cappotto termico certificato per ridurre i consumi energetici fino al 40% negli edifici di terraferma',
        'Rifacimento completo di bagni e cucine con finiture di design, tempi certi e cantiere pulito',
        'Garanzia 10 anni su tutti i lavori strutturali e 5 anni sulle finiture, con assistenza post-intervento'
      ]}
      dettaglioServizio="Ogni ristrutturazione a Venezia inizia con un sopralluogo tecnico gratuito: analizziamo lo stato dell'immobile, rileviamo le criticità strutturali e impiantistiche e proponiamo un progetto completo con rendering 3D per visualizzare il risultato finale. Il preventivo è dettagliato voce per voce, senza costi nascosti e con tempi di consegna garantiti per contratto.

Per gli appartamenti in centro storico a Venezia lavoriamo con materiali e tecniche compatibili con l'edilizia lagunare: intonaci deumidificanti, impermeabilizzazioni contro l'acqua alta, pavimentazioni resistenti all'umidità di risalita. Ci coordiniamo con la Soprintendenza quando necessario e organizziamo la logistica dei materiali via acqua per ridurre disagi e tempi.

In terraferma — Mestre, Marghera, Spinea, Mira e tutti i comuni della provincia — realizziamo ristrutturazioni complete che includono cappotto termico EPS o lana di roccia, sostituzione degli impianti di riscaldamento e raffrescamento, rifacimento integrale di bagni e cucine, nuovi pavimenti e rivestimenti, impianto elettrico a norma CEI e predisposizione per domotica e fotovoltaico.

Gestiamo interamente la pratica per il bonus ristrutturazione del 50%, dalla CILA alla comunicazione ENEA, fino alla corretta compilazione dei bonifici parlanti. Il cantiere viene gestito con cronoprogramma condiviso e aggiornamenti settimanali, garantendo pulizia quotidiana e rispetto dei tempi concordati."
      faqs={[
        { question: 'Quanto costa ristrutturare un appartamento a Venezia?', answer: "Il costo medio per una ristrutturazione completa in provincia di Venezia varia tra 600 e 1.000 €/mq a seconda della complessità. Per un appartamento di 80 mq in terraferma il budget parte da circa 50.000€, mentre a Venezia centro storico i costi possono essere superiori del 20-30% per le specificità logistiche e tecniche. Con il bonus 50% in 10 anni il costo effettivo si dimezza." },
        { question: 'Quanto tempo serve per ristrutturare casa a Venezia?', answer: "Per una ristrutturazione completa di un appartamento di 80-100 mq i tempi medi sono di 8-12 settimane in terraferma e 10-16 settimane a Venezia centro storico. Il cronoprogramma dettagliato viene condiviso prima dell'inizio dei lavori e aggiornato settimanalmente." },
        { question: 'Come funziona il bonus ristrutturazione del 50% a Venezia?', answer: "Il bonus permette di detrarre il 50% delle spese sostenute per la ristrutturazione, fino a un massimo di 96.000€, in 10 rate annuali di pari importo. Renova Solution gestisce tutta la documentazione: apertura CILA, comunicazione ENEA per interventi di efficientamento, e vi guida nella corretta esecuzione dei bonifici parlanti." },
        { question: 'Ristrutturate anche bagni e cucine singolarmente a Venezia?', answer: "Sì, realizziamo anche interventi parziali come il rifacimento completo del bagno (da 6.000€) o della cucina (da 8.000€) a Venezia e in tutta la provincia. Ogni intervento include demolizione, nuovi impianti, impermeabilizzazione, piastrellatura e installazione sanitari o mobili con finiture a scelta del cliente." }
      ]}
      ctaText="Descrivi il tuo progetto a Venezia"
    />
  );
}
