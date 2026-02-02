import { useTranslation } from "react-i18next";
import techIcon from "../assets/icons/techIcon.svg";
import mediaIcon from "../assets/icons/mediaIcon.svg";
import prIcon from "../assets/icons/prIcon.svg";

export default function Departments() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
    id="sections" className="py-16 bg-white" dir={isArabic ? "rtl" : "ltr"}>
      {/* Title */}
     
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#FF7043] mb-12">
        {t("departments.title")}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {/* Tech */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col">
          <img src={techIcon} alt="Tech Section" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#35C6A8] mb-4">
            {t("departments.TechTitle")}
          </h3>
          <p className="text-[#0C3A60]/90 text-sm leading-relaxed flex-1">
            {t("departments.TechDescription")}
          </p>
        </div>

        {/* PR */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col">
          <img src={prIcon} alt="Public Relations & Activities Section" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#35C6A8] mb-4">
            {t("departments.prTitle")}
          </h3>
          <p className="text-[#0C3A60]/90 text-sm leading-relaxed flex-1">
            {t("departments.prDescription")}
          </p>
        </div>

        {/* Media */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col">
          <img src={mediaIcon} alt="Media & Marketing Section" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#35C6A8] mb-4">
            {t("departments.mediaTitle")}
          </h3>
          <p className="text-[#0C3A60]/90 text-sm leading-relaxed flex-1">
            {t("departments.mediaDescription")}
          </p>
        </div>

      </div>
    </section>
  );
}
