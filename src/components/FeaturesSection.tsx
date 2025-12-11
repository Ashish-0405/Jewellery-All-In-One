import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Gift,
  Coins,
  Sparkles,
  BarChart3,
  Bell,
  Calculator,
  Wallet,
  Heart,
  Package,
  Camera,
  MessageSquare,
  TrendingUp,
  Clock,
  UserCheck,
  FileText,
  Building2,
  Cloud,
  Lock,
  Settings,
  Layers,
  Truck,
  CreditCard,
  Image,
  Activity,
  Gauge,
  LucideIcon,
  ClipboardCheck,
  ScanBarcode,
  ClipboardList,
  BadgeCheck,
  BookUser,
  Target,
  Calendar,
  Briefcase
} from "lucide-react";
import { FeaturePreview } from "./FeaturePreview";
import { getFeatureImage } from "@/data/featureImages";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "app", label: "App & Website", color: "secondary" },
  { id: "crm", label: "CRM Features", color: "primary" },
  { id: "admin", label: "Admin Panel", color: "secondary" },
];

const featuresByCategory = {
  app: [
    { icon: Layers, title: "Product Catalogues", description: "Gold, Silver & Diamond catalogues with detailed specifications" },
    { icon: Coins, title: "Digi Gold Wallet", description: "Buy, sell, and track 24K digital gold securely" },
    { icon: Gift, title: "Gold Saving Schemes", description: "Flexible gold saving plans for customers" },
    { icon: CreditCard, title: "Gift Voucher System", description: "Issue and manage gift vouchers seamlessly" },
    { icon: Users, title: "Refer & Earn Program", description: "Reward customers for referrals" },
    { icon: Sparkles, title: "Loyalty Points System", description: "Engage customers with rewards points" },
    { icon: Image, title: "Feature Reels", description: "Highlights section for promotions and showcases" },
    { icon: Bell, title: "Live Rate Notifications", description: "Real-time gold & silver price alerts" },
    { icon: TrendingUp, title: "Daily Price Updates", description: "Automated daily price update alerts" },
    { icon: MessageSquare, title: "AI Chatbot", description: "24/7 intelligent customer support" },
    { icon: Camera, title: "AI Image Detection", description: "Smart product recognition from images" },
    { icon: Settings, title: "Custom Jewellery Orders", description: "Accept and manage custom design requests" },
    { icon: Calculator, title: "Rate Calculator", description: "Calculate gold, making charges & GST" },
    { icon: Package, title: "Orders Management", description: "Complete jewellery order lifecycle" },
    { icon: Wallet, title: "Multiple Wallets", description: "Digi Gold, Cashback, Referral & Loyalty wallets" },
    { icon: Clock, title: "Transaction History", description: "Complete transaction tracking and records" },
    { icon: Gift, title: "Voucher Management", description: "Manage vouchers and coupons" },
    { icon: Heart, title: "Wishlist Management", description: "Let customers save favorite items" },
    { icon: Truck, title: "Order Tracking", description: "Real-time order tracking and details" },
  ],
  crm: [
    { icon: Users, title: "Customer & Lead Management", description: "Track and nurture leads efficiently" },
    { icon: BarChart3, title: "Sales Pipeline Tracking", description: "Monitor orders through sales stages" },
    { icon: Bell, title: "Follow-up Automation", description: "Automated reminders and follow-ups" },
    { icon: UserCheck, title: "Staff Task Assignment", description: "Assign and monitor staff tasks" },
    { icon: FileText, title: "Invoice & Payment Tracking", description: "Manage invoices, estimates & payments" },
    { icon: Building2, title: "Multi-Branch Management", description: "CRM across multiple locations" },
    { icon: BarChart3, title: "Sales Analytics Reports", description: "Comprehensive jewellery sales insights" },
    { icon: Cloud, title: "Cloud Secure Storage", description: "Secure data backup and storage" },
    { icon: Lock, title: "Role-Based Access", description: "Team access control by roles" },
    { icon: MessageSquare, title: "Communication Logs", description: "Track all customer communications" },
    { icon: Package, title: "Stock & Inventory Management", description: "Manage gold, diamond & gemstone inventory with live stock updates" },
  { icon: ScanBarcode, title: "Barcode & QR Tagging", description: "Smart item tagging for quick billing & stock check" },
  { icon: ClipboardCheck, title: "Karigar Job Work Tracking", description: "Track karigar job orders, purity, and metal weight" },
  { icon: Settings, title: "Gold & Diamond Rate Auto Update", description: "Daily bullion rate sync with pricing formulas" },
  { icon: ClipboardList, title: "Repair & Service Management", description: "Track customer repair items, costing & delivery dates" },
  { icon: FileText, title: "Custom Order Management", description: "Manage custom jewellery orders with approvals & updates" },
  { icon: CreditCard, title: "POS Billing System", description: "Fast jewellery billing with discounts, credit, and split payments" },
  { icon: BadgeCheck, title: "Hallmark & Certification Tracking", description: "Manage hallmark batches and jewellery certificates" },
  { icon: Wallet, title: "Old Gold Exchange", description: "Purity test, valuation, and exchange calculations" },
  { icon: BookUser, title: "Saving Schemes & Plans", description: "Manage monthly jewellery saving schemes & maturity alerts" },
  { icon: Target, title: "Sales Staff Commission", description: "Automatic commission calculation per sale" },

  // --- HR & Staff Management ---
  { icon: Users, title: "Staff Attendance & Biometric", description: "Biometric attendance sync with manual overrides" },
  { icon: Calendar, title: "Shift & Duty Scheduling", description: "Assign showroom duty, counter duty, and roster shifts" },
  { icon: Briefcase, title: "Payroll & Salary Management", description: "Salary, incentives, and slip generation" },
  { icon: Target, title: "Performance & KPI Tracking", description: "Monitor sales targets, conversions, and follow-up KPIs" },
  { icon: ClipboardList, title: "Leave Management System", description: "Leave requests, approvals & balance tracking" },
  { icon: UserCheck, title: "Task Assignment & Monitoring", description: "Assign tasks and track employee performance" },
  { icon: FileText, title: "Employee Document Vault", description: "Store KYC, agreements, certifications, contracts" },
  { icon: Lock, title: "Role-Based Staff Permissions", description: "Control access to sensitive operations like rate & discount edits" },
  ],
  admin: [
    { icon: Layers, title: "Manage Products", description: "Control gold, silver & diamond inventory" },
    { icon: TrendingUp, title: "Live Rate Controls", description: "Update and manage live rates" },
    { icon: Package, title: "Inventory Management", description: "Complete stock control system" },
    { icon: Truck, title: "Orders & Delivery", description: "Manage orders, repairs & deliveries" },
    { icon: Coins, title: "Gold Schemes & Digi Gold", description: "Configure schemes and wallets" },
    { icon: Gift, title: "Vouchers & Coupons", description: "Create and manage promotions" },
    { icon: Users, title: "User & Role Management", description: "Control user access and permissions" },
    { icon: FileText, title: "Transaction Ledger", description: "Complete wallet and transaction reports" },
    { icon: Bell, title: "Push Notification Panel", description: "Send targeted notifications" },
    { icon: Image, title: "Content Management", description: "Manage reels, banners & offers" },
    { icon: CreditCard, title: "Finance Overview", description: "Payment and financial dashboards" },
    { icon: Activity, title: "Security Monitoring", description: "Activity logs and security tracking" },
    { icon: Gauge, title: "Full Control Panel", description: "Complete app + website management" },
  ],
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  previewImage?: string;
}

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("app");

  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [activeCategory]);

  // Add preview images to features
  const currentFeatures: Feature[] = featuresByCategory[activeCategory as keyof typeof featuresByCategory].map(
    (feature) => ({
      ...feature,
      previewImage: getFeatureImage(feature.title, activeCategory as "app" | "crm" | "admin"),
    })
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-background relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Complete Feature Set
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            40+ powerful features designed specifically for the jewelry industry
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-secondary text-secondary-foreground shadow-luxury"
                  : "bg-card border border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">
                ({featuresByCategory[category.id as keyof typeof featuresByCategory].length})
              </span>
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-visible"
          >
            {currentFeatures.map((feature, index) => (
              <FeaturePreview key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "19+", label: "App Features" },
            { value: "5+", label: "CRM Features" },
            { value: "13+", label: "Admin Controls" },
            { value: "100%", label: "Customizable" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card/50 border border-border">
              <div className="font-display text-3xl font-bold text-secondary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
