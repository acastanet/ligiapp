import React from 'react';
import { PaperColor, ElevationLevel } from '../types';

interface ShapeProps {
  color: PaperColor;
  elevation: ElevationLevel;
  className?: string;
  dynamicShadow?: string;
}

// 01. Botanical Palm Fronds (Organic paper cut)
export const BotanicalPalmFrond: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Central Stem */}
      <path
        d="M260 320 Q220 180 140 80 Q100 30 20 10"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* Organic hand-cut leaflets with crisp paper edges */}
      <path
        d="M20 10 C45 2 70 8 90 28 C90 28 65 34 40 30 Z"
        fill={color}
      />
      <path
        d="M50 20 C85 10 120 18 150 45 C150 45 115 55 80 48 Z"
        fill={color}
      />
      <path
        d="M90 40 C135 30 175 42 210 75 C210 75 168 88 125 78 Z"
        fill={color}
      />
      <path
        d="M130 75 C185 70 230 92 265 130 C265 130 215 142 165 125 Z"
        fill={color}
      />
      <path
        d="M165 125 C225 125 270 155 295 200 C295 200 240 208 190 185 Z"
        fill={color}
      />
      <path
        d="M190 185 C250 190 285 230 298 280 C298 280 245 280 205 250 Z"
        fill={color}
      />
      {/* Lower leaflets */}
      <path
        d="M60 40 C60 70 45 95 20 115 C20 115 38 85 50 55 Z"
        fill={color}
      />
      <path
        d="M100 70 C100 110 80 145 45 175 C45 175 70 135 88 95 Z"
        fill={color}
      />
      <path
        d="M140 115 C140 165 115 210 75 250 C75 250 108 198 128 150 Z"
        fill={color}
      />
      <path
        d="M180 175 C180 230 150 278 110 310 C110 310 145 260 165 210 Z"
        fill={color}
      />
    </svg>
  );
};

// 02. Swallow Birds in Flight (Silhouettes)
export const BirdsInFlight: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Large Bird */}
      <path
        d="M20 60 C50 30 80 10 110 30 C120 37 125 45 130 55 C135 45 140 37 150 30 C180 10 210 30 240 60 C205 48 175 42 145 65 L130 85 L115 65 C85 42 55 48 20 60 Z"
        fill={color}
      />
      {/* Small Follower Bird */}
      <path
        d="M140 15 C158 3 175 -3 192 7 C198 10 200 14 204 18 C207 14 210 10 215 7 C232 -3 249 3 268 15 C248 10 230 8 212 18 L204 26 L195 18 C178 8 160 10 140 15 Z"
        transform="translate(-60, 45) scale(0.65)"
        fill={color}
      />
    </svg>
  );
};

// 03. Forest Conifers & Pines (Layered kirigami trees)
export const PineForestCluster: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Main Tall Pine */}
      <polygon points="120,20 80,70 95,70 65,120 85,120 50,180 75,180 35,250 205,250 165,180 190,180 155,120 175,120 145,70 160,70" fill={color} />
      {/* Trunk base */}
      <rect x="110" y="250" width="20" height="40" fill={color} />

      {/* Secondary Pine Right */}
      <polygon points="260,60 225,105 240,105 210,150 230,150 195,210 220,210 180,270 340,270 300,210 325,210 290,150 310,150 280,105 295,105" fill={color} />
      <rect x="250" y="270" width="20" height="25" fill={color} />

      {/* Small Pine Left */}
      <polygon points="45,130 20,165 30,165 10,200 25,200 0,250 90,250 65,200 80,200 60,165 70,165" fill={color} />
    </svg>
  );
};

// 04. Stag / Deer Silhouette (Minimalist organic paper cut)
export const StagSilhouette: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Majestic Antlers with crisp paper geometry */}
      <path
        d="M100 70 L90 40 L70 30 L85 35 L75 15 L90 28 L100 10 L102 32 L115 15 L108 35 L125 30 L110 42 L102 70 Z"
        fill={color}
      />
      <path
        d="M100 70 L110 40 L130 30 L115 35 L125 15 L110 28 L100 10 L98 32 L85 15 L92 35 L75 30 L90 42 L98 70 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Head & Neck */}
      <path
        d="M92 68 C85 75 80 88 84 96 C88 104 96 108 104 108 C112 108 116 100 114 90 L120 120 C125 140 135 155 145 160 L145 220 L135 220 L130 170 L110 170 L105 220 L95 220 L98 165 C85 160 75 145 75 130 L85 110 L92 68 Z"
        fill={color}
      />
      {/* Body & Hind Legs */}
      <path
        d="M110 135 C130 135 160 135 175 145 C185 152 188 165 185 175 L180 230 L170 230 L172 180 L155 180 L150 230 L140 230 L142 165 C132 155 120 148 110 135 Z"
        fill={color}
      />
    </svg>
  );
};

