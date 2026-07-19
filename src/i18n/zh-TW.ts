import type { SiteContent } from './types';

const zhTW: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: '軟體工程師',
    location: '韓國首爾',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      '我是一名經歷過行動應用、後端服務到雲端基礎設施全流程的開發者,重視使用者體驗與維運效率的平衡。憑藉對前端使用情境的深刻理解,透過 API 設計、資料建模、效能優化與維運自動化,打造穩定可靠的服務。',
    yearsOfExperience: 4,
    yearsSuffix: '年經驗',
  },
  nav: {
    impact: '成果亮點',
    experience: '工作經歷',
    caseStudy: '案例研究',
    skills: '技能',
    handbook: '手冊',
    contact: '聯絡方式',
  },
  sectionLabels: {
    impact: '成果亮點',
    experience: '工作經歷',
    caseStudy: '案例研究',
    skills: '技能',
    education: '學歷',
    freelance: '接案專案',
  },
  impactStats: [
    {
      label: 'Redis 記憶體使用率',
      value: '90% → 58%',
      detail: '將追蹤動態的 Fan-out ZSET 修剪為每位使用者最近 500 筆',
      direction: 'good',
    },
    {
      label: '核心資料庫查詢回應速度',
      value: '1206ms → 13ms',
      detail: '以 EXPLAIN ANALYZE 與 Prisma Middleware 找出瓶頸後重建索引、重寫查詢',
      direction: 'good',
    },
    {
      label: '累計服務使用者數',
      value: '10,000+',
      detail: '設計推薦架構與資料管線後穩定營運至今',
      direction: 'neutral',
    },
    {
      label: '嵌入式裝置部署數量',
      value: '150+ 台',
      detail: '自行開發水耕自動化系統,協助完成 Pre-A 輪募資',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: '2025.05 - 至今',
      summary: '以興趣為核心的線上/線下社群服務',
      role: '後端工程師',
      highlights: [
        '將追蹤動態的 Fan-out ZSET 修剪為每位使用者最近 500 筆,把 Redis 記憶體使用率從 90% 降至 58%',
        '透過索引策略與查詢重寫,將核心資料庫查詢效能提升 92% 以上(1206ms → 13ms)',
        '設計以推薦演算法為核心的服務架構與資料管線,穩定服務 10,000+ 位使用者',
        '將 AWS 基礎設施遷移至 CDK(IaC),並依最小權限原則重新設計 IAM 角色與政策',
        '標準化以 Docker 為基礎的測試環境,透過 GitHub Actions 自動化單元/端對端測試與覆蓋率檢查',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: '2023.09 - 2024.10',
      summary: '結合生成式 AI 的時尚社群應用程式',
      role: '行動應用開發',
      highlights: [
        '建置應用程式內購買(IAP)系統,強化營收結構',
        '實作深層連結功能,用於使用者取得分析與行銷成效提升',
        '重構狀態管理,提升團隊程式碼理解度與可維護性',
        '建立應用程式當機追蹤與使用者行為分析基礎',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: '2023.05 - 2023.08',
      summary: '職業運動員粉絲社群應用程式',
      role: '行動應用開發',
      highlights: [
        '整合 Google、Apple 等社群平台登入功能',
        '建置多語言資料管理與發佈系統',
        '進行程式碼審查、測試與優化以維持程式碼品質',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: '2021.09 - 2023.04',
      summary: '線上訂購服務',
      role: '資料庫與新版 API 伺服器開發',
      highlights: [
        '導入以 Redis 為基礎的身份驗證系統,提升驗證速度與效率',
        '以 Socket.IO 建置即時通知功能',
        '開發 API 伺服器以支援外部串接與服務擴充性',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: '水耕栽培自動化系統',
    period: '2021.09 - 2023.04',
    role: '嵌入式自動化系統開發',
    highlights: [
      '設計並開發針對水耕栽培環境最佳化的嵌入式自動化系統',
      '實作以 MQTT 為基礎的通訊架構,用於感測資料收集與設備遠端控制',
      '導入 OTA(無線韌體更新)機制,強化可維護性與裝置擴充性',
      '主導從電路設計到委外 PCB 製造的全流程,完成早期 MVP 產品化',
    ],
    achievements: ['協助完成 Pre-A 輪募資', '部署 150 台以上裝置,含交付至文化中心的機型'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: '核心資料庫查詢效能提升 92%',
      subtitle: '1206ms → 13ms —— 從 PostgreSQL 瓶頸分析到結構性優化',
      summary: '透過 EXPLAIN ANALYZE 診斷出 1200ms 以上的查詢瓶頸,重建索引策略,將回應時間縮短 92%,同時降低了 Redis 記憶體使用率。',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: '問題',
        body: '核心動態消息查詢的回應延遲直接影響使用者體驗並加重伺服器負載。當時尚未釐清根本原因是查詢本身、索引缺失,還是資料模型設計問題。',
      },
      {
        label: '分析',
        body: '結合 PostgreSQL 的 EXPLAIN ANALYZE 與 Prisma Middleware 追蹤正式環境查詢的執行計畫,並將主要查詢效能視覺化、產出報告,精準定位瓶頸所在。',
      },
      {
        label: '行動',
        body: '依瓶頸原因重新制定索引策略,並實施查詢重寫、條件最佳化等結構性改善。同時將追蹤動態的 Fan-out ZSET 修剪為每位使用者最近 500 筆,把 Redis 記憶體使用率從 90% 降至 58%,同時降低故障風險。',
      },
      {
        label: '結果',
          body: '核心查詢回應時間從 1206ms 降至 13ms,提升超過 92%。這項成果成為後續推薦架構與資料管線的基礎,目前穩定服務 10,000+ 位使用者。',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: '將 AWS 基礎設施遷移至 CDK 並重構最小權限 IAM',
      subtitle: '從主控台手動管理、權限寬泛的基礎設施,轉向可審查、遵循最小權限原則的基礎設施即程式碼',
      summary: '以 AWS CDK 取代主控台手動變更,並依最小權限原則重新設計 IAM,使基礎設施變更可審查,同時降低了憑證外洩後的影響範圍。',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: '問題',
          body: 'AWS 資源一直在主控台中手動建立與修改,變更沒有留下紀錄,難以在不同環境間重現。IAM 權限也未依服務細分,授權範圍過於寬泛,難以釐清各服務可存取的資源,一旦某組憑證外洩,影響範圍也會隨之擴大。',
        },
        {
          label: '分析',
          body: '審查既有 IAM 政策與資源設定,梳理各服務實際所需的權限,並找出因主控台手動變更導致預備與正式環境出現落差(環境飄移)的具體位置。',
        },
        {
          label: '行動',
          body: '將基礎設施定義遷移至 AWS CDK,讓每次變更都以程式碼形式留存、透過 PR 審查,並可在不同環境間重現。同時依服務重新建構 IAM 角色與政策,遵循最小權限原則,取代先前共用的寬泛權限。',
        },
        {
          label: '結果',
          body: '如今基礎設施變更與應用程式碼遵循相同的審查流程,預備與正式環境間的飄移已經消除。即使憑證外洩,影響範圍也僅限於單一服務,而非整個帳號。',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: '以深度連結分析使用者取得歸因',
      subtitle: '為行銷團隊提供渠道層級的歸因資料,提升取得使用者預算效率',
      summary: '在應用程式中全面導入 Branch.io 深度連結,讓行銷團隊能依具體渠道追蹤安裝與註冊,藉此提升取得使用者預算的運用效率。',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: '問題',
          body: '行銷團隊無法判斷某次安裝或註冊究竟來自哪個活動、推薦連結或社群分享,因此沒有可靠方式評估各渠道成效,也難以為取得使用者的預算投放提供資料依據。',
        },
        {
          label: '分析',
          body: '梳理了應用程式的所有進入點 —— 活動連結、邀請連結、社群分享,以及行銷團隊在每種情境下所需的歸因資料,同時掌握了尚未安裝應用程式的使用者所需的延遲深度連結需求。',
        },
        {
          label: '行動',
          body: '在 iOS 與 Android 全面導入 Branch.io,將連結參數對應至歸因事件,並將這些事件串接至行銷團隊的分析儀表板。',
        },
        {
          label: '結果',
          body: '行銷團隊首次取得依渠道劃分的歸因可視性,得以依據資料而非猜測來分配取得使用者的預算。',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: '案例研究',
    intro: '記錄了幾個關鍵決策 —— 我遇到的問題、如何診斷,以及在多個方案中為什麼選擇了這種解決方式。',
    readMore: '查看完整內容',
    backToList: '← 返回案例列表',
    viewAll: '查看全部案例',
  },
  skillGroups: [
    {
      title: '後端',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis、Docker',
        '正式環境 API 伺服器設計與開發',
        '即時通訊(通知/驗證)架構實作',
        'AWS 環境部署與維運',
      ],
    },
    {
      title: '行動應用',
      items: [
        '以 Flutter 開發並營運多款應用程式',
        '狀態管理:Bloc、Riverpod、GetX',
        '即時聊天、應用程式內購買、社群登入、多語言支援',
        '使用者行為分析與當機回報整合',
      ],
    },
  ],
  education: {
    school: '慶熙大學',
    degree: '機械工程學士',
    period: '2013.03 - 2020.02',
    notes: [
      '以 Matlab 分析慣性感測器(IMU)資料,進行步態分析與骨架動作視覺化',
      '於畢業專題研究評選中獲得獎勵獎',
    ],
  },
  freelanceProjects: [
    {
      title: '電商平台後端開發支援',
      period: '2024.11 - 2025.01',
      points: [
        '解決伺服器與客戶端資料格式不一致問題,開發新版 API(NestJS、MikroORM)',
        '優化 API 回應速度與伺服器效能,提升使用者體驗',
      ],
    },
    {
      title: '交友應用程式開發',
      period: '2024.06 - 2024.08',
      points: [
        '主導應用程式從設計、開發、測試到上架的全流程,實作即時聊天、個人資料管理與身份驗證(Flutter)',
        '上架至 App Store/Google Play,並依使用者回饋持續更新',
      ],
    },
    {
      title: '身心健康管理應用程式開發支援',
      period: '2024.04 - 2024.07',
      points: ['開發身心健康資料視覺化功能,並依使用者回饋優化 UI/UX(Flutter)'],
    },
  ],
  contact: {
    heading: '聯絡我',
    description: '如果有合作機會或問題,歡迎透過下方表單留言給我。',
    namePlaceholder: '姓名',
    emailPlaceholder: '電子郵件',
    messagePlaceholder: '訊息內容',
    submitLabel: '傳送訊息',
    sendingLabel: '傳送中…',
    successMessage: '訊息已傳送,我會盡快回覆您。',
    errorMessage: '傳送失敗,請稍後再試,或直接寄信聯絡我。',
    orEmailDirectly: '或直接寄信至:',
  },
  footer: {
    tagline: '從行動應用到後端,再到基礎設施。',
    rights: '版權所有。',
  },
};

export default zhTW;
