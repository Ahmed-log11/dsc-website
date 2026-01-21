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
        departments: {
          title :'Data Science Club Sections',
          TechTitle: 'Tech',
          TechDescription: 'Focuses on developing technical solutions and supporting programming and data science projects, enabling members to apply their skills.',
          prTitle:'Public Relations & Activities',
          prDescription:"Responsible for strengthening the club's image, managing internal and external communication, and organizing partnerships and events.",
          mediaTitle: 'Marketing & Media',
          mediaDescription :"Highlights the club’s identity and showcases its activities through effective and innovative media content and digital marketing.",

        },
        xPosts: {
  title: "Latest on X",
  viewPost: "View post",
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
          TechDescription: "يعمل قسم التقنية على تطوير الحلول التقنية ومشاريع علم البيانات، ودعم الأعضاء في التطبيق العملي وبناء مهاراتهم البرمجية.",
          prTitle:"العلاقات والأنشطة",
          prDescription:"يعمل قسم العلاقات والأنشطة على تعزيز صورة النادي وبناء التواصل مع الجهات الداخلية والخارجية، وتنظيم الشراكات والفعاليات.",
          mediaTitle: "التسويق والإعلام",
          mediaDescription:"يعمل قسم التسويق والإعلام على إبراز هوية النادي والتعريف بأنشطته عبر المحتوى الإعلامي والتسويق الرقمي الفعّال والمبتكر.",
        },

        about:{
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
           xPosts: {
  title: "آخر ما نُشر على X",
  viewPost: "عرض المنشور",
}
      },
   

    },
  },
});

export default i18n;
