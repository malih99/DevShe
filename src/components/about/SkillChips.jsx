export default function SkillChips({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((c) => (
        <span
          key={c}
          className="text-xs md:text-[13px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
