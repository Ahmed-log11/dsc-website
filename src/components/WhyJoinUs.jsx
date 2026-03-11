import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Import photos from assets
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

export default function WhyJoinUs() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  
  const [activeIndex, setActiveIndex] = useState(0);

  // Slides array using translation keys
  const slides = [
    {
      id: 0,
      title: t("whyJoinUs.slides.slide1.title"),
      desc: t("whyJoinUs.slides.slide1.desc"),
      img: slide1, 
    },
    {
      id: 1,
      title: t("whyJoinUs.slides.slide2.title"),
      desc: t("whyJoinUs.slides.slide2.desc"),
      img: slide2,
    },
    {
      id: 2,
      title: t("whyJoinUs.slides.slide3.title"),
      desc: t("whyJoinUs.slides.slide3.desc"),
      img: slide3,
    },
    {
      id: 3,
      title: t("whyJoinUs.slides.slide4.title"),
      desc: t("whyJoinUs.slides.slide4.desc"),
      img: slide4,
    }
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // ID matches the Navbar link: #why-join-us
    <section id="why-join-us" className="relative w-full pb-24 pt-8 md:pt-12 overflow-hidden">
      <div 
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20" 
        dir={isArabic ? "rtl" : "ltr"}
      >
        
        {/* Left Side: Dynamic Text & Controls */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-widest text-[#FF7043] uppercase mb-8 md:mb-12">
            {t("whyJoinUs.tagline")}
          </h2>
          
          {/* Text Container */}
          <div className="relative h-[220px] md:h-[240px] w-full">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5 md:mb-6">
                  {slide.title}
                </h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md">
                  {slide.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-3 mt-4 md:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  activeIndex === index ? "w-10 md:w-12 bg-[#35C6A8]" : "w-3 md:w-4 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Registration Status Button */}
          <div className="mt-10 md:mt-12 flex flex-col items-start">
            <button 
              disabled
              className="px-8 py-3.5 rounded-full font-bold tracking-wide bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed flex items-center gap-3"
            >
              <svg className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {t("whyJoinUs.joinButton")}
            </button>
            <p className="mt-3 text-sm text-slate-500 font-medium px-2">
              {t("whyJoinUs.joinHint")}
            </p>
          </div>
        </div>

        {/* Right Side: Cross-fading Images */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#35C6A8]/10 to-[#0C3A60]/10 z-10" />
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover z-0" 
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}