import React, { useState } from 'react';
import { Compass, Sun, Sunset, Moon, Sparkles, Info, X, ChevronRight, Eye, Heart } from 'lucide-react';

interface VirtualTourProps {
  onBookHall: (hallId: string) => void;
}

interface Hotspot {
  id: string;
  name: string;
  x: number;
  y: number;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  image: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "chandeliers",
    name: "Swarovski Crystal Chandeliers",
    x: 48,
    y: 22,
    tag: "Architectural Grandeur",
    shortDesc: "Eight custom-crafted European crystal chandeliers with dimmable LED warmth.",
    fullDesc: "Imported directly from European crystal ateliers, these eight monumental chandeliers contain over 24,000 hand-cut crystal prisms that disperse light with diamond-like refraction across the entire Grand Imperial Ballroom.",
    specs: ["9 ft diameter, 12 ft drop", "2,800K warm incandescent tone", "Fully DMX programmed for ceremony & dance transitions"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "stage",
    name: "40ft Hydraulic Stage & 4K LED Screen",
    x: 76,
    y: 52,
    tag: "Performance & AV",
    shortDesc: "Concert-grade performance platform with motorized 28x12ft LED video wall.",
    fullDesc: "Engineered to host live 14-piece big bands, celebrity keynotes, cultural dance troupes, and theatrical bridal entrances with integrated smoke, hazer, and cold spark emitters.",
    specs: ["40 x 18 ft reinforced stage", "28 x 12 ft 4K pitch 1.9mm LED wall", "Direct loading dock ramp access"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bar",
    name: "Illuminated Onyx Cocktail Bar",
    x: 22,
    y: 65,
    tag: "Mixology & Hospitality",
    shortDesc: "Semi-precious backlit honey onyx marble bar with 4 craft draft taps and cocktail wells.",
    fullDesc: "Our 32-foot master bar comfortably serves up to 850 guests simultaneously without queuing. Stocked with premium single malts, reserve champagnes, and staffed by certified mixologists.",
    specs: ["Backlit Italian Honey Onyx", "4 Speed stations with twin glass chillers", "Wine cellar holding 600+ bottles"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bridal-suite",
    name: "Bridal & VIP Dressing Sanctuary",
    x: 14,
    y: 35,
    tag: "Exclusive Comfort",
    shortDesc: "Private two-room bridal suite with 6 vanity stations and en-suite marble bath.",
    fullDesc: "Designed for relaxation before the procession. Includes a full vanity mirror bar with natural balanced ring lighting, private security safe, steamer, champagne bar, and lounge seating.",
    specs: ["6 Professional makeup vanities", "Triple full-length dressing mirrors", "Keycard protected private elevator"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  }
];

export const VirtualTour: React.FC<VirtualTourProps> = ({ onBookHall }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [timeMode, setTimeMode] = useState<'day' | 'sunset' | 'night'>('sunset');

  const tourImages: Record<'day' | 'sunset' | 'night', string> = {
    day: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    sunset: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=85",
    night: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=85"
  };

  return (
    <section id="virtual-tour" className="py-20 bg-[#F9F8F4] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Interactive Venue Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            360° Atmosphere &amp; Hotspot Explorer
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Simulate daytime natural light, golden hour sunset, and starlight gala lighting while exploring venue highlights.
          </p>
        </div>

        {/* Tour Stage */}
        <div
          className="relative bg-[#FFFFFF] border-3 border-[#C5A059] shadow-2xl overflow-hidden"
          style={{
            borderTopLeftRadius: '36px',
            borderBottomRightRadius: '36px',
          }}
        >
          {/* Top Controls Bar */}
          <div className="bg-[#4A1C40] text-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-[#C5A059]/40">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive 360° Perspective</span>
            </div>

            {/* Lighting Mode Selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#C5A059] uppercase tracking-wider font-bold mr-1">Atmosphere:</span>
              <button
                onClick={() => setTimeMode('day')}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all text-xs font-bold cursor-pointer ${
                  timeMode === 'day'
                    ? 'bg-[#C5A059] text-[#4A1C40]'
                    : 'bg-black/30 text-white hover:bg-black/50'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Daylight</span>
              </button>
              <button
                onClick={() => setTimeMode('sunset')}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all text-xs font-bold cursor-pointer ${
                  timeMode === 'sunset'
                    ? 'bg-[#C5A059] text-[#4A1C40]'
                    : 'bg-black/30 text-white hover:bg-black/50'
                }`}
              >
                <Sunset className="w-3.5 h-3.5" />
                <span>Sunset</span>
              </button>
              <button
                onClick={() => setTimeMode('night')}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all text-xs font-bold cursor-pointer ${
                  timeMode === 'night'
                    ? 'bg-[#C5A059] text-[#4A1C40]'
                    : 'bg-black/30 text-white hover:bg-black/50'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Gala Night</span>
              </button>
            </div>
          </div>

          {/* Panoramic View Container */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black">
            <img
              src={tourImages[timeMode]}
              alt="Banquet hall view"
              className="w-full h-full object-cover transition-all duration-700 filter brightness-95"
            />

            {/* Hotspots */}
            {HOTSPOTS.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setSelectedHotspot(hs)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                title={hs.name}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-8 h-8 rounded-full bg-[#C5A059]/40 animate-ping" />
                  <span className="w-6 h-6 rounded-full bg-[#4A1C40] border-2 border-[#C5A059] text-white flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  </span>
                </div>
                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-7 whitespace-nowrap bg-[#FFFFFF] border border-[#C5A059] text-[#4A1C40] text-[10px] font-bold px-2 py-0.5 rounded shadow opacity-90 group-hover:opacity-100 transition-opacity">
                  {hs.name}
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Info Bar */}
          <div className="p-4 bg-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-[#F1EBE4]">
            <div className="flex items-center gap-2 text-[#555555]">
              <Info className="w-4 h-4 text-[#C5A059]" />
              <span>Click on the glowing gold beacons above to inspect chandeliers, audio systems, and bridal suites.</span>
            </div>
            <button
              onClick={() => onBookHall('imperial-ballroom')}
              className="text-xs font-bold uppercase tracking-wider text-[#4A1C40] hover:text-[#C5A059] flex items-center gap-1 cursor-pointer font-sans"
            >
              <span>Schedule Live Walkthrough</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Hotspot Spec Modal */}
      {selectedHotspot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div
            className="relative max-w-lg w-full bg-[#FFFFFF] border-2 border-[#C5A059] p-6 shadow-2xl space-y-4"
            style={{
              borderTopLeftRadius: '28px',
              borderBottomRightRadius: '28px',
            }}
          >
            <button
              onClick={() => setSelectedHotspot(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#F1EBE4] text-[#4A1C40] hover:bg-[#C5A059] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-bold">
              <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
              <span>{selectedHotspot.tag}</span>
            </div>

            <h3 className="font-serif text-2xl text-[#4A1C40] font-normal">
              {selectedHotspot.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              {selectedHotspot.fullDesc}
            </p>

            <div className="bg-[#F9F8F4] p-3.5 border border-[#E8E2D8] rounded-xl space-y-1.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#4A1C40]">
                Engineering Specifications:
              </div>
              {selectedHotspot.specs.map((spec, i) => (
                <div key={i} className="text-xs text-[#555] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedHotspot(null)}
                className="px-5 py-2.5 bg-[#4A1C40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#34122c] transition-all rounded shadow cursor-pointer"
              >
                Close Explorer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
