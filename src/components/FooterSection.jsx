import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer
    id="contact"
      className="relative overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[45px] sm:h-[55px] lg:h-[65px]"
        >
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7043] via-[#0C3A60] to-[#35C6A8]" />

        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#FF7043] blur-[110px] opacity-70" />
        <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#35C6A8] blur-[110px] opacity-70" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-220px] w-[520px] h-[320px] rounded-full bg-[#0C3A60] blur-[100px] opacity-75" />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col items-center justify-center
          pt-14 pb-10
          sm:pt-16 sm:pb-12
          lg:pt-20 lg:pb-14
          px-6 text-white
        "
      >
        {/* Icons */}
        <div className="flex items-center gap-8 text-xl mb-6 lg:mb-7">
          <a
            href="https://x.com/dsc_kau?s=21"
            aria-label="X"
            className="transition-colors duration-300 hover:text-[#FF7043]"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/company/data-science-club-kau/"
            aria-label="LinkedIn"
            className="transition-colors duration-300 hover:text-[#FF7043]"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] sm:text-xs opacity-90 text-center leading-tight">
          {t("footerSection.copyright")}
        </p>
      </div>
    </footer>
  );
}
