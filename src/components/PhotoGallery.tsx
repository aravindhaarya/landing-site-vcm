import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Phone, Calendar, Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Images, ArrowLeft } from 'lucide-react';
import { MOMENTS_GALLERY, VENUE_INFO } from '../data/banquetData';
import { FadeInUp } from './FadeInUp';

interface PhotoGalleryProps {
  onOpenBooking: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenBooking }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  const totalCount = MOMENTS_GALLERY.length;

  // Preload an image on hover for instant opening
  const handlePreload = (src: string) => {
    const img = new Image();
    img.src = src;
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalCount : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalCount) % totalCount : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, totalCount]);

  // Keep active thumbnail centered in filmstrip
  useEffect(() => {
    if (lightboxIndex !== null && thumbnailStripRef.current) {
      const activeEl = thumbnailStripRef.current.children[lightboxIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? MOMENTS_GALLERY[lightboxIndex] : null;

  return (
    <section id="moments" className="py-16 sm:py-20 bg-[#F9F8F4] relative overflow-hidden">
      {/* Ambient background accents */}
      <div
        className="absolute -top-12 -right-12 w-96 h-96 rounded-full border border-[#C5A059]/15 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <FadeInUp duration={0.65} yOffset={28} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F8F4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold border border-[#C5A059]/40 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Celebration Showcase</span>
          </div>
          <h2 id="moments-heading" className="font-serif text-3xl sm:text-4xl text-[#4A1C40] font-bold">
            Moments &amp; Photo Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            Take an authentic visual tour of Varathambal Chockalingam Kalyana Mandapam — featuring the grand illuminated facade, 600+ capacity AC mandapam (1500+ floating), 200+ dining hall, 13 luxury AC suites, 100% generator backup, and wheelchair access.
          </p>

          {/* Quick Counter Badge */}
          <div className="pt-1 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-[#C5A059]/30 text-xs font-semibold text-[#4A1C40] shadow-2xs">
              <Images className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{totalCount} Authentic Venue Highlights</span>
            </span>
          </div>
        </div>

        {/* 9 Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {MOMENTS_GALLERY.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              onMouseEnter={() => handlePreload(item.image)}
              className="bg-[#FFFFFF] border border-[#E8E2D8] hover:border-[#C5A059] p-4.5 shadow-[0_4px_20px_-4px_rgba(74,28,64,0.07),_0_2px_8px_-2px_rgba(197,160,89,0.06)] hover:shadow-[0_20px_38px_-8px_rgba(74,28,64,0.18),_0_10px_22px_-4px_rgba(197,160,89,0.22)] hover:-translate-y-1.5 hover:ring-1 hover:ring-[#C5A059]/40 space-y-3.5 transition-all duration-300 ease-out group cursor-pointer relative"
              style={{
                borderTopLeftRadius: index % 2 === 0 ? '32px' : '10px',
                borderBottomRightRadius: index % 2 === 0 ? '32px' : '10px',
                borderTopRightRadius: index % 2 !== 0 ? '32px' : '10px',
                borderBottomLeftRadius: index % 2 !== 0 ? '32px' : '10px',
              }}
            >
              {/* Photo Area */}
              <div
                className="aspect-4/3 overflow-hidden relative border border-[#C5A059]/20 group-hover:border-[#C5A059]/80 transition-all duration-300 bg-[#FAF7F2] shadow-inner"
                style={{
                  borderTopLeftRadius: index % 2 === 0 ? '22px' : '8px',
                  borderBottomRightRadius: index % 2 === 0 ? '22px' : '8px',
                  borderTopRightRadius: index % 2 !== 0 ? '22px' : '8px',
                  borderBottomLeftRadius: index % 2 !== 0 ? '22px' : '8px',
                }}
              >
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  width={720}
                  height={540}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Soft Vignette Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

                {/* Light Sheen Sweep Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Hover Preview Badge */}
                <div className="absolute inset-0 bg-[#4A1C40]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#4A1C40] shadow-lg border border-[#C5A059]/50 flex items-center gap-1.5 transform scale-80 group-hover:scale-100 transition-all duration-300 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A1C40]">Preview</span>
                  </div>
                </div>

                {/* Category Pill Tag */}
                {item.category && (
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#4A1C40]/90 text-[#F3E7C4] border border-[#C5A059]/40 backdrop-blur-md shadow-xs group-hover:border-[#C5A059] transition-colors">
                    {item.category}
                  </span>
                )}
              </div>

              {/* Photo Description with expandable accent bar */}
              <div className="space-y-1.5 pt-0.5">
                <div className="w-6 h-0.5 bg-[#C5A059]/40 group-hover:w-14 group-hover:bg-[#C5A059] transition-all duration-400 rounded-full" />
                <h3 className="font-serif text-sm sm:text-[15px] font-bold text-[#4A1C40] line-clamp-1 group-hover:text-[#C5A059] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#7A7167] font-medium line-clamp-1 group-hover:text-[#4A1C40] transition-colors duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setLightboxIndex(0)}
            className="px-6 py-3 bg-white border-2 border-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#C5A059] hover:text-[#4A1C40] transition-all duration-300 shadow-[0_4px_15px_rgba(197,160,89,0.15)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <Images className="w-4 h-4 text-[#C5A059] group-hover:text-[#4A1C40]" />
            <span>Open Slideshow Preview</span>
          </button>
        </div>

        {/* Bottom Booking Action Bar */}
        <div className="mt-8 pt-8 border-t border-[#E5E0D8]/60 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={VENUE_INFO.telLink}
            className="px-6 py-3 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#b58f48] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
            <span>Call Now: {VENUE_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#4A1C40] text-white text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#34122c] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Inquire Availability</span>
          </button>
        </div>

      </FadeInUp>

      {/* Fullscreen Interactive Lightbox Modal mounted via React Portal to document.body */}
      {lightboxIndex !== null && activeItem && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-150"
        >
          {/* Top Header Bar - Always above everything */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-3 sm:p-4 px-4 sm:px-8 flex items-center justify-between text-white border-b border-white/15 bg-black/80 backdrop-blur-md relative z-10 shrink-0"
          >
            {/* Back Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Back to gallery"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-[#C5A059] text-white hover:text-[#4A1C40] transition-all duration-200 cursor-pointer border border-white/25 hover:border-[#C5A059] shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 text-[#E5C378] group-hover:text-[#4A1C40] transition-colors" />
              <span className="text-xs font-bold uppercase tracking-wider">Back</span>
            </button>

            {/* Title & Counter */}
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-xs font-semibold text-[#E5C378]">
                {lightboxIndex + 1} of {totalCount}
              </span>
              <h4 className="text-xs sm:text-sm font-serif font-semibold text-white/95 max-w-sm sm:max-w-md truncate text-center">
                {activeItem.title}
              </h4>
            </div>

            {/* Into / Close (X) Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close preview"
              title="Close Preview (Esc)"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059] hover:bg-white text-[#4A1C40] transition-all duration-200 cursor-pointer font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Close</span>
              <X className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Center Main Image Area */}
          <div
            onClick={() => setLightboxIndex(null)}
            className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-0"
          >
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalCount) % totalCount : 0));
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 z-10 p-3 sm:p-3.5 rounded-full bg-black/75 hover:bg-[#C5A059] text-white hover:text-[#4A1C40] transition-all duration-200 cursor-pointer shadow-2xl border border-white/20 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Image Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center justify-center max-h-full max-w-full"
            >
              <img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.title}
                decoding="async"
                className="max-h-[60vh] sm:max-h-[66vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-center text-xs sm:text-sm text-[#E5C378] font-medium mt-3 px-4 max-w-2xl">
                {activeItem.caption}
              </p>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalCount : 0));
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 z-10 p-3 sm:p-3.5 rounded-full bg-black/75 hover:bg-[#C5A059] text-white hover:text-[#4A1C40] transition-all duration-200 cursor-pointer shadow-2xl border border-white/20 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Bottom Filmstrip Carousel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-3 bg-black/80 border-t border-white/15 backdrop-blur-md shrink-0"
          >
            <div
              ref={thumbnailStripRef}
              className="flex items-center justify-center gap-2 overflow-x-auto py-1 px-2 no-scrollbar max-w-4xl mx-auto"
              style={{ scrollbarWidth: 'none' }}
            >
              {MOMENTS_GALLERY.map((thumb, idx) => {
                const isSelected = idx === lightboxIndex;
                return (
                  <button
                    key={thumb.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-[#C5A059] scale-105 opacity-100 shadow-lg'
                        : 'opacity-40 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={thumb.thumbnail || thumb.image}
                      alt={thumb.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 px-1 text-[8px] font-bold bg-black/80 text-white rounded-tl">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
