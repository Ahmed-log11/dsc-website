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
        departments: {
          title :'Data Science Club Sections',
          TechTitle: 'Tech',
          TechDescription: 'Focuses on developing technical solutions and supporting programming and data science projects, enabling members to apply their skills.',
          prTitle:'Public Relations & Activities',
          prDescription:"Responsible for strengthening the club's image, managing internal and external communication, and organizing partnerships and events.",
          mediaTitle: 'Marketing & Media',
          mediaDescription :"Highlights the club’s identity and showcases its activities through effective and innovative media content and digital marketing.",

        }
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

        departments: {
          title :'أقسام نادي علم البيانات',
          TechTitle: "التقنية",
          TechDescription: "يعنى بتطوير الحلول التقنية ودعم المشاريع البرمجية وعلم البيانات، مع تمكين الأعضاء من التطبيق العملي لمهاراتهم",
          prTitle:"العلاقات والأنشطة",
          prDescription:"مسؤول عن تعزيز صورة النادي وبناء التواصل مع الجهات الداخلية والخارجية وتنظيم الشراكات والفعاليات",
          mediaTitle: "التسويق والإعلام",
          mediaDescription:"يعمل على إبراز هوية النادي والتعريف بأنشطته عبر المحتوى الإعلامي والتسويق الرقمي الفعّال والمبتكر",
        }

      },
    },
  },
});

export default i18n;
