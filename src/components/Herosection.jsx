import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import LogoInteractive from "./LogoInteractive";

// ====== Moving Data Text Content ======

const dataTextColumn = [
  "SELECT * FROM insights",
  "import tensorflow as tf",
  "علم البيانات KAU",
  "EXPLORATORY DATA ANALYSIS",
  "import pandas as pd",
  "df.dropna()",
  "MACHINE LEARNING",
  "model.fit(X_train)",
  "DROP DATABASE legacy",
  "KAU DATA SCIENCE CLUB",
  "تعلّم الالة",
  "data.describe()",
  "Numpy & Matplotlib",
  "Cluster Analysis",
  "Data Engineering",
  "Big Data Visualization",
  "100 Men vs 1 Gorilla"
].join(" • ") + " • "; // Add a separator for the marquee loop

export default function Herosection() {
  const { t, i18n } = useTranslation();

  // ====== ACCENT STATE (logo hover) ======
  const [accentMode, setAccentMode] = useState("orange");

  // Re-tuned for Light Mode: Same base colors, but for the "watercolor" effect.
  const ACCENTS = useMemo(
    () => ({
      blue: "#0c3a60",
      green: "#35c6a8",
      orange: "#ff7043",
    }),
    []
  );

  // ====== TYPEWRITER ======
  const fullText = t("hero.title") || "";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
    if (!fullText) return;

    // INCREASE THESE NUMBERS:
    // 150ms for typing (slower and more rhythmic)
    // 80ms for deleting (slow enough to follow)
    const speed = isDeleting ? 80 :100; 

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.slice(0, displayedText.length + 1);
        setDisplayedText(next);
        
        // This 2000ms is how long it "rests" at the end before deleting
        if (next === fullText) setTimeout(() => setIsDeleting(true), 2000); 
      } else {
        const next = fullText.slice(0, displayedText.length - 1);
        setDisplayedText(next);
        if (next === "") setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullText]);
  // ====== LAST 3 WORDS ======
  let rest = fullText;
  let last = "";
  const words = fullText.trim().split(/\s+/);

  if (words.length >= 3) {
    last = words.slice(-3).join(" ");
    rest = fullText.slice(0, fullText.lastIndexOf(last)).trimEnd();
  }

  const visibleRest = displayedText.slice(0, rest.length);
  const visibleLast = displayedText.slice(rest.length);

  // ====== LANGUAGE / LAYOUT ======
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <section
      id="home"
      // Change from text-white to text-slate-900 for Light Mode.
      className="relative min-h-screen text-slate-900 overflow-hidden font-sans"
      style={{ "--accent": ACCENTS[accentMode] }}
    >
      {/* ====== NEW BACKGROUND LAYERS ====== */}
      {/* 1. Rich Light Tech Slate/White Base */}
      <div className="absolute inset-0 bg-[#F9FAFB] transition-colors duration-700">
{/* 2. Flawless Horizontal Infinite Data Streams (Single Lines) */}
        <div 
          className="absolute inset-0 z-0 flex flex-col justify-evenly py-6 select-none pointer-events-none opacity-[0.35] overflow-hidden"
          dir="ltr"
        >
          <style>{`
            /* Moves left (For Arabic) */
            @keyframes scrollLeftAnim {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* Moves right (For English) */
            @keyframes scrollRightAnim {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `}</style>
          
          {/* We generate 6 single, evenly spaced lines instead of pairs */}
          {[1, 2, 3, 4].map((lineIdx) => (
            <div key={lineIdx} className="relative flex overflow-hidden w-full">
              
              {/* The moving track */}
              <div
                className="flex whitespace-nowrap transition-colors duration-1000"
                style={{
                  color: 'color-mix(in srgb, var(--accent) 30%, #cbd5e1)',
                  width: 'max-content',
                  animation: `${isArabic ? 'scrollLeftAnim' : 'scrollRightAnim'} 250s linear infinite`,
                  transform: 'translateZ(0)'
                }}
              >
                {/* BLOCK 1 */}
                <div className="flex-none px-2 text-[12px] md:text-[13px] font-mono tracking-widest font-bold uppercase">
                  {dataTextColumn.repeat(6)}
                </div>
                
                {/* BLOCK 2 (Exact Duplicate for Infinite Loop) */}
                <div className="flex-none px-2 text-[12px] md:text-[13px] font-mono tracking-widest font-bold uppercase">
                  {dataTextColumn.repeat(6)}
                </div>
              </div>

            </div>
          ))}
        </div>
        {/* 3. Re-tuned dot grid texture (darker) */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none z-[1]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 0.5px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* 4. Enhanced Soft Ambient "Watercolor" Bloom (Reacts to Hover) */}

        <div
          className="absolute inset-0 opacity-15 blur-[120px] transition-all duration-1000 ease-out pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 70%)",
          }}
        />
     </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 transition-all ${
              isArabic ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {/* Logo */}
            <div className="w-[200px] md:w-[300px] relative">
              <LogoInteractive
                onHover={setAccentMode}
                onLeave={() => setAccentMode("orange")}
              />
            </div>

            {/* Typewriter + micro accent */}
            <div
              className={`relative max-w-xl ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {/* Micro-accent border */}
              <span
                className={`absolute top-1 bottom-1 w-[2px] opacity-60 transition-colors duration-500 ${
                  isArabic ? "right-[-12px]" : "left-[-12px]"
                }`}
                style={{ backgroundColor: "var(--accent)" }}
              />

              <h1 className="text-xl md:text-3xl font-bold leading-snug">
                {visibleRest}
                <span className="transition-colors duration-500" style={{ color: "var(--accent)" }}>
                  {visibleLast}
                </span>
                <span
                  className={`border-r-2 animate-pulse transition-colors duration-500 ${
                    isArabic ? "mr-1" : "ml-1"
                  }`}
                  style={{ borderColor: "var(--accent)" }}
                >
                  &nbsp;
                </span>
              </h1>

              <p className="mt-3 text-sm md:text-base text-slate-700">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade into white section */}
    
  <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 C360,150 900,30 1440,90 L1440,140 L0,140 Z"
          fill="#F8FAFC" 
          className="transition-all duration-700"
        />
      </svg>
    </section>
  );
}