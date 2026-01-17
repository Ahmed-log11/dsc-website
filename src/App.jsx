// src/App.jsx
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Herosection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
