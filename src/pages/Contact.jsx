import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { profile } from "../constants/profile";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="min-h-screen w-full px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-extrabold mb-5 tracking-tight">
        {t("contact_title")}
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.aside
          className="md:col-span-1 rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 backdrop-blur"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
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
        </motion.aside>

        <ContactForm />
      </div>
    </motion.section>
  );
}
