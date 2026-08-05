import type { SiteContent } from './types';

const fr: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Développeur Logiciel',
    location: 'Séoul, Corée du Sud',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      "Développeur ayant travaillé sur des applications mobiles, des services backend et des infrastructures cloud, en équilibrant toujours l'expérience utilisateur et l'efficacité opérationnelle. Fort d'une solide compréhension de l'expérience client, je construis des services fiables grâce à la conception d'API, la modélisation de données, l'optimisation des performances et l'automatisation des opérations.",
    yearsOfExperience: 4,
    yearsSuffix: ' ans',
  },
  nav: {
    impact: 'Impact',
    experience: 'Expérience',
    caseStudy: 'Étude de cas',
    skills: 'Compétences',
    handbook: 'Manuel',
    contact: 'Contact',
  },
  sectionLabels: {
    impact: 'Impact',
    experience: 'Expérience professionnelle',
    caseStudy: 'Étude de cas',
    skills: 'Compétences',
    education: 'Formation',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Utilisation mémoire Redis',
      value: '90% → 58%',
      detail: "Réduction du ZSET de fan-out du fil d'abonnements aux 500 dernières entrées par utilisateur",
      direction: 'good',
    },
    {
      label: 'Latence des requêtes BD critiques',
      value: '1206ms → 13ms',
      detail: 'Diagnostic des goulots avec EXPLAIN ANALYZE et Prisma Middleware, puis refonte des index et requêtes',
      direction: 'good',
    },
    {
      label: 'Utilisateurs cumulés',
      value: '10 000+',
      detail: "Exploitation stable après la conception de l'architecture de recommandation et du pipeline de données",
      direction: 'neutral',
    },
    {
      label: 'Appareils embarqués déployés',
      value: '150+',
      detail: "Système d'automatisation hydroponique conçu en interne, ayant contribué à une levée de fonds Pre-A",
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'mai 2025 - Présent',
      summary: "Service de communauté en ligne/hors ligne basé sur les centres d'intérêt",
      role: 'Ingénieur backend',
      highlights: [
        "Réduction de l'utilisation mémoire Redis de 90% à 58% en limitant le ZSET de fan-out aux 500 dernières entrées par utilisateur",
        'Amélioration des performances des requêtes BD critiques de plus de 92% (1206ms → 13ms) via une stratégie d\'index et la réécriture des requêtes',
        "Conception d'une architecture de service et d'un pipeline de données orientés recommandation, servant plus de 10 000 utilisateurs de façon stable",
        "Migration de l'infrastructure AWS vers CDK (IaC) et refonte des rôles/politiques IAM selon le principe du moindre privilège",
        "Standardisation d'un environnement de test basé sur Docker et automatisation des tests unitaires/E2E et de la couverture via GitHub Actions",
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'sept. 2023 - oct. 2024',
      summary: "Application communautaire mode propulsée par l'IA générative",
      role: 'Développeur mobile',
      highlights: [
        "Mise en place d'un système d'achats intégrés (IAP) pour renforcer le modèle économique",
        "Implémentation du deep linking pour analyser l'acquisition d'utilisateurs et améliorer l'efficacité marketing",
        "Refonte de la gestion d'état pour améliorer la compréhension du code par l'équipe et sa maintenabilité",
        "Mise en place du suivi des plantages et d'une base pour l'analyse comportementale des utilisateurs",
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'mai 2023 - août 2023',
      summary: "Application communautaire de fans pour athlètes professionnels",
      role: 'Développeur mobile',
      highlights: [
        'Intégration de la connexion sociale via Google, Apple et autres plateformes',
        'Mise en place de la gestion des données de localisation et des pipelines de déploiement',
        'Revues de code, tests et améliorations pour maintenir la qualité de la base de code',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'sept. 2021 - avr. 2023',
      summary: 'Service de commande en ligne',
      role: 'Base de données et développement de nouveau serveur API',
      highlights: [
        "Mise en place d'un système de vérification d'identité basé sur Redis, améliorant la rapidité et l'efficacité de l'authentification",
        'Mise en place de notifications en temps réel avec Socket.IO',
        "Développement de serveurs API pour soutenir les intégrations externes et l'évolutivité du service",
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: "Système d'automatisation hydroponique",
    period: 'sept. 2021 - avr. 2023',
    role: "Développement d'un système d'automatisation embarqué",
    highlights: [
      'Conception et développement d\'un système embarqué optimisé pour les environnements hydroponiques',
      'Implémentation d\'une communication basée sur MQTT pour la collecte de données de capteurs et le contrôle à distance des équipements',
      "Mise à jour du firmware par OTA (Over-The-Air) pour améliorer la maintenabilité et l'évolutivité des appareils",
      "Direction du processus complet, de la conception des circuits à la fabrication de PCB en sous-traitance, jusqu'à un MVP en phase initiale",
    ],
    achievements: ['Contribution à une levée de fonds Pre-A', 'Plus de 150 appareils déployés, dont des unités livrées à un centre culturel'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Requêtes BD critiques 92% plus rapides',
      subtitle: "1206ms → 13ms — de l'analyse des goulots d'étranglement aux corrections structurelles sous PostgreSQL",
      summary: "Diagnostic d'un goulot d'étranglement de plus de 1200ms avec EXPLAIN ANALYZE, refonte de la stratégie d'index, réduction du temps de réponse de 92% et de l'utilisation mémoire Redis.",
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Problème',
        body: "La latence de la requête principale du fil d'actualité affectait directement l'expérience utilisateur et alourdissait la charge serveur. On ignorait si la cause profonde était la requête elle-même, l'absence d'index ou le modèle de données.",
      },
      {
        label: 'Analyse',
        body: "Utilisation d'EXPLAIN ANALYZE de PostgreSQL avec Prisma Middleware pour tracer les plans d'exécution des requêtes en production, puis visualisation et reporting des requêtes les plus lentes afin d'identifier précisément le goulot d'étranglement.",
      },
      {
        label: 'Action',
        body: "Refonte de la stratégie d'index en fonction du goulot identifié et application de corrections structurelles : réécriture des requêtes et optimisation des conditions. En parallèle, réduction du ZSET de fan-out aux 500 dernières entrées par utilisateur, faisant chuter l'utilisation mémoire Redis de 90% à 58% et réduisant le risque de panne.",
      },
      {
        label: 'Résultat',
          body: "Le temps de réponse de la requête principale est passé de 1206ms à 13ms, soit une amélioration de plus de 92%. Ce travail a servi de base à une architecture de recommandation et un pipeline de données qui servent aujourd'hui plus de 10 000 utilisateurs de façon stable.",
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: "Migration de l'infrastructure AWS vers CDK avec IAM à privilège minimal",
      subtitle: "D'une infrastructure gérée manuellement via la console, aux permissions larges, à une infrastructure as code révisable et à privilège minimal",
      summary: "Remplacement des modifications manuelles de la console AWS par AWS CDK et refonte d'IAM autour du privilège minimal, rendant les changements d'infrastructure révisables et réduisant le rayon d'impact de tout identifiant compromis.",
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problème',
          body: "Les ressources AWS étaient provisionnées manuellement via la console, si bien que les changements n'étaient pas documentés et difficiles à reproduire d'un environnement à l'autre. Les rôles IAM avaient également un périmètre trop large, rendant difficile de savoir quels services pouvaient accéder à quelles ressources — et amplifiant l'impact de tout identifiant compromis.",
        },
        {
          label: 'Analyse',
          body: "Audit des politiques IAM et des configurations de ressources existantes pour cartographier les permissions réellement nécessaires à chaque service, et identification des points où des modifications manuelles via la console avaient provoqué une dérive entre les environnements de staging et de production.",
        },
        {
          label: 'Action',
          body: "Migration des définitions d'infrastructure vers AWS CDK afin que chaque changement soit versionné, revu via des pull requests et reproductible d'un environnement à l'autre. Reconstruction en parallèle des rôles et politiques IAM par service selon le principe du privilège minimal, à la place de permissions larges partagées.",
        },
        {
          label: 'Résultat',
          body: "Les changements d'infrastructure suivent désormais le même processus de revue que le code applicatif, la dérive entre staging et production a été éliminée, et l'impact potentiel d'un identifiant compromis est désormais limité à un seul service plutôt qu'à l'ensemble du compte.",
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: "Deep linking pour l'attribution de l'acquisition utilisateurs",
      subtitle: "Donner au marketing des données d'attribution par canal pour améliorer l'efficacité des dépenses d'acquisition",
      summary: "Intégration du deep linking Branch.io dans toute l'application afin que le marketing puisse attribuer installations et inscriptions à des campagnes précises, améliorant l'efficacité des dépenses d'acquisition.",
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problème',
          body: "Le marketing ne pouvait pas savoir quelle campagne, quel lien de parrainage ou quel partage social générait réellement une installation ou une inscription, rendant impossible toute évaluation fiable de la performance par canal ou justification des dépenses d'acquisition.",
        },
        {
          label: 'Analyse',
          body: "Cartographie de tous les points d'entrée dans l'application — liens de campagne, liens d'invitation, partages sociaux — et des données d'attribution requises par le marketing pour chacun, y compris le deep linking différé pour les utilisateurs n'ayant pas encore installé l'application.",
        },
        {
          label: 'Action',
          body: "Intégration de Branch.io sur iOS et Android, connexion des paramètres de liens à des événements d'attribution, puis connexion de ces événements aux tableaux de bord analytiques du marketing.",
        },
        {
          label: 'Résultat',
          body: "Le marketing a obtenu pour la première fois une visibilité d'attribution par canal, permettant des décisions basées sur les données plutôt que sur des suppositions pour allouer le budget d'acquisition.",
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Munto",
      title: "Résolution d'une explosion mémoire du cache Redis due à l'absence de TTL",
      subtitle: "Taux d'utilisation mémoire du cache du fil « Lounge » : 90 % → 58 %",
      summary: "Dans le cache « Lounge » de Munto, l'absence de TTL faisait grossir indéfiniment les clés de certains utilisateurs populaires, poussant l'utilisation mémoire de Redis jusqu'à 90 %. Une analyse fondée sur les données a permis de résoudre le problème : l'échantillonnage de la distribution du nombre d'éléments a montré que le 1 % d'utilisateurs les plus actifs concentrait l'essentiel de la mémoire consommée. La solution a consisté à plafonner les clés à 500 éléments (seuil p90) et à déployer le changement progressivement. Résultat : l'utilisation mémoire est redescendue à 58 %, sans effet secondaire.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Problème",
          body: "Le cache « Lounge » de Munto stockait le fil d'actualité des comptes suivis par chaque utilisateur, notamment pour l'affichage de zones de mise en avant comme les publications populaires. Son taux d'utilisation mémoire dans Redis a grimpé jusqu'à 90 %. Auparavant, la détection des incidents reposait sur une vérification manuelle des tableaux de bord. Mais la mise en place récente d'une chaîne d'alerte CloudWatch Alarm → SNS → AWS Chatbot → Slack a permis d'identifier ce problème rapidement. À ce stade, aucun impact concret (panne de service, latence de réponse) n'avait encore été constaté.",
        },
        {
          label: "Cause",
          body: "L'investigation a révélé que 60 % de la mémoire totale provenait d'une seule et unique clé de cache. Il s'agissait du fil d'actualité d'un utilisateur très suivi : sans TTL configuré, cette clé continuait de recevoir de nouveaux éléments par append sans jamais être purgée, et grossissait donc indéfiniment. Aucune trace ne permettait de comprendre pourquoi le TTL avait été omis dans le code legacy à l'origine.",
        },
        {
          label: "Arbitrage",
          body: "Ajouter simplement un TTL a été écarté : la raison de l'absence initiale de TTL restant floue, le risque d'effets de bord était trop incertain. Modifier la structure des clés ou introduire une limite de taille du cache a aussi été exclu, jugé trop coûteux en ressources de développement. Augmenter la mémoire de l'instance de cache a également été envisagé, mais rejeté car cela ne faisait que repousser le problème d'accumulation continue du legacy. À la place, un échantillonnage de la distribution du nombre d'éléments (2 015 clés : p50 = 48, p90 = 504, p99 = 2 195, maximum = 22 415) a confirmé que les ZSET du 1 % d'utilisateurs les plus actifs concentraient l'essentiel de la mémoire. Réduire le périmètre puis déployer progressivement s'est révélé l'approche offrant le meilleur rapport effort/impact.",
        },
        {
          label: "Décision",
          body: "Le nombre d'éléments par clé de cache a été plafonné à 500, en s'appuyant sur le seuil p90. En exploitant les propriétés du ZSET, les éléments les plus anciens sont automatiquement retirés (trim) à l'arrivée de nouveaux éléments. Les clés existantes ont été laissées telles quelles, et le déploiement s'est fait progressivement à partir des nouvelles clés créées.",
        },
        {
          label: "Résultat",
          body: "Après la mise en place du changement, le taux d'utilisation mémoire de Redis est passé de 90 % à 58 %. Aucun effet secondaire, comme un mécontentement des utilisateurs lié à la suppression d'anciennes publications, n'a été constaté à ce jour.",
        },
        {
          label: "Leçon",
          body: "Documenter les raisons de la configuration d'un TTL dès l'introduction d'un cache facilite grandement le diagnostic et les futures interventions. Face à une configuration legacy sans TTL, ajouter un TTL sans réflexion préalable est risqué : il faut d'abord bien évaluer les effets de bord potentiels. Enfin, augmenter simplement la mémoire du cache n'est pas une solution durable, car cela ne fait que laisser s'accumuler une structure legacy problématique.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Études de cas',
    intro: "Un aperçu détaillé de quelques décisions — le problème rencontré, comment je l'ai diagnostiqué, et pourquoi j'ai choisi cette solution plutôt qu'une autre.",
    readMore: "Lire l'histoire complète",
    backToList: '← Toutes les études de cas',
    viewAll: 'Voir toutes les études de cas',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Conception et développement de serveurs API en production',
        'Architecture de communication en temps réel (notifications/authentification)',
        'Déploiement et exploitation sur AWS',
      ],
    },
    {
      title: 'Mobile',
      items: [
        "Développement et exploitation de plusieurs applications avec Flutter",
        "Gestion d'état : Bloc, Riverpod, GetX",
        "Chat en temps réel, achats intégrés, connexion sociale, localisation",
        "Intégration de l'analyse comportementale et du reporting de plantages",
      ],
    },
  ],
  education: {
    school: 'Université Kyung Hee',
    degree: 'Licence en ingénierie mécanique',
    period: 'mars 2013 - févr. 2020',
    notes: [
      "Analyse de données de capteurs inertiels (IMU) sous Matlab pour l'analyse de la démarche et la visualisation du mouvement squelettique",
      'Prix d\'encouragement du groupe de recherche de projet de fin d\'études',
    ],
  },
  freelanceProjects: [
    {
      title: "Support backend pour une plateforme e-commerce",
      period: 'nov. 2024 - janv. 2025',
      points: [
        "Résolution des incohérences de format de données entre serveur et client, et développement de nouvelles API (NestJS, MikroORM)",
        "Amélioration de l'expérience utilisateur en optimisant la vitesse de réponse de l'API et les performances serveur",
      ],
    },
    {
      title: 'Développement d\'une application mobile de rencontres',
      period: 'juin 2024 - août 2024',
      points: [
        "Direction complète de l'application : conception, développement, tests et publication ; chat en temps réel, gestion de profil et vérification d'identité (Flutter)",
        "Publication sur l'App Store/Google Play et itération continue basée sur les retours utilisateurs",
      ],
    },
    {
      title: 'Support de développement pour une application de santé physique et mentale',
      period: 'avr. 2024 - juil. 2024',
      points: ["Développement de visualisations de données de santé physique/mentale et amélioration de l'UI/UX basée sur les retours utilisateurs (Flutter)"],
    },
  ],
  contact: {
    heading: 'Me contacter',
    description: 'Une proposition, un projet ou une question ? Envoyez-moi un message ci-dessous.',
    namePlaceholder: 'Nom',
    emailPlaceholder: 'E-mail',
    messagePlaceholder: 'Message',
    submitLabel: 'Envoyer le message',
    sendingLabel: 'Envoi en cours…',
    successMessage: 'Message envoyé — je vous répondrai bientôt.',
    errorMessage: "Une erreur s'est produite. Réessayez ou écrivez-moi directement par e-mail.",
    orEmailDirectly: 'Ou écrivez-moi directement à',
  },
  footer: {
    tagline: "Du mobile au backend, jusqu'à l'infrastructure.",
    rights: 'Tous droits réservés.',
  },
};

export default fr;
