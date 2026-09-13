import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles, Check, ChevronRight, Users, ShieldCheck, Star } from 'lucide-react';
import { HALLS, VENUE_INFO } from '../data/banquetData';

interface HeroProps {
  onOpenBooking: (hallId?: string, eventType?: string, guests?: number) => void;
  onViewGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onViewGallery,
}) => {
  const [selectedHall, setSelectedHall] = useState(HALLS[0].id);
  const [selectedEventType, setSelectedEventType] = useState('Wedding Reception');
  const [selectedGuests, setSelectedGuests] = useState('250-450');

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const guestMap: Record<string, number> = {
      '50-100': 75,
      '100-250': 180,
      '250-450': 350,
      '450-850': 600,
      '850+': 850,
    };
    onOpenBooking(selectedHall, selectedEventType, guestMap[selectedGuests] || 250);
  };

  return (
    <section id="hero" className="relative bg-[#F9F8F4] overflow-hidden pt-8 pb-20 border-b border-[#F1EBE4]">
      {/* Subtle organic background swirls / watermark */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A1C40]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Banner: Text on Left, Arch Image Collage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Heading, Subheading, Buttons */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-left">
            {/* Tag badge with wedding icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C5A059]/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A1C40] font-bold font-sans">
                Luxury Wedding &amp; Event Spaces
              </span>
            </div>

            {/* Main Display Heading verbatim from Banquet Wedding Hall theme */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#4A1C40] font-normal leading-[1.15] tracking-tight">
              Celebrate in Style at{' '}
              <span className="italic text-[#C5A059] block sm:inline font-serif">
                The Grand Éclat
              </span>
            </h1>

            {/* Subtext verbatim from Banquet Wedding Hall theme */}
            <p className="text-base sm:text-xl text-[#555555] font-serif italic font-normal leading-relaxed max-w-xl">
              The perfect venue for your weddings, parties, and corporate events.
            </p>

            <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
              Surrounded by manicured estates, 24-foot crystal chandeliers, and white-glove hospitality. Aura Grand Palais offers an idyllic sanctuary where unforgettable moments unfold.
            </p>

            {/* Action Buttons styled with the signature asymmetric petal corners */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-3.5 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-widest font-bold hover:bg-[#35132d] transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                style={{
                  borderTopLeftRadius: '25px',
                  borderBottomRightRadius: '25px',
                  borderTopRightRadius: '0px',
                  borderBottomLeftRadius: '0px',
                  border: '2px solid #C5A059',
                }}
              >
                <span>Plan Your Visit</span>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <button
                onClick={onViewGallery}
                className="px-7 py-3.5 bg-[#FFFFFF] text-[#4A1C40] text-xs uppercase tracking-widest font-bold hover:bg-[#F1EBE4] transition-all shadow-xs border border-[#C5A059] cursor-pointer flex items-center gap-2.5"
                style={{
                  borderTopLeftRadius: '25px',
                  borderBottomRightRadius: '25px',
                  borderTopRightRadius: '0px',
                  borderBottomLeftRadius: '0px',
                }}
              >
                <span>View Photo Gallery</span>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>

            {/* Quick highlight points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#555555] font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Up to 1,600 Estate Capacity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Complimentary 48-Hour Date Hold</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Outside Catering Approved</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature 3-Image Collage with Theme Arch Borders */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Left tall card with Arch Top-Right & Bottom-Left */}
              <div className="space-y-4">
                <div
                  className="overflow-hidden border-4 border-[#C5A059] shadow-xl relative group"
                  style={{
                    borderTopRightRadius: '55px',
                    borderBottomLeftRadius: '55px',
                    borderTopLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Wedding ceremony floral altar"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A1C40]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                    <span className="text-xs font-serif italic">Ceremony Sanctuary</span>
                  </div>
                </div>

                {/* Floating mini stat card */}
                <div
                  className="bg-[#FFFFFF] p-4 border border-[#C5A059]/40 shadow-md text-center"
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                  }}
                >
                  <div className="flex justify-center text-[#C5A059] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#4A1C40]">4.98 / 5.0 Rating</div>
                  <div className="text-[11px] text-[#777777]">380+ Verified Celebrations</div>
                </div>
              </div>

              {/* Right stacked cards with alternating arch shapes */}
              <div className="space-y-4">
                <div
                  className="overflow-hidden border-4 border-[#4A1C40] shadow-xl relative group"
                  style={{
                    borderTopLeftRadius: '55px',
                    borderBottomRightRadius: '55px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '0px',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                    alt="Imperial ballroom table setting"
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div
                  className="overflow-hidden border-4 border-[#C5A059] shadow-xl relative group"
                  style={{
                    borderTopRightRadius: '40px',
                    borderBottomLeftRadius: '40px',
                    borderTopLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury banquet dinner lighting"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Booking Bar verbatim inspired by theme: "Reserve Your Date - Availability is limited — secure your special day today." */}
        <div
          className="bg-[#FFFFFF] border-2 border-[#C5A059] shadow-xl p-6 sm:p-8"
          style={{
            borderTopLeftRadius: '32px',
            borderBottomRightRadius: '32px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F1EBE4]">
            <div>
              <div className="flex items-center gap-2 text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-1">
                <Calendar className="w-4 h-4" />
                <span>Instant Availability Check</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#4A1C40] font-normal">
                Reserve Your Date
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] italic font-serif">
                Availability is limited — secure your special day today.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#4A1C40] bg-[#F9F8F4] px-4 py-2 border border-[#C5A059]/30 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Autumn &amp; Spring 2026/2027 Calendar Open</span>
            </div>
          </div>

          {/* Form Controls */}
          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-6 items-end">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                Preferred Hall
              </label>
              <select
                value={selectedHall}
                onChange={(e) => setSelectedHall(e.target.value)}
                className="w-full bg-[#F9F8F4] border border-[#DDD] focus:border-[#C5A059] text-sm text-[#333] px-3.5 py-3 rounded focus:outline-none cursor-pointer"
              >
                {HALLS.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name} ({h.capacityMax} max)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                Event Category
              </label>
              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="w-full bg-[#F9F8F4] border border-[#DDD] focus:border-[#C5A059] text-sm text-[#333] px-3.5 py-3 rounded focus:outline-none cursor-pointer"
              >
                <option value="Wedding Reception">Wedding Reception</option>
                <option value="Nikah / Sangeet / Baraat">Nikah / Sangeet / Cultural</option>
                <option value="Gala / Charity Ball">Gala / Charity Ball</option>
                <option value="Anniversary / Birthday">Milestone Anniversary</option>
                <option value="Corporate Banquet">Corporate Summit / Gala</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                Estimated Guests
              </label>
              <select
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
                className="w-full bg-[#F9F8F4] border border-[#DDD] focus:border-[#C5A059] text-sm text-[#333] px-3.5 py-3 rounded focus:outline-none cursor-pointer"
              >
                <option value="50-100">Intimate: 50 – 100 Guests</option>
                <option value="100-250">Classic: 100 – 250 Guests</option>
                <option value="250-450">Grand: 250 – 450 Guests</option>
                <option value="450-850">Royal: 450 – 850 Guests</option>
                <option value="850+">Full Estate: 850+ Guests</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#4A1C40] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest hover:bg-[#33112b] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                style={{
                  borderTopLeftRadius: '18px',
                  borderBottomRightRadius: '18px',
                  border: '1px solid #C5A059',
                }}
              >
                <span>Check Dates &amp; Quote</span>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
