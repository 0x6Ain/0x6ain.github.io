import type { SiteContent } from './types';

const it: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Sviluppatore Software',
    location: 'Seul, Corea del Sud',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      "Sviluppatore con esperienza in app mobili, servizi backend e infrastrutture cloud, sempre bilanciando esperienza utente ed efficienza operativa. Grazie a una solida comprensione dell'esperienza lato client, costruisco servizi affidabili attraverso design di API, modellazione dei dati, ottimizzazione delle prestazioni e automazione operativa.",
    yearsOfExperience: 4,
    yearsSuffix: ' anni',
  },
  nav: {
    impact: 'Impatto',
    experience: 'Esperienza',
    caseStudy: 'Caso studio',
    skills: 'Competenze',
    handbook: 'Manuale',
    contact: 'Contatti',
  },
  sectionLabels: {
    impact: 'Impatto',
    experience: 'Esperienza lavorativa',
    caseStudy: 'Caso studio',
    skills: 'Competenze',
    education: 'Formazione',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Utilizzo memoria Redis',
      value: '90% → 58%',
      detail: 'Ridotto lo ZSET di fan-out del feed dei seguiti alle ultime 500 voci per utente',
      direction: 'good',
    },
    {
      label: 'Latenza query core del DB',
      value: '1206ms → 13ms',
      detail: 'Colli di bottiglia diagnosticati con EXPLAIN ANALYZE e Prisma Middleware, indici e query ricostruiti',
      direction: 'good',
    },
    {
      label: 'Utenti attivi cumulati',
      value: '10.000+',
      detail: "Funzionamento stabile dopo la progettazione dell'architettura di raccomandazione e della pipeline dati",
      direction: 'neutral',
    },
    {
      label: 'Dispositivi embedded distribuiti',
      value: '150+',
      detail: "Sistema di automazione idroponica sviluppato internamente; ha contribuito a un round di finanziamento Pre-A",
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'mag 2025 - Presente',
      summary: 'Servizio di community online/offline basato sugli interessi',
      role: 'Ingegnere backend',
      highlights: [
        "Ridotto l'utilizzo di memoria Redis dal 90% al 58% limitando lo ZSET di fan-out del feed alle ultime 500 voci per utente",
        'Migliorate le prestazioni delle query core del DB di oltre il 92% (1206ms → 13ms) con strategia di indicizzazione e riscrittura delle query',
        'Progettata architettura di servizio e pipeline dati basate su raccomandazioni, al servizio stabile di oltre 10.000 utenti',
        'Migrata infrastruttura AWS a CDK (IaC) e riprogettati ruoli/policy IAM secondo il principio del privilegio minimo',
        'Standardizzato ambiente di test basato su Docker e automatizzati test unit/E2E e verifica della coverage con GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'set 2023 - ott 2024',
      summary: "App di community di moda basata su IA generativa",
      role: 'Sviluppatore di app mobili',
      highlights: [
        "Costruito un sistema di acquisti in-app (IAP) per rafforzare il modello di ricavi",
        "Implementato il deep linking per analizzare l'acquisizione utenti e migliorare l'efficienza di marketing",
        "Rifattorizzata la gestione dello stato per migliorare la comprensione del codice da parte del team e la manutenibilità",
        "Impostato il tracciamento dei crash dell'app e una base per l'analisi del comportamento degli utenti",
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'mag 2023 - ago 2023',
      summary: 'App di fan community per atleti professionisti',
      role: 'Sviluppatore di app mobili',
      highlights: [
        'Integrato il login social tramite Google, Apple e altre piattaforme',
        'Costruita gestione dei dati di localizzazione e pipeline di distribuzione',
        'Eseguite code review, test e miglioramenti per mantenere la qualità della codebase',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'set 2021 - apr 2023',
      summary: 'Servizio di ordini online',
      role: 'Database e sviluppo di nuovo server API',
      highlights: [
        "Introdotto un sistema di verifica dell'identità basato su Redis, migliorando velocità ed efficienza dell'autenticazione",
        'Costruite notifiche in tempo reale con Socket.IO',
        "Sviluppati server API per supportare integrazioni esterne e la scalabilità del servizio",
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Sistema di automazione idroponica',
    period: 'set 2021 - apr 2023',
    role: 'Sviluppo di sistema di automazione embedded',
    highlights: [
      'Progettato e sviluppato un sistema di automazione embedded ottimizzato per ambienti idroponici',
      'Implementata comunicazione basata su MQTT per la raccolta dati dai sensori e il controllo remoto delle apparecchiature',
      "Aggiunti aggiornamenti firmware OTA per migliorare la manutenibilità e la scalabilità dei dispositivi",
      "Guidato l'intero processo, dalla progettazione dei circuiti alla produzione PCB in outsourcing, fino a un MVP nella fase iniziale",
    ],
    achievements: ['Ha contribuito a un round di finanziamento Pre-A', 'Distribuiti oltre 150 dispositivi, incluse unità consegnate a un centro culturale'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Query core del DB del 92% più veloci',
      subtitle: '1206ms → 13ms — dall\'analisi dei colli di bottiglia alle correzioni strutturali in PostgreSQL',
      summary: 'Ho diagnosticato un collo di bottiglia di oltre 1200ms con EXPLAIN ANALYZE, ricostruito la strategia di indicizzazione e ridotto il tempo di risposta del 92%, riducendo anche l\'utilizzo di memoria Redis.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Problema',
        body: "La latenza della query principale del feed influiva direttamente sull'esperienza utente e aumentava il carico del server. Non era chiaro se la causa fosse la query stessa, l'assenza di indici o il modello dati.",
      },
      {
        label: 'Analisi',
        body: "Utilizzando EXPLAIN ANALYZE di PostgreSQL insieme a Prisma Middleware sono stati tracciati i piani di esecuzione delle query in produzione, visualizzando e analizzando le query più lente per individuare con precisione il collo di bottiglia.",
      },
      {
        label: 'Azione',
        body: "La strategia di indicizzazione è stata ricostruita in base al collo di bottiglia e sono state applicate correzioni strutturali: riscrittura delle query e ottimizzazione delle condizioni. Parallelamente, lo ZSET di fan-out del feed è stato limitato alle ultime 500 voci per utente, riducendo l'utilizzo di memoria Redis dal 90% al 58% e diminuendo il rischio di guasti.",
      },
      {
        label: 'Risultato',
          body: "Il tempo di risposta della query principale è sceso da 1206ms a 13ms, un miglioramento di oltre il 92%. Questo lavoro è diventato la base di un'architettura di raccomandazione e di una pipeline dati che oggi servono in modo stabile oltre 10.000 utenti.",
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migrazione dell\'infrastruttura AWS a CDK con IAM a privilegio minimo',
      subtitle: 'Da un\'infrastruttura gestita manualmente da console, con permessi ampi, a un\'infrastructure as code verificabile e a privilegio minimo',
      summary: 'Ho sostituito le modifiche manuali sulla console AWS con AWS CDK e riprogettato IAM secondo il privilegio minimo, rendendo le modifiche all\'infrastruttura verificabili e riducendo il raggio d\'impatto di eventuali credenziali compromesse.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problema',
          body: 'Le risorse AWS venivano create manualmente tramite console, quindi le modifiche non erano documentate ed erano difficili da riprodurre tra ambienti diversi. I ruoli IAM avevano inoltre un ambito troppo ampio, rendendo poco chiaro quali servizi potessero accedere a quali risorse, ampliando l\'impatto di eventuali credenziali compromesse.',
        },
        {
          label: 'Analisi',
          body: 'Ho verificato le policy IAM e le configurazioni delle risorse esistenti per mappare quali permessi fossero realmente necessari a ciascun servizio, individuando i punti in cui le modifiche manuali da console avevano causato disallineamenti tra staging e produzione.',
        },
        {
          label: 'Azione',
          body: 'Ho migrato le definizioni dell\'infrastruttura su AWS CDK, così che ogni modifica sia codice, venga rivista tramite pull request e sia riproducibile tra ambienti. In parallelo ho ricostruito ruoli e policy IAM per servizio secondo il privilegio minimo, al posto di permessi ampi condivisi.',
        },
        {
          label: 'Risultato',
          body: 'Le modifiche all\'infrastruttura seguono ora lo stesso processo di revisione del codice applicativo, il disallineamento tra staging e produzione è stato eliminato, e l\'impatto potenziale di una credenziale trapelata è limitato a un singolo servizio anziché all\'intero account.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep linking per l\'attribuzione dell\'acquisizione utenti',
      subtitle: 'Fornire al marketing dati di attribuzione per canale per migliorare l\'efficienza della spesa di acquisizione',
      summary: 'Ho integrato il deep linking di Branch.io in tutta l\'app affinché il marketing potesse attribuire installazioni e registrazioni a campagne specifiche, migliorando l\'efficienza della spesa di acquisizione.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problema',
          body: 'Il marketing non riusciva a capire quale campagna, link di invito o condivisione social generasse effettivamente un\'installazione o una registrazione, rendendo impossibile valutare in modo affidabile le performance per canale o giustificare la spesa di acquisizione.',
        },
        {
          label: 'Analisi',
          body: 'Ho mappato tutti i punti di ingresso nell\'app — link di campagna, link di invito, condivisioni social — e i dati di attribuzione necessari al marketing per ciascuno, incluso il deep linking differito per gli utenti che non avevano ancora installato l\'app.',
        },
        {
          label: 'Azione',
          body: 'Ho integrato Branch.io su iOS e Android, collegato i parametri dei link a eventi di attribuzione e collegato questi eventi alle dashboard di analytics del marketing.',
        },
        {
          label: 'Risultato',
          body: 'Il marketing ha ottenuto per la prima volta visibilità sull\'attribuzione per canale, permettendo decisioni basate sui dati su dove investire il budget di acquisizione invece di affidarsi a supposizioni.',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Munto",
      title: "Risoluzione dell'esplosione di memoria nella cache Redis priva di TTL",
      subtitle: "Utilizzo memoria della cache del feed Lounge: dal 90% al 58%",
      summary: "Nella cache Lounge di Munto, l'assenza di TTL faceva crescere indefinitamente le chiavi di alcuni utenti molto popolari, portando l'utilizzo della memoria Redis fino al 90%. Ho analizzato il problema in modo data-driven, campionando la distribuzione del numero di elementi per chiave e scoprendo che l'1% degli utenti più popolari occupava la quasi totalità della memoria. Ho quindi introdotto un cap di 500 elementi basato sul p90 e un rollout graduale, riducendo l'utilizzo della memoria al 58% senza effetti collaterali.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Problema",
          body: "La cache Lounge di Munto memorizzava il feed degli utenti seguiti da ciascun profilo, usato anche per mostrare i post popolari in aree in evidenza. L'utilizzo della memoria di questa cache Redis era salito fino al 90%. In precedenza i problemi venivano rilevati controllando manualmente una dashboard, ma da poco era stato messo in piedi un sistema di monitoraggio con CloudWatch Alarm → SNS → AWS Chatbot collegato a Slack, ed è stato proprio questo a far emergere il problema. Fortunatamente, fino a quel momento non c'erano stati impatti concreti come interruzioni del servizio o rallentamenti nelle risposte.",
        },
        {
          label: "Causa",
          body: "Indagando sulla causa, ho scoperto che il 60% dell'intera memoria era occupato da una sola chiave della cache: il feed di un utente con un numero molto elevato di follower. Questa chiave non aveva un TTL impostato, quindi i nuovi contenuti del feed venivano continuamente aggiunti (append) senza mai essere rimossi, facendola crescere all'infinito. Non era possibile risalire, dalla documentazione o dallo storico, al motivo per cui il codice legacy non prevedesse un TTL fin dall'inizio.",
        },
        {
          label: "Compromesso",
          body: "Ho scartato l'idea di aggiungere semplicemente un TTL, perché non era chiaro il motivo originario per cui non fosse stato previsto, e temevo effetti collaterali imprevisti. Ho escluso anche modifiche alla struttura delle chiavi o l'introduzione di limiti di dimensione della cache, perché avrebbero richiesto un impegno di sviluppo troppo elevato, così come l'aumento diretto della memoria dell'istanza cache, che avrebbe solo rimandato il problema lasciando che la struttura legacy continuasse ad accumularsi. Ho invece campionato la distribuzione del numero di elementi per chiave (2.015 chiavi: p50 = 48, p90 = 504, p99 = 2.195, massimo 22.415), confermando che l'1% degli utenti più popolari, tramite le proprie ZSET, occupava la maggior parte della memoria. Ho quindi concluso che restringere l'ambito del problema e applicare un rollout graduale fosse la soluzione più efficace rispetto alle risorse necessarie.",
        },
        {
          label: "Decisione",
          body: "Ho deciso di limitare (cap) il numero di elementi per chiave della cache a 500, in linea con il valore del p90. Sfruttando le caratteristiche delle ZSET, ho implementato un meccanismo di trim che rimuove i valori più vecchi quando arrivano nuovi elementi nel feed, lasciando invariate le chiavi esistenti e applicando il nuovo limite gradualmente solo alle chiavi create successivamente.",
        },
        {
          label: "Risultato",
          body: "Dopo l'applicazione della modifica, l'utilizzo della memoria Redis è sceso dal 90% al 58%. Dopo il rollout non sono emersi effetti collaterali, come lamentele degli utenti dovute al taglio dei feed più vecchi.",
        },
        {
          label: "Lezione appresa",
          body: "Ho imparato che, quando si introduce una cache, è fondamentale documentare esplicitamente i motivi delle scelte relative al TTL, così da facilitare l'analisi delle cause e gli interventi futuri. Ho stabilito il principio che, di fronte a configurazioni legacy prive di TTL, non bisogna aggiungerlo automaticamente, ma valutare a fondo i possibili effetti collaterali prima di intervenire. Ho anche verificato che aumentare semplicemente la memoria della cache non è una soluzione strutturale, perché permette solo all'architettura legacy di continuare ad accumularsi nel tempo.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Casi di studio',
    intro: "Uno sguardo più da vicino ad alcune decisioni: il problema che ho incontrato, come l'ho diagnosticato e perché ho scelto questa soluzione tra le alternative.",
    readMore: 'Leggi la storia completa',
    backToList: '← Tutti i casi di studio',
    viewAll: 'Vedi tutti i casi di studio',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Progettazione e sviluppo di server API di produzione',
        'Architettura di comunicazione in tempo reale (notifiche/autenticazione)',
        'Distribuzione e gestione su AWS',
      ],
    },
    {
      title: 'App',
      items: [
        'Sviluppate e gestite diverse app con Flutter',
        'Gestione dello stato: Bloc, Riverpod, GetX',
        'Chat in tempo reale, acquisti in-app, login social, localizzazione',
        "Integrazione di analisi del comportamento utente e reporting dei crash",
      ],
    },
  ],
  education: {
    school: 'Università di Kyung Hee',
    degree: 'Laurea in Ingegneria Meccanica',
    period: 'mar 2013 - feb 2020',
    notes: [
      'Analizzati dati di sensori inerziali (IMU) con Matlab per analisi dell\'andatura e visualizzazione del movimento scheletrico',
      'Premio di incoraggiamento dal gruppo di ricerca del progetto di laurea',
    ],
  },
  freelanceProjects: [
    {
      title: 'Supporto backend per piattaforma e-commerce',
      period: 'nov 2024 - gen 2025',
      points: [
        'Risolte incoerenze nel formato dei dati tra server e client, sviluppate nuove API (NestJS, MikroORM)',
        "Migliorata l'esperienza utente ottimizzando velocità di risposta delle API e prestazioni del server",
      ],
    },
    {
      title: "Sviluppo di app mobile di incontri",
      period: 'giu 2024 - ago 2024',
      points: [
        "Guidata l'app end-to-end: design, sviluppo, test e rilascio; implementati chat in tempo reale, gestione del profilo e verifica dell'identità (Flutter)",
        "Pubblicata su App Store/Google Play con iterazioni continue basate sul feedback degli utenti",
      ],
    },
    {
      title: 'Supporto allo sviluppo di app per la gestione della salute fisica e mentale',
      period: 'apr 2024 - lug 2024',
      points: ["Sviluppate visualizzazioni dei dati di salute fisica/mentale e migliorata la UI/UX in base al feedback degli utenti (Flutter)"],
    },
  ],
  contact: {
    heading: 'Contattami',
    description: 'Hai una proposta, un progetto o una domanda? Inviami un messaggio qui sotto.',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Messaggio',
    submitLabel: 'Invia messaggio',
    sendingLabel: 'Invio in corso…',
    successMessage: 'Messaggio inviato — ti risponderò presto.',
    errorMessage: 'Qualcosa è andato storto. Riprova oppure scrivimi direttamente via email.',
    orEmailDirectly: 'Oppure scrivimi direttamente a',
  },
  footer: {
    tagline: 'Dal mobile al backend, fino all\'infrastruttura.',
    rights: 'Tutti i diritti riservati.',
  },
};

export default it;
