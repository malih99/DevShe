import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";
import ProjectGrid from "../components/ProjectGrid";

export default function Projects() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  const [query, setQuery] = useState("");
  const [techFilter, setTechFilter] = useState("all");

  const allTechs = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.stack?.forEach((t) => s.add(t)));
    return ["all", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTech = techFilter === "all" || p.stack?.includes(techFilter);
      const text = `${p.title?.[lang] || ""} ${
        p.summary?.[lang] || ""
      }`.toLowerCase();
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
        {isFa ? "پروژه‌ها" : "My Projects"}
      </h3>

      {/* فیلترها */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            isFa ? "جستجو در عنوان/توضیح..." : "Search title/summary..."
          }
          className="w-full md:w-1/2 bg-[#1f1d2c] p-3 rounded-lg placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-600"
        />
        <select
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          className="w-full md:w-56 bg-[#1f1d2c] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
        >
          {allTechs.map((t) => (
            <option key={t} value={t}>
              {t === "all"
                ? isFa
                  ? "همه تکنولوژی‌ها"
                  : "All technologies"
                : t}
            </option>
          ))}
        </select>
      </div>

      {/* گرید کارت‌ها */}
      <ProjectGrid
        items={filtered}
        lang={lang}
        emptyText={
          isFa
            ? "هیچ پروژه‌ای مطابق فیلتر/جستجو یافت نشد."
            : "No projects match your filters."
        }
      />
    </motion.section>
  );
}
