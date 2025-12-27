import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import TechPills from "../components/TechPills";
import CardTeaser from "../components/CardTeaser";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen w-screen px-6 md:px-10 py-10 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero
        title="Frontend Developer — React Focused"
        subtitle="I craft responsive, data-heavy UIs with clean architecture and smooth interactions."
        cta={{ href: "/resume", label: "Resume" }}
        secondaryCta={{ href: "/projects", label: "Projects" }}
        // avatar را اگر تصویر داری فعال کن:
        // avatar="/assets/dashboard-hero.png"
      />

      <TechPills
        items={[
          "React",
          "TailwindCSS",
          "Zustand",
          "React Query",
          "MUI",
          "TanStack Table",
          "Recharts",
          "Framer Motion",
          "Vite",
          "i18next",
        ]}
      />
      {/* Featured Work: DevDash (جای PathPilot) */}
      <section className="mt-14">
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12">
          {/* توضیح/CTA */}
          <motion.div
            className="max-w-xl space-y-5"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              DevShe — Admin Panel & Dashboard
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              A modular admin dashboard built with React and Tailwind. State is
              managed via Zustand & React Query; data grids with TanStack Table;
              charts with Recharts; UI components with MUI; animations powered
              by Framer Motion.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {[
                "React",
                "Tailwind",
                "Zustand",
                "React Query",
                "MUI",
                "TanStack Table",
                "Recharts",
                "Framer Motion",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 border border-white/10 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/projects"
                className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-medium shadow-lg hover:scale-105 transition duration-300"
              >
                See Projects
              </Link>
            </div>
          </motion.div>

          {/* کارت فیچر با Progress ساده */}
          <motion.div
            className="bg-[#1f1d2c] p-6 rounded-2xl w-full max-w-sm shadow-lg hover:shadow-purple-700/30 transition duration-300"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-1">DevShe</h3>
            <p className="text-sm text-gray-400">
              Admin Panel & Dashboard Components
            </p>

            <div className="mt-5 flex items-center gap-5">
              {/* Progress Ring */}
              <div className="relative w-20 h-20 shrink-0">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#60a5fa ${
                      72 * 3.6
                    }deg, #374151 0deg)`,
                  }}
                />
                <div className="absolute inset-2 rounded-full bg-[#1f1d2c] grid place-items-center">
                  <span className="text-white font-bold text-sm">72%</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm text-gray-400 font-medium">
                  Currently Building
                </div>
                <div className="text-lg font-semibold text-white">DevDash</div>
                <div className="text-xs text-gray-400">
                  React · Zustand · React Query · MUI · TanStack · Recharts
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-400">
              Modular tables, filters, charts & layout primitives for real-world
              dashboards.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro/Context متن کوتاه درباره‌ی DevDash */}
      <motion.p
        className="mt-10 text-gray-300 text-sm leading-relaxed max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        I’ve built data-heavy UIs in real projects (admin panels and digital
        restaurant UI). DevDash packages those patterns—robust tables, filters,
        and charts—into reusable pieces. It reflects my day-to-day stack and the
        way I structure production UIs.
      </motion.p>

      {/* Projects / Works teaser */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Projects / Works</h3>
          <Link
            to="/projects"
            className="text-sm text-blue-300 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardTeaser
            to="/projects/rah-restaurant-menu"
            img="/assets/menu-icon.svg"
            title="Digital Menu"
            subtitle="Restaurant UI System"
            badges={["HTML", "CSS", "JavaScript", "Responsive"]}
          />
          <CardTeaser
            to="/projects/devdash"
            img="/assets/dashboard.svg"
            title="DevDash"
            subtitle="Admin Panel & Dashboard"
            badges={[
              "React",
              "Tailwind",
              "Zustand",
              "React Query",
              "MUI",
              "TanStack",
              "Recharts",
            ]}
          />
        </div>
      </section>
    </motion.main>
  );
}
