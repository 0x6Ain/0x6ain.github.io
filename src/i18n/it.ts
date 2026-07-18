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
  caseStudy: {
    company: 'Munto',
    title: 'Query core del DB del 92% più veloci',
    subtitle: '1206ms → 13ms — dall\'analisi dei colli di bottiglia alle correzioni strutturali in PostgreSQL',
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
  footer: {
    tagline: 'Dal mobile al backend, fino all\'infrastruttura.',
    rights: 'Tutti i diritti riservati.',
  },
};

export default it;
