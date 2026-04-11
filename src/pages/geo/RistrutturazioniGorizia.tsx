import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniGorizia() {
  return (
    <GeoServicePage
      provincia="Gorizia"
      provinciaSlug="gorizia"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-GO"
      lat={45.9415}
      lng={13.6219}
      comuni={['Gorizia', 'Monfalcone', 'Grado', 'Ronchi dei Legionari', 'Cormons', 'Staranzano', 'Gradisca d\'Isonzo']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Gorizia: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazioni complete di case e appartamenti a Gorizia, Monfalcone, Grado e provincia. Preventivo chiaro, bonus 50%, cantiere coordinato da un unico referente."
      seoTitle="Ristrutturazioni Gorizia | Ristrutturazione Casa Gorizia | Renova Solution"
      seoDescription="Ristrutturazioni chiavi in mano a Gorizia, Monfalcone e Grado. Bagni, cucine, facciate, cappotto termico. Bonus 50%, preventivo gratuito. Impresa edile FVG."
      seoKeywords="ristrutturazioni gorizia, ristrutturazione casa gorizia, ristrutturazione bagno gorizia, ristrutturazione appartamento gorizia, bonus ristrutturazione gorizia, impresa ristrutturazioni gorizia"
      introText="La provincia di Gorizia racchiude realtà edilizie molto diverse: il centro storico di Gorizia con i suoi palazzi mitteleuropei, il polo cantieristico di Monfalcone con edilizia residenziale del Novecento, la perla balneare di Grado con le sue case a terrazza esposte alla salsedine adriatica, e i borghi collinari del Collio come Cormons e Gradisca d'Isonzo. Ogni contesto richiede competenze specifiche e attenzione ai materiali.

A Monfalcone e Ronchi dei Legionari la domanda di ristrutturazioni si concentra su appartamenti degli anni '50-'70 che necessitano di un rinnovamento completo: impianti elettrici e idraulici fuori norma, bagni datati, assenza di isolamento termico. A Grado le criticità includono l'esposizione agli agenti marini che accelera il degrado di facciate e serramenti. A Gorizia città il recupero degli edifici storici del centro è una priorità per valorizzare il patrimonio immobiliare locale.

Renova Solution opera su tutta la provincia di Gorizia con un servizio di ristrutturazione chiavi in mano pensato per semplificare la vita del committente. Un unico interlocutore gestisce progetto, maestranze, materiali e pratiche burocratiche — incluso il bonus ristrutturazione al 50%."
      benefici={[
        'Operativi su tutta la provincia — Gorizia, Monfalcone, Grado, Cormons, Gradisca d\'Isonzo',
        'Preventivo dettagliato e vincolante: ogni voce di spesa è chiara prima dell\'inizio lavori',
        'Bonus ristrutturazione 50%: gestiamo pratica ENEA, documentazione fiscale e bonifici parlanti',
        'Materiali resistenti alla salsedine per le ristrutturazioni costiere a Grado e Monfalcone',
        'Coordinamento completo del cantiere: muratura, impianti, finiture, tinteggiatura',
        'Garanzia decennale sui lavori e assistenza post-cantiere su tutta la provincia isontina'
      ]}
      dettaglioServizio="Il nostro approccio nella provincia di Gorizia inizia con un sopralluogo gratuito e approfondito. Il tecnico Renova analizza lo stato strutturale e impiantistico dell'immobile, valuta le condizioni di facciate e coperture, e discute con te obiettivi e budget. In 7 giorni lavorativi ricevi un preventivo analitico con ogni lavorazione specificata nel dettaglio.

La fase esecutiva segue un cronoprogramma condiviso: demolizioni e rimozioni, rifacimento degli impianti elettrico e idraulico a norma, realizzazione di massetti e contropareti, posa di pavimenti e rivestimenti, installazione sanitari e arredi bagno, tinteggiatura e pulizia di fine cantiere. Per gli immobili a Grado utilizziamo materiali specifici resistenti alla salsedine e all'umidità marina.

Per facciate e cappotto termico, proponiamo sistemi isolanti certificati che migliorano la classe energetica dell'edificio e riducono sensibilmente i costi di riscaldamento e raffrescamento. A Gorizia e nei comuni con edifici vincolati, operiamo nel rispetto delle prescrizioni della Soprintendenza e del regolamento edilizio locale.

La consegna del cantiere include tutta la documentazione: conformità impiantistica, APE aggiornato, pratica ENEA per il bonus 50% e reportage fotografico completo. Il nostro impegno non si esaurisce con la fine dei lavori: la garanzia decennale e l'assistenza dedicata ti tutelano nel tempo."
      faqs={[
        { question: 'Quanto costa ristrutturare un appartamento a Gorizia?', answer: "Nella provincia di Gorizia una ristrutturazione completa costa mediamente tra 500€ e 900€ al mq. Un bagno chiavi in mano parte da 6.000€, un appartamento di 85 mq con intervento integrale si colloca tra 42.000€ e 76.000€. Con il bonus 50% recuperi metà dell'investimento tramite detrazione fiscale in 10 anni." },
        { question: 'Ristrutturate anche a Grado e Monfalcone?', answer: "Sì, operiamo in tutta la provincia isontina: Gorizia, Monfalcone, Grado, Ronchi dei Legionari, Cormons, Staranzano, Gradisca d'Isonzo. A Grado utilizziamo materiali specifici per ambienti costieri, resistenti alla salsedine e all'umidità marina." },
        { question: 'Quali permessi servono per ristrutturare a Gorizia?', answer: "Per manutenzione straordinaria — rifacimento bagno, impianti, tramezzi — serve una CILA. Per interventi strutturali o modifiche esterne è necessaria la SCIA. Per edifici vincolati nel centro storico di Gorizia o Gradisca serve anche il nulla osta della Soprintendenza. Gestiamo noi tutte le pratiche." },
        { question: 'Come funziona il cappotto termico con il bonus 50% a Gorizia?', answer: "Il cappotto termico esterno rientra tra gli interventi agevolati con detrazione del 50% fino a 96.000€ per unità immobiliare. L'intervento riduce i consumi energetici fino al 40% e migliora la classe energetica dell'edificio. Ci occupiamo della progettazione, dell'esecuzione a regola d'arte e della pratica ENEA per la detrazione." }
      ]}
      ctaText="Descrivi il tuo progetto a Gorizia"
    />
  );
}
