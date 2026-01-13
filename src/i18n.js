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
          desc: "The Data Science Club is a student community at the Faculty of Computing and IT, aiming to be a leading source of inspiration and innovation in data science. It brings together ambitious students in a collaborative environment to transform data into value aligned with Saudi Vision 2030.",
          visionTitle: "Our Vision",
          visionText:
            "To be a leading student community that fosters creativity, empowers students to develop their skills, and shapes future leaders in data science.",
          missionTitle: "Our Mission",
          missionText:
            "Empowering students to explore the power of data through hands-on workshops, advanced training, and expert-led sessions to build innovative solutions across various sectors.",
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
          desc: "نادي علم البيانات هو مجتمع طلابي في كلية الحاسبات وتقنية المعلومات يسعى ليكون المصدر الأول للإلهام والابتكار في مجال علم البيانات، حيث يجمع الطلاب الطموحين في بيئة متماسكة تهدف إلى تحويل البيانات إلى قيمة مضافة تسهم في تحقيق رؤية المملكة 2030.",
          visionTitle: "رؤيتنا:",
          visionText:
            "أن نكون مجتمعًا طلابيًا رائدًا يحفز الإبداع، ويمكن الطلاب من تطوير مهاراتهم، ليساهموا في تشكيل جيل قادة المستقبل في مجال علم البيانات.",
          missionTitle: "رسالتنا:",
          missionText:
            "تمكين الطلاب من اكتشاف قوة البيانات واستثمارها، من خلال تزويدهم بالأدوات والمهارات اللازمة عبر ورش عمل تفاعلية، دورات تدريبية متقدمة، لقاءات مرئية مع خبراء المجال، مما يساعدهم على بناء حلول إبداعية تدفع عجلة التقدم في مختلف القطاعات.",
        },
      },
    },
  },
});

export default i18n;
