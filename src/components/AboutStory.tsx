import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { VENUE_INFO, FACILITIES } from '../data/banquetData';

interface AboutStoryProps {
  onOpenBooking: () => void;
}

export const AboutStory: React.FC<AboutStoryProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-0">
      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: About Us Photo from attached content */}
            <div className="lg:col-span-5 relative">
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
              <div
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
              </div>
            </div>

            {/* Right: About Us Text verbatim from user content */}
            <div className="lg:col-span-7 space-y-6">
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
        </div>
      </section>

      {/* Facilities Section directly matching user content */}
      <section id="facilities" className="py-16 bg-[#F9F8F4] border-b border-[#F1EBE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-white px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 inline-block">
              Hall Highlights
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#4A1C40]">
              Facilities
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Equipped with modern amenities and designed for smooth, memorable celebrations.
            </p>
          </div>

          {/* 8 Facilities grid as per content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-[#FFFFFF] p-6 border border-[#E5E0D8] hover:border-[#C5A059] transition-all hover:shadow-md text-center flex flex-col items-center justify-between space-y-4 group"
                style={{
                  borderTopLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#F9F8F4] border border-[#C5A059]/40 flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                  <img
                    src={fac.iconImg}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-[#4A1C40] leading-snug">
                    {fac.title}
                  </h4>
                  {fac.desc && (
                    <p className="text-xs text-[#777777]">
                      {fac.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Safety & Style Lift note */}
          <div className="mt-10 max-w-xl mx-auto bg-[#FFFFFF] p-4 rounded-xl border border-[#C5A059] flex items-center justify-center gap-3 text-center shadow-xs">
            <span className="font-bold text-xs text-[#4A1C40] uppercase tracking-wider bg-[#F9F8F4] px-2.5 py-1 rounded">
              Safety &amp; Style
            </span>
            <span className="text-xs text-[#555555] font-medium">
              Lift is available for all floors (Hydraulic &amp; Passenger)
            </span>
          </div>

        </div>
      </section>
    </div>
  );
};
