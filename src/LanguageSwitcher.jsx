// src/LanguageSwitcher.jsx
import i18n from "./i18n";

const LanguageSwitcher = () => {
  const currentLang = i18n.language || "ar";

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-xs border border-white/70 rounded-full text-white hover:bg-white/10"
    >
      {currentLang === "ar" ? "🇺🇸 English" : "🇸🇦 عربي"}
    </button>
  );
};

export default LanguageSwitcher;
