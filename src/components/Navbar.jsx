// src/components/Navbar.jsx
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav
        className={`
          max-w-6xl mx-auto px-8 py-4
          flex items-center justify-between
          ${isArabic ? "flex-row-reverse" : "flex-row"}
        `}
      >
        {/* logo + club name */}
       
          {/* placeholder logo box - later you put img here */}
       {/* logo + club name */}
<div className="flex items-center gap-3">
  <img 
    src={logo} 
    alt="DSC Logo" 
    className="w-12 h-12 object-contain rounded-xl"
  />

  <div className="flex flex-col leading-tight text-white">
    <span className="text-sm font-semibold">
      {t("navbar.clubName")}
    </span>
    <span className="text-xs text-white/70">
      {t("navbar.facultyName")}
    </span>
  </div>
</div>


        {/* nav links */}
        <div
          className={`
            flex items-center gap-8 text-sm
            ${isArabic ? "flex-row-reverse" : "flex-row"}
          `}
        >
          <a href="#home" className="text-orange-400 font-semibold">
            {t("navbar.home")}
          </a>
          <a href="#sections" className="text-white/80 hover:text-white">
            {t("navbar.sections")}
          </a>
          <a href="#events" className="text-white/80 hover:text-white">
            {t("navbar.events")}
          </a>
          <a href="#contact" className="text-white/80 hover:text-white">
            {t("navbar.contact")}
          </a>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
