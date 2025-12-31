import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  items = [],
  lang = "en",
  emptyText,
  onClear,
}) {
  const isFa = lang === "fa";

  if (!items.length) {
    return (
      <div
        className={[
          "mt-10 rounded-3xl p-8 text-center",
          "border border-black/10 dark:border-white/10",
          "bg-white/70 dark:bg-white/5 backdrop-blur",
        ].join(" ")}
      >
        <p className="text-sm text-slate-600 dark:text-white/60">{emptyText}</p>

        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-95 transition"
          >
            {isFa ? "نمایش همه پروژه‌ها" : "Show all projects"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
      {items.map((p) => (
        <ProjectCard key={p.id} item={p} lang={lang} />
      ))}
    </div>
  );
}
