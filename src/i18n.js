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
          subtitle:
            "A student community for learning and practicing data science.",
        },
        about: {
          title: "Who We Are",
          desc: "The Data Science Club is a student-led community within the Faculty of Computing and Information Technology at King Abdulaziz University.",
          visionTitle: "Our Vision",
          visionText:
            "To create an empowering space for data science through hands-on practice rather than theory alone, fostering shared learning through real-world projects and practical challenges.",
          missionTitle: "Our Mission",
          missionText:
            "To cultivate a generation of students capable of working confidently with data and transforming it into actionable decisions and deployable models using the right tools.",
        },
        footerSection: {
          copyright: "© 2025 All rights reserved | Tech Department Team",
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

        about: {
          title: "من نحن:",
          desc: "نادي علم البيانات هو مجتمع طلابي بكلية الحاسبات وتقنية المعلومات بجامعة الملك عبدالعزيز.",
          visionTitle: "رؤيتنا:",
          visionText:
            "إقامة مساحة معززة لعلم البيانات بالممارسة، لا بالاكتفاء النظري، وبناء الخبرات معًا عبر مشاريع حقيقية وتحديات عملية.",
          missionTitle: "رسالتنا:",
          missionText:
            "صناعة جيل طلابي متمكن من التعامل مع البيانات وتحويلها إلى قرارات ونماذج تنفيذية بالأدوات المناسبة.",
        },
        footerSection: {
          copyright: "© 2025 جميع الحقوق محفوظة | فريق قسم التقنية",
        },
      },
    },
  },
});

export default i18n;
