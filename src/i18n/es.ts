import type { SiteContent } from './types';

const es: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Desarrollador de Software',
    location: 'Seúl, Corea del Sur',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Desarrollador con experiencia en aplicaciones móviles, backend e infraestructura en la nube, siempre equilibrando la experiencia de usuario con la eficiencia operativa. Gracias a un sólido entendimiento de la experiencia del cliente, construyo servicios fiables mediante diseño de APIs, modelado de datos, optimización de rendimiento y automatización operativa.',
    yearsOfExperience: 4,
    yearsSuffix: ' años',
  },
  nav: {
    impact: 'Impacto',
    experience: 'Experiencia',
    caseStudy: 'Caso de estudio',
    skills: 'Habilidades',
    contact: 'Contacto',
  },
  sectionLabels: {
    impact: 'Impacto',
    experience: 'Experiencia laboral',
    caseStudy: 'Caso de estudio',
    skills: 'Habilidades',
    education: 'Educación',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Uso de memoria de Redis',
      value: '90% → 58%',
      detail: 'Se recortó el ZSET de fan-out del feed de seguidos a las últimas 500 entradas por usuario',
      direction: 'good',
    },
    {
      label: 'Latencia de consultas clave a la BD',
      value: '1206ms → 13ms',
      detail: 'Se diagnosticaron cuellos de botella con EXPLAIN ANALYZE y Prisma Middleware, y se rediseñaron índices y consultas',
      direction: 'good',
    },
    {
      label: 'Usuarios activos acumulados',
      value: '10,000+',
      detail: 'Operación estable tras diseñar la arquitectura de recomendación y el pipeline de datos',
      direction: 'neutral',
    },
    {
      label: 'Dispositivos embebidos desplegados',
      value: '150+',
      detail: 'Sistema propio de automatización hidropónica; contribuyó a una ronda de financiación Pre-A',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'may 2025 - Presente',
      summary: 'Servicio de comunidad online/offline basado en intereses',
      role: 'Ingeniero backend',
      highlights: [
        'Reducción del uso de memoria de Redis del 90% al 58% recortando el ZSET de fan-out del feed a las últimas 500 entradas por usuario',
        'Mejora del rendimiento de consultas clave a la BD en más de un 92% (1206ms → 13ms) mediante estrategia de índices y reescritura de consultas',
        'Diseño de una arquitectura de servicio y pipeline de datos basados en recomendaciones, sirviendo de forma estable a más de 10,000 usuarios',
        'Migración de la infraestructura de AWS a CDK (IaC) y rediseño de roles/políticas IAM bajo el principio de mínimo privilegio',
        'Estandarización de infraestructura de pruebas con Docker y automatización de pruebas unitarias/E2E y cobertura con GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'sep 2023 - oct 2024',
      summary: 'App de comunidad de moda impulsada por IA generativa',
      role: 'Desarrollador de aplicaciones móviles',
      highlights: [
        'Construcción de un sistema de compras dentro de la app (IAP) para reforzar el modelo de ingresos',
        'Implementación de deep linking para analizar la adquisición de usuarios y mejorar la eficiencia de marketing',
        'Refactorización de la gestión de estado para mejorar la comprensión del código en equipo y su mantenibilidad',
        'Puesta en marcha de seguimiento de fallos y una base para el análisis del comportamiento de usuarios',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'may 2023 - ago 2023',
      summary: 'App de comunidad de fans para deportistas profesionales',
      role: 'Desarrollador de aplicaciones móviles',
      highlights: [
        'Integración de inicio de sesión social con Google, Apple y otras plataformas',
        'Construcción de gestión de datos de localización y pipelines de despliegue',
        'Revisiones de código, pruebas y mejoras para mantener la calidad del código base',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'sep 2021 - abr 2023',
      summary: 'Servicio de pedidos en línea',
      role: 'Base de datos y desarrollo de nuevo servidor API',
      highlights: [
        'Implementación de un sistema de verificación de identidad basado en Redis, mejorando la velocidad y eficiencia de autenticación',
        'Construcción de notificaciones en tiempo real con Socket.IO',
        'Desarrollo de servidores API para soportar integraciones externas y escalabilidad del servicio',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Sistema de automatización hidropónica',
    period: 'sep 2021 - abr 2023',
    role: 'Desarrollo de sistema de automatización embebido',
    highlights: [
      'Diseño y desarrollo de un sistema embebido de automatización optimizado para entornos hidropónicos',
      'Implementación de comunicación basada en MQTT para recolección de datos de sensores y control remoto de equipos',
      'Actualizaciones de firmware OTA para mejorar la mantenibilidad y escalabilidad de los dispositivos',
      'Liderazgo del proceso completo, desde el diseño de circuitos hasta la fabricación de PCB subcontratada, hasta un MVP en etapa temprana',
    ],
    achievements: ['Contribución a una ronda de financiación Pre-A', 'Más de 150 dispositivos desplegados, incluidas unidades entregadas a un centro cultural'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudy: {
    company: 'Munto',
    title: 'Consultas clave a la base de datos un 92% más rápidas',
    subtitle: '1206ms → 13ms — del análisis de cuellos de botella a las correcciones estructurales en PostgreSQL',
    steps: [
      {
        label: 'Problema',
        body: 'La latencia en la consulta principal del feed afectaba directamente la experiencia de usuario y aumentaba la carga del servidor. No estaba claro si la causa raíz era la propia consulta, la falta de índices o el modelo de datos.',
      },
      {
        label: 'Análisis',
        body: 'Se usó EXPLAIN ANALYZE de PostgreSQL junto con Prisma Middleware para rastrear los planes de ejecución de las consultas en producción, y se visualizaron y reportaron las consultas más lentas para identificar el cuello de botella exacto.',
      },
      {
        label: 'Acción',
        body: 'Se rediseñó la estrategia de índices según el cuello de botella y se aplicaron mejoras estructurales: reescritura de consultas y optimización de condiciones. En paralelo, se recortó el ZSET de fan-out del feed a las últimas 500 entradas por usuario, reduciendo el uso de memoria de Redis del 90% al 58% y disminuyendo el riesgo de caídas.',
      },
      {
        label: 'Resultado',
        body: 'El tiempo de respuesta de la consulta principal bajó de 1206ms a 13ms, una mejora superior al 92%. Este trabajo se convirtió en la base de una arquitectura de recomendación y un pipeline de datos que hoy sirve de forma estable a más de 10,000 usuarios.',
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
        'Diseño y desarrollo de servidores API en producción',
        'Arquitectura de comunicación en tiempo real (notificaciones/autenticación)',
        'Despliegue y operación en AWS',
      ],
    },
    {
      title: 'Aplicaciones móviles',
      items: [
        'Desarrollo y operación de múltiples apps con Flutter',
        'Gestión de estado: Bloc, Riverpod, GetX',
        'Chat en tiempo real, compras dentro de la app, login social, localización',
        'Integración de analítica de comportamiento y reportes de fallos',
      ],
    },
  ],
  education: {
    school: 'Universidad de Kyung Hee',
    degree: 'Licenciatura en Ingeniería Mecánica',
    period: 'mar 2013 - feb 2020',
    notes: [
      'Análisis de datos de sensores IMU en MATLAB para análisis de la marcha y visualización de movimiento esquelético',
      'Premio de reconocimiento del grupo de investigación de proyecto final',
    ],
  },
  freelanceProjects: [
    {
      title: 'Soporte de backend para plataforma de e-commerce',
      period: 'nov 2024 - ene 2025',
      points: [
        'Resolución de incompatibilidades de formato de datos entre servidor y cliente, y desarrollo de nuevas APIs (NestJS, MikroORM)',
        'Mejora de la experiencia de usuario optimizando la velocidad de respuesta de la API y el rendimiento del servidor',
      ],
    },
    {
      title: 'Desarrollo de app móvil de citas',
      period: 'jun 2024 - ago 2024',
      points: [
        'Liderazgo integral de la app: diseño, desarrollo, pruebas y lanzamiento; chat en tiempo real, gestión de perfiles y verificación de identidad (Flutter)',
        'Publicación en App Store/Google Play e iteración continua según el feedback de usuarios',
      ],
    },
    {
      title: 'Soporte de desarrollo para app de salud física y mental',
      period: 'abr 2024 - jul 2024',
      points: ['Desarrollo de visualizaciones de datos de salud física/mental y mejoras de UI/UX basadas en feedback de usuarios (Flutter)'],
    },
  ],
  footer: {
    tagline: 'De móvil a backend, y hasta infraestructura.',
    rights: 'Todos los derechos reservados.',
  },
};

export default es;
