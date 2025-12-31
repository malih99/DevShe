import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CardTeaser({
  to = "/projects",
  img,
  title,
  subtitle,
  badges = [],
}) {
  return (
    <motion.article
      className={[
        "rounded-3xl p-6",
        "border border-black/10 dark:border-white/10",
        "bg-white/70 dark:bg-white/5 backdrop-blur",
        "shadow-[0_20px_60px_-45px_rgba(0,0,0,0.7)]",
        "hover:translate-y-[-2px] transition",
        "focus-within:ring-2 focus-within:ring-indigo-500/60",
      ].join(" ")}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-start gap-4">
        {img && (
          <div className="h-12 w-12 rounded-2xl grid place-items-center bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10">
            <img src={img} alt={title} className="w-7 h-7" loading="lazy" />
          </div>
        )}

        <div className="min-w-0">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h4>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
              {subtitle}
            </p>
          )}

          {!!badges.length && (
            <div className="flex flex-wrap gap-2 mt-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-[11px] px-2 py-1 rounded-full bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-white/70"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link
        to={to}
        className="mt-5 inline-flex text-sm font-semibold text-indigo-600 dark:text-blue-300 hover:underline"
        aria-label={`${title} details`}
      >
        Explore →
      </Link>
    </motion.article>
  );
}
