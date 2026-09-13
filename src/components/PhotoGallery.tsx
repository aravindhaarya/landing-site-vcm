import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Maximize2, X, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/banquetData';
import { GalleryCategory, GalleryItem } from '../types';

interface PhotoGalleryProps {
  onBookSetup: (hallId?: string) => void;
}

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Curated Moments' },
  { id: 'weddings', label: 'Weddings & Ceremonies' },
  { id: 'galas', label: 'Galas & Balls' },
  { id: 'decor', label: 'Floral & Decor' },
  { id: 'dining', label: 'Culinary & Dining' },
  { id: 'lighting', label: 'Lighting & Ambiance' },
];

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onBookSetup }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentLightboxItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Inspired by "Worth A Thousand Words" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EBE4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Visual Splendor</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Worth A Thousand Words
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Immerse yourself in real celebrations, botanical installations, and bespoke tablescapes hosted at our estate.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4A1C40] text-white shadow-sm'
                  : 'bg-[#F9F8F4] text-[#555555] hover:text-[#4A1C40] hover:bg-[#F1EBE4]'
              }`}
              style={{
                borderTopLeftRadius: '14px',
                borderBottomRightRadius: '14px',
                border: '1px solid #C5A059',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with alternating asymmetric arch frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isAlt = idx % 2 === 1;
            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative cursor-pointer bg-[#F9F8F4] p-2.5 border-2 border-[#C5A059]/40 hover:border-[#4A1C40] transition-all duration-300 shadow-sm hover:shadow-xl"
                style={{
                  borderTopLeftRadius: isAlt ? '40px' : '0px',
                  borderBottomRightRadius: isAlt ? '40px' : '0px',
                  borderTopRightRadius: isAlt ? '0px' : '40px',
                  borderBottomLeftRadius: isAlt ? '0px' : '40px',
                }}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-neutral-100"
                  style={{
                    borderTopLeftRadius: isAlt ? '34px' : '0px',
                    borderBottomRightRadius: isAlt ? '34px' : '0px',
                    borderTopRightRadius: isAlt ? '0px' : '34px',
                    borderBottomLeftRadius: isAlt ? '0px' : '34px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A1C40]/85 via-[#4A1C40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C5A059] uppercase tracking-wider mb-1">
                      <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
                      <span>{item.hallName}</span>
                    </div>
                    <h3 className="font-serif text-lg font-normal mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-200 line-clamp-2">{item.caption}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-white font-bold uppercase tracking-wider">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Click to Enlarge Lightbox</span>
                    </div>
                  </div>
                </div>

                {/* Sub-label */}
                <div className="p-3 text-center">
                  <div className="font-serif text-base font-bold text-[#4A1C40]">{item.title}</div>
                  <div className="text-[11px] text-[#777777] uppercase tracking-wider">{item.hallName}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <div className="relative max-w-5xl w-full bg-[#FFFFFF] border-2 border-[#C5A059] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#4A1C40] transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Photo */}
              <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[300px]">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="max-h-[80vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Nav Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#C5A059] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#C5A059] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Details Panel */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#F9F8F4] overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                      {currentLightboxItem.hallName}
                    </span>
                    <span className="text-xs text-[#888888] font-bold">
                      {activeLightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#4A1C40] font-bold">
                    {currentLightboxItem.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {currentLightboxItem.caption}
                  </p>

                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777] mb-2">
                      Decor Inclusions &amp; Tags:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentLightboxItem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#FFFFFF] border border-[#E5E5E5] text-[#4A1C40] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E2D8]">
                  <button
                    onClick={() => {
                      const hallId = currentLightboxItem.hallId;
                      setActiveLightboxIndex(null);
                      onBookSetup(hallId);
                    }}
                    className="w-full py-3.5 bg-[#4A1C40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#34122c] transition-all shadow cursor-pointer flex items-center justify-center gap-2"
                    style={{
                      borderTopLeftRadius: '16px',
                      borderBottomRightRadius: '16px',
                      border: '1px solid #C5A059',
                    }}
                  >
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span>Inquire About This Setup</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
