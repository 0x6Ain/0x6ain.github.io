import type { SiteContent } from './types';

const en: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Software Developer',
    location: 'Seoul, South Korea',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      "A developer who has worked across mobile apps, backend services, and cloud infrastructure, balancing user experience with operational efficiency. Drawing on a strong understanding of the client-side experience, I build reliable services through API design, data modeling, performance optimization, and operational automation.",
    yearsOfExperience: 4,
    yearsSuffix: ' years',
  },
  nav: {
    impact: 'Impact',
    experience: 'Experience',
    caseStudy: 'Case Study',
    skills: 'Skills',
    handbook: 'Handbook',
    contact: 'Contact',
  },
  sectionLabels: {
    impact: 'Impact',
    experience: 'Work Experience',
    caseStudy: 'Case Study',
    skills: 'Skills',
    education: 'Education',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Redis memory usage',
      value: '90% → 58%',
      detail: 'Trimmed the follow-feed fan-out ZSET to the latest 500 entries per user',
      direction: 'good',
    },
    {
      label: 'Core DB query latency',
      value: '1206ms → 13ms',
      detail: 'Diagnosed bottlenecks with EXPLAIN ANALYZE and Prisma middleware, then rebuilt indexes and rewrote queries',
      direction: 'good',
    },
    {
      label: 'Cumulative active users',
      value: '10,000+',
      detail: 'Stable operation after designing the recommendation architecture and data pipeline',
      direction: 'neutral',
    },
    {
      label: 'Embedded devices deployed',
      value: '150+',
      detail: 'Self-built hydroponics automation system; contributed to a Pre-A funding round',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'May 2025 - Present',
      summary: 'Interest-based online/offline community service',
      role: 'Backend Engineer',
      highlights: [
        'Cut Redis memory usage from 90% to 58% by trimming the follow-feed fan-out ZSET to the latest 500 entries per user',
        'Improved core DB query performance by over 92% (1206ms → 13ms) through indexing strategy and query rewrites',
        'Designed a recommendation-driven service architecture and data pipeline, stably serving 10,000+ users',
        'Migrated AWS infrastructure to CDK (IaC) and redesigned IAM roles/policies around least-privilege access',
        'Standardized Docker-based test infrastructure and automated unit/E2E testing and coverage checks with GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'Sep 2023 - Oct 2024',
      summary: 'Generative-AI-powered fashion community app',
      role: 'Mobile App Developer',
      highlights: [
        'Built an in-app purchase system to strengthen the revenue model',
        'Implemented deep linking to analyze user acquisition and improve marketing efficiency',
        'Refactored state management to improve team code comprehension and maintainability',
        'Set up app crash tracking and a foundation for user behavior analytics',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'May 2023 - Aug 2023',
      summary: 'Fan community app for professional athletes',
      role: 'Mobile App Developer',
      highlights: [
        'Integrated social login across Google, Apple, and other platforms',
        'Built localization data management and deployment pipelines',
        'Conducted code reviews, testing, and improvements to maintain codebase quality',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'Sep 2021 - Apr 2023',
      summary: 'Online ordering service',
      role: 'Database & New API Server Development',
      highlights: [
        'Introduced a Redis-based identity verification system, improving auth speed and efficiency',
        'Built real-time notifications with Socket.IO',
        'Developed API servers to support external integrations and service scalability',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Hydroponics Automation System',
    period: 'Sep 2021 - Apr 2023',
    role: 'Embedded Automation System Development',
    highlights: [
      'Designed and built an embedded automation system optimized for hydroponic growing environments',
      'Implemented MQTT-based communication for sensor data collection and remote equipment control',
      'Added OTA firmware updates to improve maintainability and device scalability',
      'Led the process end to end from circuit design through outsourced PCB manufacturing to an early-stage MVP',
    ],
    achievements: ['Contributed to a Pre-A funding round', 'Deployed 150+ devices, including units delivered to Jagok Culture Center'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: '92% Faster Core DB Queries',
      subtitle: '1206ms → 13ms — from bottleneck analysis to structural fixes in PostgreSQL',
      summary: 'Diagnosed a 1200ms+ query bottleneck with EXPLAIN ANALYZE, rebuilt the indexing strategy, and cut response time by 92% while also trimming Redis memory usage.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
        {
          label: 'Problem',
          body: "Latency on the core feed query was directly hurting user experience and driving up server load. It wasn't clear whether the root cause was the query itself, missing indexes, or the data model.",
        },
        {
          label: 'Analysis',
          body: 'Used PostgreSQL EXPLAIN ANALYZE together with Prisma middleware to trace execution plans for production queries, then visualized and reported on the slowest queries to pinpoint the exact bottleneck.',
        },
        {
          label: 'Action',
          body: 'Rebuilt the indexing strategy to match the bottleneck and applied structural fixes — query rewrites and condition optimization. In parallel, trimmed the follow-feed fan-out ZSET to the latest 500 entries per user, dropping Redis memory usage from 90% to 58% and reducing the risk of outages.',
        },
        {
          label: 'Result',
          body: 'Core query response time dropped from 1206ms to 13ms — a 92%+ improvement. This work became the foundation for a recommendation architecture and data pipeline now stably serving 10,000+ users.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migrating AWS Infrastructure to CDK with Least-Privilege IAM',
      subtitle: 'From console-managed, broadly-permissioned infrastructure to reviewable, least-privilege infrastructure as code',
      summary: 'Replaced manual AWS console changes with AWS CDK and redesigned IAM around least privilege, making infrastructure changes reviewable and reducing the blast radius of any compromised credential.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problem',
          body: 'AWS resources were provisioned by hand through the console, so changes were undocumented and hard to reproduce across environments. IAM roles were also broadly scoped, making it unclear which services could access which resources — and expanding the impact of any single compromised credential.',
        },
        {
          label: 'Analysis',
          body: 'Audited existing IAM policies and resource configurations to map which services actually needed which permissions, and identified where manual console changes had caused environment drift between staging and production.',
        },
        {
          label: 'Action',
          body: 'Migrated infrastructure definitions to AWS CDK so every change is code, reviewed through pull requests, and reproducible across environments. Rebuilt IAM roles and policies per service around least-privilege access instead of shared broad permissions.',
        },
        {
          label: 'Result',
          body: 'Infrastructure changes now go through the same review process as application code, environment drift between staging and production was eliminated, and the potential impact of a leaked credential is scoped to a single service instead of the whole account.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep Linking for User Acquisition Attribution',
      subtitle: 'Giving marketing channel-level attribution data to improve acquisition spend efficiency',
      summary: 'Integrated Branch.io deep linking across the app so marketing could attribute installs and signups to specific campaigns, improving acquisition spend efficiency.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problem',
          body: 'Marketing could not tell which campaign, referral link, or social share actually drove an install or signup, so there was no reliable way to evaluate channel performance or justify acquisition spend.',
        },
        {
          label: 'Analysis',
          body: 'Mapped every entry point into the app — campaign links, invite links, social shares — and the attribution data marketing needed for each, including deferred deep linking for users who did not have the app installed yet.',
        },
        {
          label: 'Action',
          body: "Integrated Branch.io across iOS and Android, wired link parameters through to attribution events, and connected those events to marketing's analytics dashboards.",
        },
        {
          label: 'Result',
          body: 'Marketing gained per-channel attribution visibility for the first time, enabling data-driven decisions about where to spend acquisition budget instead of relying on guesswork.',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Case Studies',
    intro: 'A closer look at a few decisions — the problem I ran into, how I diagnosed it, and why I chose this particular fix over the alternatives.',
    readMore: 'Read the full story',
    backToList: '← All case studies',
    viewAll: 'View all case studies',
  },
  skillGroups: [
    {
      title: 'Server',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Designing and building production API servers',
        'Real-time communication (notifications/auth) architecture',
        'Deploying and operating on AWS',
      ],
    },
    {
      title: 'App',
      items: [
        'Built and operated multiple Flutter apps',
        'State management: Bloc, Riverpod, GetX',
        'Real-time chat, in-app purchases, social login, localization',
        'User behavior analytics and crash reporting integration',
      ],
    },
  ],
  education: {
    school: 'Kyung Hee University',
    degree: 'B.S. in Mechanical Engineering',
    period: 'Mar 2013 - Feb 2020',
    notes: [
      'Analyzed IMU sensor data in MATLAB for gait analysis and skeletal motion visualization',
      'Received an Encouragement Award from the Capstone Design research group',
    ],
  },
  freelanceProjects: [
    {
      title: 'E-commerce Platform Backend Support',
      period: 'Nov 2024 - Jan 2025',
      points: [
        'Resolved server-client data format mismatches and built new APIs (NestJS, MikroORM)',
        'Improved user experience by optimizing API response speed and server performance',
      ],
    },
    {
      title: 'Mobile Dating App Development',
      period: 'Jun 2024 - Aug 2024',
      points: [
        'Led the app end to end — design, development, testing, and release; built real-time chat, profile management, and PASS identity verification (Flutter)',
        'Shipped to the App Store/Google Play and iterated continuously on user feedback',
      ],
    },
    {
      title: 'Physical & Mental Health Management App Support',
      period: 'Apr 2024 - Jul 2024',
      points: ['Built physical/mental health data visualizations and improved UI/UX based on user feedback (Flutter)'],
    },
  ],
  contact: {
    heading: 'Get in touch',
    description: "Have a role, project, or question in mind? Send a message below and I'll get back to you.",
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    submitLabel: 'Send message',
    sendingLabel: 'Sending…',
    successMessage: "Message sent — I'll get back to you soon.",
    errorMessage: 'Something went wrong. Please try again or email me directly.',
    orEmailDirectly: 'Or email me directly at',
  },
  footer: {
    tagline: 'From mobile to backend to infrastructure.',
    rights: 'All rights reserved.',
  },
};

export default en;
