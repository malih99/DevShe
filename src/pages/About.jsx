// src/pages/About.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { aboutData } from "../constants/aboutData";
import AboutHeader from "../components/about/AboutHeader";
import BioCard from "../components/about/BioCard";
import InfoCard from "../components/about/InfoCard";
import ExperienceSection from "../components/about/ExperienceSection";
import EducationSection from "../components/about/EducationSection";

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
        title={aboutData.titleFa}
        lead={aboutData.leadFa}
        isFa={isFa}
      />

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <BioCard
          isFa={isFa}
          title={aboutData.bioTitleFa}
          p1={aboutData.bioP1Fa}
          p2={aboutData.bioP2Fa}
          chips={aboutData.skills}
        />
        <InfoCard
          isFa={isFa}
          name={aboutData.name}
          role={aboutData.roleFa}
          emailLabel={t("about_email")}
          githubLabel={t("about_github")}
          locationLabel={t("about_location")}
          locationValue={aboutData.locationFa}
        />
      </div>

      <ExperienceSection isFa={isFa} t={t} />

      <EducationSection
        isFa={isFa}
        title={aboutData.eduTitleFa}
        uni={aboutData.uniFa}
        degree={aboutData.degreeFa}
      />
    </motion.section>
  );
}
