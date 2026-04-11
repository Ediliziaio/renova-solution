import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniVerona() {
  return (
    <GeoServicePage
      provincia="Verona"
      provinciaSlug="verona"
      regione="Veneto"
      regioneShort="Veneto"
      codiceISO="IT-VR"
      lat={45.4384}
      lng={10.9916}
      comuni={['Verona', 'Villafranca di Verona', 'Legnago', 'San Giovanni Lupatoto', 'Bussolengo', 'San Bonifacio', 'Negrar', 'Pescantina', 'Sona', 'Bovolone']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Verona: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazione di ville, appartamenti, bagni e facciate a Verona e provincia. Cappotto termico, efficientamento energetico e bonus 50% incluso."
      seoTitle="Ristrutturazioni Verona | Ristrutturazione Casa Verona | Renova Solution"
      seoDescription="Ristrutturazioni a Verona e provincia: ville, appartamenti, bagni, cucine e facciate. Cappotto termico e bonus 50%. Preventivo gratuito Renova Solution."
      seoKeywords="ristrutturazioni verona, ristrutturazione casa verona, ristrutturazione bagno verona, impresa ristrutturazioni verona, bonus ristrutturazione verona, ristrutturazione appartamento verona"
      introText="Verona e la sua provincia offrono un patrimonio edilizio ricco e diversificato: ville storiche e corti rurali nella Valpolicella, appartamenti in condomini degli anni '60-'80 nella cintura urbana di San Giovanni Lupatoto, Bussolengo e Villafranca, e un centro storico patrimonio UNESCO dove ogni intervento richiede il massimo rispetto dei vincoli architettonici. Ristrutturare a Verona significa valorizzare immobili di grande pregio adattandoli alle esigenze di comfort ed efficienza energetica contemporanee.

Il clima veronese — inverni freddi e nebbiosi, estati calde e afose — rende prioritario l'isolamento termico degli edifici. Molte abitazioni nella provincia scaligera disperdono fino al 40% del calore attraverso pareti non coibentate e serramenti obsoleti. Un intervento di ristrutturazione mirato, con cappotto termico e nuovi impianti, trasforma radicalmente il comfort domestico e abbatte i costi energetici, aumentando al contempo il valore dell'immobile.

Renova Solution è il partner ideale per ristrutturare a Verona e in tutta la provincia — da Legnago a Negrar, da Pescantina a San Bonifacio. Offriamo un servizio completo chiavi in mano che include progettazione, gestione delle pratiche edilizie, esecuzione dei lavori e assistenza per il bonus ristrutturazione del 50%, con un unico referente dedicato e tempi garantiti."
      benefici={[
        'Progettazione su misura con rendering 3D per visualizzare il risultato prima di iniziare i lavori',
        'Bonus ristrutturazione 50% con gestione completa delle pratiche ENEA, CILA/SCIA e documentazione fiscale',
        'Cappotto termico ad alte prestazioni per ville e condomini: risparmio energetico fino al 45% certificato',
        'Ristrutturazione di ville storiche e corti della Valpolicella nel rispetto del patrimonio architettonico locale',
        'Rifacimento completo bagni e cucine con materiali premium, design personalizzato e consegna in tempi certi',
        'Garanzia decennale sulle strutture e quinquennale sulle finiture, con assistenza post-lavori dedicata'
      ]}
      dettaglioServizio="Ogni ristrutturazione a Verona inizia con un sopralluogo tecnico gratuito: valutiamo lo stato dell'edificio, gli impianti esistenti e le potenzialità di miglioramento energetico. Proponiamo un progetto completo con preventivo dettagliato per singola lavorazione, cronoprogramma vincolante e rendering 3D per le ristrutturazioni più importanti. Nessun costo nascosto, nessuna sorpresa in corso d'opera.

Per le ville della Valpolicella e le corti rurali del veronese, realizziamo restauri conservativi che valorizzano gli elementi originali — pietra locale, travi a vista, pavimenti in cotto — integrandoli con tecnologie moderne: riscaldamento a pavimento, ventilazione meccanica controllata, domotica. Per gli appartamenti della cintura urbana, proponiamo ristrutturazioni complete con nuovi layout funzionali, cappotto termico e impianti di ultima generazione.

Il rifacimento di bagni e cucine è uno dei nostri interventi più richiesti a Verona: dalla demolizione all'installazione completa, inclusi nuovi impianti idraulici, impermeabilizzazione certificata, piastrellature di design e sanitari sospesi. Ogni bagno viene progettato su misura per ottimizzare gli spazi, con finiture selezionate dal cliente tra le migliori marche italiane.

Gestiamo integralmente la burocrazia: apertura pratica edilizia presso il Comune di Verona o il comune di competenza, comunicazione preventiva all'ASL, pratica ENEA per gli interventi di efficientamento, e guida passo passo per i bonifici parlanti necessari alla detrazione del 50% in 10 rate annuali."
      faqs={[
        { question: 'Quanto costa ristrutturare casa a Verona?', answer: "Il costo di una ristrutturazione completa a Verona varia tra 600 e 1.100 €/mq. Per un appartamento di 90 mq il budget indicativo è di 55.000-80.000€ tutto incluso. Per le ville il costo dipende dalla superficie e dallo stato di partenza. Con il bonus 50% la spesa netta si riduce significativamente nell'arco di 10 anni." },
        { question: 'Si può ristrutturare nel centro storico di Verona patrimonio UNESCO?', answer: "Sì, ma servono autorizzazioni specifiche dalla Soprintendenza. Renova Solution ha esperienza negli interventi in centro storico a Verona: utilizziamo materiali e tecniche compatibili con i vincoli architettonici e ci occupiamo di tutta la documentazione necessaria per ottenere i permessi." },
        { question: 'Il cappotto termico è consigliato per le case a Verona?', answer: "Il clima veronese con inverni freddi e nebbiosi rende il cappotto termico uno degli investimenti migliori: riduce le dispersioni fino al 45% e migliora il comfort anche d'estate. Per i condomini di Villafranca, San Giovanni Lupatoto e Bussolengo è l'intervento con il miglior rapporto costi-benefici." },
        { question: 'Come funziona il bonus ristrutturazione del 50% a Verona?', answer: "Il bonus consente di detrarre il 50% della spesa sostenuta, fino a 96.000€ per unità immobiliare, in 10 rate annuali. Si applica a ristrutturazioni, rifacimento bagni, cucine, impianti e cappotto termico. Renova Solution gestisce tutta la documentazione: CILA, ENEA e guida ai bonifici parlanti." }
      ]}
      ctaText="Descrivi il tuo progetto a Verona"
    />
  );
}
