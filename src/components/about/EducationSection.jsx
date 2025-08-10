import { motion } from "framer-motion";

export default function EducationSection({ isFa, title, uni, degree }) {
  return (
    <motion.section
      className="max-w-6xl mx-auto mt-8 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 text-sm">
        <p className="font-bold">{uni}</p>
        <p className="text-gray-400">{degree}</p>
      </div>
    </motion.section>
  );
}
