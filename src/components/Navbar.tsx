import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/banquetData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Moments', href: '#moments' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Header Bar with Call Now CTA verbatim from user content */}
      <div className="bg-[#4A1C40] text-white text-xs border-b border-[#C5A059]/30 relative z-50 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          {/* Direct Call Now Action */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold tracking-wide min-w-0">
            <a
              id="top-call-now-btn"
              href={VENUE_INFO.telLink}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#C5A059] text-[#4A1C40] px-2.5 sm:px-3.5 py-1 font-bold rounded-full hover:bg-white transition-colors text-[11px] sm:text-xs whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#4A1C40]" />
              <span>Call Now: {VENUE_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-neutral-300 text-[11px] truncate">
              Madipakkam, Moovarasampettai, Chennai
            </span>
          </div>

          {/* Quick Request action */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#C5A059] hover:text-white font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 flex-shrink-0" />
              <span>Request Form / Availability</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        id="main-navbar"
        className={`sticky top-0 left-0 right-0 z-40 w-full max-w-full overflow-hidden transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-[#F1EBE4]'
            : 'bg-[#FFFFFF] py-3 sm:py-3.5 border-b border-[#F1EBE4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-4 w-full min-w-0">
            {/* Brand Title */}
            <a href="#hero" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 bg-[#4A1C40] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-xs transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                <span className="font-serif font-bold text-base sm:text-lg text-[#C5A059]">V</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-sm sm:text-base lg:text-base xl:text-xl font-bold tracking-tight text-[#4A1C40] leading-tight truncate">
                  Varathambal Chockalingam Kalyana Mahal
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-[#C5A059] uppercase font-sans font-bold truncate">
                  Kalyana Mahal • Madipakkam, Chennai
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-6 flex-shrink-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[11px] xl:text-xs uppercase tracking-wider text-[#333333] hover:text-[#4A1C40] hover:border-b-2 hover:border-[#C5A059] pb-0.5 font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons (visible on lg+) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <a
                href={VENUE_INFO.telLink}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-2 text-[#4A1C40] bg-[#F1EBE4] hover:bg-[#C5A059]/20 transition-all rounded whitespace-nowrap"
                title={`Call ${VENUE_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+91-9444139077</span>
              </a>
              <a
                href={VENUE_INFO.telLink}
                className="inline-flex xl:hidden items-center justify-center p-2 text-[#4A1C40] bg-[#F1EBE4] hover:bg-[#C5A059]/20 transition-all rounded"
                title={`Call ${VENUE_INFO.phone}`}
                aria-label="Call Venue"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>

              <button
                id="nav-request-form-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 xl:px-4 py-2 bg-[#4A1C40] hover:bg-[#34122c] text-[#FFFFFF] shadow-xs transition-all cursor-pointer whitespace-nowrap"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                  border: '1px solid #C5A059',
                }}
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Request Form</span>
              </button>
            </div>

            {/* Mobile & Tablet Action Controls (< lg) */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
              {/* Quick Request Button on tablet / larger phones */}
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#4A1C40] hover:bg-[#34122c] text-white rounded shadow-xs border border-[#C5A059] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Request Form</span>
              </button>

              <a
                href={VENUE_INFO.telLink}
                className="p-2 text-[#4A1C40] bg-[#F1EBE4] hover:bg-[#C5A059]/20 rounded border border-[#C5A059]/40 flex items-center justify-center transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 text-[#4A1C40]" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#4A1C40] border border-[#C5A059]/40 rounded bg-[#F9F8F4] hover:bg-[#F1EBE4] flex items-center justify-center transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FFFFFF] border-l-2 border-[#C5A059] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F1EBE4]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#4A1C40] flex items-center justify-center text-[#C5A059] font-bold font-serif">
                    V
                  </div>
                  <span className="font-serif text-sm font-bold text-[#4A1C40] line-clamp-1">
                    Varathambal Chockalingam
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#333333] hover:text-[#4A1C40] hover:bg-[#F9F8F4] flex items-center justify-between rounded"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1EBE4] space-y-3">
              <a
                href={VENUE_INFO.telLink}
                className="w-full py-2.5 px-4 bg-[#C5A059] text-[#4A1C40] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91-9444139077</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 bg-[#4A1C40] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Open Request Form</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
