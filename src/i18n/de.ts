import type { SiteContent } from './types';

const de: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Softwareentwickler',
    location: 'Seoul, Südkorea',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Entwickler mit Erfahrung in mobilen Apps, Backend-Diensten und Cloud-Infrastruktur, der stets Nutzererfahrung und Betriebseffizienz miteinander verbindet. Mit einem fundierten Verständnis der Client-Erfahrung baue ich zuverlässige Services durch API-Design, Datenmodellierung, Performance-Optimierung und Betriebsautomatisierung.',
    yearsOfExperience: 4,
    yearsSuffix: ' Jahre',
  },
  nav: {
    impact: 'Wirkung',
    experience: 'Erfahrung',
    caseStudy: 'Fallstudie',
    skills: 'Fähigkeiten',
    handbook: 'Handbuch',
    contact: 'Kontakt',
  },
  sectionLabels: {
    impact: 'Wirkung',
    experience: 'Berufserfahrung',
    caseStudy: 'Fallstudie',
    skills: 'Fähigkeiten',
    education: 'Ausbildung',
    freelance: 'Freiberuflich',
  },
  impactStats: [
    {
      label: 'Redis-Speichernutzung',
      value: '90% → 58%',
      detail: 'Follow-Feed-Fan-out-ZSET auf die letzten 500 Einträge pro Nutzer begrenzt',
      direction: 'good',
    },
    {
      label: 'Latenz zentraler DB-Abfragen',
      value: '1206ms → 13ms',
      detail: 'Engpässe mit EXPLAIN ANALYZE und Prisma Middleware diagnostiziert, Indizes und Abfragen neu aufgebaut',
      direction: 'good',
    },
    {
      label: 'Kumulierte aktive Nutzer',
      value: '10.000+',
      detail: 'Stabiler Betrieb nach Entwurf der Empfehlungsarchitektur und Datenpipeline',
      direction: 'neutral',
    },
    {
      label: 'Eingesetzte Embedded-Geräte',
      value: '150+',
      detail: 'Selbst entwickeltes Hydroponik-Automatisierungssystem; trug zu einer Pre-A-Finanzierungsrunde bei',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'Mai 2025 - Heute',
      summary: 'Interessenbasierter Online-/Offline-Community-Dienst',
      role: 'Backend-Ingenieur',
      highlights: [
        'Redis-Speichernutzung von 90% auf 58% gesenkt durch Begrenzung des Follow-Feed-Fan-out-ZSET auf die letzten 500 Einträge pro Nutzer',
        'Performance zentraler DB-Abfragen um über 92% verbessert (1206ms → 13ms) durch Indexstrategie und Query-Neufassung',
        'Empfehlungsbasierte Service-Architektur und Datenpipeline entworfen, stabiler Betrieb für 10.000+ Nutzer',
        'AWS-Infrastruktur zu CDK (IaC) migriert und IAM-Rollen/-Richtlinien nach dem Prinzip der geringsten Rechte neu gestaltet',
        'Docker-basierte Testinfrastruktur standardisiert und Unit-/E2E-Tests sowie Coverage-Prüfungen mit GitHub Actions automatisiert',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'Sep. 2023 - Okt. 2024',
      summary: 'Fashion-Community-App mit generativer KI',
      role: 'Mobile-App-Entwickler',
      highlights: [
        'In-App-Kaufsystem aufgebaut, um das Umsatzmodell zu stärken',
        'Deep-Linking implementiert, um Nutzerakquise zu analysieren und Marketingeffizienz zu steigern',
        'State-Management refaktoriert, um Codeverständnis im Team und Wartbarkeit zu verbessern',
        'App-Crash-Tracking und eine Grundlage für Nutzerverhaltensanalysen eingerichtet',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'Mai 2023 - Aug. 2023',
      summary: 'Fan-Community-App für Profisportler',
      role: 'Mobile-App-Entwickler',
      highlights: [
        'Social Login über Google, Apple und weitere Plattformen integriert',
        'Datenverwaltung und Deployment-Pipelines für Lokalisierung aufgebaut',
        'Code-Reviews, Tests und Verbesserungen zur Sicherung der Codequalität durchgeführt',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'Sep. 2021 - Apr. 2023',
      summary: 'Online-Bestelldienst',
      role: 'Datenbank- und neue API-Server-Entwicklung',
      highlights: [
        'Redis-basiertes Identitätsprüfungssystem eingeführt, das Geschwindigkeit und Effizienz der Authentifizierung verbessert',
        'Echtzeit-Benachrichtigungen mit Socket.IO aufgebaut',
        'API-Server entwickelt, um externe Integrationen und Skalierbarkeit des Dienstes zu unterstützen',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Hydroponik-Automatisierungssystem',
    period: 'Sep. 2021 - Apr. 2023',
    role: 'Entwicklung eines eingebetteten Automatisierungssystems',
    highlights: [
      'Entwurf und Entwicklung eines eingebetteten Automatisierungssystems für hydroponische Anbauumgebungen',
      'MQTT-basierte Kommunikation für Sensordatenerfassung und Fernsteuerung von Geräten implementiert',
      'OTA-Firmware-Updates hinzugefügt, um Wartbarkeit und Geräteskalierbarkeit zu verbessern',
      'Gesamten Prozess geleitet – von der Schaltungsentwicklung über die ausgelagerte PCB-Fertigung bis zum frühen MVP',
    ],
    achievements: ['Zu einer Pre-A-Finanzierungsrunde beigetragen', '150+ Geräte im Einsatz, darunter Einheiten für ein Kulturzentrum'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: '92% schnellere zentrale DB-Abfragen',
      subtitle: '1206ms → 13ms – von der Engpassanalyse bis zu strukturellen Korrekturen in PostgreSQL',
      summary: 'Mit EXPLAIN ANALYZE einen Engpass von über 1200ms diagnostiziert, die Indexstrategie neu aufgebaut und die Antwortzeit um 92% reduziert, während gleichzeitig die Redis-Speichernutzung gesenkt wurde.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Problem',
        body: 'Die Latenz der zentralen Feed-Abfrage beeinträchtigte direkt die Nutzererfahrung und erhöhte die Serverlast. Unklar war, ob die Ursache in der Abfrage selbst, fehlenden Indizes oder dem Datenmodell lag.',
      },
      {
        label: 'Analyse',
        body: 'Mit EXPLAIN ANALYZE von PostgreSQL zusammen mit Prisma Middleware wurden Ausführungspläne von Produktionsabfragen nachverfolgt, die langsamsten Abfragen visualisiert und ausgewertet, um den genauen Engpass zu lokalisieren.',
      },
      {
        label: 'Maßnahme',
        body: 'Die Indexstrategie wurde entsprechend dem Engpass neu aufgebaut und strukturelle Korrekturen angewendet – Query-Neufassung und Bedingungsoptimierung. Parallel dazu wurde das Follow-Feed-Fan-out-ZSET auf die letzten 500 Einträge pro Nutzer begrenzt, wodurch die Redis-Speichernutzung von 90% auf 58% sank und das Ausfallrisiko reduziert wurde.',
      },
      {
        label: 'Ergebnis',
          body: 'Die Antwortzeit der zentralen Abfrage sank von 1206ms auf 13ms – eine Verbesserung von über 92%. Diese Arbeit bildete die Grundlage für eine Empfehlungsarchitektur und Datenpipeline, die heute stabil 10.000+ Nutzer bedient.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migration der AWS-Infrastruktur zu CDK mit IAM nach dem Least-Privilege-Prinzip',
      subtitle: 'Von konsolenverwalteter Infrastruktur mit weitreichenden Berechtigungen zu überprüfbarer Infrastructure as Code nach dem Prinzip minimaler Rechte',
      summary: 'Manuelle AWS-Konsolenänderungen durch AWS CDK ersetzt und IAM nach dem Least-Privilege-Prinzip neu gestaltet, wodurch Infrastrukturänderungen überprüfbar wurden und der Schaden bei kompromittierten Zugangsdaten begrenzt wird.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problem',
          body: 'AWS-Ressourcen wurden manuell über die Konsole angelegt, wodurch Änderungen nicht dokumentiert und über Umgebungen hinweg schwer reproduzierbar waren. IAM-Rollen waren zudem zu breit angelegt, sodass unklar war, welche Services auf welche Ressourcen zugreifen konnten – was die Auswirkung kompromittierter Zugangsdaten vergrößerte.',
        },
        {
          label: 'Analyse',
          body: 'Bestehende IAM-Richtlinien und Ressourcenkonfigurationen wurden geprüft, um die tatsächlich benötigten Berechtigungen je Service zu ermitteln, und es wurde identifiziert, wo manuelle Konsolenänderungen zu Abweichungen zwischen Staging und Produktion geführt hatten.',
        },
        {
          label: 'Maßnahme',
          body: 'Infrastrukturdefinitionen wurden nach AWS CDK migriert, sodass jede Änderung als Code vorliegt, per Pull Request geprüft wird und über Umgebungen hinweg reproduzierbar ist. Parallel dazu wurden IAM-Rollen und -Richtlinien je Service nach dem Least-Privilege-Prinzip statt gemeinsamer breiter Berechtigungen neu aufgebaut.',
        },
        {
          label: 'Ergebnis',
          body: 'Infrastrukturänderungen durchlaufen jetzt denselben Review-Prozess wie Anwendungscode, die Abweichung zwischen Staging und Produktion wurde beseitigt, und die potenzielle Auswirkung kompromittierter Zugangsdaten ist auf einen einzelnen Service statt das gesamte Konto begrenzt.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep Linking für die Attribution der Nutzergewinnung',
      subtitle: 'Marketing kanalgenaue Attributionsdaten liefern, um die Effizienz der Akquise-Ausgaben zu verbessern',
      summary: 'Branch.io-Deep-Linking in der gesamten App integriert, damit Marketing Installationen und Anmeldungen konkreten Kampagnen zuordnen konnte – für effizientere Akquise-Ausgaben.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problem',
          body: 'Marketing konnte nicht erkennen, welche Kampagne, welcher Empfehlungslink oder welches Social-Media-Share tatsächlich zu einer Installation oder Anmeldung führte, wodurch eine verlässliche Bewertung der Kanalleistung oder Rechtfertigung der Akquise-Ausgaben nicht möglich war.',
        },
        {
          label: 'Analyse',
          body: 'Alle Einstiegspunkte in die App wurden kartiert – Kampagnenlinks, Einladungslinks, Social-Media-Shares – sowie die jeweils von Marketing benötigten Attributionsdaten, einschließlich Deferred Deep Linking für Nutzer ohne installierte App.',
        },
        {
          label: 'Maßnahme',
          body: 'Branch.io wurde auf iOS und Android integriert, Link-Parameter wurden mit Attributionsereignissen verknüpft und diese Ereignisse an die Analyse-Dashboards des Marketings angebunden.',
        },
        {
          label: 'Ergebnis',
          body: 'Marketing erhielt erstmals kanalgenaue Attributionstransparenz und konnte das Akquise-Budget datenbasiert statt nach Vermutung verteilen.',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Munto",
      title: "Speicherexplosion im Redis-Cache ohne TTL behoben",
      subtitle: "Speicherauslastung des Lounge-Feed-Caches von 90 % auf 58 % gesenkt",
      summary: "Im Lounge-Cache von Munto stieg die Redis-Speicherauslastung auf 90 %, weil für die Keys einzelner populärer Nutzer keine TTL gesetzt war und diese dadurch unbegrenzt weiterwuchsen. Durch eine datengetriebene Analyse wurde per Sampling der Element-Anzahl-Verteilung festgestellt, dass die Keys des obersten 1 % der Nutzer den Großteil des Speichers belegten. Die Lösung war eine Begrenzung auf 500 Elemente pro Key nach dem p90-Wert, umgesetzt über einen schrittweisen Rollout. Ergebnis: Die Speicherauslastung sank auf 58 %, ohne Nebenwirkungen.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Problem",
          body: "Der Lounge-Cache von Munto speicherte die Feeds der von Nutzern gefolgten Accounts und nutzte sie unter anderem für Spotlight-Bereiche mit beliebten Beiträgen. Die Speicherauslastung dieses Redis-Caches schoss auf 90 % hoch. Zuvor wurden Probleme nur durch manuelle Dashboard-Kontrollen erkannt, doch mittlerweile war ein Monitoring-System über CloudWatch Alarm → SNS → AWS Chatbot mit Slack-Benachrichtigung aufgebaut, wodurch das Problem überhaupt auffiel. Glücklicherweise gab es zu diesem Zeitpunkt noch keine spürbaren Auswirkungen wie Serviceausfälle oder verzögerte Antwortzeiten.",
        },
        {
          label: "Ursache",
          body: "Die Analyse ergab, dass 60 % des gesamten Speichers auf einen einzigen Cache-Key entfielen. Dieser Key gehörte zum Feed eines Nutzers mit sehr vielen Followern und besaß keine TTL, wodurch immer neue Feed-Einträge angehängt wurden und der Key unbegrenzt weiterwuchs. Warum die TTL im Legacy-Code von Anfang an fehlte, ließ sich anhand der vorhandenen Dokumentation nicht mehr nachvollziehen.",
        },
        {
          label: "Kompromiss",
          body: "Eine einfache TTL-Ergänzung wurde zurückgestellt, da der ursprüngliche Grund für das Fehlen der TTL unklar war und dadurch Nebenwirkungen befürchtet wurden. Eine Änderung der Key-Struktur oder die Einführung einer Größenbegrenzung wurde wegen des hohen Entwicklungsaufwands verworfen, und auch eine reine Vergrößerung des Cache-Instanzspeichers wurde erwogen, aber verworfen, da sie das Grundproblem des stetig wachsenden Legacy-Datenbestands nur verschleppt hätte. Stattdessen wurde die Verteilung der Element-Anzahl je Key gesampelt (2.015 Keys, p50 = 48, p90 = 504, p99 = 2.195, Maximum = 22.415) und dabei bestätigt, dass die ZSETs des obersten 1 % der Nutzer den Großteil des Speichers belegten. Eine gezielte, schrittweise ausgerollte Begrenzung wurde als das Vorgehen mit dem besten Aufwand-Nutzen-Verhältnis bewertet.",
        },
        {
          label: "Entscheidung",
          body: "Es wurde entschieden, die Anzahl der Elemente pro Cache-Key auf 500 zu begrenzen, orientiert am p90-Wert. Unter Ausnutzung der ZSET-Eigenschaften wurde implementiert, dass beim Eintreffen neuer Feed-Einträge die jeweils ältesten Werte per Trim entfernt werden. Bestehende Keys blieben unverändert, während die Begrenzung schrittweise nur auf neu hinzukommende Keys ausgerollt wurde.",
        },
        {
          label: "Ergebnis",
          body: "Nach der Umsetzung sank die Redis-Speicherauslastung von 90 % auf 58 %. Auch mögliche Nebenwirkungen wie Nutzerbeschwerden durch das Abschneiden älterer Feed-Einträge wurden bis dato nicht beobachtet.",
        },
        {
          label: "Erkenntnis",
          body: "Es zeigte sich, dass die Gründe für eine gesetzte TTL beim Einführen eines Caches dokumentiert werden sollten, um spätere Fehleranalysen und Reaktionen zu erleichtern. Als Prinzip wurde festgehalten, bei Legacy-Konfigurationen ohne TTL nicht vorschnell eine TTL zu ergänzen, sondern mögliche Nebenwirkungen zuerst gründlich zu prüfen. Außerdem bestätigte sich, dass eine bloße Vergrößerung des Cache-Speichers keine echte Lösung ist, da sie nur dazu führt, dass sich die zugrunde liegende Legacy-Struktur weiter aufbläht.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Fallstudien',
    intro: 'Ein genauerer Blick auf einige Entscheidungen — das Problem, auf das ich gestoßen bin, wie ich es diagnostiziert habe und warum ich mich für diese Lösung entschieden habe.',
    readMore: 'Ganze Geschichte lesen',
    backToList: '← Alle Fallstudien',
    viewAll: 'Alle Fallstudien ansehen',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Design und Entwicklung von Produktions-API-Servern',
        'Architektur für Echtzeitkommunikation (Benachrichtigungen/Authentifizierung)',
        'Deployment und Betrieb auf AWS',
      ],
    },
    {
      title: 'App',
      items: [
        'Mehrere Apps mit Flutter entwickelt und betrieben',
        'State-Management: Bloc, Riverpod, GetX',
        'Echtzeit-Chat, In-App-Käufe, Social Login, Lokalisierung',
        'Integration von Nutzerverhaltensanalyse und Crash-Reporting',
      ],
    },
  ],
  education: {
    school: 'Kyung-Hee-Universität',
    degree: 'B.Sc. Maschinenbau',
    period: 'März 2013 - Feb. 2020',
    notes: [
      'IMU-Sensordaten mit MATLAB für Gang-Analyse und Skelett-Bewegungsvisualisierung ausgewertet',
      'Anerkennungspreis der Forschungsgruppe für Abschlussprojekte erhalten',
    ],
  },
  freelanceProjects: [
    {
      title: 'Backend-Unterstützung für E-Commerce-Plattform',
      period: 'Nov. 2024 - Jan. 2025',
      points: [
        'Datenformat-Inkonsistenzen zwischen Server und Client behoben und neue APIs entwickelt (NestJS, MikroORM)',
        'Nutzererfahrung durch Optimierung von API-Antwortzeit und Serverleistung verbessert',
      ],
    },
    {
      title: 'Entwicklung einer mobilen Dating-App',
      period: 'Jun. 2024 - Aug. 2024',
      points: [
        'App end-to-end geleitet – Design, Entwicklung, Tests und Release; Echtzeit-Chat, Profilverwaltung und Identitätsprüfung implementiert (Flutter)',
        'Veröffentlichung im App Store/Google Play und kontinuierliche Iteration basierend auf Nutzerfeedback',
      ],
    },
    {
      title: 'Entwicklungsunterstützung für App zum körperlichen und mentalen Gesundheitsmanagement',
      period: 'Apr. 2024 - Jul. 2024',
      points: ['Visualisierungen für körperliche/mentale Gesundheitsdaten entwickelt und UI/UX basierend auf Nutzerfeedback verbessert (Flutter)'],
    },
  ],
  contact: {
    heading: 'Kontakt aufnehmen',
    description: 'Haben Sie ein Projekt, eine Stelle oder eine Frage im Kopf? Schreiben Sie mir unten eine Nachricht.',
    namePlaceholder: 'Name',
    emailPlaceholder: 'E-Mail',
    messagePlaceholder: 'Nachricht',
    submitLabel: 'Nachricht senden',
    sendingLabel: 'Wird gesendet…',
    successMessage: 'Nachricht gesendet — ich melde mich bald bei Ihnen.',
    errorMessage: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.',
    orEmailDirectly: 'Oder schreiben Sie mir direkt an',
  },
  footer: {
    tagline: 'Von Mobile über Backend bis zur Infrastruktur.',
    rights: 'Alle Rechte vorbehalten.',
  },
};

export default de;
