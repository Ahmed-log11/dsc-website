// src/App.jsx
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Herosection />
    </div>
  );
}
