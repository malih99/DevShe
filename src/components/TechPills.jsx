import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TechPills({
  items = [],
  collapsible = true,
  initialCount = 10,
}) {
  const { i18n, t } = useTranslation();
  const isFa = (i18n.language || "en").toLowerCase().startsWith("fa");
  const [showAll, setShowAll] = useState(false);

  const visible = useMemo(() => {
    if (!collapsible) return items;
    return showAll ? items : items.slice(0, initialCount);
  }, [items, showAll, collapsible, initialCount]);

  if (!items?.length) return null;

  return (
    <section dir={isFa ? "rtl" : "ltr"} className="mt-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white/90">
          {t("skills_tools_title")}
        </h2>

        {collapsible && items.length > initialCount && (
          <button
            type="button"
            className="text-sm text-indigo-600 dark:text-blue-300 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded"
            onClick={() => setShowAll((s) => !s)}
          >
            {showAll ? t("common_show_less") : t("common_show_more")}
          </button>
        )}
      </div>

      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {visible.map((x) => (
          <span
            key={x}
            className={[
              "text-xs md:text-sm px-2.5 py-1 rounded-full",
              "bg-white/75 dark:bg-white/5",
              "border border-black/10 dark:border-white/10",
              "text-slate-800 dark:text-white/80",
              "hover:bg-white dark:hover:bg-white/10 transition select-none",
            ].join(" ")}
          >
            {x}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
