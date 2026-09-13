import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { VENUE_INFO, FACILITIES } from '../data/banquetData';

interface AboutStoryProps {
  onOpenBooking: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const AboutStory: React.FC<AboutStoryProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-0">
      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: About Us Photo from attached content */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative overflow-hidden border-4 border-[#C5A059] shadow-xl group"
                style={{
                  borderTopRightRadius: '60px',
                  borderBottomLeftRadius: '60px',
                }}
              >
                <img
                  src={VENUE_INFO.aboutImage}
                  alt={VENUE_INFO.aboutImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // graceful fallback if external webp fails to load
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1C40]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-lg font-bold">Varathambal Chockalingam Kalyana Mahal</div>
                  <div className="text-xs text-[#C5A059] font-medium">Madipakkam, Chennai</div>
                </div>
              </div>

              {/* Verified Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-4 -right-4 bg-[#4A1C40] text-white p-3.5 border-2 border-[#C5A059] shadow-lg hidden sm:flex items-center gap-2.5"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">450+ Capacity</div>
                  <div className="text-[10px] text-neutral-300">Air-Conditioned</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: About Us Text verbatim from user content */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F9F8F4] border border-[#C5A059] rounded-full text-xs font-bold text-[#4A1C40] uppercase tracking-wider">
                  About Us
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1C40] leading-tight">
                  {VENUE_INFO.aboutHeading}
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="text-base text-[#555555] leading-relaxed">
                {VENUE_INFO.aboutText}
              </motion.p>

              {/* Call to action buttons */}
              <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={VENUE_INFO.telLink}
                  className="px-6 py-3 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#b58f48] transition-colors shadow-sm flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                  <span>Call Now: {VENUE_INFO.phone}</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#34122c] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Submit Request Form</span>
                </motion.button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Facilities Section directly matching user content */}
      <section id="facilities" className="py-10 sm:py-14 bg-[#F9F8F4] border-b border-[#F1EBE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-7 sm:mb-9 space-y-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] bg-white px-3 py-1 rounded-full border border-[#C5A059]/40 inline-block shadow-2xs">
              Hall Highlights
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A1C40]">
              Facilities
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Modern, air-conditioned hall facilities designed for smooth, memorable celebrations.
            </p>
          </motion.div>

          {/* 8 Facilities grid - compact 2-column mobile and 4-column desktop layout */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4.5"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {FACILITIES.map((fac) => (
              <motion.div
                key={fac.id}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-[#FFFFFF] p-3.5 sm:p-4.5 border border-[#E5E0D8] hover:border-[#C5A059] transition-all hover:shadow-md text-center flex flex-col items-center justify-between space-y-2.5 sm:space-y-3 group cursor-default"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F9F8F4] border border-[#C5A059]/40 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform shadow-2xs">
                  <img
                    src={fac.iconImg}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
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
              </motion.div>
            ))}
          </motion.div>

          {/* Safety & Style Lift note - streamlined banner */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl mx-auto bg-[#FFFFFF] py-2.5 px-4 rounded-full border border-[#C5A059]/70 flex items-center justify-center gap-2.5 text-center shadow-2xs text-xs"
          >
            <span className="font-bold text-[10px] text-[#4A1C40] uppercase tracking-wider bg-[#F9F8F4] px-2 py-0.5 rounded border border-[#C5A059]/30">
              Safety &amp; Style
            </span>
            <span className="text-xs text-[#555555] font-medium">
              Hydraulic &amp; passenger lifts available for all floors
            </span>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

