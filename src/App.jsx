import { Routes, Route } from "react-router-dom";
import ClubStructure from "./components/ClubStructure";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import WhyJoinUs from "./components/WhyJoinUs";
import AboutSection from "./components/AboutSection";
import Departments from "./components/Departments";
import EventsSection from "./components/EventsSection";
import XPosts from "./components/XPosts";
import FooterSection from "./components/FooterSection";

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
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/club-structure" element={<ClubStructure />} />
      </Routes>

      <FooterSection />
    </div>
  );
}