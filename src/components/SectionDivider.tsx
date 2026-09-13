import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

export interface SectionDividerProps {
  /** Background color of the section immediately above */
  fromBg?: string;
  /** Background color of the section immediately below */
  toBg?: string;
  /** Slope direction for subtle skew */
  slope?: 'down-right' | 'down-left';
  /** Height of the skew transition area in pixels */
  height?: number;
  /** Whether to show a fine metallic gold hairline on the boundary */
  showGoldLine?: boolean;
  /** Optional center ornamental insignia or pill */
  withOrnament?: boolean;
  ornamentText?: string;
  /** Optional floating parallax ambient particles */
  withParallaxParticles?: boolean;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  fromBg = '#F9F8F4',
  toBg = '#FFFFFF',
  slope = 'down-right',
  height = 54,
  showGoldLine = true,
  withOrnament = false,
  ornamentText,
  withParallaxParticles = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms for floating decorative elements across the boundary
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-32, 32]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const lineGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.95, 0.4]);
  const ornamentScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.04, 0.94]);

  const isDownRight = slope === 'down-right';

  // SVG coordinates for a 1440-width coordinate system
  const topPolygonPoints = isDownRight
    ? `0,0 1440,0 1440,${height} 0,0`
    : `0,0 1440,0 1440,0 0,${height}`;

  const bottomPolygonPoints = isDownRight
    ? `0,0 1440,${height} 1440,${height} 0,${height}`
    : `0,${height} 1440,0 1440,${height} 0,${height}`;

  const lineX1 = 0;
  const lineY1 = isDownRight ? 0 : height;
  const lineX2 = 1440;
  const lineY2 = isDownRight ? height : 0;

  const gradientId = `gold-grad-${slope}-${fromBg.replace('#', '')}-${toBg.replace('#', '')}`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}
      style={{ height: `${height}px`, backgroundColor: toBg }}
      aria-hidden="true"
    >
      {/* Background layer with top-fill color */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: fromBg }}
      />

      {/* SVG Angled Boundary Slice */}
      <svg
        className="absolute inset-0 w-full h-full block"
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.15" />
            <stop offset="25%" stopColor="#E6CA85" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#E6CA85" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Lower wedge filling with the target section background */}
        <polygon
          points={bottomPolygonPoints}
          fill={toBg}
        />

        {/* Delicate metallic gold boundary hairline */}
        {showGoldLine && (
          <line
            x1={lineX1}
            y1={lineY1}
            x2={lineX2}
            y2={lineY2}
            stroke={`url(#${gradientId})`}
            strokeWidth="1.75"
          />
        )}
      </svg>

      {/* Scroll-Driven Parallax Floating Ambient Elements */}
      {withParallaxParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle gold ambient blur orb drifting left */}
          <motion.div
            style={{ y: orb1Y, rotate: orbRotate }}
            className="absolute -top-10 left-[15%] w-36 h-24 bg-[#C5A059]/15 rounded-full blur-2xl"
          />

          {/* Subtle plum/burgundy ambient blur orb drifting right */}
          <motion.div
            style={{ y: orb2Y }}
            className="absolute -bottom-10 right-[18%] w-40 h-28 bg-[#4A1C40]/10 rounded-full blur-2xl"
          />

          {/* Micro gold shimmer particle 1 */}
          <motion.div
            style={{ y: orb1Y, opacity: lineGlow }}
            className="absolute top-1/2 left-[30%] w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-[0_0_8px_#C5A059]"
          />

          {/* Micro gold shimmer particle 2 */}
          <motion.div
            style={{ y: orb2Y, opacity: lineGlow }}
            className="absolute top-1/3 right-[28%] w-1.5 h-1.5 rounded-full bg-[#E6CA85] shadow-[0_0_8px_#E6CA85]"
          />
        </div>
      )}

      {/* Center Optional Diamond / Ornament Crest */}
      {withOrnament && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ scale: ornamentScale }}
            className="px-3 py-0.5 rounded-full bg-white/95 border border-[#C5A059] shadow-xs flex items-center gap-1.5 backdrop-blur-xs text-[#4A1C40]"
          >
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]" />
            {ornamentText ? (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A1C40]">
                {ornamentText}
              </span>
            ) : (
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
            )}
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]" />
          </motion.div>
        </div>
      )}
    </div>
  );
};
