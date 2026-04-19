import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";
import ProjectSection from "./components/sections/ProjectSection.jsx";
import ServicesSection from "./components/sections/ServicesSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import Footer from "./components/layout/Footer.jsx";
const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[10vh]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
export default App;
