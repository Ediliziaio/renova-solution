import GeoServicePage from './GeoServicePage';

export default function InfissiVerona() {
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
      servizio="infissi"
      heroTitle="Infissi a Verona: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Verona e provincia. Misurazione gratuita, posa certificata, detrazione fiscale 50%."
      seoTitle="Infissi Verona | Serramenti Verona Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Verona e provincia. Finestre in PVC, alluminio e legno-alluminio con taglio termico. Preventivo gratuito e detrazione 50%. Renova Solution."
      seoKeywords="infissi verona, serramenti verona, finestre pvc verona, finestre alluminio verona, sostituzione infissi verona, infissi verona prezzi"
      introText="La provincia di Verona si estende dal Lago di Garda alla bassa pianura veronese, attraversando contesti climatici molto diversi tra loro. Le forti escursioni termiche tra estate e inverno, con punte estive oltre i 35°C e temperature invernali che scendono sotto lo zero nella Valpolicella e nella Lessinia, rendono fondamentale la scelta di infissi con elevate prestazioni di isolamento termico.

Da Villafranca a Legnago, da Bussolengo a San Bonifacio, il territorio veronese ospita un mix di edifici storici, villette degli anni '70-'90 e nuove costruzioni. In molti casi, i vecchi serramenti in legno o alluminio senza taglio termico rappresentano il principale punto debole dell'involucro edilizio, causando dispersioni energetiche che pesano sulla bolletta e sul comfort domestico.

Renova Solution installa infissi a Verona e in tutta la provincia con un approccio su misura: analizziamo il contesto climatico della zona specifica, valutiamo le esigenze estetiche e funzionali e proponiamo serramenti in PVC, alluminio a taglio termico o legno-alluminio con le migliori prestazioni disponibili. Dalla zona gardesana alla pianura, ogni progetto è studiato per massimizzare il risparmio energetico."
      benefici={[
        'Misurazione gratuita a domicilio su tutta la provincia di Verona con analisi termografica opzionale',
        'Profili selezionati per le escursioni termiche veronesi: dal caldo estivo al gelo invernale',
        'Vetrocamera con trattamento selettivo solare per le zone esposte del Garda e della pianura',
        'Detrazione fiscale del 50% — gestione completa della pratica ENEA e documentazione fiscale',
        'Isolamento acustico fino a 45 dB: ideale per le abitazioni su strade trafficate di Verona',
        'Posa certificata UNI 11673 con garanzia scritta su tenuta e prestazioni'
      ]}
      dettaglioServizio="Verona e la sua provincia presentano esigenze specifiche che influenzano la scelta degli infissi. Nella zona del Lago di Garda, a Bardolino, Lazise e Peschiera, il vetro deve avere un trattamento selettivo solare che blocchi il calore estivo senza ridurre la luminosità. Nella Valpolicella, a Negrar e Pescantina, servono profili con prestazioni invernali elevate per resistere al freddo montano.

Per la città di Verona e i comuni limitrofi come San Giovanni Lupatoto, Bussolengo e Villafranca, l'isolamento acustico è un fattore determinante tanto quanto quello termico. I nostri serramenti raggiungono valori di abbattimento acustico fino a 45 dB, trasformando l'ambiente domestico in un'oasi di silenzio anche su strade trafficate.

La gamma PVC è la più richiesta nel veronese: profili a 5-7 camere, rinforzo in acciaio zincato, guarnizioni in EPDM a tripla battuta. I colori e le finiture spaziano dal bianco classico alle tonalità legno e ai colori RAL personalizzati, per integrarsi perfettamente con qualsiasi architettura.

Per gli edifici storici del centro di Verona, patrimonio UNESCO, proponiamo soluzioni in legno-alluminio o PVC effetto legno con profili sagomati che riproducono fedelmente l'estetica dei serramenti originali. Ci confrontiamo direttamente con la Soprintendenza per garantire il rispetto dei vincoli architettonici."
      faqs={[
        { question: 'Quali infissi resistono meglio alle escursioni termiche di Verona?', answer: "Per le forti escursioni termiche veronesi consigliamo infissi in PVC a 6-7 camere o legno-alluminio con vetrocamera basso-emissivo e gas argon. Questi serramenti mantengono prestazioni costanti sia con il caldo estivo da 35°C sia con il gelo invernale, garantendo comfort tutto l'anno e risparmio energetico fino al 40%." },
        { question: 'Quanto si risparmia con infissi nuovi a Verona?', answer: "Sostituendo infissi vecchi di 20-30 anni con serramenti a taglio termico moderni, il risparmio medio sui costi di riscaldamento è del 25-40%. Per un'abitazione di 100 mq a Verona, questo significa 500-800€ in meno all'anno. Con la detrazione 50%, il ritorno dell'investimento è di 4-6 anni." },
        { question: 'Installate infissi anche nella zona del Lago di Garda?', answer: "Sì, operiamo in tutta la provincia di Verona, compresa la zona gardesana. Per le abitazioni sul lago proponiamo vetrocamere con trattamento selettivo solare che riducono il surriscaldamento estivo fino al 60%, mantenendo la luminosità naturale. Ideali anche per seconde case e strutture turistiche." },
        { question: 'Gli infissi in PVC ingialliscono nel tempo a Verona?', answer: "No, i profili in PVC di ultima generazione che installiamo sono additivati con stabilizzanti UV che impediscono l'ingiallimento anche dopo 20-30 anni di esposizione. Il PVC è inoltre il materiale più resistente all'umidità e non richiede alcuna manutenzione, a differenza del legno." }
      ]}
      ctaText="Prenota misurazione gratuita a Verona"
    />
  );
}
