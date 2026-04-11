import GeoServicePage from './GeoServicePage';

export default function InfissiTrieste() {
  return (
    <GeoServicePage
      provincia="Trieste"
      provinciaSlug="trieste"
      regione="Friuli Venezia Giulia"
      regioneShort="FVG"
      codiceISO="IT-TS"
      lat={45.6495}
      lng={13.7768}
      comuni={['Trieste', 'Muggia', 'Duino-Aurisina', 'Sgonico', 'Monrupino', 'San Dorligo della Valle']}
      servizio="infissi"
      heroTitle="Infissi a Trieste: comfort termico e risparmio energetico"
      heroSubtitle="Serramenti in PVC, alluminio e legno-alluminio a Trieste e provincia. Misurazione gratuita, posa certificata e detrazione fiscale del 50%."
      seoTitle="Infissi Trieste | Serramenti Trieste Provincia | Renova Solution"
      seoDescription="Infissi e serramenti a Trieste e provincia: finestre in PVC, alluminio e legno-alluminio. Isolamento termico dalla Bora, detrazione 50%. Preventivo gratuito Renova Solution."
      seoKeywords="infissi trieste, serramenti trieste, finestre pvc trieste, finestre alluminio trieste, sostituzione infissi trieste, infissi trieste prezzi"
      introText="A Trieste il clima è dominato dalla Bora, il vento forte e gelido che d'inverno spinge le temperature percepite ben sotto lo zero. L'umidità del Golfo Adriatico peggiora la sensazione di freddo e accelera il degrado degli infissi vecchi. In questo contesto, avere serramenti performanti non è un lusso ma una necessità per il comfort abitativo e per contenere i costi di riscaldamento.

Gli edifici triestini — dai palazzi storici del centro alle villette del Carso — presentano spesso infissi datati in legno o alluminio a taglio freddo, responsabili di dispersioni termiche fino al 30% del calore prodotto dall'impianto. Sostituirli con serramenti moderni in PVC, alluminio a taglio termico o legno-alluminio significa ridurre drasticamente i ponti termici, eliminare spifferi e condensa, e abbattere il rumore esterno — un problema sentito soprattutto nelle zone ad alto traffico come Riva Tre Novembre e la Strada Costiera.

Renova Solution opera su tutta la provincia di Trieste, da Muggia a Duino-Aurisina, offrendo consulenza tecnica, misurazione gratuita a domicilio e posa in opera certificata. Gestiamo interamente la pratica ENEA per la detrazione fiscale del 50%, così il tuo investimento in nuovi infissi si ripaga in pochi anni grazie al risparmio in bolletta."
      benefici={[
        'Misurazione gratuita a domicilio in tutta la provincia di Trieste con preventivo dettagliato',
        'Detrazione fiscale del 50% sugli infissi — gestiamo noi la pratica ENEA e la documentazione',
        'Serramenti certificati con trasmittanza termica Uw fino a 0,8 W/m²K per massimo isolamento dalla Bora',
        'Vetri basso-emissivi e triplo vetro per abbattere il rumore del traffico e del vento fino a 44 dB',
        'Materiali resistenti alla salsedine adriatica: PVC, alluminio a taglio termico, legno-alluminio',
        'Posa in opera certificata secondo norma UNI 11673 con garanzia 10 anni su prodotto e installazione'
      ]}
      dettaglioServizio="Il nostro intervento a Trieste inizia con un sopralluogo tecnico gratuito: misuriamo ogni vano finestra, valutiamo lo stato del controtelaio e analizziamo le criticità specifiche del tuo edificio — esposizione alla Bora, vicinanza al mare, vincoli architettonici del centro storico. Su questa base proponiamo la soluzione più adatta tra PVC, alluminio a taglio termico e legno-alluminio.

Lavoriamo con profili di alta gamma dotati di guarnizioni a tripla battuta e ferramenta antieffrazione. I vetri basso-emissivi con gas argon garantiscono un isolamento termico eccellente, mentre il triplo vetro è la scelta ideale per chi vive nelle zone più esposte al vento e al rumore. Per gli edifici vincolati del centro storico di Trieste, proponiamo soluzioni che rispettano i requisiti della Soprintendenza senza rinunciare alle prestazioni.

La posa in opera segue il protocollo UNI 11673 con controtelaio coibentato e sigillatura perimetrale a tenuta d'aria. Questo elimina i ponti termici e garantisce la massima tenuta contro gli spifferi, un aspetto cruciale a Trieste dove la Bora può raggiungere raffiche superiori ai 150 km/h.

Completiamo il servizio con la gestione completa della pratica ENEA per la detrazione del 50% e il rilascio della certificazione di posa. L'intervento medio su un appartamento richiede 1-2 giorni, con smaltimento dei vecchi infissi incluso nel prezzo."
      faqs={[
        { question: 'Quanto costa sostituire gli infissi a Trieste?', answer: "Il costo dipende dal materiale e dalle dimensioni. Per un appartamento medio a Trieste con 5-6 finestre, il preventivo chiavi in mano parte da circa 4.000-6.000€ per il PVC e da 6.000-9.000€ per il legno-alluminio. Con la detrazione del 50% in 10 anni, il costo effettivo si dimezza." },
        { question: 'Quali infissi sono migliori per resistere alla Bora a Trieste?', answer: "Per resistere alla Bora consigliamo profili con classe di permeabilità all'aria 4 e resistenza al vento C5. Il PVC con rinforzo in acciaio e l'alluminio a taglio termico sono le soluzioni più performanti. Le guarnizioni a tripla battuta garantiscono tenuta anche con raffiche superiori a 150 km/h." },
        { question: 'Gli infissi in PVC resistono alla salsedine del mare di Trieste?', answer: "Sì, il PVC è un materiale inerte che non si corrode a contatto con la salsedine, a differenza dell'alluminio non trattato o del ferro. Per le abitazioni fronte mare a Muggia o Barcola, il PVC è la scelta ideale perché non richiede manutenzione e mantiene le prestazioni per 30-40 anni." },
        { question: 'Posso sostituire gli infissi in un palazzo storico a Trieste?', answer: "Sì, anche negli edifici vincolati. Proponiamo soluzioni in legno-alluminio che replicano l'estetica originale all'esterno con prestazioni moderne all'interno. Per interventi nel centro storico di Trieste, ci coordiniamo con la Soprintendenza per ottenere le autorizzazioni necessarie." }
      ]}
      ctaText="Prenota misurazione gratuita a Trieste"
    />
  );
}
