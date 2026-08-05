import type { SiteContent } from './types';

const zhCN: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: '软件工程师',
    location: '韩国首尔',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      '我是一名经历过从移动应用、后端服务到云基础设施全流程的开发者,注重用户体验与运营效率的平衡。凭借对客户端体验的深刻理解,通过API设计、数据建模、性能优化和运维自动化,构建稳定可靠的服务。',
    yearsOfExperience: 4,
    yearsSuffix: '年经验',
  },
  nav: {
    impact: '业绩亮点',
    experience: '工作经历',
    caseStudy: '案例研究',
    skills: '技能',
    handbook: '手册',
    contact: '联系方式',
  },
  sectionLabels: {
    impact: '业绩亮点',
    experience: '工作经历',
    caseStudy: '案例研究',
    skills: '技能',
    education: '教育背景',
    freelance: '自由职业项目',
  },
  impactStats: [
    {
      label: 'Redis 内存使用率',
      value: '90% → 58%',
      detail: '将关注动态的 Fan-out ZSET 裁剪为每用户最近 500 条',
      direction: 'good',
    },
    {
      label: '核心数据库查询响应速度',
      value: '1206ms → 13ms',
      detail: '通过 EXPLAIN ANALYZE 与 Prisma Middleware 定位瓶颈后重建索引、重写查询',
      direction: 'good',
    },
    {
      label: '累计服务用户数',
      value: '10,000+',
      detail: '设计推荐架构与数据管道后稳定运营至今',
      direction: 'neutral',
    },
    {
      label: '嵌入式设备部署量',
      value: '150+ 台',
      detail: '自主研发水培自动化系统,助力完成 Pre-A 轮融资',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: '2025.05 - 至今',
      summary: '基于兴趣的线上/线下社区服务',
      role: '后端工程师',
      highlights: [
        '将关注动态的 Fan-out ZSET 裁剪为每用户最近 500 条,把 Redis 内存使用率从 90% 降至 58%',
        '通过索引策略与查询重写,将核心数据库查询性能提升 92% 以上(1206ms → 13ms)',
        '设计基于推荐算法的服务架构与数据管道,稳定服务 10,000+ 用户',
        '将 AWS 基础设施迁移至 CDK(IaC),并按最小权限原则重新设计 IAM 角色与策略',
        '标准化基于 Docker 的测试环境,通过 GitHub Actions 自动化单元/端到端测试与覆盖率检查',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: '2023.09 - 2024.10',
      summary: '基于生成式 AI 的时尚社区应用',
      role: '移动应用开发',
      highlights: [
        '构建应用内购买(IAP)系统,强化盈利模式',
        '实现深度链接功能,用于用户获取分析与营销效率提升',
        '重构状态管理,提升团队代码可读性与可维护性',
        '搭建应用崩溃追踪与用户行为分析基础设施',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: '2023.05 - 2023.08',
      summary: '职业运动员粉丝社区应用',
      role: '移动应用开发',
      highlights: [
        '集成 Google、Apple 等平台的社交登录功能',
        '构建多语言数据管理与发布系统',
        '进行代码审查、测试与优化以保持代码质量',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: '2021.09 - 2023.04',
      summary: '在线订购服务',
      role: '数据库与新 API 服务端开发',
      highlights: [
        '引入基于 Redis 的身份验证系统,提升认证速度与效率',
        '基于 Socket.IO 构建实时通知功能',
        '开发 API 服务以支持外部集成与服务可扩展性',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: '水培自动化系统',
    period: '2021.09 - 2023.04',
    role: '嵌入式自动化系统开发',
    highlights: [
      '设计并开发针对水培环境优化的嵌入式自动化系统',
      '实现基于 MQTT 的通信架构,用于传感器数据采集与设备远程控制',
      '引入 OTA(空中升级)固件更新机制,提升可维护性与设备可扩展性',
      '主导从电路设计到外包 PCB 制造的全过程,完成早期 MVP 产品化',
    ],
    achievements: ['助力完成 Pre-A 轮融资', '部署 150+ 台设备,含交付至文化中心的机型'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: '核心数据库查询性能提升 92%',
      subtitle: '1206ms → 13ms —— 从 PostgreSQL 瓶颈分析到结构性优化',
      summary: '通过 EXPLAIN ANALYZE 诊断出 1200ms 以上的查询瓶颈,重建索引策略,将响应时间缩短 92%,同时降低了 Redis 内存使用率。',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: '问题',
        body: '核心信息流查询的响应延迟直接影响用户体验并加重服务器负载。当时尚不清楚根本原因是查询本身、索引缺失,还是数据模型设计问题。',
      },
      {
        label: '分析',
        body: '结合 PostgreSQL 的 EXPLAIN ANALYZE 与 Prisma Middleware 追踪生产环境查询的执行计划,并对主要查询性能进行可视化与报告,精确定位瓶颈所在。',
      },
      {
        label: '行动',
        body: '根据瓶颈原因重新制定索引策略,并实施查询重写、条件优化等结构性改进。同时将关注动态的 Fan-out ZSET 裁剪为每用户最近 500 条,把 Redis 内存使用率从 90% 降至 58%,同时降低了故障风险。',
      },
      {
        label: '结果',
          body: '核心查询响应时间从 1206ms 降至 13ms,提升超过 92%。这一成果为后续的推荐架构与数据管道打下基础,目前稳定服务 10,000+ 用户。',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: '将 AWS 基础设施迁移至 CDK 并重构最小权限 IAM',
      subtitle: '从控制台手动管理、权限宽泛的基础设施,转向可审查、遵循最小权限原则的基础设施即代码',
      summary: '用 AWS CDK 取代控制台手动变更,并按最小权限原则重新设计 IAM,使基础设施变更可审查,同时降低了凭证泄露后的影响范围。',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: '问题',
          body: 'AWS 资源一直在控制台中手动创建和修改,变更没有留痕,难以在不同环境间复现。IAM 权限也没有按服务细分,授权范围过宽,难以厘清各服务可访问的资源,一旦某个凭证泄露,影响范围也会随之扩大。',
        },
        {
          label: '分析',
          body: '审查现有 IAM 策略与资源配置,梳理各服务实际所需的权限,并找出因控制台手动变更导致预发布与生产环境出现差异(环境漂移)的具体位置。',
        },
        {
          label: '行动',
          body: '将基础设施定义迁移至 AWS CDK,使每一次变更都以代码形式存在、经由 PR 审查,并可在不同环境间复现。同时按服务重新构建 IAM 角色与策略,遵循最小权限原则,取代此前共享的宽泛权限。',
        },
        {
          label: '结果',
          body: '如今基础设施变更与应用代码遵循同样的审查流程,预发布与生产环境之间的漂移已经消除。即使凭证泄露,影响范围也被限定在单一服务,而非整个账号。',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: '基于深度链接的用户获取归因分析',
      subtitle: '为市场团队提供渠道级归因数据,提升获客预算效率',
      summary: '在应用中全面接入 Branch.io 深度链接,使市场团队能够按具体渠道追踪安装与注册,从而提升获客预算的使用效率。',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: '问题',
          body: '市场团队无法判断某次安装或注册究竟来自哪个渠道、推荐链接还是社交分享,因而没有可靠方式评估各渠道效果或为获客预算投放提供数据依据。',
        },
        {
          label: '分析',
          body: '梳理了应用的所有入口 —— 活动链接、邀请链接、社交分享,以及市场团队在每种场景下所需的归因数据,同时明确了尚未安装应用的用户所需的延迟深度链接需求。',
        },
        {
          label: '行动',
          body: '在 iOS 与 Android 全面接入 Branch.io,将链接参数映射为归因事件,并将这些事件接入市场团队的分析看板。',
        },
        {
          label: '结果',
          body: '市场团队首次获得了按渠道划分的归因可见性,得以基于数据而非猜测来分配获客预算。',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Muntto（문토)",
      title: "解决无 TTL 设置导致的 Redis 缓存内存暴涨问题",
      subtitle: "Lounge 信息流缓存内存使用率从 90% 降至 58%",
      summary: "Muntto Lounge 缓存中由于未设置 TTL，个别热门用户的键无限增长，导致 Redis 内存占用一路攀升至 90%。通过数据驱动的方式定位问题：对各键的 element 数量分布进行采样，确认排名前 1% 的用户键占据了绝大部分内存，随后以 p90 为基准将其上限设为 500 个并分阶段灰度上线。最终内存使用率降至 58%，且未引发任何副作用。",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "问题",
          body: "Muntto 的 Lounge 缓存用于存储用户关注对象的信息流，并将其展示在热门帖等 Spotlight 区域，而这个 Redis 缓存的内存使用率一路飙升至 90%。此前团队只是靠人工查看仪表盘来发现并上报问题，但在搭建了 CloudWatch Alarm → SNS → AWS Chatbot → Slack 的告警联动体系后，才得以及时察觉到这一问题。所幸截至发现时，服务尚未出现故障或响应延迟等实际影响。",
        },
        {
          label: "原因",
          body: "追查后发现，整体内存的 60% 竟来自单一一个缓存键。该键对应的是某个粉丝数众多的热门用户的信息流，由于没有设置 TTL，新的信息流数据不断被追加进去，导致该键无限膨胀。而这段遗留代码当初为何没有设置 TTL，已经无从考证。",
        },
        {
          label: "权衡",
          body: "直接补上 TTL 的方案，由于无法确认当初不设 TTL 的原因，担心引发未知副作用，因而被搁置。改变键结构或引入缓存大小限制的方案，考虑到所需开发资源较大，也被排除。此外还评估过直接扩容缓存实例内存，但这只是放任遗留问题持续累积，因此未予采纳。最终转而对各键的 element 数量分布进行采样（共采样 2,015 个键，p50 为 48、p90 为 504、p99 为 2,195、最大值达 22,415），确认排名前 1% 用户的 ZSET 占据了绝大部分内存，于是判断缩小影响范围后分阶段灰度上线，是投入产出比最高的方案。",
        },
        {
          label: "决策",
          body: "决定以 p90 为基准，将每个缓存键的 element 数量上限设为 500 个。利用 ZSET 的特性，实现了在新信息流写入时自动裁剪（trim）掉最旧的数据；对已存在的键保持不变，仅从此后新写入的键开始逐步灰度上线该策略。",
        },
        {
          label: "结果",
          body: "变更上线后，Redis 内存使用率从 90% 降至 58%。灰度上线后，也未观察到因旧信息流被裁剪而引发的用户投诉等副作用。",
        },
        {
          label: "经验",
          body: "认识到在引入缓存时，应当把设置 TTL 的依据明确记录下来，这样日后排查原因和应对问题会容易得多。也确立了一条原则：再遇到没有 TTL 的遗留配置时，不应贸然直接加上 TTL，而要先充分评估可能的副作用再动手。同时也验证了单纯扩容缓存内存这种省事的做法并非根本解决方案，只会让遗留结构的问题持续累积。",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: '案例研究',
    intro: '记录了几个关键决策 —— 我遇到的问题、如何诊断,以及在多个方案中为什么选择了这种解决方式。',
    readMore: '查看完整内容',
    backToList: '← 返回案例列表',
    viewAll: '查看全部案例',
  },
  skillGroups: [
    {
      title: '后端',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis、Docker',
        '生产级 API 服务的设计与开发',
        '实时通信(通知/认证)架构实现',
        'AWS 环境的部署与运维',
      ],
    },
    {
      title: '移动端',
      items: [
        '基于 Flutter 开发并运营多款应用',
        '状态管理:Bloc、Riverpod、GetX',
        '实时聊天、应用内购买、社交登录、多语言支持',
        '用户行为分析与崩溃报告集成',
      ],
    },
  ],
  education: {
    school: '庆熙大学',
    degree: '机械工程学士',
    period: '2013.03 - 2020.02',
    notes: [
      '使用 Matlab 分析惯性传感器(IMU)数据,实现步态分析与骨骼动作可视化',
      '在毕业设计研究评选中获得鼓励奖',
    ],
  },
  freelanceProjects: [
    {
      title: '电商平台后端开发支持',
      period: '2024.11 - 2025.01',
      points: [
        '解决服务端与客户端数据格式不一致问题,开发新 API(NestJS、MikroORM)',
        '优化 API 响应速度与服务器性能,提升用户体验',
      ],
    },
    {
      title: '社交约会应用开发',
      period: '2024.06 - 2024.08',
      points: [
        '主导应用从设计、开发、测试到发布的全流程,实现实时聊天、资料管理与身份认证(Flutter)',
        '发布至 App Store/Google Play,并根据用户反馈持续迭代',
      ],
    },
    {
      title: '身心健康管理应用开发支持',
      period: '2024.04 - 2024.07',
      points: ['开发身心健康数据可视化功能,并基于用户反馈优化 UI/UX(Flutter)'],
    },
  ],
  contact: {
    heading: '联系我',
    description: '如果有合作意向或问题,欢迎通过下方表单给我留言。',
    namePlaceholder: '姓名',
    emailPlaceholder: '邮箱',
    messagePlaceholder: '留言内容',
    submitLabel: '发送消息',
    sendingLabel: '发送中…',
    successMessage: '消息已发送,我会尽快回复您。',
    errorMessage: '发送失败,请稍后重试,或直接发邮件联系我。',
    orEmailDirectly: '或直接发送邮件至:',
  },
  footer: {
    tagline: '从移动端到后端,再到基础设施。',
    rights: '版权所有。',
  },
};

export default zhCN;
