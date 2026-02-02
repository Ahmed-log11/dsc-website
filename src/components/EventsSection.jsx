import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import orientationImg from "../assets/orientation.jpeg";
import roboconImg from "../assets/robobcon.jpg";
import edaImg from "../assets/EDA.jpg";

export default function EventsSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [tab, setTab] = useState("upcoming"); // "upcoming" | "previous"

  // ✅ Keep previous events active (you still use it)
  const previousEvents = useMemo(
  () => [
    {
      id: "prev1",
      image: orientationImg,
      titleKey: "events.previous.items.prev1.title",
      descKey: "events.previous.items.prev1.desc",
    },
    {
      id: "prev2",
      image: roboconImg,
      titleKey: "events.previous.items.prev2.title",
      descKey: "events.previous.items.prev2.desc",
    },
    {
      id: "prev3",
      image: edaImg,
      titleKey: "events.previous.items.prev3.title",
      descKey: "events.previous.items.prev3.desc",
    },
  ],
  []
);


  const activeTabClass =
    "bg-[#35C6A8] text-white shadow-sm border border-[#35C6A8]";
  const inactiveTabClass =
    "bg-white text-[#0C3A60] border border-[#0C3A60]/15 hover:border-[#35C6A8] hover:text-[#35C6A8]";

  return (
    <section id="events" className="bg-white py-12 sm:py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={`${isArabic ? "text-right" : "text-left"} mb-8 sm:mb-10`}
        >
          <h2 className="text-[#ff7043] font-bold text-2xl sm:text-3xl lg:text-3xl text-center">
            {t("events.title")}
          </h2>

          <p className="mt-3 text-[#0C3A60]/90 text-sm sm:text-base max-w-2xl mx-auto text-center">
            {t("events.subtitle")}
          </p>

          {/* Tabs */}
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setTab("upcoming")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === "upcoming" ? activeTabClass : inactiveTabClass
              }`}
            >
              {t("events.tabs.upcoming")}
            </button>

            <button
              type="button"
              onClick={() => setTab("previous")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === "previous" ? activeTabClass : inactiveTabClass
              }`}
            >
              {t("events.tabs.previous")}
            </button>
          </div>
        </div>

        {/* Content */}
        {tab === "upcoming" ? (
    <div className="flex justify-center py-14 sm:py-16">
  <div
    dir={isArabic ? "rtl" : "ltr"}
    className="w-full max-w-2xl rounded-2xl border bg-white shadow-sm px-6 py-8 sm:px-8 sm:py-10 text-center"

    style={{ borderColor: "rgba(12, 58, 96, 0.18)" }} // #0C3A60
  >
    {/* Title row */}
   <div className="flex flex-col items-center gap-2 text-center">

  <h3
    className="font-bold text-xl sm:text-2xl text-center"
    style={{ color: "#0C3A60" }}
  >
    {t("events.stayTunedTitle")}
  </h3>

</div>

{/* Divider */}
<div
  className="mt-4 h-[2px] w-16 rounded-full mx-auto"
  style={{ backgroundColor: "rgba(12, 58, 96, 0.35)" }}
/>

{/* Description */}
<p className="mt-4 text-[#0C3A60]/80 leading-7 sm:leading-8 text-center">
  {t("events.stayTunedDesc")}
</p>
</div>
</div>

        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {previousEvents.map((ev) => (
              <div
                key={ev.id}
                className="rounded-2xl border border-[#0C3A60]/10 overflow-hidden bg-white shadow-sm"
              >
                {/* Image */}
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={ev.image}
                    alt={t(ev.titleKey)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div
                  dir={isArabic ? "rtl" : "ltr"}
                  className={`p-5 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <h3 className="text-[#0C3A60] font-bold text-lg">
                    {t(ev.titleKey)}
                  </h3>

                  <p className="mt-2 text-[#0C3A60]/80 text-sm leading-7">
                    {t(ev.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
