import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  cta,
  secondaryCta,
  right, // ReactNode (new)
  avatar, // string (legacy)
}) {
  const { i18n } = useTranslation();
  const isFa = (i18n.language || "en").toLowerCase().startsWith("fa");

  return (
    <section
      className={isFa ? "text-right" : "text-left"}
      dir={isFa ? "rtl" : "ltr"}
    >
      <div
        className={[
          "grid grid-cols-1 gap-8 items-center",
          "lg:grid-cols-2 lg:gap-10",
        ].join(" ")}
      >
        {/* Left */}
        <motion.div
          className="min-w-0"
          initial={{ x: isFa ? 40 : -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 dark:text-white/60">
            DevShe • Portfolio
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {title}
            </span>
          </h1>

          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          <div
            className={[
              "mt-7 flex flex-wrap gap-3",
              isFa ? "justify-end" : "justify-start",
            ].join(" ")}
          >
            {cta && (
              <Link
                to={cta.href}
                className={[
                  "inline-flex items-center justify-center",
                  "px-5 py-2.5 rounded-2xl font-semibold",
                  "bg-gradient-to-r from-purple-600 to-blue-500 text-white",
                  "shadow-[0_18px_45px_-30px_rgba(0,0,0,0.7)]",
                  "hover:translate-y-[-1px] hover:opacity-95 transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60",
                ].join(" ")}
                aria-label={cta.label}
              >
                {cta.label}
              </Link>
            )}

            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className={[
                  "inline-flex items-center justify-center",
                  "px-5 py-2.5 rounded-2xl font-semibold",
                  "border border-black/10 dark:border-white/15",
                  "bg-white/70 dark:bg-white/5",
                  "text-slate-900 dark:text-white",
                  "hover:bg-white dark:hover:bg-white/10 transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60",
                ].join(" ")}
                aria-label={secondaryCta.label}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          <div className="mt-6 text-xs text-slate-500 dark:text-white/55">
            {isFa
              ? "UIهای دیتاهِوی، جدول‌ها، فیلترها و داشبوردهای واقعی."
              : "Data-heavy UI, tables, filters, and dashboard patterns."}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className={[
            "min-w-0",
            isFa ? "lg:order-first" : "lg:order-last",
          ].join(" ")}
          initial={{ x: isFa ? -40 : 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {right ? (
            right
          ) : avatar ? (
            <div
              className={[
                "w-full rounded-3xl border",
                "border-black/10 dark:border-white/10",
                "bg-white/70 dark:bg-white/5",
                "backdrop-blur p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.75)]",
              ].join(" ")}
            >
              <img
                src={avatar}
                alt="Hero Illustration"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
