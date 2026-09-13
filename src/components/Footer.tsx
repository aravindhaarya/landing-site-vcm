import React, { useState } from 'react';
import { Heart, MapPin, Phone, Mail, Clock, ArrowRight, Download, Sparkles, Check } from 'lucide-react';
import { VENUE_INFO } from '../data/banquetData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4500);
  };

  const handleDownloadBrochure = () => {
    setBrochureDownloaded(true);
    setTimeout(() => setBrochureDownloaded(false), 4000);
  };

  return (
    <footer id="contact" className="bg-[#1F1B24] border-t-4 border-[#C5A059] text-[#CCCCCC] text-xs">
      
      {/* Top CTA Banner inspired by theme */}
      <div className="border-b border-white/10 py-12 bg-[#2B2330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Journey of Elegance</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal">
              Schedule Your Private Walkthrough &amp; Tasting
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-xl font-serif italic">
              Experience the crystal ballrooms in person with an escorted champagne tour from our estate director.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 bg-[#4A1C40] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#34122c] border border-[#C5A059] shadow-lg cursor-pointer transition-all flex items-center gap-2"
              style={{
                borderTopLeftRadius: '16px',
                borderBottomRightRadius: '16px',
              }}
            >
              <span>Reserve Available Dates</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>

            <a
              href={`tel:${VENUE_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="px-5 py-3.5 border border-[#C5A059]/60 text-white hover:bg-white/5 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{VENUE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-[#4A1C40] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059]"
                style={{
                  borderTopLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                }}
              >
                <Heart className="w-5 h-5 fill-[#C5A059]" />
              </div>
              <div>
                <span className="font-serif text-lg text-white font-bold block">
                  Banquet Wedding Hall
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A059] uppercase block font-semibold">
                  The Grand Éclat Venue
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed">
              Tailored for wedding venues, banquet halls, marriage halls, and premium event spaces that seek to create a captivating online presence.
            </p>

            <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
              <div>Est. 2012 • Northern California</div>
              <div>34,000 Sq. Ft. Total Ballroom &amp; Garden Estate</div>
            </div>
          </div>

          {/* Col 2: Coordinates & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white font-bold border-b border-[#C5A059]/30 pb-2">
              Estate Coordinates
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{VENUE_INFO.address}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-neutral-300">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{VENUE_INFO.hours}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{VENUE_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{VENUE_INFO.email}</span>
            </div>
          </div>

          {/* Col 3: Grand Spaces Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white font-bold border-b border-[#C5A059]/30 pb-2">
              Our Ballrooms
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#halls" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>The Grand Imperial Ballroom (850 guests)</span>
                </a>
              </li>
              <li>
                <a href="#halls" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>The Crystal Pavilion &amp; Courtyard (420 guests)</span>
                </a>
              </li>
              <li>
                <a href="#halls" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>The Versailles Glasshouse (220 guests)</span>
                </a>
              </li>
              <li>
                <a href="#halls" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>The Sovereign Executive Salon (90 guests)</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={handleDownloadBrochure}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A059] hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{brochureDownloaded ? '✓ 2026 Lookbook Downloaded' : 'Download 2026 Lookbook PDF'}</span>
              </button>
            </div>
          </div>

          {/* Col 4: Newsletter & Direct Inquiry */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white font-bold border-b border-[#C5A059]/30 pb-2">
              Private Invitations
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Subscribe to receive exclusive date release announcements and invitations to seasonal bridal showcases.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#2B2330] border border-white/20 focus:border-[#C5A059] text-xs text-white px-3 py-2.5 rounded focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#4A1C40] hover:bg-[#381530] text-white text-xs font-bold uppercase tracking-wider border border-[#C5A059] rounded cursor-pointer transition-all"
              >
                {newsletterSuccess ? 'Thank You for Subscribing' : 'Subscribe for Updates'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Banquet Wedding Hall – The Grand Éclat. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenBooking()} className="hover:text-[#C5A059] cursor-pointer">
              Schedule Tasting
            </button>
            <a href="#hero" className="hover:text-[#C5A059]">
              Back to Top
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
