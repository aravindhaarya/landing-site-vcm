import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, Sparkles, Send, Calendar, Phone, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_PHONE, WHATSAPP_PHONE_DISPLAY, getWhatsAppBookingUrl, triggerWhatsAppRedirect } from '../utils/whatsapp';
import { VENUE_INFO } from '../data/banquetData';

interface FloatingWhatsAppProps {
  onOpenBooking: (eventType?: string) => void;
}

// Framer Motion staggered entrance variants
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      delayChildren: 2, // 2-second delay once page is fully loaded
      staggerChildren: 0.25, // Staggered entrance for tooltip and button
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      duration: 0.6,
    },
  },
};

const tooltipVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 22,
      duration: 0.5,
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 18,
      delay: 0.1,
    },
  },
};

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickEvent, setQuickEvent] = useState('Wedding');
  const [quickDate, setQuickDate] = useState('');

  // Track when the page is fully loaded
  const [isPageLoaded, setIsPageLoaded] = useState(() => {
    return typeof document !== 'undefined' && document.readyState === 'complete';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
      return;
    }

    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    // Fallback: If readyState transitions or load already fired
    const fallbackTimer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 150);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppBookingUrl({
      fullName: quickName || 'Guest',
      phone: 'Provided via WhatsApp Chat',
      eventType: quickEvent,
      selectedDate: quickDate,
      timeSlot: 'Full Day',
      guestsCount: '300 - 450',
      roomsCount: '8 Rooms',
      brahminPackage: false,
      notes: 'Quick inquiry from website WhatsApp widget.',
      referenceId: 'VCKM-' + Math.floor(100000 + Math.random() * 900000),
    });
    triggerWhatsAppRedirect(url);
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    const defaultUrl = `https://wa.me/919962621652?text=${encodeURIComponent(
      'Namaste! I would like to inquire about booking Varathambal Chockalingam Kalyana Mahal in Madipakkam, Chennai.'
    )}`;
    triggerWhatsAppRedirect(defaultUrl);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isPageLoaded ? 'visible' : 'hidden'}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end"
    >
      {/* Mini popup card when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border-2 border-[#C5A059] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#4A1C40] p-3.5 text-white flex items-center justify-between border-b-2 border-[#C5A059]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm leading-tight">
                    WhatsApp Request
                  </h4>
                  <p className="text-[10px] text-emerald-300 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    {WHATSAPP_PHONE} • Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-3.5 space-y-3 bg-[#FAF8F5]">
              <div className="bg-white p-2.5 rounded-lg border border-[#E5E0D8] text-[11px] text-[#555555] leading-relaxed shadow-xs">
                👋 <strong>Namaste!</strong> Send a prefilled booking request directly to our hall manager on WhatsApp:
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-2">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1C40] mb-0.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#E5E0D8] rounded-md text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1C40] mb-0.5">
                      Event
                    </label>
                    <select
                      value={quickEvent}
                      onChange={(e) => setQuickEvent(e.target.value)}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-[#E5E0D8] rounded-md text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Conference">Conference</option>
                      <option value="Birthday / Party">Birthday / Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1C40] mb-0.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={quickDate}
                      onChange={(e) => setQuickDate(e.target.value)}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-[#E5E0D8] rounded-md text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Send to WhatsApp ({WHATSAPP_PHONE})</span>
                </button>
              </form>

              <div className="pt-1 border-t border-[#E5E0D8] flex items-center justify-between text-[11px]">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="text-[#4A1C40] hover:text-[#C5A059] font-bold underline cursor-pointer transition-colors"
                >
                  Detailed Request Form
                </button>

                <button
                  type="button"
                  onClick={handleDirectChat}
                  className="text-emerald-700 hover:text-emerald-800 font-semibold cursor-pointer transition-colors"
                >
                  Direct Chat &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button Area with Staggered Entrance */}
      <div className="flex items-center gap-2 relative">
        {/* Staggered Tooltip Pill */}
        {!isOpen && (
          <motion.div
            variants={tooltipVariants}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#4A1C40] text-xs font-bold rounded-full shadow-lg border border-[#C5A059] group cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setIsOpen(true)}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600 shrink-0" />
            <span className="whitespace-nowrap">Chat on WhatsApp: {WHATSAPP_PHONE}</span>
          </motion.div>
        )}

        {/* Floating WhatsApp Action Button */}
        <motion.div
          variants={buttonVariants}
          className="relative flex items-center justify-center"
        >
          {/* Subtle Ambient Pulse Ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{
              scale: [1, 1.4, 1.6],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 2.8, // starts after button finishes entrance
            }}
            className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
          />

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="WhatsApp Booking Inquiry"
            id="floating-whatsapp-btn"
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center cursor-pointer ring-4 ring-emerald-400/30 transition-colors"
          >
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

            {/* Notification Indicator Dot */}
            <motion.span
              variants={badgeVariants}
              className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-xs"
              title="Online now"
            >
              <span className="w-1.5 h-1.5 bg-[#4A1C40] rounded-full" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
