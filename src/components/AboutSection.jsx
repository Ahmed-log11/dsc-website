import { useTranslation } from "react-i18next";
import abstractLogo from "../assets/abstract_logo.png";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section id="about" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 items-center">

          {/* Abstract logo */}
          <div className="hidden min-[770px]:flex justify-center lg:justify-start">
            <img
              src={abstractLogo}
              alt="Abstract Logo DSC"
              aria-hidden="true"
              className="w-[380px] lg:w-[420px]  opacity-90"
            />
          </div>

          {/* Content */}
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={isArabic ? "text-right" : "text-left"}
          >
            {/* Title */}
            <h2
              className="text-[#35C6A8] font-bold mb-4 sm:mb-6
                           text-2xl sm:text-3xl lg:text-4xl"
            >
              {t("about.title")}
            </h2>

            {/* Description */}
            <p
              className="text-[#0C3A60]/90 leading-7 sm:leading-8 mb-10 sm:mb-14 max-w-xl
                          text-sm sm:text-base lg:text-lg"
            >
              {t("about.desc")}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Vision */}
              <div>
                <h3
                  className="text-[#35C6A8] font-bold mb-3 sm:mb-4
                               text-xl sm:text-2xl lg:text-3xl"
                >
                  {t("about.visionTitle")}
                </h3>
                <p
                  className="text-[#0C3A60]/90 leading-7 sm:leading-8
                              text-sm sm:text-base lg:text-lg"
                >
                  {t("about.visionText")}
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3
                  className="text-[#35C6A8] font-bold mb-3 sm:mb-4
                               text-xl sm:text-2xl lg:text-3xl"
                >
                  {t("about.missionTitle")}
                </h3>
                <p
                  className="text-[#0C3A60]/90 leading-7 sm:leading-8
                              text-sm sm:text-base lg:text-lg"
                >
                  {t("about.missionText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
