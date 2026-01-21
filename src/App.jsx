// src/App.jsx
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Departments from "./components/Departments";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import XPosts from "./components/XPosts";
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Herosection />
      <AboutSection />
      <Departments/>
      <XPosts />
      <FooterSection />
    </div>
  );
}
