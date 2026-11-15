import React, { useState, useRef } from 'react';
import { Play, Sparkles, Volume2, ShieldCheck, Phone, Calendar, RotateCcw, Maximize2 } from 'lucide-react';
import { VENUE_INFO } from '../data/banquetData';
import { FadeInUp } from './FadeInUp';

interface VideoTourProps {
  onOpenBooking: () => void;
}

export const VideoTour: React.FC<VideoTourProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cloudinary video URL with smart optimization
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
          // Fallback if browser requires user click again
        });
      }
    }, 100);
  };

  const handleReplay = () => {
    setHasEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section id="video-tour" className="py-16 sm:py-24 bg-[#1C091A] text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <FadeInUp duration={0.65} yOffset={28} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF]/10 text-[#E5C378] text-xs uppercase tracking-widest font-bold border border-[#C5A059]/40 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Virtual Hall Walkthrough</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Experience Varathambal Chockalingam Kalyana Mahal
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Take a complete video tour of our grand air-conditioned celebration hall, decorated stage, dining area, luxury suites, and welcoming amenities.
          </p>
        </div>

        {/* Video Player Showcase Card */}
        <div className="relative mx-auto max-w-4xl">
          <div
            className="w-full aspect-video sm:aspect-16/9 bg-black border-3 border-[#C5A059] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden relative group"
            style={{
              borderTopRightRadius: '48px',
              borderBottomLeftRadius: '48px',
            }}
          >
            {/* If NOT playing yet: Lightweight Facade (Zero Page Loading Impact) */}
            {!isPlaying ? (
              <div
                onClick={handleStartPlay}
                className="w-full h-full relative cursor-pointer group"
                title="Click to play video tour"
              >
                {/* Poster Image */}
                <img
                  src={posterUrl}
                  alt="Varathambal Chockalingam Kalyana Mahal Stage Video Tour"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30 group-hover:via-black/25 transition-colors" />

                {/* Top Badge: Quality & Sound */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E5C378] text-[11px] font-bold uppercase tracking-wider border border-[#C5A059]/40 flex items-center gap-1.5 shadow-md">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>HD 1080p • Full Tour</span>
                  </span>
                </div>

                {/* Central Glowing Golden Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="relative">
                    {/* Pulsing Outer Rings */}
                    <div className="absolute -inset-3 rounded-full bg-[#C5A059]/30 animate-ping opacity-75 pointer-events-none" />
                    <div className="absolute -inset-1.5 rounded-full bg-[#C5A059]/50 animate-pulse pointer-events-none" />

                    {/* Button Body */}
                    <button
                      type="button"
                      aria-label="Play virtual video tour"
                      className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#9c7833] via-[#C5A059] to-[#ecd497] text-[#2B1024] flex items-center justify-center shadow-[0_0_35px_rgba(197,160,89,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(197,160,89,0.9)] transition-all duration-300 cursor-pointer"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#2B1024] text-[#2B1024] ml-1" />
                    </button>
                  </div>

                  {/* Play Label */}
                  <div className="text-center mt-1">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs sm:text-sm font-bold tracking-wide border border-[#C5A059]/50 shadow-lg group-hover:bg-[#C5A059] group-hover:text-[#2B1024] transition-colors">
                      Click to Watch Video Tour
                    </span>
                  </div>
                </div>

                {/* Bottom Hall Signature */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
                  <span className="text-xs sm:text-sm font-serif font-semibold text-white/95 drop-shadow-md">
                    Varathambal Chockalingam Kalyana Mandapam • Madipakkam
                  </span>
                  <span className="hidden sm:inline-flex text-[11px] text-[#E5C378] font-bold uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                    0% Ads • Direct Stream
                  </span>
                </div>
              </div>
            ) : (
              /* When Playing: Native HTML5 Video Player with Cloudinary Optimized Stream */
              <div className="w-full h-full relative bg-black">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onEnded={() => setHasEnded(true)}
                  className="w-full h-full object-contain"
                >
                  <source src={optimizedVideoUrl} type="video/mp4" />
                  <source src={rawVideoUrl} type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>

                {/* Video End Overlay: Replay & Book Call to Action */}
                {hasEnded && (
                  <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 space-y-4 animate-in fade-in duration-200">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#E5C378] text-center">
                      Plan Your Celebration at Varathambal Chockalingam
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 text-center max-w-md">
                      600+ Seated capacity, 200+ dining, 13 AC suites, 100% generator backup, and wheelchair accessible facilities.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleReplay}
                        className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#2B1024] font-bold text-xs uppercase tracking-wider transition-colors border border-white/30 flex items-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Watch Again</span>
                      </button>

                      <button
                        onClick={onOpenBooking}
                        className="px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#b58f48] text-[#2B1024] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
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

        {/* 4 Feature Pills beneath Video */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-[#FFFFFF]/5 border border-[#C5A059]/30 p-3 rounded-xl backdrop-blur-xs">
            <div className="text-[#E5C378] font-bold text-sm sm:text-base">600+ Seating</div>
            <div className="text-[11px] text-neutral-400">1500+ Floating</div>
          </div>
          <div className="bg-[#FFFFFF]/5 border border-[#C5A059]/30 p-3 rounded-xl backdrop-blur-xs">
            <div className="text-[#E5C378] font-bold text-sm sm:text-base">200+ Dining</div>
            <div className="text-[11px] text-neutral-400">Traditional Seating</div>
          </div>
          <div className="bg-[#FFFFFF]/5 border border-[#C5A059]/30 p-3 rounded-xl backdrop-blur-xs">
            <div className="text-[#E5C378] font-bold text-sm sm:text-base">100% DG Power</div>
            <div className="text-[11px] text-neutral-400">Generator Backup</div>
          </div>
          <div className="bg-[#FFFFFF]/5 border border-[#C5A059]/30 p-3 rounded-xl backdrop-blur-xs">
            <div className="text-[#E5C378] font-bold text-sm sm:text-base">Wheelchair &amp; Lift</div>
            <div className="text-[11px] text-neutral-400">Barrier-Free Access</div>
          </div>
        </div>

        {/* Bottom Booking Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={VENUE_INFO.telLink}
            className="px-6 py-3 bg-[#C5A059] text-[#2B1024] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#b58f48] transition-all duration-300 shadow-md flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 fill-[#2B1024]" />
            <span>Call Now: {VENUE_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#4A1C40] hover:bg-[#34122c] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 shadow-md border border-[#C5A059]/50 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Submit Request Form</span>
          </button>
        </div>
      </FadeInUp>
    </section>
  );
};

