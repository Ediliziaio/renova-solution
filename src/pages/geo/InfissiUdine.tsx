import GeoServicePage from './GeoServicePage';

export default function InfissiUdine() {
  return (
    <GeoServicePage
      provincia="Udine"
      provinciaSlug="udine"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-UD"
      lat={46.0711}
      lng={13.2346}
      comuni={['Udine', 'Codroipo', 'Cervignano del Friuli', 'Tolmezzo', 'Gemona del Friuli', 'Latisana', 'Cividale del Friuli', 'Tavagnacco', 'San Daniele del Friuli', 'Palmanova']}
      servizio="infissi"
      heroTitle="Infissi a Udine: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Udine e in tutta la provincia. Misurazione gratuita, posa certificata e detrazione fiscale del 50%."
      seoTitle="Infissi Udine | Serramenti Udine Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Udine e provincia: finestre in PVC, alluminio e legno-alluminio. Isolamento termico per inverni rigidi, detrazione 50%. Preventivo gratuito."
      seoKeywords="infissi udine, serramenti udine, finestre pvc udine, finestre alluminio udine, sostituzione infissi udine, infissi udine prezzi"
      introText="La provincia di Udine è caratterizzata da inverni rigidi con temperature che scendono frequentemente sotto lo zero, soprattutto nelle zone pedemontane e montane come Tolmezzo e Gemona del Friuli. Le forti escursioni termiche tra giorno e notte — tipiche della pianura friulana da Codroipo a Latisana — mettono a dura prova gli infissi vecchi, causando condensa, spifferi e dispersioni di calore che incidono pesantemente sulla bolletta.

Nel territorio udinese, dal centro storico alle frazioni rurali, è ancora diffuso l'uso di finestre in vetro singolo o doppio vetro di vecchia generazione. Questi serramenti lasciano fuoriuscire fino al 35% dell'energia termica prodotta dall'impianto di riscaldamento, generando discomfort e costi energetici elevati. La sostituzione con infissi moderni ad alte prestazioni consente di recuperare efficienza, ridurre i consumi e migliorare sensibilmente il comfort abitativo in ogni stagione.

Renova Solution è presente su tutta la provincia di Udine — da Cividale del Friuli a San Daniele, da Palmanova a Tavagnacco — con un servizio completo che include consulenza tecnica personalizzata, misurazione gratuita a domicilio, posa in opera certificata e gestione della pratica ENEA per la detrazione fiscale del 50%."
      benefici={[
        'Misurazione gratuita a domicilio in tutta la provincia di Udine con preventivo senza impegno',
        'Detrazione fiscale del 50% sugli infissi — gestiamo noi pratica ENEA e documentazione completa',
        'Profili con trasmittanza termica Uw fino a 0,8 W/m²K ideali per gli inverni rigidi del Friuli',
        'Triplo vetro basso-emissivo con gas argon per massimo isolamento e abbattimento acustico fino a 44 dB',
        'Gamma completa di materiali: PVC rinforzato, alluminio a taglio termico, legno-alluminio di pregio',
        'Posa certificata UNI 11673 con controtelaio coibentato e garanzia 10 anni su prodotto e installazione'
      ]}
      dettaglioServizio="Il nostro metodo operativo nella provincia di Udine parte dal sopralluogo gratuito: un tecnico Renova Solution misura ogni vano finestra, analizza lo stato dei controtelai esistenti e valuta le specifiche esigenze climatiche della tua zona — perché un'abitazione a Tolmezzo in montagna ha necessità diverse rispetto a una casa nella bassa friulana a Latisana.

Proponiamo tre linee di serramenti calibrate sul territorio udinese. Il PVC rinforzato in acciaio è la soluzione con il miglior rapporto qualità-prezzo, perfetta per le nuove costruzioni e le ristrutturazioni. L'alluminio a taglio termico offre profili più sottili e maggiore luminosità, ideale per le architetture moderne. Il legno-alluminio unisce il calore estetico del legno interno con la resistenza dell'alluminio esterno, una scelta di pregio per ville e abitazioni di prestigio.

Tutti i nostri serramenti montano vetri basso-emissivi con intercapedine in gas argon. Per le zone montane e pedemontane della provincia di Udine raccomandiamo il triplo vetro, che garantisce un isolamento termico superiore e riduce al minimo le dispersioni anche con temperature esterne di -10°C.

La posa in opera rispetta rigorosamente la norma UNI 11673: controtelaio coibentato, nastri autoespandenti, sigillatura perimetrale e regolazione della ferramenta. Gestiamo lo smaltimento dei vecchi infissi, la pratica ENEA per la detrazione del 50% e il rilascio della certificazione di conformità. Tempi medi di intervento: 1-3 giorni a seconda del numero di serramenti."
      faqs={[
        { question: 'Quanto costa sostituire gli infissi a Udine?', answer: "Per un appartamento medio a Udine con 5-6 finestre, il costo chiavi in mano parte da circa 4.500-6.500€ per il PVC e da 7.000-10.000€ per il legno-alluminio. Con la detrazione fiscale del 50% recuperi metà dell'investimento in 10 anni, riducendo il costo effettivo in modo significativo." },
        { question: 'Quali infissi scegliere per le zone montane della provincia di Udine?', answer: "Per le zone montane come Tolmezzo e Gemona consigliamo profili con triplo vetro basso-emissivo e trasmittanza Uw inferiore a 0,9 W/m²K. Il PVC a 6-7 camere o il legno-alluminio sono i materiali più indicati per resistere alle temperature rigide e alle escursioni termiche della montagna friulana." },
        { question: 'I nuovi infissi eliminano la condensa sulle finestre?', answer: "Sì, la condensa si forma quando il vetro è più freddo dell'aria interna. Con i nostri vetri basso-emissivi a doppia o tripla camera, la superficie interna resta calda e la condensa viene eliminata. Il controtelaio coibentato previene anche la formazione di muffa lungo il perimetro della finestra." },
        { question: 'Quanto si risparmia in bolletta con nuovi infissi a Udine?', answer: "Con infissi moderni ad alte prestazioni il risparmio medio sui costi di riscaldamento a Udine è del 25-35%. Per un'abitazione che spende 1.800€ all'anno di gas, il risparmio annuo è di 450-630€. Considerando la detrazione del 50%, l'investimento si ripaga in 5-7 anni." }
      ]}
      ctaText="Prenota misurazione gratuita a Udine"
    />
  );
}
