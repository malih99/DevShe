import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection({ isFa, t }) {
  return (
    <motion.section
      className="max-w-6xl mx-auto mt-12 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold">
        {t("about_experience_title") || (isFa ? "سوابق حرفه‌ای" : "Experience")}
      </h2>

      <div className="mt-6 space-y-6">
        <TimelineItem
          title={
            isFa
              ? "پویان افزار – توسعه‌دهنده فرانت‌اند (پاره‌وقت - ریموت)"
              : "Poyan Afzar — Frontend Dev (Part-time, Remote)"
          }
          date={isFa ? "دی 1403" : "Dec 2024"}
          bullets={[
            isFa
              ? "توسعه پنل ادمین با React، Zustand، TanStack Table، MUI و TailwindCSS"
              : "Built admin panel using React, Zustand, TanStack Table, MUI, TailwindCSS",
            isFa
              ? "بهینه‌سازی دیتاگرید و تعاملات"
              : "Optimized data-grid and interactions",
          ]}
        />

        <TimelineItem
          title={
            isFa
              ? "راهکارهای هوشمند سبز سروش (رهاسا) – جونیور فرانت‌اند"
              : "Rahasa — Junior Frontend"
          }
          date={isFa ? "آذر 1402 - آذر 1403" : "Nov 2023 - Nov 2024"}
          bullets={[
            isFa
              ? "توسعه منوی دیجیتال و UI رستوران با React، Vite، Shadcn و Tailwind"
              : "Built digital restaurant menu UI with React, Vite, Shadcn, Tailwind",
            isFa
              ? "واکنش‌گرا و بهینه برای موبایل"
              : "Responsive, mobile-first optimization",
          ]}
        />
      </div>
    </motion.section>
  );
}
