import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";

export default function Projects() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  return (
    <motion.section
      className={`min-h-screen w-screen p-4 md:px-10 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-10 border-b pb-4 border-purple-700">
        {isFa ? "پروژه‌ها" : "My Projects"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f1d2c] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 flex flex-col transition duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={project.image}
              alt={project.title[lang]}
              className="w-16 h-16 mb-4 self-center"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">
              {project.title[lang]}
            </h3>
            <p className="text-sm text-gray-400">{project.description[lang]}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
