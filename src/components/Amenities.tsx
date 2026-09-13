import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { AMENITIES } from '../data/banquetData';
import { MahalAmenity } from '../types';

export const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F8F4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Comprehensive Hall Features</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4A1C40] font-bold">
            Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Every comfort meticulously arranged for flawless celebrations and guest delight.
          </p>
        </div>

        {/* 17 Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AMENITIES.map((amenity: MahalAmenity, index: number) => (
            <div
              key={amenity.id}
              className="bg-[#F9F8F4] p-5 border border-[#E8E2D8] hover:border-[#C5A059] transition-all shadow-xs hover:shadow-md flex items-start gap-4 rounded-xl group"
            >
              {/* Icon Image */}
              <div className="w-12 h-12 shrink-0 rounded-lg bg-white border border-[#C5A059]/40 flex items-center justify-center p-2 group-hover:scale-105 transition-transform shadow-2xs">
                <img
                  src={amenity.iconImg}
                  alt={amenity.title}
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback to check icon if image is not reachable
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Title / Description */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-[#C5A059]">#{index + 1}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[#333333] leading-relaxed group-hover:text-[#4A1C40] transition-colors">
                  {amenity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
