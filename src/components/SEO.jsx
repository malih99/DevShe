import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertLink(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

export default function SEO({
  title,
  description,
  image,
  url,
  noIndex = false,
}) {
  useEffect(() => {
    const safeTitle = title || "DevShe";
    const safeDesc = description || "";
    const safeUrl = url || window.location.href;

    document.title = safeTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: safeDesc,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: safeTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: safeDesc,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: safeUrl,
    });

    if (image) {
      const absoluteImage = image.startsWith("http")
        ? image
        : `${window.location.origin}${
            image.startsWith("/") ? "" : "/"
          }${image}`;

      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: absoluteImage,
      });
      upsertMeta('meta[name="twitter:card"]', {
        name: "twitter:card",
        content: "summary_large_image",
      });
      upsertMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: absoluteImage,
      });
    } else {
      upsertMeta('meta[name="twitter:card"]', {
        name: "twitter:card",
        content: "summary",
      });
    }

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: safeTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: safeDesc,
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: safeUrl,
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    });
  }, [title, description, image, url, noIndex]);

  return null;
}
