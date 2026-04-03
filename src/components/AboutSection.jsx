import { useTranslation } from "react-i18next";
import abstractLogo from "../assets/abstract_logo.png";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <section id="about" className="relative bg-white py-20 lg:py-28" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ======================================= */}
          {/* CONTENT SIDE: Always visible */}
          {/* ======================================= */}
          <div>
            <h2 className="text-[#35C6A8] font-bold tracking-tight text-3xl md:text-4xl mb-6 font-sans">
              {t("about.title")}
            </h2>

            <p className="text-[#0C3A60]/80 leading-relaxed text-lg mb-12 max-w-[55ch] font-sans">
              {t("about.desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
              <div className="flex flex-col">
                <h3 className="text-[#0C3A60] font-bold text-xl mb-3 font-sans">
                  {t("about.missionTitle")}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  {t("about.missionText")}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#0C3A60] font-bold text-xl mb-3 font-sans">
                  {t("about.visionTitle")}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  {t("about.visionText")}
                </p>
              </div>
            </div>
          </div>

          {/* ======================================= */}
          {/* IMAGE SIDE: Hidden on phones! */}
          {/* ======================================= */}
          <div className="hidden md:flex justify-center">
            <img
              src={abstractLogo}
              alt="Abstract Logo DSC"
           
              className="w-[350px] lg:w-[450px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}