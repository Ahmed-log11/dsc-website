import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import LogoInteractive from "./LogoInteractive";

export default function Herosection() {
  const { t, i18n } = useTranslation();

  // ====== ACCENT STATE (logo hover) ======
  const [accentMode, setAccentMode] = useState("orange");

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

    const speed = isDeleting ? 45 : 90;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.slice(0, displayedText.length + 1);
        setDisplayedText(next);
        if (next === fullText) setTimeout(() => setIsDeleting(true), 1000);
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
  const toggleLang = () =>
    i18n.changeLanguage(isArabic ? "en" : "ar");

  return (
    <section
      id="home"
      className="relative min-h-screen text-white overflow-hidden"
      style={{ "--accent": ACCENTS[accentMode] }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        {/* Accent glow */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(800px circle at center, color-mix(in srgb, var(--accent) 30%, transparent), transparent 60%)",
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
                className={`absolute top-1 bottom-1 w-[2px] opacity-60 ${
                  isArabic ? "right-[-12px]" : "left-[-12px]"
                }`}
                style={{ backgroundColor: "var(--accent)" }}
              />

              <h1 className="text-xl md:text-3xl font-bold leading-snug">
                {visibleRest}
                <span style={{ color: "var(--accent)" }}>
                  {visibleLast}
                </span>
                <span
                  className={`border-r-2 animate-pulse ${
                    isArabic ? "mr-1" : "ml-1"
                  }`}
                  style={{ borderColor: "var(--accent)" }}
                >
                  &nbsp;
                </span>
              </h1>

              <p className="mt-3 text-sm md:text-base text-white/70">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom fade into white section */}

{/* Curve transition */}
<svg
  className="pointer-events-none absolute bottom-0 left-0 w-full"
  viewBox="0 0 1440 140"
  preserveAspectRatio="none"
>
  <path
    d="M0,90 C360,150 900,30 1440,90 L1440,140 L0,140 Z"
    fill="#ffffff"
  />
</svg>

    </section>
  );
}
