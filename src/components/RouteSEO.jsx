import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";
import projects from "../data/projectsData";

export default function RouteSEO() {
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en";

  const meta = useMemo(() => {
    const origin = window.location.origin;
    const url = `${origin}${pathname}`;

    // defaults
    let title = t("seo_default_title");
    let description = t("seo_default_desc");
    let image = "/assets/placeholder.svg";

    if (pathname === "/") {
      title = t("seo_home_title");
      description = t("seo_home_desc");
    } else if (pathname === "/about") {
      title = t("seo_about_title");
      description = t("seo_about_desc");
    } else if (pathname === "/projects") {
      title = t("seo_projects_title");
      description = t("seo_projects_desc");
    } else if (pathname === "/contact") {
      title = t("seo_contact_title");
      description = t("seo_contact_desc");
    } else if (pathname === "/resume") {
      title = t("seo_resume_title");
      description = t("seo_resume_desc");
    } else if (pathname.startsWith("/projects/")) {
      const slug = pathname.replace("/projects/", "");
      const p = projects.find((x) => (x.slug || x.id) === slug);

      if (p) {
        const pt = p.title?.[lang] || p.title?.en || p.title?.fa || "Project";
        const ps = p.summary?.[lang] || p.summary?.en || p.summary?.fa || "";

        title = `${pt} | ${t("seo_site_name")}`;
        description = ps || description;
        image = p.image || image;
      } else {
        title = t("seo_project_not_found_title");
        description = t("seo_project_not_found_desc");
      }
    }

    return { title, description, image, url };
  }, [pathname, lang, t]);

  return <SEO {...meta} />;
}
