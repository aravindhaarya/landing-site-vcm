import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sparkles, ChevronDown, ChevronUp, ArrowDown, Building2, Radio, UserCheck, ShieldCheck } from 'lucide-react';
import { AMENITIES } from '../data/banquetData';
import { MahalAmenity } from '../types';

type AmenityCategory = 'all' | 'hall' | 'tech' | 'services' | 'safety';

const CATEGORY_MAP: Record<string, AmenityCategory> = {
  'a-4': 'hall',
  'a-5': 'hall',
  'a-6': 'hall',
  'a-13': 'hall',
  'a-17': 'hall',
  'a-7': 'tech',
  'a-8': 'tech',
  'a-9': 'tech',
  'a-14': 'tech',
  'a-11': 'services',
  'a-12': 'services',
  'a-15': 'services',
  'a-16': 'services',
  'a-1': 'safety',
  'a-2': 'safety',
  'a-3': 'safety',
  'a-10': 'safety',
};

const CATEGORIES: { id: AmenityCategory; label: string; icon: React.FC<{ className?: string }>; count: number }[] = [
  { id: 'all', label: 'All Amenities', icon: Sparkles, count: 17 },
  { id: 'hall', label: 'Hall & Dining', icon: Building2, count: 5 },
  { id: 'tech', label: 'Tech & Sound', icon: Radio, count: 4 },
  { id: 'services', label: 'Services', icon: UserCheck, count: 4 },
  { id: 'safety', label: 'Safety & Parking', icon: ShieldCheck, count: 4 },
];

// Curated 6 primary highlight IDs for the initial collapsed view
const PRIMARY_HIGHLIGHT_IDS = ['a-4', 'a-5', 'a-6', 'a-8', 'a-1', 'a-3'];

export const Amenities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AmenityCategory>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const amenitiesRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: amenitiesRef,
    offset: ['start end', 'end start'],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Filter amenities according to category
  const filteredAmenities = AMENITIES.filter((amenity) => {
    if (activeCategory === 'all') return true;
    return CATEGORY_MAP[amenity.id] === activeCategory;
  });

  // When 'all' is chosen and not expanded, show top 6 highlights for optimal page length
  const displayedAmenities =
    activeCategory === 'all' && !isExpanded
      ? AMENITIES.filter((a) => PRIMARY_HIGHLIGHT_IDS.includes(a.id))
      : filteredAmenities;

  return (
    <section ref={amenitiesRef} id="amenities" className="py-10 sm:py-14 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle parallax ambient background glow */}
      <motion.div
        style={{ y: decorY }}
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#C5A059]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Streamlined for smooth scrolling */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9F8F4] text-[#4A1C40] text-[11px] uppercase tracking-widest font-bold border border-[#C5A059]/40 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Comprehensive Hall Features</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#4A1C40] font-bold">
            Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Every comfort thoughtfully arranged for seamless celebrations and guest hospitality.
          </p>
        </div>

        {/* Category Tabs for Fast Quick-Scanning */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-7">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id !== 'all') {
                    setIsExpanded(true);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4A1C40] text-white shadow-sm border border-[#4A1C40]'
                    : 'bg-[#F9F8F4] text-[#555555] hover:text-[#4A1C40] hover:bg-[#F1ECE1] border border-[#E8E2D8]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A059]' : 'text-[#888888]'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#C5A059] text-[#4A1C40] font-bold' : 'bg-neutral-200/70 text-[#666]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact, High-Density Amenities Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedAmenities.map((amenity: MahalAmenity, index: number) => {
              // Find overall index in full AMENITIES array
              const originalIndex = AMENITIES.findIndex((a) => a.id === amenity.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  key={amenity.id}
                  className="bg-[#F9F8F4] p-3 sm:p-3.5 border border-[#E8E2D8] hover:border-[#C5A059] transition-all shadow-2xs hover:shadow-sm flex items-start gap-2.5 sm:gap-3.5 rounded-xl group"
                >
                  {/* Icon Image */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-white border border-[#C5A059]/40 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <img
                      src={amenity.iconImg}
                      alt={amenity.title}
                      referrerPolicy="no-referrer"
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Title */}
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#C5A059]">
                        #{originalIndex >= 0 ? originalIndex + 1 : index + 1}
                      </span>
                    </div>
                    <h3 className="text-[11px] sm:text-xs font-semibold text-[#333333] leading-snug group-hover:text-[#4A1C40] transition-colors line-clamp-2 sm:line-clamp-none">
                      {amenity.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All / Collapse Toggle (When viewing 'All') */}
        {activeCategory === 'all' && (
          <div className="mt-5 sm:mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFFFFF] border-2 border-[#C5A059] text-[#4A1C40] hover:bg-[#F9F8F4] text-xs font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
            >
              {isExpanded ? (
                <>
                  <span>Show Top Highlights</span>
                  <ChevronUp className="w-4 h-4 text-[#C5A059] group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>View All 17 Amenities &amp; Services</span>
                  <span className="bg-[#4A1C40] text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                    +11 more
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#C5A059] group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom Navigation Cue - Guides users to keep scrolling down to Moments & FAQs */}
        <div className="mt-8 pt-5 border-t border-[#F1EBE4] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[#777777]">
            Showing <strong className="text-[#4A1C40]">{displayedAmenities.length}</strong> of {AMENITIES.length} mahal amenities
          </p>
          <a
            href="#moments"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A1C40] hover:text-[#C5A059] transition-colors py-1.5 px-3.5 rounded-full bg-[#F9F8F4] border border-[#E8E2D8] hover:border-[#C5A059] shadow-2xs"
          >
            <span>Explore Photo Gallery &amp; Event Moments</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </div>

      </div>
    </section>
  );
};
