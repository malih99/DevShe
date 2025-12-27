import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AboutHeader from "../components/about/AboutHeader";
import BioCard from "../components/about/BioCard";
import InfoCard from "../components/about/InfoCard";
import ExperienceSection from "../components/about/ExperienceSection";
import EducationSection from "../components/about/EducationSection";
import { aboutData } from "../constants/aboutData";
import { profile } from "../constants/profile";

export default function About() {
  const { i18n, t } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <motion.section
      className={`w-full min-h-screen px-6 md:px-10 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white ${
        isFa ? "text-right" : "text-left"
      }`}
      dir={isFa ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <AboutHeader
        title={t("about_title")}
        lead={t("about_lead")}
        isFa={isFa}
      />

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <BioCard
          isFa={isFa}
          title={t("about_title")}
          p1={t("about_bio_1")}
          p2={t("about_bio_2")}
          chips={aboutData.skills}
        />
        <InfoCard
          isFa={isFa}
          name={profile.name}
          role={t("about_info_role_value")}
          emailLabel={t("about_info_email")}
          githubLabel={t("about_info_github")}
          locationLabel={t("about_info_location")}
          locationValue={t("about_info_location_value")}
        />
      </div>

      <ExperienceSection t={t} />

      <EducationSection
        title={t("about_education_title")}
        uni={t("edu_university")}
        degree={t("edu_degree")}
      />
    </motion.section>
  );
}
