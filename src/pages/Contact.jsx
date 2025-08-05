import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import toast from "react-hot-toast";

const SERVICE_ID = "service_dqw50oy";
const TEMPLATE_ID = "template_1ml57nc";
const PUBLIC_KEY = "p3fkn5VoqaDZtj6CG";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("نام الزامی است"),
      reply_to: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
      message: Yup.string().required("پیام را وارد کنید"),
    }),
    onSubmit: (values, actions) => {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
        () => {
          setStatus("success");
          actions.resetForm();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
    },
  });

  return (
    <motion.section
      className="min-h-screen w-full px-6 py-16 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-12 border-b-2 border-purple-600 pb-4">
        تماس با من
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* فرم تماس */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <input
            name="from_name"
            type="text"
            placeholder="نام شما"
            onChange={formik.handleChange}
            value={formik.values.from_name}
            className="w-full bg-[#1f1d2c] p-4 rounded-lg placeholder-gray-400"
          />
          {formik.touched.from_name && formik.errors.from_name && (
            <p className="text-red-400 text-sm">{formik.errors.from_name}</p>
          )}

          <input
            name="reply_to"
            type="email"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            value={formik.values.reply_to}
            className="w-full bg-[#1f1d2c] p-4 rounded-lg placeholder-gray-400"
          />
          {formik.touched.reply_to && formik.errors.reply_to && (
            <p className="text-red-400 text-sm">{formik.errors.reply_to}</p>
          )}

          <textarea
            name="message"
            rows={6}
            placeholder="پیام شما..."
            onChange={formik.handleChange}
            value={formik.values.message}
            className="w-full bg-[#1f1d2c] p-4 rounded-lg placeholder-gray-400"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-400 text-sm">{formik.errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            ارسال پیام
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ پیام شما با موفقیت ارسال شد!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ خطایی رخ داده است. لطفاً دوباره تلاش کنید.
            </p>
          )}
        </form>

        {/* اطلاعات تماس */}
        <div className="space-y-6 text-sm text-gray-300">
          <ContactInfo
            icon={<Mail size={20} />}
            title="ایمیل"
            value="maliheasadi99@gmail.com"
            link="mailto:maliheasadi99@gmail.com"
          />
          <ContactInfo
            icon={<Github size={20} />}
            title="گیت‌هاب"
            value="github.com/malih99"
            link="https://github.com/malih99"
          />
          <ContactInfo
            icon={<Linkedin size={20} />}
            title="لینکدین"
            value="linkedin.com/in/malih-asadi-a151b0289"
            link="https://www.linkedin.com/in/malih-asadi-a151b0289"
          />
        </div>
      </div>
    </motion.section>
  );
}

function ContactInfo({ icon, title, value, link }) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <p className="font-bold">{title}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
