import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = (import.meta?.env?.VITE_SITE_URL || "").replace(/\/$/, "");

export default function Seo({ title, description, image, noIndex = false }) {
  const { pathname } = useLocation();

  const canonical = SITE_URL ? `${SITE_URL}${pathname}` : undefined;
  const img =
    image && SITE_URL && image.startsWith("/") ? `${SITE_URL}${image}` : image;

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}

      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* OpenGraph */}
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content="website" />
      {img ? <meta property="og:image" content={img} /> : null}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={img ? "summary_large_image" : "summary"}
      />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      {img ? <meta name="twitter:image" content={img} /> : null}

      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
    </Helmet>
  );
}
