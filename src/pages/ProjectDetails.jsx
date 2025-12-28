import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import projects from "../data/projectsData";
import Seo from "../components/Seo";
import { getText, getArray, normalizeLang } from "../i18n/i18n";

export default function ProjectDetails() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();

  const lang = normalizeLang(i18n.language);
  const isFa = lang === "fa";

  const project = useMemo(
    () => projects.find((x) => (x.slug || x.id) === slug),
    [slug]
  );

  if (!project) {
    return (
      <>
        <Seo
          title={t("seo_project_not_found_title")}
          description={t("seo_project_not_found_desc")}
          noIndex
        />

        <section
          className="min-h-screen px-6 md:px-10 py-14 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
          dir={isFa ? "rtl" : "ltr"}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-extrabold">
              {t("project_not_found_title")}
            </h1>
            <p className="mt-2 text-white/70">{t("project_not_found_desc")}</p>
            <Link
              to="/projects"
              className="inline-flex mt-6 items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
            >
              {isFa ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {t("project_back")}
            </Link>
          </div>
        </section>
      </>
    );
  }

  const title = getText(project.title, lang);
  const summary = getText(project.summary, lang);
  const period = getText(project.period, lang);
  const image = project.image || "/assets/placeholder.svg";

  const cs = project.caseStudy || {};
  const problem = getText(cs.problem, lang);
  const solution = getText(cs.solution, lang);
  const role = getText(cs.role, lang);
  const features = getArray(cs.features, lang);
  const results = getArray(cs.results, lang);

  const screenshots = Array.isArray(cs.screenshots) ? cs.screenshots : [];

  // SEO title/desc per project
  const seoTitle = `${title} | ${t("seo_site_name")}`;
  const seoDesc = summary || t("seo_projects_desc");

  return (
    <>
      <Seo title={seoTitle} description={seoDesc} image={image} />

      <section
        className="min-h-screen px-6 md:px-10 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
        dir={isFa ? "rtl" : "ltr"}
      >
        <div className="max-w-6xl mx-auto">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
            >
              {isFa ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {t("project_back")}
            </Link>

            <div className="flex items-center gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                >
                  <ExternalLink size={16} className="opacity-80" />
                  {t("project_live_demo")}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                >
                  <Github size={16} className="opacity-80" />
                  {t("project_source_code")}
                </a>
              )}
            </div>
          </div>

          {/* Hero */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)]">
              <div className="flex items-start gap-4">
                <img
                  src={image}
                  alt={title}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 p-2"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                    {title}
                  </h1>
                  {period && (
                    <p className="mt-1 text-sm text-white/60">{period}</p>
                  )}
                  {summary && (
                    <p className="mt-4 text-white/75 leading-7">{summary}</p>
                  )}
                </div>
              </div>

              {/* Stack chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {(project.stack || []).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-2xl text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky side summary */}
            <aside className="lg:sticky lg:top-24 h-fit rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold text-white/90">
                {t("project_links")}
              </h3>

              <div className="mt-3 space-y-2">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink size={16} className="opacity-80" />
                      {t("project_live_demo")}
                    </span>
                    <span className="text-white/60">↗</span>
                  </a>
                ) : (
                  <div className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 text-sm">
                    {t("project_no_demo")}
                  </div>
                )}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github size={16} className="opacity-80" />
                      {t("project_source_code")}
                    </span>
                    <span className="text-white/60">↗</span>
                  </a>
                ) : (
                  <div className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 text-sm">
                    {t("project_no_repo")}
                  </div>
                )}
              </div>

              {role && (
                <>
                  <h3 className="mt-6 text-sm font-semibold text-white/90">
                    {t("project_role")}
                  </h3>
                  <p className="mt-2 text-sm text-white/75 leading-6">{role}</p>
                </>
              )}
            </aside>
          </div>

          {/* Case study sections */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Section title={t("project_problem")} text={problem} />
            <Section title={t("project_solution")} text={solution} />
            <ListSection title={t("project_features")} items={features} />
            <ListSection title={t("project_results")} items={results} />
          </div>

          {/* Screenshots */}
          {screenshots.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-bold">{t("project_screenshots")}</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {screenshots.map((s, idx) => {
                  const alt = getText(s?.alt, lang) || title;
                  const caption = getText(s?.caption, lang);
                  return (
                    <figure
                      key={`${s?.src || "shot"}-${idx}`}
                      className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
                    >
                      <img
                        src={s.src}
                        alt={alt}
                        className="w-full h-44 object-cover"
                        loading="lazy"
                      />
                      {caption ? (
                        <figcaption className="px-4 py-3 text-sm text-white/70">
                          {caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Section({ title, text }) {
  if (!text) return null;
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-white/75 leading-7">{text}</p>
    </div>
  );
}

function ListSection({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((x, i) => (
          <li key={i} className="text-white/75 leading-7 flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
