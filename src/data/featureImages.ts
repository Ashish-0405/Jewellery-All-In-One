// Feature preview images configuration
import productCataloguesImg from "@/assets/features/product-catalogues.png";
import digiGoldImg from "@/assets/features/digi-gold.png";
import giftVoucherImg from "@/assets/features/gift-voucher.png";
import referEarnImg from "@/assets/features/refer-earn.png";
import multipleWalletsImg from "@/assets/features/multiple-wallets.png";
import featureReelsImg from "@/assets/features/feature-reels.png";
import ordersManagementImg from "@/assets/features/orders-management.png";

// APP & WEBSITE FEATURES
export const appFeatureImages: Record<string, string | undefined> = {
  "Product Catalogues": productCataloguesImg,
  "Digi Gold Wallet": digiGoldImg,
  "Gold Saving Schemes": undefined,
  "Gift Voucher System": giftVoucherImg,
  "Refer & Earn Program": referEarnImg,
  "Loyalty Points System": multipleWalletsImg,
  "Feature Reels": featureReelsImg,
  "Live Rate Notifications": undefined,
  "Daily Price Updates": undefined,
  "AI Chatbot": undefined,
  "AI Image Detection": undefined,
  "Custom Jewellery Orders": undefined,
  "Rate Calculator": undefined,
  "Orders Management": ordersManagementImg,
  "Multiple Wallets": multipleWalletsImg,
  "Transaction History": undefined,
  "Voucher Management": giftVoucherImg,
  "Wishlist Management": undefined,
  "Order Tracking": ordersManagementImg,
};

// CRM FEATURES
export const crmFeatureImages: Record<string, string | undefined> = {
  "Customer & Lead Management": undefined,
  "Sales Pipeline Tracking": undefined,
  "Follow-up Automation": undefined,
  "Staff Task Assignment": undefined,
  "Invoice & Payment Tracking": undefined,
  "Multi-Branch Management": undefined,
  "Sales Analytics Reports": undefined,
  "Cloud Secure Storage": undefined,
  "Role-Based Access": undefined,
  "Communication Logs": undefined,
};

// ADMIN PANEL FEATURES
export const adminFeatureImages: Record<string, string | undefined> = {
  "Manage Products": productCataloguesImg,
  "Live Rate Controls": undefined,
  "Inventory Management": undefined,
  "Orders & Delivery": ordersManagementImg,
  "Gold Schemes & Digi Gold": digiGoldImg,
  "Vouchers & Coupons": giftVoucherImg,
  "User & Role Management": undefined,
  "Transaction Ledger": undefined,
  "Push Notification Panel": undefined,
  "Content Management": featureReelsImg,
  "Finance Overview": undefined,
  "Security Monitoring": undefined,
  "Full Control Panel": undefined,
};

// Helper to get image by feature title and category
export const getFeatureImage = (title: string, category: "app" | "crm" | "admin"): string | undefined => {
  switch (category) {
    case "app":
      return appFeatureImages[title];
    case "crm":
      return crmFeatureImages[title];
    case "admin":
      return adminFeatureImages[title];
    default:
      return undefined;
  }
};
