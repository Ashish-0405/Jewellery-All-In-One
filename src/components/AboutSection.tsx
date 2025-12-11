import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Clock, Zap } from "lucide-react";
import logo from "@/assets/logo.jpg";

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Support" },
  { icon: Zap, value: "99.9%", label: "Uptime" },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Vision,{" "}
              <span className="text-gradient-gold">Our Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AK IT Solutions is a leading technology partner for jewelry businesses worldwide. 
              We specialize in creating comprehensive digital solutions that transform how 
              jewelry retailers and wholesalers operate and engage with their customers.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team combines deep industry knowledge with cutting-edge technology expertise 
              to deliver platforms that drive growth, enhance customer experiences, and 
              streamline operations for jewelry businesses of all sizes.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Logo Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-gold rounded-3xl transform rotate-3 scale-105 opacity-20" />
              <div className="absolute inset-0 bg-gradient-teal rounded-3xl transform -rotate-3 scale-105 opacity-10" />
              
              {/* Main content card */}
              <div className="relative bg-card rounded-3xl p-12 shadow-luxury border border-border">
                <div className="flex flex-col items-center text-center">
                  <motion.img
                    src={logo}
                    alt="AK IT Solutions"
                    className="w-48 h-48 object-contain mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    AK IT Solutions
                  </h3>
                  <p className="text-secondary font-medium tracking-wider uppercase text-sm mb-6">
                    Your Vision, Our Innovation
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-secondary rounded-full" />
                    <div className="w-8 h-1 bg-primary rounded-full" />
                    <div className="w-12 h-1 bg-secondary rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
