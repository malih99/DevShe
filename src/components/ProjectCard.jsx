import { Link } from "react-router-dom";

export default function ProjectCard({ item, lang = "fa" }) {
  const title =
    item.title?.[lang] || item.title?.fa || item.title?.en || "Untitled";
  const summary =
    item.summary?.[lang] || item.summary?.fa || item.summary?.en || "";
  const image = item.image || "/assets/placeholder.svg";

  return (
    <article
      className="rounded-2xl p-6 bg-[#1f1d2c] border border-white/10 hover:shadow-xl transition flex flex-col"
      tabIndex={0}
    >
      <Link
        to={`/projects/${item.slug || item.id}`}
        className="group focus:outline-none"
      >
        <img
          src={image}
          alt={title}
          className="w-16 h-16 mb-4 mx-auto group-hover:scale-105 transition"
          loading="lazy"
        />
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        {summary && (
          <p className="text-sm text-gray-300 mt-2 text-center">{summary}</p>
        )}
      </Link>

      <div className="flex flex-wrap gap-2 mt-4">
        {(item.stack || []).map((tech) => (
          <span
            key={tech}
            className="text-xs bg-purple-800/30 px-2 py-1 rounded-md text-purple-300"
          >
            {tech}
          </span>
        ))}

        {item.period && (
          <span className="ml-auto text-xs bg-white/10 px-2 py-1 rounded-md text-gray-200">
            {item.period}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        {item.demo && (
          <a
            className="text-blue-400 text-sm hover:underline"
            href={item.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo ↗
          </a>
        )}
        {item.repo && (
          <a
            className="text-blue-400 text-sm hover:underline"
            href={item.repo}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}
