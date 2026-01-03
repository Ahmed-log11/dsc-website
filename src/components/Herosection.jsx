import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";

export default function Herosection() {
  const { t } = useTranslation();
  const fullText = t("hero.title") || "";

  // ============ TYPEWRITER STATE ============
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!fullText) return;

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.slice(0, displayedText.length + 1);
        setDisplayedText(next);

        if (next === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const next = fullText.slice(0, displayedText.length - 1);
        setDisplayedText(next);

        if (next === "") {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullText]);

  // ============ COLOR LAST 3 WORDS ============
  let restFull = fullText;
  let lastFull = "";

  const words = fullText.trim().split(/\s+/);
  if (words.length >= 3) {
    lastFull = words.slice(-3).join(" ");
    const cutIndex = fullText.lastIndexOf(lastFull);
    restFull = fullText.slice(0, cutIndex).trimEnd();
  }

  const visible = displayedText;
  const visibleRest = visible.slice(
    0,
    Math.min(visible.length, restFull.length)
  );
  const visibleLast = visible.slice(visibleRest.length);

  return (
    <section
      id="home"
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Data Science Club"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-xl md:text-3xl font-bold leading-snug mb-4">
            {visibleRest}
            {visibleLast && (
              <span className="text-orange-400">{visibleLast}</span>
            )}
            <span className="ml-1 border-r-2 border-orange-400 animate-pulse">
              &nbsp;
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/70">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,120
            C360,180 900,40 1440,110
            L1440,160
            L0,160
            Z
          "
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
