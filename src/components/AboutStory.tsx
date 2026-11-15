import React, { useState, useRef } from 'react';
import { Phone, Calendar, ShieldCheck, Users, UtensilsCrossed, BedDouble, Car, Wind, Sparkles, ChevronsUp, Zap, Play, Volume2, RotateCcw } from 'lucide-react';
import { VENUE_INFO, FACILITIES } from '../data/banquetData';
import { SectionDivider } from './SectionDivider';
import { FadeInUp } from './FadeInUp';

interface AboutStoryProps {
  onOpenBooking: () => void;
}

const FACILITY_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  'f-seating': Users,
  'f-dining': UtensilsCrossed,
  'f-rooms': BedDouble,
  'f-ac': Wind,
  'f-lift': ChevronsUp,
  'f-generator': Zap,
  'f-parking': Car,
  'f-brahmin-package': Sparkles,
};

export const AboutStory: React.FC<AboutStoryProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const optimizedVideoUrl =
    'https://res.cloudinary.com/is47qmjr/video/upload/q_auto,f_auto/v1793895320/video_2026-11-05_21-43-03.mp4';
  const rawVideoUrl =
    'https://res.cloudinary.com/is47qmjr/video/upload/v1793895320/video_2026-11-05_21-43-03.mp4';
  const posterUrl = '/gallery/about-stage.webp';

  const handleStartPlay = () => {
    setIsPlaying(true);
    setHasEnded(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Fallback if browser requires user interaction on video element
        });
      }
    }, 100);
  };

  const handleReplay = () => {
    setHasEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="space-y-0">
      {/* About Us Section */}
      <section id="about-us" className="py-16 sm:py-20 bg-[#FFFFFF] relative overflow-hidden">
        {/* Background accent */}
        <div
          className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-[#C5A059]/15 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-6 rounded-full border border-dashed border-[#C5A059]/20" />
        </div>
        <div
          className="absolute top-1/2 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <FadeInUp duration={0.65} yOffset={28} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Venue Video Tour Showcase - 16:9 */}
            <div className="lg:col-span-6 relative">
              <div
                className="w-full aspect-[16/9] border-3 border-[#C5A059] shadow-2xl overflow-hidden relative group bg-[#1C091A]"
                style={{
                  aspectRatio: '16 / 9',
                  borderTopRightRadius: '48px',
                  borderBottomLeftRadius: '48px',
                }}
              >
                {!isPlaying ? (
                  <div
                    onClick={handleStartPlay}
                    className="w-full h-full relative cursor-pointer group"
                    title="Click to watch video tour"
                  >
                    <img
                      src={posterUrl}
                      alt="Varathambal Chockalingam Kalyana Mandapam Video Tour"
                      loading="eager"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />

                    {/* Measured Dark Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/25 group-hover:via-black/20 transition-colors" />

                    {/* Top Quality Label */}
                    <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[#E5C378] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-[#C5A059]/40">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>HD 1080p · Video Tour</span>
                    </div>

                    {/* Central Golden Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                      <button
                        type="button"
                        aria-label="Play venue video tour"
                        className="relative w-15 h-15 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#9c7833] via-[#C5A059] to-[#ecd497] text-[#2B1024] flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.65)] group-hover:scale-110 transition-transform duration-200 cursor-pointer"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#2B1024] text-[#2B1024] ml-0.5" />
                      </button>

                      <span className="px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wide border border-[#C5A059]/50 shadow-md group-hover:bg-[#C5A059] group-hover:text-[#2B1024] transition-colors">
                        Watch Virtual Hall Tour
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative bg-black">
                    <video
                      ref={videoRef}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      autoPlay
                      playsInline
                      preload="metadata"
                      poster={posterUrl}
                      onContextMenu={(e) => e.preventDefault()}
                      onEnded={() => setHasEnded(true)}
                      className="w-full h-full object-contain"
                    >
                      <source src={optimizedVideoUrl} type="video/mp4" />
                      <source src={rawVideoUrl} type="video/mp4" />
                      Your browser does not support HTML5 video streaming.
                    </video>

                    {hasEnded && (
                      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 space-y-3">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#E5C378] text-center">
                          Plan Your Celebration With Us
                        </h3>
                        <p className="text-[11px] sm:text-xs text-neutral-300 text-center max-w-sm">
                          600+ Seated capacity, 200+ dining, 13 AC suites, and 100% power backup.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                          <button
                            type="button"
                            onClick={handleReplay}
                            className="px-4 py-2 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#2B1024] font-bold text-xs uppercase tracking-wider transition-colors border border-white/30 flex items-center gap-1.5 cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Watch Again</span>
                          </button>

                          <button
                            type="button"
                            onClick={onOpenBooking}
                            className="px-4 py-2 rounded-full bg-[#C5A059] hover:bg-[#b58f48] text-[#2B1024] font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Check Availability</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 600+ Seated / 1500+ Floating Badge */}
              <div
                className="absolute -bottom-3.5 right-4 sm:-bottom-4 sm:right-6 bg-[#4A1C40] text-white py-2 px-3.5 sm:py-2.5 sm:px-4 border-2 border-[#C5A059] shadow-xl flex items-center gap-2.5 z-20 pointer-events-none"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">600+ Seated</div>
                  <div className="text-[10px] text-neutral-300">1500+ Floating</div>
                </div>
              </div>
            </div>

            {/* Right: About Us Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F9F8F4] border border-[#C5A059] rounded-full text-xs font-bold text-[#4A1C40] uppercase tracking-wider">
                  About Us
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A1C40] leading-tight">
                  {VENUE_INFO.aboutHeading}
                </h2>
              </div>

              <p className="text-base text-[#555555] leading-relaxed">
                {VENUE_INFO.aboutText}
              </p>

              {/* Call to action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={VENUE_INFO.telLink}
                  className="px-6 py-3 bg-[#C5A059] text-[#4A1C40] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#b58f48] transition-colors shadow-sm flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                  <span>Call Now: {VENUE_INFO.phone}</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#4A1C40] text-[#FFFFFF] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#34122c] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Submit Request Form</span>
                </button>
              </div>
            </div>

          </div>
        </FadeInUp>
      </section>

      {/* Subtle skewed & parallax boundary transition from About Us (#FFFFFF) to Facilities (#F9F8F4) */}
      <SectionDivider
        fromBg="#FFFFFF"
        toBg="#F9F8F4"
        slope="down-left"
        height={38}
        withOrnament={true}
        ornamentText="Facilities"
      />

      {/* Core Venue Facilities Section */}
      <section id="facilities" className="py-12 sm:py-16 bg-[#F9F8F4] relative overflow-hidden">
        <FadeInUp duration={0.65} yOffset={28} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <p className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
              Core Venue Infrastructure
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A1C40] [text-wrap:balance]">
              Facilities
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] [text-wrap:balance]">
              Essential capacity, climate control, power, parking, and ceremonial infrastructure built for seamless celebrations.
            </p>
          </div>

          {/* Balanced 8-card Facilities Grid (4x2 on desktop, 2x4 on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-[#FFFFFF] p-4 sm:p-5 border border-[#E5E0D8] hover:border-[#C5A059] transition-all duration-200 hover:shadow-sm text-center flex flex-col items-center justify-start space-y-3 group"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#F9F8F4] border border-[#C5A059]/40 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform duration-200 text-[#4A1C40]">
                  {(() => {
                    const Icon = FACILITY_ICON_MAP[fac.id] || Sparkles;
                    return <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A1C40]" />;
                  })()}
                </div>

                <div className="space-y-1.5 w-full">
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-[#4A1C40] leading-snug">
                    {fac.title}
                  </h4>
                  {fac.desc && (
                    <p className="text-[11px] sm:text-xs text-[#666666] leading-relaxed">
                      {fac.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </FadeInUp>
      </section>

    </div>
  );
};

