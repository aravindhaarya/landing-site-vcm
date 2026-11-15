import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Phone, Calendar, ArrowRight, ShieldCheck, Users, UtensilsCrossed, BedDouble, Car, Bike, Wind, Sparkles, ChevronsUp, Zap, Accessibility, Maximize2, X, ArrowLeft } from 'lucide-react';
import { VENUE_INFO, FACILITIES } from '../data/banquetData';
import { SectionDivider } from './SectionDivider';
import { FadeInUp } from './FadeInUp';

interface AboutStoryProps {
  onOpenBooking: () => void;
}

const FACILITY_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  'f-seating': Users,
  'f-dining': UtensilsCrossed,
  'f-rooms': BedDouble,
  'f-generator': Zap,
  'f-wheelchair': Accessibility,
  'f-cars-valet': Car,
  'f-bikes': Bike,
  'f-ac': Wind,
  'f-brahmin-package': Sparkles,
  'f-lift': ChevronsUp,
};

export const AboutStory: React.FC<AboutStoryProps> = ({ onOpenBooking }) => {
  const [isStageModalOpen, setIsStageModalOpen] = useState(false);

  // Keyboard navigation & lock scroll when modal is open
  useEffect(() => {
    if (!isStageModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsStageModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isStageModalOpen]);

  return (
    <div className="space-y-0">
      {/* About Us Section */}
      <section id="about-us" className="py-16 sm:py-20 bg-[#FFFFFF] relative overflow-hidden">
        {/* Background accent */}
        <div
          className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-[#C5A059]/15 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-6 rounded-full border border-dashed border-[#C5A059]/20" />
        </div>
        <div
          className="absolute top-1/2 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <FadeInUp duration={0.65} yOffset={28} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Venue Stage Showcase - 16:9 Full View without Crop */}
            <div className="lg:col-span-6 relative">
              <div
                onClick={() => setIsStageModalOpen(true)}
                className="w-full aspect-[16/9] border-3 border-[#C5A059] shadow-2xl overflow-hidden relative group bg-[#1C091A] cursor-pointer"
                style={{
                  aspectRatio: '16 / 9',
                  borderTopRightRadius: '48px',
                  borderBottomLeftRadius: '48px',
                }}
                title="Click to view full stage image"
              >
                {/* Pure Stage Image - Complete 100% full view of stage screen & decorations */}
                <img
                  src="/gallery/about-stage.webp"
                  alt="Varathambal Chockalingam Kalyana Mandapam Stage"
                  loading="eager"
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {/* Soft Vignette Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                {/* Hover Preview Badge */}
                <div className="absolute inset-0 bg-[#4A1C40]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#4A1C40] shadow-lg border border-[#C5A059]/50 flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-all duration-300 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A1C40]">Full View</span>
                  </div>
                </div>
              </div>

              {/* 600+ Seated / 1500+ Floating Badge */}
              <div
                className="absolute -bottom-3.5 right-4 sm:-bottom-4 sm:right-6 bg-[#4A1C40] text-white py-2 px-3.5 sm:py-2.5 sm:px-4 border-2 border-[#C5A059] shadow-xl flex items-center gap-2.5 z-20 pointer-events-none"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">600+ Seated</div>
                  <div className="text-[10px] text-neutral-300">1500+ Floating</div>
                </div>
              </div>
            </div>

            {/* Right: About Us Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F9F8F4] border border-[#C5A059] rounded-full text-xs font-bold text-[#4A1C40] uppercase tracking-wider">
                  About Us
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1C40] leading-tight">
                  {VENUE_INFO.aboutHeading}
                </h2>
              </div>

              <p className="text-base text-[#555555] leading-relaxed">
                {VENUE_INFO.aboutText}
              </p>

              {/* Call to action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={VENUE_INFO.telLink}
                  className="px-6 py-3 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#b58f48] transition-colors shadow-sm flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                  <span>Call Now: {VENUE_INFO.phone}</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#34122c] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Submit Request Form</span>
                </button>
              </div>
            </div>

          </div>
        </FadeInUp>
      </section>

      {/* Subtle skewed & parallax boundary transition from About Us (#FFFFFF) to Facilities (#F9F8F4) */}
      <SectionDivider
        fromBg="#FFFFFF"
        toBg="#F9F8F4"
        slope="down-left"
        height={38}
        withOrnament={true}
        ornamentText="Facilities"
      />

      {/* Facilities Section directly matching user content */}
      <section id="facilities" className="py-10 sm:py-14 bg-[#F9F8F4] relative overflow-hidden">
        <FadeInUp duration={0.65} yOffset={28} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] bg-white px-3 py-1 rounded-full border border-[#C5A059]/40 inline-block shadow-2xs">
              Hall Highlights
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A1C40]">
              Facilities
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Modern, air-conditioned hall facilities designed for smooth, memorable celebrations.
            </p>
          </div>

          {/* 8 Facilities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4.5">
            {FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-[#FFFFFF] p-3.5 sm:p-4.5 border border-[#E5E0D8] hover:border-[#C5A059] transition-all hover:shadow-md text-center flex flex-col items-center justify-between space-y-2.5 sm:space-y-3 group cursor-default"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F9F8F4] border border-[#C5A059]/40 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform shadow-2xs text-[#4A1C40]">
                  {(() => {
                    const Icon = FACILITY_ICON_MAP[fac.id] || Sparkles;
                    return <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#4A1C40]" />;
                  })()}
                </div>

                <div className="space-y-1 w-full">
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-[#4A1C40] leading-snug line-clamp-2 sm:line-clamp-none">
                    {fac.title}
                  </h4>
                  {fac.desc && (
                    <p className="text-[11px] sm:text-xs text-[#777777] line-clamp-2 leading-relaxed">
                      {fac.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Safety & Style Lift note */}
          <div className="mt-6 max-w-xl mx-auto bg-[#FFFFFF] py-2.5 px-4 rounded-full border border-[#C5A059]/70 flex items-center justify-center gap-2.5 text-center shadow-2xs text-xs">
            <span className="font-bold text-[10px] text-[#4A1C40] uppercase tracking-wider bg-[#F9F8F4] px-2 py-0.5 rounded border border-[#C5A059]/30">
              Safety &amp; Style
            </span>
            <span className="text-xs text-[#555555] font-medium">
              Hydraulic &amp; passenger lifts available for all floors
            </span>
          </div>

        </FadeInUp>
      </section>

      {/* Fullscreen Stage Lightbox Modal mounted via React Portal to document.body */}
      {isStageModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Stage full view"
          onClick={() => setIsStageModalOpen(false)}
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-150"
        >
          {/* Top Header Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-3 sm:p-4 px-4 sm:px-8 flex items-center justify-between text-white border-b border-white/15 bg-black/80 backdrop-blur-md relative z-10 shrink-0"
          >
            {/* Back Button */}
            <button
              onClick={() => setIsStageModalOpen(false)}
              aria-label="Back"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-[#C5A059] text-white hover:text-[#4A1C40] transition-all duration-200 cursor-pointer border border-white/25 hover:border-[#C5A059] shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 text-[#E5C378] group-hover:text-[#4A1C40] transition-colors" />
              <span className="text-xs font-bold uppercase tracking-wider">Back</span>
            </button>

            {/* Title */}
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-xs font-semibold text-[#E5C378]">Grand Stage &amp; Decoration</span>
              <h4 className="text-xs sm:text-sm font-serif font-semibold text-white/95 max-w-sm sm:max-w-md truncate text-center">
                Varathambal Chockalingam Kalyana Mandapam
              </h4>
            </div>

            {/* Close (X) Button */}
            <button
              onClick={() => setIsStageModalOpen(false)}
              aria-label="Close preview"
              title="Close Preview (Esc)"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059] hover:bg-white text-[#4A1C40] transition-all duration-200 cursor-pointer font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Close</span>
              <X className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Center Main Stage Image */}
          <div
            onClick={() => setIsStageModalOpen(false)}
            className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center justify-center max-h-full max-w-full"
            >
              <img
                src="/gallery/about-stage.webp"
                alt="Varathambal Chockalingam Kalyana Mandapam Stage Full View"
                className="max-h-[72vh] sm:max-h-[78vh] max-w-[94vw] sm:max-w-[88vw] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-center text-xs sm:text-sm text-[#E5C378] font-medium mt-3 px-4 max-w-2xl">
                Varathambal Chockalingam Kalyana Mandapam — Grand Air-Conditioned Stage with Luxury Floral Backdrop &amp; Maharaja Seating
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

