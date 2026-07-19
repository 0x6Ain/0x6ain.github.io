import type { SiteContent } from './types';

const nl: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Softwareontwikkelaar',
    location: 'Seoul, Zuid-Korea',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Ontwikkelaar met ervaring in mobiele apps, backend-diensten en cloudinfrastructuur, waarbij ik altijd gebruikerservaring en operationele efficiëntie in balans houd. Dankzij een sterk begrip van de client-ervaring bouw ik betrouwbare diensten via API-ontwerp, datamodellering, prestatie-optimalisatie en operationele automatisering.',
    yearsOfExperience: 4,
    yearsSuffix: ' jaar',
  },
  nav: {
    impact: 'Impact',
    experience: 'Ervaring',
    caseStudy: 'Case study',
    skills: 'Vaardigheden',
    handbook: 'Handboek',
    contact: 'Contact',
  },
  sectionLabels: {
    impact: 'Impact',
    experience: 'Werkervaring',
    caseStudy: 'Case study',
    skills: 'Vaardigheden',
    education: 'Opleiding',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Redis-geheugengebruik',
      value: '90% → 58%',
      detail: 'De fan-out ZSET van de follow-feed teruggebracht tot de laatste 500 items per gebruiker',
      direction: 'good',
    },
    {
      label: 'Latentie van kern-DB-query\'s',
      value: '1206ms → 13ms',
      detail: 'Knelpunten gediagnosticeerd met EXPLAIN ANALYZE en Prisma Middleware, indexen en query\'s herbouwd',
      direction: 'good',
    },
    {
      label: 'Cumulatief aantal actieve gebruikers',
      value: '10.000+',
      detail: 'Stabiele werking na het ontwerpen van de aanbevelingsarchitectuur en datapijplijn',
      direction: 'neutral',
    },
    {
      label: 'Ingezette embedded apparaten',
      value: '150+',
      detail: 'Zelf ontwikkeld hydrocultuur-automatiseringssysteem; droeg bij aan een Pre-A-financieringsronde',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'mei 2025 - heden',
      summary: 'Interessegebaseerde online/offline communitydienst',
      role: 'Backend engineer',
      highlights: [
        'Redis-geheugengebruik verlaagd van 90% naar 58% door de fan-out ZSET van de follow-feed te beperken tot de laatste 500 items per gebruiker',
        'Prestaties van kern-DB-query\'s met meer dan 92% verbeterd (1206ms → 13ms) via indexstrategie en query-herschrijving',
        'Aanbevelingsgedreven service-architectuur en datapijplijn ontworpen, stabiel dienstverlenend aan 10.000+ gebruikers',
        'AWS-infrastructuur gemigreerd naar CDK (IaC) en IAM-rollen/-beleid herontworpen volgens het principe van minimale rechten',
        'Docker-gebaseerde testinfrastructuur gestandaardiseerd en unit-/E2E-tests en coverage-controles geautomatiseerd met GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'sep 2023 - okt 2024',
      summary: 'Modecommunity-app aangedreven door generatieve AI',
      role: 'Mobiele app-ontwikkelaar',
      highlights: [
        'In-app-aankoopsysteem (IAP) gebouwd om het verdienmodel te versterken',
        'Deep linking geïmplementeerd voor analyse van gebruikersacquisitie en verbeterde marketingefficiëntie',
        'State management gerefactored voor beter codebegrip en onderhoudbaarheid binnen het team',
        'App-crashtracking en een basis voor gebruikersgedraganalyse opgezet',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'mei 2023 - aug 2023',
      summary: 'Fancommunity-app voor professionele sporters',
      role: 'Mobiele app-ontwikkelaar',
      highlights: [
        'Social login via Google, Apple en andere platforms geïntegreerd',
        'Databeheer voor lokalisatie en deploymentpijplijnen opgezet',
        'Codereviews, tests en verbeteringen uitgevoerd om codekwaliteit te behouden',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'sep 2021 - apr 2023',
      summary: 'Online bestelservice',
      role: 'Database- en nieuwe API-serverontwikkeling',
      highlights: [
        'Redis-gebaseerd identiteitsverificatiesysteem geïntroduceerd, wat de snelheid en efficiëntie van authenticatie verbeterde',
        'Realtime notificaties gebouwd met Socket.IO',
        'API-servers ontwikkeld ter ondersteuning van externe integraties en schaalbaarheid van de dienst',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Hydrocultuur-automatiseringssysteem',
    period: 'sep 2021 - apr 2023',
    role: 'Ontwikkeling van embedded automatiseringssysteem',
    highlights: [
      'Embedded automatiseringssysteem ontworpen en ontwikkeld, geoptimaliseerd voor hydrocultuuromgevingen',
      'MQTT-gebaseerde communicatie geïmplementeerd voor sensordataverzameling en afstandsbediening van apparatuur',
      'OTA-firmware-updates toegevoegd om onderhoudbaarheid en schaalbaarheid van apparaten te verbeteren',
      'Het volledige proces geleid, van circuitontwerp tot uitbestede PCB-productie, tot een vroege MVP',
    ],
    achievements: ['Bijgedragen aan een Pre-A-financieringsronde', '150+ apparaten ingezet, inclusief units geleverd aan een cultureel centrum'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: '92% snellere kern-DB-query\'s',
      subtitle: '1206ms → 13ms — van knelpuntanalyse tot structurele verbeteringen in PostgreSQL',
      summary: 'Met EXPLAIN ANALYZE een knelpunt van meer dan 1200ms gediagnosticeerd, de indexstrategie herbouwd en de responstijd met 92% verlaagd, terwijl ook het Redis-geheugengebruik daalde.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Probleem',
        body: 'De latentie van de kernfeed-query beïnvloedde direct de gebruikerservaring en verhoogde de serverbelasting. Het was onduidelijk of de oorzaak in de query zelf lag, ontbrekende indexen, of het datamodel.',
      },
      {
        label: 'Analyse',
        body: 'Met EXPLAIN ANALYZE van PostgreSQL samen met Prisma Middleware werden uitvoeringsplannen van productiequery\'s getraceerd, en de traagste query\'s werden gevisualiseerd en gerapporteerd om het exacte knelpunt te identificeren.',
      },
      {
        label: 'Actie',
        body: 'De indexstrategie werd herbouwd op basis van het knelpunt en structurele verbeteringen werden toegepast — query-herschrijving en conditieoptimalisatie. Tegelijkertijd werd de fan-out ZSET van de follow-feed beperkt tot de laatste 500 items per gebruiker, waardoor het Redis-geheugengebruik daalde van 90% naar 58% en het risico op storingen afnam.',
      },
      {
        label: 'Resultaat',
          body: 'De responstijd van de kernquery daalde van 1206ms naar 13ms — een verbetering van meer dan 92%. Dit werk vormde de basis voor een aanbevelingsarchitectuur en datapijplijn die nu stabiel meer dan 10.000 gebruikers bedient.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'AWS-infrastructuur migreren naar CDK met least-privilege IAM',
      subtitle: 'Van handmatig via de console beheerde infrastructuur met brede rechten naar reviewbare infrastructure as code volgens het principe van minimale rechten',
      summary: 'Handmatige wijzigingen in de AWS-console vervangen door AWS CDK en IAM opnieuw ontworpen rond minimale rechten, waardoor infrastructuurwijzigingen reviewbaar werden en de impact van een gecompromitteerde credential kleiner werd.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Probleem',
          body: 'AWS-resources werden handmatig via de console aangemaakt, waardoor wijzigingen niet werden gedocumenteerd en moeilijk te reproduceren waren tussen omgevingen. IAM-rollen hadden bovendien een te brede scope, waardoor onduidelijk was welke services toegang hadden tot welke resources — en de impact van een gecompromitteerde credential toenam.',
        },
        {
          label: 'Analyse',
          body: 'De bestaande IAM-policies en resourceconfiguraties geaudit om in kaart te brengen welke rechten elke service werkelijk nodig had, en vastgesteld waar handmatige consolewijzigingen tot verschillen (environment drift) tussen staging en productie hadden geleid.',
        },
        {
          label: 'Actie',
          body: 'De infrastructuurdefinities gemigreerd naar AWS CDK, zodat elke wijziging code is, via pull requests wordt gereviewd en reproduceerbaar is tussen omgevingen. Tegelijkertijd de IAM-rollen en -policies per service opnieuw opgebouwd volgens minimale rechten in plaats van gedeelde brede rechten.',
        },
        {
          label: 'Resultaat',
          body: 'Infrastructuurwijzigingen doorlopen nu hetzelfde reviewproces als applicatiecode, de drift tussen staging en productie is verdwenen, en de potentiële impact van een gelekte credential blijft beperkt tot één service in plaats van het hele account.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep linking voor attributie van gebruikersacquisitie',
      subtitle: 'Marketing attributiedata per kanaal geven om de efficiëntie van het acquisitiebudget te verbeteren',
      summary: 'Branch.io deep linking geïntegreerd in de hele app zodat marketing installaties en aanmeldingen aan specifieke campagnes kon toeschrijven, wat de efficiëntie van het acquisitiebudget verbeterde.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Probleem',
          body: 'Marketing kon niet bepalen welke campagne, verwijzingslink of social share daadwerkelijk een installatie of aanmelding opleverde, waardoor er geen betrouwbare manier was om kanaalprestaties te beoordelen of het acquisitiebudget te verantwoorden.',
        },
        {
          label: 'Analyse',
          body: 'Alle toegangspunten tot de app in kaart gebracht — campagnelinks, uitnodigingslinks, social shares — en de attributiedata die marketing voor elk nodig had, inclusief deferred deep linking voor gebruikers die de app nog niet hadden geïnstalleerd.',
        },
        {
          label: 'Actie',
          body: 'Branch.io geïntegreerd op iOS en Android, linkparameters gekoppeld aan attributie-events, en die events verbonden met de analytics-dashboards van marketing.',
        },
        {
          label: 'Resultaat',
          body: 'Marketing kreeg voor het eerst inzicht in attributie per kanaal, waardoor datagedreven beslissingen over de besteding van het acquisitiebudget mogelijk werden in plaats van giswerk.',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Casestudy\'s',
    intro: 'Een nadere blik op een paar beslissingen — het probleem waar ik tegenaan liep, hoe ik het diagnosticeerde, en waarom ik voor deze aanpak koos boven de alternatieven.',
    readMore: 'Lees het volledige verhaal',
    backToList: '← Alle casestudy\'s',
    viewAll: 'Bekijk alle casestudy\'s',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Ontwerp en ontwikkeling van productie-API-servers',
        'Architectuur voor realtime communicatie (notificaties/authenticatie)',
        'Deployment en beheer op AWS',
      ],
    },
    {
      title: 'App',
      items: [
        'Meerdere apps ontwikkeld en beheerd met Flutter',
        'State management: Bloc, Riverpod, GetX',
        'Realtime chat, in-app-aankopen, social login, lokalisatie',
        'Integratie van gebruikersgedraganalyse en crashrapportage',
      ],
    },
  ],
  education: {
    school: 'Kyung Hee Universiteit',
    degree: 'Bachelor Werktuigbouwkunde',
    period: 'mrt 2013 - feb 2020',
    notes: [
      'IMU-sensordata geanalyseerd in Matlab voor gang-analyse en visualisatie van skeletbewegingen',
      'Aanmoedigingsprijs ontvangen van de onderzoeksgroep voor het afstudeerproject',
    ],
  },
  freelanceProjects: [
    {
      title: 'Backend-ondersteuning voor e-commerceplatform',
      period: 'nov 2024 - jan 2025',
      points: [
        'Dataformaatinconsistenties tussen server en client opgelost en nieuwe API\'s ontwikkeld (NestJS, MikroORM)',
        'Gebruikerservaring verbeterd door API-responssnelheid en serverprestaties te optimaliseren',
      ],
    },
    {
      title: 'Ontwikkeling van mobiele datingapp',
      period: 'jun 2024 - aug 2024',
      points: [
        'De app end-to-end geleid: ontwerp, ontwikkeling, testen en release; realtime chat, profielbeheer en identiteitsverificatie geïmplementeerd (Flutter)',
        'Uitgebracht op App Store/Google Play en continu geïtereerd op basis van gebruikersfeedback',
      ],
    },
    {
      title: 'Ontwikkelingsondersteuning voor app voor fysieke en mentale gezondheid',
      period: 'apr 2024 - jul 2024',
      points: ['Visualisaties van fysieke/mentale gezondheidsdata ontwikkeld en UI/UX verbeterd op basis van gebruikersfeedback (Flutter)'],
    },
  ],
  contact: {
    heading: 'Neem contact op',
    description: 'Heb je een project, functie of vraag in gedachten? Stuur hieronder een bericht.',
    namePlaceholder: 'Naam',
    emailPlaceholder: 'E-mail',
    messagePlaceholder: 'Bericht',
    submitLabel: 'Bericht versturen',
    sendingLabel: 'Versturen…',
    successMessage: 'Bericht verzonden — ik reageer snel.',
    errorMessage: 'Er is iets misgegaan. Probeer het opnieuw of mail me rechtstreeks.',
    orEmailDirectly: 'Of mail me rechtstreeks naar',
  },
  footer: {
    tagline: 'Van mobile naar backend, tot infrastructuur.',
    rights: 'Alle rechten voorbehouden.',
  },
};

export default nl;
