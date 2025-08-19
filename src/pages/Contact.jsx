import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <motion.section
      className="min-h-screen w-screen px-6 py-16 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-extrabold mb-5 tracking-tight">
        تماس با من
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info card */}
        <motion.aside
          className="lg:col-span-1 rounded-2xl p-6 shadow-xl border border-white/10 bg-white/5 backdrop-blur-xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            برای فرصت‌های همکاری، پروژه‌های فرانت‌اند، یا پرسش‌های فنی خوشحال
            می‌شم پیام بدی.
          </p>

          <div className="space-y-5 text-sm text-gray-300">
            <ContactInfo
              icon={<Mail size={18} />}
              title="ایمیل"
              value="maliheasadi99@gmail.com"
              link="mailto:maliheasadi99@gmail.com"
            />
            <ContactInfo
              icon={<Github size={18} />}
              title="گیت‌هاب"
              value="github.com/malih99"
              link="https://github.com/malih99"
            />
            <ContactInfo
              icon={<Linkedin size={18} />}
              title="لینکدین"
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
