export default function InputWithIcon({
  id,
  name,
  type = "text",
  label,
  placeholder,
  icon,
  value,
  onChange,
  onBlur,
  error,
  helper,
  autoComplete,
}) {
  const hasError = Boolean(error);

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-sm text-slate-700 dark:text-white/80"
      >
        {label}
      </label>

      <div
        className={[
          "flex items-center gap-2 rounded-2xl px-3 py-2",
          "border transition",
          "bg-white/80 dark:bg-[#0b1220]/50",
          hasError
            ? "border-red-500/50 focus-within:ring-red-500/25"
            : "border-black/10 dark:border-white/10 focus-within:border-indigo-500/60",
          "focus-within:ring-2 focus-within:ring-indigo-500/35",
        ].join(" ")}
      >
        <span
          className={[
            "shrink-0",
            hasError ? "text-red-500" : "text-slate-500 dark:text-white/60",
          ].join(" ")}
        >
          {icon}
        </span>

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={[
            "w-full bg-transparent outline-none text-sm py-1.5",
            "text-slate-900 dark:text-white",
            "placeholder:text-slate-400 dark:placeholder:text-white/35",
          ].join(" ")}
        />
      </div>

      {helper && !hasError && (
        <p className="text-[11px] text-slate-500 dark:text-white/55">
          {helper}
        </p>
      )}
      {hasError && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
