import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { DemoBookingModal } from "@/components/DemoBookingModal";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href") || "");
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Initialize GSAP ScrollTrigger refresh
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar onBookDemo={handleOpenDemo} />
      <HeroSection onBookDemo={handleOpenDemo} />
      <FeaturesSection />
      <ShowcaseSection />
      <SolutionsSection onBookDemo={handleOpenDemo} />
      <AboutSection />
      <Footer />
      <DemoBookingModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
};

export default Index;
