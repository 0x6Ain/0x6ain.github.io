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
  caseStudy: {
    company: 'Munto',
    title: '核心数据库查询性能提升 92%',
    subtitle: '1206ms → 13ms —— 从 PostgreSQL 瓶颈分析到结构性优化',
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
  footer: {
    tagline: '从移动端到后端,再到基础设施。',
    rights: '版权所有。',
  },
};

export default zhCN;
