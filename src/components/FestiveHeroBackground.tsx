import React from 'react';

/**
 * Traditional South Indian Auspicious Mandala & Kolam SVG
 * Clean vector graphics rendered with lightweight SVG geometry
 */
const SacredKolamMandala: React.FC<{ size?: number; className?: string }> = ({
  size = 460,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer concentric rings */}
      <circle cx="250" cy="250" r="230" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.4" />
      <circle cx="250" cy="250" r="215" stroke="#E6CA85" strokeWidth="1.5" opacity="0.55" />
      <circle cx="250" cy="250" r="195" stroke="#C5A059" strokeWidth="1" opacity="0.3" />

      {/* 16 Sacred Lotus Petals outer ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={`petal-outer-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M250 35 C265 85 278 140 250 170 C222 140 235 85 250 35 Z"
              stroke="#E6CA85"
              strokeWidth="1.2"
              fill="rgba(197, 160, 89, 0.03)"
              opacity="0.55"
            />
            <circle cx="250" cy="35" r="2.5" fill="#E6CA85" opacity="0.7" />
          </g>
        );
      })}

      {/* Middle 8 Kolam Arch Petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        return (
          <g key={`petal-mid-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M250 85 Q290 150 250 200 Q210 150 250 85 Z"
              stroke="#C5A059"
              strokeWidth="1.4"
              fill="rgba(197, 160, 89, 0.05)"
              opacity="0.65"
            />
          </g>
        );
      })}

      {/* Sacred Octagram / Star of Lakshmi geometry */}
      <polygon
        points="250,110 349,209 349,291 250,390 151,291 151,209"
        stroke="#E6CA85"
        strokeWidth="1.2"
        opacity="0.4"
      />
      <polygon
        points="209,151 291,151 390,250 291,349 209,349 110,250"
        stroke="#E6CA85"
        strokeWidth="1.2"
        opacity="0.4"
      />

      {/* Core Bindu & Ring */}
      <circle cx="250" cy="250" r="45" stroke="#E6CA85" strokeWidth="1.5" opacity="0.7" />
      <circle cx="250" cy="250" r="30" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="250" cy="250" r="14" fill="#C5A059" opacity="0.6" />
      <circle cx="250" cy="250" r="6" fill="#FFF2CC" opacity="0.85" />
    </svg>
  );
};

/**
 * Traditional Brass Hanging Diya (Vilakku / Deepam) with radiant golden flame
 */
const HangingBrassDiya: React.FC<{
  className?: string;
  chainLength?: number;
}> = ({ className = '', chainLength = 140 }) => {
  return (
    <div className={`relative flex flex-col items-center pointer-events-none select-none ${className}`}>
      {/* Decorative brass chain with links */}
      <div
        className="w-[2px] bg-gradient-to-b from-[#C5A059]/30 via-[#E6CA85]/80 to-[#C5A059]"
        style={{ height: `${chainLength}px` }}
      />

      {/* Hanging brass bell connector */}
      <div className="w-3 h-3 rotate-45 border border-[#E6CA85] bg-[#4A1C40] -mt-1 shadow-xs" />

      {/* Brass Lamp Basin (Agal / Diya) */}
      <svg width="68" height="52" viewBox="0 0 68 52" fill="none" className="relative z-10 -mt-1">
        {/* Lamp Base Stand */}
        <path
          d="M26 34 L42 34 L46 48 L22 48 Z"
          fill="url(#brass-grad-dark)"
          stroke="#E6CA85"
          strokeWidth="1"
        />
        {/* Lamp Bowl */}
        <path
          d="M8 20 C8 32 60 32 60 20 C60 16 52 14 34 14 C16 14 8 16 8 20 Z"
          fill="url(#brass-grad)"
          stroke="#E6CA85"
          strokeWidth="1.2"
        />
        {/* Ornate Rim Beading */}
        <ellipse cx="34" cy="18" rx="24" ry="4" fill="#2E0F29" stroke="#E6CA85" strokeWidth="0.8" />

        {/* Diya Spout Tip */}
        <path d="M34 14 L37 10 L31 10 Z" fill="#E6CA85" />

        <defs>
          <linearGradient id="brass-grad" x1="8" y1="14" x2="60" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D77F" />
            <stop offset="0.4" stopColor="#C5A059" />
            <stop offset="0.8" stopColor="#8A6724" />
            <stop offset="1" stopColor="#D4AF37" />
          </linearGradient>
          <linearGradient id="brass-grad-dark" x1="22" y1="34" x2="46" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C5A059" />
            <stop offset="1" stopColor="#4A1C40" />
          </linearGradient>
        </defs>
      </svg>

      {/* Auspicious Flame with pure static gradient glow (Zero continuous re-rasterization) */}
      <div className="absolute top-[calc(100%-46px)] left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
        {/* Warm Golden Halo via radial gradient */}
        <div
          className="absolute w-14 h-14 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, transparent 70%)',
          }}
        />

        {/* Diya Teardrop Flame SVG */}
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" className="relative z-20">
          <path
            d="M11 0 C16 9 21 16 21 21 C21 26 16.5 30 11 30 C5.5 30 1 26 1 21 C1 16 6 9 11 0 Z"
            fill="url(#flame-outer)"
          />
          <path
            d="M11 6 C14 12 17 17 17 21 C17 24.5 14.5 27 11 27 C7.5 27 5 24.5 5 21 C5 17 8 12 11 6 Z"
            fill="url(#flame-inner)"
          />
          <ellipse cx="11" cy="22" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.9" />

          <defs>
            <linearGradient id="flame-outer" x1="11" y1="0" x2="11" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE066" />
              <stop offset="0.4" stopColor="#FF9900" />
              <stop offset="1" stopColor="#D9381E" />
            </linearGradient>
            <linearGradient id="flame-inner" x1="11" y1="6" x2="11" y2="27" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFBE6" />
              <stop offset="0.5" stopColor="#FFD13B" />
              <stop offset="1" stopColor="#FF7700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

/**
 * FestiveHeroBackground
 * Authentic, opulent South Indian wedding atmosphere:
 * Sacred Kolam mandalas, warm glowing brass hanging diyas,
 * engineered with pure GPU-friendly static layers for instant 120fps scrolling.
 */
export const FestiveHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Deep Royal Plum & Burgundy Base Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C091A] via-[#2A0E28] to-[#180716]" />

      {/* 2. Soft Ambient Golden Light Pools rendered with lightweight radial gradients */}
      <div
        className="absolute top-10 left-1/4 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[420px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(230, 202, 133, 0.10) 0%, transparent 70%)',
        }}
      />

      {/* 3. Top-Right Grand Sacred Kolam Mandala */}
      <div className="absolute -top-32 -right-24 opacity-35 lg:opacity-40">
        <SacredKolamMandala size={520} />
      </div>

      {/* 4. Bottom-Left Sacred Kolam Mandala */}
      <div className="absolute -bottom-40 -left-28 opacity-25 lg:opacity-30">
        <SacredKolamMandala size={480} />
      </div>

      {/* 5. Traditional Brass Hanging Diyas on Outer Margins */}
      <div className="hidden md:block absolute top-0 left-6 lg:left-12 z-20 opacity-90">
        <HangingBrassDiya chainLength={110} />
      </div>
      <div className="hidden md:block absolute top-0 right-6 lg:right-12 z-20 opacity-90">
        <HangingBrassDiya chainLength={150} />
      </div>

      {/* 6. Bottom transition blend matching next section (#F9F8F4) */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F9F8F4] via-[#F9F8F4]/80 to-transparent" />
    </div>
  );
};
