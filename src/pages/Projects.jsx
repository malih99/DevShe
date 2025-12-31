import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, X, SlidersHorizontal } from "lucide-react";

import projects from "../data/projectsData";
import ProjectGrid from "../components/ProjectGrid";
import { getText } from "../i18n/i18n";
import Seo from "../components/Seo";

function normalizeTech(x) {
  return String(x || "").trim();
}

export default function Projects() {
  const { i18n, t } = useTranslation();
  const lang = (i18n.language || "en").toLowerCase().startsWith("fa")
    ? "fa"
    : "en";
  const isFa = lang === "fa";

  // input query + debounced query (UX better)
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [techFilter, setTechFilter] = useState("all");

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query), 180);
    return () => clearTimeout(id);
  }, [query]);

  const allTechs = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.stack?.forEach((x) => s.add(normalizeTech(x))));
    return ["all", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesTech =
        techFilter === "all" || (p.stack || []).includes(techFilter);

      const title = getText(p.title, lang) || "";
      const summary = getText(p.summary, lang) || "";
      const text = `${title} ${summary} ${(p.stack || []).join(
        " "
      )}`.toLowerCase();

      const matchesQuery = !q || text.includes(q);

      return matchesTech && matchesQuery;
    });
  }, [debouncedQuery, techFilter, lang]);

  const totalCount = projects.length;
  const resultCount = filtered.length;

  const clearAll = () => {
    setQuery("");
    setTechFilter("all");
  };

  const pageTitle = t("seo_projects_title");
  const pageDesc = t("seo_projects_desc");

  // helper labels (no need to touch i18n files)
  const ui = {
    subtitle: isFa
      ? "نمونه‌هایی از پروژه‌ها و الگوهای UI که روی آن‌ها کار کرده‌ام."
      : "Selected work and UI patterns I’ve built and refined.",
    filters: isFa ? "فیلترها" : "Filters",
    results: isFa ? "نتیجه" : "results",
    clear: isFa ? "پاک‌سازی" : "Clear",
    searchPlaceholder: t("projects_search_placeholder"),
    techAll: t("projects_filter_all"),
  };

  return (
    <>
      <Seo title={pageTitle} description={pageDesc} />

      <motion.section
        dir={isFa ? "rtl" : "ltr"}
        className={[
          "w-full min-h-screen",
          "px-6 md:px-10 py-12",
          "bg-slate-50 text-slate-900",
          "dark:bg-gradient-to-br dark:from-[#0c0f18] dark:via-[#1a1232] dark:to-[#241032] dark:text-white",
          isFa ? "text-right" : "text-left",
        ].join(" ")}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="relative">
            <div className="pointer-events-none absolute -top-24 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/15" />
            <div className="pointer-events-none absolute top-10 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {t("projects_title")}
              </h1>

              <p className="text-sm md:text-base text-slate-600 dark:text-white/65 max-w-3xl leading-relaxed">
                {ui.subtitle}
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-white/55">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1">
                  <span className="font-semibold text-slate-800 dark:text-white/85">
                    {resultCount}
                  </span>
                  <span>
                    {ui.results}
                    {isFa ? "" : " / "}
                    {totalCount}
                  </span>
                </span>

                {(query.trim() || techFilter !== "all") && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 hover:bg-white dark:hover:bg-white/10 transition"
                  >
                    <X size={14} />
                    {ui.clear}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Filters card */}
          <div
            className={[
              "mt-8 rounded-3xl",
              "border border-black/10 dark:border-white/10",
              "bg-white/70 dark:bg-white/5 backdrop-blur",
              "shadow-[0_20px_60px_-45px_rgba(0,0,0,0.7)]",
              "p-4 md:p-5",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 dark:text-white">
                <SlidersHorizontal size={16} className="opacity-80" />
                {ui.filters}
              </div>

              <div className="text-xs text-slate-500 dark:text-white/55">
                {isFa ? "جستجو + فیلتر تکنولوژی" : "Search + tech filter"}
              </div>
            </div>

            <div className="mt-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              {/* Search */}
              <div className="relative w-full md:w-[460px]">
                <Search
                  size={18}
                  className={[
                    "absolute top-1/2 -translate-y-1/2 opacity-70",
                    isFa ? "right-3" : "left-3",
                    "text-slate-500 dark:text-white/60",
                  ].join(" ")}
                />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={ui.searchPlaceholder}
                  className={[
                    "w-full h-11 rounded-2xl",
                    "bg-white/80 dark:bg-white/5",
                    "border border-black/10 dark:border-white/10",
                    "px-11 outline-none",
                    "placeholder:text-slate-400 dark:placeholder:text-white/40",
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
                      "bg-black/[0.03] hover:bg-black/[0.05] dark:bg-white/5 dark:hover:bg-white/10",
                      "border border-black/10 dark:border-white/10 transition",
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
              <div className="w-full md:w-72">
                <select
                  value={techFilter}
                  onChange={(e) => setTechFilter(e.target.value)}
                  className={[
                    "w-full h-11 rounded-2xl",
                    "bg-white/80 dark:bg-white/5",
                    "border border-black/10 dark:border-white/10",
                    "px-3 outline-none",
                    "text-slate-900 dark:text-white",
                    "focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent",
                  ].join(" ")}
                >
                  {allTechs.map((tech) => (
                    <option key={tech} value={tech} className="text-black">
                      {tech === "all" ? ui.techAll : tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tech chips (quick filter) */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {allTechs.slice(0, 14).map((tech) => {
                  const active = techFilter === tech;
                  const label = tech === "all" ? ui.techAll : tech;

                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setTechFilter(tech)}
                      className={[
                        "text-xs px-3 py-1.5 rounded-full border transition",
                        active
                          ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200"
                          : "border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-slate-700 dark:text-white/70 hover:bg-black/[0.05] dark:hover:bg-white/10",
                      ].join(" ")}
                    >
                      {label}
                    </button>
                  );
                })}

                {/* show active tech if it's not in first slice */}
                {techFilter !== "all" &&
                  !allTechs.slice(0, 14).includes(techFilter) && (
                    <button
                      type="button"
                      onClick={() => setTechFilter(techFilter)}
                      className="text-xs px-3 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200"
                    >
                      {techFilter}
                    </button>
                  )}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-8">
            <ProjectGrid
              items={filtered}
              lang={lang}
              emptyText={t("projects_empty")}
              onClear={clearAll}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
