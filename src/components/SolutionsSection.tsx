import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const solutions = [
  {
    title: "Retail Solution",
    subtitle: "For Jewelry Stores",
    description: "Complete point-of-sale and customer management system tailored for retail jewelry businesses.",
    features: [
      "In-store inventory management",
      "Customer loyalty programs",
      "Digital gold schemes",
      "Multi-branch support",
      "Staff management",
      "Real-time reporting",
    ],
    gradient: "from-teal to-teal-light",
  },
  {
    title: "Wholesale Solution",
    subtitle: "For B2B Operations",
    description: "Streamline wholesale operations with bulk ordering, dealer management, and pricing tiers.",
    features: [
      "Bulk order management",
      "Dealer price tiers",
      "Custom catalogs",
      "Credit management",
      "Order tracking",
      "Invoice generation",
    ],
    gradient: "from-gold-dark to-gold",
    featured: true,
  },
  {
    title: "E-commerce Solution",
    subtitle: "For Online Sales",
    description: "Launch your online jewelry store with advanced features and seamless customer experience.",
    features: [
      "Responsive web store",
      "Mobile apps (iOS/Android)",
      "Payment integration",
      "Order fulfillment",
      "Customer reviews",
      "SEO optimization",
    ],
    gradient: "from-teal-light to-teal",
  },
];

export const SolutionsSection = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--secondary) / 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tailored Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your{" "}
            <span className="text-gradient-teal">Perfect Fit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scalable solutions designed to grow with your jewelry business
          </p>
        </motion.div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-3xl overflow-hidden ${
                solution.featured
                  ? "bg-gradient-gold shadow-gold md:scale-105 md:-my-4"
                  : "bg-card border border-border"
              }`}
            >
              {solution.featured && (
                <div className="absolute top-0 right-0 bg-teal text-gold-light px-4 py-1 text-sm font-medium rounded-bl-xl">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${solution.featured ? "text-teal-dark" : ""}`}>
                {/* Header */}
                <div className="mb-6">
                  <p
                    className={`text-sm font-medium mb-2 ${
                      solution.featured ? "text-teal/80" : "text-secondary"
                    }`}
                  >
                    {solution.subtitle}
                  </p>
                  <h3
                    className={`font-display text-2xl font-bold mb-3 ${
                      solution.featured ? "text-teal-dark" : "text-foreground"
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      solution.featured ? "text-teal-dark/70" : "text-muted-foreground"
                    }`}
                  >
                    {solution.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          solution.featured ? "bg-teal/20" : "bg-secondary/20"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            solution.featured ? "text-teal" : "text-secondary"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          solution.featured ? "text-teal-dark/80" : "text-foreground/80"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={solution.featured ? "teal" : "gold"}
                  className="w-full"
                  onClick={onBookDemo}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
