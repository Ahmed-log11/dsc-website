//src/components/Departments.jsx
import { useTranslation } from "react-i18next";
import techIcon from "../assets/icons/techIcon.svg";
import mediaIcon from "../assets/icons/mediaIcon.svg";
import prIcon from "../assets/icons/prIcon.svg";

 export default function Departments() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";


  return(

     <section className="py-16 bg-gray-50">

        {/* title */}
        <h2 
        className="text-center text-2xl md:text-3xl font-bold text-orange-500 mb-12 ">
        {t("departments.title")}
        </h2>
        
        {/* Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            
            {/* tech section */}
                <div 
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                    <img 
                    src = {techIcon}
                    alt ="Tech Section "
                    className="w-12 h-12 mx-auto mb-4">
                    </img>

                    <h3 
                    className="text-xl font-semibold text-teal-600 mb-4" > 
                    {t("departments.TechTitle")}
                    </h3>
                    
                    <p
                    className="text-gray-600 text-sm leading-relaxed">
                        {t("departments.TechDescription")}
                    </p>
                </div>
            
            {/* pr section */}
                <div
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                    <img
                    src = {prIcon}
                    alt ="Public Relations & Activities Section"
                    className="w-12 h-12 mx-auto mb-4">
                    </img>

                    <h3
                    className="text-xl font-semibold text-teal-600 mb-4">
                    {t("departments.prTitle")}
                    </h3>

                    <p
                    className="text-gray-600 text-sm leading-relaxed">
                    {t("departments.prDescription")}
                    </p>
                </div>
            
            {/* m&m section */}
                <div
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                    <img
                    src ={mediaIcon}
                    alt="Media & Marketing Section"
                    className="w-12 h-12 mx-auto mb-4">
                    </img>

                    <h3
                    className="text-xl font-semibold text-teal-600 mb-4">
                    {t("departments.mediaTitle")}
                    </h3>

                    <p
                    className="text-gray-600 text-sm leading-relaxed">
                    {t("departments.mediaDescription")}
                    </p>
                </div>
            
        </div>
     </section>
  );
}; 



