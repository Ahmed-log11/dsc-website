// 1. Add useLocation to your imports
import { Routes, Route, useLocation } from "react-router-dom";
import ClubStructure from "./components/ClubStructure";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import WhyJoinUs from "./components/WhyJoinUs";
import AboutSection from "./components/AboutSection";
import Departments from "./components/Departments";
import EventsSection from "./components/EventsSection";
import XPosts from "./components/XPosts";
import FooterSection from "./components/FooterSection";
import ActivitiesPage from "./components/ActivitiesPage";

function HomePage() {
  return (
    <>
      <Herosection />

      <div className="bg-slate-50 border-b border-slate-100">
        <WhyJoinUs />
      </div>

      <div className="bg-white">
        <AboutSection />
      </div>

      <div className="bg-slate-50 border-t border-slate-100">
        <Departments />
      </div>

      <div className="bg-white">
        <EventsSection />
      </div>

      <div className="bg-slate-50 border-t border-slate-100">
        <XPosts />
      </div>
    </>
  );
}

export default function App() {
  // 2. Ask React exactly what URL we are currently on
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  // 3. Create a rule: Are we on the activities or club-structure page? 
  const hideMainNavbar = currentPath.includes("/activities") || currentPath.includes("/club-structure");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      
      {/* 4. Only show the main Navbar if hideMainNavbar is FALSE */}
      {!hideMainNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/club-structure" element={<ClubStructure />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>

      <FooterSection />
    </div>
  );
}