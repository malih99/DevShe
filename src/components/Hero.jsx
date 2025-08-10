import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  cta, // { href: "/resume", label: "Resume" }
  secondaryCta, // اختیاری: { href: "/projects", label: "Projects" }
  avatar, // اختیاری: "/assets/avatar.png"
}) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <section
      className={`${isFa ? "text-right" : "text-left"}`}
      dir={isFa ? "rtl" : "ltr"}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* متن */}
        <motion.div
          className="max-w-2xl"
          initial={{ x: isFa ? 40 : -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              {title}
            </span>
          </h1>

          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}

          <div
            className={`mt-6 flex flex-wrap gap-3 ${
              isFa ? "justify-end" : "justify-start"
            }`}
          >
            {cta && (
              <Link
                to={cta.href}
                className="px-5 py-2 rounded-xl font-medium shadow-lg
                           bg-gradient-to-r from-purple-600 to-blue-500
                           hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label={cta.label}
              >
                {cta.label}
              </Link>
            )}

            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="px-5 py-2 rounded-xl font-medium border border-white/20 bg-white/5
                           hover:bg-white/10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label={secondaryCta.label}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>

        {/* آواتار/تصویر فیچر */}
        {avatar && (
          <motion.div
            className="w-full max-w-xs bg-[#1f1d2c] p-5 rounded-2xl shadow-lg
                       hover:shadow-purple-700/30 transition duration-300"
            initial={{ x: isFa ? -40 : 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={avatar}
              alt="Hero Illustration"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
