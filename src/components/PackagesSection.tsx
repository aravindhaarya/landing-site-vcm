import React from 'react';
import { Heart, Sparkles, Check, ArrowRight, Star, Calendar } from 'lucide-react';
import { PACKAGES } from '../data/banquetData';
import { EventPackage } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: EventPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 bg-[#F9F8F4] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Curated Collections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Signature Wedding &amp; Banquet Packages
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Meticulously planned all-inclusive hospitality collections designed to eliminate guesswork, featuring fine dining, bar service, and on-site directors.
          </p>
        </div>

        {/* Packages 3-Column Grid with Theme Asymmetric Arch Tops */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={pkg.id}
                className={`bg-[#FFFFFF] flex flex-col justify-between transition-all duration-300 relative shadow-md hover:shadow-xl ${
                  isFeatured
                    ? 'border-3 border-[#C5A059] md:-translate-y-2'
                    : 'border border-[#DDD] hover:border-[#C5A059]'
                }`}
                style={{
                  borderTopLeftRadius: '36px',
                  borderBottomRightRadius: '36px',
                  borderTopRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                }}
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-[#4A1C40] text-[#C5A059] text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl border-l border-b border-[#C5A059]">
                      {pkg.badge}
                    </div>
                  </div>
                )}

                {/* Card Header & Photo */}
                <div>
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{
                      borderTopLeftRadius: '32px',
                    }}
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <div className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                        {pkg.popularFor}
                      </div>
                      <div className="font-serif text-lg font-normal">{pkg.name}</div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-baseline gap-1 border-b border-[#F1EBE4] pb-4">
                      <span className="font-serif text-3xl font-bold text-[#4A1C40]">
                        ${pkg.pricePerGuest}
                      </span>
                      <span className="text-xs text-[#777]">/ guest (min {pkg.minGuests} guests)</span>
                    </div>

                    <p className="text-xs text-[#555555] font-serif italic">
                      {pkg.tagline}
                    </p>

                    <p className="text-xs text-[#666666] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                        Package Inclusions:
                      </div>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#444]">
                            <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Select Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#4A1C40] text-white hover:bg-[#34122c]'
                        : 'bg-[#F9F8F4] text-[#4A1C40] border border-[#C5A059] hover:bg-[#4A1C40] hover:text-white'
                    }`}
                    style={{
                      borderTopLeftRadius: '14px',
                      borderBottomRightRadius: '14px',
                    }}
                  >
                    <span>Inquire for {pkg.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
