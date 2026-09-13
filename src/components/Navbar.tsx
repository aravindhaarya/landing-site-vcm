import React, { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, Menu, X, ChevronRight, Heart } from 'lucide-react';
import { VENUE_INFO } from '../data/banquetData';

interface NavbarProps {
  onOpenBooking: (hallId?: string) => void;
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
    { name: 'About Us', href: '#about-story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#reviews' },
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
      {/* Top Header Bar inspired by Banquet Wedding Hall WordPress theme */}
      <div className="bg-[#4A1C40] text-white text-xs border-b border-[#C5A059]/30 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Contact details */}
          <div className="flex items-center gap-4 sm:gap-6 text-[12px]">
            <a
              href={`tel:${VENUE_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{VENUE_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${VENUE_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{VENUE_INFO.email}</span>
            </a>
          </div>

          {/* Center / Right Announcement Banner as seen on the theme */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] sm:text-xs italic text-[#F1EBE4] tracking-wide font-serif">
              {VENUE_INFO.announcement}
            </span>
            <button
              onClick={() => onOpenBooking()}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#C5A059] hover:underline cursor-pointer"
            >
              <span>Schedule Tasting</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        id="main-navbar"
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#F1EBE4]'
            : 'bg-[#FFFFFF] py-4 border-b border-[#F1EBE4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Theme Monogram and Typography */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className="w-11 h-11 bg-[#4A1C40] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderTopLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                  borderTopRightRadius: '2px',
                  borderBottomLeftRadius: '2px',
                }}
              >
                <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-wide text-[#4A1C40] font-bold">
                  Banquet Wedding Hall
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-sans font-semibold">
                  The Grand Éclat Luxury Venue
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[13px] uppercase tracking-wider text-[#333333] hover:text-[#4A1C40] hover:border-b-2 hover:border-[#C5A059] pb-1 font-semibold transition-colors duration-150 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Signature Asymmetric Leaf Button */}
              <button
                id="nav-contact-us-btn"
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 bg-[#4A1C40] hover:bg-[#34122c] text-[#FFFFFF] shadow-sm transition-all cursor-pointer hover:shadow-md"
                style={{
                  borderTopLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  borderTopRightRadius: '0px',
                  borderBottomLeftRadius: '0px',
                  border: '1px solid #C5A059',
                }}
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Reserve Date</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="sm:hidden text-xs font-bold uppercase px-3 py-1.5 bg-[#4A1C40] text-white rounded"
              >
                Reserve
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#4A1C40] hover:text-black border border-[#C5A059]/40 rounded bg-[#F9F8F4]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FFFFFF] border-l-2 border-[#C5A059] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#F1EBE4]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#4A1C40] flex items-center justify-center text-[#C5A059]">
                    <Heart className="w-4 h-4 fill-[#C5A059]" />
                  </div>
                  <span className="font-serif text-lg font-bold text-[#4A1C40]">
                    Banquet Wedding Hall
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2.5 px-2 text-sm font-semibold uppercase tracking-wider text-[#333333] hover:text-[#4A1C40] hover:bg-[#F9F8F4] flex items-center justify-between rounded"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1EBE4] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 bg-[#4A1C40] text-white font-bold text-sm flex items-center justify-center gap-2 shadow"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                }}
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Book / Check Available Dates</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href={`tel:${VENUE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-xs text-[#555555] hover:text-[#4A1C40] flex items-center justify-center gap-1.5 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{VENUE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
