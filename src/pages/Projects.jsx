// pages/Projects.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";

export default function Projects() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = i18n.language === "fa";

  return (
    <motion.div
      className={`w-full min-h-screen px-8 py-12 flex flex-col justify-center bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-xl font-bold mb-10">
        {lang === "fa" ? "پروژه‌ها" : "Projects"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f1d2c] p-6 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-purple-500/30 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={project.image}
              alt={project.title[lang]}
              className="w-16 mb-4"
            />
            <h4 className="text-lg font-semibold">{project.title[lang]}</h4>
            <p className="text-sm text-gray-400 mt-2">
              {project.description[lang]}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
