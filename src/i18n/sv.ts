import type { SiteContent } from './types';

const sv: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Mjukvaruutvecklare',
    location: 'Seoul, Sydkorea',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Utvecklare med erfarenhet av mobilappar, backend-tjänster och molninfrastruktur, som alltid balanserar användarupplevelse med driftseffektivitet. Med god förståelse för klientupplevelsen bygger jag pålitliga tjänster genom API-design, datamodellering, prestandaoptimering och driftautomatisering.',
    yearsOfExperience: 4,
    yearsSuffix: ' år',
  },
  nav: {
    impact: 'Effekt',
    experience: 'Erfarenhet',
    caseStudy: 'Fallstudie',
    skills: 'Kompetens',
    handbook: 'Handbok',
    contact: 'Kontakt',
  },
  sectionLabels: {
    impact: 'Effekt',
    experience: 'Arbetslivserfarenhet',
    caseStudy: 'Fallstudie',
    skills: 'Kompetens',
    education: 'Utbildning',
    freelance: 'Frilans',
  },
  impactStats: [
    {
      label: 'Redis-minnesanvändning',
      value: '90% → 58%',
      detail: 'Trimmade fan-out-ZSET för följarflödet till de senaste 500 posterna per användare',
      direction: 'good',
    },
    {
      label: 'Latens för centrala DB-frågor',
      value: '1206ms → 13ms',
      detail: 'Diagnostiserade flaskhalsar med EXPLAIN ANALYZE och Prisma Middleware, byggde om index och frågor',
      direction: 'good',
    },
    {
      label: 'Ackumulerade aktiva användare',
      value: '10 000+',
      detail: 'Stabil drift efter design av rekommendationsarkitektur och datapipeline',
      direction: 'neutral',
    },
    {
      label: 'Utplacerade inbyggda enheter',
      value: '150+',
      detail: 'Egenutvecklat automationssystem för hydroponi; bidrog till en Pre-A-finansieringsrunda',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'maj 2025 - nutid',
      summary: 'Intressebaserad online-/offlinecommunitytjänst',
      role: 'Backend-ingenjör',
      highlights: [
        'Minskade Redis-minnesanvändningen från 90% till 58% genom att begränsa följarflödets fan-out-ZSET till de senaste 500 posterna per användare',
        'Förbättrade prestandan för centrala DB-frågor med över 92% (1206ms → 13ms) genom indexstrategi och omskrivning av frågor',
        'Designade en rekommendationsdriven tjänstearkitektur och datapipeline som stabilt betjänar 10 000+ användare',
        'Migrerade AWS-infrastrukturen till CDK (IaC) och omdesignade IAM-roller/policyer enligt principen om minsta möjliga behörighet',
        'Standardiserade en Docker-baserad testmiljö och automatiserade enhets-/E2E-tester samt täckningskontroller med GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'sep 2023 - okt 2024',
      summary: 'Modecommunity-app driven av generativ AI',
      role: 'Mobilapputvecklare',
      highlights: [
        'Byggde ett köp-i-app-system (IAP) för att stärka intäktsmodellen',
        'Implementerade deep linking för att analysera användarförvärv och förbättra marknadsföringseffektiviteten',
        'Refaktorerade tillståndshantering för att förbättra teamets kodförståelse och underhållbarhet',
        'Satte upp kraschspårning för appen och en grund för analys av användarbeteende',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'maj 2023 - aug 2023',
      summary: 'Fancommunity-app för professionella idrottare',
      role: 'Mobilapputvecklare',
      highlights: [
        'Integrerade social inloggning via Google, Apple och andra plattformar',
        'Byggde datahantering för lokalisering och driftsättningspipelines',
        'Genomförde kodgranskningar, tester och förbättringar för att upprätthålla kodkvaliteten',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'sep 2021 - apr 2023',
      summary: 'Onlinebeställningstjänst',
      role: 'Databas- och utveckling av ny API-server',
      highlights: [
        'Introducerade ett Redis-baserat identitetsverifieringssystem som förbättrade hastighet och effektivitet i autentiseringen',
        'Byggde realtidsnotifieringar med Socket.IO',
        'Utvecklade API-servrar för att stödja externa integrationer och tjänstens skalbarhet',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Automationssystem för hydroponi',
    period: 'sep 2021 - apr 2023',
    role: 'Utveckling av inbyggt automationssystem',
    highlights: [
      'Designade och utvecklade ett inbyggt automationssystem optimerat för hydroponiska miljöer',
      'Implementerade MQTT-baserad kommunikation för sensordatainsamling och fjärrstyrning av utrustning',
      'Lade till OTA-uppdateringar av firmware för att förbättra underhållbarhet och enhetsskalbarhet',
      'Ledde hela processen från kretsdesign till utlagd PCB-tillverkning, fram till en tidig MVP',
    ],
    achievements: ['Bidrog till en Pre-A-finansieringsrunda', 'Driftsatte 150+ enheter, inklusive enheter levererade till ett kulturcenter'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: '92% snabbare centrala DB-frågor',
      subtitle: '1206ms → 13ms — från flaskhalsanalys till strukturella fixar i PostgreSQL',
      summary: 'Diagnostiserade en flaskhals på över 1200ms med EXPLAIN ANALYZE, byggde om indexstrategin och minskade svarstiden med 92% samtidigt som Redis-minnesanvändningen minskade.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Problem',
        body: 'Latensen i den centrala flödesfrågan påverkade direkt användarupplevelsen och ökade serverbelastningen. Det var oklart om grundorsaken var själva frågan, saknade index eller datamodellen.',
      },
      {
        label: 'Analys',
        body: 'Med PostgreSQLs EXPLAIN ANALYZE tillsammans med Prisma Middleware spårades exekveringsplaner för produktionsfrågor, och de långsammaste frågorna visualiserades och rapporterades för att exakt identifiera flaskhalsen.',
      },
      {
        label: 'Åtgärd',
        body: 'Indexstrategin byggdes om utifrån flaskhalsen och strukturella fixar tillämpades — omskrivning av frågor och villkorsoptimering. Parallellt begränsades följarflödets fan-out-ZSET till de senaste 500 posterna per användare, vilket sänkte Redis-minnesanvändningen från 90% till 58% och minskade risken för driftstopp.',
      },
      {
        label: 'Resultat',
          body: 'Svarstiden för den centrala frågan sjönk från 1206ms till 13ms — en förbättring på över 92%. Detta arbete blev grunden för en rekommendationsarkitektur och datapipeline som idag stabilt betjänar 10 000+ användare.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migrering av AWS-infrastruktur till CDK med IAM enligt minsta möjliga behörighet',
      subtitle: 'Från konsolhanterad infrastruktur med breda behörigheter till granskningsbar infrastructure as code enligt principen om minsta möjliga behörighet',
      summary: 'Ersatte manuella ändringar i AWS-konsolen med AWS CDK och omdesignade IAM enligt minsta möjliga behörighet, vilket gjorde infrastrukturändringar granskningsbara och minskade omfattningen av skadan vid en komprometterad autentiseringsuppgift.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problem',
          body: 'AWS-resurser tillhandahölls manuellt via konsolen, så ändringar dokumenterades inte och var svåra att reproducera mellan miljöer. IAM-roller hade dessutom för brett omfång, vilket gjorde det oklart vilka tjänster som kunde komma åt vilka resurser — och förstorade konsekvenserna av en komprometterad autentiseringsuppgift.',
        },
        {
          label: 'Analys',
          body: 'Granskade befintliga IAM-policyer och resurskonfigurationer för att kartlägga vilka behörigheter varje tjänst faktiskt behövde, och identifierade var manuella konsoländringar hade orsakat skillnader (environment drift) mellan staging och produktion.',
        },
        {
          label: 'Åtgärd',
          body: 'Migrerade infrastrukturdefinitionerna till AWS CDK så att varje ändring är kod, granskas via pull requests och är reproducerbar mellan miljöer. Parallellt byggdes IAM-roller och -policyer om per tjänst enligt minsta möjliga behörighet i stället för delade breda behörigheter.',
        },
        {
          label: 'Resultat',
          body: 'Infrastrukturändringar går nu genom samma granskningsprocess som applikationskod, driften mellan staging och produktion har eliminerats, och den potentiella skadan av en läckt autentiseringsuppgift begränsas till en enda tjänst i stället för hela kontot.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep linking för attribution av användarförvärv',
      subtitle: 'Ge marknadsföringen attributionsdata per kanal för att förbättra effektiviteten i förvärvsbudgeten',
      summary: 'Integrerade Branch.io deep linking i hela appen så att marknadsföringen kunde attribuera installationer och registreringar till specifika kampanjer, vilket förbättrade effektiviteten i förvärvsbudgeten.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problem',
          body: 'Marknadsföringen kunde inte avgöra vilken kampanj, remisslänk eller social delning som faktiskt ledde till en installation eller registrering, så det fanns inget tillförlitligt sätt att bedöma kanalprestanda eller motivera förvärvsutgifter.',
        },
        {
          label: 'Analys',
          body: 'Kartlade alla ingångar till appen — kampanjlänkar, inbjudningslänkar, sociala delningar — och den attributionsdata marknadsföringen behövde för var och en, inklusive deferred deep linking för användare som ännu inte hade installerat appen.',
        },
        {
          label: 'Åtgärd',
          body: 'Integrerade Branch.io på iOS och Android, kopplade länkparametrar till attributionshändelser och anslöt dessa händelser till marknadsföringens analysdashboards.',
        },
        {
          label: 'Resultat',
          body: 'Marknadsföringen fick för första gången insyn i attribution per kanal, vilket möjliggjorde datadrivna beslut om var förvärvsbudgeten skulle läggas i stället för gissningar.',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Munto",
      title: "Lösning av minnesexplosion i Redis-cache utan TTL",
      subtitle: "Minnesanvändning i lounge-feedens cache sänkt från 90 % till 58 %",
      summary: "I Muntos lounge-cache saknades TTL, vilket gjorde att nycklar för enskilda populära användare växte obegränsat och drev Redis-minnesanvändningen upp till 90 %. Problemet analyserades datadrivet: genom att sampla fördelningen av antal element per nyckel kunde vi fastställa att den översta procenten av användarnycklar stod för merparten av minnesanvändningen. Åtgärden blev ett tak på 500 element baserat på p90 samt en gradvis utrullning. Resultatet blev en minskning av minnesanvändningen till 58 % utan några negativa bieffekter.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Problem",
          body: "Muntos lounge-cache i Redis lagrade feed-innehåll från konton en användare följer och visade det i utvalda ytor som \"populära inlägg\". Minnesanvändningen för denna cache steg till 90 %. Tidigare upptäcktes den här typen av problem genom manuell kontroll av dashboards, men efter att vi byggt upp en larmkedja från CloudWatch Alarm via SNS och AWS Chatbot till Slack kunde vi fånga upp problemet automatiskt. Lyckligtvis hade det vid det här laget ännu inte lett till några konkreta driftstörningar eller fördröjda svarstider.",
        },
        {
          label: "Cause",
          body: "Felsökningen visade att 60 % av det totala minnet användes av en enda cache-nyckel. Nyckeln tillhörde en populär användare med många följare, och eftersom ingen TTL var satt fortsatte nya feed-poster att läggas till (append) utan gräns, vilket fick nyckeln att växa obegränsat. Varför TTL saknades i den ursprungliga legacy-koden gick inte att fastställa i efterhand.",
        },
        {
          label: "Trade-off",
          body: "Att bara lägga till en TTL avfärdades eftersom det var oklart varför designen ursprungligen saknade TTL, vilket gjorde risken för oförutsedda bieffekter svår att bedöma. En omstrukturering av nyckeldesignen eller en generell storleksbegränsning i cachen bedömdes kräva för mycket utvecklingsresurser och valdes bort. Att bara utöka minnet i cache-instansen övervägdes också, men avfärdades eftersom det bara skulle låta den underliggande legacy-strukturen fortsätta växa. Istället samplade vi fördelningen av antal element per nyckel (2 015 nycklar: p50 = 48, p90 = 504, p99 = 2 195, max = 22 415) och bekräftade att den översta procenten av användarnas ZSET-nycklar stod för merparten av minnesanvändningen. Att begränsa omfånget och rulla ut gradvis bedömdes ge bäst effekt i förhållande till insatsen.",
        },
        {
          label: "Decision",
          body: "Vi beslutade att sätta ett tak på 500 element per cache-nyckel, baserat på p90-värdet. Genom att utnyttja ZSET:s egenskaper implementerades det så att de äldsta värdena trimmades bort först när ny feed-data kom in. Befintliga nycklar lämnades orörda, och begränsningen rullades ut gradvis för nya nycklar som tillkom därefter.",
        },
        {
          label: "Result",
          body: "Efter att ändringen införts sjönk Redis minnesanvändning från 90 % till 58 %. Inga negativa bieffekter, till exempel användarklagomål på grund av att äldre feed-innehåll trimmades bort, har hittills observerats efter utrullningen.",
        },
        {
          label: "Lesson",
          body: "Jag lärde mig att motiveringen bakom en TTL-inställning bör dokumenteras redan när en cache införs, eftersom det gör framtida felsökning och åtgärder betydligt enklare. Jag satte också principen att man vid legacy-konfigurationer utan TTL inte ska lägga till TTL rakt av, utan först noggrant utvärdera potentiella bieffekter. Dessutom blev det tydligt att den enkla lösningen att bara utöka cacheminnet inte är en verklig lösning, eftersom den bara låter den underliggande legacy-strukturen fortsätta växa.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Fallstudier',
    intro: 'En närmare titt på några beslut — problemet jag stötte på, hur jag diagnostiserade det och varför jag valde just den här lösningen bland alternativen.',
    readMore: 'Läs hela historien',
    backToList: '← Alla fallstudier',
    viewAll: 'Visa alla fallstudier',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Design och utveckling av produktions-API-servrar',
        'Arkitektur för realtidskommunikation (notiser/autentisering)',
        'Driftsättning och drift på AWS',
      ],
    },
    {
      title: 'App',
      items: [
        'Utvecklade och drev flera appar med Flutter',
        'Tillståndshantering: Bloc, Riverpod, GetX',
        'Realtidschatt, köp i app, social inloggning, lokalisering',
        'Integration av användarbeteendeanalys och kraschrapportering',
      ],
    },
  ],
  education: {
    school: 'Kyung Hee University',
    degree: 'Kandidatexamen i maskinteknik',
    period: 'mar 2013 - feb 2020',
    notes: [
      'Analyserade IMU-sensordata i Matlab för gånganalys och visualisering av skelettrörelse',
      'Fick ett uppmuntranspris från forskningsgruppen för examensarbetet',
    ],
  },
  freelanceProjects: [
    {
      title: 'Backend-utvecklingsstöd för e-handelsplattform',
      period: 'nov 2024 - jan 2025',
      points: [
        'Löste dataformatinkonsekvenser mellan server och klient och utvecklade nya API:er (NestJS, MikroORM)',
        'Förbättrade användarupplevelsen genom att optimera API-svarstid och serverprestanda',
      ],
    },
    {
      title: 'Utveckling av mobil dejtingapp',
      period: 'jun 2024 - aug 2024',
      points: [
        'Ledde appen från design, utveckling och testning till lansering; implementerade realtidschatt, profilhantering och identitetsverifiering (Flutter)',
        'Publicerade på App Store/Google Play och itererade kontinuerligt utifrån användarfeedback',
      ],
    },
    {
      title: 'Utvecklingsstöd för app för fysisk och mental hälsa',
      period: 'apr 2024 - jul 2024',
      points: ['Utvecklade visualiseringar av fysisk/mental hälsodata och förbättrade UI/UX utifrån användarfeedback (Flutter)'],
    },
  ],
  contact: {
    heading: 'Kontakta mig',
    description: 'Har du ett projekt, en roll eller en fråga i åtanke? Skicka ett meddelande nedan.',
    namePlaceholder: 'Namn',
    emailPlaceholder: 'E-post',
    messagePlaceholder: 'Meddelande',
    submitLabel: 'Skicka meddelande',
    sendingLabel: 'Skickar…',
    successMessage: 'Meddelandet är skickat — jag återkommer snart.',
    errorMessage: 'Något gick fel. Försök igen eller mejla mig direkt.',
    orEmailDirectly: 'Eller mejla mig direkt på',
  },
  footer: {
    tagline: 'Från mobil till backend, till infrastruktur.',
    rights: 'Alla rättigheter förbehållna.',
  },
};

export default sv;
