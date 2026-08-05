import type { SiteContent } from './types';

const pt: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Desenvolvedor de Software',
    location: 'Seul, Coreia do Sul',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Desenvolvedor com experiência em aplicativos móveis, serviços de backend e infraestrutura em nuvem, sempre equilibrando experiência do usuário e eficiência operacional. Com um forte entendimento da experiência do cliente, construo serviços confiáveis por meio de design de APIs, modelagem de dados, otimização de desempenho e automação operacional.',
    yearsOfExperience: 4,
    yearsSuffix: ' anos',
  },
  nav: {
    impact: 'Impacto',
    experience: 'Experiência',
    caseStudy: 'Estudo de caso',
    skills: 'Habilidades',
    handbook: 'Manual',
    contact: 'Contato',
  },
  sectionLabels: {
    impact: 'Impacto',
    experience: 'Experiência profissional',
    caseStudy: 'Estudo de caso',
    skills: 'Habilidades',
    education: 'Formação',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Uso de memória do Redis',
      value: '90% → 58%',
      detail: 'Redução do ZSET de fan-out do feed de seguidos para as últimas 500 entradas por usuário',
      direction: 'good',
    },
    {
      label: 'Latência de consultas críticas ao BD',
      value: '1206ms → 13ms',
      detail: 'Gargalos diagnosticados com EXPLAIN ANALYZE e Prisma Middleware, com reconstrução de índices e consultas',
      direction: 'good',
    },
    {
      label: 'Usuários ativos acumulados',
      value: '10.000+',
      detail: 'Operação estável após o design da arquitetura de recomendação e do pipeline de dados',
      direction: 'neutral',
    },
    {
      label: 'Dispositivos embarcados implantados',
      value: '150+',
      detail: 'Sistema próprio de automação hidropônica; contribuiu para uma rodada de investimento Pre-A',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'mai. 2025 - Atual',
      summary: 'Serviço de comunidade online/offline baseado em interesses',
      role: 'Engenheiro de backend',
      highlights: [
        'Redução do uso de memória do Redis de 90% para 58% ao limitar o ZSET de fan-out às últimas 500 entradas por usuário',
        'Melhoria de mais de 92% no desempenho de consultas críticas ao BD (1206ms → 13ms) com estratégia de índices e reescrita de consultas',
        'Design de arquitetura de serviço e pipeline de dados orientados a recomendação, servindo de forma estável mais de 10.000 usuários',
        'Migração da infraestrutura AWS para CDK (IaC) e redesenho de papéis/políticas IAM com base no princípio do menor privilégio',
        'Padronização do ambiente de testes baseado em Docker e automação de testes unitários/E2E e cobertura com GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'set. 2023 - out. 2024',
      summary: 'Aplicativo de comunidade de moda com IA generativa',
      role: 'Desenvolvedor de aplicativos móveis',
      highlights: [
        'Construção de sistema de compras no aplicativo (IAP) para fortalecer o modelo de receita',
        'Implementação de deep linking para analisar aquisição de usuários e melhorar a eficiência de marketing',
        'Refatoração do gerenciamento de estado para melhorar a compreensão do código pela equipe e a manutenibilidade',
        'Configuração de rastreamento de falhas e uma base para análise de comportamento do usuário',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'mai. 2023 - ago. 2023',
      summary: 'Aplicativo de comunidade de fãs para atletas profissionais',
      role: 'Desenvolvedor de aplicativos móveis',
      highlights: [
        'Integração de login social via Google, Apple e outras plataformas',
        'Construção de gerenciamento de dados de localização e pipelines de implantação',
        'Revisões de código, testes e melhorias para manter a qualidade da base de código',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'set. 2021 - abr. 2023',
      summary: 'Serviço de pedidos online',
      role: 'Banco de dados e desenvolvimento de novo servidor de API',
      highlights: [
        'Introdução de sistema de verificação de identidade baseado em Redis, melhorando velocidade e eficiência da autenticação',
        'Construção de notificações em tempo real com Socket.IO',
        'Desenvolvimento de servidores de API para suportar integrações externas e escalabilidade do serviço',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Sistema de automação hidropônica',
    period: 'set. 2021 - abr. 2023',
    role: 'Desenvolvimento de sistema de automação embarcado',
    highlights: [
      'Design e desenvolvimento de sistema embarcado de automação otimizado para ambientes hidropônicos',
      'Implementação de comunicação baseada em MQTT para coleta de dados de sensores e controle remoto de equipamentos',
      'Atualizações de firmware OTA para melhorar a manutenibilidade e escalabilidade dos dispositivos',
      'Liderança do processo completo, do design de circuitos à fabricação terceirizada de PCB, até um MVP em estágio inicial',
    ],
    achievements: ['Contribuiu para uma rodada de investimento Pre-A', 'Mais de 150 dispositivos implantados, incluindo unidades entregues a um centro cultural'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Consultas críticas ao BD 92% mais rápidas',
      subtitle: '1206ms → 13ms — da análise de gargalos a correções estruturais no PostgreSQL',
      summary: 'Diagnostiquei um gargalo de mais de 1200ms com EXPLAIN ANALYZE, reconstruí a estratégia de índices e reduzi o tempo de resposta em 92%, além de reduzir o uso de memória do Redis.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Problema',
        body: 'A latência na consulta principal do feed afetava diretamente a experiência do usuário e aumentava a carga do servidor. Não estava claro se a causa raiz era a própria consulta, a falta de índices ou o modelo de dados.',
      },
      {
        label: 'Análise',
        body: 'Uso do EXPLAIN ANALYZE do PostgreSQL junto com Prisma Middleware para rastrear planos de execução de consultas em produção, com visualização e relatório das consultas mais lentas para identificar exatamente o gargalo.',
      },
      {
        label: 'Ação',
        body: 'Reconstrução da estratégia de índices de acordo com o gargalo e aplicação de correções estruturais: reescrita de consultas e otimização de condições. Paralelamente, o ZSET de fan-out foi limitado às últimas 500 entradas por usuário, reduzindo o uso de memória do Redis de 90% para 58% e diminuindo o risco de falhas.',
      },
      {
        label: 'Resultado',
          body: 'O tempo de resposta da consulta principal caiu de 1206ms para 13ms, uma melhoria de mais de 92%. Esse trabalho se tornou a base de uma arquitetura de recomendação e pipeline de dados que hoje serve de forma estável mais de 10.000 usuários.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migração da infraestrutura AWS para CDK com IAM de privilégio mínimo',
      subtitle: 'De uma infraestrutura gerenciada manualmente pelo console, com permissões amplas, para uma infraestrutura como código revisável e de privilégio mínimo',
      summary: 'Substituí as alterações manuais no console da AWS por AWS CDK e redesenhei o IAM em torno do privilégio mínimo, tornando as mudanças de infraestrutura revisáveis e reduzindo o raio de impacto de qualquer credencial comprometida.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problema',
          body: 'Os recursos da AWS eram provisionados manualmente pelo console, então as mudanças não ficavam documentadas e eram difíceis de reproduzir entre ambientes. As roles do IAM também tinham escopo amplo demais, dificultando saber quais serviços podiam acessar quais recursos — e ampliando o impacto de qualquer credencial comprometida.',
        },
        {
          label: 'Análise',
          body: 'Auditamos as políticas de IAM e configurações de recursos existentes para mapear quais permissões cada serviço realmente precisava, e identificamos onde mudanças manuais no console haviam causado divergência entre os ambientes de staging e produção.',
        },
        {
          label: 'Ação',
          body: 'Migramos as definições de infraestrutura para o AWS CDK, de modo que toda mudança vira código, é revisada via pull request e é reproduzível entre ambientes. Em paralelo, reconstruímos as roles e políticas de IAM por serviço em torno do privilégio mínimo, em vez de permissões amplas compartilhadas.',
        },
        {
          label: 'Resultado',
          body: 'As mudanças de infraestrutura agora passam pelo mesmo processo de revisão que o código da aplicação, a divergência entre staging e produção foi eliminada, e o impacto potencial de uma credencial vazada fica restrito a um único serviço em vez de toda a conta.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep linking para atribuição de aquisição de usuários',
      subtitle: 'Fornecer ao marketing dados de atribuição por canal para melhorar a eficiência do investimento em aquisição',
      summary: 'Integrei deep linking com Branch.io em todo o app para que o marketing pudesse atribuir instalações e cadastros a campanhas específicas, melhorando a eficiência do investimento em aquisição.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problema',
          body: 'O marketing não conseguia saber qual campanha, link de indicação ou compartilhamento social realmente gerava uma instalação ou cadastro, então não havia forma confiável de avaliar o desempenho por canal ou justificar o investimento em aquisição.',
        },
        {
          label: 'Análise',
          body: 'Mapeamos todos os pontos de entrada no app — links de campanha, links de convite, compartilhamentos sociais — e os dados de atribuição que o marketing precisava em cada caso, incluindo deep linking diferido para usuários que ainda não tinham o app instalado.',
        },
        {
          label: 'Ação',
          body: 'Integramos o Branch.io no iOS e Android, conectamos os parâmetros dos links a eventos de atribuição, e ligamos esses eventos aos dashboards de analytics do marketing.',
        },
        {
          label: 'Resultado',
          body: 'O marketing obteve, pela primeira vez, visibilidade de atribuição por canal, permitindo decisões orientadas por dados sobre onde investir o orçamento de aquisição em vez de depender de suposições.',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Munto",
      title: "Resolução do estouro de memória em cache Redis sem TTL",
      subtitle: "Uso de memória do cache do feed do Lounge: 90% → 58%",
      summary: "No cache do Lounge da Munto, a ausência de TTL fazia com que a chave de determinados usuários populares crescesse indefinidamente, elevando o uso de memória do Redis a 90%. Uma análise orientada por dados identificou o problema: a amostragem da distribuição do número de elementos mostrou que o 1% de usuários no topo concentrava a maior parte da memória. A solução aplicou um limite (cap) de 500 elementos com base no p90 e um rollout gradual, reduzindo o uso de memória para 58% sem efeitos colaterais.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Problema",
          body: "O cache do Lounge da Munto armazenava o feed dos usuários seguidos e o exibia em áreas de destaque, como posts populares. O uso de memória desse cache Redis subiu até 90%. Antes, os problemas eram identificados manualmente checando dashboards, mas, com a implantação de um pipeline de monitoramento (CloudWatch Alarm → SNS → AWS Chatbot → Slack), foi possível detectar o problema por meio de alertas automáticos. Felizmente, até aquele momento não havia impacto real, como falhas no serviço ou lentidão nas respostas.",
        },
        {
          label: "Causa",
          body: "A investigação revelou que 60% de toda a memória estava concentrada em uma única chave de cache. Essa chave correspondia ao feed de um usuário com grande número de seguidores e, por não ter TTL configurado, novos itens de feed eram continuamente adicionados (append), fazendo a chave crescer sem limite. Não havia registro do motivo pelo qual o TTL havia sido omitido no código legado desde o início.",
        },
        {
          label: "Trade-off",
          body: "Simplesmente adicionar um TTL foi descartado, já que não havia como confirmar por que o design original não incluía TTL, criando risco de efeitos colaterais. Alterar a estrutura da chave ou introduzir um limite de tamanho de cache também foi descartado por exigir esforço de desenvolvimento significativo. Aumentar a memória da própria instância de cache foi considerado, mas rejeitado por apenas adiar o problema, permitindo que a estrutura legada continuasse acumulando dados. Em vez disso, foi feita uma amostragem da distribuição do número de elementos (2.015 amostras: p50 = 48, p90 = 504, p99 = 2.195, máximo = 22.415), confirmando que o ZSET do 1% de usuários no topo concentrava a maior parte da memória. Reduzir o escopo do problema e aplicar um rollout gradual mostrou ser a abordagem mais eficiente em relação ao esforço necessário.",
        },
        {
          label: "Decisão",
          body: "Foi decidido limitar (cap) o número de elementos por chave de cache a 500, com base no p90. Aproveitando as características do ZSET, a implementação faz com que, ao chegar um novo item de feed, os valores mais antigos sejam removidos (trim) primeiro. As chaves existentes foram mantidas como estavam, e o novo limite foi aplicado gradualmente apenas às chaves criadas a partir dali.",
        },
        {
          label: "Resultado",
          body: "Após a mudança, o uso de memória do Redis caiu de 90% para 58%. Até o momento, não foram observados efeitos colaterais, como reclamações de usuários decorrentes da remoção de itens antigos do feed após o rollout.",
        },
        {
          label: "Aprendizado",
          body: "Ficou claro que, ao introduzir um cache, documentar formalmente a justificativa para a configuração de TTL facilita a identificação de causas e a resposta a problemas futuros. Também ficou estabelecido o princípio de que, ao encontrar configurações legadas sem TTL, a resposta não deve ser simplesmente adicionar um TTL, mas sim avaliar cuidadosamente os possíveis efeitos colaterais antes de agir. Além disso, confirmou-se que apenas aumentar a memória do cache não é uma solução definitiva, pois permite que a estrutura legada continue se acumulando indefinidamente.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Estudos de caso',
    intro: 'Um olhar mais atento sobre algumas decisões — o problema que encontrei, como o diagnostiquei e por que escolhi essa solução entre as alternativas.',
    readMore: 'Ler a história completa',
    backToList: '← Todos os estudos de caso',
    viewAll: 'Ver todos os estudos de caso',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Design e desenvolvimento de servidores de API em produção',
        'Arquitetura de comunicação em tempo real (notificações/autenticação)',
        'Implantação e operação na AWS',
      ],
    },
    {
      title: 'Mobile',
      items: [
        'Desenvolvimento e operação de vários aplicativos com Flutter',
        'Gerenciamento de estado: Bloc, Riverpod, GetX',
        'Chat em tempo real, compras no aplicativo, login social, localização',
        'Integração de análise de comportamento do usuário e relatórios de falhas',
      ],
    },
  ],
  education: {
    school: 'Universidade Kyung Hee',
    degree: 'Bacharelado em Engenharia Mecânica',
    period: 'mar. 2013 - fev. 2020',
    notes: [
      'Análise de dados de sensores inerciais (IMU) no MATLAB para análise de marcha e visualização de movimento esquelético',
      'Prêmio de incentivo do grupo de pesquisa do projeto de conclusão de curso',
    ],
  },
  freelanceProjects: [
    {
      title: 'Suporte de backend para plataforma de e-commerce',
      period: 'nov. 2024 - jan. 2025',
      points: [
        'Resolução de incompatibilidades de formato de dados entre servidor e cliente, e desenvolvimento de novas APIs (NestJS, MikroORM)',
        'Melhoria da experiência do usuário otimizando a velocidade de resposta da API e o desempenho do servidor',
      ],
    },
    {
      title: 'Desenvolvimento de aplicativo móvel de relacionamento',
      period: 'jun. 2024 - ago. 2024',
      points: [
        'Liderança completa do aplicativo: design, desenvolvimento, testes e lançamento; chat em tempo real, gerenciamento de perfil e verificação de identidade (Flutter)',
        'Publicação na App Store/Google Play e iteração contínua com base no feedback dos usuários',
      ],
    },
    {
      title: 'Suporte ao desenvolvimento de aplicativo de saúde física e mental',
      period: 'abr. 2024 - jul. 2024',
      points: ['Desenvolvimento de visualizações de dados de saúde física/mental e melhorias de UI/UX com base no feedback dos usuários (Flutter)'],
    },
  ],
  contact: {
    heading: 'Entre em contato',
    description: 'Tem uma proposta, projeto ou pergunta? Envie uma mensagem abaixo.',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'E-mail',
    messagePlaceholder: 'Mensagem',
    submitLabel: 'Enviar mensagem',
    sendingLabel: 'Enviando…',
    successMessage: 'Mensagem enviada — retornarei em breve.',
    errorMessage: 'Algo deu errado. Tente novamente ou envie um e-mail diretamente.',
    orEmailDirectly: 'Ou envie um e-mail diretamente para',
  },
  footer: {
    tagline: 'Do mobile ao backend, até a infraestrutura.',
    rights: 'Todos os direitos reservados.',
  },
};

export default pt;
