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
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm text-gray-200">
        {label}
      </label>
      <div
        className={`flex items-center gap-2 rounded-xl px-3 py-2 bg-[#161522]/90 border transition
        ${
          error
            ? "border-red-500/60 focus-within:ring-red-500/30"
            : "border-white/10 focus-within:border-purple-500/70"
        }
        focus-within:ring-2 focus-within:ring-purple-500/30`}
      >
        <span
          className={`shrink-0 ${error ? "text-red-400" : "text-gray-300"}`}
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
          className="w-full bg-transparent outline-none text-sm placeholder-gray-400 py-1.5"
        />
      </div>
      {helper && !error && (
        <p className="text-[11px] text-gray-400">{helper}</p>
      )}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
