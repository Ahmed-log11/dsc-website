// src/App.jsx
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import WhyJoinUs from "./components/WhyJoinUs";
import AboutSection from "./components/AboutSection";
import Departments from "./components/Departments";
import EventsSection from "./components/EventsSection";
import XPosts from "./components/XPosts";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero (Has its own background) */}
      <Herosection />
      
      {/* 2. Soft Gray Background */}
      <div className="bg-slate-50 border-b border-slate-100">
        <WhyJoinUs /> 
      </div>

      {/* 3. Pure White Background */}
      <div className="bg-white">
        <AboutSection />
      </div>
      
      {/* 4. Soft Gray Background (Makes the department cards POP) */}
      <div className="bg-slate-50 border-t border-slate-100">
        <Departments />
      </div>

      {/* 5. Pure White Background */}
      <div className="bg-white">
        <EventsSection />
      </div>

      {/* 6. Soft Gray Background (Makes the X cards POP) */}
      <div className="bg-slate-50 border-t border-slate-100">
        <XPosts />
      </div>

      <FooterSection />
    </div>
  );
}