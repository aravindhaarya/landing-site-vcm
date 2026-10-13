import React from 'react';
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
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  fromBg = '#F9F8F4',
  toBg = '#FFFFFF',
  slope = 'down-right',
  height = 42,
  showGoldLine = true,
  withOrnament = false,
  ornamentText,
  className = '',
}) => {
  const isDownRight = slope === 'down-right';

  // Vector coordinates
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
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.25" />
            <stop offset="30%" stopColor="#E6CA85" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E6CA85" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.25" />
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
            strokeWidth="1.5"
          />
        )}
      </svg>

      {/* Center Diamond / Ornament Crest without expensive backdrop-filter */}
      {withOrnament && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="px-3 py-0.5 rounded-full bg-white border border-[#C5A059] shadow-xs flex items-center gap-1.5 text-[#4A1C40]">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]" />
            {ornamentText ? (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A1C40]">
                {ornamentText}
              </span>
            ) : (
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
            )}
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]" />
          </div>
        </div>
      )}
    </div>
  );
};
