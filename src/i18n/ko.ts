import type { SiteContent } from './types';

const ko: SiteContent = {
  profile: {
    name: '홍진영',
    subName: 'Jinyoung Hong',
    title: 'Software Developer',
    location: '서울',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      '모바일 애플리케이션부터 백엔드, 클라우드 인프라까지 서비스 전반을 경험하며 사용자 경험과 운영 효율을 함께 고려하는 개발자입니다. 클라이언트 경험을 이해하는 강점을 바탕으로 API 설계, 데이터 모델링, 성능 최적화, 운영 자동화를 통해 안정적인 서비스를 구축하고 있습니다.',
    yearsOfExperience: 4,
    yearsSuffix: '년차',
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
      label: 'Redis 메모리 사용률',
      value: '90% → 58%',
      detail: '팔로우 피드 Fan-out ZSET를 사용자당 최근 500건으로 트리밍',
      direction: 'good',
    },
    {
      label: '핵심 DB 쿼리 응답 속도',
      value: '1206ms → 13ms',
      detail: 'Explain Analyze·Prisma Middleware로 병목 분석 후 인덱스·쿼리 재작성',
      direction: 'good',
    },
    {
      label: '누적 서비스 이용자',
      value: '10,000+',
      detail: '추천 아키텍처 설계 및 데이터 파이프라인 구축 이후 안정적 운영',
      direction: 'neutral',
    },
    {
      label: '임베디드 기기 운용',
      value: '150대+',
      detail: '자체 개발 수경재배 자동화 시스템, Pre-A 투자 유치 기여',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: '문토',
      period: '2025.05 - 현재',
      summary: '관심사 기반 온/오프라인 커뮤니티 서비스',
      role: '백엔드 엔지니어',
      highlights: [
        'Redis 메모리 사용률 90% → 58% 개선 (팔로우 피드 Fan-out ZSET 트리밍)',
        '핵심 DB 쿼리 성능 92% 이상 개선 (1206ms → 13ms), 인덱스 전략 및 쿼리 재작성',
        '추천 기반 서비스 아키텍처 설계 및 데이터 파이프라인 구축, 10,000명+ 이용자 안정 운영',
        'AWS 인프라를 CDK(IaC) 기반으로 전환, IAM 최소 권한 원칙 기반 보안 체계 구축',
        'Docker 기반 테스트 인프라 표준화 및 GitHub Actions CI 자동화로 품질 관리 체계 구축',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: '2023.09 - 2024.10',
      summary: '생성형 AI를 활용한 패션 커뮤니티 서비스',
      role: '모바일 앱 개발',
      highlights: [
        'IAP 시스템 구현 및 수익 구조 강화',
        '딥 링크 기능 구현을 통한 사용자 유입 분석 및 마케팅 효율 증대',
        '상태 관리 리팩토링으로 팀원 간 코드 이해도 향상 및 유지 보수성 개선',
        '앱 크래시 추적 및 사용자 행동 데이터 분석 기반 마련',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: '2023.05 - 2023.08',
      summary: '스포츠 선수 팬 커뮤니티 서비스',
      role: '모바일 앱 개발',
      highlights: [
        'Google, Apple 등 소셜 플랫폼 로그인 기능 통합 구축',
        '언어 지원 데이터 관리 및 배포 시스템 구축',
        '코드 품질 유지를 위한 코드 리뷰, 테스트 및 개선 작업 수행',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: '2021.09 - 2023.04',
      summary: '온라인 주문 서비스',
      role: '데이터베이스 및 신규 API 서버 개발',
      highlights: [
        'Redis 기반 본인인증 시스템 도입으로 인증 속도와 효율성 개선',
        'Socket.IO 기반 실시간 알림 기능 구축',
        'API 서버 개발을 통한 외부 연동 및 서비스 확장성 지원',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: '수경재배 자동화 시스템',
    period: '2021.09 - 2023.04',
    role: '자동화 임베디드 시스템 개발',
    highlights: [
      '수경재배 환경에 최적화된 임베디드 자동화 시스템 설계 및 개발',
      'MQTT 기반 통신 구조로 센서 데이터 수집 및 장비 원격 제어 시스템 구축',
      'OTA(Over-The-Air) 방식 펌웨어 업데이트로 유지보수 효율성 강화',
      '회로도 설계부터 외주 PCB 제작까지 리딩, MVP 제품화 초기 단계 완성',
    ],
    achievements: ['Pre-A 투자 유치 기여', '150대 이상 기기 운용 및 자곡 문화센터 기기 납품'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: '문토',
      title: '핵심 DB 쿼리 92% 성능 개선',
      subtitle: '1206ms → 13ms, PostgreSQL 병목 분석부터 구조적 개선까지',
      summary: 'EXPLAIN ANALYZE로 1200ms대 쿼리 병목을 진단하고 인덱스 전략을 재구축해 응답 시간을 92% 단축하고 Redis 메모리 사용률도 함께 줄였습니다.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
        {
          label: 'Problem',
          body: '핵심 피드 조회 쿼리의 응답 지연이 사용자 경험과 서버 부하에 직접적인 영향을 주고 있었습니다. 원인이 특정 쿼리인지, 인덱스 부재인지, 데이터 모델 문제인지 파악되지 않은 상태였습니다.',
        },
        {
          label: 'Analysis',
          body: 'PostgreSQL EXPLAIN ANALYZE와 Prisma Middleware를 활용해 실운영 쿼리의 실행 계획을 추적하고, 주요 쿼리 성능을 시각화·리포팅하여 병목 구간을 구체적으로 특정했습니다.',
        },
        {
          label: 'Action',
          body: '병목 원인에 맞춰 인덱스 전략을 재수립하고, 쿼리 재작성과 조건 최적화 등 구조적 개선을 적용했습니다. 동시에 팔로우 피드 Fan-out ZSET를 사용자당 최근 500건으로 트리밍해 Redis 메모리 사용률을 90%에서 58%로 낮춰 장애 가능성도 함께 줄였습니다.',
        },
        {
          label: 'Result',
          body: '핵심 쿼리 응답 시간이 1206ms에서 13ms로, 92% 이상 개선되었습니다. 이 개선을 기반으로 추천 아키텍처와 데이터 파이프라인을 구축해 10,000명 이상이 이용하는 서비스를 안정적으로 운영하고 있습니다.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: '문토',
      title: 'AWS 인프라 CDK 전환과 IAM 최소 권한 재설계',
      subtitle: '콘솔로 수동 관리하던 인프라를, 리뷰 가능하고 최소 권한 원칙을 지키는 코드 기반 인프라로',
      summary: 'AWS 콘솔의 수동 변경을 CDK 기반 코드로 전환하고 IAM을 최소 권한 원칙으로 재설계해, 인프라 변경을 리뷰 가능하게 만들고 크리덴셜 유출 시 영향 범위를 줄였습니다.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Problem',
          body: 'AWS 리소스가 콘솔에서 수동으로 생성·변경되어 변경 이력이 남지 않고 환경 간 재현이 어려웠습니다. IAM 권한도 서비스별로 세분화되지 않고 폭넓게 부여되어 있어, 어떤 서비스가 어떤 리소스에 접근 가능한지 파악하기 어려웠고 크리덴셜 하나가 유출되었을 때의 피해 범위도 컸습니다.',
        },
        {
          label: 'Analysis',
          body: '기존 IAM 정책과 리소스 구성을 감사해 서비스별로 실제 필요한 권한이 무엇인지 매핑하고, 콘솔 수동 변경으로 스테이징과 프로덕션 환경이 서로 달라진 지점(환경 드리프트)을 찾아냈습니다.',
        },
        {
          label: 'Action',
          body: '인프라 정의를 AWS CDK로 전환해 모든 변경이 코드로 남고 PR을 통해 리뷰되며 환경 간 재현이 가능하도록 만들었습니다. 동시에 서비스별로 IAM 역할과 정책을 최소 권한 원칙에 맞게 재구성했습니다.',
        },
        {
          label: 'Result',
          body: '이제 인프라 변경도 애플리케이션 코드와 동일한 리뷰 프로세스를 거치고, 스테이징-프로덕션 간 환경 드리프트가 사라졌습니다. 크리덴셜이 유출되더라도 영향 범위가 계정 전체가 아닌 해당 서비스로 한정됩니다.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: '딥 링크 기반 사용자 유입 채널 분석',
      subtitle: '마케팅 채널별 기여도 데이터를 확보해 유입 예산 효율을 높이다',
      summary: 'Branch.io 딥 링크를 앱 전반에 연동해 설치·가입을 캠페인 단위로 추적할 수 있게 만들어, 마케팅 유입 예산의 효율을 높였습니다.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Problem',
          body: '어떤 캠페인, 추천 링크, 소셜 공유가 실제 설치·가입으로 이어졌는지 알 수 없어 채널별 성과를 평가하거나 유입 예산 집행의 근거를 데이터로 댈 방법이 없었습니다.',
        },
        {
          label: 'Analysis',
          body: '캠페인 링크, 초대 링크, 소셜 공유 등 앱으로 들어오는 모든 진입 경로와 각 경로에서 마케팅팀이 필요로 하는 기여 데이터를 정리했고, 앱이 아직 설치되지 않은 사용자를 위한 디퍼드 딥 링킹 요구사항도 함께 파악했습니다.',
        },
        {
          label: 'Action',
          body: 'iOS/Android 전반에 Branch.io를 연동하고, 링크 파라미터를 기여(attribution) 이벤트로 매핑한 뒤 마케팅팀의 분석 대시보드와 연결했습니다.',
        },
        {
          label: 'Result',
          body: '마케팅팀이 처음으로 채널별 기여도를 확인할 수 있게 되었고, 감에 의존하지 않고 데이터 기반으로 유입 예산을 배분할 수 있게 되었습니다.',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "문토",
      title: "TTL 없는 Redis 캐시 메모리 폭증 문제 해결",
      subtitle: "라운지 피드 캐시 메모리 사용률 90% → 58% 개선",
      summary: "문토 라운지 캐시에서 TTL 미설정으로 특정 인기 유저 키가 무한히 커지며 Redis 메모리가 90%까지 상승한 문제를 데이터 기반으로 분석해 해결했다. element 개수 분포를 샘플링해 상위 1% 유저 키가 메모리 대부분을 차지함을 확인하고, p90 기준 500개 cap과 점진적 롤아웃으로 대응했다. 그 결과 메모리 사용률을 58%까지 낮췄고 부작용 없이 마무리했다.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Problem",
          body: "문토의 라운지 캐시는 유저가 팔로우한 대상의 피드를 저장해두고 인기글 같은 스포트라이트 영역에 노출하는 Redis 캐시였는데, 이 캐시의 메모리 사용률이 90%까지 치솟았다. 이전에는 대시보드를 수동으로 확인하며 이슈를 레이징하는 수준이었지만, CloudWatch Alarm → SNS → AWS Chatbot을 거쳐 Slack으로 알림을 연동한 모니터링 체계를 구축하면서 이 문제를 인지할 수 있었다. 다행히 이 시점까지는 서비스 장애나 응답 지연 같은 실질적 영향은 없는 상태였다.",
        },
        {
          label: "Cause",
          body: "원인을 추적한 결과 전체 메모리의 60%가 단 하나의 캐시 키에서 발생하고 있음을 확인했다. 이 키는 팔로워 수가 많은 인기 유저의 피드였고, TTL이 설정되어 있지 않아 신규 피드가 계속 append되며 끝없이 커지는 구조였다. 레거시 코드에 애초에 TTL이 빠져 있던 이유는 기록으로 확인할 수 없었다.",
        },
        {
          label: "Trade-off",
          body: "TTL을 단순히 추가하는 방안은 원래 왜 TTL 없이 설계됐는지 근거가 불명확해 사이드 이펙트 우려로 보류했다. 키 구조 변경이나 캐시 크기 제한 도입은 개발 리소스 부담이 크다고 판단해 제외했고, 캐시 인스턴스 메모리 자체를 늘리는 방안도 검토했지만 레거시가 계속 쌓이는 구조를 방치하는 것이라 채택하지 않았다. 대신 element 개수 분포를 샘플링(2,015개, p50 48개·p90 504개·p99 2,195개·최대 22,415개)해 상위 1% 유저의 ZSET이 메모리 대부분을 차지한다는 사실을 확인하고, 범위를 축소한 뒤 점진적으로 롤아웃하는 방향이 가장 리소스 대비 효과적이라고 판단했다.",
        },
        {
          label: "Decision",
          body: "p90 기준에 맞춰 캐시 키의 element 개수를 500개로 제한(cap)하기로 결정했다. ZSET 특성을 활용해 새 피드가 들어올 때 가장 오래된 값부터 교체(trim)되도록 구현했고, 기존 키는 그대로 둔 채 이후 새로 유입되는 키부터 점진적으로 롤아웃했다.",
        },
        {
          label: "Result",
          body: "변경을 적용한 이후 Redis 메모리 사용률이 90%에서 58%까지 낮아졌다. 롤아웃 이후 오래된 피드가 잘려나가 발생할 수 있는 사용자 불만 등의 부작용도 현재까지 확인되지 않았다.",
        },
        {
          label: "Lesson",
          body: "캐시를 도입할 때는 TTL을 설정한 근거를 명문화해 두어야 추후 원인 파악과 대응이 쉬워진다는 점을 배웠다. TTL 없는 레거시 설정을 다시 마주치더라도 무작정 TTL을 추가하기보다 사이드 이펙트를 충분히 검토한 뒤 접근해야 한다는 원칙을 세웠다. 또한 캐시 메모리 자체를 늘리는 손쉬운 방법은 레거시 구조가 계속 누적되는 결과를 낳을 수 있어 근본적 해결책이 아니라는 것도 확인했다.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: '의사결정 사례',
    intro: '실제로 마주했던 문제를 어떻게 진단했고, 여러 대안 중 왜 이 방식을 선택했는지 정리했습니다.',
    readMore: '전체 내용 보기',
    backToList: '← 전체 사례 목록',
    viewAll: '전체 사례 보기',
  },
  skillGroups: [
    {
      title: 'Server',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        '실서비스용 API 서버 설계 및 개발',
        '실시간 통신(알림/인증) 구조 구현',
        'AWS 환경 배포 및 운영',
      ],
    },
    {
      title: 'App',
      items: [
        'Flutter 기반 다수의 앱 개발 및 운영',
        '상태관리: Bloc, Riverpod, GetX',
        '실시간 채팅, 인앱 결제, 소셜 로그인, 다국어 지원',
        '사용자 행동 분석 및 크래시 리포팅 연동',
      ],
    },
  ],
  education: {
    school: '경희대학교',
    degree: '기계공학 학사',
    period: '2013.03 - 2020.02',
    notes: [
      '관성 센서(IMU) 데이터를 Matlab으로 분석해 걸음걸이 분석 및 skeleton 영상 제공',
      '실전문제연구단 평가 장려상 수상',
    ],
  },
  freelanceProjects: [
    {
      title: '이커머스 플랫폼 서버 개발 지원',
      period: '2024.11 - 2025.01',
      points: [
        '서버-클라이언트 데이터 포맷 불일치 해결 및 신규 API 개발 (NestJS, MikroORM)',
        'API 응답 속도 및 서버 성능 최적화로 사용자 경험 개선',
      ],
    },
    {
      title: '모바일 소개팅 서비스 개발',
      period: '2024.06 - 2024.08',
      points: [
        '앱 설계·개발·테스트·배포 전 과정 주도, 실시간 채팅·프로필 관리·PASS 인증 구현 (Flutter)',
        'App Store/Google Play 배포 및 사용자 피드백 기반 지속 업데이트',
      ],
    },
    {
      title: '신체 및 정신 건강 관리 헬스케어 서비스 개발 지원',
      period: '2024.04 - 2024.07',
      points: ['신체·정신 건강 데이터 시각화 기능 개발 및 사용자 피드백 기반 UI/UX 개선 (Flutter)'],
    },
  ],
  contact: {
    heading: '연락하기',
    description: '협업 제안이나 궁금한 점이 있다면 아래 폼으로 편하게 메시지를 남겨주세요.',
    namePlaceholder: '이름',
    emailPlaceholder: '이메일',
    messagePlaceholder: '메시지',
    submitLabel: '메시지 보내기',
    sendingLabel: '보내는 중…',
    successMessage: '메시지가 전송되었습니다. 곧 답장드릴게요.',
    errorMessage: '전송에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 연락해주세요.',
    orEmailDirectly: '또는 이메일로 직접 연락하세요:',
  },
  footer: {
    tagline: '모바일부터 백엔드, 인프라까지.',
    rights: '전체 권리 보유.',
  },
};

export default ko;
