import type { SiteContent } from './types';

const id: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Software Developer',
    location: 'Seoul, Korea Selatan',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Developer yang berpengalaman di aplikasi mobile, layanan backend, hingga infrastruktur cloud, selalu menyeimbangkan pengalaman pengguna dengan efisiensi operasional. Dengan pemahaman mendalam tentang pengalaman sisi client, saya membangun layanan yang andal melalui desain API, pemodelan data, optimasi performa, dan otomasi operasional.',
    yearsOfExperience: 4,
    yearsSuffix: ' tahun',
  },
  nav: {
    impact: 'Dampak',
    experience: 'Pengalaman',
    caseStudy: 'Studi Kasus',
    skills: 'Keahlian',
    handbook: 'Panduan',
    contact: 'Kontak',
  },
  sectionLabels: {
    impact: 'Dampak',
    experience: 'Pengalaman Kerja',
    caseStudy: 'Studi Kasus',
    skills: 'Keahlian',
    education: 'Pendidikan',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Penggunaan memori Redis',
      value: '90% → 58%',
      detail: 'Memangkas fan-out ZSET pada follow feed menjadi hanya 500 entri terbaru per pengguna',
      direction: 'good',
    },
    {
      label: 'Latensi query database inti',
      value: '1206ms → 13ms',
      detail: 'Mendiagnosis bottleneck dengan EXPLAIN ANALYZE dan Prisma Middleware, lalu membangun ulang index dan query',
      direction: 'good',
    },
    {
      label: 'Total pengguna aktif',
      value: '10.000+',
      detail: 'Beroperasi stabil setelah merancang arsitektur rekomendasi dan data pipeline',
      direction: 'neutral',
    },
    {
      label: 'Perangkat embedded yang di-deploy',
      value: '150+',
      detail: 'Sistem otomasi hidroponik buatan sendiri; berkontribusi pada pendanaan putaran Pre-A',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'Mei 2025 - Sekarang',
      summary: 'Layanan komunitas online/offline berbasis minat',
      role: 'Backend Engineer',
      highlights: [
        'Menurunkan penggunaan memori Redis dari 90% menjadi 58% dengan memangkas fan-out ZSET follow feed menjadi 500 entri terbaru per pengguna',
        'Meningkatkan performa query database inti lebih dari 92% (1206ms → 13ms) melalui strategi index dan penulisan ulang query',
        'Merancang arsitektur layanan dan data pipeline berbasis rekomendasi, melayani lebih dari 10.000 pengguna secara stabil',
        'Memigrasikan infrastruktur AWS ke CDK (IaC) dan merancang ulang peran/kebijakan IAM sesuai prinsip least-privilege',
        'Menstandarkan infrastruktur pengujian berbasis Docker dan mengotomasi pengujian Unit/E2E serta pengecekan coverage dengan GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'Sep 2023 - Okt 2024',
      summary: 'Aplikasi komunitas fashion berbasis AI generatif',
      role: 'Mobile App Developer',
      highlights: [
        'Membangun sistem pembelian dalam aplikasi (IAP) untuk memperkuat model pendapatan',
        'Mengimplementasikan deep linking untuk menganalisis akuisisi pengguna dan meningkatkan efisiensi marketing',
        'Melakukan refactoring state management untuk meningkatkan pemahaman kode tim dan kemudahan pemeliharaan',
        'Menyiapkan pelacakan crash aplikasi dan fondasi untuk analisis perilaku pengguna',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'Mei 2023 - Agu 2023',
      summary: 'Aplikasi komunitas penggemar atlet profesional',
      role: 'Mobile App Developer',
      highlights: [
        'Mengintegrasikan login sosial melalui Google, Apple, dan platform lainnya',
        'Membangun manajemen data lokalisasi dan pipeline deployment',
        'Melakukan code review, pengujian, dan perbaikan untuk menjaga kualitas codebase',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'Sep 2021 - Apr 2023',
      summary: 'Layanan pemesanan online',
      role: 'Pengembangan database dan server API baru',
      highlights: [
        'Menerapkan sistem verifikasi identitas berbasis Redis, meningkatkan kecepatan dan efisiensi autentikasi',
        'Membangun notifikasi real-time dengan Socket.IO',
        'Mengembangkan server API untuk mendukung integrasi eksternal dan skalabilitas layanan',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Sistem Otomasi Hidroponik',
    period: 'Sep 2021 - Apr 2023',
    role: 'Pengembangan sistem otomasi embedded',
    highlights: [
      'Merancang dan mengembangkan sistem otomasi embedded yang dioptimalkan untuk lingkungan hidroponik',
      'Mengimplementasikan komunikasi berbasis MQTT untuk pengumpulan data sensor dan kontrol perangkat jarak jauh',
      'Menambahkan pembaruan firmware OTA untuk meningkatkan kemudahan perawatan dan skalabilitas perangkat',
      'Memimpin seluruh proses mulai dari desain sirkuit hingga produksi PCB outsourcing, menyelesaikan MVP tahap awal',
    ],
    achievements: ['Berkontribusi pada pendanaan putaran Pre-A', 'Men-deploy lebih dari 150 perangkat, termasuk unit yang dikirim ke pusat kebudayaan'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Query Database Inti 92% Lebih Cepat',
      subtitle: '1206ms → 13ms — dari analisis bottleneck hingga perbaikan struktural di PostgreSQL',
      summary: 'Mendiagnosis bottleneck query lebih dari 1200ms dengan EXPLAIN ANALYZE, membangun ulang strategi index, dan mengurangi waktu respons sebesar 92% sekaligus menurunkan penggunaan memori Redis.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Masalah',
        body: 'Latensi pada query feed inti secara langsung memengaruhi pengalaman pengguna dan meningkatkan beban server. Belum jelas apakah akar masalahnya ada pada query itu sendiri, kurangnya index, atau model data.',
      },
      {
        label: 'Analisis',
        body: 'Menggunakan EXPLAIN ANALYZE PostgreSQL bersama Prisma Middleware untuk melacak execution plan query di production, serta memvisualisasikan dan melaporkan query paling lambat untuk mengidentifikasi bottleneck secara tepat.',
      },
      {
        label: 'Tindakan',
        body: 'Membangun ulang strategi index sesuai bottleneck yang ditemukan dan menerapkan perbaikan struktural — penulisan ulang query dan optimasi kondisi. Bersamaan dengan itu, fan-out ZSET follow feed dipangkas menjadi 500 entri terbaru per pengguna, menurunkan penggunaan memori Redis dari 90% menjadi 58% sekaligus mengurangi risiko gangguan layanan.',
      },
      {
        label: 'Hasil',
          body: 'Waktu respons query inti turun dari 1206ms menjadi 13ms — peningkatan lebih dari 92%. Hasil ini menjadi fondasi arsitektur rekomendasi dan data pipeline yang kini melayani lebih dari 10.000 pengguna secara stabil.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'Migrasi Infrastruktur AWS ke CDK dengan IAM Least-Privilege',
      subtitle: 'Dari infrastruktur yang dikelola manual lewat konsol dengan izin luas, menjadi infrastructure as code yang dapat direview dan menerapkan least-privilege',
      summary: 'Mengganti perubahan manual di konsol AWS dengan AWS CDK dan mendesain ulang IAM berdasarkan least-privilege, membuat perubahan infrastruktur dapat direview serta mengurangi dampak jika ada kredensial yang bocor.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Masalah',
          body: 'Resource AWS disediakan secara manual melalui konsol, sehingga perubahan tidak terdokumentasi dan sulit direproduksi antar lingkungan. Role IAM juga memiliki cakupan terlalu luas, menyulitkan untuk mengetahui layanan mana yang dapat mengakses resource mana — dan memperbesar dampak jika ada kredensial yang bocor.',
        },
        {
          label: 'Analisis',
          body: 'Mengaudit kebijakan IAM dan konfigurasi resource yang ada untuk memetakan izin yang benar-benar dibutuhkan tiap layanan, serta mengidentifikasi titik di mana perubahan manual di konsol telah menyebabkan perbedaan (environment drift) antara staging dan production.',
        },
        {
          label: 'Tindakan',
          body: 'Memigrasikan definisi infrastruktur ke AWS CDK sehingga setiap perubahan menjadi kode, direview melalui pull request, dan dapat direproduksi antar lingkungan. Bersamaan dengan itu, membangun ulang role dan kebijakan IAM per layanan berdasarkan least-privilege alih-alih izin luas yang dibagikan bersama.',
        },
        {
          label: 'Hasil',
          body: 'Kini perubahan infrastruktur melalui proses review yang sama dengan kode aplikasi, perbedaan antara staging dan production hilang, dan dampak potensial dari kredensial yang bocor dibatasi pada satu layanan saja alih-alih seluruh akun.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Deep Linking untuk Atribusi Akuisisi Pengguna',
      subtitle: 'Memberi tim marketing data atribusi per kanal untuk meningkatkan efisiensi anggaran akuisisi',
      summary: 'Mengintegrasikan deep linking Branch.io di seluruh aplikasi agar marketing dapat mengatribusikan instalasi dan pendaftaran ke kampanye tertentu, meningkatkan efisiensi anggaran akuisisi.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Masalah',
          body: 'Marketing tidak bisa mengetahui kampanye, tautan referral, atau bagikan sosial mana yang benar-benar menghasilkan instalasi atau pendaftaran, sehingga tidak ada cara andal untuk menilai performa per kanal atau membenarkan anggaran akuisisi.',
        },
        {
          label: 'Analisis',
          body: 'Memetakan setiap titik masuk ke aplikasi — tautan kampanye, tautan undangan, bagikan sosial — dan data atribusi yang dibutuhkan marketing untuk masing-masing, termasuk deferred deep linking untuk pengguna yang belum memasang aplikasi.',
        },
        {
          label: 'Tindakan',
          body: 'Mengintegrasikan Branch.io di iOS dan Android, menghubungkan parameter tautan ke event atribusi, lalu menghubungkan event tersebut ke dashboard analitik marketing.',
        },
        {
          label: 'Hasil',
          body: 'Marketing untuk pertama kalinya memperoleh visibilitas atribusi per kanal, memungkinkan keputusan berbasis data tentang ke mana anggaran akuisisi dialokasikan alih-alih mengandalkan tebakan.',
        },
      ],
    },
    {
      slug: "redis-lounge-cache-memory-optimization",
      company: "Munto",
      title: "Mengatasi Lonjakan Memori Redis Cache Akibat Ketiadaan TTL",
      subtitle: "Menurunkan penggunaan memori cache feed Lounge dari 90% menjadi 58%",
      summary: "Menganalisis dan menyelesaikan masalah cache Lounge di Munto, di mana key milik segelintir user populer terus membesar tanpa batas karena tidak ada TTL, hingga membuat penggunaan memori Redis naik ke 90%. Dengan mengambil sampel distribusi jumlah element per key, ditemukan bahwa 1% key teratas menghabiskan sebagian besar memori. Solusinya adalah menerapkan cap 500 element berdasarkan nilai p90 dan melakukan rollout secara bertahap. Hasilnya, penggunaan memori berhasil diturunkan hingga 58% tanpa efek samping.",
      tags: ["Redis", "CloudWatch", "SNS", "AWS Chatbot", "Slack", "ZSET"],
      steps: [
        {
          label: "Masalah",
          body: "Cache Lounge di Munto menyimpan feed dari akun-akun yang diikuti user untuk ditampilkan di area spotlight seperti postingan populer. Penggunaan memori Redis pada cache ini melonjak hingga 90%. Sebelumnya, masalah semacam ini hanya terdeteksi lewat pengecekan dashboard secara manual, tetapi berkat sistem monitoring yang baru dibangun (CloudWatch Alarm → SNS → AWS Chatbot, dengan notifikasi masuk ke Slack), masalah ini bisa terdeteksi lebih cepat. Untungnya, hingga titik ini belum ada dampak nyata seperti gangguan layanan atau response yang melambat.",
        },
        {
          label: "Penyebab",
          body: "Setelah ditelusuri, ternyata 60% dari total memori berasal dari satu key cache saja. Key tersebut adalah feed milik user populer dengan jumlah follower besar, dan karena tidak ada TTL yang diset, feed baru terus di-append tanpa batas sehingga key ini membesar tanpa henti. Alasan mengapa TTL tidak pernah diset sejak awal di kode legacy tidak bisa ditelusuri dari histori yang ada.",
        },
        {
          label: "Trade-off",
          body: "Opsi menambahkan TTL begitu saja ditunda karena tidak jelas alasan awal cache ini didesain tanpa TTL, sehingga berisiko menimbulkan efek samping yang tidak terduga. Opsi mengubah struktur key atau membatasi ukuran cache juga disingkirkan karena membutuhkan resource development yang besar. Menambah kapasitas memori instance cache sempat dipertimbangkan, tapi ditolak karena hanya menunda masalah tanpa menyelesaikan akar penyebabnya, yaitu struktur legacy yang terus menumpuk. Sebagai gantinya, dilakukan sampling distribusi jumlah element (2.015 sampel, dengan p50 48, p90 504, p99 2.195, dan maksimum 22.415), yang mengonfirmasi bahwa ZSET milik 1% user teratas menghabiskan sebagian besar memori. Berdasarkan temuan ini, membatasi cakupan lalu melakukan rollout bertahap dinilai sebagai pendekatan paling efisien dibanding resource yang dibutuhkan.",
        },
        {
          label: "Keputusan",
          body: "Diputuskan untuk membatasi jumlah element per key cache menjadi 500, mengikuti nilai p90. Dengan memanfaatkan karakteristik ZSET, diimplementasikan mekanisme trim agar value paling lama terhapus lebih dulu saat feed baru masuk. Key yang sudah ada dibiarkan apa adanya, sementara rollout diterapkan secara bertahap mulai dari key-key baru yang masuk setelahnya.",
        },
        {
          label: "Hasil",
          body: "Setelah perubahan diterapkan, penggunaan memori Redis turun dari 90% menjadi 58%. Hingga saat ini, belum ditemukan efek samping seperti keluhan user akibat feed lama yang terpotong pasca-rollout.",
        },
        {
          label: "Pelajaran",
          body: "Belajar bahwa saat memperkenalkan cache, alasan penetapan TTL sebaiknya didokumentasikan dengan jelas agar penelusuran penyebab dan penanganan masalah di kemudian hari menjadi lebih mudah. Menetapkan prinsip bahwa ketika menemukan konfigurasi legacy tanpa TTL, jangan langsung menambahkan TTL begitu saja, melainkan pertimbangkan dulu efek sampingnya secara menyeluruh. Selain itu, dikonfirmasi bahwa solusi mudah seperti sekadar menambah memori cache bukan solusi fundamental, karena hanya membiarkan struktur legacy terus menumpuk.",
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Studi Kasus',
    intro: 'Tinjauan lebih dekat pada beberapa keputusan — masalah yang saya hadapi, cara saya mendiagnosisnya, dan alasan memilih solusi ini dari beberapa alternatif.',
    readMore: 'Baca cerita lengkap',
    backToList: '← Semua studi kasus',
    viewAll: 'Lihat semua studi kasus',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Desain dan pengembangan server API production',
        'Arsitektur komunikasi real-time (notifikasi/autentikasi)',
        'Deployment dan operasional di AWS',
      ],
    },
    {
      title: 'Aplikasi Mobile',
      items: [
        'Mengembangkan dan mengoperasikan berbagai aplikasi dengan Flutter',
        'Manajemen state: Bloc, Riverpod, GetX',
        'Chat real-time, pembelian dalam aplikasi, login sosial, lokalisasi',
        'Integrasi analitik perilaku pengguna dan pelaporan crash',
      ],
    },
  ],
  education: {
    school: 'Universitas Kyung Hee',
    degree: 'Sarjana Teknik Mesin',
    period: 'Mar 2013 - Feb 2020',
    notes: [
      'Menganalisis data sensor inersia (IMU) dengan Matlab untuk analisis gaya berjalan dan visualisasi gerakan rangka',
      'Meraih penghargaan apresiasi dari kelompok riset proyek capstone',
    ],
  },
  freelanceProjects: [
    {
      title: 'Dukungan pengembangan backend platform e-commerce',
      period: 'Nov 2024 - Jan 2025',
      points: [
        'Menyelesaikan ketidaksesuaian format data server-client dan mengembangkan API baru (NestJS, MikroORM)',
        'Meningkatkan pengalaman pengguna dengan mengoptimalkan kecepatan respons API dan performa server',
      ],
    },
    {
      title: 'Pengembangan aplikasi mobile dating',
      period: 'Jun 2024 - Agu 2024',
      points: [
        'Memimpin aplikasi secara end-to-end: desain, pengembangan, pengujian, dan rilis; mengimplementasikan chat real-time, manajemen profil, dan verifikasi identitas (Flutter)',
        'Merilis di App Store/Google Play dan terus melakukan iterasi berdasarkan feedback pengguna',
      ],
    },
    {
      title: 'Dukungan pengembangan aplikasi manajemen kesehatan fisik dan mental',
      period: 'Apr 2024 - Jul 2024',
      points: ['Mengembangkan fitur visualisasi data kesehatan fisik/mental dan meningkatkan UI/UX berdasarkan feedback pengguna (Flutter)'],
    },
  ],
  contact: {
    heading: 'Hubungi saya',
    description: 'Punya proyek, peran, atau pertanyaan? Kirim pesan di bawah ini.',
    namePlaceholder: 'Nama',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Pesan',
    submitLabel: 'Kirim pesan',
    sendingLabel: 'Mengirim…',
    successMessage: 'Pesan terkirim — saya akan segera membalas.',
    errorMessage: 'Terjadi kesalahan. Coba lagi atau kirim email langsung ke saya.',
    orEmailDirectly: 'Atau kirim email langsung ke',
  },
  footer: {
    tagline: 'Dari mobile ke backend, hingga infrastruktur.',
    rights: 'Hak cipta dilindungi.',
  },
};

export default id;
