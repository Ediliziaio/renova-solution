import GeoServicePage from './GeoServicePage';

export default function InfissiVicenza() {
  return (
    <GeoServicePage
      provincia="Vicenza"
      provinciaSlug="vicenza"
      regione="Veneto"
      regioneShort="Veneto"
      codiceISO="IT-VI"
      lat={45.5455}
      lng={11.5354}
      comuni={['Vicenza', 'Bassano del Grappa', 'Schio', 'Thiene', 'Arzignano', 'Valdagno', 'Montecchio Maggiore', 'Lonigo', 'Malo', 'Dueville']}
      servizio="infissi"
      heroTitle="Infissi a Vicenza: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Vicenza e provincia. Misurazione gratuita, posa certificata, detrazione fiscale 50%."
      seoTitle="Infissi Vicenza | Serramenti Vicenza Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Vicenza e provincia. Finestre in PVC, alluminio e legno-alluminio con taglio termico. Preventivo gratuito e detrazione 50%. Renova Solution."
      seoKeywords="infissi vicenza, serramenti vicenza, finestre pvc vicenza, finestre alluminio vicenza, sostituzione infissi vicenza, infissi vicenza prezzi"
      introText="La provincia di Vicenza, con i suoi inverni rigidi nella fascia pedemontana e l'umidità della pianura, richiede infissi capaci di garantire isolamento termico eccellente in ogni stagione. Dalle colline di Bassano del Grappa ai fondovalle di Schio e Valdagno, le temperature invernali scendono frequentemente sotto lo zero, rendendo la qualità dei serramenti un fattore determinante per il comfort e il risparmio energetico.

Il patrimonio edilizio vicentino è ricco e variegato: dalle ville palladiane ai capannoni industriali dell'Altovicentino, dalle abitazioni storiche di Bassano alle villette della pianura tra Lonigo e Montecchio Maggiore. In gran parte di queste costruzioni, gli infissi originali sono ormai obsoleti e rappresentano la principale causa di dispersione termica, con conseguenti costi energetici elevati e problemi di condensa.

Renova Solution è specializzata nella sostituzione infissi a Vicenza e in tutta la provincia, con soluzioni studiate per il clima rigido della pedemontana veneta. Installiamo serramenti in PVC ad alto isolamento, alluminio a taglio termico e legno-alluminio, garantendo posa certificata e gestione completa della pratica per la detrazione fiscale del 50%."
      benefici={[
        'Misurazione gratuita a domicilio in tutta la provincia di Vicenza, dalla pianura alla pedemontana',
        'Profili a 6-7 camere con taglio termico avanzato per gli inverni rigidi del vicentino',
        'Vetrocamera triplo vetro disponibile per le zone più fredde di Bassano, Schio e Thiene',
        'Detrazione fiscale del 50% — pratica ENEA e documentazione interamente a nostro carico',
        'Isolamento acustico certificato fino a 46 dB per abitazioni su strade e zone industriali',
        'Posa certificata UNI 11673 con controtelaio coibentato e eliminazione dei ponti termici'
      ]}
      dettaglioServizio="Il territorio vicentino presenta microclimi diversi che richiedono soluzioni specifiche. Per le abitazioni della fascia pedemontana e montana, da Bassano del Grappa a Schio fino a Valdagno, proponiamo infissi con triplo vetro e profili a 7 camere che garantiscono valori Uw inferiori a 0,8 W/m²K. Questa configurazione è pensata per resistere alle temperature rigide che caratterizzano gli inverni dell'alto vicentino, dove il termometro scende frequentemente a -5/-10°C.

Per la pianura vicentina, da Montecchio Maggiore a Lonigo fino a Dueville, la priorità è il contrasto all'umidità e alla condensa. I nostri serramenti in PVC con canalina warm-edge e gas argon nel vetrocamera eliminano completamente il fenomeno della condensa sui vetri, migliorando la salubrità degli ambienti e prevenendo la formazione di muffe.

La tradizione architettonica vicentina, con le ville palladiane e i centri storici di pregio, richiede spesso soluzioni estetiche particolari. La nostra gamma legno-alluminio risponde a questa esigenza: profili in legno lamellare di rovere o larice all'interno, guscio in alluminio verniciato all'esterno, per un connubio perfetto tra bellezza e prestazioni.

Per le aziende e i capannoni dell'Altovicentino, area tra le più industrializzate d'Italia, realizziamo serramentistica industriale in alluminio a taglio termico con grandi superfici vetrate, portoni sezionali coibentati e facciate continue. Ogni installazione è progettata per ottimizzare la luce naturale e ridurre i consumi energetici dello stabilimento."
      faqs={[
        { question: 'Servono infissi con triplo vetro a Vicenza?', answer: "Nella zona pedemontana e montana della provincia (Bassano, Schio, Thiene, Valdagno) il triplo vetro è fortemente consigliato per le temperature invernali rigide. Nella pianura vicentina il doppio vetro basso-emissivo con gas argon è generalmente sufficiente. Durante il sopralluogo valutiamo la soluzione ottimale per la vostra zona specifica." },
        { question: 'Quanto costa la sostituzione infissi per una casa a Vicenza?', answer: "Per un'abitazione media con 8-10 finestre, il costo di fornitura e posa di infissi in PVC a taglio termico varia indicativamente tra 6.000€ e 10.000€. Con la detrazione fiscale del 50%, il costo effettivo si dimezza. Offriamo preventivi gratuiti e dettagliati, senza impegno, su tutta la provincia." },
        { question: 'Installate infissi anche nelle ville storiche vincolate del vicentino?', answer: "Sì, abbiamo esperienza nella sostituzione infissi in edifici vincolati, incluse ville palladiane e centri storici. Proponiamo serramenti in legno-alluminio o PVC effetto legno con profili che rispettano le prescrizioni della Soprintendenza. Ci occupiamo anche della richiesta di autorizzazione paesaggistica." },
        { question: 'Quanto tempo impiegate per sostituire tutti gli infissi di una casa a Vicenza?', answer: "Per un'abitazione standard con 8-10 serramenti, il lavoro di rimozione e posa richiede 2-3 giorni lavorativi. Organizziamo il cantiere per ridurre al minimo il disagio: ogni vano viene aperto e chiuso in giornata. Operiamo su tutta la provincia, da Vicenza città a Bassano del Grappa." }
      ]}
      ctaText="Prenota misurazione gratuita a Vicenza"
    />
  );
}
