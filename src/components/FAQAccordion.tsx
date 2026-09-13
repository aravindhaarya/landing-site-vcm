import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/banquetData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EBE4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 border border-[#C5A059]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Essential Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Clear guidelines regarding date holds, outside caterers, sound curfews, bridal suites, and deposit structures.
          </p>
        </div>

        {/* FAQ Items with Theme Borders */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F9F8F4] border border-[#E8E2D8] hover:border-[#C5A059] transition-all overflow-hidden"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg text-[#4A1C40] font-normal">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FFFFFF] border border-[#C5A059] flex items-center justify-center text-[#4A1C40] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#4A1C40] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E8E2D8] bg-[#FFFFFF]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
