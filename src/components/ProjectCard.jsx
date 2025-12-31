import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { getText } from "../i18n/i18n";

function safeText(x) {
  return String(x || "").trim();
}

export default function ProjectCard({ item, lang = "en" }) {
  const isFa = lang === "fa";

  const title = useMemo(() => getText(item?.title, lang) || "", [item, lang]);
  const summary = useMemo(
    () => getText(item?.summary, lang) || "",
    [item, lang]
  );
  const period = useMemo(() => getText(item?.period, lang) || "", [item, lang]);

  const [imgError, setImgError] = useState(false);
  const imageSrc =
    !imgError && item?.image ? item.image : "/assets/placeholder.svg";

  const hasDemo = !!safeText(item?.demo);
  const hasRepo = !!safeText(item?.repo);

  return (
    <motion.article
      className={[
        "group rounded-3xl overflow-hidden",
        "border border-black/10 dark:border-white/10",
        "bg-white/70 dark:bg-white/5 backdrop-blur",
        "shadow-[0_20px_60px_-45px_rgba(0,0,0,0.75)]",
        "hover:translate-y-[-2px] transition",
      ].join(" ")}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* top visual */}
      <div className="relative p-5">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl grid place-items-center bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10">
            <img
              src={imageSrc}
              alt={title}
              className="w-7 h-7"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white truncate">
                {title}
              </h3>

              {period ? (
                <span className="shrink-0 text-[11px] px-2 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-slate-700 dark:text-white/70">
                  {period}
                </span>
              ) : null}
            </div>

            {summary ? (
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65 leading-relaxed line-clamp-3">
                {summary}
              </p>
            ) : null}
          </div>
        </div>

        {/* subtle glow */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* stack */}
      <div className="px-5">
        {!!(item?.stack || []).length && (
          <div className="flex flex-wrap gap-2 pb-4">
            {(item.stack || []).slice(0, 8).map((b) => (
              <span
                key={b}
                className="text-[11px] px-2 py-1 rounded-full bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-white/70"
              >
                {b}
              </span>
            ))}
            {(item.stack || []).length > 8 && (
              <span className="text-[11px] px-2 py-1 rounded-full border border-black/10 dark:border-white/10 text-slate-600 dark:text-white/60">
                +{(item.stack || []).length - 8}
              </span>
            )}
          </div>
        )}
      </div>

      {/* footer actions */}
      <div className="px-5 pb-5 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
        <Link
          to={`/projects/${item.slug || item.id}`}
          className="text-sm font-semibold text-indigo-600 dark:text-blue-300 hover:underline"
        >
          {isFa ? "جزئیات پروژه" : "View details"}
        </Link>

        <div className="flex items-center gap-2">
          {hasDemo && (
            <a
              href={item.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
            >
              <ExternalLink size={16} className="opacity-80" />
              {isFa ? "دمو" : "Demo"}
            </a>
          )}

          {hasRepo && (
            <a
              href={item.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
            >
              <Github size={16} className="opacity-80" />
              {isFa ? "سورس" : "Code"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
