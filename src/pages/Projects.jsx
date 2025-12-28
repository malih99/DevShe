import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, X } from "lucide-react";
import projects from "../data/projectsData";
import ProjectGrid from "../components/ProjectGrid";
import { getText } from "../i18n/i18n";
import Seo from "../components/SEO";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const lang = (i18n.language || "en").toLowerCase().startsWith("fa")
    ? "fa"
    : "en";
  const isFa = lang === "fa";

  const [query, setQuery] = useState("");
  const [techFilter, setTechFilter] = useState("all");

  const allTechs = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.stack?.forEach((x) => s.add(x)));
    return ["all", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTech = techFilter === "all" || p.stack?.includes(techFilter);
      const title = getText(p.title, lang);
      const summary = getText(p.summary, lang);
      const text = `${title} ${summary}`.toLowerCase();
      const matchesQuery = !q || text.includes(q);
      return matchesTech && matchesQuery;
    });
  }, [query, techFilter, lang]);

  return (
    <>
      <Seo
        title={t("seo_projects_title")}
        description={t("seo_projects_desc")}
      />

      <motion.section
        className={[
          "w-full min-h-screen px-6 md:px-10 py-12 text-white",
          "bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032]",
          isFa ? "text-right" : "text-left",
        ].join(" ")}
        dir={isFa ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {t("projects_title")}
          </h1>

          {/* Filters */}
          <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full md:w-[420px]">
              <Search
                size={18}
                className={[
                  "absolute top-1/2 -translate-y-1/2 opacity-70",
                  isFa ? "right-3" : "left-3",
                ].join(" ")}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("projects_search_placeholder")}
                className={[
                  "w-full h-11 rounded-2xl",
                  "bg-white/5 border border-white/10",
                  "px-11 outline-none",
                  "placeholder:text-white/40",
                  "focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent",
                ].join(" ")}
              />

              {query.trim() && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className={[
                    "absolute top-1/2 -translate-y-1/2",
                    "h-8 w-8 inline-flex items-center justify-center rounded-xl",
                    "bg-white/5 hover:bg-white/10 border border-white/10 transition",
                    isFa ? "left-2" : "right-2",
                  ].join(" ")}
                  aria-label="Clear search"
                  title="Clear"
                >
                  <X size={16} className="opacity-80" />
                </button>
              )}
            </div>

            {/* Tech filter */}
            <div className="w-full md:w-60">
              <select
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                className={[
                  "w-full h-11 rounded-2xl",
                  "bg-white/5 border border-white/10",
                  "px-3 outline-none",
                  "focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent",
                ].join(" ")}
              >
                {allTechs.map((tech) => (
                  <option key={tech} value={tech} className="text-black">
                    {tech === "all" ? t("projects_filter_all") : tech}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-8">
            <ProjectGrid
              items={filtered}
              lang={lang}
              emptyText={t("projects_empty")}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
