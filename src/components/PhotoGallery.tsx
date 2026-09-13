import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Phone, Calendar, Sparkles } from 'lucide-react';
import { MOMENTS_GALLERY, VENUE_INFO } from '../data/banquetData';

interface PhotoGalleryProps {
  onOpenBooking: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenBooking }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % MOMENTS_GALLERY.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + MOMENTS_GALLERY.length) % MOMENTS_GALLERY.length);
  };

  return (
    <section id="moments" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header verbatim matching user content */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F8F4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Celebration Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4A1C40] font-bold">
            Varathambal Chockalingam Kalyana Mahal Moments
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Glimpses of auspicious weddings, vibrant celebrations, and cherished family gatherings at our mahal.
          </p>
        </div>

        {/* 6 Moments Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOMENTS_GALLERY.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-[#F9F8F4] border-2 border-[#E5E0D8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{
                borderTopLeftRadius: index % 2 === 0 ? '30px' : '0px',
                borderBottomRightRadius: index % 2 === 0 ? '30px' : '0px',
                borderTopRightRadius: index % 2 !== 0 ? '30px' : '0px',
                borderBottomLeftRadius: index % 2 !== 0 ? '30px' : '0px',
              }}
              onClick={() => setActiveLightboxIndex(index)}
            >
              <div className="aspect-4/3 overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to high quality wedding hall placeholder
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${
                      index === 0 ? '1519741497674-611481863552' :
                      index === 1 ? '1519167758481-83f550bb49b3' :
                      index === 2 ? '1511795409834-ef04bbd61622' :
                      index === 3 ? '1545232979-8bf68ee9b1af' :
                      index === 4 ? '1464366400600-7168b8af9bc3' : '1532712938310-34cb3982ef74'
                    }?auto=format&fit=crop&w=800&q=80`;
                  }}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1C40]/85 via-[#4A1C40]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-white">
                      Varathambal Chockalingam Kalyana Mahal
                    </h3>
                    <p className="text-[11px] text-[#C5A059]">
                      {item.caption || 'Special Celebration Moment'}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#4A1C40] flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
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

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={MOMENTS_GALLERY[activeLightboxIndex].image}
              alt={MOMENTS_GALLERY[activeLightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[70vh] object-contain rounded-lg border-2 border-[#C5A059]"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-lg font-bold">
                Varathambal Chockalingam Kalyana Mahal Moments
              </h3>
              <p className="text-xs text-[#C5A059]">
                {MOMENTS_GALLERY[activeLightboxIndex].caption} ({activeLightboxIndex + 1} of {MOMENTS_GALLERY.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
