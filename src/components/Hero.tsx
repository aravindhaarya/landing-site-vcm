import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { Phone, Calendar, Sparkles, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Award, Clock } from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES, MOMENTS_GALLERY } from '../data/banquetData';

interface HeroProps {
  onOpenBooking: (eventType?: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState('Wedding');

  return (
    <section id="hero" className="relative bg-[#F9F8F4] pt-8 pb-16 overflow-hidden">
      {/* GPU-accelerated decorative background ambient glows */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#4A1C40]/5 rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform"
        aria-hidden="true"
      />

      {/* Auspicious geometric watermark - GPU accelerated */}
      <div
        className="absolute -right-20 top-24 w-96 h-96 border border-[#C5A059]/15 rounded-full pointer-events-none hidden lg:block transform-gpu will-change-transform"
        aria-hidden="true"
      >
        <div className="absolute inset-8 border border-dashed border-[#C5A059]/20 rounded-full" />
        <div className="absolute inset-16 border border-[#4A1C40]/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, Key Highlights, Call Now */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left transform-gpu will-change-transform"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C5A059]/50 shadow-xs transform-gpu will-change-transform">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-semibold tracking-wider text-[#4A1C40] uppercase">
                Premier Kalyana Mahal in Madipakkam, Chennai
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="transform-gpu will-change-transform">
              <p id="hero-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1C40] tracking-tight leading-tight">
                Varathambal Chockalingam Kalyana Mahal
              </p>
              <p id="hero-tagline" className="mt-3 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                The Perfect Destination for all your occasions.
              </p>
            </motion.div>

            {/* Quick Feature Highlights as per content */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 transform-gpu will-change-transform"
            >
              <motion.div variants={gridItemVariants} className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors transform-gpu will-change-transform">
                <div className="text-xs font-bold text-[#4A1C40]">450 Seating</div>
                <div className="text-[11px] text-[#777777]">Main Air-Conditioned Hall</div>
              </motion.div>
              <motion.div variants={gridItemVariants} className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors transform-gpu will-change-transform">
                <div className="text-xs font-bold text-[#4A1C40]">150 Dining</div>
                <div className="text-[11px] text-[#777777]">Dedicated Dining Space</div>
              </motion.div>
              <motion.div variants={gridItemVariants} className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors transform-gpu will-change-transform">
                <div className="text-xs font-bold text-[#4A1C40]">8 AC Rooms</div>
                <div className="text-[11px] text-[#777777]">Bride &amp; Groom Suites</div>
              </motion.div>
              <motion.div variants={gridItemVariants} className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors transform-gpu will-change-transform">
                <div className="text-xs font-bold text-[#4A1C40]">Cars + Valet</div>
                <div className="text-[11px] text-[#777777]">Bikes Can Be Parked</div>
              </motion.div>
              <motion.div variants={gridItemVariants} className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors transform-gpu will-change-transform">
                <div className="text-xs font-bold text-[#4A1C40]">100% AC Mahal</div>
                <div className="text-[11px] text-[#777777]">Party Hall &amp; Dining</div>
              </motion.div>
              <motion.div variants={gridItemVariants} className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors transform-gpu will-change-transform">
                <div className="text-xs font-bold text-[#4A1C40]">Brahmin Package</div>
                <div className="text-[11px] text-[#777777]">Specialized 2½ Days</div>
              </motion.div>
            </motion.div>

            {/* Prominent Action & Call Now row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 transform-gpu will-change-transform">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-call-now-btn"
                href={VENUE_INFO.telLink}
                className="px-7 py-3.5 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-widest font-bold hover:bg-[#b58f48] transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform-gpu will-change-transform"
                style={{
                  borderTopLeftRadius: '22px',
                  borderBottomRightRadius: '22px',
                }}
              >
                <Phone className="w-4 h-4 fill-[#4A1C40]" />
                <span>Call Now: {VENUE_INFO.phone}</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBooking(selectedEvent)}
                className="px-7 py-3.5 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-widest font-bold hover:bg-[#34122c] transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 transform-gpu will-change-transform"
                style={{
                  borderTopRightRadius: '22px',
                  borderBottomLeftRadius: '22px',
                }}
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Book / Check Dates</span>
              </motion.button>
            </motion.div>

            {/* Address snippet */}
            <motion.div variants={itemVariants} className="pt-2 flex items-start gap-2 text-xs text-[#666666] transform-gpu will-change-transform">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>
                {VENUE_INFO.address}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Collage & Interactive Element */}
          <div className="lg:col-span-5">
            <motion.div
              id="hero-collage-container"
              variants={rightCardVariants}
              initial="hidden"
              animate="visible"
              className="relative bg-[#FFFFFF] border-2 border-[#C5A059] p-4 sm:p-5 shadow-2xl space-y-4 transform-gpu will-change-transform"
              style={{
                borderTopLeftRadius: '32px',
                borderBottomRightRadius: '32px',
              }}
            >
              {/* Main Visual Photo Collage Block */}
              <div className="relative">
                {/* Primary Grand Mandapam Showcase Image */}
                <div
                  className="relative overflow-hidden border-2 border-[#C5A059]/80 shadow-md group"
                  style={{
                    borderTopLeftRadius: '24px',
                    borderBottomRightRadius: '24px',
                  }}
                >
                  <img
                    src={MOMENTS_GALLERY[0]?.image || VENUE_INFO.aboutImage}
                    alt="Varathambal Chockalingam Kalyana Mahal Stage"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A1C40]/90 via-[#4A1C40]/25 to-transparent" />

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-3 left-3 bg-[#4A1C40]/90 backdrop-blur-xs text-[#C5A059] px-3 py-1 rounded-full border border-[#C5A059]/60 shadow-sm flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    <span>Grand Mandapam</span>
                  </div>

                  {/* Top-Right AC Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 text-[#4A1C40] px-2.5 py-1 rounded-full border border-[#C5A059]/50 shadow-sm flex items-center gap-1 text-[11px] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% AC Mahal</span>
                  </div>

                  {/* Bottom Image Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-xs">
                      Grand Wedding &amp; Reception Stage
                    </div>
                    <div className="text-[11px] text-[#C5A059] font-medium flex items-center gap-2 mt-0.5">
                      <span>450+ Guests Seating</span>
                      <span>•</span>
                      <span>Madipakkam, Chennai</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Inset Photo Collage Thumbnail (Dining Hall) */}
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-4 right-3 w-32 sm:w-36 overflow-hidden border-2 border-[#C5A059] shadow-xl bg-white hidden sm:block group"
                  style={{
                    borderTopRightRadius: '16px',
                    borderBottomLeftRadius: '16px',
                  }}
                >
                  <img
                    src={MOMENTS_GALLERY[3]?.image || "https://lakshmihall.com/assets/laks-img/image-four.webp"}
                    alt="150 Dining Hall"
                    referrerPolicy="no-referrer"
                    className="w-full h-20 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="bg-[#4A1C40] py-1 px-2 text-center text-[10px] font-bold text-[#C5A059] tracking-wider uppercase">
                    150 Dining Hall
                  </div>
                </motion.div>
              </div>

              {/* Interactive Quick Date Check & Availability Element */}
              <div className="pt-2 border-t border-[#F1EBE4] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#4A1C40] leading-tight">
                      Check Date Availability
                    </h3>
                    <p className="text-[11px] text-[#666666]">
                      Select celebration type &amp; inquire instantly
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#F9F8F4] text-[#C5A059] border border-[#C5A059]/40 rounded-full">
                    Instant Quote
                  </span>
                </div>

                {/* Quick Event Category Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {EVENT_TYPES.map((ev) => (
                    <button
                      key={ev}
                      type="button"
                      onClick={() => setSelectedEvent(ev)}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-all cursor-pointer ${
                        selectedEvent === ev
                          ? 'bg-[#4A1C40] text-white border-[#4A1C40] shadow-xs'
                          : 'bg-[#F9F8F4] text-[#555555] border-[#E5E0D8] hover:border-[#C5A059] hover:text-[#4A1C40]'
                      }`}
                    >
                      {ev}
                    </button>
                  ))}
                </div>

                {/* Direct Action Buttons: Inquire & Call Now */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onOpenBooking(selectedEvent)}
                    className="py-2.5 px-3 bg-[#4A1C40] hover:bg-[#34122c] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    style={{
                      borderTopLeftRadius: '14px',
                      borderBottomRightRadius: '14px',
                    }}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Inquire {selectedEvent}</span>
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={VENUE_INFO.telLink}
                    className="py-2.5 px-3 bg-[#C5A059] hover:bg-[#b58f48] text-[#4A1C40] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                    style={{
                      borderTopRightRadius: '14px',
                      borderBottomLeftRadius: '14px',
                    }}
                  >
                    <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                    <span>Call Manager</span>
                  </motion.a>
                </div>

                {/* Venue Trust Highlights Bar */}
                <div className="pt-2 border-t border-[#F1EBE4] grid grid-cols-3 gap-1 text-center text-[10px] text-[#666666]">
                  <div className="flex flex-col items-center py-1 bg-[#F9F8F4] rounded border border-[#E5E0D8]/60">
                    <span className="font-bold text-[#4A1C40]">8 AC Rooms</span>
                    <span className="text-[9px] text-[#888888]">Included</span>
                  </div>
                  <div className="flex flex-col items-center py-1 bg-[#F9F8F4] rounded border border-[#E5E0D8]/60">
                    <span className="font-bold text-[#4A1C40]">Valet Parking</span>
                    <span className="text-[9px] text-[#888888]">Cars &amp; Bikes</span>
                  </div>
                  <div className="flex flex-col items-center py-1 bg-[#F9F8F4] rounded border border-[#E5E0D8]/60">
                    <span className="font-bold text-[#4A1C40]">Brahmin Pkg</span>
                    <span className="text-[9px] text-[#888888]">2½ Days Setup</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

