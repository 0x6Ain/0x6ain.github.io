import type { SiteContent } from './types';

const vi: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Kỹ sư phần mềm',
    location: 'Seoul, Hàn Quốc',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Là một developer đã làm việc xuyên suốt từ ứng dụng di động, dịch vụ backend đến hạ tầng cloud, tôi luôn cân bằng giữa trải nghiệm người dùng và hiệu quả vận hành. Với sự hiểu biết sâu sắc về trải nghiệm phía client, tôi xây dựng các dịch vụ đáng tin cậy thông qua thiết kế API, mô hình hóa dữ liệu, tối ưu hiệu năng và tự động hóa vận hành.',
    yearsOfExperience: 4,
    yearsSuffix: ' năm',
  },
  nav: {
    impact: 'Tác động',
    experience: 'Kinh nghiệm',
    caseStudy: 'Case Study',
    skills: 'Kỹ năng',
    contact: 'Liên hệ',
  },
  sectionLabels: {
    impact: 'Tác động',
    experience: 'Kinh nghiệm làm việc',
    caseStudy: 'Case Study',
    skills: 'Kỹ năng',
    education: 'Học vấn',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Mức sử dụng bộ nhớ Redis',
      value: '90% → 58%',
      detail: 'Cắt giảm ZSET fan-out của follow feed chỉ còn 500 mục gần nhất mỗi người dùng',
      direction: 'good',
    },
    {
      label: 'Độ trễ truy vấn DB cốt lõi',
      value: '1206ms → 13ms',
      detail: 'Chẩn đoán điểm nghẽn bằng EXPLAIN ANALYZE và Prisma Middleware, sau đó xây dựng lại index và viết lại truy vấn',
      direction: 'good',
    },
    {
      label: 'Tổng số người dùng tích lũy',
      value: '10.000+',
      detail: 'Vận hành ổn định sau khi thiết kế kiến trúc gợi ý và pipeline dữ liệu',
      direction: 'neutral',
    },
    {
      label: 'Thiết bị nhúng đã triển khai',
      value: '150+',
      detail: 'Hệ thống tự động hóa thủy canh tự phát triển; góp phần vào một vòng gọi vốn Pre-A',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'Th5 2025 - Hiện tại',
      summary: 'Dịch vụ cộng đồng trực tuyến/ngoại tuyến dựa trên sở thích',
      role: 'Kỹ sư Backend',
      highlights: [
        'Giảm mức sử dụng bộ nhớ Redis từ 90% xuống 58% bằng cách cắt ZSET fan-out của follow feed còn 500 mục gần nhất mỗi người dùng',
        'Cải thiện hiệu năng truy vấn DB cốt lõi hơn 92% (1206ms → 13ms) nhờ chiến lược index và viết lại truy vấn',
        'Thiết kế kiến trúc dịch vụ và pipeline dữ liệu dựa trên gợi ý, phục vụ ổn định hơn 10.000 người dùng',
        'Di chuyển hạ tầng AWS sang CDK (IaC) và thiết kế lại vai trò/chính sách IAM theo nguyên tắc đặc quyền tối thiểu',
        'Chuẩn hóa môi trường test dựa trên Docker và tự động hóa kiểm thử Unit/E2E cùng kiểm tra coverage bằng GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'Th9 2023 - Th10 2024',
      summary: 'Ứng dụng cộng đồng thời trang ứng dụng AI tạo sinh',
      role: 'Lập trình viên ứng dụng di động',
      highlights: [
        'Xây dựng hệ thống mua hàng trong ứng dụng (IAP) để củng cố mô hình doanh thu',
        'Triển khai deep linking để phân tích thu hút người dùng và nâng cao hiệu quả marketing',
        'Tái cấu trúc quản lý trạng thái (state management) để cải thiện khả năng hiểu code của nhóm và tính bảo trì',
        'Thiết lập theo dõi crash ứng dụng và nền tảng cho phân tích hành vi người dùng',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'Th5 2023 - Th8 2023',
      summary: 'Ứng dụng cộng đồng người hâm mộ vận động viên chuyên nghiệp',
      role: 'Lập trình viên ứng dụng di động',
      highlights: [
        'Tích hợp đăng nhập mạng xã hội qua Google, Apple và các nền tảng khác',
        'Xây dựng hệ thống quản lý dữ liệu đa ngôn ngữ và pipeline triển khai',
        'Thực hiện review code, kiểm thử và cải tiến để duy trì chất lượng codebase',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'Th9 2021 - Th4 2023',
      summary: 'Dịch vụ đặt hàng trực tuyến',
      role: 'Phát triển cơ sở dữ liệu và máy chủ API mới',
      highlights: [
        'Triển khai hệ thống xác thực danh tính dựa trên Redis, cải thiện tốc độ và hiệu quả xác thực',
        'Xây dựng thông báo thời gian thực với Socket.IO',
        'Phát triển máy chủ API để hỗ trợ tích hợp bên ngoài và khả năng mở rộng dịch vụ',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Hệ thống tự động hóa thủy canh',
    period: 'Th9 2021 - Th4 2023',
    role: 'Phát triển hệ thống tự động hóa nhúng',
    highlights: [
      'Thiết kế và phát triển hệ thống tự động hóa nhúng tối ưu cho môi trường thủy canh',
      'Triển khai giao tiếp dựa trên MQTT để thu thập dữ liệu cảm biến và điều khiển thiết bị từ xa',
      'Bổ sung cập nhật firmware OTA để nâng cao khả năng bảo trì và mở rộng thiết bị',
      'Dẫn dắt toàn bộ quy trình từ thiết kế mạch đến gia công PCB thuê ngoài, hoàn thiện MVP ở giai đoạn đầu',
    ],
    achievements: ['Góp phần vào một vòng gọi vốn Pre-A', 'Triển khai hơn 150 thiết bị, bao gồm các đơn vị bàn giao cho một trung tâm văn hóa'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Tăng tốc truy vấn DB cốt lõi 92%',
      subtitle: '1206ms → 13ms — từ phân tích điểm nghẽn đến khắc phục cấu trúc trong PostgreSQL',
      summary: 'Chẩn đoán điểm nghẽn truy vấn hơn 1200ms bằng EXPLAIN ANALYZE, xây dựng lại chiến lược index và giảm 92% thời gian phản hồi, đồng thời giảm mức sử dụng bộ nhớ Redis.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Vấn đề',
        body: 'Độ trễ của truy vấn feed cốt lõi ảnh hưởng trực tiếp đến trải nghiệm người dùng và làm tăng tải server. Chưa rõ nguyên nhân gốc rễ là do bản thân truy vấn, thiếu index, hay do mô hình dữ liệu.',
      },
      {
        label: 'Phân tích',
        body: 'Sử dụng EXPLAIN ANALYZE của PostgreSQL cùng Prisma Middleware để theo dõi execution plan của các truy vấn production, đồng thời trực quan hóa và báo cáo hiệu năng các truy vấn chậm nhất để xác định chính xác điểm nghẽn.',
      },
      {
        label: 'Hành động',
        body: 'Xây dựng lại chiến lược index theo điểm nghẽn đã xác định và áp dụng các cải tiến cấu trúc — viết lại truy vấn và tối ưu điều kiện. Đồng thời cắt ZSET fan-out của follow feed còn 500 mục gần nhất mỗi người dùng, giúp giảm mức sử dụng bộ nhớ Redis từ 90% xuống 58% và giảm rủi ro sự cố.',
      },
      {
        label: 'Kết quả',
          body: 'Thời gian phản hồi của truy vấn cốt lõi giảm từ 1206ms xuống 13ms — cải thiện hơn 92%. Kết quả này trở thành nền tảng cho kiến trúc gợi ý và pipeline dữ liệu hiện đang phục vụ ổn định hơn 10.000 người dùng.',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Nghiên cứu tình huống',
    intro: 'Nhìn kỹ hơn vào một vài quyết định — vấn đề tôi gặp phải, cách tôi chẩn đoán nó, và tại sao tôi chọn giải pháp này thay vì các lựa chọn khác.',
    readMore: 'Đọc toàn bộ câu chuyện',
    backToList: '← Tất cả nghiên cứu tình huống',
    viewAll: 'Xem tất cả nghiên cứu tình huống',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Thiết kế và phát triển máy chủ API production',
        'Kiến trúc giao tiếp thời gian thực (thông báo/xác thực)',
        'Triển khai và vận hành trên AWS',
      ],
    },
    {
      title: 'Ứng dụng di động',
      items: [
        'Phát triển và vận hành nhiều ứng dụng bằng Flutter',
        'Quản lý trạng thái: Bloc, Riverpod, GetX',
        'Chat thời gian thực, mua hàng trong ứng dụng, đăng nhập mạng xã hội, đa ngôn ngữ',
        'Tích hợp phân tích hành vi người dùng và báo cáo crash',
      ],
    },
  ],
  education: {
    school: 'Đại học Kyung Hee',
    degree: 'Cử nhân Kỹ thuật Cơ khí',
    period: 'Th3 2013 - Th2 2020',
    notes: [
      'Phân tích dữ liệu cảm biến quán tính (IMU) bằng Matlab để phân tích dáng đi và hiển thị chuyển động khung xương',
      'Nhận giải khuyến khích từ nhóm nghiên cứu đồ án tốt nghiệp',
    ],
  },
  freelanceProjects: [
    {
      title: 'Hỗ trợ phát triển backend cho nền tảng thương mại điện tử',
      period: 'Th11 2024 - Th1 2025',
      points: [
        'Giải quyết bất đồng bộ định dạng dữ liệu giữa server và client, phát triển API mới (NestJS, MikroORM)',
        'Cải thiện trải nghiệm người dùng bằng cách tối ưu tốc độ phản hồi API và hiệu năng server',
      ],
    },
    {
      title: 'Phát triển ứng dụng hẹn hò di động',
      period: 'Th6 2024 - Th8 2024',
      points: [
        'Dẫn dắt toàn bộ quy trình thiết kế, phát triển, kiểm thử và phát hành ứng dụng; triển khai chat thời gian thực, quản lý hồ sơ và xác thực danh tính (Flutter)',
        'Phát hành trên App Store/Google Play và liên tục cập nhật dựa trên phản hồi người dùng',
      ],
    },
    {
      title: 'Hỗ trợ phát triển ứng dụng quản lý sức khỏe thể chất và tinh thần',
      period: 'Th4 2024 - Th7 2024',
      points: ['Phát triển tính năng trực quan hóa dữ liệu sức khỏe thể chất/tinh thần và cải thiện UI/UX dựa trên phản hồi người dùng (Flutter)'],
    },
  ],
  contact: {
    heading: 'Liên hệ',
    description: 'Bạn có cơ hội hợp tác, dự án hay câu hỏi? Hãy gửi tin nhắn bên dưới cho tôi.',
    namePlaceholder: 'Tên',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Tin nhắn',
    submitLabel: 'Gửi tin nhắn',
    sendingLabel: 'Đang gửi…',
    successMessage: 'Đã gửi tin nhắn — tôi sẽ phản hồi sớm.',
    errorMessage: 'Đã có lỗi xảy ra. Vui lòng thử lại hoặc gửi email trực tiếp cho tôi.',
    orEmailDirectly: 'Hoặc gửi email trực tiếp tới',
  },
  footer: {
    tagline: 'Từ di động đến backend, đến hạ tầng.',
    rights: 'Bảo lưu mọi quyền.',
  },
};

export default vi;
