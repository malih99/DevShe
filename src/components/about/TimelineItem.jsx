export default function TimelineItem({ title, date, bullets = [] }) {
  return (
    <div className="relative pl-4">
      <div className="absolute -start-2 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <ul className="mt-2 list-disc ps-5 text-sm text-gray-300 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
