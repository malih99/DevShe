import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";
import ProjectGrid from "../components/ProjectGrid";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const lang = (i18n.language || "en").startsWith("fa") ? "fa" : "en";
  const isFa = lang === "fa";

  const [query, setQuery] = useState("");
  const [techFilter, setTechFilter] = useState("all");

  const allTechs = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.stack?.forEach((x) => s.add(x)));
    return ["all", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTech = techFilter === "all" || p.stack?.includes(techFilter);

      const title = p.title?.[lang] || p.title?.en || p.title?.fa || "";
      const summary = p.summary?.[lang] || p.summary?.en || p.summary?.fa || "";
      const text = `${title} ${summary}`.toLowerCase();

      const matchesQuery = !q || text.includes(q);
      return matchesTech && matchesQuery;
    });
  }, [query, techFilter, lang]);

  return (
    <motion.section
      className={`w-full min-h-screen px-6 md:px-10 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-extrabold mb-5 tracking-tight">
        {t("projects_title")}
      </h3>

      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("projects_search_placeholder")}
          className="w-full md:w-1/2 bg-[#1f1d2c] p-3 rounded-lg placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-600"
        />

        <select
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          className="w-full md:w-56 bg-[#1f1d2c] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
        >
          {allTechs.map((x) => (
            <option key={x} value={x}>
              {x === "all" ? t("projects_filter_all") : x}
            </option>
          ))}
        </select>
      </div>

      <ProjectGrid
        items={filtered}
        lang={lang}
        emptyText={t("projects_empty")}
      />
    </motion.section>
  );
}
