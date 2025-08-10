// src/data/projectsData.js
const projects = [
  {
    id: "sepehr-academy",
    slug: "sepehr-academy",
    title: { fa: "آکادمی سپهر", en: "Sepehr Academy" },
    summary: {
      fa: "لندینگ حرفه‌ای با فرم و اسلایدر و ولیدیشن.",
      en: "Landing page with forms, slider, and validations.",
    },
    stack: ["React", "Tailwind", "Formik", "Yup", "Swiper", "MUI", "Axios"],
    period: "1403",
    repo: "https://github.com/malih99",
    demo: "",
    image: "/assets/sepehr.svg",
  },
  {
    id: "devdash",
    slug: "devdash",
    title: { fa: "DevDash", en: "DevDash" },
    summary: {
      fa: "داشبورد ماژولار با جدول‌ها، فیلترها و چارت‌ها.",
      en: "Modular dashboard with tables, filters and charts.",
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
    period: "در حال توسعه",
    repo: "https://github.com/malih99",
    demo: "",
    image: "/assets/dashboard.svg", // اگر نداری از placeholder استفاده کن
  },
  {
    id: "rah-restaurant-menu",
    slug: "rah-restaurant-menu",
    title: {
      fa: "منوی دیجیتال رستوران (رهاسا)",
      en: "Digital Restaurant Menu",
    },
    summary: {
      fa: "رابط کاربری رستوران و منوی دیجیتال واکنش‌گرا.",
      en: "Responsive restaurant UI & digital menu.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Responsive"],
    period: "1402-1404",
    repo: "https://github.com/malih99",
    demo: "http://menu.hesabesh.com/iq/",
    image: "/assets/menu-icon.svg",
  },
];

export default projects;
