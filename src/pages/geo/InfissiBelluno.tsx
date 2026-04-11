import GeoServicePage from './GeoServicePage';

export default function InfissiBelluno() {
  return (
    <GeoServicePage
      provincia="Belluno"
      provinciaSlug="belluno"
      regione="Veneto"
      regioneShort="Veneto"
      codiceISO="IT-BL"
      lat={46.1426}
      lng={12.2167}
      comuni={['Belluno', 'Feltre', 'Cortina d\'Ampezzo', 'Sedico', 'Ponte nelle Alpi', 'Pieve di Cadore', 'Agordo', 'Santa Giustina']}
      servizio="infissi"
      heroTitle="Infissi a Belluno: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Belluno e provincia. Misurazione gratuita, posa certificata, detrazione fiscale 50%."
      seoTitle="Infissi Belluno | Serramenti Belluno Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Belluno e provincia. Finestre in PVC, alluminio e legno-alluminio con triplo vetro per il clima montano. Preventivo gratuito, detrazione 50%."
      seoKeywords="infissi belluno, serramenti belluno, finestre pvc belluno, finestre alluminio belluno, sostituzione infissi belluno, infissi belluno prezzi"
      introText="La provincia di Belluno, cuore delle Dolomiti venete, è il territorio con le condizioni climatiche più estreme del Veneto. Il freddo montano intenso, le nevicate abbondanti e le temperature che in inverno scendono regolarmente a -10/-15°C nelle valli dolomitiche rendono la qualità degli infissi un elemento essenziale per la vivibilità e l'efficienza energetica delle abitazioni. Un serramento inadeguato in montagna non è solo scomodo: è un costo energetico insostenibile.

Da Feltre a Cortina d'Ampezzo, da Agordo a Pieve di Cadore, le abitazioni bellunesi affrontano condizioni climatiche paragonabili a quelle del Nord Europa. Il patrimonio edilizio montano, spesso costituito da edifici in pietra e legno di grande valore architettonico, necessita di infissi che coniughino prestazioni termiche da casa passiva con un'estetica coerente con la tradizione alpina.

Renova Solution è il riferimento per la sostituzione infissi a Belluno e nelle valli dolomitiche. Proponiamo serramenti con triplo vetro, profili a 7 camere e valori di trasmittanza termica tra i più bassi disponibili sul mercato, specificamente selezionati per il clima montano bellunese. Misurazione gratuita, posa certificata e gestione della detrazione fiscale 50% incluse."
      benefici={[
        'Misurazione gratuita a domicilio in tutta la provincia di Belluno, dalle valli fino a Cortina',
        'Triplo vetro di serie con gas argon e canalina warm-edge per il massimo isolamento montano',
        'Profili a 7 camere con Uw fino a 0,7 W/m²K: prestazioni da casa passiva per il clima dolomitico',
        'Detrazione fiscale del 50% — pratica ENEA e documentazione completamente a nostro carico',
        'Finiture in effetto legno e tonalità alpine che si integrano con l\'architettura dolomitica',
        'Posa certificata UNI 11673 con controtelaio coibentato per eliminare ogni ponte termico'
      ]}
      dettaglioServizio="A Belluno e nelle Dolomiti l'infisso non è un semplice serramento: è la barriera tra il comfort domestico e temperature esterne che possono raggiungere i -20°C. Per questo nella provincia bellunese installiamo esclusivamente configurazioni ad altissime prestazioni: triplo vetro basso-emissivo con doppia camera riempita di gas argon, canalina warm-edge in materiale composito, profili a 7 camere con rinforzo in acciaio.

Per le abitazioni di Cortina d'Ampezzo, Pieve di Cadore e delle valli dolomitiche proponiamo serramenti in legno-alluminio con essenze locali come larice e abete rosso, che si integrano perfettamente con l'architettura alpina tradizionale. Il guscio esterno in alluminio protegge il legno dalla neve, dal ghiaccio e dai raggi UV intensi dell'alta quota, eliminando la necessità di manutenzione periodica.

Per Belluno città, Feltre, Sedico e la Valbelluna, la gamma PVC ad alte prestazioni offre il miglior rapporto qualità-prezzo: profili con profondità da 82-86 mm, 7 camere interne, guarnizioni in EPDM a tripla battuta e ferramenta con microventilazione per il ricambio d'aria controllato senza dispersioni.

La posa in opera nelle zone montane richiede competenze specifiche: i nostri posatori sono formati per lavorare con controtelai monoblocco coibentati, sigillature elastiche che resistono alle dilatazioni termiche estreme e sistemi di fissaggio meccanico dimensionati per i carichi di neve e vento tipici delle quote dolomitiche."
      faqs={[
        { question: 'Perché il triplo vetro è necessario a Belluno?', answer: "Con temperature invernali che scendono frequentemente a -10/-15°C e punte di -20°C nelle valli, il triplo vetro è essenziale per mantenere la temperatura superficiale del vetro interno sopra i 17°C, evitando condensa, ghiaccio interno e discomfort da irraggiamento freddo. Il doppio vetro, adeguato in pianura, non è sufficiente nel clima montano bellunese." },
        { question: 'Quanto si risparmia con infissi nuovi in montagna a Belluno?', answer: "In montagna il risparmio è ancora più significativo che in pianura: sostituendo infissi vecchi con triplo vetro a taglio termico si può risparmiare dal 35% al 50% sui costi di riscaldamento. Per una casa di 120 mq a Belluno o Cortina, questo significa 1.000-1.500€ in meno all'anno di gasolio o pellet." },
        { question: 'Installate infissi anche a Cortina d\'Ampezzo e nelle Dolomiti?', answer: "Sì, operiamo su tutta la provincia di Belluno, comprese Cortina d'Ampezzo, Pieve di Cadore, Agordo e tutte le valli dolomitiche. Abbiamo esperienza specifica con i vincoli architettonici degli edifici montani e proponiamo soluzioni estetiche coerenti con il paesaggio dolomitico." },
        { question: 'Gli infissi in PVC resistono al freddo intenso delle Dolomiti?', answer: "Sì, i profili in PVC di ultima generazione sono testati per temperature da -30°C a +70°C. Il PVC non si deforma con il gelo, non conduce il freddo e mantiene le proprie proprietà meccaniche anche nelle condizioni più estreme. Le guarnizioni in EPDM che utilizziamo conservano elasticità e tenuta anche a temperature molto basse." }
      ]}
      ctaText="Prenota misurazione gratuita a Belluno"
    />
  );
}
