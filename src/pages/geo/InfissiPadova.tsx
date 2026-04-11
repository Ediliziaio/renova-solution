import GeoServicePage from './GeoServicePage';

export default function InfissiPadova() {
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
      servizio="infissi"
      heroTitle="Infissi a Padova: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Padova e provincia. Misurazione gratuita, posa certificata, detrazione fiscale 50%."
      seoTitle="Infissi Padova | Serramenti Padova Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Padova e provincia. Finestre in PVC, alluminio e legno-alluminio con taglio termico. Preventivo gratuito e detrazione 50%. Renova Solution."
      seoKeywords="infissi padova, serramenti padova, finestre pvc padova, finestre alluminio padova, sostituzione infissi padova, infissi padova prezzi"
      introText="La provincia di Padova, caratterizzata da inverni freddi con nebbia persistente e umidità elevata, richiede infissi ad alte prestazioni termiche per garantire comfort abitativo e contenimento dei costi energetici. Le condizioni climatiche della pianura padovana, con escursioni termiche significative tra estate e inverno, mettono a dura prova i serramenti di vecchia generazione.

Da Abano Terme a Cittadella, da Este a Camposampiero, il patrimonio edilizio padovano è in gran parte costituito da edifici degli anni '60-'80 con infissi in legno o alluminio senza taglio termico. La sostituzione con serramenti moderni a tripla guarnizione e vetrocamera basso-emissivo consente di abbattere le dispersioni termiche fino al 40%, eliminando condensa, spifferi e muffe.

Renova Solution opera su tutta la provincia di Padova con un servizio completo: dal sopralluogo gratuito con rilievo tecnico alla posa in opera certificata, dalla gestione della pratica ENEA per la detrazione 50% fino all'assistenza post-vendita. Proponiamo serramenti in PVC, alluminio a taglio termico e legno-alluminio, selezionando i profili più adatti al clima umido e nebbioso del padovano."
      benefici={[
        'Misurazione gratuita a domicilio in tutta la provincia di Padova con consulenza tecnica personalizzata',
        'Profili a 5-7 camere con taglio termico per contrastare nebbia e umidità della pianura padovana',
        'Vetrocamera triplo strato con gas argon: isolamento termico Ug fino a 0,5 W/m²K',
        'Detrazione fiscale del 50% — pratica ENEA e documentazione gestite interamente da noi',
        'Posa in opera certificata UNI 11673 con eliminazione totale dei ponti termici',
        'Garanzia fino a 30 anni sui profili e 10 anni sulla posa in opera'
      ]}
      dettaglioServizio="Il clima padovano, con nebbia frequente, umidità relativa spesso superiore all'80% e temperature invernali che scendono regolarmente sotto lo zero, richiede infissi progettati per la massima tenuta termica. Per questo a Padova consigliamo profili in PVC a 6-7 camere con rinforzo in acciaio zincato, capaci di garantire valori di trasmittanza Uw inferiori a 1,0 W/m²K.

Per le abitazioni storiche del centro di Padova, Cittadella, Este e Monselice, la soluzione legno-alluminio permette di rispettare i vincoli architettonici mantenendo prestazioni termiche di eccellenza. Il legno lamellare all'interno crea un ambiente caldo e accogliente, mentre il guscio in alluminio esterno protegge dagli agenti atmosferici senza necessità di manutenzione.

La gamma alluminio a taglio termico è ideale per le ville e le abitazioni moderne di Abano Terme, Selvazzano Dentro, Rubano e Albignasego: design minimale con profili sottili che massimizzano la superficie vetrata e la luminosità degli ambienti.

Ogni installazione a Padova segue il nostro protocollo di posa certificata: preparazione del vano, installazione del controtelaio coibentato, fissaggio meccanico del serramento, sigillatura con nastri autoespandenti e schiuma poliuretanica, verifica finale di tenuta all'aria e all'acqua. Il risultato è un infisso che lavora perfettamente per decenni, senza infiltrazioni né condensa."
      faqs={[
        { question: 'Quali infissi sono consigliati per il clima di Padova?', answer: "Per il clima umido e nebbioso di Padova consigliamo infissi in PVC a 6-7 camere con vetrocamera basso-emissivo e gas argon. Questa combinazione garantisce isolamento termico eccellente (Uw fino a 0,9 W/m²K), elimina la condensa e riduce drasticamente i costi di riscaldamento nei mesi invernali." },
        { question: 'Quanto costa sostituire gli infissi a Padova?', answer: "Il costo dipende dal materiale, dalle dimensioni e dal tipo di apertura. Una finestra in PVC a 2 ante da 120x140 cm parte da circa 350-450€, esclusa posa. Con la detrazione fiscale del 50%, il costo effettivo si dimezza. Offriamo preventivi gratuiti e personalizzati su tutta la provincia." },
        { question: 'Sostituite infissi anche nei centri storici vincolati di Padova?', answer: "Sì, operiamo regolarmente nei centri storici di Padova, Cittadella, Este e Monselice. Per gli edifici vincolati proponiamo serramenti in legno-alluminio o PVC effetto legno che rispettano le prescrizioni della Soprintendenza. Ci occupiamo anche dell'eventuale richiesta di autorizzazione." },
        { question: 'La detrazione 50% è cumulabile con altri incentivi a Padova?', answer: "La detrazione 50% per la sostituzione infissi è applicabile come Bonus Ristrutturazioni. Non è cumulabile con l'Ecobonus 65% sullo stesso intervento, ma può essere combinata con altri lavori di ristrutturazione. Gestiamo noi tutta la pratica ENEA e la documentazione necessaria." }
      ]}
      ctaText="Prenota misurazione gratuita a Padova"
    />
  );
}
