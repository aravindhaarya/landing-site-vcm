import React from 'react';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { MOMENTS_GALLERY, VENUE_INFO } from '../data/banquetData';

interface PhotoGalleryProps {
  onOpenBooking: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenBooking }) => {
  return (
    <section id="moments" className="py-16 sm:py-20 bg-[#F9F8F4] relative overflow-hidden">
      {/* GPU-accelerated static ambient background accents */}
      <div
        className="absolute -top-12 -right-12 w-96 h-96 rounded-full border border-[#C5A059]/15 pointer-events-none transform-gpu will-change-transform"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 bg-[#C5A059]/8 rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header verbatim matching user content */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F8F4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Celebration Showcase</span>
          </div>
          <h2 id="moments-heading" className="font-serif text-3xl sm:text-4xl text-[#4A1C40] font-bold">
            Moments
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Glimpses of auspicious weddings, vibrant celebrations, and cherished family gatherings at our mahal.
          </p>
        </div>

        {/* 6 Moments Grid - Blank Photo Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOMENTS_GALLERY.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border-2 border-[#E5E0D8] p-4 shadow-2xs space-y-3"
              style={{
                borderTopLeftRadius: index % 2 === 0 ? '30px' : '0px',
                borderBottomRightRadius: index % 2 === 0 ? '30px' : '0px',
                borderTopRightRadius: index % 2 !== 0 ? '30px' : '0px',
                borderBottomLeftRadius: index % 2 !== 0 ? '30px' : '0px',
              }}
            >
              {/* Blank Photo Area */}
              <div
                className="aspect-4/3 bg-[#F9F8F4] border-2 border-dashed border-[#C5A059]/35"
                style={{
                  borderTopLeftRadius: index % 2 === 0 ? '20px' : '0px',
                  borderBottomRightRadius: index % 2 === 0 ? '20px' : '0px',
                  borderTopRightRadius: index % 2 !== 0 ? '20px' : '0px',
                  borderBottomLeftRadius: index % 2 !== 0 ? '20px' : '0px',
                }}
              />

              <div className="space-y-1">
                <h3 className="font-serif text-sm font-bold text-[#4A1C40]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#C5A059] font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={VENUE_INFO.telLink}
            className="px-6 py-3 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#b58f48] transition-colors shadow-sm flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
            <span>Call Now: {VENUE_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#4A1C40] text-white text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#34122c] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Inquire Availability</span>
          </button>
        </div>

      </div>
    </section>
  );
};
