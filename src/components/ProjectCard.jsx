import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github } from "lucide-react";
import { getText } from "../i18n/i18n";

export default function ProjectCard({ item, lang = "en" }) {
  const { t } = useTranslation();

  const title = getText(item.title, lang) || "Untitled";
  const summary = getText(item.summary, lang) || "";
  const period = getText(item.period, lang) || "";
  const image = item.image || "/assets/placeholder.svg";

  return (
    <article className="rounded-3xl p-6 bg-white/5 border border-white/10 hover:bg-white/7 hover:shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)] transition flex flex-col">
      <Link to={`/projects/${item.slug || item.id}`} className="group">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 mb-4 mx-auto group-hover:scale-105 transition"
          loading="lazy"
        />

        <h3 className="text-lg font-semibold text-center">{title}</h3>

        {summary && (
          <p className="text-sm text-white/70 mt-2 text-center leading-6">
            {summary}
          </p>
        )}
      </Link>

      {/* Stack + Period */}
      <div className="flex flex-wrap gap-2 mt-5 items-center">
        {(item.stack || []).map((tech) => (
          <span
            key={tech}
            className="text-xs bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-2xl text-white/80"
          >
            {tech}
          </span>
        ))}

        {period && (
          <span className="ms-auto text-xs bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-2xl text-white/70">
            {period}
          </span>
        )}
      </div>

      {/* Links */}
      {(item.demo || item.repo) && (
        <div className="mt-5 flex items-center justify-center gap-3">
          {item.demo && (
            <a
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
              href={item.demo}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} className="opacity-80" />
              {t("project_live_demo")}
            </a>
          )}

          {item.repo && (
            <a
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
              href={item.repo}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} className="opacity-80" />
              {t("project_source_code")}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
