// ─────────────────────────────────────────────────────────────────────────────
// services.ts – Dati servizi con generazione contenuti dinamica per provincia
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: 'fotovoltaico' | 'infissi' | 'ristrutturazioni';
  name: string;
  icon: string;
  seoTitleTemplate: string;
  seoDescriptionTemplate: string;
  seoKeywordsTemplate: string;
  heroTitleTemplate: string;
  heroSubtitleTemplate: string;
  ctaText: string;
  getBenefici: (provincia: string) => string[];
  getIntroText: (provincia: string, regione: string) => string;
  getDettaglio: (provincia: string, regione: string) => string;
  getFaqs: (provincia: string) => FAQItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// FOTOVOLTAICO
// ─────────────────────────────────────────────────────────────────────────────

const fotovoltaico: ServiceData = {
  slug: 'fotovoltaico',
  name: 'Fotovoltaico',
  icon: 'Sun',
  seoTitleTemplate:
    'Fotovoltaico a {provincia} | Installazione Pannelli Solari | Renova Solution',
  seoDescriptionTemplate:
    'Installazione impianti fotovoltaici a {provincia}: pannelli solari ad alta efficienza, sistemi di accumulo e detrazione fiscale al 50%. Sopralluogo gratuito e preventivo personalizzato.',
  seoKeywordsTemplate:
    'fotovoltaico {provincia}, pannelli solari {provincia}, impianto fotovoltaico {provincia}, energia solare {provincia}, installazione fotovoltaico {provincia}, accumulo energetico {provincia}, detrazione 50% fotovoltaico',
  heroTitleTemplate:
    'Fotovoltaico a {provincia}: risparmia fino al 70% in bolletta',
  heroSubtitleTemplate:
    'Impianti fotovoltaici chiavi in mano nella provincia di {provincia}. Sopralluogo gratuito, progettazione su misura e accesso alla detrazione fiscale del 50%.',
  ctaText: 'Richiedi preventivo fotovoltaico gratuito',

  getBenefici: (provincia: string): string[] => [
    `Risparmio fino al 70% sulla bolletta elettrica per le famiglie di ${provincia}, grazie a un impianto dimensionato sui reali consumi domestici`,
    `Detrazione fiscale del 50% sulle spese di installazione: un vantaggio concreto per chi investe nel fotovoltaico a ${provincia}`,
    `Sistemi di accumulo a batterie al litio per utilizzare l'energia solare anche nelle ore serali, massimizzando l'autoconsumo nella provincia di ${provincia}`,
    `Rientro dell'investimento in 4-6 anni grazie alle condizioni di irraggiamento favorevoli del territorio di ${provincia} e allo scambio sul posto con il GSE`,
    `Aumento del valore dell'immobile fino al 10-15%: un impianto fotovoltaico a ${provincia} migliora la classe energetica e rende la casa piu appetibile sul mercato`,
    `Monitoraggio da remoto della produzione e assistenza post-vendita dedicata per tutti i clienti di ${provincia}, con intervento entro 48 ore in caso di anomalie`,
  ],

  getIntroText: (provincia: string, regione: string): string =>
    `Installare un impianto fotovoltaico a ${provincia} rappresenta oggi una delle scelte piu intelligenti per chi desidera ridurre i costi energetici e aumentare il valore della propria abitazione. La provincia di ${provincia}, situata in ${regione}, gode di condizioni climatiche che garantiscono una produzione solare media annua superiore a 1.100 kWh per kWp installato, rendendo ogni impianto estremamente produttivo nel corso delle quattro stagioni.

Il contesto territoriale di ${provincia} favorisce particolarmente l'adozione del fotovoltaico: le caratteristiche urbanistiche locali, con un patrimonio edilizio composto prevalentemente da abitazioni unifamiliari e piccoli condomini, offrono ampie superfici di copertura ideali per l'installazione dei pannelli. A questo si aggiunge la crescente sensibilita ambientale dei residenti e la volonta di rendersi indipendenti dalle fluttuazioni del mercato energetico.

Grazie alla detrazione fiscale del 50% e alla possibilita di attivare lo scambio sul posto con il GSE, l'investimento nel fotovoltaico a ${provincia} si ripaga in pochi anni. Le normative regionali di ${regione} supportano ulteriormente la transizione energetica, semplificando le procedure autorizzative per gli impianti su edifici esistenti. Scegliere il fotovoltaico oggi significa garantirsi bollette leggere per i prossimi 25-30 anni, contribuendo al contempo alla sostenibilita del territorio.`,

  getDettaglio: (provincia: string, regione: string): string =>
    `Renova Solution opera nella provincia di ${provincia} con un approccio consolidato che parte dall'ascolto delle esigenze del cliente e si traduce in un impianto fotovoltaico progettato su misura. Il nostro processo inizia con un sopralluogo tecnico gratuito presso l'abitazione o l'azienda, durante il quale analizziamo l'orientamento della copertura, le condizioni di ombreggiamento, i consumi storici e le abitudini energetiche della famiglia.

Sulla base di questi dati, il nostro team tecnico elabora un progetto personalizzato che include la scelta dei pannelli monocristallini ad alta efficienza (rendimento superiore al 22%), dell'inverter ibrido e dell'eventuale sistema di accumulo. Ogni impianto installato a ${provincia} viene dimensionato per massimizzare l'autoconsumo e minimizzare l'energia prelevata dalla rete.

Ci occupiamo di tutte le pratiche burocratiche: dalla comunicazione al Comune alla richiesta di connessione con il distributore locale in ${regione}, fino all'attivazione dello scambio sul posto con il GSE e alla gestione della documentazione per la detrazione fiscale del 50%. L'installazione viene completata mediamente in 2-3 giorni lavorativi da tecnici certificati. Dopo il collaudo, attiviamo il sistema di monitoraggio remoto che consente al cliente di controllare la produzione in tempo reale dal proprio smartphone.`,

  getFaqs: (provincia: string): FAQItem[] => [
    {
      question: `Quanto costa un impianto fotovoltaico a ${provincia}?`,
      answer: `Un impianto fotovoltaico residenziale nella provincia di ${provincia} ha un costo indicativo tra 5.000 e 12.000 euro per potenze da 3 a 6 kWp, comprensivo di pannelli, inverter, strutture di fissaggio e installazione. Aggiungendo un sistema di accumulo da 5-10 kWh il costo sale di 3.000-6.000 euro. Grazie alla detrazione fiscale del 50%, recuperabile in 10 anni, il costo effettivo si dimezza. Offriamo sopralluogo gratuito e preventivo dettagliato senza impegno.`,
    },
    {
      question: `Il fotovoltaico conviene davvero nella provincia di ${provincia}?`,
      answer: `Assolutamente si. Le condizioni di irraggiamento nella zona di ${provincia} consentono una produzione media annua tra 1.100 e 1.300 kWh per kWp installato. Considerando i costi attuali dell'energia elettrica, un impianto da 6 kWp genera un risparmio annuo di 1.200-1.800 euro. Con la detrazione al 50%, il rientro dell'investimento avviene in 4-6 anni, a fronte di una vita utile dell'impianto di oltre 25 anni.`,
    },
    {
      question: `Quali permessi servono per installare il fotovoltaico a ${provincia}?`,
      answer: `Per impianti fotovoltaici residenziali fino a 20 kWp installati su coperture esistenti nella provincia di ${provincia}, nella maggior parte dei casi e sufficiente una comunicazione di inizio lavori al Comune. Per edifici vincolati o situati in zone soggette a tutela paesaggistica possono servire autorizzazioni aggiuntive. Il nostro ufficio tecnico verifica la situazione specifica e gestisce tutte le pratiche necessarie.`,
    },
    {
      question: `Quanto tempo serve per installare un impianto fotovoltaico a ${provincia}?`,
      answer: `L'installazione vera e propria di un impianto residenziale a ${provincia} richiede mediamente 2-3 giorni lavorativi. I tempi complessivi, dal sopralluogo alla messa in funzione, sono di circa 4-6 settimane, considerando la progettazione, l'ordine dei materiali, le pratiche comunali e la richiesta di connessione al distributore. Ci impegniamo a rispettare le tempistiche concordate con il cliente.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// INFISSI
// ─────────────────────────────────────────────────────────────────────────────

const infissi: ServiceData = {
  slug: 'infissi',
  name: 'Infissi',
  icon: 'DoorOpen',
  seoTitleTemplate:
    'Infissi a {provincia} | Sostituzione Serramenti PVC Alluminio | Renova Solution',
  seoDescriptionTemplate:
    'Vendita e installazione infissi a {provincia}: finestre in PVC, alluminio e legno-alluminio ad alta efficienza termica e acustica. Posa certificata e detrazione fiscale al 50%.',
  seoKeywordsTemplate:
    'infissi {provincia}, serramenti {provincia}, finestre PVC {provincia}, infissi alluminio {provincia}, sostituzione infissi {provincia}, isolamento termico {provincia}, detrazione 50% infissi, posa certificata {provincia}',
  heroTitleTemplate:
    'Infissi a {provincia}: comfort termico e risparmio energetico',
  heroSubtitleTemplate:
    'Sostituzione serramenti nella provincia di {provincia} con posa certificata. Infissi in PVC, alluminio e legno-alluminio con detrazione fiscale del 50%.',
  ctaText: 'Richiedi preventivo infissi gratuito',

  getBenefici: (provincia: string): string[] => [
    `Riduzione delle dispersioni termiche fino al 40% nelle abitazioni di ${provincia}, con un impatto immediato sulle bollette di riscaldamento e raffrescamento`,
    `Isolamento acustico superiore grazie a vetri stratificati e profili a camere multiple: ideale per le zone residenziali e urbane della provincia di ${provincia}`,
    `Detrazione fiscale del 50% sulle spese di acquisto e posa degli infissi, con gestione completa della pratica ENEA per i clienti di ${provincia}`,
    `Sicurezza antieffrazione con serrature multipunto e vetri antisfondamento, per proteggere le abitazioni di ${provincia} senza rinunciare all'estetica`,
    `Ampia gamma di finiture, colori e tipologie adatte a ogni stile architettonico presente nel territorio di ${provincia}, dal classico al contemporaneo`,
    `Posa in opera certificata con garanzia di tenuta all'aria, all'acqua e al vento: ogni installazione nella provincia di ${provincia} rispetta i piu rigorosi standard qualitativi`,
  ],

  getIntroText: (provincia: string, regione: string): string =>
    `Sostituire gli infissi in una casa situata nella provincia di ${provincia} non e solo una questione estetica: e un investimento che migliora concretamente il comfort quotidiano e riduce in modo significativo i consumi energetici. Il clima di ${regione}, con escursioni termiche importanti tra estate e inverno, mette a dura prova i serramenti datati, causando dispersioni di calore che incidono pesantemente sulle bollette.

Le abitazioni della provincia di ${provincia} presentano spesso infissi installati 20 o 30 anni fa, con vetro singolo o doppio vetro di prima generazione, profili in alluminio senza taglio termico e guarnizioni deteriorate. In queste condizioni, fino al 25-30% del calore prodotto dall'impianto di riscaldamento viene disperso attraverso le finestre. Sostituire i vecchi serramenti con infissi moderni a doppio o triplo vetro basso-emissivo permette di abbattere queste dispersioni e di creare un ambiente domestico piu confortevole e silenzioso.

Oggi e possibile accedere alla detrazione fiscale del 50% sulle spese sostenute per la sostituzione degli infissi, rendendo l'intervento ancora piu accessibile per le famiglie di ${provincia}. Le normative regionali di ${regione} in materia di efficienza energetica incentivano inoltre il raggiungimento di prestazioni termiche elevate, allineate agli standard europei. Investire in infissi di qualita significa valorizzare il proprio immobile e garantirsi benessere abitativo per decenni.`,

  getDettaglio: (provincia: string, regione: string): string =>
    `L'approccio di Renova Solution alla sostituzione degli infissi nella provincia di ${provincia} si distingue per la cura meticolosa di ogni fase del progetto. Tutto inizia con un sopralluogo tecnico gratuito, durante il quale i nostri consulenti rilevano le misure di ogni vano finestra, valutano lo stato delle murature e delle spallette, e analizzano le esigenze specifiche del cliente in termini di isolamento termico, acustico e sicurezza.

Proponiamo infissi in PVC a 5 o 7 camere, alluminio a taglio termico e legno-alluminio, selezionati dai migliori produttori europei e certificati CE. Ogni serramento e dotato di vetrocamera basso-emissiva con gas argon, guarnizioni a tripla battuta e ferramenta di sicurezza a piu punti di chiusura. Per i clienti di ${provincia} che necessitano di prestazioni acustiche superiori, offriamo soluzioni con vetri stratificati capaci di abbattere il rumore fino a 45 dB.

La posa in opera viene eseguita secondo protocolli certificati, con particolare attenzione alla sigillatura dei giunti, alla gestione dei ponti termici e all'installazione del controtelaio monoblocco. Ci occupiamo dello smaltimento dei vecchi infissi e della preparazione della documentazione per la detrazione fiscale del 50%, inclusa la trasmissione all'ENEA richiesta dalla normativa vigente in ${regione}. Il risultato e una casa piu calda d'inverno, fresca d'estate e silenziosa tutto l'anno.`,

  getFaqs: (provincia: string): FAQItem[] => [
    {
      question: `Quali infissi sono piu adatti al clima della provincia di ${provincia}?`,
      answer: `Per il clima della zona di ${provincia}, consigliamo infissi con valori di trasmittanza termica (Uw) inferiori a 1,3 W/m2K. I profili in PVC a 5 o 7 camere con triplo vetro basso-emissivo offrono le migliori prestazioni per gli inverni freddi, mentre l'alluminio a taglio termico e ideale per grandi vetrate e ambienti dal design contemporaneo. Durante il sopralluogo gratuito valutiamo la soluzione piu adatta alla vostra abitazione.`,
    },
    {
      question: `Quanto si risparmia in bolletta sostituendo gli infissi a ${provincia}?`,
      answer: `Sostituendo infissi datati con serramenti moderni ad alta efficienza nella provincia di ${provincia}, il risparmio medio sui costi di riscaldamento e raffrescamento si attesta tra il 20% e il 40%. Per un'abitazione di 100 mq con 8-10 finestre, questo si traduce in un risparmio annuo di 400-800 euro, variabile in base al tipo di impianto termico e alle abitudini di utilizzo.`,
    },
    {
      question: `Quanto costa sostituire gli infissi nella provincia di ${provincia}?`,
      answer: `Il costo della sostituzione degli infissi a ${provincia} dipende dal materiale scelto, dalle dimensioni e dal numero di finestre. Indicativamente, una finestra in PVC a doppio vetro parte da 350-500 euro, mentre soluzioni in legno-alluminio con triplo vetro possono raggiungere 800-1.200 euro per finestra, posa inclusa. Con la detrazione fiscale del 50% il costo effettivo si dimezza. Forniamo preventivi gratuiti e personalizzati.`,
    },
    {
      question: `Quanto tempo richiede la sostituzione degli infissi a ${provincia}?`,
      answer: `Per un'abitazione standard con 8-10 finestre nella provincia di ${provincia}, l'installazione completa richiede 2-3 giorni lavorativi. Ogni finestra viene sostituita nell'arco di poche ore: rimozione del vecchio serramento, preparazione del vano, installazione del nuovo infisso con sigillatura e regolazione. La casa resta sempre chiusa e sicura durante i lavori. I tempi complessivi, dal sopralluogo all'installazione, sono di circa 3-5 settimane.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RISTRUTTURAZIONI
// ─────────────────────────────────────────────────────────────────────────────

const ristrutturazioni: ServiceData = {
  slug: 'ristrutturazioni',
  name: 'Ristrutturazioni',
  icon: 'Hammer',
  seoTitleTemplate:
    'Ristrutturazioni a {provincia} | Chiavi in Mano | Renova Solution',
  seoDescriptionTemplate:
    'Ristrutturazioni chiavi in mano a {provincia}: bagni, cucine, facciate, impianti e riqualificazione energetica. Bonus ristrutturazione 50%. Preventivo gratuito e trasparente.',
  seoKeywordsTemplate:
    'ristrutturazioni {provincia}, ristrutturazione casa {provincia}, ristrutturazione appartamento {provincia}, ristrutturazione chiavi in mano {provincia}, bonus ristrutturazione {provincia}, rifacimento bagno {provincia}, ristrutturazione cucina {provincia}',
  heroTitleTemplate:
    'Ristrutturazioni a {provincia}: chiavi in mano, senza sorprese',
  heroSubtitleTemplate:
    'Ristrutturazioni complete nella provincia di {provincia}. Un unico interlocutore, preventivo trasparente e accesso al Bonus Ristrutturazione del 50%.',
  ctaText: 'Richiedi preventivo ristrutturazione gratuito',

  getBenefici: (provincia: string): string[] => [
    `Servizio chiavi in mano per le ristrutturazioni nella provincia di ${provincia}: un unico referente coordina progettazione, maestranze, forniture e pratiche edilizie`,
    `Preventivo dettagliato e vincolante con voci trasparenti, senza sorprese o costi aggiuntivi per i clienti di ${provincia}`,
    `Gestione completa delle pratiche edilizie e urbanistiche (CILA, SCIA, permesso di costruire) presso i Comuni della provincia di ${provincia}`,
    `Bonus Ristrutturazione con detrazione fiscale del 50% fino a 96.000 euro di spesa: ci occupiamo noi della documentazione e della comunicazione ENEA per i residenti di ${provincia}`,
    `Integrazione di interventi di efficientamento energetico (cappotto termico, infissi, fotovoltaico) nella ristrutturazione, per massimizzare il risparmio nelle abitazioni di ${provincia}`,
    `Rispetto rigoroso dei tempi di consegna con cronoprogramma condiviso e aggiornamenti settimanali sull'avanzamento del cantiere nella provincia di ${provincia}`,
  ],

  getIntroText: (provincia: string, regione: string): string =>
    `Il patrimonio edilizio della provincia di ${provincia} e composto in larga parte da edifici costruiti tra gli anni '50 e gli anni '80, che oggi richiedono interventi di ammodernamento per rispondere agli standard attuali di comfort, sicurezza ed efficienza energetica. Ristrutturare la propria casa a ${provincia} non significa solo rinnovarne l'estetica, ma trasformarla in un ambiente piu funzionale, salubre e sostenibile.

Le esigenze di ristrutturazione nel territorio di ${provincia} sono molteplici: dal rifacimento completo di bagni e cucine ormai obsoleti, alla riorganizzazione degli spazi interni per adattarli a nuove esigenze familiari, fino alla riqualificazione energetica con cappotto termico, sostituzione degli impianti e installazione di sistemi rinnovabili. Ogni intervento deve essere progettato con attenzione, tenendo conto delle specificita costruttive locali e delle normative urbanistiche vigenti in ${regione}.

Oggi il Bonus Ristrutturazione consente di detrarre il 50% delle spese sostenute, fino a un massimo di 96.000 euro per unita immobiliare, rendendo gli interventi di rinnovo estremamente accessibili per le famiglie di ${provincia}. Le normative regionali di ${regione} prevedono inoltre requisiti specifici in materia di prestazioni energetiche che, se rispettati durante la ristrutturazione, permettono di accedere a ulteriori incentivi. Rinnovare oggi significa risparmiare domani e vivere meglio ogni giorno.`,

  getDettaglio: (provincia: string, regione: string): string =>
    `Renova Solution gestisce le ristrutturazioni nella provincia di ${provincia} con un metodo strutturato che elimina incertezze e garantisce risultati. Il percorso inizia con un sopralluogo tecnico gratuito, durante il quale il nostro team valuta lo stato dell'immobile, ascolta le esigenze del cliente e raccoglie tutti gli elementi necessari per elaborare un progetto completo.

Entro pochi giorni dal sopralluogo, presentiamo un preventivo dettagliato con ogni voce di spesa chiaramente indicata: demolizioni, smaltimento, impianti elettrici e idraulici, massetti, pavimentazioni, rivestimenti, tinteggiature, infissi e arredi su misura. Nessun costo nascosto, nessuna variazione in corso d'opera non concordata. Per i clienti di ${provincia} che desiderano un progetto architettonico personalizzato, il nostro team di progettazione interna sviluppa soluzioni su misura con rendering 3D.

Ci occupiamo della presentazione di tutte le pratiche edilizie richieste dai Comuni di ${regione} (CILA, SCIA o permesso di costruire) e della preparazione della documentazione per il Bonus Ristrutturazione al 50%. Il cantiere viene gestito con un cronoprogramma definito e condiviso, con un capocantiere dedicato che supervisiona ogni fase dei lavori. Al termine della ristrutturazione, effettuiamo un collaudo completo prima della consegna, rilasciando tutte le certificazioni di conformita degli impianti e le garanzie sui lavori eseguiti.`,

  getFaqs: (provincia: string): FAQItem[] => [
    {
      question: `Quanto costa ristrutturare un appartamento nella provincia di ${provincia}?`,
      answer: `Il costo di una ristrutturazione completa nella zona di ${provincia} varia indicativamente tra 600 e 1.200 euro al metro quadro, in funzione dell'entita degli interventi, della qualita dei materiali scelti e dello stato attuale dell'immobile. Per un appartamento di 80 mq, il budget si colloca quindi tra 48.000 e 96.000 euro. Offriamo sopralluoghi gratuiti con preventivo personalizzato voce per voce, senza impegno.`,
    },
    {
      question: `Quali bonus fiscali sono disponibili per chi ristruttura a ${provincia}?`,
      answer: `Per le ristrutturazioni nella provincia di ${provincia} e possibile accedere al Bonus Ristrutturazione con detrazione IRPEF del 50% su una spesa massima di 96.000 euro per unita immobiliare, recuperabile in 10 rate annuali. Per interventi di efficientamento energetico (cappotto, caldaia, infissi) si puo accedere all'Ecobonus al 50% o 65%. Il nostro ufficio tecnico gestisce tutta la documentazione, inclusa la comunicazione obbligatoria all'ENEA.`,
    },
    {
      question: `Quanto tempo serve per ristrutturare casa a ${provincia}?`,
      answer: `Una ristrutturazione completa nella provincia di ${provincia} per un appartamento di 80-100 mq richiede mediamente 60-90 giorni lavorativi, dalla demolizione alla consegna delle chiavi. Per interventi parziali come il rifacimento del bagno o della cucina, i tempi si riducono a 15-30 giorni. Prima dell'inizio dei lavori definiamo un cronoprogramma dettagliato con date precise per ogni fase, condiviso con il cliente.`,
    },
    {
      question: `Quali pratiche edilizie servono per ristrutturare a ${provincia}?`,
      answer: `Le pratiche necessarie dipendono dal tipo di intervento. Per manutenzione straordinaria leggera (rifacimento bagno, sostituzione pavimenti, nuovi impianti) nella provincia di ${provincia} e richiesta una CILA. Per interventi che modificano la struttura o i prospetti serve una SCIA o un permesso di costruire. Il nostro ufficio tecnico si occupa di individuare la pratica corretta, predisporre la documentazione e presentarla al Comune competente, sollevando il cliente da ogni incombenza burocratica.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ESPORTAZIONI
// ─────────────────────────────────────────────────────────────────────────────

export const services: ServiceData[] = [fotovoltaico, infissi, ristrutturazioni];

/** Lookup rapido per slug */
export const serviceBySlug = (
  slug: string,
): ServiceData | undefined => services.find((s) => s.slug === slug);

/** Tutti gli slug disponibili */
export const serviceSlugs = services.map((s) => s.slug) as ServiceData['slug'][];
