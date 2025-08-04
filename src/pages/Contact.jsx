import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <motion.section
      className={`min-h-screen w-screen p-4 md:px-6 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-10 border-b pb-4 border-purple-700">
        {isFa ? "تماس با من" : "Get in Touch"}
      </h2>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={isFa ? "نام شما" : "Your Name"}
          className="bg-[#1f1d2c] p-4 rounded-lg focus:outline-none placeholder-gray-400"
        />
        <input
          type="email"
          placeholder={isFa ? "ایمیل" : "Email Address"}
          className="bg-[#1f1d2c] p-4 rounded-lg focus:outline-none placeholder-gray-400"
        />
        <textarea
          rows={6}
          placeholder={isFa ? "پیام شما..." : "Your Message..."}
          className="bg-[#1f1d2c] p-4 rounded-lg placeholder-gray-400 focus:outline-none md:col-span-2"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          {isFa ? "ارسال پیام" : "Send Message"}
        </button>
      </form>

      <div className="text-sm text-gray-400 space-y-3">
        <p>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:maliheasadi99@gmail.com"
            className="text-blue-400 hover:underline"
          >
            maliheasadi99@gmail.com
          </a>
        </p>
        <p>
          💼 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/malih99"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            github.com/malih99
          </a>
        </p>
        <p>
          🔗 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/malih-asadi-a151b0289"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/malih-asadi
          </a>
        </p>
      </div>
    </motion.section>
  );
}
