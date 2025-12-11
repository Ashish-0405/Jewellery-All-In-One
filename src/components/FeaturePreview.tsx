import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface FeaturePreviewProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    previewImage?: string;
  };
  index: number;
}

export const FeaturePreview = ({ feature, index }: FeaturePreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="feature-card group relative p-6 rounded-xl bg-card border border-border 
        hover:border-secondary/50 transition-all duration-300 hover:shadow-luxury cursor-pointer overflow-visible"
      style={{ perspective: "1000px", zIndex: isHovered ? 50 : 1 }}
    >
      {/* Hover gradient - subtle background only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-gold pointer-events-none rounded-xl" />

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-secondary/10 group-hover:scale-110 transition-transform duration-300">
        <feature.icon className="w-6 h-6 text-secondary" />
      </div>

      {/* Content */}
      <h3 className="relative z-10 font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
        {feature.title}
      </h3>
      <p className="relative z-10 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
        {feature.description}
      </p>

      {/* 3D Phone Mockup - Appears on top of card on hover */}
      {feature.previewImage && (
        <div 
          className={`absolute inset-0 z-[100] flex items-center justify-center transition-all duration-500 ease-out pointer-events-none ${
            isHovered 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Dark overlay behind phone */}
          <div 
            className={`absolute inset-0 bg-primary/80 backdrop-blur-sm rounded-xl transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Glow effect */}
          <div 
            className={`absolute w-40 h-40 bg-secondary/40 rounded-full blur-3xl transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* 3D Standing Phone with floating animation */}
          <div 
            className={`relative ${isHovered ? 'animate-float' : ''}`}
            style={{
              transform: "rotateY(-15deg) rotateX(5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Phone frame with 3D depth */}
            <div 
              className="relative w-[120px] h-[240px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[1.5rem] p-1"
              style={{
                boxShadow: `
                  0 20px 40px -10px rgba(0, 0, 0, 0.6),
                  0 0 20px rgba(212, 168, 75, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Screen */}
              <div className="relative w-full h-full bg-black rounded-[1.2rem] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-20 flex items-center justify-center gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-gray-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                </div>
                
                {/* Screen content */}
                <img
                  src={feature.previewImage}
                  alt={`${feature.title} preview`}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Screen glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Side buttons */}
              <div className="absolute right-[-2px] top-14 w-0.5 h-6 bg-gray-600 rounded-r-sm" />
              <div className="absolute left-[-2px] top-12 w-0.5 h-4 bg-gray-600 rounded-l-sm" />
              <div className="absolute left-[-2px] top-[4.5rem] w-0.5 h-4 bg-gray-600 rounded-l-sm" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
