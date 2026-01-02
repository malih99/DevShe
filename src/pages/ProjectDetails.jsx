import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers3,
  ClipboardList,
  Image as ImageIcon,
} from "lucide-react";

import projects from "../data/projectsData";
import Seo from "../components/Seo";
import { getText, getArray, normalizeLang } from "../i18n/i18n";

function hasValue(v) {
  return typeof v === "string" ? v.trim().length > 0 : !!v;
}

function cn(...x) {
  return x.filter(Boolean).join(" ");
}

function CardShell({ children, className = "" }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-black/10 dark:border-white/10",
        "bg-white/70 dark:bg-white/5 backdrop-blur",
        "shadow-[0_20px_60px_-45px_rgba(0,0,0,0.75)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function Badge({ children, tone = "neutral" }) {
  const tones = {
    neutral:
      "border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-slate-700 dark:text-white/70",
    primary:
      "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200",
    success:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200",
  };

  return (
    <span
      className={cn(
        "text-[11px] px-2.5 py-1 rounded-full border whitespace-nowrap",
        tones[tone] || tones.neutral
      )}
    >
      {children}
    </span>
  );
}

function ActionButton({ href, icon, label, disabled, subtle = false, isFa }) {
  const base = cn(
    "inline-flex items-center justify-center gap-2",
    "px-4 py-2.5 rounded-2xl text-sm font-semibold transition",
    "border border-black/10 dark:border-white/10",
    subtle
      ? "bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10"
      : "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-95 border-transparent"
  );

  if (disabled) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-between gap-2",
          "px-4 py-2.5 rounded-2xl text-sm",
          "border border-black/10 dark:border-white/10",
          "bg-black/[0.03] dark:bg-white/5 text-slate-500 dark:text-white/45"
        )}
      >
        <span className="inline-flex items-center gap-2">
          {icon}
          {label}
        </span>
        <span className="opacity-60">{isFa ? "—" : "—"}</span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={base}>
      {icon}
      {label}
      <span className="opacity-75">{isFa ? "↖" : "↗"}</span>
    </a>
  );
}

function InfoCard({ title, icon, text }) {
  if (!text) return null;
  return (
    <CardShell className="p-6">
      <div className="flex items-center gap-2">
        <span className="opacity-80">{icon}</span>
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-sm md:text-[15px] text-slate-600 dark:text-white/70 leading-7">
        {text}
      </p>
    </CardShell>
  );
}

