import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function EventsSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [tab, setTab] = useState("upcoming"); // "upcoming" | "previous"

  // ====== SAMPLE DATA (edit freely) ======
  // Tip: keep the text in i18n if you want full translation control.
  // Here we store only keys + links + images.
  const upcomingEvents = useMemo(
    () => [
      {
        id: "event1",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        titleKey: "events.upcoming.items.event1.title",
        descKey: "events.upcoming.items.event1.desc",
        dateKey: "events.upcoming.items.event1.date",
        timeKey: "events.upcoming.items.event1.time",
        locationKey: "events.upcoming.items.event1.location",
        extraKey: "events.upcoming.items.event1.extra",
        formUrl: "https://forms.gle/your-google-form-link",
      },
      {
        id: "event2",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        titleKey: "events.upcoming.items.event2.title",
        descKey: "events.upcoming.items.event2.desc",
        dateKey: "events.upcoming.items.event2.date",
        timeKey: "events.upcoming.items.event2.time",
        locationKey: "events.upcoming.items.event2.location",
        extraKey: "events.upcoming.items.event2.extra",
        formUrl: "https://forms.gle/your-google-form-link",
      },
    ],
    []
  );

  const previousEvents = useMemo(
    () => [
      {
        id: "prev1",
        image:
          "https://images.unsplash.com/photo-1515165562835-c4c25a1f5b74?auto=format&fit=crop&w=1200&q=80",
        titleKey: "events.previous.items.prev1.title",
        descKey: "events.previous.items.prev1.desc",
      },
      {
        id: "prev2",
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
        titleKey: "events.previous.items.prev2.title",
        descKey: "events.previous.items.prev2.desc",
      },
      {
        id: "prev3",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
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
    <section id="events" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={`${isArabic ? "text-right" : "text-left"} mb-8 sm:mb-10`}
        >
          <h2 className="text-[#35C6A8] font-bold text-2xl sm:text-3xl lg:text-3xl">
            {t("events.title")}
          </h2>
          <p className="mt-3 text-[#0C3A60]/90 text-sm sm:text-base max-w-2xl">
            {t("events.subtitle")}
          </p>

          {/* Tabs */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="rounded-2xl border border-[#0C3A60]/10 overflow-hidden bg-white shadow-sm"
              >
                {/* Image */}
                <div className="h-44 sm:h-52 w-full overflow-hidden">
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
                  className={`p-5 sm:p-6 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <h3 className="text-[#0C3A60] font-bold text-lg sm:text-xl">
                    {t(ev.titleKey)}
                  </h3>

                  <p className="mt-2 text-[#0C3A60]/80 text-sm sm:text-base leading-7">
                    {t(ev.descKey)}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#0C3A60]/85">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#35C6A8]">
                        {t("events.meta.date")}:
                      </span>
                      <span>{t(ev.dateKey)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#35C6A8]">
                        {t("events.meta.time")}:
                      </span>
                      <span>{t(ev.timeKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <span className="font-semibold text-[#35C6A8]">
                        {t("events.meta.location")}:
                      </span>
                      <span>{t(ev.locationKey)}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <span className="font-semibold text-[#35C6A8]">
                        {t("events.meta.info")}:
                      </span>
                      <span>{t(ev.extraKey)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-3 flex-wrap">
                    <a
                      href={ev.formUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full
                                 bg-[#35C6A8] text-white font-semibold text-sm
                                 hover:opacity-90 transition"
                    >
                      {t("events.actions.register")}
                    </a>

                    <span className="text-xs text-[#0C3A60]/60">
                      {t("events.actions.registerHint")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
