import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="min-h-screen w-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-extrabold mb-5 tracking-tight">
        {t("contact_title")}
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar: info */}
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
              value="malih.asadi99@gmail.com"
              link="mailto:malih.asadi99@gmail.com"
            />
            <ContactInfo
              icon={<Github size={18} />}
              title={t("contact_github_label")}
              value="github.com/malih99"
              link="https://github.com/malih99"
            />
            <ContactInfo
              icon={<Linkedin size={18} />}
              title={t("contact_linkedin_label")}
              value="linkedin.com/in/malih-asadi-a151b0289"
              link="https://www.linkedin.com/in/malih-asadi-a151b0289"
            />
          </div>
        </motion.aside>

        {/* Form */}
        <ContactForm />
      </div>
    </motion.section>
  );
}