function ListCard({ title, icon, items }) {
  if (!items?.length) return null;
  return (
    <CardShell className="p-6">
      <div className="flex items-center gap-2">
        <span className="opacity-80">{icon}</span>
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <ul className="mt-4 space-y-2.5">
        {items.map((x, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400/70 dark:bg-white/35 shrink-0" />
            <span className="text-sm md:text-[15px] text-slate-600 dark:text-white/70 leading-7">
              {x}
            </span>
          </li>
        ))}
      </ul>
    </CardShell>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();

  const lang = normalizeLang(i18n.language);
  const isFa = lang === "fa";

  const project = useMemo(
    () => projects.find((x) => (x.slug || x.id) === slug),
    [slug]
  );

  // Lightbox for screenshots
  const [lightbox, setLightbox] = useState(null);

  if (!project) {
    return (
      <>
        <Seo
          title={t("seo_project_not_found_title")}
          description={t("seo_project_not_found_desc")}
          noIndex
        />

        <motion.section
          dir={isFa ? "rtl" : "ltr"}
          className={cn(
            "min-h-screen px-6 md:px-10 py-12",
            "bg-slate-50 text-slate-900",
            "dark:bg-gradient-to-br dark:from-[#0c0f18] dark:via-[#1a1232] dark:to-[#241032] dark:text-white",
            isFa ? "text-right" : "text-left"
          )}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
        >
          <div className="max-w-4xl mx-auto">
            <CardShell className="p-8">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {t("project_not_found_title")}
              </h1>
              <p className="mt-2 text-slate-600 dark:text-white/70">
                {t("project_not_found_desc")}
              </p>

              <Link
                to="/projects"
                className={cn(
                  "inline-flex mt-6 items-center gap-2 px-4 py-2.5 rounded-2xl",
                  "border border-black/10 dark:border-white/10",
                  "bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition",
                  "text-slate-800 dark:text-white"
                )}
              >
                {isFa ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {t("project_back")}
              </Link>
            </CardShell>
          </div>
        </motion.section>
      </>
    );
  }

  const title = getText(project.title, lang) || "";
  const summary = getText(project.summary, lang) || "";
  const period = getText(project.period, lang) || "";
  const image = project.image || "/assets/placeholder.svg";

  const cs = project.caseStudy || {};
  const problem = getText(cs.problem, lang);
  const solution = getText(cs.solution, lang);
  const role = getText(cs.role, lang);
  const features = getArray(cs.features, lang);
  const results = getArray(cs.results, lang);
  const screenshots = Array.isArray(cs.screenshots) ? cs.screenshots : [];

  const seoTitle = `${title} | ${t("seo_site_name")}`;
  const seoDesc = summary || t("seo_projects_desc");
  const canonical = `/projects/${project.slug || project.id}`;

  const isInProgress =
    (lang === "fa" && period.includes("در حال")) ||
    (lang !== "fa" && period.toLowerCase().includes("progress"));

  const ui = {
    overview: isFa ? "نمای کلی" : "Overview",
    caseStudy: isFa ? "Case study" : "Case study",
    screenshots: t("project_screenshots"),
    quickLinks: t("project_links"),
    noDemo: t("project_no_demo"),
    noRepo: t("project_no_repo"),
  };

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDesc}
        image={image}
        canonical={canonical}
      />

      <motion.section
        dir={isFa ? "rtl" : "ltr"}
        className={cn(
          "min-h-screen px-6 md:px-10 py-12",
          "bg-slate-50 text-slate-900",
          "dark:bg-gradient-to-br dark:from-[#0c0f18] dark:via-[#1a1232] dark:to-[#241032] dark:text-white",
          isFa ? "text-right" : "text-left"
        )}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* glows */}
          <div className="pointer-events-none absolute -top-24 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/15" />
          <div className="pointer-events-none absolute top-12 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/projects"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl",
                "border border-black/10 dark:border-white/10",
                "bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition",
                "text-slate-800 dark:text-white"
              )}
            >
              {isFa ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {t("project_back")}
            </Link>

            <div className="flex items-center gap-2">
              <ActionButton
                href={project.demo}
                icon={<ExternalLink size={16} className="opacity-90" />}
                label={t("project_live_demo")}
                disabled={!hasValue(project.demo)}
                subtle
                isFa={isFa}
              />
              <ActionButton
                href={project.repo}
                icon={<Github size={16} className="opacity-90" />}
                label={t("project_source_code")}
                disabled={!hasValue(project.repo)}
                subtle
                isFa={isFa}
              />
            </div>
          </div>

          {/* Hero + Sidebar */}
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-6">
            {/* Main hero */}
            <CardShell className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "h-14 w-14 rounded-2xl grid place-items-center",
                    "bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10"
                  )}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 dark:text-white">
                      {title}
                    </h1>

                    <div className="flex items-center gap-2">
                      {period ? (
                        <Badge tone={isInProgress ? "primary" : "neutral"}>
                          {period}
                        </Badge>
                      ) : null}
                      <Badge tone="success">{ui.overview}</Badge>
                    </div>
                  </div>

                  {summary ? (
                    <p className="mt-4 text-sm md:text-[15px] text-slate-600 dark:text-white/70 leading-7">
                      {summary}
                    </p>
                  ) : null}

                  {!!(project.stack || []).length && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(project.stack || []).map((tech) => (
                        <Badge key={tech} tone="neutral">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardShell>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              <CardShell className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {ui.quickLinks}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-white/55">
                    {ui.caseStudy}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <ActionButton
                    href={project.demo}
                    icon={<ExternalLink size={16} className="opacity-85" />}
                    label={t("project_live_demo")}
                    disabled={!hasValue(project.demo)}
                    subtle
                    isFa={isFa}
                  />
                  <ActionButton
                    href={project.repo}
                    icon={<Github size={16} className="opacity-85" />}
                    label={t("project_source_code")}
                    disabled={!hasValue(project.repo)}
                    subtle
                    isFa={isFa}
                  />
                </div>

                {role ? (
                  <>
                    <div className="mt-6 flex items-center gap-2">
                      <Sparkles size={16} className="opacity-80" />
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {t("project_role")}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70 leading-7">
                      {role}
                    </p>
                  </>
                ) : null}
              </CardShell>

              {/* Quick glance card */}
              <CardShell className="p-6">
                <div className="flex items-center gap-2">
                  <Layers3 size={16} className="opacity-80" />
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {isFa ? "جمع‌بندی سریع" : "Quick glance"}
                  </h3>
                </div>

                <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-white/70">
                  <div className="flex items-center justify-between gap-3">
                    <span>{isFa ? "وضعیت" : "Status"}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {isInProgress
                        ? isFa
                          ? "در حال توسعه"
                          : "In progress"
                        : isFa
                        ? "تکمیل‌شده"
                        : "Completed"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>{isFa ? "تکنولوژی‌ها" : "Tech"}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {(project.stack || []).length || 0}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>{isFa ? "اسکرین‌شات" : "Screenshots"}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {screenshots.length}
                    </span>
                  </div>
                </div>
              </CardShell>
            </div>
          </div>

          {/* Case Study */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InfoCard
              title={t("project_problem")}
              icon={<ClipboardList size={18} />}
              text={problem}
            />
            <InfoCard
              title={t("project_solution")}
              icon={<Sparkles size={18} />}
              text={solution}
            />
            <ListCard
              title={t("project_features")}
              icon={<Layers3 size={18} />}
              items={features}
            />
            <ListCard
              title={t("project_results")}
              icon={<Sparkles size={18} />}
              items={results}
            />
          </div>

          {/* Screenshots */}
          {screenshots.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ImageIcon size={18} className="opacity-80" />
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {ui.screenshots}
                  </h3>
                </div>
                <span className="text-xs text-slate-500 dark:text-white/55">
                  {isFa ? "برای بزرگ‌نمایی کلیک کنید" : "Click to preview"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {screenshots.map((s, idx) => {
                  const alt = getText(s?.alt, lang) || title;
                  const caption = getText(s?.caption, lang);

                  return (
                    <button
                      key={`${s?.src || "shot"}-${idx}`}
                      type="button"
                      onClick={() => setLightbox({ src: s.src, alt, caption })}
                      className={cn(
                        "text-left rounded-3xl overflow-hidden",
                        "border border-black/10 dark:border-white/10",
                        "bg-white/70 dark:bg-white/5 backdrop-blur",
                        "hover:translate-y-[-1px] transition"
                      )}
                    >
                      <img
                        src={s.src}
                        alt={alt}
                        className="w-full h-44 object-cover"
                        loading="lazy"
                      />
                      {caption ? (
                        <div className="px-4 py-3 text-sm text-slate-600 dark:text-white/70">
                          {caption}
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightbox?.src && (
          <div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
            role="presentation"
          >
            <div
              className="max-w-5xl mx-auto mt-10"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <CardShell className="overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {lightbox.caption || lightbox.alt}
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightbox(null)}
                    className="h-9 w-9 rounded-xl grid place-items-center border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full max-h-[75vh] object-contain bg-black/[0.02] dark:bg-white/5"
                />
              </CardShell>
            </div>
          </div>
        )}
      </motion.section>
    </>
  );
}
