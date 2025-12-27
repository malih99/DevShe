// NOTE: This dataset is aligned with the resume and is used by:

const projects = [
  {
    id: "fuzzer-orchestrator",
    slug: "fuzzer-orchestrator",
    title: { fa: "Fuzzer Orchestrator", en: "Fuzzer Orchestrator" },
    summary: {
      fa: "طراحی و توسعه یک محصول API-based از صفر برای مدیریت Jobهای Fuzz/Compile، مشاهده لاگ‌ها و گراف وابستگی.",
      en: "Built an API-based product from scratch to manage Fuzz/Compile jobs, view logs, and visualize dependency graphs.",
    },
    problem: {
      fa: "نیاز به یک پنل یکپارچه برای مدیریت و پایش Jobهای فازینگ/کامپایل، دانلود خروجی‌ها و مشاهده وابستگی‌ها وجود داشت.",
      en: "A unified dashboard was needed to manage and monitor fuzz/compile jobs, download outputs, and inspect dependencies.",
    },
    solution: {
      fa: "یک داشبورد ماژولار با جدول‌های قابل فیلتر/سورت، صفحه جزئیات Job، دانلود لاگ‌ها (stdout/stderr/coverage) و نمایش گراف وابستگی با ReactFlow پیاده‌سازی شد.",
      en: "Implemented a modular dashboard with filterable/sortable tables, job detail views, log downloads (stdout/stderr/coverage), and a dependency graph using ReactFlow.",
    },
    highlights: [
      {
        fa: "طراحی محصول از روی مشخصات API تا UI نهایی",
        en: "Product design from API specs to final UI",
      },
      {
        fa: "مدیریت وضعیت با Zustand و درخواست‌ها با React Query",
        en: "State management with Zustand + data fetching via React Query",
      },
      {
        fa: "پشتیبانی Dark/Light Mode و ساختار ماژولار",
        en: "Dark/Light mode support with modular structure",
      },
    ],
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "MUI",
      "ReactFlow",
      "REST API",
      "Zustand",
      "React Query",
    ],
    period: "دی ۱۴۰۳",
    repo: "",
    demo: "",
    image: "/assets/landing.png",
  },

  {
    id: "digital-menu",
    slug: "digital-menu",
    title: { fa: "Digital Menu", en: "Digital Menu" },
    summary: {
      fa: "طراحی و توسعه منوی دیجیتال تحت وب برای کافه/رستوران (محصولات، سبد خرید، محاسبه خودکار سفارش و اتصال کامل به API).",
      en: "Designed and built a web-based digital menu for a cafe/restaurant (products, cart, auto totals, and full API integration).",
    },
    problem: {
      fa: "مدیریت سفارش‌های دیجیتال و نمایش محصولات نیاز به یک UI سریع و ساده داشت که بدون اتکا به UI/UX آماده پیاده‌سازی شود.",
      en: "Managing digital orders and product browsing required a fast, simple UI implemented without relying on prebuilt UI/UX templates.",
    },
    solution: {
      fa: "پیاده‌سازی کامل منوی دیجیتال با ارتباط کامل با API، سبد خرید، محاسبه خودکار سفارش و دیپلوی روی Windows Server (IIS).",
      en: "Delivered a full digital menu with complete API integration, cart flow, automatic order totals, and deployment on Windows Server (IIS).",
    },
    highlights: [
      {
        fa: "پیاده‌سازی با Vite + TailwindCSS و UI مدرن",
        en: "Modern UI with Vite + TailwindCSS",
      },
      {
        fa: "کامپوننت‌های Radix و Shadcn/UI برای سرعت توسعه",
        en: "Used Radix + shadcn/ui components for faster delivery",
      },
      {
        fa: "دیپلوی روی IIS و مدیریت متغیرهای محیطی",
        en: "Deployed on IIS with environment variable best-practices",
      },
    ],
    stack: [
      "Vite",
      "JavaScript",
      "TailwindCSS",
      "Radix UI",
      "shadcn/ui",
      "Lucide",
      "REST API",
      "IIS",
    ],
    period: "آذر ۱۴۰۳ – آذر ۱۴۰۳",
    repo: "",
    demo: "http://menu.hesabesh.com/iq",
    image: "/assets/menu_digital.png",
  },

  {
    id: "crypto-vault",
    slug: "crypto-vault",
    title: {
      fa: "Crypto Portfolio & Transactions Dashboard",
      en: "Crypto Portfolio & Transactions Dashboard",
    },
    summary: {
      fa: "داشبورد مدیریت پرتفو و تراکنش‌های کریپتو با فیلتر/سورت، KPI، مودال جزئیات و صفحه تنظیمات پیشرفته.",
      en: "A crypto portfolio & transactions dashboard with filtering/sorting, KPIs, detail modals, and advanced settings.",
    },
    problem: {
      fa: "برای مدیریت تراکنش‌ها و پرتفو، نیاز به یک داشبورد دقیق با فیلترهای متعدد، همگام‌سازی URL و تحلیل KPI بود.",
      en: "Portfolio + transaction tracking required a precise dashboard with advanced filters, URL sync, and KPI analysis.",
    },
    solution: {
      fa: "ساخت داشبورد با جدول‌های TanStack، فیلتر/سورت، همگام‌سازی وضعیت با URL و LocalStorage، و تنظیمات (Theme/Language/Currency/RPC/...)",
      en: "Built a dashboard using TanStack tables with filter/sort, state syncing via URL + LocalStorage, and settings (theme/language/currency/RPC/...)",
    },
    highlights: [
      {
        fa: "همگام‌سازی فیلترها با URL برای share کردن وضعیت",
        en: "URL-synced filters for shareable state",
      },
      {
        fa: "صفحه تنظیمات با بخش‌های Security / Network / Danger Zone",
        en: "Settings page with Security / Network / Danger Zone sections",
      },
      {
        fa: "مدیریت توکن/سشن با LocalStorage",
        en: "Token/session handling via LocalStorage",
      },
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "TanStack Query",
      "React Router",
      "LocalStorage",
      "REST API",
    ],
    period: "مهر ۱۴۰۳ – مهر ۱۴۰۳",
    repo: "https://github.com/malih99/CryptoVault",
    demo: "",
    image: "/assets/landing.png",
  },

  {
    id: "architecture-studio-showcase",
    slug: "architecture-studio-showcase",
    title: {
      fa: "Architecture Studio Showcase",
      en: "Architecture Studio Showcase",
    },
    summary: {
      fa: "وبسایت ریسپانسیو با پشتیبانی چندزبانه و دارک/لایت، اسلایدر پروژه‌ها، فرم تماس EmailJS و دیپلوی روی Vercel.",
      en: "Responsive website with i18n and dark/light mode, project slider, EmailJS contact form, deployed on Vercel.",
    },
    problem: {
      fa: "نمایش پروژه‌های یک استودیو معماری نیاز به تجربه کاربری سبک، چندزبانه و قابل دیپلوی سریع داشت.",
      en: "An architecture studio needed a lightweight, bilingual experience with fast deployment for showcasing projects.",
    },
    solution: {
      fa: "پیاده‌سازی سایت با i18next، Swiper برای اسلایدر پروژه‌ها، مدیریت وضعیت با Zustand/React Query و ارسال ایمیل بدون بک‌اند با EmailJS.",
      en: "Implemented the site with i18next, Swiper project slider, Zustand/React Query state/data, and serverless email via EmailJS.",
    },
    highlights: [
      {
        fa: "Multi-language + Dark/Light mode",
        en: "Multi-language + Dark/Light mode",
      },
      {
        fa: "دیپلوی روی Vercel با رعایت Best Practices متغیرهای محیطی",
        en: "Vercel deployment with env best-practices",
      },
      {
        fa: "فرم تماس بدون نیاز به بک‌اند (EmailJS)",
        en: "Backend-less contact form (EmailJS)",
      },
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Swiper",
      "EmailJS",
      "i18next",
    ],
    period: "مهر ۱۴۰۴ – مهر ۱۴۰۴",
    repo: "https://github.com/malih99/portfolio-architecture",
    demo: "https://portfolio-architecture-eight.vercel.app",
    image: "/assets/landing.png",
  },
];

export default projects;
