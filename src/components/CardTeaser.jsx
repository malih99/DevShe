import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CardTeaser({
  to = "/projects",
  img,
  title,
  subtitle,
  badges = [],
}) {
  return (
    <motion.article
      className="bg-[#1f1d2c] p-6 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-blue-600/30 transition duration-300 focus-within:ring-2 focus-within:ring-blue-500"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {img && (
        <img src={img} alt={title} className="w-16 h-16 mb-4" loading="lazy" />
      )}
      <h4 className="text-lg font-semibold">{title}</h4>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}

      {!!badges.length && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {badges.map((b) => (
            <span
              key={b}
              className="text-[11px] bg-white/10 border border-white/10 px-2 py-1 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <Link
        to={to}
        className="mt-4 text-sm text-blue-300 hover:underline"
        aria-label={`${title} details`}
      >
        Explore →
      </Link>
    </motion.article>
  );
}
