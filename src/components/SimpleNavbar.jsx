import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LanguageSwitcher from "../LanguageSwitcher";

export default function SimpleNavbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
    

      {/* Glassmorphism Nav Body */}
      <nav
        dir={isArabic ? "rtl" : "ltr"}
        className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
      >
        {/* Logo/Club Name (Clickable to go home) */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex flex-col text-slate-900 leading-tight">
            <span className="text-sm md:text-base font-extrabold tracking-wide bg-gradient-to-r from-[#0C3A60] to-[#35C6A8] bg-clip-text text-transparent font-sans">
              {t("navbar.clubName")}
            </span>
            <span className="text-[10px] md:text-xs text-slate-500 font-semibold font-sans">
              {t("navbar.facultyName")}
            </span>
          </div>
        </Link>

        {/* Right Controls: Language & Home Button */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          <LanguageSwitcher />

          <Link
            to="/"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-[#0C3A60] font-bold text-xs sm:text-sm hover:bg-[#0C3A60] hover:text-white transition-all duration-300 border border-slate-200 hover:border-[#0C3A60] font-sans shadow-sm"
          >
            {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
            {/* Hides the word 'Home' on very small screens, keeps the arrow */}
            <span className="hidden sm:inline">{t("navbar.home")}</span>
          </Link>
          
        </div>
      </nav>
    </header>
  );
}