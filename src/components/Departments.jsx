import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import techIcon from "../assets/icons/techIcon.svg";
import mediaIcon from "../assets/icons/mediaIcon.svg";
import prIcon from "../assets/icons/prIcon.svg";

export default function Departments() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <section
      id="sections"
      className="py-20 lg:py-24 relative"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Title */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF7043] font-sans tracking-tight">
          {t("departments.title")}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {/* Tech Card */}
        <div className="group bg-white rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 shadow-sm border border-slate-100 transition-all duration-300 flex flex-col">
          <div className="w-16 h-16 mx-auto mb-6 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#35C6A8]/10 group-hover:scale-110 transition-all duration-300">
            <img
              src={techIcon}
              alt="Tech Section"
              className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#35C6A8] mb-4 font-sans">
            {t("departments.TechTitle")}
          </h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-1 font-sans">
            {t("departments.TechDescription")}
          </p>
        </div>

        {/* PR Card */}
        <div className="group bg-white rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 shadow-sm border border-slate-100 transition-all duration-300 flex flex-col">
          <div className="w-16 h-16 mx-auto mb-6 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#35C6A8]/10 group-hover:scale-110 transition-all duration-300">
            <img
              src={prIcon}
              alt="Public Relations Section"
              className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#35C6A8] mb-4 font-sans">
            {t("departments.prTitle")}
          </h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-1 font-sans">
            {t("departments.prDescription")}
          </p>
        </div>

        {/* Media Card */}
        <div className="group bg-white rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 shadow-sm border border-slate-100 transition-all duration-300 flex flex-col">
          <div className="w-16 h-16 mx-auto mb-6 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#35C6A8]/10 group-hover:scale-110 transition-all duration-300">
            <img
              src={mediaIcon}
              alt="Media Section"
              className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#35C6A8] mb-4 font-sans">
            {t("departments.mediaTitle")}
          </h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-1 font-sans">
            {t("departments.mediaDescription")}
          </p>
        </div>
      </div>
      {/* Club Structure Button */}
      <div className="mt-12 flex justify-center px-6">
        <Link
          to="/club-structure"
          className="inline-flex items-center justify-center rounded-full bg-[#35C6A8] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {isArabic ? "هيكلة النادي" : "Club Structure"}
        </Link>
      </div>
    </section>
  );
}
