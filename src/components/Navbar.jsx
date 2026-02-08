
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import logo from "../assets/Logo.png";


export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav
        dir={isArabic ? "rtl" : "ltr"}
        className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
         
          <div className="flex flex-col text-white leading-tight">
            <span className="text-sm font-semibold">
              {t("navbar.clubName")}
            </span>
            <span className="text-xs text-white/70">
              {t("navbar.facultyName")}
            </span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
       
           <a href="#about" className="text-white hover:text-orange-400">
    {t("navbar.about")}
  </a>
          <a href="#sections" className="text-white hover:text-orange-400">
            {t("navbar.sections")}
          </a>
          <a href="#events" className="text-white hover:text-orange-400">
            {t("navbar.events")}
          </a>
          <a href="#contact" className="text-white hover:text-orange-400">
            {t("navbar.contact")}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
   {open && (
  <div
    dir={isArabic ? "rtl" : "ltr"}
    className="md:hidden bg-slate-900/95 backdrop-blur text-white px-6 py-6 space-y-4"
  >
=

    <a
  href="#about"
  onClick={() => setOpen(false)}
  className="block text-white hover:text-orange-400 transition-colors duration-200"
>
  {t("navbar.about")}
</a>

    <a
      href="#sections"
      onClick={() => setOpen(false)}
      className="block text-white hover:text-orange-400 transition-colors duration-200"
    >
      {t("navbar.sections")}
    </a>

    <a
      href="#events"
      onClick={() => setOpen(false)}
      className="block text-white hover:text-orange-400 transition-colors duration-200"
    >
      {t("navbar.events")}
    </a>

    <a
      href="#contact"
      onClick={() => setOpen(false)}
      className="block text-white hover:text-orange-400 transition-colors duration-200"
    >
      {t("navbar.contact")}
    </a>
  </div>
)}

    </header>
  );
}
 