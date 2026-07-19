import type { SiteContent } from './types';

const ja: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'ソフトウェアエンジニア',
    location: 'ソウル、韓国',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'モバイルアプリからバックエンド、クラウドインフラまで、サービス全体を経験してきたエンジニアです。ユーザー体験と運用効率の両方を大切にし、クライアント視点を理解する強みを活かして、API設計・データモデリング・パフォーマンス最適化・運用自動化を通じて安定したサービスを構築しています。',
    yearsOfExperience: 4,
    yearsSuffix: '年',
  },
  nav: {
    impact: '実績',
    experience: '職務経歴',
    caseStudy: 'ケーススタディ',
    skills: 'スキル',
    handbook: 'ハンドブック',
    contact: 'お問い合わせ',
  },
  sectionLabels: {
    impact: '実績',
    experience: '職務経歴',
    caseStudy: 'ケーススタディ',
    skills: 'スキル',
    education: '学歴',
    freelance: 'フリーランス',
  },
  impactStats: [
    {
      label: 'Redisメモリ使用率',
      value: '90% → 58%',
      detail: 'フォローフィードのFan-out ZSETをユーザーごと直近500件にトリミング',
      direction: 'good',
    },
    {
      label: 'コアDBクエリの応答速度',
      value: '1206ms → 13ms',
      detail: 'EXPLAIN ANALYZEとPrisma Middlewareでボトルネックを分析し、インデックスとクエリを再設計',
      direction: 'good',
    },
    {
      label: '累計サービス利用者数',
      value: '10,000+',
      detail: 'レコメンドアーキテクチャとデータパイプラインを構築後、安定運用中',
      direction: 'neutral',
    },
    {
      label: '組込みデバイス運用台数',
      value: '150台以上',
      detail: '自社開発の水耕栽培自動化システム、プレA資金調達に貢献',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: '2025.05 - 現在',
      summary: '興味関心ベースのオンライン/オフラインコミュニティサービス',
      role: 'バックエンドエンジニア',
      highlights: [
        'フォローフィードのFan-out ZSETをトリミングし、Redisメモリ使用率を90%から58%に改善',
        'インデックス戦略とクエリの再設計により、コアDBクエリ性能を92%以上改善(1206ms → 13ms)',
        'レコメンドベースのサービスアーキテクチャとデータパイプラインを設計・構築し、10,000人以上のユーザーを安定運用',
        'AWSインフラをCDK(IaC)に移行し、最小権限原則に基づきIAMロール/ポリシーを再設計',
        'Dockerベースのテスト環境を標準化し、GitHub ActionsでUnit/E2Eテストとカバレッジ検証を自動化',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: '2023.09 - 2024.10',
      summary: '生成AIを活用したファッションコミュニティサービス',
      role: 'モバイルアプリ開発',
      highlights: [
        'アプリ内課金(IAP)システムを実装し、収益構造を強化',
        'ディープリンク機能を実装し、ユーザー流入分析とマーケティング効率を向上',
        '状態管理のリファクタリングにより、チームのコード理解度と保守性を改善',
        'アプリクラッシュ追跡とユーザー行動データ分析の基盤を整備',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: '2023.05 - 2023.08',
      summary: 'プロスポーツ選手のファンコミュニティサービス',
      role: 'モバイルアプリ開発',
      highlights: [
        'Google、Appleなどソーシャルプラットフォームのログイン機能を統合',
        '多言語データ管理と配信システムを構築',
        'コード品質維持のためのコードレビュー、テスト、改善作業を実施',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: '2021.09 - 2023.04',
      summary: 'オンライン注文サービス',
      role: 'データベース・新規APIサーバー開発',
      highlights: [
        'Redisベースの本人認証システムを導入し、認証速度と効率を改善',
        'Socket.IOを活用したリアルタイム通知機能を構築',
        '外部連携とサービス拡張性を支えるAPIサーバーを開発',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: '水耕栽培自動化システム',
    period: '2021.09 - 2023.04',
    role: '組込み自動化システム開発',
    highlights: [
      '水耕栽培環境に最適化した組込み自動化システムを設計・開発',
      'MQTTベースの通信構造でセンサーデータ収集と機器の遠隔制御を実現',
      'OTA(Over-The-Air)によるファームウェア更新で保守性と拡張性を強化',
      '回路設計から外注PCB製造まで主導し、初期MVPの製品化を完了',
    ],
    achievements: ['プレA資金調達に貢献', '150台以上のデバイスを運用、文化センターへの納品実績あり'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'コアDBクエリを92%高速化',
      subtitle: '1206ms → 13ms — PostgreSQLのボトルネック分析から構造的な改善まで',
      summary: 'EXPLAIN ANALYZEで1200ms超のクエリボトルネックを診断し、インデックス戦略を再構築して応答時間を92%短縮、同時にRedisメモリ使用率も削減しました。',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: '課題',
        body: 'コアフィード取得クエリの応答遅延が、ユーザー体験とサーバー負荷に直接影響していました。原因がクエリ自体なのか、インデックス不足なのか、データモデルの問題なのか特定できていない状態でした。',
      },
      {
        label: '分析',
        body: 'PostgreSQLのEXPLAIN ANALYZEとPrisma Middlewareを活用して本番クエリの実行計画を追跡し、主要クエリの性能を可視化・レポート化してボトルネック箇所を具体的に特定しました。',
      },
      {
        label: '対応',
        body: 'ボトルネックの原因に合わせてインデックス戦略を再構築し、クエリの書き換えや条件最適化などの構造的改善を実施。同時にフォローフィードのFan-out ZSETをユーザーごと直近500件にトリミングし、Redisメモリ使用率を90%から58%に低減して障害リスクも軽減しました。',
      },
      {
        label: '結果',
          body: 'コアクエリの応答時間が1206msから13msへ、92%以上改善されました。この改善を基盤にレコメンドアーキテクチャとデータパイプラインを構築し、10,000人以上が利用するサービスを安定運用しています。',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'AWSインフラのCDK移行と最小権限のIAM再設計',
      subtitle: 'コンソールで手動管理していたインフラを、レビュー可能で最小権限原則に基づくコード管理インフラへ',
      summary: 'AWSコンソールでの手動変更をCDKベースのコードに置き換え、IAMを最小権限の原則で再設計。インフラ変更をレビュー可能にし、クレデンシャル漏えい時の影響範囲を縮小しました。',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: '課題',
          body: 'AWSリソースがコンソール上で手動作成・変更されており、変更履歴が残らず環境間の再現が困難でした。IAM権限もサービスごとに細分化されず広範囲に付与されていたため、どのサービスがどのリソースにアクセスできるか把握しづらく、クレデンシャルが一つ漏えいした際の被害範囲も大きくなっていました。',
        },
        {
          label: '分析',
          body: '既存のIAMポリシーとリソース構成を監査し、サービスごとに実際に必要な権限をマッピング。あわせて、コンソールでの手動変更によりステージングとプロダクション環境の構成が乖離していた箇所(環境ドリフト)を特定しました。',
        },
        {
          label: '対応',
          body: 'インフラ定義をAWS CDKに移行し、すべての変更がコードとして残りPRでレビューされ、環境間で再現可能になるようにしました。同時にサービスごとにIAMロールとポリシーを最小権限の原則に沿って再構築しました。',
        },
        {
          label: '結果',
          body: 'インフラの変更もアプリケーションコードと同じレビュープロセスを経るようになり、ステージングとプロダクション間の環境ドリフトが解消されました。クレデンシャルが漏えいしても影響範囲はアカウント全体ではなく該当サービスに限定されます。',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'ディープリンクによるユーザー獲得チャネル分析',
      subtitle: 'マーケティングにチャネル別のアトリビューションデータを提供し、獲得予算の効率を高める',
      summary: 'Branch.ioのディープリンクをアプリ全体に導入し、インストールや登録をキャンペーン単位で追跡可能にすることで、マーケティングの獲得予算効率を高めました。',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: '課題',
          body: 'どのキャンペーン、紹介リンク、SNSシェアが実際のインストールや登録につながったのか把握できず、チャネル別の成果評価や獲得予算の投下判断をデータで裏付ける方法がありませんでした。',
        },
        {
          label: '分析',
          body: 'キャンペーンリンク、招待リンク、SNSシェアなど、アプリへのすべての流入経路と、各経路でマーケティングチームが必要とするアトリビューションデータを整理し、アプリ未インストールユーザー向けのディファードディープリンキング要件も併せて把握しました。',
        },
        {
          label: '対応',
          body: 'iOS/Android全体にBranch.ioを導入し、リンクパラメータをアトリビューションイベントにマッピングした上で、マーケティングチームの分析ダッシュボードと連携させました。',
        },
        {
          label: '結果',
          body: 'マーケティングチームが初めてチャネル別のアトリビューションを確認できるようになり、勘に頼らずデータに基づいて獲得予算を配分できるようになりました。',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'ケーススタディ',
    intro: 'いくつかの意思決定について、直面した課題をどう診断し、数ある選択肢の中でなぜこの方法を選んだのかをまとめました。',
    readMore: '詳細を見る',
    backToList: '← ケーススタディ一覧へ',
    viewAll: 'すべてのケーススタディを見る',
  },
  skillGroups: [
    {
      title: 'サーバー',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        '本番環境向けAPIサーバーの設計・開発',
        'リアルタイム通信(通知/認証)アーキテクチャの実装',
        'AWS環境での構築・運用',
      ],
    },
    {
      title: 'アプリ',
      items: [
        'Flutterで複数のアプリを開発・運用',
        '状態管理: Bloc、Riverpod、GetX',
        'リアルタイムチャット、アプリ内課金、ソーシャルログイン、多言語対応',
        'ユーザー行動分析・クラッシュレポートの連携',
      ],
    },
  ],
  education: {
    school: '慶熙大学校',
    degree: '機械工学 学士',
    period: '2013.03 - 2020.02',
    notes: [
      'IMU(慣性センサー)データをMatlabで分析し、歩行分析とスケルトン映像を提供',
      'キャップストーン研究発表で奨励賞を受賞',
    ],
  },
  freelanceProjects: [
    {
      title: 'ECプラットフォームのバックエンド開発支援',
      period: '2024.11 - 2025.01',
      points: [
        'サーバー・クライアント間のデータフォーマット不一致を解消し、新規APIを開発(NestJS、MikroORM)',
        'API応答速度とサーバー性能を最適化し、ユーザー体験を改善',
      ],
    },
    {
      title: 'マッチングアプリ開発',
      period: '2024.06 - 2024.08',
      points: [
        '設計・開発・テスト・リリースまで一貫して主導し、リアルタイムチャット・プロフィール管理・本人認証を実装(Flutter)',
        'App Store/Google Playへの配信、ユーザーフィードバックに基づく継続的な改善',
      ],
    },
    {
      title: '心身の健康管理ヘルスケアサービス開発支援',
      period: '2024.04 - 2024.07',
      points: ['心身の健康データの可視化機能を開発し、ユーザーフィードバックに基づきUI/UXを改善(Flutter)'],
    },
  ],
  contact: {
    heading: 'お問い合わせ',
    description: 'ご質問やお仕事のご相談があれば、下記フォームからお気軽にメッセージをお送りください。',
    namePlaceholder: 'お名前',
    emailPlaceholder: 'メールアドレス',
    messagePlaceholder: 'メッセージ',
    submitLabel: '送信する',
    sendingLabel: '送信中…',
    successMessage: 'メッセージを送信しました。追ってご連絡します。',
    errorMessage: '送信に失敗しました。もう一度お試しいただくか、メールで直接ご連絡ください。',
    orEmailDirectly: 'または、こちらのメールに直接ご連絡ください:',
  },
  footer: {
    tagline: 'モバイルからバックエンド、インフラまで。',
    rights: 'All rights reserved.',
  },
};

export default ja;
