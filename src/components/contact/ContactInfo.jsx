export default function ContactInfo({ icon, title, value, link }) {
  return (
    <div
      className={[
        "flex items-start gap-3 rounded-2xl p-3",
        "border border-black/10 dark:border-white/10",
        "bg-white/60 dark:bg-white/5",
      ].join(" ")}
    >
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black/[0.04] dark:bg-white/10 text-slate-700 dark:text-white/80">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900 dark:text-white/90">
          {title}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 block text-sm text-indigo-700 hover:underline break-all dark:text-blue-300"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