// 05. Sailboat Silhouette (Paper Origami / Cutout)
export const PaperSailboat: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 160 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Main Triangular Sail */}
      <polygon points="75,10 75,115 145,115" fill={color} />
      {/* Jib / Front Sail */}
      <polygon points="70,25 70,115 15,115" fill={color} opacity="0.95" />
      {/* Mast */}
      <rect x="71" y="8" width="4" height="112" fill={color} />
      {/* Angular Hull / Boat Body */}
      <polygon points="5,124 150,124 130,150 25,150" fill={color} />
    </svg>
  );
};

// 06. Lighthouse Silhouette
export const LighthouseSilhouette: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 70 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Dome Top */}
      <path d="M25 25 Q35 10 45 25 Z" fill={color} />
      {/* Lantern Room */}
      <rect x="23" y="25" width="24" height="20" fill={color} />
      {/* Gallery Balcony */}
      <rect x="18" y="45" width="34" height="6" fill={color} rx="1" />
      {/* Tapered Tower */}
      <polygon points="22,51 48,51 56,190 14,190" fill={color} />
      {/* Base Foundation */}
      <rect x="10" y="190" width="50" height="20" fill={color} rx="2" />
      {/* Windows Cutouts in paper */}
      <rect x="31" y="70" width="8" height="14" fill="#FFFFFF" rx="1" />
      <rect x="30" y="110" width="10" height="16" fill="#FFFFFF" rx="1" />
      <rect x="29" y="150" width="12" height="18" fill="#FFFFFF" rx="1" />
    </svg>
  );
};

// 07. Ocean Wave Layer (Layered crisp sea cuts)
export const OceanWaveCut: React.FC<ShapeProps & { variant?: 'deep' | 'crest' }> = ({ color, elevation, variant = 'deep', className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 1000 240"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {variant === 'deep' ? (
        <path
          d="M0 80 Q180 20 360 85 T720 70 T1000 90 L1000 240 L0 240 Z"
          fill={color}
        />
      ) : (
        <path
          d="M0 120 C150 40 280 140 450 60 C620 -10 760 110 1000 50 L1000 240 L0 240 Z"
          fill={color}
        />
      )}
    </svg>
  );
};

// 08. Stepped Architectural Arch (Geometric Paper Cut)
export const ArchitecturalArch: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const elevationClass = `paper-elevation-${elevation}`;
  return (
    <div
      className={`relative rounded-t-full border-t-2 border-l-2 border-white/40 paper-fiber-bg transition-all duration-300 ${!dynamicShadow ? elevationClass : ''} ${className}`}
      style={{
        backgroundColor: color,
        boxShadow: dynamicShadow || undefined
      }}
    >
      {/* Inner cutout negative space */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-4/5 rounded-t-full bg-[#FFFFFF] paper-elevation-1 border-t border-l border-white/50"
      />
    </div>
  );
};

// 09. Desert Palm Trees Cluster
export const DesertPalmCluster: React.FC<ShapeProps> = ({ color, elevation, className = '', dynamicShadow }) => {
  const filterClass = `paper-filter-${elevation}`;
  return (
    <svg
      viewBox="0 0 320 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none transition-all duration-300 ${!dynamicShadow ? filterClass : ''} ${className}`}
      style={dynamicShadow ? { filter: dynamicShadow } : undefined}
    >
      {/* Trunk 1 */}
      <path d="M120 340 Q135 220 160 100" stroke={color} strokeWidth="12" strokeLinecap="round" />
      {/* Trunk 2 */}
      <path d="M220 340 Q210 240 180 140" stroke={color} strokeWidth="10" strokeLinecap="round" />
      
      {/* Palm 1 Fronds */}
      <path d="M160 100 Q110 60 60 90 Q115 95 160 100 Z" fill={color} />
      <path d="M160 100 Q130 30 100 20 Q140 50 160 100 Z" fill={color} />
      <path d="M160 100 Q180 20 220 10 Q190 50 160 100 Z" fill={color} />
      <path d="M160 100 Q220 50 260 70 Q210 85 160 100 Z" fill={color} />
      <path d="M160 100 Q200 110 240 140 Q190 120 160 100 Z" fill={color} />
      <path d="M160 100 Q120 130 90 170 Q120 135 160 100 Z" fill={color} />

      {/* Palm 2 Fronds (Secondary) */}
      <path d="M180 140 Q140 100 100 120 Q145 130 180 140 Z" fill={color} opacity="0.9" />
      <path d="M180 140 Q160 80 135 70 Q165 100 180 140 Z" fill={color} opacity="0.9" />
      <path d="M180 140 Q200 70 230 65 Q205 100 180 140 Z" fill={color} opacity="0.9" />
      <path d="M180 140 Q230 100 260 120 Q220 125 180 140 Z" fill={color} opacity="0.9" />
    </svg>
  );
};
