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
    <section className="py-16 bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#FF7043] mb-12">
          {t("xPosts.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tweetIds.map((id) => (
            <div
              key={id}
             className="bg-white shadow-md rounded-xl px-4 pt-2 pb-0 hover:shadow-lg transition-shadow"

            >
              <blockquote className="twitter-tweet" data-dnt="true">
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
