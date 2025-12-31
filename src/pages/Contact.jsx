import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin } from "lucide-react";

import Seo from "../components/Seo";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { profile } from "../constants/profile";

function normalizeLang(lng) {
  const l = (lng || "en").toLowerCase();
  return l.startsWith("fa") ? "fa" : "en";
}

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);
  const isFa = lang === "fa";

  const subtitle = isFa
    ? "برای همکاری، پیشنهاد شغلی یا سؤال، همین‌جا پیام بدهید."
    : "For collaborations, opportunities, or questions — send a message here.";

  return (
    <>
      <Seo title={t("seo_contact_title")} description={t("seo_contact_desc")} />

      <motion.section
        dir={isFa ? "rtl" : "ltr"}
        className={[
          "min-h-screen w-full px-6 md:px-10 py-14",
          // Light background (visible + premium)
          "bg-gradient-to-br from-slate-50 via-white to-indigo-50",
          // Dark background (as your other pages)
          "dark:from-[#0c0f18] dark:via-[#1a1232] dark:to-[#241032]",
          isFa ? "text-right" : "text-left",
        ].join(" ")}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t("contact_title")}
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-white/70">
              {subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Info */}
            <motion.aside
              className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-24"
              initial={{ opacity: 0, x: isFa ? 18 : -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={[
                  "rounded-3xl p-5 md:p-6",
                  "border border-black/10 dark:border-white/10",
                  "bg-white/70 dark:bg-white/5",
                  "backdrop-blur",
                  "shadow-[0_18px_60px_-40px_rgba(0,0,0,0.35)]",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-white/90">
                    {isFa ? "راه‌های ارتباطی" : "Contact Info"}
                  </h2>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-slate-600 dark:text-white/70">
                    {isFa ? "پاسخ سریع" : "Fast reply"}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <ContactInfo
                    icon={<Mail size={18} />}
                    title={t("contact_email_label")}
                    value={profile.email}
                    link={`mailto:${profile.email}`}
                  />
                  <ContactInfo
                    icon={<Github size={18} />}
                    title={t("contact_github_label")}
                    value={profile.githubText}
                    link={profile.githubUrl}
                  />
                  <ContactInfo
                    icon={<Linkedin size={18} />}
                    title={t("contact_linkedin_label")}
                    value={profile.linkedinText}
                    link={profile.linkedinUrl}
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 p-4">
                  <p className="text-xs leading-5 text-slate-600 dark:text-white/70">
                    {isFa
                      ? "پیام‌ها از طریق ایمیل ارسال می‌شوند و Reply-To روی ایمیل شما تنظیم می‌شود."
                      : "Messages are sent via email and the Reply-To will be set to your email."}
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </motion.section>
    </>
  );
}
