import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  items = [],
  lang = "fa",
  emptyText = "چیزی پیدا نشد.",
}) {
  if (!items.length) {
    return <p className="mt-10 text-center text-gray-400">{emptyText}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((p) => (
        <ProjectCard key={p.id} item={p} lang={lang} />
      ))}
    </div>
  );
}
