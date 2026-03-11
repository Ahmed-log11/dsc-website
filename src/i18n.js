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
          events: "Activities",
          contact: "Contact",
          clubName: "Data Science Club",
          facultyName: "Faculty of Computing & IT",
          langButton: "🇸🇦 Arabic",
          whyJoinUs: "Join Us",
          about: "About",

        },
        whyJoinUs: {
          tagline: "More than just a club",
          joinButton: "Registration Closed",
          joinHint: "Follow us on X for updates on the next intake!",
          slides: {
            slide1: {
              title: "Learn New Skills",
              desc: "Take your learning beyond the classroom. Dive into the world of Data Science, Artificial Intelligence, and modern tech tools."
            },
            slide2: {
              title: "Build Real Projects",
              desc: "Don't just read about data. Collaborate with a team to build, code, and deploy real-world interactive solutions."
            },
            slide3: {
              title: "Find Your Community",
              desc: "Meet new friends who share your passion, and build a strong network within the Faculty of Computing and IT."
            },
            slide4: {
              title: "Lead and Innovate",
              desc: "Develop your communication and leadership skills. Become an influential voice shaping the next generation of tech leaders."
            }
          }
        },
        hero: {
          title: "Welcome to the official website of the Data Science Club",
          subtitle:
            "A student community for learning and practicing data science.",
        },
    about: {
          title: "Who We Are",
          desc: "The Data Science Club is a student community in the Faculty of Computing and Information Technology. It aims to be the leading source of inspiration and innovation in the field of data science, bringing together ambitious students in a cohesive environment that seeks to transform data into added value that contributes to achieving Saudi Vision 2030.",
          missionTitle: "Our Mission",
          missionText:
            "To empower students to discover the power of data and make use of it by providing them with the necessary tools and skills through workshops, advanced training, and expert sessions. This helps them build innovative solutions that drive progress across different sectors.",
          visionTitle: "Our Vision",
          visionText:
            "To be a leading student community that inspires creativity and enables students to develop their skills, so they contribute to shaping a generation of future leaders in the field of data science.",
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
  logo: {
  meanings: {
    blue: {
      title: "Faculty Identity",
      desc: "Indicates affiliation with the academic institution."
    },
    orange: {
      title: "Data",
      desc: "Represents data as the foundation of data science."
    },
    green: {
      title: "Neural Networks",
      desc: "Reflects the structure of the logo and letter arrangement, while the color gradient represents neural networks and data flow."
    }
  }
},
events: {
  stayTunedTitle: "Stay Tuned!",
stayTunedDesc:
  "We are preparing upcoming activities and workshops. Events will be announced soon on X.",

  title: "Activities",
  subtitle: "Explore our upcoming events and take a look at our previous activities.",
  tabs: {
    upcoming: "Upcoming",
    previous: "Previous",
  },
  meta: {
    date: "Date",
    time: "Time",
    location: "Location",
    info: "Info",
  },
  actions: {
    register: "Register",
    registerHint: "Opens a Google Form in a new tab.",
  },
  upcoming: {
    items: {
      event1: {
        title: "Workshop: Intro to Data Science",
        desc: "A beginner-friendly session covering the basics and tools you’ll use to start your data science journey.",
        date: "Feb 20, 2026",
        time: "6:00 PM – 8:00 PM",
        location: "FCIT – Room 101",
        extra: "Limited seats. Bring your laptop.",
      },
      event2: {
        title: "Talk: Machine Learning in Practice",
        desc: "A practical talk about real-world ML projects, pitfalls, and how to build a strong portfolio.",
        date: "Mar 5, 2026",
        time: "7:00 PM – 8:30 PM",
        location: "FCIT – Main Hall",
        extra: "Open to all students.",
      },
    },
  },
  previous: {
    items: {
     prev1: {
        title: "DSC Orientation Day",
        desc: "An introduction to the club, our sections, and how to get involved.",
      },
      prev2: {
        title: "Robocon Booth",
        desc: "We hosted a booth at Robocon to showcase the club’s work and connect with students.",
      },
      prev3: {
        title: "Exploratory Data Analysis Workshop",
        desc: "A hands-on workshop on EDA concepts and techniques using real datasets.",
      },

    },
  },
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
          whyJoinUs: " انضم إلينا",
          about: "من نحن",

        },
        whyJoinUs: {
          tagline: " أكثر من مجرد نادي",
          joinButton: "التسجيل مغلق حالياً",
          joinHint: "تابعنا على منصة X لمعرفة موعد التسجيل القادم!",
          slides: {
            slide1: {
              title: "اكتسب مهارات جديدة",
              desc: "انتقل بتعلمك إلى ما هو أبعد من المناهج الدراسية. تعمق في عالم علم البيانات، والذكاء الاصطناعي، وأحدث الأدوات التقنية."
            },
            slide2: {
              title: "ابنِ مشاريع حقيقية",
              desc: "لا تكتفِ بالجانب النظري. تعاون مع فريقك لبناء وبرمجة حلول حقيقية وتطبيقات تفاعلية تثري سيرتك الذاتية."
            },
            slide3: {
              title: "تواصل مع مجتمعك",
              desc: "تعرف على أصدقاء جدد يشاركونك نفس الشغف، وابنِ شبكة علاقات قوية داخل كلية الحاسبات وتقنية المعلومات."
            },
            slide4: {
              title: "قُد وابتكر",
              desc: "طور مهاراتك القيادية والتواصلية، وكن صوتاً مؤثراً يسهم في تشكيل جيل جديد من قادة تقنية المعلومات."
            }
          }
        },
        hero: {
          title: "مرحباً بكم في الموقع الرسمي لنادي علم البيانات",
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

     about: {
  title: "من نحن؟",
  desc: "نادي علم البيانات هو مجتمع طلابي في كلية الحاسبات وتقنية المعلومات يسعى ليكون المصدر الأول للإلهام والابتكار في مجال علم البيانات، حيث يجمع الطلاب الطموحين في بيئة متماسكة تهدف إلى تحويل البيانات إلى قيمة مضافة تسهم في تحقيق رؤية المملكة 2030.",
  missionTitle: "رسالتنا",
  missionText:
    "تمكين الطلاب من اكتشاف قوة البيانات واستثمارها، من خلال تزويدهم بالأدوات والمهارات اللازمة عبر ورش عمل تفاعلية، دورات تدريبية متقدمة، ولقاءات مثرية مع خبراء المجال، مما يساعدهم على بناء حلول إبداعية تدفع عجلة التقدم في مختلف القطاعات.",
  visionTitle: "رؤيتنا",
  visionText:
    "أن نكون مجتمعًا طلابيًا رائدًا يحفز الإبداع، ويمكن الطلاب من تطوير مهاراتهم، ليساهموا في تشكيل جيل من قادة المستقبل في مجال علم البيانات.",
},

        footerSection: {
          copyright: "© 2025 جميع الحقوق محفوظة | فريق قسم التقنية",
        },
        logo: {
  meanings: {
    blue: {
      title: "شعار الكلية",
      desc: "دلالة على الانتماء للصرح الأكاديمي"
    },
    orange: {
      title: "البيانات",
      desc: "اشارة الى أساس علم البيانات."
    },
    green: {
      title: "الشبكات العصبية",
      desc: "تعكس بنية الشعار وترتيب الأحرف, وتدرج الألوان, مفهوم الشبكات العصبية واتجاه تدفق البيانات فيها."
    }
  }
},

events: {
  stayTunedTitle: "ترقبوا !",
stayTunedDesc:
  "نعمل على تجهيز فعاليات وورش عمل قادمة، وسيتم الإعلان عنها قريبًا على منصة X.",

  title: "الفعاليات",
  subtitle: "تعرّف على فعالياتنا القادمة واطّلع على أنشطتنا السابقة.",
  tabs: {
    upcoming: "القادمة",
    previous: "السابقة",
  },
  meta: {
    date: "التاريخ",
    time: "الوقت",
    location: "المكان",
    info: "معلومات",
  },
  actions: {
    register: "التسجيل",
    registerHint: "سيتم فتح نموذج Google في تبويب جديد.",
  },
  upcoming: {
    items: {
      event1: {
        title: "ورشة: مقدمة في علم البيانات",
        desc: "جلسة مناسبة للمبتدئين تغطي الأساسيات والأدوات التي تساعدك لبدء رحلتك في علم البيانات.",
        date: "20 فبراير 2026",
        time: "6:00 م – 8:00 م",
        location: "كلية الحاسبات – قاعة 101",
        extra: "المقاعد محدودة. احضر جهازك المحمول.",
      },
      event2: {
        title: "محاضرة: تعلم الآلة في الواقع العملي",
        desc: "محاضرة عملية حول مشاريع تعلم الآلة الواقعية والتحديات وكيف تبني ملفًا قويًا.",
        date: "5 مارس 2026",
        time: "7:00 م – 8:30 م",
        location: "كلية الحاسبات – القاعة الرئيسية",
        extra: "متاحة لجميع الطلاب.",
      },
    },
  },
  previous: {
    items: {
      prev1: {
        title: "يوم التعريف بالنادي",
        desc: "تعريف بالنادي وأقسامه وكيفية الانضمام والمشاركة.",
      },
      prev2: {
        title: "النادي في روبوكون",
        desc: "شاركنا بركن في فعالية روبوكون لعرض أعمال النادي والتواصل مع الطلاب.",
      },
      prev3: {
        title: "ورشة تحليل البيانات الاستكشافي",
        desc: "ورشة تطبيقية حول مفاهيم وتقنيات تحليل البيانات الاستكشافي باستخدام بيانات واقعية.",
      },

    },
  },
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
