import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { AMENITIES } from '../data/banquetData';
import { Amenity } from '../types';

export const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EBE4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Grand Palatial Standards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Every Luxury Included As Standard
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            From porte-cochère valet and private green rooms to commercial finishing kitchens and high-fidelity sound.
          </p>
        </div>

        {/* Amenities Cards Grid with theme border and gold accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity: Amenity) => (
            <div
              key={amenity.id}
              className="bg-[#F9F8F4] p-6 border border-[#E8E2D8] hover:border-[#C5A059] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              style={{
                borderTopLeftRadius: '24px',
                borderBottomRightRadius: '24px',
                borderTopRightRadius: '4px',
                borderBottomLeftRadius: '4px',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4A1C40] text-[#C5A059] flex items-center justify-center shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  {amenity.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#C5A059] text-[#4A1C40]">
                      {amenity.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#4A1C40] mb-2">
                  {amenity.title}
                </h3>

                <p className="text-xs text-[#666666] leading-relaxed mb-4">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E2D8] flex items-center gap-1.5 text-xs text-[#555]">
                <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Included in all private hall reservations</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
