import React, { useState } from 'react';
import { Phone, Calendar, Sparkles, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Award, Clock, Send, Image as ImageIcon } from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/banquetData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_PHONE, getWhatsAppBookingUrl, triggerWhatsAppRedirect } from '../utils/whatsapp';
import { FestiveHeroBackground } from './FestiveHeroBackground';

interface HeroProps {
  onOpenBooking: (eventType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState('Wedding');
  const [heroDate, setHeroDate] = useState('');
  const [heroName, setHeroName] = useState('');
  const [heroPhone, setHeroPhone] = useState('');

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
    <section id="hero" className="relative bg-[#1C091A] pt-8 pb-16 overflow-hidden">
      {/* Auspicious South Indian Festive Animated Background with Kolams, Diyas & Petals */}
      <FestiveHeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, Key Highlights, Call Now & WhatsApp */}
          <div
            className="lg:col-span-7 space-y-6 text-left bg-white/95 p-6 sm:p-8 rounded-3xl border border-[#C5A059]/40 shadow-xl"
          >
            {/* Tag Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C5A059]/50 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-xs font-semibold tracking-wider text-[#4A1C40] uppercase">
                  Premier Kalyana Mahal in Madipakkam, Chennai
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <p id="hero-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1C40] tracking-tight leading-tight">
                Varathambal Chockalingam Kalyana Mahal
              </p>
              <p id="hero-tagline" className="mt-3 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                The Perfect Destination for all your occasions.
              </p>
            </div>

            {/* Quick Feature Highlights as per content */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#4A1C40]">450 Seating</div>
                <div className="text-[11px] text-[#777777]">Main Air-Conditioned Hall</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#4A1C40]">150 Dining</div>
                <div className="text-[11px] text-[#777777]">Dedicated Dining Space</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#4A1C40]">8 AC Rooms</div>
                <div className="text-[11px] text-[#777777]">Bride &amp; Groom Suites</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#4A1C40]">Cars + Valet</div>
                <div className="text-[11px] text-[#777777]">Bikes Can Be Parked</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#4A1C40]">100% AC Mahal</div>
                <div className="text-[11px] text-[#777777]">Party Hall &amp; Dining</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs hover:border-[#C5A059] transition-colors">
                <div className="text-xs font-bold text-[#4A1C40]">Brahmin Package</div>
                <div className="text-[11px] text-[#777777]">Specialized 2½ Days</div>
              </div>
            </div>

            {/* Prominent Action & Call Now / WhatsApp / Video Tour row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                id="hero-call-now-btn"
                href={VENUE_INFO.telLink}
                className="px-6 py-3.5 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-widest font-bold hover:bg-[#b58f48] active:scale-[0.98] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                style={{
                  borderTopLeftRadius: '22px',
                  borderBottomRightRadius: '22px',
                }}
              >
                <Phone className="w-4 h-4 fill-[#4A1C40]" />
                <span>Call: {VENUE_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking(selectedEvent)}
                className="px-6 py-3.5 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-widest font-bold hover:bg-[#34122c] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 border border-[#C5A059]"
                style={{
                  borderTopRightRadius: '22px',
                  borderBottomLeftRadius: '22px',
                }}
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
                <span>Request Form (WhatsApp)</span>
              </button>

              <a
                href="#moments"
                className="px-5 py-3.5 bg-white text-[#4A1C40] text-xs uppercase tracking-widest font-bold hover:bg-[#F9F8F4] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 border-2 border-[#C5A059] rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>View Moments</span>
              </a>
            </div>

            {/* Direct WhatsApp info line */}
            <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 py-1.5 px-3 rounded-lg border border-emerald-200/60 w-fit">
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600 shrink-0" />
              <span>
                Prefilled responses redirected instantly to WhatsApp: <strong>{WHATSAPP_PHONE}</strong>
              </span>
            </div>

            {/* Address snippet */}
            <div className="pt-1 flex items-start gap-2 text-xs text-[#666666]">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>
                {VENUE_INFO.address}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Interactive Request Form Card */}
          <div className="lg:col-span-5">
            <div
              id="hero-collage-container"
              className="relative bg-[#FFFFFF] border-2 border-[#C5A059] p-5 sm:p-6 shadow-2xl space-y-4"
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
                <button
                  type="submit"
                  id="hero-whatsapp-submit-btn"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer rounded-xl"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send Request to WhatsApp ({WHATSAPP_PHONE})</span>
                </button>
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
