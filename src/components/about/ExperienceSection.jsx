import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection({ t }) {
  const items = [
    {
      title: t("exp_vian_title"),
      date: t("exp_vian_date"),
      bullets: [t("exp_vian_b1"), t("exp_vian_b2")],
    },
    {
      title: t("exp_rahasa_title"),
      date: t("exp_rahasa_date"),
      bullets: [t("exp_rahasa_b1"), t("exp_rahasa_b2")],
    },
  ];

  return (
    <motion.section
      className="max-w-6xl mx-auto mt-12 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold">{t("about_experience_title")}</h2>

      <div className="mt-6 space-y-6">
        {items.map((x) => (
          <TimelineItem
            key={x.title}
            title={x.title}
            date={x.date}
            bullets={x.bullets}
          />
        ))}
      </div>
    </motion.section>
  );
}
