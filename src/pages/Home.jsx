import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Seo from "../components/Seo";
import Hero from "../components/Hero";
import TechPills from "../components/TechPills";
import CardTeaser from "../components/CardTeaser";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t("seo_home_title")} description={t("seo_home_desc")} />

      <motion.main
        className="min-h-screen w-full px-6 md:px-10 py-10 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero
          title={t("hero_title")}
          subtitle={t("hero_subtitle")}
          cta={{ href: "/resume", label: t("hero_cta_resume") }}
          secondaryCta={{ href: "/projects", label: t("hero_cta_projects") }}
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

        {/* Featured */}
        <section className="mt-14">
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12">
            <motion.div
              className="max-w-xl space-y-5"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                {t("home_featured_title")}
              </h3>

              <p className="text-base text-gray-300 leading-relaxed">
                {t("home_featured_desc")}
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
                  {t("home_featured_cta")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#1f1d2c] p-6 rounded-2xl w-full max-w-sm shadow-lg hover:shadow-purple-700/30 transition duration-300"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-1">
                {t("home_featured_card_brand")}
              </h3>
              <p className="text-sm text-gray-400">
                {t("home_featured_card_caption")}
              </p>

              <div className="mt-5 flex items-center gap-5">
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
                    {t("home_featured_building")}
                  </div>
                  <div className="text-lg font-semibold text-white">
                    DevDash
                  </div>
                  <div className="text-xs text-gray-400">
                    React · Zustand · React Query · MUI · TanStack · Recharts
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-400">
                {t("home_featured_footer")}
              </div>
            </motion.div>
          </div>
        </section>

        <motion.p
          className="mt-10 text-gray-300 text-sm leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("home_intro")}
        </motion.p>

        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">{t("home_projects_title")}</h3>
            <Link
              to="/projects"
              className="text-sm text-blue-300 hover:underline"
            >
              {t("home_projects_view_all")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardTeaser
              to="/projects/rah-restaurant-menu"
              img="/assets/menu-icon.svg"
              title={t("home_teaser_menu_title")}
              subtitle={t("home_teaser_menu_subtitle")}
              badges={["HTML", "CSS", "JavaScript", "Responsive"]}
            />
            <CardTeaser
              to="/projects/devdash"
              img="/assets/dashboard.svg"
              title={t("home_teaser_devdash_title")}
              subtitle={t("home_teaser_devdash_subtitle")}
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
    </>
  );
}
