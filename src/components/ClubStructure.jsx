import { useTranslation } from "react-i18next";
import members from "../data/ClubMembers.json";
import MemberCard from "./MemberCard";
import { useEffect } from "react";
import SimpleNavbar from "./SimpleNavbar";
export default function ClubStructure() {

  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      key: "leaders",
      title: isArabic ? "القادة" : "Leaders",
      gradient: "linear-gradient(105deg, #FF7043 0%, #154A78 45%, #35C6A8 100%)",
    },
    {
      key: "tech",
      title: isArabic ? "قسم التقنية" : "Tech",
      color: "#35C6A8",
    },
    {
      key: "Media & Marketing",
      title: isArabic ? "قسم التسويق و الإعلام" : "Media & Marketing",
      color: "#FF7043",
    },
    {
      key: "PR & Activities",
      title: isArabic ? "قسم العلاقات والأنشطة" : "PR & Activities",
      color: "#0C3A60",
    },
  ];

  return (
    <>
    <SimpleNavbar />
    <section
      className="bg-slate-50 border-t border-slate-100 min-h-screen py-20 pb-24 lg:py-28"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-[#0C3A60] font-bold text-3xl md:text-4xl lg:text-5xl font-sans">
            {isArabic ? "تعرف على فريقنا" : "Meet the Team"}
          </h1>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {sections.map((section) => {
            const sectionMembers = members.filter(
              (member) => member.section === section.key
            );

            return (
              <div key={section.key}>
                {/* Section Title */}
                <div className="mb-8 sm:mb-10">
                  <h2 className="text-[#0C3A60] font-bold text-2xl md:text-3xl font-sans">
                    {section.title}
                  </h2>

                  {/* Colored underline */}
                  <div
                    className="mt-3 h-[4px] w-24 rounded-full"
                    style={{
                      background: section.gradient
                        ? section.gradient
                        : section.color,
                    }}
                  />
                </div>

                {/* Mobile Scroll */}
                <div className="-mx-4 sm:mx-0">
                  <div className="sm:hidden overflow-x-auto overflow-y-hidden px-4 pb-4">
                    <div className="flex flex-nowrap gap-4 w-max">
                      {sectionMembers.map((member) => (
                        <MemberCard key={member.id} member={member} />
                      ))}
                    </div>
                  </div>

                  {/* Desktop Grid */}
                  <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {sectionMembers.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
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