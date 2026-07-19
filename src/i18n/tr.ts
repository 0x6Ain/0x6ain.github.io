import type { SiteContent } from './types';

const tr: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Yazılım Geliştirici',
    location: 'Seul, Güney Kore',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Mobil uygulamalardan backend servislerine ve bulut altyapısına kadar geniş bir yelpazede çalışmış, kullanıcı deneyimi ile operasyonel verimliliği dengede tutan bir geliştiriciyim. İstemci tarafı deneyime dair güçlü anlayışımla, API tasarımı, veri modelleme, performans optimizasyonu ve operasyonel otomasyon yoluyla güvenilir servisler geliştiriyorum.',
    yearsOfExperience: 4,
    yearsSuffix: ' yıl',
  },
  nav: {
    impact: 'Etki',
    experience: 'Deneyim',
    caseStudy: 'Vaka Analizi',
    skills: 'Yetenekler',
    handbook: 'El Kitabı',
    contact: 'İletişim',
  },
  sectionLabels: {
    impact: 'Etki',
    experience: 'İş Deneyimi',
    caseStudy: 'Vaka Analizi',
    skills: 'Yetenekler',
    education: 'Eğitim',
    freelance: 'Serbest Çalışma',
  },
  impactStats: [
    {
      label: 'Redis bellek kullanımı',
      value: '90% → 58%',
      detail: 'Takip akışının fan-out ZSET yapısı kullanıcı başına son 500 kayıtla sınırlandırıldı',
      direction: 'good',
    },
    {
      label: 'Kritik DB sorgu gecikmesi',
      value: '1206ms → 13ms',
      detail: 'EXPLAIN ANALYZE ve Prisma Middleware ile darboğazlar tespit edilip indeksler ve sorgular yeniden yazıldı',
      direction: 'good',
    },
    {
      label: 'Toplam aktif kullanıcı',
      value: '10.000+',
      detail: 'Öneri mimarisi ve veri hattı tasarlandıktan sonra istikrarlı işletim',
      direction: 'neutral',
    },
    {
      label: 'Kurulan gömülü cihaz sayısı',
      value: '150+',
      detail: 'Kendi geliştirdiği hidroponik otomasyon sistemi; bir Pre-A yatırım turuna katkı sağladı',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'May 2025 - Günümüz',
      summary: 'İlgi alanına dayalı çevrimiçi/çevrimdışı topluluk hizmeti',
      role: 'Backend Mühendisi',
      highlights: [
        'Takip akışının fan-out ZSET yapısını kullanıcı başına son 500 kayıtla sınırlandırarak Redis bellek kullanımını %90\'dan %58\'e düşürdü',
        'İndeksleme stratejisi ve sorgu yeniden yazımıyla kritik DB sorgu performansını %92\'nin üzerinde iyileştirdi (1206ms → 13ms)',
        'Öneri tabanlı servis mimarisi ve veri hattı tasarladı; 10.000+ kullanıcıya istikrarlı hizmet verdi',
        'AWS altyapısını CDK (IaC) yapısına taşıdı ve IAM rollerini/politikalarını en az ayrıcalık ilkesine göre yeniden tasarladı',
        'Docker tabanlı test altyapısını standartlaştırdı, GitHub Actions ile Unit/E2E testlerini ve kapsam kontrolünü otomatikleştirdi',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'Eyl 2023 - Eki 2024',
      summary: 'Üretken yapay zeka destekli moda topluluğu uygulaması',
      role: 'Mobil Uygulama Geliştirici',
      highlights: [
        'Gelir modelini güçlendirmek için uygulama içi satın alma (IAP) sistemi kurdu',
        'Kullanıcı kazanımını analiz etmek ve pazarlama verimliliğini artırmak için deep linking uyguladı',
        'Takımın kod anlaşılırlığını ve sürdürülebilirliğini artırmak için state management\'ı yeniden yapılandırdı',
        'Uygulama çökme takibi ve kullanıcı davranış analizi için bir temel kurdu',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'May 2023 - Ağu 2023',
      summary: 'Profesyonel sporcular için hayran topluluğu uygulaması',
      role: 'Mobil Uygulama Geliştirici',
      highlights: [
        'Google, Apple gibi platformlar üzerinden sosyal girişi entegre etti',
        'Dil desteği veri yönetimi ve dağıtım sistemleri kurdu',
        'Kod tabanının kalitesini korumak için kod incelemesi, test ve iyileştirmeler yaptı',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'Eyl 2021 - Nis 2023',
      summary: 'Çevrimiçi sipariş hizmeti',
      role: 'Veritabanı ve yeni API sunucusu geliştirme',
      highlights: [
        'Redis tabanlı kimlik doğrulama sistemi ile doğrulama hızını ve verimliliğini artırdı',
        'Socket.IO ile gerçek zamanlı bildirim özelliği kurdu',
        'Dış entegrasyonları ve servis ölçeklenebilirliğini desteklemek için API sunucuları geliştirdi',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'Hidroponik Otomasyon Sistemi',
    period: 'Eyl 2021 - Nis 2023',
    role: 'Gömülü otomasyon sistemi geliştirme',
    highlights: [
      'Hidroponik ortamlar için optimize edilmiş gömülü otomasyon sistemi tasarladı ve geliştirdi',
      'Sensör verisi toplama ve ekipmanların uzaktan kontrolü için MQTT tabanlı iletişim uyguladı',
      'Bakım kolaylığını ve cihaz ölçeklenebilirliğini artırmak için OTA (kablosuz) ürün yazılımı güncellemeleri ekledi',
      'Devre tasarımından dış kaynaklı PCB üretimine kadar tüm süreci yönetti, erken aşama MVP\'yi tamamladı',
    ],
    achievements: ['Bir Pre-A yatırım turuna katkı sağladı', 'Bir kültür merkezine teslim edilen birimler dahil 150+ cihaz kurdu'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Kritik DB Sorguları %92 Daha Hızlı',
      subtitle: '1206ms → 13ms — PostgreSQL\'de darboğaz analizinden yapısal düzeltmelere',
      summary: "EXPLAIN ANALYZE ile 1200ms'yi aşan bir sorgu darboğazını teşhis ettim, indeksleme stratejisini yeniden kurdum ve yanıt süresini %92 azaltırken Redis bellek kullanımını da düşürdüm.",
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Sorun',
        body: 'Ana akış sorgusundaki gecikme, kullanıcı deneyimini doğrudan etkiliyor ve sunucu yükünü artırıyordu. Kök nedenin sorgunun kendisi mi, indeks eksikliği mi, yoksa veri modeli mi olduğu belirsizdi.',
      },
      {
        label: 'Analiz',
        body: 'PostgreSQL\'in EXPLAIN ANALYZE aracı Prisma Middleware ile birlikte kullanılarak üretim ortamındaki sorguların yürütme planları izlendi; en yavaş sorgular görselleştirilip raporlanarak darboğaz kesin olarak tespit edildi.',
      },
      {
        label: 'Aksiyon',
        body: 'Tespit edilen darboğaza göre indeksleme stratejisi yeniden kuruldu ve sorgu yeniden yazımı, koşul optimizasyonu gibi yapısal iyileştirmeler uygulandı. Aynı zamanda takip akışının fan-out ZSET yapısı kullanıcı başına son 500 kayıtla sınırlandırılarak Redis bellek kullanımı %90\'dan %58\'e düştü ve kesinti riski azaldı.',
      },
      {
        label: 'Sonuç',
          body: 'Ana sorgunun yanıt süresi 1206ms\'den 13ms\'ye düştü — %92\'nin üzerinde bir iyileşme. Bu çalışma, bugün 10.000+ kullanıcıya istikrarlı hizmet veren öneri mimarisi ve veri hattının temelini oluşturdu.',
        },
      ],
    },
    {
      slug: 'infra-as-code-least-privilege',
      company: 'Munto',
      title: 'AWS Altyapısını CDK\'ye Taşıma ve En Az Ayrıcalıklı IAM Yeniden Tasarımı',
      subtitle: 'Konsol üzerinden manuel yönetilen, geniş izinli altyapıdan, gözden geçirilebilir ve en az ayrıcalık ilkesine uyan kod tabanlı altyapıya',
      summary: 'AWS konsolundaki manuel değişiklikleri AWS CDK ile değiştirdim ve IAM\'i en az ayrıcalık ilkesine göre yeniden tasarladım; böylece altyapı değişiklikleri gözden geçirilebilir hale geldi ve ele geçirilen herhangi bir kimlik bilgisinin etki alanı daraldı.',
      tags: ['AWS', 'CDK', 'IAM', 'Infrastructure'],
      steps: [
        {
          label: 'Sorun',
          body: 'AWS kaynakları konsol üzerinden manuel olarak oluşturuluyordu, bu yüzden değişiklikler belgelenmiyor ve ortamlar arasında yeniden üretilmesi zor oluyordu. IAM rolleri de hizmet bazında ayrılmamış, fazla geniş kapsamlıydı; bu da hangi hizmetin hangi kaynağa erişebildiğini belirsizleştiriyor ve ele geçirilen herhangi bir kimlik bilgisinin etkisini büyütüyordu.',
        },
        {
          label: 'Analiz',
          body: 'Mevcut IAM politikalarını ve kaynak yapılandırmalarını denetleyerek her hizmetin gerçekte hangi izinlere ihtiyaç duyduğunu haritalandırdım ve konsoldaki manuel değişikliklerin staging ile production ortamları arasında oluşturduğu farklılıkları (environment drift) belirledim.',
        },
        {
          label: 'Aksiyon',
          body: 'Altyapı tanımlarını AWS CDK\'ye taşıdım; böylece her değişiklik kod olarak kalıyor, pull request ile gözden geçiriliyor ve ortamlar arasında yeniden üretilebiliyor. Paralelde, paylaşılan geniş izinler yerine her hizmet için IAM rollerini ve politikalarını en az ayrıcalık ilkesine göre yeniden yapılandırdım.',
        },
        {
          label: 'Sonuç',
          body: 'Artık altyapı değişiklikleri de uygulama koduyla aynı gözden geçirme sürecinden geçiyor, staging ile production arasındaki drift ortadan kalktı ve sızan bir kimlik bilgisinin olası etkisi tüm hesap yerine tek bir hizmetle sınırlı kalıyor.',
        },
      ],
    },
    {
      slug: 'deep-linking-attribution',
      company: 'Viceversa.ai',
      title: 'Kullanıcı Kazanımı Atıfı için Deep Linking',
      subtitle: 'Kazanım harcamasının verimliliğini artırmak için pazarlamaya kanal bazlı atıf verisi sağlamak',
      summary: 'Pazarlamanın kurulum ve kayıtları belirli kampanyalara atfedebilmesi için uygulama genelinde Branch.io deep linking\'i entegre ettim ve kazanım harcamasının verimliliğini artırdım.',
      tags: ['Flutter', 'Branch.io', 'Deep Linking', 'Growth'],
      steps: [
        {
          label: 'Sorun',
          body: 'Pazarlama, hangi kampanyanın, davet bağlantısının veya sosyal paylaşımın gerçekten bir kurulum ya da kayıt getirdiğini bilemiyordu; bu nedenle kanal performansını güvenilir biçimde değerlendirmenin veya kazanım harcamasını gerekçelendirmenin bir yolu yoktu.',
        },
        {
          label: 'Analiz',
          body: 'Uygulamaya gelen tüm giriş noktalarını — kampanya bağlantıları, davet bağlantıları, sosyal paylaşımlar — ve her biri için pazarlamanın ihtiyaç duyduğu atıf verilerini, uygulamayı henüz kurmamış kullanıcılar için ertelenmiş deep linking gereksinimleri dahil olmak üzere haritalandırdım.',
        },
        {
          label: 'Aksiyon',
          body: 'iOS ve Android genelinde Branch.io\'yu entegre ettim, bağlantı parametrelerini atıf olaylarına bağladım ve bu olayları pazarlamanın analiz panolarına bağladım.',
        },
        {
          label: 'Sonuç',
          body: 'Pazarlama ilk kez kanal bazlı atıf görünürlüğü kazandı; böylece kazanım bütçesini tahmine dayalı değil, veriye dayalı olarak dağıtabildi.',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Vaka Analizleri',
    intro: 'Birkaç karara daha yakından bakış — karşılaştığım sorun, onu nasıl teşhis ettiğim ve alternatifler arasından neden bu çözümü seçtiğim.',
    readMore: 'Tüm hikayeyi oku',
    backToList: '← Tüm vaka analizleri',
    viewAll: 'Tüm vaka analizlerini gör',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Üretim ortamı için API sunucusu tasarımı ve geliştirmesi',
        'Gerçek zamanlı iletişim (bildirim/kimlik doğrulama) mimarisi',
        'AWS üzerinde dağıtım ve işletim',
      ],
    },
    {
      title: 'Mobil',
      items: [
        'Flutter ile birden fazla uygulama geliştirdi ve işletti',
        'State yönetimi: Bloc, Riverpod, GetX',
        'Gerçek zamanlı sohbet, uygulama içi satın alma, sosyal giriş, çoklu dil desteği',
        'Kullanıcı davranış analizi ve çökme raporlama entegrasyonu',
      ],
    },
  ],
  education: {
    school: 'Kyung Hee Üniversitesi',
    degree: 'Makine Mühendisliği Lisansı',
    period: 'Mar 2013 - Şub 2020',
    notes: [
      'Yürüyüş analizi ve iskelet hareketi görselleştirmesi için Matlab ile IMU sensör verilerini analiz etti',
      'Bitirme projesi araştırma grubundan teşvik ödülü aldı',
    ],
  },
  freelanceProjects: [
    {
      title: 'E-ticaret platformu backend geliştirme desteği',
      period: 'Kas 2024 - Oca 2025',
      points: [
        'Sunucu-istemci veri format uyuşmazlıklarını çözdü ve yeni API\'ler geliştirdi (NestJS, MikroORM)',
        'API yanıt hızını ve sunucu performansını optimize ederek kullanıcı deneyimini iyileştirdi',
      ],
    },
    {
      title: 'Mobil flört uygulaması geliştirme',
      period: 'Haz 2024 - Ağu 2024',
      points: [
        'Uygulamayı tasarım, geliştirme, test ve yayınlama süreçleriyle uçtan uca yönetti; gerçek zamanlı sohbet, profil yönetimi ve kimlik doğrulama uyguladı (Flutter)',
        'App Store/Google Play\'de yayınladı ve kullanıcı geri bildirimlerine dayalı sürekli güncelleme yaptı',
      ],
    },
    {
      title: 'Fiziksel ve zihinsel sağlık yönetimi uygulaması geliştirme desteği',
      period: 'Nis 2024 - Tem 2024',
      points: ['Fiziksel/zihinsel sağlık verisi görselleştirme özellikleri geliştirdi ve kullanıcı geri bildirimine dayalı UI/UX iyileştirmeleri yaptı (Flutter)'],
    },
  ],
  contact: {
    heading: 'İletişime geçin',
    description: 'Bir proje, pozisyon ya da sorunuz mu var? Aşağıdan bana mesaj gönderin.',
    namePlaceholder: 'İsim',
    emailPlaceholder: 'E-posta',
    messagePlaceholder: 'Mesaj',
    submitLabel: 'Mesaj gönder',
    sendingLabel: 'Gönderiliyor…',
    successMessage: 'Mesaj gönderildi — kısa süre içinde dönüş yapacağım.',
    errorMessage: 'Bir şeyler ters gitti. Lütfen tekrar deneyin ya da doğrudan e-posta gönderin.',
    orEmailDirectly: 'Ya da doğrudan şu adrese e-posta gönderin:',
  },
  footer: {
    tagline: 'Mobilden backend\'e, altyapıya kadar.',
    rights: 'Tüm hakları saklıdır.',
  },
};

export default tr;
