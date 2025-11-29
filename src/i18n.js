// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("language") || "ar";

i18n.use(initReactI18next).init({
  lng: savedLang,
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        navbar: {
          home: "Home",
          sections: "Sections",
          events: "Events",
          contact: "Contact",
          clubName: "Data Science Club",
          facultyName: "Faculty of Computing & IT",
          langButton: "🇸🇦 Arabic",
        },
        hero: {
          title: "Welcome to the official website of the Data Science Club",
          subtitle: "A student community for learning and practicing data science.",
        },
      },
    },
    ar: {
      translation: {
        navbar: {
          home: "الرئيسية",
          sections: "الأقسام",
          events: "الفعاليات",
          contact: "للتواصل",
          clubName: "نادي علم البيانات",
          facultyName: "كلية الحاسبات وتقنية المعلومات",
          langButton: "🇺🇸 English",
        },
        hero: {
          title: "مرحباً بكم بالموقع الرسمي لنادي علم البيانات",
          subtitle: "مجتمع طلابي لتعلّم وممارسة علم البيانات.",
        },
      },
    },
  },
});

export default i18n;
