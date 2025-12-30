import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

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
          <h1 className="text-3xl font-extrabold">
            {isFa ? "صفحه پیدا نشد" : "Page Not Found"}
          </h1>
          <p className="mt-2 text-white/70">
            {isFa ? "این آدرس وجود ندارد." : "This route does not exist."}
          </p>

          <Link
            to="/"
            className="inline-flex mt-6 items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
          >
            {isFa ? "بازگشتsشت به خانه" : "Back to Home"}
          </Link>
        </div>
      </section>
    </>
  );
}
