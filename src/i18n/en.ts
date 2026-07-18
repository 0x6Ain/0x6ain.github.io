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
      value: '6,000+',
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
        'Designed a recommendation-driven service architecture and data pipeline, stably serving 6,000+ users',
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
  caseStudy: {
    company: 'Munto',
    title: '92% Faster Core DB Queries',
    subtitle: '1206ms → 13ms — from bottleneck analysis to structural fixes in PostgreSQL',
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
        body: 'Core query response time dropped from 1206ms to 13ms — a 92%+ improvement. This work became the foundation for a recommendation architecture and data pipeline now stably serving 6,000+ users.',
      },
    ],
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
  footer: {
    tagline: 'From mobile to backend to infrastructure.',
    rights: 'All rights reserved.',
  },
};

export default en;
