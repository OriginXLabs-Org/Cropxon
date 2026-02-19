import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import FeaturesSection from "@/components/FeaturesSection";
import Pulse360Section from "@/components/Pulse360Section";
import MobileAppShowcase from "@/components/MobileAppShowcase";
import SustainabilitySection from "@/components/SustainabilitySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div className={splashDone ? "opacity-100 transition-opacity duration-500" : "opacity-0"}>
        <Navbar />
        <HeroSection />
        <EcosystemSection />
        <FeaturesSection />
        <Pulse360Section />
        <MobileAppShowcase />
        <SustainabilitySection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
