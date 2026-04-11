import GeoServicePage from './GeoServicePage';

export default function InfissiVenezia() {
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
      servizio="infissi"
      heroTitle="Infissi a Venezia: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Venezia e provincia. Misurazione gratuita, posa certificata, detrazione fiscale 50%."
      seoTitle="Infissi Venezia | Serramenti Venezia Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Venezia e provincia. Finestre in PVC, alluminio e legno-alluminio con taglio termico. Preventivo gratuito e detrazione 50%. Renova Solution."
      seoKeywords="infissi venezia, serramenti venezia, finestre pvc venezia, finestre alluminio venezia, sostituzione infissi venezia, infissi venezia prezzi"
      introText="La provincia di Venezia presenta condizioni climatiche uniche che rendono la scelta degli infissi una decisione strategica per il comfort abitativo. L'umidità lagunare, la salsedine e i venti marini sottopongono finestre e portefinestre a uno stress costante: scegliere serramenti di qualità significa proteggere la propria casa e ridurre drasticamente i costi di riscaldamento e climatizzazione.

Da Mestre a Chioggia, da Jesolo a Portogruaro, migliaia di abitazioni nella provincia veneziana necessitano di infissi moderni con taglio termico e vetrocamera basso-emissivo. Un serramento di ultima generazione riduce le dispersioni termiche fino al 40%, garantendo un risparmio concreto in bolletta che si avverte fin dal primo inverno.

Renova Solution è il partner di riferimento per la sostituzione infissi a Venezia e in tutta la provincia. Proponiamo finestre in PVC, alluminio e legno-alluminio delle migliori marche, con profili specificamente studiati per resistere alla salsedine e all'ambiente lagunare. Ci occupiamo di misurazione, progettazione, posa in opera certificata e gestione completa della pratica ENEA per la detrazione fiscale del 50%."
      benefici={[
        'Misurazione gratuita a domicilio in tutta la provincia di Venezia con rilievo tecnico certificato',
        'Profili in PVC e alluminio resistenti alla salsedine, ideali per il clima lagunare veneziano',
        'Vetrocamera basso-emissivo con gas argon per isolamento termico e acustico superiore',
        'Detrazione fiscale del 50% — gestiamo noi pratica ENEA e documentazione completa',
        'Posa in opera certificata secondo norma UNI 11673 con garanzia di tenuta',
        'Assistenza post-vendita e manutenzione su tutta la provincia di Venezia'
      ]}
      dettaglioServizio="A Venezia e provincia il clima lagunare impone requisiti specifici per gli infissi: resistenza alla salsedine, tenuta all'acqua e isolamento dall'umidità costante. Per questo selezioniamo esclusivamente serramenti con profili a 5 o più camere, guarnizioni in EPDM a tripla battuta e ferramenta in acciaio inox trattato anticorrosione.

Per le abitazioni di Mestre, Spinea, Mirano e della terraferma veneziana proponiamo finestre in PVC a taglio termico con valori Uw fino a 0,9 W/m²K, ideali per contenere i costi energetici durante gli inverni umidi. Per le zone costiere come Jesolo, Chioggia e il litorale, consigliamo profili in alluminio a taglio termico con trattamento marino certificato Qualicoat Seaside.

La gamma legno-alluminio è la soluzione perfetta per chi desidera il calore estetico del legno all'interno e la resistenza dell'alluminio all'esterno, particolarmente indicata per gli edifici del centro storico veneziano dove l'estetica è vincolata dalla Soprintendenza.

Ogni progetto parte dalla misurazione gratuita a domicilio: rileviamo le misure con precisione millimetrica, valutiamo lo stato dei controtelai e proponiamo la soluzione ottimale per prestazioni, estetica e budget. La posa in opera è eseguita dai nostri posatori certificati UNI 11673, con sigillatura perimetrale, schiuma poliuretanica e nastri autoespandenti per garantire tenuta all'aria, all'acqua e al vento."
      faqs={[
        { question: 'Quali infissi sono più adatti al clima di Venezia?', answer: "Per il clima veneziano consigliamo infissi in PVC o alluminio con trattamento anticorrosione, vetrocamera basso-emissivo con gas argon e guarnizioni a tripla battuta. La resistenza alla salsedine e all'umidità lagunare è fondamentale: i nostri profili sono testati per ambienti marini e garantiti fino a 30 anni." },
        { question: 'Quanto si risparmia sostituendo gli infissi a Venezia?', answer: "Sostituendo vecchi infissi con serramenti a taglio termico si può risparmiare dal 25% al 40% sui costi di riscaldamento. Per un appartamento medio a Mestre o Venezia, questo si traduce in un risparmio di 400-700€ all'anno, con un ritorno dell'investimento in 5-7 anni grazie alla detrazione 50%." },
        { question: 'Come funziona la detrazione 50% per gli infissi?', answer: "La sostituzione degli infissi rientra nel Bonus Ristrutturazioni con detrazione del 50% in 10 rate annuali. Gestiamo noi l'intera pratica: dalla comunicazione all'ENEA entro 90 giorni dalla fine lavori alla predisposizione della documentazione fiscale. Il pagamento deve avvenire con bonifico parlante." },
        { question: 'Quanto tempo serve per sostituire gli infissi di un appartamento a Venezia?', answer: "Per un appartamento standard con 5-7 finestre, la sostituzione richiede 1-2 giorni lavorativi. La rimozione dei vecchi infissi e la posa dei nuovi avviene in giornata per ciascun serramento, riducendo al minimo il disagio. Operiamo in tutta la provincia, da Venezia centro a Portogruaro." }
      ]}
      ctaText="Prenota misurazione gratuita a Venezia"
    />
  );
}
