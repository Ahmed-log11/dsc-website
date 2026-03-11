import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import orientationImg from "../assets/orientation.jpeg";
import roboconImg from "../assets/robobcon.jpg";
import edaImg from "../assets/EDA.jpg";

export default function EventsSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const [tab, setTab] = useState("upcoming"); // "upcoming" | "previous"

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

  // Upgraded Tab Classes for a smoother, pill-like toggle
  const activeTabClass = "bg-[#35C6A8] text-white shadow-md";
  const inactiveTabClass = "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700";

  return (
    <section id="events" className="bg-white py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-[#FF7043] font-extrabold text-3xl md:text-4xl font-sans tracking-tight">
            {t("events.title")}
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            {t("events.subtitle")}
          </p>

          {/* Segmented Control Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            <div className="bg-slate-50 p-1.5 rounded-full border border-slate-100 flex gap-1">
              <button
                type="button"
                onClick={() => setTab("upcoming")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold font-sans transition-all duration-300 ${
                  tab === "upcoming" ? activeTabClass : inactiveTabClass
                }`}
              >
                {t("events.tabs.upcoming")}
              </button>
              <button
                type="button"
                onClick={() => setTab("previous")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold font-sans transition-all duration-300 ${
                  tab === "previous" ? activeTabClass : inactiveTabClass
                }`}
              >
                {t("events.tabs.previous")}
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {tab === "upcoming" ? (
          
          /* Upgraded "Stay Tuned" Empty State */
          <div className="flex justify-center py-10">
            <div className="w-full max-w-2xl rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-8 py-14 flex flex-col items-center text-center transition-all hover:border-[#35C6A8]/40 hover:bg-slate-50">
              {/* Calendar/Announcement Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#0C3A60]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="font-extrabold text-2xl text-[#0C3A60] font-sans mb-3">
                {t("events.stayTunedTitle")}
              </h3>
              <p className="text-slate-500 leading-relaxed font-sans max-w-md">
                {t("events.stayTunedDesc")}
              </p>
            </div>
          </div>

        ) : (
          
          /* Upgraded Previous Event Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousEvents.map((ev) => (
              <div
                key={ev.id}
                className="group flex flex-col rounded-3xl border border-slate-100 overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Container with Hover Zoom */}
                <div className="h-56 w-full overflow-hidden relative bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C3A60]/40 to-transparent z-10" />
                  <img
                    src={ev.image}
                    alt={t(ev.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out z-0"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div
                  dir={isArabic ? "rtl" : "ltr"}
                  className="p-8 flex-1 flex flex-col"
                >
                  <h3 className="text-[#0C3A60] font-bold text-xl font-sans mb-3 line-clamp-2">
                    {t(ev.titleKey)}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans flex-1">
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