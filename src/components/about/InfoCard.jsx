import { motion } from "framer-motion";
import Divider from "./Divider";

export default function InfoCard({
  isFa,
  name,
  role,
  emailLabel,
  githubLabel,
  locationLabel,
  locationValue,
}) {
  return (
    <motion.aside
      className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl space-y-5"
      initial={{ opacity: 0, x: isFa ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>

      <Divider />

      <InfoRow
        label={emailLabel}
        value="maliheasadi99@gmail.com"
        href="mailto:maliheasadi99@gmail.com"
      />
      <InfoRow
        label={githubLabel}
        value="github.com/malih99"
        href="https://github.com/malih99"
      />
      <InfoRow label={locationLabel} value={locationValue} />

      <Divider />

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/assets/resume.pdf"
          download
          className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-medium shadow-lg hover:opacity-95 transition"
        >
          {isFa ? "دانلود رزومه" : "Download Resume"}
        </a>
        <a
          href="/contact"
          className="flex-1 text-center px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
        >
          {isFa ? "ارتباط" : "Contact"}
        </a>
      </div>
    </motion.aside>
  );
}

function InfoRow({ label, value, href }) {
  return (
    <div>
      <strong className="block text-xs text-gray-400">{label}</strong>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  );
}
