import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import {
  Send,
  Mail,
  User as UserIcon,
  Type as SubjectIcon,
} from "lucide-react";

import { sendWithEmailJS } from "../../lib/email/sendWithEmailJS";
import {
  DEFAULT_SUBJECT,
  TEMPLATE_FIELDS as F,
} from "../../constants/emailTemplate";
import InputWithIcon from "./InputWithIcon";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      subject: "",
      message: "",
      website: "", // honeypot
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("نام الزامی است"),
      reply_to: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
      subject: Yup.string().max(120, "حداکثر ۱۲۰ کاراکتر"),
      message: Yup.string().required("پیام را وارد کنید"),
      website: Yup.string().max(0),
    }),
    onSubmit: async (values, actions) => {
      if (values.website) return; // bot
      try {
        await sendWithEmailJS({
          [F.FROM_NAME]: values.from_name,
          [F.REPLY_TO]: values.reply_to, // Reply-To واقعی
          [F.SUBJECT]: values.subject || DEFAULT_SUBJECT,
          [F.MESSAGE]: values.message,
          [F.TO_NAME]: "Malihe Asadi",
        });
        toast.success("پیام با موفقیت ارسال شد ✨");
        actions.resetForm();
      } catch (err) {
        console.error(err);
        toast.error("ارسال ناموفق بود. دوباره تلاش کنید.");
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      className="lg:col-span-2 rounded-2xl shadow-xl border border-transparent bg-white/5 backdrop-blur-xl p-0 overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.05 }}
    >
      {/* header */}
      <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent">
        <h3 className="text-lg font-semibold">فرم تماس</h3>
        <p className="text-xs text-gray-300 mt-1">
          ایمیل‌ات رو دقیق وارد کن تا جواب مستقیم بهش بره.
        </p>
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        value={formik.values.website}
        onChange={formik.handleChange}
      />

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputWithIcon
            id="from_name"
            name="from_name"
            label="نام"
            placeholder="نام شما"
            icon={<UserIcon size={16} />}
            value={formik.values.from_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.from_name && formik.errors.from_name}
            autoComplete="name"
          />

          <InputWithIcon
            id="reply_to"
            name="reply_to"
            type="email"
            label="ایمیل"
            placeholder="example@email.com"
            icon={<Mail size={16} />}
            value={formik.values.reply_to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reply_to && formik.errors.reply_to}
            autoComplete="email"
            helper="این ایمیل به عنوان Reply-To تنظیم می‌شود."
          />
        </div>

        <InputWithIcon
          id="subject"
          name="subject"
          label="موضوع (اختیاری)"
          placeholder="درباره چه موضوعی می‌نویسید؟"
          icon={<SubjectIcon size={16} />}
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && formik.errors.subject}
        />

        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm text-gray-200">
            پیام
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="سلام..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full bg-[#161522]/90 border border-white/10 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/30 transition rounded-xl px-4 py-3 placeholder-gray-400 resize-y"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-400 text-xs">{formik.errors.message}</p>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <p className="text-[11px] text-gray-400">
            با ارسال فرم، فقط اطلاعات لازم برای پاسخ ذخیره می‌شود.
          </p>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-lg"
          >
            {formik.isSubmitting ? (
              <span className="inline-block animate-pulse">در حال ارسال…</span>
            ) : (
              <>
                <Send size={16} />
                <span>ارسال پیام</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.form>
  );
}
