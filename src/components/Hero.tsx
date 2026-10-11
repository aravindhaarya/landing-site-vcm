import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import {
  Phone,
  Calendar,
  Sparkles,
  MapPin,
  Play,
  Pause,
  Eye,
  EyeOff,
  Video
} from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/banquetData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_PHONE, getWhatsAppBookingUrl, triggerWhatsAppRedirect } from '../utils/whatsapp';

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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState('Wedding');
  const [heroDate, setHeroDate] = useState('');
  const [heroName, setHeroName] = useState('');
  const [heroPhone, setHeroPhone] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [clearViewMode, setClearViewMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleHeroQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'VCKM-' + Math.floor(100000 + Math.random() * 900000);
    const targetUrl = getWhatsAppBookingUrl({
      fullName: heroName || 'Valued Guest',
      phone: heroPhone || 'Direct Inquiry',
      eventType: selectedEvent,
      selectedDate: heroDate,
      timeSlot: 'Full Day',
      guestsCount: '300 - 450',
      roomsCount: '8 Rooms',
      brahminPackage: selectedEvent === 'Wedding',
      notes: 'Direct inquiry submitted from website homepage.',
      referenceId: ref,
    });
    triggerWhatsAppRedirect(targetUrl);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Background Video Layer - Seen Very Clearly */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/mahal_stage_close_1791710052584.jpg"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105 transition-all duration-700 transform scale-100"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Minimal scrim gradient to keep video vividly visible while text is crisp */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            clearViewMode
              ? 'opacity-0'
              : 'bg-gradient-to-t from-black/60 via-black/20 to-black/40'
          }`}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            clearViewMode
              ? 'opacity-0'
              : 'bg-radial-[circle_at_center] from-transparent via-black/10 to-black/45'
          }`}
        />
      </div>

      {/* Floating Video Controls Bar (Top Right of Hero) */}
      <div className="absolute top-5 right-4 sm:right-8 z-30 flex items-center gap-2">
        <button
          onClick={toggleVideoPlayback}
          className="px-3 py-1.5 bg-black/50 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md rounded-full border border-white/20 text-xs font-medium flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>

        <button
          onClick={() => setClearViewMode(!clearViewMode)}
          className={`px-3 py-1.5 backdrop-blur-md rounded-full border text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer ${
            clearViewMode
              ? 'bg-[#C5A059] text-[#4A1C40] border-[#C5A059]'
              : 'bg-black/50 hover:bg-black/75 text-white/90 border-white/20'
          }`}
          title={clearViewMode ? 'Restore Content View' : 'Clear View to see video clearly'}
        >
          {clearViewMode ? (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              <span>Show Booking Details</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Clear View Video</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content Layout over Background Video */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full transition-opacity duration-500 ${
          clearViewMode ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Frosted Glass Content Card to showcase video clearly */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left transform-gpu will-change-transform bg-black/45 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#C5A059]/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Video className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-semibold tracking-wider text-amber-200 uppercase">
                Premier Kalyana Mahal in Madipakkam, Chennai
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <h1 id="hero-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                Varathambal Chockalingam Kalyana Mahal
              </h1>
              <p id="hero-tagline" className="mt-2 text-base sm:text-lg text-neutral-200 font-normal leading-relaxed drop-shadow-sm">
                The Perfect Destination for all your occasions.
              </p>
            </motion.div>

            {/* Quick Feature Highlights as per content */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
            >
              <div className="bg-white/15 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#C5A059]">450 Seating</div>
                <div className="text-[11px] text-neutral-200">Main AC Hall</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#C5A059]">150 Dining</div>
                <div className="text-[11px] text-neutral-200">Traditional Space</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#C5A059]">8 AC Rooms</div>
                <div className="text-[11px] text-neutral-200">Bride &amp; Groom Suites</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#C5A059]">Cars + Valet</div>
                <div className="text-[11px] text-neutral-200">Bikes Can Be Parked</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#C5A059]">100% AC Mahal</div>
                <div className="text-[11px] text-neutral-200">Centralized Cooling</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#C5A059]">Brahmin Package</div>
                <div className="text-[11px] text-neutral-200">Specialized 2½ Days</div>
              </div>
            </motion.div>

            {/* Prominent Action & Call Now / WhatsApp row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-call-now-btn"
                href={VENUE_INFO.telLink}
                className="px-6 py-3.5 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-widest font-bold hover:bg-[#b58f48] transition-all shadow-lg flex items-center gap-2"
                style={{
                  borderTopLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
              >
                <Phone className="w-4 h-4 fill-[#4A1C40]" />
                <span>Call: {VENUE_INFO.phone}</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBooking(selectedEvent)}
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-lg cursor-pointer flex items-center gap-2"
                style={{
                  borderTopRightRadius: '20px',
                  borderBottomLeftRadius: '20px',
                }}
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Request Form (WhatsApp)</span>
              </motion.button>
            </motion.div>

            {/* Direct WhatsApp info line */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-white bg-white/10 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-white/20 w-fit">
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
              <span>
                Prefilled responses redirected instantly to WhatsApp: <strong className="text-emerald-300">{WHATSAPP_PHONE}</strong>
              </span>
            </motion.div>

            {/* Address snippet */}
            <motion.div variants={itemVariants} className="flex items-start gap-2 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>
                {VENUE_INFO.address}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Interactive Request Form Card */}
          <div className="lg:col-span-5">
            <div
              id="hero-collage-container"
              className="relative bg-white/95 backdrop-blur-md border-2 border-[#C5A059] p-5 sm:p-6 shadow-2xl space-y-4"
              style={{
                borderTopLeftRadius: '32px',
                borderBottomRightRadius: '32px',
              }}
            >
              {/* Card Title & WhatsApp Badge */}
              <div className="flex items-start justify-between gap-3 border-b border-[#F1EBE4] pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      WhatsApp Connected
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#4A1C40] mt-0.5">
                    Request Form &amp; Date Inquiry
                  </h3>
                  <p className="text-[11px] text-[#666666]">
                    Prefills and redirects directly to WhatsApp <strong className="text-emerald-700">{WHATSAPP_PHONE}</strong>
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6 fill-emerald-600" />
                </div>
              </div>

              {/* Event Type selector pills */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#4A1C40]">
                  Select Occasion
                </label>
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
              </div>

              {/* Embedded Quick Request Form */}
              <form onSubmit={handleHeroQuickSubmit} className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1C40] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={heroDate}
                      onChange={(e) => setHeroDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#F9F8F4] border border-[#E5E0D8] rounded-lg text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1C40] mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh"
                      value={heroName}
                      onChange={(e) => setHeroName(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#F9F8F4] border border-[#E5E0D8] rounded-lg text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1C40] mb-1">
                    Your WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={heroPhone}
                    onChange={(e) => setHeroPhone(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-[#F9F8F4] border border-[#E5E0D8] rounded-lg text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  />
                </div>

                {/* Submit & Redirect to WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  id="hero-whatsapp-submit-btn"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer rounded-xl"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send Request to WhatsApp ({WHATSAPP_PHONE})</span>
                </motion.button>
              </form>

              {/* Or Open Detailed Form */}
              <div className="pt-1 flex items-center justify-between text-[11px] border-t border-[#F1EBE4]">
                <button
                  type="button"
                  onClick={() => onOpenBooking(selectedEvent)}
                  className="text-[#4A1C40] hover:text-[#C5A059] font-bold underline cursor-pointer flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Need Rooms or Catering? Detailed Form &rarr;</span>
                </button>

                <a
                  href={VENUE_INFO.telLink}
                  className="text-[#777777] hover:text-[#4A1C40] font-semibold flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#C5A059]" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Venue Trust Highlights Bar */}
              <div className="pt-2 border-t border-[#F1EBE4] grid grid-cols-3 gap-1.5 text-center text-[10px] text-[#666666]">
                <div className="flex flex-col items-center py-1 bg-[#F9F8F4] rounded border border-[#E5E0D8]/60">
                  <span className="font-bold text-[#4A1C40]">450 Seating</span>
                  <span className="text-[9px] text-[#888888]">150 Dining</span>
                </div>
                <div className="flex flex-col items-center py-1 bg-[#F9F8F4] rounded border border-[#E5E0D8]/60">
                  <span className="font-bold text-[#4A1C40]">8 AC Rooms</span>
                  <span className="text-[9px] text-[#888888]">Included</span>
                </div>
                <div className="flex flex-col items-center py-1 bg-[#F9F8F4] rounded border border-[#E5E0D8]/60">
                  <span className="font-bold text-[#4A1C40]">Brahmin Pkg</span>
                  <span className="text-[9px] text-[#888888]">2½ Days Setup</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
