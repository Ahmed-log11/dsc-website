import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLocation } from "react-router-dom"; 
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const [open, setOpen] = useState(false);
  
  // 2. Get the current URL path
  const location = useLocation();

  // 3. Hide this global navbar on the specific pages where you use SimpleNavbar

  if (location.pathname === "/ActivitiesPage" || location.pathname === "/ClubStructure") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* The Colorful Gradient Top Border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF7043] via-[#0C3A60] to-[#35C6A8]" />

      {/* Glassmorphism Nav Body */}
      <nav
        dir={isArabic ? "rtl" : "ltr"}
        className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
      >
        {/* Logo/Club Name */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-slate-900 leading-tight">
            <span className="text-sm md:text-base font-extrabold tracking-wide bg-gradient-to-r from-[#0C3A60] to-[#35C6A8] bg-clip-text text-transparent font-sans">
              {t("navbar.clubName")}
            </span>
            <span className="text-[10px] md:text-xs text-slate-500 font-semibold font-sans">
              {t("navbar.facultyName")}
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide font-sans">
          <a href="#why-join-us" className="text-slate-700 hover:text-[#FF7043] transition-colors">{t("navbar.whyJoinUs")}</a>
          <a href="#about" className="text-slate-700 hover:text-[#35C6A8] transition-colors">{t("navbar.about")}</a>
          <a href="#sections" className="text-slate-700 hover:text-[#0C3A60] transition-colors">{t("navbar.sections")}</a>
          <a href="#events" className="text-slate-700 hover:text-[#FF7043] transition-colors">{t("navbar.events")}</a>
          <LanguageSwitcher />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-900 text-3xl focus:outline-none"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-2xl transition-all duration-300 ease-in-out border-b border-slate-200 shadow-xl overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="flex flex-col p-6 space-y-6 font-bold text-lg text-slate-800 font-sans">
          
          <a href="#why-join-us" onClick={() => setOpen(false)} className="active:text-[#FF7043] border-b border-slate-50 pb-2">
            {t("navbar.whyJoinUs")}
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="active:text-[#35C6A8] border-b border-slate-50 pb-2">
            {t("navbar.about")}
          </a>
          <a href="#sections" onClick={() => setOpen(false)} className="active:text-[#0C3A60] border-b border-slate-50 pb-2">
            {t("navbar.sections")}
          </a>
          <a href="#events" onClick={() => setOpen(false)} className="active:text-[#FF7043] border-b border-slate-50 pb-2">
            {t("navbar.events")}
          </a>
        </div>
      </div>
    </header>
  );
}