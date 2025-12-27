import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TechPills({
  items = [],
  collapsible = true,
  initialCount = 10,
}) {
  const { i18n, t } = useTranslation();
  const isFa = i18n.language === "fa";
  const [showAll, setShowAll] = useState(false);

  const visible = useMemo(() => {
    if (!collapsible) return items;
    return showAll ? items : items.slice(0, initialCount);
  }, [items, showAll, collapsible, initialCount]);

  if (!items?.length) return null;

  return (
    <section dir={isFa ? "rtl" : "ltr"}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold opacity-90">
          {t("skills_tools_title")}
        </h2>

        {collapsible && items.length > initialCount && (
          <button
            className="text-sm text-blue-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            onClick={() => setShowAll((s) => !s)}
          >
            {showAll ? t("common_show_less") : t("common_show_more")}
          </button>
        )}
      </div>

      <motion.div
        className="flex flex-wrap gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {visible.map((x) => (
          <span
            key={x}
            className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition select-none"
          >
            {x}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
