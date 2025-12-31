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

function getAbsoluteUrlMaybe(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    return u.toString();
  } catch {
    if (typeof window === "undefined") return url;
    try {
      return new URL(url, window.location.origin).toString();
    } catch {
      return url;
    }
  }
}

function upsertCanonical(href) {
  if (typeof document === "undefined") return;

  const selector = `link[rel="canonical"][data-managed="true"]`;
  let link = document.querySelector(selector);

  if (!href) {
    if (link) link.remove();
    return;
  }

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("data-managed", "true");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  canonical,
  image,
  noIndex = false,
}) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const siteName = t("seo_site_name");
    const finalTitle = title || t("seo_default_title");
    const finalDesc = description || t("seo_default_desc");

    const lang = (i18n.language || "en").toLowerCase().startsWith("fa")
      ? "fa"
      : "en";
    const ogLocale = lang === "fa" ? "fa_IR" : "en_US";

    const pageUrl =
      typeof window !== "undefined" ? window.location.href : undefined;

    document.title = finalTitle;

    // Basic
    upsertMeta("description", finalDesc);

    // Robots
    upsertMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

    // OpenGraph
    upsertProperty("og:site_name", siteName);
    upsertProperty("og:title", finalTitle);
    upsertProperty("og:description", finalDesc);
    upsertProperty("og:type", "website");
    upsertProperty("og:locale", ogLocale);
    if (pageUrl) upsertProperty("og:url", pageUrl);

    // Twitter
    upsertMeta("twitter:card", "summary");
    upsertMeta("twitter:title", finalTitle);
    upsertMeta("twitter:description", finalDesc);

    // Image
    const absImg = getAbsoluteUrlMaybe(image);
    if (absImg) {
      upsertProperty("og:image", absImg);
      upsertMeta("twitter:image", absImg);
      upsertMeta("twitter:card", "summary_large_image");
    }

    // Canonical: default to current URL if not provided (SPA-friendly)
    const absCanonical = getAbsoluteUrlMaybe(canonical);
    const finalCanonical = absCanonical || pageUrl || "";
    upsertCanonical(finalCanonical);
  }, [title, description, canonical, image, noIndex, t, i18n.language]);

  return null;
}
