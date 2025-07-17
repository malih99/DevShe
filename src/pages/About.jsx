// pages/About.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <motion.div
      className={`w-full h-screen px-8 py-12 flex flex-col justify-center bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-8">{t("about_title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>{t("about_intro_1")}</p>
          <p>{t("about_intro_2")}</p>
          <p>{t("about_intro_3")}</p>
        </div>

        <div className="bg-[#1f1d2c] p-6 rounded-xl shadow-lg space-y-3">
          <div>
            <strong className="block text-sm text-gray-400">
              {t("about_email")}
            </strong>
            <p className="text-white">maliheasadi99@gmail.com</p>
          </div>
          <div>
            <strong className="block text-sm text-gray-400">
              {t("about_github")}
            </strong>
            <a
              href="https://github.com/malih99"
              className="text-blue-400 hover:underline"
            >
              github.com/malih99
            </a>
          </div>
          <div>
            <strong className="block text-sm text-gray-400">
              {t("about_location")}
            </strong>
            <p className="text-white">{t("about_location_value")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
