import React, { useState } from 'react';
import { Users, Sparkles, Check, ArrowRight, Calendar, Calculator, Eye, Heart, MapPin, Maximize2 } from 'lucide-react';
import { HALLS } from '../data/banquetData';
import { Hall } from '../types';

interface HallsShowcaseProps {
  onSelectHallForBooking: (hallId: string) => void;
  onSelectHallForCalculator: (hallId: string) => void;
}

export const HallsShowcase: React.FC<HallsShowcaseProps> = ({
  onSelectHallForBooking,
  onSelectHallForCalculator,
}) => {
  const [activeHallId, setActiveHallId] = useState<string>(HALLS[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [layoutMode, setLayoutMode] = useState<'banquet' | 'theater' | 'cocktail' | 'classroom'>('banquet');

  const currentHall: Hall = HALLS.find((h) => h.id === activeHallId) || HALLS[0];
  const allImages = [currentHall.image, ...currentHall.additionalImages];

  const handleTabChange = (id: string) => {
    setActiveHallId(id);
    setActiveImageIndex(0);
  };

  return (
    <section id="halls" className="py-20 bg-[#F9F8F4] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Curated Venues</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Our Spaces &amp; Grand Ballrooms
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Perfect for every occasion — from royal weddings and intimate glasshouse ceremonies to grand corporate summits.
          </p>
        </div>

        {/* Hall Selection Tabs styled with theme pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-3 pb-4 mb-10 no-scrollbar">
          {HALLS.map((hall) => {
            const isActive = hall.id === activeHallId;
            return (
              <button
                key={hall.id}
                onClick={() => handleTabChange(hall.id)}
                className={`relative px-5 py-3 text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border shadow-xs ${
                  isActive
                    ? 'bg-[#4A1C40] text-white border-[#C5A059] shadow-md'
                    : 'bg-[#FFFFFF] text-[#444444] border-[#E5E5E5] hover:border-[#C5A059] hover:text-[#4A1C40]'
                }`}
                style={{
                  borderTopLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  borderTopRightRadius: '0px',
                  borderBottomLeftRadius: '0px',
                }}
              >
                <span>{hall.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-[#C5A059] text-[#4A1C40]' : 'bg-[#F1EBE4] text-[#777777]'
                  }`}
                >
                  {hall.capacityMax} Guests
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Hall Feature Card with Theme Arch Framing */}
        <div
          className="bg-[#FFFFFF] border-2 border-[#C5A059] shadow-xl overflow-hidden"
          style={{
            borderTopLeftRadius: '36px',
            borderBottomRightRadius: '36px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Gallery Preview on Left with Arch styling */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F1EBE4] bg-[#FAF8F5]">
              <div>
                <div
                  className="relative aspect-[16/10] overflow-hidden border-2 border-[#C5A059] shadow-md mb-4 group"
                  style={{
                    borderTopLeftRadius: '32px',
                    borderBottomRightRadius: '32px',
                  }}
                >
                  <img
                    src={allImages[activeImageIndex]}
                    alt={currentHall.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#4A1C40] text-white text-[11px] font-bold px-3 py-1 rounded shadow">
                    {currentHall.sqFt.toLocaleString()} SQ. FT. • CEILING {currentHall.ceilingHeight}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2.5">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/10] overflow-hidden border-2 transition-all cursor-pointer rounded ${
                        activeImageIndex === idx
                          ? 'border-[#4A1C40] ring-2 ring-[#C5A059]'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout Mode Selector & Capacity Meter */}
              <div className="mt-6 pt-5 border-t border-[#E8E2D8]">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-3">
                  <span>Configuration Capacity</span>
                  <span className="text-[#C5A059] font-serif capitalize">
                    {layoutMode}: {currentHall.layoutCapacities[layoutMode]} Seated
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {(['banquet', 'theater', 'cocktail', 'classroom'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setLayoutMode(mode)}
                      className={`py-2 px-1 text-center text-xs uppercase tracking-wider font-bold transition-all rounded ${
                        layoutMode === mode
                          ? 'bg-[#4A1C40] text-white shadow-xs'
                          : 'bg-[#FFFFFF] border border-[#DDD] text-[#555] hover:border-[#C5A059]'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hall Details on Right */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-sans">
                    Space Profile
                  </span>
                  <span className="text-xs font-bold text-[#4A1C40] bg-[#F1EBE4] px-3 py-1 rounded-full border border-[#C5A059]/30">
                    From ${currentHall.baseRentalWeekday.toLocaleString()} (Weekday) / ${currentHall.baseRentalWeekend.toLocaleString()} (Sat)
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#4A1C40] font-normal">
                  {currentHall.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] font-serif italic">
                  {currentHall.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {currentHall.description}
                </p>

                {/* Key Features List */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2.5">
                    Palatial Features &amp; Infrastructure
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentHall.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal for Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888] mb-1.5">
                    Recommended For:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentHall.idealFor.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#F9F8F4] text-[#4A1C40] font-medium px-2.5 py-1 rounded border border-[#E8E2D8]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-8 mt-6 border-t border-[#F1EBE4] flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectHallForBooking(currentHall.id)}
                  className="px-6 py-3 bg-[#4A1C40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#34122c] transition-all shadow cursor-pointer flex items-center gap-2"
                  style={{
                    borderTopLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    border: '1px solid #C5A059',
                  }}
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Reserve {currentHall.name}</span>
                </button>

                <button
                  onClick={() => onSelectHallForCalculator(currentHall.id)}
                  className="px-5 py-3 bg-[#FFFFFF] text-[#4A1C40] border border-[#C5A059] text-xs font-bold uppercase tracking-wider hover:bg-[#F9F8F4] transition-all cursor-pointer flex items-center gap-2"
                  style={{
                    borderTopLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                  }}
                >
                  <Calculator className="w-4 h-4 text-[#C5A059]" />
                  <span>Calculate Package Cost</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
