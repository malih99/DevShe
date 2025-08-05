import { motion } from "framer-motion";
import { Briefcase, BookOpen, Code, User, Mail, Globe } from "lucide-react";
import CircularSkill from "../components/CircularSkill";

export default function Resume() {
  return (
    <motion.div
      className="min-h-screen w-screen px-6 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-5xl font-extrabold text-center tracking-tight">
          رزومه
        </h1>

        {/* درباره من */}
        <section>
          <SectionTitle icon={<User size={20} />} title="درباره من" />
          <p className="text-gray-300 leading-relaxed text-sm mt-2">
            توسعه‌دهنده فرانت‌اند با تمرکز بر React.js و تجربه کار تیمی در
            پروژه‌های واقعی. مسلط به طراحی رابط کاربری با TailwindCSS و ابزارهای
            مدیریت State مانند Zustand و React Query. علاقه‌مند به یادگیری
            مستمر، مستندسازی و کار در محیط‌های چالشی.
          </p>
        </section>

        {/* مهارت‌ها */}
        <section>
          <SectionTitle icon={<Code size={20} />} title="مهارت‌ها" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            <CircularSkill percent={95} label="React.js" />
            <CircularSkill percent={90} label="TailwindCSS" />
            <CircularSkill percent={30} label="TypeScript" />
            <CircularSkill percent={80} label="Zustand" />
            <CircularSkill percent={80} label="React Query" />
            <CircularSkill percent={75} label="Material UI" />
            <CircularSkill percent={70} label="Git & GitHub" />
            <CircularSkill percent={65} label="Figma / XD" />
          </div>
        </section>

        {/* زبان‌ها */}
        <section>
          <SectionTitle icon={<Globe size={20} />} title="زبان" />
          <p className="text-sm text-gray-300 mt-2">انگلیسی: ★★★★☆</p>
        </section>

        {/* سوابق شغلی */}
        <section>
          <SectionTitle icon={<Briefcase size={20} />} title="سوابق شغلی" />
          <div className="divide-y divide-gray-700 mt-4">
            <JobItem
              title="ویان افزار – توسعه‌دهنده فرانت‌اند (پاره‌وقت - ریموت)"
              date="دی 1403"
              description="توسعه پنل ادمین با React.js، Zustand، TanStack Table، MUI و TailwindCSS"
            />
            <JobItem
              title="رهاسا – جونیور فرانت‌اند دولوپر (حضوری)"
              date="آذر 1402 - آذر 1403"
              description="توسعه منوی دیجیتال و نرم‌افزار مدیریت رستوران با React، Vite، Shadcn و Tailwind"
            />
          </div>
        </section>

        {/* پروژه‌ها */}
        <section>
          <SectionTitle icon={<BookOpen size={20} />} title="پروژه‌ها" />
          <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2 mt-2">
            <li>
              <strong>آکادمی سپهر:</strong> صفحه لندینگ با React.js،
              TailwindCSS، Formik، Yup، Swiper، MUI
            </li>
            <li>
              <strong>منوی دیجیتال (رهاسا):</strong> مدیریت سفارشات رستوران با
              طراحی واکنش‌گرا
            </li>
            <li>
              لینک گیت‌هاب:{" "}
              <a
                href="https://github.com/malih99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                github.com/malih99
              </a>
            </li>
          </ul>
        </section>

        {/* تحصیلات */}
        <section>
          <SectionTitle icon={<BookOpen size={20} />} title="تحصیلات" />
          <div className="text-sm mt-2">
            <p className="font-bold">دانشگاه علم و فناوری مازندران</p>
            <p className="text-gray-400">کارشناسی مهندسی شیمی (1399 - 1403)</p>
          </div>
        </section>

        {/* اطلاعات تماس */}
        <section>
          <SectionTitle icon={<Mail size={20} />} title="تماس" />
          <ul className="text-sm text-gray-300 mt-2 space-y-1">
            <li>📧 maliheasadi99@gmail.com</li>
            <li>📍 تهران</li>
            <li>📞 09116399414</li>
            <li>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/malih-asadi-a151b0289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                linkedin.com/in/malih-asadi-a151b0289
              </a>
            </li>
          </ul>
        </section>

        {/* دانلود رزومه */}
        <div className="text-center pt-8">
          <a
            href="/assets/resume.pdf"
            download
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            دانلود رزومه PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-2 border-b border-gray-700 pb-1">
      {icon}
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}

function JobItem({ title, date, description }) {
  return (
    <div className="py-4">
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{date}</p>
      <p className="text-sm mt-1 text-gray-200">{description}</p>
    </div>
  );
}
