import LeadersGradient from "../assets/Leaders_gradient.png";
import TechGradient from "../assets/Tech_gradient.png";
import MarketingGradient from "../assets/Marketing_gradient.png";
import PRGradient from "../assets/PR_gradient.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const themes = {
  leaders: {
    bannerImage: LeadersGradient,
    borderGradient:
      "linear-gradient(105deg, #FF7043 0%, #154A78 45%, #35C6A8 100%)",
    ringGradient:
      "linear-gradient(105deg, #FF7043 0%, #154A78 45%, #35C6A8 100%)",
    roleColor: "#154A78",
  },

  tech: {
    bannerImage: TechGradient,
    borderColor: "#35C6A8",
    ringColor: "#35C6A8",
    roleColor: "#35C6A8",
  },

  "Media & Marketing": {
    bannerImage: MarketingGradient,
    borderColor: "#FF7043",
    ringColor: "#FF7043",
    roleColor: "#FF7043",
  },

  "PR & Activities": {
    bannerImage: PRGradient,
    borderColor: "#0C3A60",
    ringColor: "#0C3A60",
    roleColor: "#0C3A60",
  },
};

const isValid = (value) => {
  return value && value !== "None" && value !== "none" && value !== "";
};

export default function MemberCard({ member }) {
  const theme = themes[member.section] || themes.tech;
  const isLeader = member.section === "leaders";

  const hasTwitter = isValid(member.twitter);
  const hasLinkedin = isValid(member.linkedin);
  const hasFunFact = isValid(member.funFact);

  const content = (
    <div
      className={`relative flex h-[420px] sm:h-[460px] flex-col overflow-hidden bg-white ${
        isLeader ? "rounded-[26px]" : "rounded-[28px] border-[2px]"
      }`}
      style={
        isLeader
          ? undefined
          : {
              borderColor: theme.borderColor,
            }
      }
    >
      {/* Banner */}
      <div className="relative h-[130px] sm:h-[150px]">
        {/* Glow */}
        <div className="absolute left-4 right-4 top-4 h-[100px] sm:h-[110px] rounded-[24px] overflow-hidden">
          <img
            src={theme.bannerImage}
            alt=""
            className="h-full w-full object-cover scale-[1.05] blur-[18px] opacity-40"
          />
        </div>

        {/* Main Banner */}
        <div className="absolute left-4 right-4 top-4 h-[100px] sm:h-[110px] rounded-[24px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] sm:shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
          <img
            src={theme.bannerImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Avatar */}
      <div className="relative -mt-[72px] sm:-mt-[82px] z-10 flex justify-center">
        <div
          className="rounded-full p-[3px]"
          style={{
            background: isLeader ? theme.ringGradient : theme.ringColor,
          }}
        >
          <div className="h-[108px] w-[108px] sm:h-[120px] sm:w-[120px] overflow-hidden rounded-full bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="h-[105%] w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-5 sm:px-6 pt-5 text-center">

        {/* Name */}
        <h3 className="text-[1.15rem] sm:text-[1.2rem] font-bold text-[#0C3A60]">
          {member.name}
        </h3>

        {/* Role */}
        <p
          className="mt-2 text-[1rem] font-semibold"
          style={{ color: theme.roleColor }}
        >
          {member.role}
        </p>

        {/* Fun Fact (Scrollable) */}
        {hasFunFact && (
          <div className="mt-3 w-full px-2 max-h-[70px] overflow-y-auto">
            <p
              className="text-[0.9rem] leading-relaxed text-slate-500"
              style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
            >
              {member.funFact}
            </p>
          </div>
        )}

        {/* Social Icons */}
        {(hasTwitter || hasLinkedin) && (
          <div className="mt-auto flex items-center gap-6 pt-4 pb-4 text-[18px]">

            {hasTwitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C3A60] transition-colors duration-300 hover:text-[#FF7043]"
                aria-label={`${member.name} X`}
              >
                <FaXTwitter />
              </a>
            )}

            {hasLinkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C3A60] transition-colors duration-300 hover:text-[#FF7043]"
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedinIn />
              </a>
            )}

          </div>
        )}

      </div>
    </div>
  );

  if (isLeader) {
    return (
      <div
        className="w-[250px] min-w-[250px] flex-none rounded-[28px] p-[2px] shadow-none sm:w-full sm:min-w-0 sm:shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
        style={{ background: theme.borderGradient }}
      >
        {content}
      </div>
    );
  }

  return (
    <div className="w-[250px] min-w-[250px] flex-none rounded-[28px] shadow-none sm:w-full sm:min-w-0 sm:shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
      {content}
    </div>
  );
}