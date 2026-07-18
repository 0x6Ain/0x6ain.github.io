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
      value: '6,000+',
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
        '추천 기반 서비스 아키텍처 설계 및 데이터 파이프라인 구축, 6,000명+ 이용자 안정 운영',
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
  caseStudy: {
    company: '문토',
    title: '핵심 DB 쿼리 92% 성능 개선',
    subtitle: '1206ms → 13ms, PostgreSQL 병목 분석부터 구조적 개선까지',
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
        body: '핵심 쿼리 응답 시간이 1206ms에서 13ms로, 92% 이상 개선되었습니다. 이 개선을 기반으로 추천 아키텍처와 데이터 파이프라인을 구축해 6,000명 이상이 이용하는 서비스를 안정적으로 운영하고 있습니다.',
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
  footer: {
    tagline: '모바일부터 백엔드, 인프라까지.',
    rights: '전체 권리 보유.',
  },
};

export default ko;
