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
    handbook: 'Manual',
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
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Consultas clave a la base de datos un 92% más rápidas',
      subtitle: '1206ms → 13ms — del análisis de cuellos de botella a las correcciones estructurales en PostgreSQL',
      summary: 'Diagnostiqué un cuello de botella de más de 1200ms con EXPLAIN ANALYZE, rediseñé la estrategia de índices y reduje el tiempo de respuesta en un 92%, además de reducir el uso de memoria de Redis.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
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
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migración de la infraestructura AWS a CDK con IAM de mínimo privilegio',
      subtitle: 'De una infraestructura gestionada manualmente por consola y con permisos amplios, a una infraestructura como código revisable y de mínimo privilegio',
      summary: 'Sustituí los cambios manuales en la consola de AWS por AWS CDK y rediseñé IAM en torno al mínimo privilegio, haciendo que los cambios de infraestructura fueran revisables y reduciendo el radio de impacto de cualquier credencial comprometida.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problema',
          body: 'Los recursos de AWS se aprovisionaban manualmente desde la consola, por lo que los cambios no quedaban documentados y era difícil reproducirlos entre entornos. Los roles de IAM también tenían un alcance demasiado amplio, lo que dificultaba saber qué servicios podían acceder a qué recursos, ampliando el impacto de cualquier credencial comprometida.',
        },
        {
          label: 'Análisis',
          body: 'Se auditaron las políticas de IAM y las configuraciones de recursos existentes para mapear qué permisos necesitaba realmente cada servicio, y se identificaron los puntos donde los cambios manuales en la consola habían provocado divergencias entre los entornos de staging y producción.',
        },
        {
          label: 'Acción',
          body: 'Se migraron las definiciones de infraestructura a AWS CDK, de modo que cada cambio queda como código, se revisa mediante pull requests y es reproducible entre entornos. En paralelo, se reconstruyeron los roles y políticas de IAM por servicio siguiendo el principio de mínimo privilegio, en lugar de permisos amplios compartidos.',
        },
        {
          label: 'Resultado',
          body: 'Los cambios de infraestructura ahora pasan por el mismo proceso de revisión que el código de la aplicación, se eliminó la divergencia entre staging y producción, y el impacto potencial de una credencial filtrada queda acotado a un único servicio en lugar de a toda la cuenta.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep linking para la atribución de adquisición de usuarios',
      subtitle: 'Dar a marketing datos de atribución por canal para mejorar la eficiencia del gasto de adquisición',
      summary: 'Integré deep linking con Branch.io en toda la app para que marketing pudiera atribuir instalaciones y registros a campañas concretas, mejorando la eficiencia del gasto de adquisición.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problema',
          body: 'Marketing no podía saber qué campaña, enlace de referido o publicación social generaba realmente una instalación o un registro, por lo que no había forma fiable de evaluar el rendimiento por canal ni justificar el gasto de adquisición.',
        },
        {
          label: 'Análisis',
          body: 'Se mapearon todos los puntos de entrada a la app —enlaces de campaña, enlaces de invitación, publicaciones sociales— y los datos de atribución que marketing necesitaba en cada caso, incluido el deep linking diferido para usuarios que aún no tenían la app instalada.',
        },
        {
          label: 'Acción',
          body: 'Se integró Branch.io en iOS y Android, se conectaron los parámetros de los enlaces a eventos de atribución, y se enlazaron esos eventos con los paneles de analítica de marketing.',
        },
        {
          label: 'Resultado',
          body: 'Marketing obtuvo por primera vez visibilidad de atribución por canal, lo que permitió tomar decisiones basadas en datos sobre dónde invertir el presupuesto de adquisición en lugar de depender de conjeturas.',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Casos de estudio',
    intro: 'Un vistazo más de cerca a algunas decisiones: el problema que encontré, cómo lo diagnostiqué y por qué elegí esta solución entre las alternativas.',
    readMore: 'Leer la historia completa',
    backToList: '← Todos los casos de estudio',
    viewAll: 'Ver todos los casos de estudio',
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
  contact: {
    heading: 'Ponte en contacto',
    description: '¿Tienes una propuesta, proyecto o pregunta? Envíame un mensaje y te responderé pronto.',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    messagePlaceholder: 'Mensaje',
    submitLabel: 'Enviar mensaje',
    sendingLabel: 'Enviando…',
    successMessage: 'Mensaje enviado — te responderé pronto.',
    errorMessage: 'Algo salió mal. Inténtalo de nuevo o escríbeme directamente por correo.',
    orEmailDirectly: 'O escríbeme directamente a',
  },
  footer: {
    tagline: 'De móvil a backend, y hasta infraestructura.',
    rights: 'Todos los derechos reservados.',
  },
};

export default es;
