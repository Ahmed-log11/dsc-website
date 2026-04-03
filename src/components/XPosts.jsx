import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { xPosts } from "../data/xPosts";

function getTweetId(url) {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : null;
}

function loadTwitterScript(onLoad) {
  if (window.twttr?.widgets) {
    onLoad();
    return;
  }

  const existing = document.querySelector(
    'script[src="https://platform.twitter.com/widgets.js"]'
  );

  if (existing) {
    existing.addEventListener("load", onLoad);
    return;
  }

  const s = document.createElement("script");
  s.src = "https://platform.twitter.com/widgets.js";
  s.async = true;
  s.charset = "utf-8";
  s.onload = onLoad;
  document.body.appendChild(s);
}

export default function XPosts() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language;
  const isArabic = lang?.startsWith("ar");

  const tweetIds = xPosts.map(getTweetId).filter(Boolean);

  useEffect(() => {
    loadTwitterScript(() => {
      window.twttr.widgets.load();
    });
  }, []);

  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  }, [isArabic]);

  return (
    // 1. Zebra Striping
    <section className="py-20 lg:py-28 bg-slate-50 relative" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
   
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-[#FF7043] font-extrabold text-3xl md:text-4xl font-sans tracking-tight">
            {t("xPosts.title")}
          </h2>
        </div>

        {/* Twitter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tweetIds.map((id) => (
            // 2. Upgraded Wrapper Card
            <div
              key={id}
              className="bg-white rounded-[2rem] p-4 sm:p-5 shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-center overflow-hidden"
            >
              {/* 3. Added data-theme to ensure the tweet matches your light theme */}
              <blockquote 
                className="twitter-tweet w-full mx-auto" 
                data-dnt="true"
                data-theme="light"
              >
                <a href={`https://twitter.com/DSC_KAU/status/${id}`}>
                  {t("xPosts.viewPost")}
                </a>
              </blockquote>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}