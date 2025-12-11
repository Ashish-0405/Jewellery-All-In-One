import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-dark text-gold-light/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <img src={logo} alt="AK IT Solutions" className="h-12 w-auto" />
              <div>
                <span className="font-display text-xl font-semibold text-gold-light">
                  AK IT Solutions
                </span>
              </div>
            </motion.div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering jewelry businesses with innovative digital solutions. 
              Your trusted technology partner for retail, wholesale, and e-commerce.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Features", "Solutions", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                "Retail Platform",
                "Wholesale Management",
                "E-commerce Store",
                "Mobile Apps",
                "CRM Dashboard",
              ].map((item) => (
                <li key={item}>
                  <a href="#solutions" className="hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">
                  306 Golden Square, Nikol
                  <br />
                  Ahmedabad, India 382350
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm">+91 901645 2340</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm">sales@akitsol.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gold-light/60">
            © {currentYear} AK IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
