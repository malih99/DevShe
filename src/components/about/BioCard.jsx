import { motion } from "framer-motion";
import SkillChips from "./SkillChips";

export default function BioCard({ isFa, title, p1, p2, chips = [] }) {
  return (
    <motion.div
      className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
      initial={{ opacity: 0, x: isFa ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {p1 && <p className="mt-4 text-gray-300 leading-7">{p1}</p>}
      {p2 && <p className="mt-3 text-gray-300 leading-7">{p2}</p>}

      <div className="mt-6">
        <h3 className="text-sm font-semibold opacity-90">
          {isFa ? "مهارت‌های کلیدی" : "Key Skills"}
        </h3>
        <SkillChips items={chips} />
      </div>
    </motion.div>
  );
}
