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
import { useTranslation } from "react-i18next";

import { sendWithEmailJS } from "../../lib/email/sendWithEmailJS";
import {
  DEFAULT_SUBJECT,
  TEMPLATE_FIELDS as F,
} from "../../constants/emailTemplate";
import InputWithIcon from "./InputWithIcon";

function normalizeLang(lng) {
  const l = (lng || "en").toLowerCase();
  return l.startsWith("fa") ? "fa" : "en";
}

export default function ContactForm() {
  const { i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);
  const isFa = lang === "fa";

  const ui = isFa
    ? {
        formTitle: "فرم تماس",
        formDesc: "ایمیل را دقیق وارد کنید تا پاسخ مستقیم به آن ارسال شود.",
        name: "نام",
        namePh: "نام شما",
        email: "ایمیل",
        emailPh: "example@email.com",
        emailHelper: "این ایمیل به عنوان Reply-To تنظیم می‌شود.",
        subject: "موضوع (اختیاری)",
        subjectPh: "درباره چه موضوعی می‌نویسید؟",
        message: "پیام",
        messagePh: "سلام…",
        privacy: "با ارسال فرم، فقط اطلاعات لازم برای پاسخ ذخیره می‌شود.",
        send: "ارسال پیام",
        sending: "در حال ارسال…",
        ok: "پیام با موفقیت ارسال شد ✨",
        fail: "ارسال ناموفق بود. دوباره تلاش کنید.",
        v: {
          nameReq: "نام الزامی است",
          emailReq: "ایمیل الزامی است",
          emailInvalid: "ایمیل معتبر نیست",
          subjMax: "حداکثر ۱۲۰ کاراکتر",
          msgReq: "پیام را وارد کنید",
        },
      }
    : {
        formTitle: "Contact form",
        formDesc: "Enter your email correctly so I can reply to you directly.",
        name: "Name",
        namePh: "Your name",
        email: "Email",
        emailPh: "example@email.com",
        emailHelper: "This email will be used as Reply-To.",
        subject: "Subject (optional)",
        subjectPh: "What is this about?",
        message: "Message",
        messagePh: "Hi…",
        privacy: "By submitting, only necessary info for replying is stored.",
        send: "Send message",
        sending: "Sending…",
        ok: "Message sent successfully ✨",
        fail: "Sending failed. Please try again.",
        v: {
          nameReq: "Name is required",
          emailReq: "Email is required",
          emailInvalid: "Invalid email",
          subjMax: "Max 120 characters",
          msgReq: "Please enter a message",
        },
      };

  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      subject: "",
      message: "",
      website: "", // honeypot
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required(ui.v.nameReq),
      reply_to: Yup.string().email(ui.v.emailInvalid).required(ui.v.emailReq),
      subject: Yup.string().max(120, ui.v.subjMax),
      message: Yup.string().required(ui.v.msgReq),
      website: Yup.string().max(0),
    }),
    onSubmit: async (values, actions) => {
      if (values.website) return; // bot
      try {
        await sendWithEmailJS({
          [F.FROM_NAME]: values.from_name,
          [F.REPLY_TO]: values.reply_to,
          [F.SUBJECT]: values.subject || DEFAULT_SUBJECT,
          [F.MESSAGE]: values.message,
          [F.TO_NAME]: "Malihe Asadi",
        });
        toast.success(ui.ok);
        actions.resetForm();
      } catch (err) {
        console.error(err);
        toast.error(ui.fail);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      className={[
        "rounded-3xl overflow-hidden",
        "border border-black/10 dark:border-white/10",
        "bg-white/70 dark:bg-white/5",
        "backdrop-blur",
        "shadow-[0_18px_60px_-40px_rgba(0,0,0,0.35)]",
      ].join(" ")}
      initial={{ opacity: 0, x: isFa ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.05 }}
    >
      {/* header */}
      <div className="px-6 py-5 border-b border-black/10 dark:border-white/10 bg-gradient-to-r from-black/[0.03] to-transparent dark:from-white/10">
        <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
          {ui.formTitle}
        </h3>
        <p className="text-xs md:text-sm mt-1 text-slate-600 dark:text-white/70">
          {ui.formDesc}
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
            label={ui.name}
            placeholder={ui.namePh}
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
            label={ui.email}
            placeholder={ui.emailPh}
            icon={<Mail size={16} />}
            value={formik.values.reply_to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reply_to && formik.errors.reply_to}
            autoComplete="email"
            helper={ui.emailHelper}
          />
        </div>

        <InputWithIcon
          id="subject"
          name="subject"
          label={ui.subject}
          placeholder={ui.subjectPh}
          icon={<SubjectIcon size={16} />}
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && formik.errors.subject}
        />

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm text-slate-700 dark:text-white/80"
          >
            {ui.message}
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder={ui.messagePh}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={[
              "w-full rounded-2xl px-4 py-3 resize-y outline-none",
              "bg-white/80 dark:bg-[#0b1220]/50",
              "border border-black/10 dark:border-white/10",
              "text-slate-900 dark:text-white",
              "placeholder:text-slate-400 dark:placeholder:text-white/35",
              "focus:ring-2 focus:ring-indigo-500/40 focus:border-transparent",
            ].join(" ")}
          />

          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-xs">{formik.errors.message}</p>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <p className="text-[11px] text-slate-500 dark:text-white/60">
            {ui.privacy}
          </p>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={[
              "inline-flex items-center gap-2",
              "px-5 py-2.5 rounded-2xl font-semibold",
              "text-white",
              "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
              "hover:opacity-95 transition",
              "shadow-[0_16px_40px_-24px_rgba(79,70,229,0.8)]",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            ].join(" ")}
          >
            {formik.isSubmitting ? (
              <span className="inline-block animate-pulse">{ui.sending}</span>
            ) : (
              <>
                <Send size={16} />
                <span>{ui.send}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.form>
  );
}
