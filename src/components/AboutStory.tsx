import React from 'react';
import { Sparkles, Heart, Award, Check, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { VENUE_INFO } from '../data/banquetData';

interface AboutStoryProps {
  onOpenBooking: () => void;
}

export const AboutStory: React.FC<AboutStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="about-story" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Title inspired by "We want to give you the best services" */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EBE4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 border border-[#C5A059]/30">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Dedicated Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#4A1C40] font-normal mb-4">
            We Want to Give You the Best Services
          </h2>
          <p className="text-[#666666] font-serif italic text-base sm:text-lg">
            Guaranteed results, bespoke floral styling, and timeless ballroom architecture for your life&apos;s greatest milestone.
          </p>
        </div>

        {/* 2-Column Content: Left Images, Right Story & Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Asymmetrical Photo Pairing */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="overflow-hidden border-4 border-[#C5A059] shadow-xl"
                style={{
                  borderTopLeftRadius: '50px',
                  borderBottomRightRadius: '50px',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80"
                  alt="Crystal chandelier close-up"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4 pt-8">
                <div
                  className="overflow-hidden border-4 border-[#4A1C40] shadow-xl"
                  style={{
                    borderTopRightRadius: '50px',
                    borderBottomLeftRadius: '50px',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
                    alt="Banquet champagne service"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="bg-[#F9F8F4] p-4 border border-[#C5A059]/40 rounded-xl text-center">
                  <div className="font-serif text-2xl font-bold text-[#4A1C40]">12+ Years</div>
                  <div className="text-xs text-[#777777] uppercase tracking-wider">Unrivaled Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values, Philosophy & Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A1C40] font-normal">
              A Legacy of Unmatched Elegance &amp; Flawless Execution
            </h3>
            
            <p className="text-sm text-[#555555] leading-relaxed">
              At Banquet Wedding Hall, every wedding and gala is treated as a bespoke masterpiece. From our crystal-vaulted ceilings and custom hand-carved mahogany panels to our Michelin-trained executive culinary teams, no detail is ever left to chance.
            </p>

            {/* Guaranteed Results Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div
                className="bg-[#F9F8F4] p-4 border border-[#F1EBE4] hover:border-[#C5A059] transition-all"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <div className="w-9 h-9 rounded-full bg-[#4A1C40] text-[#C5A059] flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#4A1C40] mb-1">
                  Guaranteed Results
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Dedicated master event coordinators and AV technicians stationed on-site throughout your celebration.
                </p>
              </div>

              <div
                className="bg-[#F9F8F4] p-4 border border-[#F1EBE4] hover:border-[#C5A059] transition-all"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <div className="w-9 h-9 rounded-full bg-[#C5A059] text-white flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#4A1C40] mb-1">
                  Quality Services
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Certified white-glove staffing with an industry-leading 1:12 server-to-guest ratio for effortless hospitality.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-2.5 pt-2 text-xs text-[#444444] font-medium">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>One-Event-Per-Wing policy ensuring total exclusivity for you and your guests.</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Private luxury bridal &amp; groom dressing suites with champagne mini-bars.</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Full flexibility for licensed external ethnic caterers and culinary teams.</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 bg-[#4A1C40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#34122c] transition-all shadow cursor-pointer"
                style={{
                  borderTopLeftRadius: '18px',
                  borderBottomRightRadius: '18px',
                  border: '1px solid #C5A059',
                }}
              >
                Schedule Private Walkthrough
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
