import React, { useState } from 'react';
import {
  ChevronDown,
  ArrowDown,
  Building2,
  Sparkles,
  UserCheck,
  ShieldCheck,
  Presentation,
  Utensils,
  Volume2,
  Music,
  Wifi,
  Brush,
  UtensilsCrossed,
  Flower2,
  Camera,
  HeartHandshake,
  Accessibility,
  Cctv,
  ChevronsUpDown,
} from 'lucide-react';
import { AMENITIES } from '../data/banquetData';
import { AmenityCategory, MahalAmenity } from '../types';
import { FadeInUp } from './FadeInUp';

interface CategoryGroupConfig {
  id: AmenityCategory;
  label: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
}

const ACCORDION_GROUPS: CategoryGroupConfig[] = [
  {
    id: 'hall',
    label: 'Hall',
    subtitle: 'Specialized Spaces, Kitchen & Audio-Visual',
    icon: Building2,
  },
  {
    id: 'comfort',
    label: 'Comfort',
    subtitle: 'Ambience, High-Speed Wi-Fi & Housekeeping',
    icon: Sparkles,
  },
  {
    id: 'services',
    label: 'Services',
    subtitle: 'Catering, Custom Decor, Media & Hospitality',
    icon: UserCheck,
  },
  {
    id: 'safety',
    label: 'Safety',
    subtitle: 'Barrier-Free Accessibility & 24/7 Surveillance',
    icon: ShieldCheck,
  },
];

const AMENITY_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  'a-conference': Presentation,
  'a-kitchen': Utensils,
  'a-av': Volume2,
  'a-music': Music,
  'a-wifi': Wifi,
  'a-housekeeping': Brush,
  'a-catering': UtensilsCrossed,
  'a-decor': Flower2,
  'a-photo': Camera,
  'a-welcome': HeartHandshake,
  'a-wheelchair': Accessibility,
  'a-cctv': Cctv,
};

export const Amenities: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Set<AmenityCategory>>(
    () => new Set<AmenityCategory>(['hall'])
  );

  const allExpanded = openCategories.size === ACCORDION_GROUPS.length;

  const toggleCategory = (category: AmenityCategory) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenCategories(new Set<AmenityCategory>());
    } else {
      setOpenCategories(new Set<AmenityCategory>(ACCORDION_GROUPS.map((g) => g.id)));
    }
  };

  return (
    <section id="amenities" className="py-12 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle warm radial glow */}
      <div
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <FadeInUp duration={0.65} yOffset={28} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <p className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
            Specialized Offerings &amp; Guest Services
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#4A1C40] font-bold [text-wrap:balance]">
            Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] [text-wrap:balance]">
            Thoughtfully organized across hall capabilities, guest comfort, curated event services, and round-the-clock safety.
          </p>
        </div>

        {/* Summary & Expand/Collapse All Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F1EBE4]">
          <div className="flex items-center gap-2 text-xs text-[#666666] tabular-nums">
            <span className="font-semibold text-[#4A1C40]">{AMENITIES.length} Amenities</span>
            <span aria-hidden="true">·</span>
            <span>{ACCORDION_GROUPS.length} Categories</span>
            <span aria-hidden="true">·</span>
            <span>{openCategories.size} Open</span>
          </div>

          <button
            type="button"
            onClick={handleToggleAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#4A1C40] bg-[#F9F8F4] hover:bg-[#F1EBE4] border border-[#E5E0D8] hover:border-[#C5A059] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A1C40]"
          >
            <ChevronsUpDown className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
          </button>
        </div>

        {/* Categorized Accordion Groups: Hall, Comfort, Services, Safety */}
        <div className="space-y-3.5">
          {ACCORDION_GROUPS.map((group) => {
            const groupAmenities = AMENITIES.filter((item) => item.category === group.id);
            const isOpen = openCategories.has(group.id);
            const GroupIcon = group.icon;
            const panelId = `amenity-panel-${group.id}`;
            const headerId = `amenity-header-${group.id}`;

            return (
              <div
                key={group.id}
                className={`border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFFFFF] border-[#C5A059]'
                    : 'bg-[#F9F8F4] border-[#E8E2D8] hover:border-[#C5A059]/70'
                }`}
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                {/* Accordion Header */}
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleCategory(group.id)}
                  className="w-full text-left px-4 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#4A1C40]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-200 ${
                        isOpen
                          ? 'bg-[#4A1C40] border-[#4A1C40] text-[#C5A059]'
                          : 'bg-[#FFFFFF] border-[#C5A059]/40 text-[#4A1C40]'
                      }`}
                    >
                      <GroupIcon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1C40]">
                          {group.label}
                        </h3>
                        <span className="text-xs text-[#777777] tabular-nums">
                          <span aria-hidden="true" className="mr-2">·</span>
                          {groupAmenities.length} {groupAmenities.length === 1 ? 'item' : 'items'}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] truncate mt-0.5">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#4A1C40] border-[#4A1C40] text-white'
                        : 'bg-[#FFFFFF] border-[#C5A059] text-[#4A1C40]'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Panel Content */}
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="border-t border-[#E8E2D8] bg-[#F9F8F4]/55 px-4 py-4 sm:px-6 sm:py-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      {groupAmenities.map((amenity: MahalAmenity) => {
                        const ItemIcon = AMENITY_ICON_MAP[amenity.id] || GroupIcon;
                        return (
                          <div
                            key={amenity.id}
                            className="flex items-start gap-3.5 py-2 border-b border-[#E8E2D8]/60 last:border-b-0 md:border-b-0"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 text-[#4A1C40] mt-0.5">
                              <ItemIcon className="w-4 h-4 text-[#4A1C40]" />
                            </div>

                            <div className="space-y-1 min-w-0">
                              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                <h4 className="text-sm font-semibold text-[#2B2B2B] leading-snug">
                                  {amenity.title}
                                </h4>
                                {amenity.availability && (
                                  <span className="text-[11px] font-medium text-[#8C6D32]">
                                    <span aria-hidden="true" className="mr-1.5 text-[#999999]">·</span>
                                    {amenity.availability}
                                  </span>
                                )}
                              </div>
                              {amenity.desc && (
                                <p className="text-xs text-[#555555] leading-relaxed">
                                  {amenity.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Cue */}
        <div className="mt-8 pt-5 border-t border-[#F1EBE4] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[#666666]">
            Need a custom arrangement? All on-request services can be noted in your booking inquiry.
          </p>
          <a
            href="#moments"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A1C40] hover:text-[#C5A059] transition-colors py-2 px-4 rounded-lg bg-[#F9F8F4] border border-[#E8E2D8] hover:border-[#C5A059] whitespace-nowrap shrink-0"
          >
            <span>Explore Photo Gallery &amp; Event Moments</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </div>
      </FadeInUp>
    </section>
  );
};
