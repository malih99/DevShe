import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <motion.div
      className={`w-full min-h-screen px-8 py-12 flex flex-col justify-center bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-xl font-bold mb-8">
        {isFa ? "تماس با من" : "Contact Me"}
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <input
          type="text"
          placeholder={isFa ? "نام" : "Your Name"}
          className="bg-[#1f1d2c] text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder={isFa ? "ایمیل" : "Your Email"}
          className="bg-[#1f1d2c] text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none"
        />
        <textarea
          placeholder={isFa ? "پیام شما..." : "Your message..."}
          className="bg-[#1f1d2c] text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none md:col-span-2"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition py-3 px-6 rounded-xl font-medium md:col-span-2"
        >
          {isFa ? "ارسال پیام" : "Send Message"}
        </button>
      </form>

      <div className="mt-12 space-y-4 text-sm text-gray-400">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:maliheasadi99@gmail.com"
            className="text-blue-400 hover:underline"
          >
            maliheasadi99@gmail.com
          </a>
        </p>
        <p>
          💼 GitHub:{" "}
          <a
            href="https://github.com/malih99"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            github.com/malih99
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/malih-asadi-a151b0289"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            linkedin.com/in/malih-asadi
          </a>
        </p>
      </div>
    </motion.div>
  );
}
