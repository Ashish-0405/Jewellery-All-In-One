import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.jpg";

const appScreens = [
  { title: "Browse Collections", desc: "Explore diamonds, gold, silver & platinum" },
  { title: "Digi Gold", desc: "Buy & sell 24K gold instantly" },
  { title: "Gold Schemes", desc: "Flexible saving plans" },
];

export const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            App Showcase
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Beautiful on{" "}
            <span className="text-gradient-gold">Every Screen</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            A seamless experience across mobile, tablet, and desktop
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Left Phone */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-56 h-[450px] bg-foreground rounded-[40px] p-2 shadow-luxury transform rotate-y-[-10deg] scale-90 opacity-70">
              <div className="w-full h-full bg-card rounded-[32px] overflow-hidden">
                <img
                  src={heroMockup}
                  alt="App Screen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-full" />
            </div>
          </motion.div>

          {/* Center Phone (Main) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="relative w-72 h-[580px] bg-foreground rounded-[48px] p-3 shadow-luxury animate-glow">
              {/* Screen */}
              <div className="w-full h-full bg-card rounded-[40px] overflow-hidden relative">
                <img
                  src={heroMockup}
                  alt="Main App Screen"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with app UI elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-3">
                    <h4 className="font-display text-xl font-bold text-gold-light">
                      Exquisite Collection
                    </h4>
                    <p className="text-sm text-gold-light/70">
                      Discover diamonds & gold jewelry
                    </p>
                    <div className="flex gap-2 mt-4">
                      <div className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-teal-dark">
                        Shop Now
                      </div>
                      <div className="px-4 py-2 bg-primary-foreground/20 rounded-full text-sm text-gold-light">
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary-foreground/30 rounded-full" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-16 top-20 bg-card rounded-2xl p-4 shadow-luxury hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-secondary text-lg">✨</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Digi Gold</p>
                  <p className="text-xs text-muted-foreground">Invest instantly</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-16 bottom-32 bg-card rounded-2xl p-4 shadow-luxury hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">🎁</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Gold Schemes</p>
                  <p className="text-xs text-muted-foreground">Save smartly</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-56 h-[450px] bg-foreground rounded-[40px] p-2 shadow-luxury transform rotate-y-[10deg] scale-90 opacity-70">
              <div className="w-full h-full bg-card rounded-[32px] overflow-hidden">
                <img
                  src={heroMockup}
                  alt="App Screen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Feature tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {appScreens.map((screen, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-primary-foreground font-medium">
                {screen.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
