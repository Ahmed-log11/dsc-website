// src/components/Herosection.jsx
import { useTranslation } from "react-i18next";

export default function Herosection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="h-screen bg-slate-900 text-white flex items-center justify-center"
    >
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-sm md:text-base text-white/70">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
