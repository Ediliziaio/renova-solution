import GeoServicePage from './GeoServicePage';

export default function FotovoltaicoGorizia() {
  return (
    <GeoServicePage
      provincia="Gorizia"
      provinciaSlug="gorizia"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-GO"
      lat={45.9415}
      lng={13.6219}
      comuni={['Gorizia', 'Monfalcone', 'Grado', 'Ronchi dei Legionari', 'Cormons', 'Staranzano', "Gradisca d'Isonzo"]}
      servizio="fotovoltaico"
      heroTitle="Fotovoltaico a Gorizia: risparmia fino al 70% in bolletta"
      heroSubtitle="Impianti fotovoltaici con accumulo a Gorizia e provincia. Sopralluogo gratuito, detrazioni fiscali gestite e installazione professionale."
      seoTitle="Fotovoltaico Gorizia | Impianti Fotovoltaici Gorizia | Renova Solution"
      seoDescription="Impianti fotovoltaici a Gorizia e provincia: Monfalcone, Grado, Cormons, Gradisca. Pannelli solari con accumulo e detrazione 50%. Sopralluogo gratuito."
      seoKeywords="fotovoltaico gorizia, pannelli solari gorizia, impianto fotovoltaico gorizia, fotovoltaico monfalcone, energia solare gorizia, fotovoltaico grado, installazione fotovoltaico gorizia provincia, fotovoltaico cormons"
      introText="La provincia di Gorizia, al confine sloveno e affacciata sull'alto Adriatico, gode di un microclima particolarmente favorevole alla produzione di energia solare. La posizione strategica tra il Carso e la pianura isontina garantisce un'irradiazione solare superiore alla media regionale, rendendo il fotovoltaico una scelta particolarmente vantaggiosa per famiglie e imprese del territorio.

Da Gorizia a Monfalcone, da Grado a Cormons, passando per Ronchi dei Legionari, Staranzano e Gradisca d'Isonzo, sempre piu cittadini investono nel fotovoltaico. Il confine sloveno e la vicinanza all'area transfrontaliera rendono questa provincia un crocevia di innovazione, dove la sostenibilita energetica e vista come un investimento concreto e non solo un ideale.

Renova Solution e il punto di riferimento per il fotovoltaico nella provincia di Gorizia. Progettiamo impianti su misura per ogni esigenza, dal piccolo residenziale alle coperture commerciali, gestendo in autonomia tutte le pratiche burocratiche e fiscali."
      benefici={[
        'Sopralluogo gratuito con analisi energetica dettagliata per abitazioni e imprese nella provincia di Gorizia',
        "Detrazione fiscale del 50% con pratica ENEA gestita interamente da Renova Solution per i clienti di Gorizia",
        'Pannelli solari di ultima generazione ottimizzati per il microclima favorevole della provincia di Gorizia',
        "Accumulo domestico per sfruttare l'energia solare anche di sera, ideale per le abitazioni di Gorizia e Monfalcone",
        'Installazione in 2-3 giorni lavorativi con squadre operative su tutta la provincia di Gorizia',
        "Assistenza tecnica e manutenzione programmata con copertura completa da Gorizia a Grado"
      ]}
      dettaglioServizio="Nella provincia di Gorizia, Renova Solution opera con un metodo collaudato che parte dall'ascolto del cliente. Durante il sopralluogo gratuito analizziamo la bolletta energetica, verifichiamo l'esposizione e la superficie del tetto, e identifichiamo la configurazione ottimale dell'impianto fotovoltaico per le tue esigenze reali.

Il microclima della provincia di Gorizia, influenzato dalla vicinanza al confine sloveno e dall'area costiera di Grado e Monfalcone, offre condizioni solari eccellenti. Progettiamo impianti che sfruttano al massimo questa irradiazione, utilizzando pannelli monocristallini ad alta efficienza e inverter certificati.

La burocrazia non e un problema: ci occupiamo della comunicazione al Comune competente — che sia Gorizia, Monfalcone, Cormons o Gradisca d'Isonzo — della pratica GSE per lo Scambio sul Posto e della dichiarazione ENEA per la detrazione del 50% in 10 anni.

Dopo l'installazione, che richiede in media 2-3 giorni per un impianto residenziale, eseguiamo collaudo completo e connessione alla rete. Il sistema di monitoraggio ti permette di seguire in tempo reale la produzione del tuo impianto, ottimizzando i consumi e massimizzando il risparmio nella tua casa a Gorizia."
      faqs={[
        { question: 'Quanto costa un impianto fotovoltaico a Gorizia?', answer: "Un impianto residenziale da 3 kWp nella provincia di Gorizia costa tra 5.500 e 7.500 euro chiavi in mano, prima delle detrazioni fiscali. Grazie alla detrazione del 50% in 10 anni il costo effettivo si dimezza, con un ritorno dell'investimento medio di 5-6 anni." },
        { question: 'Quanta energia solare si produce nella provincia di Gorizia?', answer: "La provincia di Gorizia beneficia di un'irradiazione solare media di circa 1.350 kWh per metro quadrato all'anno, tra le migliori del Friuli Venezia Giulia. Un impianto da 3 kWp produce mediamente 3.500-3.900 kWh annui, coprendo il fabbisogno di una famiglia di 3-4 persone." },
        { question: 'Renova Solution installa fotovoltaico anche a Monfalcone e Grado?', answer: "Si, operiamo su tutta la provincia di Gorizia: Gorizia citta, Monfalcone, Grado, Ronchi dei Legionari, Cormons, Staranzano e Gradisca d'Isonzo. Il sopralluogo e sempre gratuito e senza impegno in tutti i comuni della provincia." },
        { question: 'Quali permessi servono per il fotovoltaico a Gorizia?', answer: "Per impianti residenziali fino a 20 kWp installati sul tetto e sufficiente una comunicazione al Comune tramite CILA o comunicazione di inizio lavori. Renova Solution prepara e presenta tutta la documentazione necessaria presso il Comune di Gorizia o il comune di competenza, senza costi aggiuntivi." }
      ]}
      ctaText="Richiedi sopralluogo gratuito a Gorizia"
    />
  );
}
