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
      <div className="bg-[#4A1C40] text-white text-xs border-b border-[#C5A059]/30 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Direct Call Now Action */}
          <div className="flex items-center gap-4 text-xs font-semibold tracking-wide">
            <a
              id="top-call-now-btn"
              href={VENUE_INFO.telLink}
              className="inline-flex items-center gap-2 bg-[#C5A059] text-[#4A1C40] px-3.5 py-1 font-bold rounded-full hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
              <span>Call Now: {VENUE_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-neutral-300 text-[11px]">
              Madipakkam, Moovarasampettai, Chennai
            </span>
          </div>

          {/* Quick Request action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-white font-semibold transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Request Form / Availability</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        id="main-navbar"
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3 border-b border-[#F1EBE4]'
            : 'bg-[#FFFFFF] py-3.5 border-b border-[#F1EBE4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Title */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 bg-[#4A1C40] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-xs transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                }}
              >
                <span className="font-serif font-bold text-lg text-[#C5A059]">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-[#4A1C40] leading-tight line-clamp-1">
                  Varathambal Chockalingam Kalyana Mahal
                </span>
                <span className="text-[10px] tracking-wider text-[#C5A059] uppercase font-sans font-bold">
                  Kalyana Mahal • Madipakkam, Chennai
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs uppercase tracking-wider text-[#333333] hover:text-[#4A1C40] hover:border-b-2 hover:border-[#C5A059] pb-1 font-semibold transition-colors duration-150 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={VENUE_INFO.telLink}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-2 text-[#4A1C40] bg-[#F1EBE4] hover:bg-[#C5A059]/20 transition-all rounded"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+91-9444139077</span>
              </a>

              <button
                id="nav-request-form-btn"
                onClick={onOpenBooking}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 bg-[#4A1C40] hover:bg-[#34122c] text-[#FFFFFF] shadow-xs transition-all cursor-pointer"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  border: '1px solid #C5A059',
                }}
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Request Form</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={VENUE_INFO.telLink}
                className="p-2 text-[#4A1C40] bg-[#F1EBE4] rounded border border-[#C5A059]/40"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 text-[#4A1C40]" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#4A1C40] border border-[#C5A059]/40 rounded bg-[#F9F8F4]"
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
