import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function upsertMeta(name, content) {
  if (typeof document === "undefined") return;
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"][data-managed="true"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    tag.setAttribute("data-managed", "true");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertProperty(property, content) {
  if (typeof document === "undefined") return;
  if (!content) return;

  let tag = document.querySelector(
    `meta[property="${property}"][data-managed="true"]`
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    tag.setAttribute("data-managed", "true");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  canonical, // optional
  noIndex = false,
}) {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const siteName = t("seo_site_name");
    const finalTitle = title || t("seo_default_title");
    const finalDesc = description || t("seo_default_desc");

    document.title = finalTitle;

    upsertMeta("description", finalDesc);

    // Robots
    upsertMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

    // OpenGraph (basic)
    upsertProperty("og:site_name", siteName);
    upsertProperty("og:title", finalTitle);
    upsertProperty("og:description", finalDesc);
    upsertProperty("og:type", "website");

    // Twitter (basic)
    upsertMeta("twitter:card", "summary");
    upsertMeta("twitter:title", finalTitle);
    upsertMeta("twitter:description", finalDesc);

    // Canonical (optional)
    if (canonical) {
      let link = document.querySelector(
        `link[rel="canonical"][data-managed="true"]`
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.setAttribute("data-managed", "true");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical, noIndex, t]);

  return null;
}
