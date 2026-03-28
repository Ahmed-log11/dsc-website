import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SimpleNavbar from "../components/SimpleNavbar"; 
import activitiesData from "../data/activitiesData.json"
import EdaImg from "../assets/Eda.jpg";
import planningImg from "../assets/planning.jpg";
import AIbootcampImg from "../assets/AIbootcamp.jpg";
import IntroDsImg from "../assets/IntroDs.jpg";
import OrientationDayImg from "../assets/OrientationDay.jpg";
import DsDayImg from "../assets/DsDay.jpg";
import EidImg from "../assets/Eid.jpg";
import RoboconImg from "../assets/Robocon.jpg";
import ChampionsSeriesImg from "../assets/ChampionsSeries.jpg";
import TaleImg from "../assets/Tale.jpg";
const imageMap = {
  "Eda": EdaImg,
  "planning": planningImg,
  "AIbootcamp": AIbootcampImg,
  "IntroDs": IntroDsImg,
  "OrientationDay": OrientationDayImg,
  "DsDay": DsDayImg,
  "Eid": EidImg,
  "Robocon": RoboconImg,
  "ChampionsSeries": ChampionsSeriesImg,
  "Tale": TaleImg
};

export default function ActivitiesPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  
  // States: "all", "workshops", or "community"
  const [filter, setFilter] = useState("all"); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // BULLETPROOF FILTER: Trims hidden spaces from your spreadsheet categories
  const filteredActivities = activitiesData.filter((ev) => {
    const itemCat = (ev["Category"] || "").trim().toLowerCase();
    return filter === "all" || itemCat === filter;
  });
  const activeTabClass = "bg-[#35C6A8] text-white shadow-md border-[#35C6A8]";
  const inactiveTabClass = "bg-white text-slate-500 hover:bg-slate-50 border-transparent";

  return (
    <>
      <SimpleNavbar />
      
      <section className="bg-slate-50 min-h-screen py-12 lg:py-20" dir={isArabic ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 mt-8">
            <h1 className="text-[#0C3A60] font-bold text-4xl lg:text-5xl font-sans mb-4">
              {isArabic ? "جميع الأنشطة" : "All Activities"}
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-sans">
              {isArabic 
                ? "تصفح جميع ورش العمل، المعسكرات، واللقاءات المجتمعية التي نظمها النادي."
                : "Browse all workshops, bootcamps, and community gatherings hosted by the club."}
            </p>

            {/* Filter Tabs */}
            <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
              <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex gap-1 font-sans">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${filter === "all" ? activeTabClass : inactiveTabClass}`}
                >
                  {isArabic ? "الكل" : "All"}
                </button>
                <button
                  onClick={() => setFilter("workshops")}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${filter === "workshops" ? activeTabClass : inactiveTabClass}`}
                >
                  {isArabic ? "ورش العمل" : "Workshops"}
                </button>
                <button
                  onClick={() => setFilter("community")}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${filter === "community" ? activeTabClass : inactiveTabClass}`}
                >
                  {isArabic ? "الفعاليات" : "Events"}
                </button>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredActivities.map((ev, index) => {
              const cleanCategory = (ev["Category"] || "").trim().toLowerCase();

              return (
                <div
                  key={index} 
                  className="group flex flex-col h-full rounded-3xl border border-slate-100 overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Image Section */}
               {/* Image Section */}
                  {/* 1. Changed h-56 to h-72 to make the box taller for your flyers */}
                  {/* 2. Set the background to pure bg-white so it blends with your image backgrounds */}
                  <div className="h-62 w-full overflow-hidden relative bg-white border-b border-slate-50">
                    
                    <img
                      src={imageMap[ev.image] || "https://placehold.co/800x600/0C3A60/FFFFFF?text=Activity+Image"} 
                      alt={isArabic ? ev["Name (AR)"] : ev["Name (EN)"]}
                      // 3. Changed back to object-contain so nothing is EVER chopped off
                      // 4. Added a tiny p-4 padding so the flyer doesn't touch the absolute edges
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-in-out z-0"
                      loading="lazy"
                    />
                    
                    {/* Category Badge overlay */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-white/95 backdrop-blur-sm text-[#0C3A60] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                        {cleanCategory === "workshops" 
                          ? (isArabic ? "ورشة عمل" : "Workshop") 
                          : (isArabic ? "فعالية مجتمعية" : "Community Event")}
                      </span>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    
                    {/* Date */}
                    {ev.date && (
                      <span className="text-[#35C6A8] text-sm font-bold mb-3 font-sans">
                        {ev.date}
                      </span>
                    )}

                    {/* Title */}
                  <h3 className="text-[#0C3A60] font-bold text-xl mb-3 line-clamp-2 leading-relaxed">
                      {isArabic ? ev["Name (AR)"] : ev["Name (EN)"]}
                    </h3>

                    {/* Contributors */}
                    {ev.contributors && (
                      <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm font-sans bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <svg className="w-4 h-4 shrink-0 text-[#35C6A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="truncate">{ev.contributors}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed font-sans flex-1 mt-auto pt-2 border-t border-slate-50">
                      {isArabic ? ev["Description (AR)"] : ev["Description (EN)"]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}