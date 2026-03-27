import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import techIcon from "../assets/icons/techIcon.svg";
import mediaIcon from "../assets/icons/mediaIcon.svg";
import prIcon from "../assets/icons/prIcon.svg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";  
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
     <div className="mt-14 flex justify-center px-6">
        <Link
          to="/club-structure"
          className="group inline-flex items-center gap-3 justify-center rounded-full bg-[#35C6A8] px-10 py-3.5 md:px-12 md:py-4 text-base md:text-lg font-bold text-white shadow-[0_4px_14px_rgba(53,198,168,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(53,198,168,0.6)]"
        >
          <span>{isArabic ? "تعرف على فريقنا" : "Meet the Team"}</span>
          
          
          {isArabic ? (
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          ) : (
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          )}
        </Link>
      </div>
    </section>
  );
}
