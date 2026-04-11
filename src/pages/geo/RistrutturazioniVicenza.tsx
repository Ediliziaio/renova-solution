import GeoServicePage from './GeoServicePage';

export default function RistrutturazioniVicenza() {
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
      servizio="ristrutturazioni"
      heroTitle="Ristrutturazioni a Vicenza: chiavi in mano, senza sorprese"
      heroSubtitle="Ristrutturazione completa di ville palladiane, appartamenti, bagni e facciate a Vicenza e provincia. Efficientamento energetico, cappotto termico e bonus 50%."
      seoTitle="Ristrutturazioni Vicenza | Ristrutturazione Casa Vicenza | Renova Solution"
      seoDescription="Ristrutturazioni a Vicenza e provincia: ville, appartamenti, bagni, cucine e cappotto termico. Bonus 50% e risparmio energetico. Preventivo gratuito Renova."
      seoKeywords="ristrutturazioni vicenza, ristrutturazione casa vicenza, ristrutturazione bagno vicenza, impresa ristrutturazioni vicenza, bonus ristrutturazione vicenza, ristrutturazione appartamento vicenza"
      introText="La provincia di Vicenza custodisce un patrimonio architettonico straordinario: le ville palladiane patrimonio UNESCO, i centri storici di Bassano del Grappa e Marostica, e un tessuto residenziale diffuso — da Schio a Thiene, da Arzignano a Lonigo — composto da villette bifamiliari e condomini costruiti nel boom economico degli anni '60-'80, quando l'isolamento termico non era una priorità progettuale. Ristrutturare a Vicenza significa coniugare rispetto per la tradizione e innovazione tecnologica.

Il patrimonio palladiano e le ville venete del vicentino richiedono interventi di restauro conservativo che preservino le proporzioni, i materiali e i dettagli originali, integrandoli con soluzioni impiantistiche moderne e invisibili. Per le abitazioni più recenti della pianura e della pedemontana, la priorità è l'efficientamento energetico: cappotto termico, sostituzione degli impianti e nuovi serramenti per abbattere consumi che oggi pesano sempre di più sulle famiglie.

Renova Solution opera su tutta la provincia di Vicenza con un servizio di ristrutturazione chiavi in mano. Dal sopralluogo iniziale alla consegna, gestiamo ogni aspetto: progettazione architettonica, pratiche edilizie, coordinamento delle maestranze, fornitura materiali e gestione completa del bonus ristrutturazione 50%. Un solo interlocutore per tutto il progetto."
      benefici={[
        'Competenza nel restauro di ville storiche e patrimonio palladiano con tecniche e materiali compatibili',
        'Bonus ristrutturazione 50% con gestione integrale di CILA/SCIA, pratica ENEA e documentazione fiscale',
        'Cappotto termico per villette e condomini della provincia: risparmio energetico certificato fino al 45%',
        'Rifacimento bagni e cucine con design italiano, sanitari di marca e consegna garantita in 12-18 giorni',
        'Adeguamento sismico e strutturale per edifici costruiti prima delle normative antisismiche del 2008',
        'Garanzia decennale su strutture e quinquennale su finiture, con referente dedicato e assistenza post-lavori'
      ]}
      dettaglioServizio="Il nostro approccio alla ristrutturazione a Vicenza parte dall'ascolto: durante il sopralluogo tecnico gratuito analizziamo lo stato dell'immobile, raccogliamo le esigenze della famiglia e proponiamo un progetto su misura con rendering 3D, computo metrico dettagliato e cronoprogramma vincolante. Il preventivo è definitivo: nessuna variazione in corso d'opera se non espressamente richiesta dal cliente.

Per le ville palladiane e gli edifici storici del vicentino utilizziamo tecniche di restauro conservativo: intonaci a calce, pavimenti in terrazzo alla veneziana, serramenti in legno con ferramenta artigianale. L'impiantistica moderna — riscaldamento a pavimento, VMC, domotica — viene integrata in modo invisibile per non alterare l'estetica degli ambienti. Ogni intervento è coordinato con la Soprintendenza quando richiesto dai vincoli.

Per le abitazioni residenziali di Schio, Thiene, Arzignano, Valdagno e della pedemontana vicentina, proponiamo ristrutturazioni complete focalizzate sull'efficienza energetica: cappotto termico in EPS o fibra di legno, sostituzione caldaia con pompa di calore, impianto fotovoltaico integrato, nuovi serramenti ad alte prestazioni. Il risultato è un salto di almeno due classi energetiche con un risparmio concreto in bolletta.

La gestione burocratica è inclusa nel servizio: apertura pratica edilizia, comunicazione all'ASL, pratica ENEA per gli interventi di efficientamento, e assistenza completa per la corretta fruizione del bonus ristrutturazione 50% con detrazione in 10 rate annuali."
      faqs={[
        { question: 'Quanto costa ristrutturare un appartamento a Vicenza?', answer: "Una ristrutturazione completa in provincia di Vicenza costa mediamente tra 550 e 950 €/mq. Per un appartamento di 90 mq il budget indicativo è di 50.000-75.000€. Per le ville storiche i costi sono superiori per la specificità dei materiali e delle lavorazioni. Il bonus 50% dimezza la spesa effettiva in 10 anni." },
        { question: 'Ristrutturate ville palladiane e edifici vincolati a Vicenza?', answer: "Sì, abbiamo esperienza specifica nel restauro di ville storiche e edifici vincolati in provincia di Vicenza. Utilizziamo materiali e tecniche compatibili con il patrimonio architettonico e ci occupiamo di tutte le autorizzazioni necessarie dalla Soprintendenza. L'impiantistica moderna viene integrata in modo discreto e reversibile." },
        { question: 'Il cappotto termico è adatto alle case del vicentino?', answer: "Il clima della provincia di Vicenza, con inverni rigidi in pedemontana e pianura umida, rende il cappotto termico estremamente vantaggioso. Per una villetta bifamiliare tipo degli anni '70 a Thiene o Schio, l'investimento si ripaga in 6-8 anni grazie al risparmio in bolletta, ancor prima considerando il bonus 50%." },
        { question: 'Quali permessi servono per ristrutturare a Vicenza?', answer: "Per interventi interni senza modifiche strutturali basta la CILA. Per opere strutturali, modifiche ai prospetti o ampliamenti serve la SCIA o il permesso di costruire. Renova Solution gestisce tutte le pratiche con il Comune di Vicenza o il comune competente, liberandovi da ogni incombenza burocratica." }
      ]}
      ctaText="Descrivi il tuo progetto a Vicenza"
    />
  );
}
