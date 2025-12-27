import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projectsData";

function pickLang(obj, lang) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.fa || obj.en || "";
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const isFa = lang === "fa";

  const project = projects.find((p) => (p.slug || p.id) === slug);

  if (!project) {
    return (
      <motion.section
        className={`w-full min-h-screen px-6 md:px-10 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
          isFa ? "text-right" : "text-left"
        }`}
        dir={isFa ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold">
            {isFa ? "پروژه پیدا نشد." : "Project not found."}
          </p>
          <p className="mt-2 text-sm text-white/70">
            {isFa
              ? "ممکن است لینک اشتباه باشد یا این پروژه از لیست حذف شده باشد."
              : "The link may be wrong, or the project was removed."}
          </p>

          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
            >
              ← {isFa ? "بازگشت به پروژه‌ها" : "Back to projects"}
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  const title = pickLang(project.title, lang) || "Untitled";
  const summary = pickLang(project.summary, lang);
  const image = project.image || "/assets/placeholder.svg";

  return (
    <motion.section
      className={`w-full min-h-screen px-6 md:px-10 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
          >
            ← {isFa ? "بازگشت" : "Back"}
          </Link>

          <div className="flex items-center gap-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
              >
                {isFa ? "ریپو (GitHub) ↗" : "Repo (GitHub) ↗"}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
              >
                {isFa ? "دمو ↗" : "Live demo ↗"}
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {title}
            </h1>

            {summary && (
              <p className="mt-3 text-base md:text-lg text-white/80 leading-relaxed">
                {summary}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.period && (
                <span className="text-xs rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  {isFa ? "بازه: " : "Period: "}
                  {project.period}
                </span>
              )}
              {(project.stack || []).map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full border border-white/15 bg-white/10 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {(project.problem || project.solution || project.highlights) && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-lg">
                  {isFa ? "مسئله" : "Problem"}
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {pickLang(project.problem, lang)}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-lg">
                  {isFa ? "راه‌حل" : "Solution"}
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {pickLang(project.solution, lang)}
                </p>
              </div>
            )}

            {project.highlights?.length ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
                <h3 className="font-bold text-lg">
                  {isFa ? "نکات کلیدی" : "Highlights"}
                </h3>
                <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80 list-disc list-inside">
                  {project.highlights.map((h, idx) => (
                    <li key={idx}>{pickLang(h, lang) || h}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </motion.section>
  );
}
