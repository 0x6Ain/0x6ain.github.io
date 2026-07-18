import type { SiteContent } from './types';

const pl: SiteContent = {
  profile: {
    name: 'Jinyoung Hong',
    subName: '홍진영',
    title: 'Programista',
    location: 'Seul, Korea Południowa',
    email: 'jinpods@gmail.com',
    github: '0x6ain',
    githubUrl: 'https://github.com/0x6ain',
    intro:
      'Programista z doświadczeniem w aplikacjach mobilnych, usługach backendowych i infrastrukturze chmurowej, zawsze równoważący doświadczenie użytkownika z efektywnością operacyjną. Dzięki dobremu zrozumieniu doświadczenia po stronie klienta buduję niezawodne usługi poprzez projektowanie API, modelowanie danych, optymalizację wydajności i automatyzację operacyjną.',
    yearsOfExperience: 4,
    yearsSuffix: ' lata',
  },
  nav: {
    impact: 'Wyniki',
    experience: 'Doświadczenie',
    caseStudy: 'Studium przypadku',
    skills: 'Umiejętności',
    contact: 'Kontakt',
  },
  sectionLabels: {
    impact: 'Wyniki',
    experience: 'Doświadczenie zawodowe',
    caseStudy: 'Studium przypadku',
    skills: 'Umiejętności',
    education: 'Wykształcenie',
    freelance: 'Freelance',
  },
  impactStats: [
    {
      label: 'Zużycie pamięci Redis',
      value: '90% → 58%',
      detail: 'Ograniczono ZSET fan-out kanału obserwowanych do ostatnich 500 wpisów na użytkownika',
      direction: 'good',
    },
    {
      label: 'Opóźnienie kluczowych zapytań do bazy danych',
      value: '1206ms → 13ms',
      detail: 'Zdiagnozowano wąskie gardła za pomocą EXPLAIN ANALYZE i Prisma Middleware, przebudowano indeksy i zapytania',
      direction: 'good',
    },
    {
      label: 'Łączna liczba aktywnych użytkowników',
      value: '10000+',
      detail: 'Stabilne działanie po zaprojektowaniu architektury rekomendacji i potoku danych',
      direction: 'neutral',
    },
    {
      label: 'Wdrożone urządzenia wbudowane',
      value: '150+',
      detail: 'Samodzielnie opracowany system automatyzacji hydroponiki; przyczynił się do rundy finansowania Pre-A',
      direction: 'neutral',
    },
  ],
  experiences: [
    {
      company: 'Munto',
      period: 'maj 2025 - obecnie',
      summary: 'Usługa społecznościowa online/offline oparta na zainteresowaniach',
      role: 'Inżynier backendu',
      highlights: [
        'Zmniejszono zużycie pamięci Redis z 90% do 58% poprzez ograniczenie ZSET fan-out kanału obserwowanych do ostatnich 500 wpisów na użytkownika',
        'Poprawiono wydajność kluczowych zapytań do bazy danych o ponad 92% (1206ms → 13ms) dzięki strategii indeksowania i przepisaniu zapytań',
        'Zaprojektowano architekturę usługi i potok danych oparte na rekomendacjach, obsługując stabilnie ponad 10000 użytkowników',
        'Przeniesiono infrastrukturę AWS na CDK (IaC) i przeprojektowano role/polityki IAM zgodnie z zasadą najmniejszych uprawnień',
        'Ustandaryzowano środowisko testowe oparte na Dockerze i zautomatyzowano testy jednostkowe/E2E oraz weryfikację pokrycia za pomocą GitHub Actions',
      ],
      stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'AWS CDK', 'Docker', 'MongoDB'],
    },
    {
      company: 'Viceversa.ai',
      period: 'wrz 2023 - paź 2024',
      summary: 'Aplikacja społecznościowa dla branży mody napędzana generatywną AI',
      role: 'Programista aplikacji mobilnych',
      highlights: [
        'Zbudowano system zakupów w aplikacji (IAP), aby wzmocnić model przychodów',
        'Wdrożono deep linking do analizy pozyskiwania użytkowników i zwiększenia efektywności marketingowej',
        'Zrefaktoryzowano zarządzanie stanem, aby poprawić zrozumienie kodu w zespole i jego utrzymywalność',
        'Skonfigurowano śledzenie awarii aplikacji i podstawę do analizy zachowań użytkowników',
      ],
      stack: ['Flutter', 'Firebase', 'Riverpod', 'GetX', 'RevenueCat', 'BranchIO'],
    },
    {
      company: 'Starry Night Labs',
      period: 'maj 2023 - sie 2023',
      summary: 'Aplikacja społeczności fanów zawodowych sportowców',
      role: 'Programista aplikacji mobilnych',
      highlights: [
        'Zintegrowano logowanie społecznościowe przez Google, Apple i inne platformy',
        'Zbudowano zarządzanie danymi lokalizacyjnymi i potoki wdrożeniowe',
        'Przeprowadzano przeglądy kodu, testy i usprawnienia w celu utrzymania jakości bazy kodu',
      ],
      stack: ['Flutter', 'Firebase', 'Bloc'],
    },
    {
      company: 'Future Connect',
      period: 'wrz 2021 - kwi 2023',
      summary: 'Usługa zamówień online',
      role: 'Baza danych i rozwój nowego serwera API',
      highlights: [
        'Wprowadzono system weryfikacji tożsamości oparty na Redis, poprawiając szybkość i efektywność uwierzytelniania',
        'Zbudowano powiadomienia w czasie rzeczywistym za pomocą Socket.IO',
        'Opracowano serwery API wspierające integracje zewnętrzne i skalowalność usługi',
      ],
      stack: ['Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Socket.IO'],
    },
  ],
  sideProject: {
    title: 'System automatyzacji hydroponiki',
    period: 'wrz 2021 - kwi 2023',
    role: 'Rozwój wbudowanego systemu automatyzacji',
    highlights: [
      'Zaprojektowano i opracowano wbudowany system automatyzacji zoptymalizowany dla środowisk hydroponicznych',
      'Wdrożono komunikację opartą na MQTT do zbierania danych z czujników i zdalnego sterowania urządzeniami',
      'Dodano aktualizacje firmware OTA, aby poprawić utrzymywalność i skalowalność urządzeń',
      'Prowadzono cały proces od projektowania obwodów po zlecaną produkcję PCB, kończąc na wczesnym MVP',
    ],
    achievements: ['Przyczynił się do rundy finansowania Pre-A', 'Wdrożono ponad 150 urządzeń, w tym jednostki dostarczone do centrum kultury'],
    stack: ['C', 'C++', 'PlatformIO', 'RabbitMQ'],
  },
  caseStudies: [
    {
      slug: 'core-query-performance',
      company: 'Munto',
      title: 'Kluczowe zapytania do bazy danych o 92% szybsze',
      subtitle: '1206ms → 13ms — od analizy wąskich gardeł po zmiany strukturalne w PostgreSQL',
      summary: 'Za pomocą EXPLAIN ANALYZE zdiagnozowałem wąskie gardło zapytania przekraczające 1200ms, przebudowałem strategię indeksowania i skróciłem czas odpowiedzi o 92%, jednocześnie zmniejszając zużycie pamięci Redis.',
      tags: ['PostgreSQL', 'Redis', 'Prisma', 'Performance'],
      steps: [
      {
        label: 'Problem',
        body: 'Opóźnienie kluczowego zapytania kanału bezpośrednio wpływało na doświadczenie użytkownika i zwiększało obciążenie serwera. Nie było jasne, czy przyczyną było samo zapytanie, brak indeksów, czy model danych.',
      },
      {
        label: 'Analiza',
        body: 'Za pomocą EXPLAIN ANALYZE w PostgreSQL wraz z Prisma Middleware śledzono plany wykonania zapytań produkcyjnych, a najwolniejsze zapytania wizualizowano i raportowano, aby precyzyjnie zlokalizować wąskie gardło.',
      },
      {
        label: 'Działanie',
        body: 'Przebudowano strategię indeksowania odpowiednio do wąskiego gardła i zastosowano zmiany strukturalne — przepisanie zapytań i optymalizację warunków. Równolegle ograniczono ZSET fan-out kanału obserwowanych do ostatnich 500 wpisów na użytkownika, zmniejszając zużycie pamięci Redis z 90% do 58% i redukując ryzyko awarii.',
      },
      {
        label: 'Wynik',
          body: 'Czas odpowiedzi kluczowego zapytania spadł z 1206ms do 13ms — poprawa o ponad 92%. Ta praca stała się podstawą architektury rekomendacji i potoku danych, które dziś stabilnie obsługują ponad 10000 użytkowników.',
        },
      ],
    },
  ],
  caseStudiesPage: {
    title: 'Studia przypadków',
    intro: 'Bliższe spojrzenie na kilka decyzji — problem, z jakim się zmierzyłem, jak go zdiagnozowałem i dlaczego wybrałem to rozwiązanie spośród alternatyw.',
    readMore: 'Przeczytaj całą historię',
    backToList: '← Wszystkie studia przypadków',
    viewAll: 'Zobacz wszystkie studia przypadków',
  },
  skillGroups: [
    {
      title: 'Backend',
      items: [
        'NestJS / Node.js / Express',
        'MikroORM / Prisma / PostgreSQL / MongoDB',
        'Redis, Docker',
        'Projektowanie i rozwój produkcyjnych serwerów API',
        'Architektura komunikacji w czasie rzeczywistym (powiadomienia/uwierzytelnianie)',
        'Wdrażanie i utrzymanie na AWS',
      ],
    },
    {
      title: 'Aplikacje mobilne',
      items: [
        'Tworzenie i utrzymanie wielu aplikacji przy użyciu Flutter',
        'Zarządzanie stanem: Bloc, Riverpod, GetX',
        'Czat w czasie rzeczywistym, zakupy w aplikacji, logowanie społecznościowe, lokalizacja',
        'Integracja analizy zachowań użytkowników i raportowania awarii',
      ],
    },
  ],
  education: {
    school: 'Uniwersytet Kyung Hee',
    degree: 'Licencjat z inżynierii mechanicznej',
    period: 'mar 2013 - lut 2020',
    notes: [
      'Analiza danych z czujników inercyjnych (IMU) w Matlabie na potrzeby analizy chodu i wizualizacji ruchu szkieletu',
      'Nagroda wyróżniająca od grupy badawczej projektu dyplomowego',
    ],
  },
  freelanceProjects: [
    {
      title: 'Wsparcie rozwoju backendu platformy e-commerce',
      period: 'lis 2024 - sty 2025',
      points: [
        'Rozwiązano niezgodności formatu danych między serwerem a klientem i opracowano nowe API (NestJS, MikroORM)',
        'Poprawiono doświadczenie użytkownika poprzez optymalizację szybkości odpowiedzi API i wydajności serwera',
      ],
    },
    {
      title: 'Rozwój mobilnej aplikacji randkowej',
      period: 'cze 2024 - sie 2024',
      points: [
        'Prowadzono aplikację kompleksowo: projekt, rozwój, testy i wydanie; wdrożono czat w czasie rzeczywistym, zarządzanie profilem i weryfikację tożsamości (Flutter)',
        'Wydano w App Store/Google Play i stale iterowano na podstawie opinii użytkowników',
      ],
    },
    {
      title: 'Wsparcie rozwoju aplikacji do zarządzania zdrowiem fizycznym i psychicznym',
      period: 'kwi 2024 - lip 2024',
      points: ['Opracowano wizualizacje danych zdrowia fizycznego/psychicznego i poprawiono UI/UX na podstawie opinii użytkowników (Flutter)'],
    },
  ],
  contact: {
    heading: 'Skontaktuj się',
    description: 'Masz propozycję, projekt albo pytanie? Napisz do mnie poniżej.',
    namePlaceholder: 'Imię',
    emailPlaceholder: 'E-mail',
    messagePlaceholder: 'Wiadomość',
    submitLabel: 'Wyślij wiadomość',
    sendingLabel: 'Wysyłanie…',
    successMessage: 'Wiadomość wysłana — odpowiem wkrótce.',
    errorMessage: 'Coś poszło nie tak. Spróbuj ponownie lub napisz do mnie bezpośrednio e-mailem.',
    orEmailDirectly: 'Lub napisz bezpośrednio na',
  },
  footer: {
    tagline: 'Od mobile przez backend, po infrastrukturę.',
    rights: 'Wszelkie prawa zastrzeżone.',
  },
};

export default pl;
