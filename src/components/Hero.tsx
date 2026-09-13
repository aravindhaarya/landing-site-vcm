import React, { useState } from 'react';
import { Phone, Calendar, Check, Send, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/banquetData';

interface HeroProps {
  onOpenBooking: (eventType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState('Wedding');
  const [submitted, setSubmitted] = useState(false);
  const [guestCount, setGuestCount] = useState('300 - 450');
  const [clientPhone, setClientPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="hero" className="relative bg-[#F9F8F4] pt-8 pb-16 overflow-hidden border-b border-[#F1EBE4]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#4A1C40]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, Key Highlights, Call Now */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C5A059]/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-semibold tracking-wider text-[#4A1C40] uppercase">
                Premier Kalyana Mahal in Madipakkam, Chennai
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1C40] tracking-tight leading-tight">
                Varathambal Chockalingam Kalyana Mahal
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                An ideal venue for grand weddings and social gatherings, accommodating over 450 guests comfortably with customizable seating, 150 dining, 8 AC rooms, and modern amenities.
              </p>
            </div>

            {/* Quick Feature Highlights as per content */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs">
                <div className="text-xs font-bold text-[#4A1C40]">450 Seating</div>
                <div className="text-[11px] text-[#777777]">Main Air-Conditioned Hall</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs">
                <div className="text-xs font-bold text-[#4A1C40]">150 Dining</div>
                <div className="text-[11px] text-[#777777]">Dedicated Dining Space</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs">
                <div className="text-xs font-bold text-[#4A1C40]">8 AC Rooms</div>
                <div className="text-[11px] text-[#777777]">Bride &amp; Groom Suites</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs">
                <div className="text-xs font-bold text-[#4A1C40]">Cars + Valet</div>
                <div className="text-[11px] text-[#777777]">Bikes Can Be Parked</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs">
                <div className="text-xs font-bold text-[#4A1C40]">100% AC Mahal</div>
                <div className="text-[11px] text-[#777777]">Party Hall &amp; Dining</div>
              </div>
              <div className="bg-[#FFFFFF] p-3 rounded border border-[#C5A059]/30 shadow-xs">
                <div className="text-xs font-bold text-[#4A1C40]">Brahmin Package</div>
                <div className="text-[11px] text-[#777777]">Specialized 2½ Days</div>
              </div>
            </div>

            {/* Prominent Action & Call Now row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-call-now-btn"
                href={VENUE_INFO.telLink}
                className="px-7 py-3.5 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-widest font-bold hover:bg-[#b58f48] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                style={{
                  borderTopLeftRadius: '22px',
                  borderBottomRightRadius: '22px',
                }}
              >
                <Phone className="w-4 h-4 fill-[#4A1C40]" />
                <span>Call Now: {VENUE_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking(selectedEvent)}
                className="px-7 py-3.5 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-widest font-bold hover:bg-[#34122c] transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                style={{
                  borderTopRightRadius: '22px',
                  borderBottomLeftRadius: '22px',
                }}
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Book / Check Dates</span>
              </button>
            </div>

            {/* Address snippet */}
            <div className="pt-2 flex items-start gap-2 text-xs text-[#666666]">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>
                {VENUE_INFO.address}
              </span>
            </div>
          </div>

          {/* Right Column: Embedded Request Form (as explicitly given in user content) */}
          <div className="lg:col-span-5">
            <div
              className="bg-[#FFFFFF] border-2 border-[#C5A059] p-6 sm:p-8 shadow-xl relative"
              style={{
                borderTopLeftRadius: '28px',
                borderBottomRightRadius: '28px',
              }}
            >
              {/* Header of Request Form */}
              <div className="border-b border-[#F1EBE4] pb-4 mb-5">
                <div className="inline-block px-3 py-1 bg-[#4A1C40] text-[#C5A059] text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
                  Instant Inquiry
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#4A1C40]">
                  Request Form
                </h2>
                <p className="text-xs text-[#666666] mt-1">
                  Select your event and submit to check hall availability immediately.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4A1C40]">
                      Request Received!
                    </h3>
                    <p className="text-xs text-[#666666] mt-1.5 max-w-xs mx-auto">
                      Thank you for inquiring about your <strong>{selectedEvent}</strong>. Our booking manager will call you shortly on your provided contact.
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={VENUE_INFO.telLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-[#4A1C40] text-xs font-bold uppercase tracking-wider rounded-full shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                      <span>Call Now: {VENUE_INFO.phone}</span>
                    </a>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#777777] underline hover:text-[#4A1C40] block mx-auto pt-2 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1.5">
                      Select your event <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {EVENT_TYPES.map((ev) => (
                        <label
                          key={ev}
                          className={`flex items-center gap-2 px-3 py-2 rounded border text-xs font-medium cursor-pointer transition-colors ${
                            selectedEvent === ev
                              ? 'bg-[#4A1C40] text-[#FFFFFF] border-[#4A1C40]'
                              : 'bg-[#F9F8F4] text-[#333333] border-[#E5E0D8] hover:border-[#C5A059]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="eventType"
                            value={ev}
                            checked={selectedEvent === ev}
                            onChange={() => setSelectedEvent(ev)}
                            className="sr-only"
                          />
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            selectedEvent === ev ? 'border-white bg-[#C5A059]' : 'border-[#999999]'
                          }`}>
                            {selectedEvent === ev && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </span>
                          <span>{ev}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1">
                      Expected Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    >
                      <option value="Up to 150">Up to 150 Guests (Dining capacity)</option>
                      <option value="150 - 300">150 - 300 Guests</option>
                      <option value="300 - 450">300 - 450 Guests (Full Seating)</option>
                      <option value="450+">450+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1">
                      Your Phone / Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 94441 39077"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>

                  {/* Submit Button matching user content */}
                  <button
                    type="submit"
                    id="hero-request-submit-btn"
                    className="w-full py-3.5 bg-[#4A1C40] hover:bg-[#34122c] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{
                      borderTopLeftRadius: '16px',
                      borderBottomRightRadius: '16px',
                    }}
                  >
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Submit Request</span>
                  </button>

                  {/* Direct Call action inside the form */}
                  <div className="pt-2 text-center border-t border-[#F1EBE4]">
                    <span className="text-[11px] text-[#777777]">Need instant booking support? </span>
                    <a
                      href={VENUE_INFO.telLink}
                      className="text-[11px] font-bold text-[#4A1C40] hover:text-[#C5A059] inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#C5A059]" />
                      <span>Call Now: {VENUE_INFO.phone}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
