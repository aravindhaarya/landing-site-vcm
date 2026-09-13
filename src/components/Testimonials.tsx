import React, { useState } from 'react';
import { Star, Heart, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/banquetData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="py-20 bg-[#F9F8F4] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Honored Celebrants</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Words of Love &amp; Accolades
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Read authentic experiences from couples, families, and foundation directors who trusted us with their unforgettable moments.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="bg-[#FFFFFF] border-2 border-[#C5A059] p-8 sm:p-12 shadow-xl relative"
            style={{
              borderTopLeftRadius: '40px',
              borderBottomRightRadius: '40px',
              borderTopRightRadius: '8px',
              borderBottomLeftRadius: '8px',
            }}
          >
            {/* Quote watermark icon */}
            <Quote className="w-16 h-16 text-[#C5A059]/15 absolute top-6 right-8 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C5A059]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-lg sm:text-2xl text-[#333333] leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author and Event Detail */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F1EBE4]">
                <div>
                  <div className="font-serif text-xl font-bold text-[#4A1C40]">
                    {current.name}
                  </div>
                  <div className="text-xs text-[#777777] font-medium">
                    {current.role} • {current.hall}
                  </div>
                </div>

                <div className="text-xs text-[#555555] bg-[#F9F8F4] px-4 py-1.5 rounded-full border border-[#E8E2D8] self-start sm:self-center">
                  <span>{current.event}</span> • <span>{current.date}</span>
                </div>
              </div>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center justify-end gap-2 pt-6 mt-6 border-t border-[#F1EBE4]">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-[#DDD] hover:border-[#C5A059] text-[#4A1C40] hover:bg-[#F9F8F4] transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-[#DDD] hover:border-[#C5A059] text-[#4A1C40] hover:bg-[#F9F8F4] transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 mini cards from remaining reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 bg-[#FFFFFF] border transition-all cursor-pointer shadow-xs hover:shadow-md ${
                activeIndex === idx
                  ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30'
                  : 'border-[#E8E2D8] hover:border-[#C5A059]'
              }`}
              style={{
                borderTopLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
            >
              <div className="flex text-[#C5A059] mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs text-[#555] line-clamp-3 italic font-serif mb-3">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-serif text-sm font-bold text-[#4A1C40]">{t.name}</div>
              <div className="text-[11px] text-[#888]">{t.role}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
