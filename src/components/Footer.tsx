import React from 'react';
import { MapPin, Phone, Calendar, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { VENUE_INFO } from '../data/banquetData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-[#1F1B24] border-t-4 border-[#C5A059] text-[#CCCCCC] text-xs">
      
      {/* Top Banner with Direct Call Now */}
      <div className="border-b border-white/10 py-10 bg-[#2B2330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Auspicious Celebrations • Dedicated Service</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold">
              Book Varathambal Chockalingam Kalyana Mahal
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-xl">
              Accommodating 450+ guests with 150 dining, 8 AC rooms, and modern amenities in Madipakkam, Chennai.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="footer-call-now-btn"
              href={VENUE_INFO.telLink}
              className="px-6 py-3.5 bg-[#C5A059] text-[#4A1C40] font-bold text-xs uppercase tracking-wider hover:bg-[#b58f48] shadow-md flex items-center gap-2 rounded-full transition-all"
            >
              <Phone className="w-4 h-4 fill-[#4A1C40]" />
              <span>Call Now: {VENUE_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#4A1C40] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#34122c] border border-[#C5A059] shadow-md cursor-pointer transition-all flex items-center gap-2 rounded-full"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span>Request Form</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Col 1: Venue Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-[#4A1C40] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-bold text-lg"
                style={{
                  borderTopLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                }}
              >
                V
              </div>
              <div>
                <span className="font-serif text-lg text-white font-bold block">
                  Varathambal Chockalingam Kalyana Mahal
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A059] uppercase block font-semibold">
                  Madipakkam, Chennai, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
              Varathambal Chockalingam Kalyana Mahal is an ideal venue for weddings and social gatherings, accommodating over 450 guests comfortably with modern amenities, professional staff, and ample parking.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-300">
              <span className="bg-white/10 px-2.5 py-1 rounded">450+ Seating Capacity</span>
              <span className="bg-white/10 px-2.5 py-1 rounded">150 Dining</span>
              <span className="bg-white/10 px-2.5 py-1 rounded">8 AC Rooms</span>
              <span className="bg-white/10 px-2.5 py-1 rounded">Cars &amp; Bikes Parking</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-wider text-white font-bold border-b border-[#C5A059]/30 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Facilities</span>
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Amenities (17 Features)</span>
                </a>
              </li>
              <li>
                <a href="#moments" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Mahal Moments</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-wider text-white font-bold border-b border-[#C5A059]/30 pb-2">
              Contact &amp; Location
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{VENUE_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href={VENUE_INFO.telLink} className="hover:text-[#C5A059] font-bold">
                {VENUE_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={VENUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] hover:underline"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Varathambal Chockalingam Kalyana Mahal. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Call Now: </span>
            <a href={VENUE_INFO.telLink} className="text-[#C5A059] font-bold hover:underline">
              {VENUE_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
