import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, Building2, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_jd8eumb";
const EMAILJS_TEMPLATE_ID = "template_yhkwyqb";
const EMAILJS_PUBLIC_KEY = "c_vt0ngk9q80jrTT5";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoBookingModal = ({ isOpen, onClose }: DemoBookingModalProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    message: "",
    preferredDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone || "Not provided",
          business_type: formData.businessType,
          preferred_date: formData.preferredDate || "Not specified",
          message: formData.message || "No additional message",
          to_email: "ashishnagar0405@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      toast.success("Demo request submitted successfully!");
      
      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          businessType: "",
          message: "",
          preferredDate: "",
        });
        onClose();
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-luxury"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card z-10 px-8 pt-8 pb-4 border-b border-border">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Book a Demo
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    See our jewelry platform in action
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Demo Scheduled!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for your interest. Our team will contact you shortly to confirm your demo appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your Jewelry Store"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select your business type</option>
                      <option value="retail">Retail Jewelry Store</option>
                      <option value="wholesale">Wholesale / Manufacturer</option>
                      <option value="ecommerce">E-commerce Only</option>
                      <option value="multi">Multi-channel Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Demo Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your business needs..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Scheduling...
                      </span>
                    ) : (
                      "Schedule Demo"
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
