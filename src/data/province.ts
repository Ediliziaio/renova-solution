export interface Provincia {
  slug: string;
  name: string;
  sigla: string;
  region: "FVG" | "Veneto";
  coordinates: { lat: number; lng: number };
  isoCode: string;
  comuniPrincipali: string[];
  population: number;
  description: string;
}

export const province: Provincia[] = [
  // ── Friuli Venezia Giulia ──────────────────────────────────────────
  {
    slug: "trieste",
    name: "Trieste",
    sigla: "TS",
    region: "FVG",
    coordinates: { lat: 45.6495, lng: 13.7768 },
    isoCode: "IT-TS",
    comuniPrincipali: [
      "Trieste",
      "Muggia",
      "Duino-Aurisina",
      "Sgonico",
      "Monrupino",
      "San Dorligo della Valle",
      "Dolina",
      "Aurisina",
    ],
    population: 232000,
    description:
      "Provincia di Trieste: capoluogo del Friuli Venezia Giulia affacciato sul golfo adriatico. Scopri i migliori servizi di fotovoltaico, infissi e ristrutturazioni a Trieste e nei comuni limitrofi. Soluzioni su misura per il risparmio energetico e la riqualificazione edilizia nel territorio triestino.",
  },
  {
    slug: "udine",
    name: "Udine",
    sigla: "UD",
    region: "FVG",
    coordinates: { lat: 46.0711, lng: 13.2346 },
    isoCode: "IT-UD",
    comuniPrincipali: [
      "Udine",
      "Codroipo",
      "Cervignano del Friuli",
      "Tolmezzo",
      "Gemona del Friuli",
      "Latisana",
      "Cividale del Friuli",
      "Tavagnacco",
      "San Daniele del Friuli",
      "Palmanova",
    ],
    population: 524000,
    description:
      "Provincia di Udine: la piu estesa del Friuli Venezia Giulia, dalla pianura friulana alle Alpi Carniche. Installazione impianti fotovoltaici, sostituzione infissi e ristrutturazioni chiavi in mano a Udine, Codroipo, Cividale e in tutto il territorio udinese.",
  },
  {
    slug: "pordenone",
    name: "Pordenone",
    sigla: "PN",
    region: "FVG",
    coordinates: { lat: 45.9564, lng: 12.6615 },
    isoCode: "IT-PN",
    comuniPrincipali: [
      "Pordenone",
      "Sacile",
      "Cordenons",
      "Azzano Decimo",
      "San Vito al Tagliamento",
      "Maniago",
      "Brugnera",
      "Spilimbergo",
      "Porcia",
      "Fiume Veneto",
    ],
    population: 312000,
    description:
      "Provincia di Pordenone: polo industriale del Friuli occidentale con un tessuto edilizio in costante rinnovamento. Servizi professionali di fotovoltaico, infissi ad alte prestazioni e ristrutturazioni a Pordenone, Sacile, Cordenons e in tutti i comuni della provincia.",
  },
  {
    slug: "gorizia",
    name: "Gorizia",
    sigla: "GO",
    region: "FVG",
    coordinates: { lat: 45.9415, lng: 13.6219 },
    isoCode: "IT-GO",
    comuniPrincipali: [
      "Gorizia",
      "Monfalcone",
      "Grado",
      "Ronchi dei Legionari",
      "Cormons",
      "Staranzano",
      "Gradisca d'Isonzo",
      "Romans d'Isonzo",
    ],
    population: 139000,
    description:
      "Provincia di Gorizia: territorio di confine tra Italia e Slovenia, Capitale Europea della Cultura 2025. Soluzioni di fotovoltaico, infissi e ristrutturazioni a Gorizia, Monfalcone, Grado e in tutto l'Isontino per migliorare efficienza energetica e comfort abitativo.",
  },

  // ── Veneto ─────────────────────────────────────────────────────────
  {
    slug: "venezia",
    name: "Venezia",
    sigla: "VE",
    region: "Veneto",
    coordinates: { lat: 45.4408, lng: 12.3155 },
    isoCode: "IT-VE",
    comuniPrincipali: [
      "Venezia",
      "Chioggia",
      "Mestre",
      "San Dona di Piave",
      "Mira",
      "Spinea",
      "Jesolo",
      "Mirano",
      "Portogruaro",
      "Noale",
    ],
    population: 847000,
    description:
      "Provincia di Venezia: dal centro storico lagunare alla terraferma in continua crescita edilizia. Impianti fotovoltaici, infissi di qualita e ristrutturazioni a Venezia, Mestre, Chioggia, Jesolo e in tutta la provincia per efficienza energetica e valorizzazione immobiliare.",
  },
  {
    slug: "padova",
    name: "Padova",
    sigla: "PD",
    region: "Veneto",
    coordinates: { lat: 45.4064, lng: 11.8768 },
    isoCode: "IT-PD",
    comuniPrincipali: [
      "Padova",
      "Abano Terme",
      "Albignasego",
      "Cittadella",
      "Selvazzano Dentro",
      "Vigonza",
      "Camposampiero",
      "Este",
      "Rubano",
      "Monselice",
    ],
    population: 934000,
    description:
      "Provincia di Padova: cuore economico del Veneto con un patrimonio edilizio residenziale e industriale tra i piu vasti della regione. Fotovoltaico, sostituzione infissi e ristrutturazioni a Padova, Abano Terme, Cittadella e in tutto il padovano.",
  },
  {
    slug: "verona",
    name: "Verona",
    sigla: "VR",
    region: "Veneto",
    coordinates: { lat: 45.4384, lng: 10.9916 },
    isoCode: "IT-VR",
    comuniPrincipali: [
      "Verona",
      "Villafranca di Verona",
      "Legnago",
      "San Giovanni Lupatoto",
      "Bussolengo",
      "San Bonifacio",
      "Negrar",
      "Pescantina",
      "Sona",
      "Bovolone",
    ],
    population: 926000,
    description:
      "Provincia di Verona: seconda provincia del Veneto per popolazione, tra il Lago di Garda e la pianura padana. Installazione fotovoltaico, infissi termici e ristrutturazioni a Verona, Villafranca, Legnago e in tutti i comuni veronesi con incentivi e detrazioni fiscali.",
  },
  {
    slug: "vicenza",
    name: "Vicenza",
    sigla: "VI",
    region: "Veneto",
    coordinates: { lat: 45.5455, lng: 11.5354 },
    isoCode: "IT-VI",
    comuniPrincipali: [
      "Vicenza",
      "Bassano del Grappa",
      "Schio",
      "Thiene",
      "Arzignano",
      "Valdagno",
      "Montecchio Maggiore",
      "Lonigo",
      "Malo",
      "Dueville",
    ],
    population: 862000,
    description:
      "Provincia di Vicenza: terra delle ville palladiane e di un tessuto produttivo dinamico. Servizi di fotovoltaico, infissi in PVC e alluminio e ristrutturazioni a Vicenza, Bassano del Grappa, Schio, Thiene e in tutta la provincia vicentina.",
  },
  {
    slug: "treviso",
    name: "Treviso",
    sigla: "TV",
    region: "Veneto",
    coordinates: { lat: 45.6669, lng: 12.243 },
    isoCode: "IT-TV",
    comuniPrincipali: [
      "Treviso",
      "Conegliano",
      "Castelfranco Veneto",
      "Montebelluna",
      "Vittorio Veneto",
      "Mogliano Veneto",
      "Oderzo",
      "Paese",
      "Villorba",
      "Casier",
    ],
    population: 888000,
    description:
      "Provincia di Treviso: area in forte espansione edilizia tra le colline del Prosecco e la pianura veneta. Fotovoltaico, infissi ad alta efficienza e ristrutturazioni a Treviso, Conegliano, Castelfranco Veneto e in tutto il trevigiano.",
  },
  {
    slug: "belluno",
    name: "Belluno",
    sigla: "BL",
    region: "Veneto",
    coordinates: { lat: 46.1426, lng: 12.2167 },
    isoCode: "IT-BL",
    comuniPrincipali: [
      "Belluno",
      "Feltre",
      "Cortina d'Ampezzo",
      "Sedico",
      "Ponte nelle Alpi",
      "Pieve di Cadore",
      "Agordo",
      "Santa Giustina",
    ],
    population: 198000,
    description:
      "Provincia di Belluno: territorio dolomitico dove isolamento termico e risparmio energetico sono prioritari. Impianti fotovoltaici, infissi a taglio termico e ristrutturazioni a Belluno, Feltre, Cortina d'Ampezzo e in tutta la provincia per affrontare i rigidi inverni montani.",
  },
  {
    slug: "rovigo",
    name: "Rovigo",
    sigla: "RO",
    region: "Veneto",
    coordinates: { lat: 45.0698, lng: 11.7901 },
    isoCode: "IT-RO",
    comuniPrincipali: [
      "Rovigo",
      "Adria",
      "Badia Polesine",
      "Lendinara",
      "Porto Viro",
      "Occhiobello",
      "Taglio di Po",
      "Rosolina",
    ],
    population: 234000,
    description:
      "Provincia di Rovigo: il Polesine offre ampie superfici ideali per il fotovoltaico e un patrimonio edilizio che necessita di riqualificazione. Infissi, fotovoltaico e ristrutturazioni a Rovigo, Adria, Badia Polesine e in tutto il territorio rodigino con accesso a bonus e incentivi.",
  },
];

/** Lookup rapido per slug */
export const provinciaBySlug = (slug: string): Provincia | undefined =>
  province.find((p) => p.slug === slug);

/** Filtra province per regione */
export const provinceByRegion = (region: Provincia["region"]): Provincia[] =>
  province.filter((p) => p.region === region);

/** Tutti gli slug disponibili */
export const provinceSlugs = province.map((p) => p.slug);
