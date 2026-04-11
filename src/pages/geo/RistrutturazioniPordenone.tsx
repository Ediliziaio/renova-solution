import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniPordenone() {
  return (
    <GeoServicePage
      provincia="Pordenone"
      provinciaSlug="pordenone"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-PN"
      lat={45.9564}
      lng={12.6615}
      comuni={['Pordenone', 'Sacile', 'Cordenons', 'Azzano Decimo', 'San Vito al Tagliamento', 'Maniago', 'Brugnera', 'Spilimbergo', 'Porcia', 'Fiume Veneto']}
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Pordenone: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazioni di appartamenti, villette e facciate a Pordenone e provincia. Un solo interlocutore, bonus 50% incluso, tempi e costi certi."
      seoTitle="Ristrutturazioni Pordenone | Ristrutturazione Casa Pordenone | Renova Solution"
      seoDescription="Ristrutturazioni chiavi in mano a Pordenone e provincia. Bagni, cucine, facciate, cappotto termico. Bonus 50%, preventivo gratuito. Renova Solution FVG."
      seoKeywords="ristrutturazioni pordenone, ristrutturazione casa pordenone, ristrutturazione bagno pordenone, ristrutturazione appartamento pordenone, bonus ristrutturazione pordenone, impresa ristrutturazioni pordenone"
      introText="La provincia di Pordenone si distingue per un tessuto residenziale fatto prevalentemente di villette mono e bifamiliari, case a schiera e piccoli condomini edificati tra gli anni '60 e '90. Molti di questi immobili presentano oggi impianti datati, bagni da rinnovare, cucine non più funzionali e un isolamento termico insufficiente che si traduce in bollette del gas particolarmente elevate durante i rigidi inverni pordenonesi.

Da Sacile a Spilimbergo, da Azzano Decimo a San Vito al Tagliamento, le famiglie del pordenonese investono sempre più nella ristrutturazione della propria abitazione per migliorare il comfort quotidiano e il valore dell'immobile. Gli interventi più richiesti includono il rifacimento completo del bagno, la ristrutturazione della cucina, la posa di nuovi pavimenti, il cappotto termico esterno e il rifacimento delle facciate condominiali.

Renova Solution è l'impresa di ristrutturazioni di riferimento nella provincia di Pordenone. Offriamo un servizio completo chiavi in mano: dal sopralluogo gratuito al preventivo dettagliato, dalla gestione del cantiere alle pratiche per il bonus ristrutturazione 50%. Un unico referente ti segue dall'inizio alla consegna delle chiavi."
      benefici={[
        'Sopralluogo gratuito e preventivo dettagliato entro 7 giorni in tutta la provincia di Pordenone',
        'Bonus ristrutturazione 50%: gestiamo pratica ENEA, bonifici parlanti e tutta la documentazione fiscale',
        'Capocantiere dedicato che coordina ogni mestiere — muratori, idraulici, elettricisti, piastrellisti',
        'Specializzazione in ristrutturazione bagni e cucine con finiture di qualità e design moderno',
        'Cappotto termico certificato ETICS per ridurre i costi di riscaldamento fino al 40%',
        'Cronoprogramma vincolante con penali per ritardi — rispettiamo i tempi promessi'
      ]}
      dettaglioServizio="Il nostro processo a Pordenone è collaudato e trasparente. Si parte dal sopralluogo gratuito: il tecnico Renova visita l'immobile, esegue rilievi e raccoglie le tue richieste. In una settimana ricevi un preventivo con ogni voce di spesa, dai materiali alla manodopera, senza voci generiche o costi a sorpresa.

Dopo la firma del contratto, il capocantiere redige il cronoprogramma e coordina l'avvio dei lavori. La sequenza tipo prevede: strip-out e demolizioni, nuove tracce impiantistiche, rifacimento impianto elettrico e idraulico, massetti, intonaci, posa pavimenti e rivestimenti ceramici, montaggio arredi bagno e cucina, tinteggiatura e pulizia di fine cantiere.

Per le facciate condominiali e il cappotto termico, operiamo con ponteggi a norma e sistemi isolanti certificati, garantendo il rispetto delle prescrizioni urbanistiche del Comune di Pordenone e dei comuni limitrofi. Ogni intervento di efficientamento viene progettato per soddisfare i requisiti del bonus 50%.

Alla chiusura del cantiere consegniamo: dichiarazione di conformità degli impianti, APE aggiornato, documentazione fotografica e pratica ENEA completata. Il nostro lavoro non finisce con la consegna: offriamo garanzia decennale e assistenza post-vendita dedicata."
      faqs={[
        { question: 'Quanto costa una ristrutturazione completa a Pordenone?', answer: "I costi medi a Pordenone oscillano tra 500€ e 900€ al metro quadro per una ristrutturazione integrale. Un bagno chiavi in mano parte da 6.000-7.500€, mentre un appartamento di 100 mq con rifacimento completo si colloca tra 50.000€ e 90.000€. Il bonus 50% consente di recuperare metà della spesa in 10 anni." },
        { question: 'In quali comuni della provincia di Pordenone operate?', answer: "Copriamo tutta la provincia: Pordenone, Sacile, Cordenons, Azzano Decimo, San Vito al Tagliamento, Maniago, Brugnera, Spilimbergo, Porcia, Fiume Veneto e tutti gli altri comuni del pordenonese. Nessun costo aggiuntivo di trasferta." },
        { question: 'Quanto tempo serve per ristrutturare un bagno a Pordenone?', answer: "La ristrutturazione completa di un bagno — demolizione, nuovi impianti, impermeabilizzazione, posa piastrelle, sanitari e rubinetteria — richiede mediamente 3-4 settimane lavorative. Per una ristrutturazione integrale di un appartamento i tempi sono di 8-14 settimane." },
        { question: 'Fate anche cappotto termico e facciate a Pordenone?', answer: "Sì, realizziamo cappotto termico esterno con sistema ETICS certificato e rifacimento facciate per condomini e villette. Il cappotto termico rientra nel bonus ristrutturazione 50% e permette di ridurre i consumi di riscaldamento fino al 40%, con un comfort abitativo nettamente superiore." }
      ]}
      ctaText="Descrivi il tuo progetto a Pordenone"
    />
  );
}
