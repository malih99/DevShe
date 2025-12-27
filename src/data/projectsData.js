const projects = [
  {
    id: "sepehr-academy",
    slug: "sepehr-academy",
    title: { fa: "آکادمی سپهر", en: "Sepehr Academy" },
    summary: {
      fa: "لندینگ حرفه‌ای با فرم، اسلایدر و ولیدیشن برای جذب کاربر و ثبت‌نام.",
      en: "A conversion-focused landing page with forms, sliders and validation.",
    },
    stack: ["React", "Tailwind", "Formik", "Yup", "Swiper", "MUI", "Axios"],
    period: { fa: "۱۴۰۳", en: "2024" },
    repo: "https://github.com/malih99",
    demo: "",
    image: "/assets/sepehr.svg",
    caseStudy: {
      problem: {
        fa: "نیاز به یک لندینگ سریع و قابل‌اعتماد برای معرفی خدمات و ثبت‌نام کاربران وجود داشت؛ با فرم‌های چندمرحله‌ای، ولیدیشن دقیق و تجربه کاربری روان.",
        en: "The product needed a fast, reliable landing page to present the service and capture leads with strong form UX and validation.",
      },
      solution: {
        fa: "ساخت UI با React و Tailwind، پیاده‌سازی فرم‌ها با Formik/Yup، اسلایدرها با Swiper و یک ساختار کامپوننتی که توسعه و نگهداری را ساده می‌کند.",
        en: "Built the UI with React + Tailwind, implemented forms using Formik/Yup, sliders with Swiper, and structured components for maintainability.",
      },
      features: {
        fa: [
          "فرم‌های قابل‌گسترش با ولیدیشن دقیق",
          "اسلایدر و سکشن‌های معرفی",
          "ریسپانسیو و بهینه برای موبایل",
        ],
        en: [
          "Scalable forms with strong validation",
          "Slider + marketing sections",
          "Mobile-first responsive layout",
        ],
      },
      results: {
        fa: [
          "کاهش خطاهای ورودی با ولیدیشن استاندارد",
          "تجربه کاربری روان‌تر در موبایل",
          "ساختار ماژولار برای توسعه سریع‌تر",
        ],
        en: [
          "Reduced input errors with proper validation",
          "Smoother mobile experience",
          "Modular structure for faster iteration",
        ],
      },
      role: {
        fa: "Frontend Developer — طراحی UI، پیاده‌سازی فرم‌ها و ساختار کامپوننتی.",
        en: "Frontend Developer — UI implementation, form logic, and component structure.",
      },
      screenshots: [],
    },
  },

  {
    id: "devdash",
    slug: "devdash",
    title: { fa: "DevDash", en: "DevDash" },
    summary: {
      fa: "داشبورد ماژولار با جدول‌ها، فیلترها و چارت‌ها (الگوی آماده برای پنل ادمین).",
      en: "A modular dashboard with tables, filters, and charts (admin panel patterns).",
    },
    stack: [
      "React",
      "Tailwind",
      "Zustand",
      "React Query",
      "MUI",
      "TanStack Table",
      "Recharts",
    ],
    period: { fa: "در حال توسعه", en: "In progress" },
    repo: "https://github.com/malih99",
    demo: "",
    image: "/assets/dashboard.svg",
    caseStudy: {
      problem: {
        fa: "در پروژه‌های دیتاهِوی، تکرار پیاده‌سازی جدول/فیلتر/چارت باعث کند شدن توسعه می‌شود و کیفیت UX افت می‌کند.",
        en: "In data-heavy products, repeatedly rebuilding tables/filters/charts slows delivery and hurts UX consistency.",
      },
      solution: {
        fa: "طراحی یک داشبورد ماژولار با قطعات قابل‌استفاده مجدد: سرچ و فیلتر، دیتاتیبل، چارت‌ها و الگوهای UI قابل توسعه.",
        en: "Designed a modular dashboard with reusable primitives: search & filter, data tables, charts, and extensible UI patterns.",
      },
      features: {
        fa: [
          "جستجو/فیلتر قابل‌گسترش",
          "کامپوننت‌های دیتاتیبل با TanStack Table",
          "مدیریت state با Zustand + React Query",
          "چارت‌های سریع و خوانا با Recharts",
        ],
        en: [
          "Extensible search/filter UI",
          "DataTable components with TanStack Table",
          "State via Zustand + React Query",
          "Readable charts using Recharts",
        ],
      },
      results: {
        fa: [
          "کاهش زمان پیاده‌سازی صفحات تکرارشونده",
          "یکپارچگی UI و تجربه کاربری بهتر",
          "آماده برای توسعه به سمت سیستم طراحی",
        ],
        en: [
          "Faster delivery for repeated pages",
          "More consistent UI/UX",
          "A strong base for a design system",
        ],
      },
      role: {
        fa: "Frontend Developer — طراحی معماری UI، ساخت کامپوننت‌های پایه و استانداردسازی الگوها.",
        en: "Frontend Developer — UI architecture, base components, and pattern standardization.",
      },
      screenshots: [],
    },
  },

  {
    id: "rah-restaurant-menu",
    slug: "rah-restaurant-menu",
    title: {
      fa: "منوی دیجیتال رستوران (رهاسا)",
      en: "Digital Restaurant Menu",
    },
    summary: {
      fa: "رابط کاربری رستوران و منوی دیجیتال واکنش‌گرا برای نمایش سریع دسته‌ها و آیتم‌ها.",
      en: "A responsive digital menu UI for fast category and item browsing.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Responsive"],
    period: { fa: "۱۴۰۲–۱۴۰۴", en: "2023–2025" },
    repo: "https://github.com/malih99",
    demo: "http://menu.hesabesh.com/iq/",
    image: "/assets/menu-icon.svg",
    caseStudy: {
      problem: {
        fa: "رستوران نیاز داشت منوی کاغذی را با یک تجربه دیجیتال سریع و موبایل‌محور جایگزین کند تا مشتری‌ها راحت‌تر آیتم‌ها را ببینند.",
        en: "The restaurant needed to replace paper menus with a fast, mobile-first digital experience for customers.",
      },
      solution: {
        fa: "پیاده‌سازی UI سبک و سریع با ساختار دسته‌بندی، جستجو/اسکرول روان و طراحی ریسپانسیو برای موبایل و تبلت.",
        en: "Implemented a lightweight UI with categories, smooth scroll UX and responsive design for mobile and tablet.",
      },
      features: {
        fa: [
          "ریسپانسیو موبایل‌محور",
          "نمایش دسته‌ها و آیتم‌ها",
          "بهینه برای سرعت",
        ],
        en: [
          "Mobile-first responsive",
          "Category & item browsing",
          "Performance-friendly UI",
        ],
      },
      results: {
        fa: [
          "دسترسی سریع‌تر مشتری به منو",
          "تجربه بهتر روی موبایل",
          "نگهداری ساده‌تر نسبت به منوی کاغذی",
        ],
        en: [
          "Faster access to the menu",
          "Better mobile experience",
          "Easier maintenance than paper menus",
        ],
      },
      role: {
        fa: "Frontend Developer — پیاده‌سازی UI، ریسپانسیو، بهینه‌سازی تجربه موبایل.",
        en: "Frontend Developer — UI implementation, responsive design, mobile UX optimization.",
      },
      screenshots: [],
    },
  },

  {
    id: "fuzzer-orchestrator",
    slug: "fuzzer-orchestrator",
    title: { fa: "Fuzzer Orchestrator", en: "Fuzzer Orchestrator" },
    summary: {
      fa: "اورکستریتور فازر: مدیریت Jobهای Fuzz/Compile، نمایش لاگ‌ها و گراف وابستگی.",
      en: "A fuzzer orchestrator UI: managing Fuzz/Compile jobs, logs, and dependency graphs.",
    },
    stack: ["React", "Vite", "TailwindCSS", "MUI", "ReactFlow", "REST API"],
    period: { fa: "۱۴۰۳–۱۴۰۴", en: "2024–2025" },
    repo: "https://github.com/malih99",
    demo: "",
    image: "/assets/placeholder.svg",
    caseStudy: {
      problem: {
        fa: "برای کنترل Jobهای متعدد و بررسی سریع وضعیت‌ها/لاگ‌ها، یک داشبورد قابل‌اعتماد لازم بود تا تیم بتواند فرآیند را بهتر مدیریت کند.",
        en: "The team needed a reliable dashboard to manage many jobs and quickly inspect statuses/logs to control the process.",
      },
      solution: {
        fa: "ساخت پنل مدیریت Job با معماری ماژولار، نمایش وضعیت‌ها، لاگ‌ها و گراف وابستگی با ReactFlow و اتصال به REST API.",
        en: "Built a modular job management UI, status views, logs, and dependency graphs with ReactFlow connected to REST APIs.",
      },
      features: {
        fa: [
          "مدیریت Jobها و وضعیت‌ها",
          "نمایش لاگ‌ها",
          "گراف وابستگی با ReactFlow",
        ],
        en: [
          "Job/status management",
          "Log inspection",
          "Dependency graph with ReactFlow",
        ],
      },
      results: {
        fa: [
          "تشخیص سریع‌تر مشکلات",
          "نمای کلی بهتر از فرآیندها",
          "UI مقیاس‌پذیر برای توسعه فیچرهای جدید",
        ],
        en: [
          "Faster troubleshooting",
          "Better process visibility",
          "Scalable UI for new features",
        ],
      },
      role: {
        fa: "Frontend Developer — طراحی UI و پیاده‌سازی صفحات مدیریت، لاگ‌ها و گراف.",
        en: "Frontend Developer — UI design and implementation for management pages, logs, and graphs.",
      },
      screenshots: [],
    },
  },
];

export default projects;
