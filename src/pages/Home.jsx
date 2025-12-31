import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Seo from "../components/Seo";
import Hero from "../components/Hero";
import TechPills from "../components/TechPills";
import CardTeaser from "../components/CardTeaser";

function HeroPreview({ isFa }) {
  return (
    <div
      className={[
        "rounded-3xl border",
        "border-black/10 dark:border-white/10",
        "bg-white/75 dark:bg-white/5 backdrop-blur",
        "shadow-[0_22px_70px_-55px_rgba(0,0,0,0.8)]",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* header */}
      <div className="px-5 py-4 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              DevDash UI Preview
            </p>
            <p className="text-xs text-slate-600 dark:text-white/60">
              {isFa
                ? "نمونه کوچک از الگوهای داشبورد"
                : "A tiny snapshot of dashboard patterns"}
            </p>
          </div>

          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="p-5">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: isFa ? "درخواست‌ها" : "Requests", value: "1,248" },
            { label: isFa ? "خطاها" : "Errors", value: "12" },
            { label: isFa ? "تاخیر" : "Latency", value: "210ms" },
          ].map((x) => (
            <div
              key={x.label}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 p-3"
            >
              <p className="text-[11px] text-slate-600 dark:text-white/60">
                {x.label}
              </p>
              <p className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">
                {x.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filter + rows */}
        <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
          <div className="px-4 py-3 bg-black/[0.02] dark:bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500/80" />
              <p className="text-xs font-semibold text-slate-800 dark:text-white/80">
                {isFa ? "فعالیت اخیر" : "Recent activity"}
              </p>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-white/60">
              {isFa ? "فیلتر: هفته اخیر" : "Filter: last 7 days"}
            </span>
          </div>

          <div className="divide-y divide-black/10 dark:divide-white/10">
            {[
              { name: "Compile job", status: "Success" },
              { name: "Fuzz run", status: "Running" },
              { name: "Coverage", status: "Queued" },
            ].map((r) => (
              <div key={r.name} className="px-4 py-3 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                    {r.name}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-white/60">
                    {isFa ? "جزئیات و وضعیت اجرا" : "Details & execution state"}
                  </p>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 text-slate-700 dark:text-white/70">
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini chart */}
        <div className="mt-4 grid grid-cols-12 gap-2 items-end h-16">
          {[10, 22, 16, 30, 24, 40, 28, 35, 18, 26, 32, 38].map((h, i) => (
            <div
              key={i}
              className="col-span-1 rounded-md bg-indigo-500/30 dark:bg-indigo-400/25 border border-indigo-500/20"
              style={{ height: `${h}px` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CapabilityCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur p-6">
      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((x, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-slate-700 dark:text-white/75"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-white/40 shrink-0" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const isFa = (i18n.language || "en").toLowerCase().startsWith("fa");

  return (
    <>
      <Seo title={t("seo_home_title")} description={t("seo_home_desc")} />

      <motion.main
        dir={isFa ? "rtl" : "ltr"}
        className={[
          "min-h-screen w-full",
          "px-6 md:px-10 py-12",
          "bg-slate-50 text-slate-900",
          "dark:bg-gradient-to-br dark:from-[#0c0f18] dark:via-[#1a1232] dark:to-[#241032] dark:text-white",
        ].join(" ")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/15" />
            <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />
          </div>

          {/* HERO */}
          <Hero
            title={t("hero_title")}
            subtitle={t("hero_subtitle")}
            cta={{ href: "/projects", label: t("hero_cta_projects") }}
            secondaryCta={{ href: "/resume", label: t("hero_cta_resume") }}
            right={<HeroPreview isFa={isFa} />}
          />

          {/* CAPABILITIES (Professional replacement for “just pills”) */}
          <section className="mt-12">
            <div className="flex items-end justify-between gap-3">
              <h2 className="text-xl font-extrabold">
                {isFa ? "توانمندی‌ها" : "Capabilities"}
              </h2>
              <p className="text-sm text-slate-600 dark:text-white/60">
                {isFa
                  ? "روی UIهای دیتاهِوی و معماری تمیز تمرکز دارم."
                  : "Focused on data-heavy UI and clean architecture."}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              <CapabilityCard
                title={isFa ? "Data UI" : "Data UI"}
                items={
                  isFa
                    ? [
                        "Table/Filter patterns",
                        "State-driven UI",
                        "Reusable components",
                      ]
                    : [
                        "Table/Filter patterns",
                        "State-driven UI",
                        "Reusable components",
                      ]
                }
              />
              <CapabilityCard
                title={isFa ? "Architecture" : "Architecture"}
                items={
                  isFa
                    ? [
                        "Zustand + React Query",
                        "Modular structure",
                        "Scalable routing + i18n",
                      ]
                    : [
                        "Zustand + React Query",
                        "Modular structure",
                        "Scalable routing + i18n",
                      ]
                }
              />
              <CapabilityCard
                title={isFa ? "UX & Polish" : "UX & Polish"}
                items={
                  isFa
                    ? [
                        "Motion with restraint",
                        "Accessible components",
                        "Consistent visual system",
                      ]
                    : [
                        "Motion with restraint",
                        "Accessible components",
                        "Consistent visual system",
                      ]
                }
              />
            </div>
          </section>

          {/* TECH PILLS (still useful as quick scan) */}
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

          {/* FEATURED (better story: Problem/Solution/Outcome) */}
          <section className="mt-14">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  {t("home_featured_title")}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-white/70 leading-relaxed">
                  {t("home_featured_desc")}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 p-4">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {t("project_problem")}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                      {isFa
                        ? "ساخت UI دیتاهِوی بدون بهم‌ریختگی و پیچیدگی."
                        : "Building data-heavy UI without chaos & bloat."}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 p-4">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {t("project_solution")}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                      {isFa
                        ? "الگوهای قابل‌استفاده‌مجدد برای جدول/فیلتر/چارت."
                        : "Reusable patterns for tables, filters & charts."}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 p-4">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {t("project_results")}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                      {isFa
                        ? "سرعت توسعه بیشتر + UI یکدست‌تر."
                        : "Faster delivery + consistent UI quality."}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    to="/projects/devdash"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                  >
                    {t("home_featured_cta")}
                  </Link>

                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl font-semibold border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                  >
                    {isFa ? "همه پروژه‌ها" : "All projects"}
                  </Link>
                </div>
              </div>

              <div className="w-full lg:max-w-sm">
                <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur p-6">
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {t("home_featured_card_brand")}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-white/60">
                    {t("home_featured_card_caption")}
                  </p>

                  <div className="mt-5 flex items-center gap-5">
                    <div className="relative w-20 h-20 shrink-0">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `conic-gradient(#6366f1 ${
                            72 * 3.6
                          }deg, rgba(148,163,184,0.35) 0deg)`,
                        }}
                      />
                      <div className="absolute inset-2 rounded-full bg-white dark:bg-[#0c0f18] grid place-items-center border border-black/10 dark:border-white/10">
                        <span className="text-slate-900 dark:text-white font-extrabold text-sm">
                          72%
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm text-slate-600 dark:text-white/60 font-semibold">
                        {t("home_featured_building")}
                      </div>
                      <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                        DevDash
                      </div>
                      <div className="text-xs text-slate-600 dark:text-white/60">
                        React · Zustand · React Query · MUI · TanStack ·
                        Recharts
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-4 text-xs text-slate-600 dark:text-white/60">
                    {t("home_featured_footer")}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <motion.p
            className="mt-10 text-slate-600 dark:text-white/70 text-sm leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {t("home_intro")}
          </motion.p>

          {/* Projects */}
          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold">
                {t("home_projects_title")}
              </h3>
              <Link
                to="/projects"
                className="text-sm font-semibold text-indigo-600 dark:text-blue-300 hover:underline"
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

          {/* Final CTA */}
          <section className="mt-16">
            <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-extrabold">
                  {isFa ? "بیاید همکاری کنیم" : "Let’s build something solid"}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/65 max-w-2xl">
                  {isFa
                    ? "اگر دنبال یک فرانت‌اند تمیز، ماژولار و قابل توسعه برای داشبورد/پنل هستید، خوشحال می‌شم صحبت کنیم."
                    : "If you need a clean, modular frontend for dashboards/admin panels, I’d love to talk."}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              >
                {isFa ? "تماس" : "Contact"}
              </Link>
            </div>
          </section>
        </div>
      </motion.main>
    </>
  );
}
