/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { HallsShowcase } from './components/HallsShowcase';
import { PhotoGallery } from './components/PhotoGallery';
import { VirtualTour } from './components/VirtualTour';
import { PackageCalculator } from './components/PackageCalculator';
import { PackagesSection } from './components/PackagesSection';
import { Amenities } from './components/Amenities';
import { Testimonials } from './components/Testimonials';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { EventPackage } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingHallId, setBookingHallId] = useState<string | undefined>();
  const [bookingEventType, setBookingEventType] = useState<string | undefined>();
  const [bookingGuests, setBookingGuests] = useState<number | undefined>();
  const [bookingConfig, setBookingConfig] = useState<any | undefined>();

  const handleOpenBooking = (hallId?: string, eventType?: string, guests?: number) => {
    setBookingHallId(hallId);
    setBookingEventType(eventType);
    setBookingGuests(guests);
    setBookingConfig(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectHallForBooking = (hallId: string) => {
    setBookingHallId(hallId);
    setBookingConfig(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectHallForCalculator = (hallId: string) => {
    const el = document.querySelector('#calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToBookingFromCalculator = (config: any) => {
    setBookingHallId(config.hallId);
    setBookingGuests(config.guests);
    setBookingConfig(config);
    setBookingModalOpen(true);
  };

  const handleSelectPackage = (pkg: EventPackage) => {
    setBookingEventType(pkg.name);
    setBookingGuests(pkg.minGuests);
    setBookingConfig(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenTour = () => {
    const el = document.querySelector('#virtual-tour');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreHalls = () => {
    const el = document.querySelector('#halls');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewGallery = () => {
    const el = document.querySelector('#gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#2B2B2B] selection:bg-[#4A1C40] selection:text-white font-sans">
      {/* Fixed Sticky Luxury Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenTour={handleOpenTour}
      />

      {/* Main Page Flow */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenTour={handleOpenTour}
          onExploreHalls={handleExploreHalls}
          onViewGallery={handleViewGallery}
        />

        {/* About Us & Hospitality Story from Theme ("We want to give you the best services") */}
        <AboutStory
          onOpenBooking={() => handleOpenBooking()}
          onOpenTour={handleOpenTour}
        />

        {/* Halls Showcase & Floorplan Specs */}
        <HallsShowcase
          onSelectHallForBooking={handleSelectHallForBooking}
          onSelectHallForCalculator={handleSelectHallForCalculator}
        />

        {/* Curated Interactive Photo Gallery with Lightbox */}
        <PhotoGallery
          onBookSetup={(hallId) => handleOpenBooking(hallId)}
        />

        {/* 360° Atmosphere & Hotspot Explorer */}
        <VirtualTour
          onBookHall={(hallId) => handleOpenBooking(hallId)}
        />

        {/* Interactive Event Pricing & Package Calculator */}
        <PackageCalculator
          initialHallId={bookingHallId}
          onProceedToBooking={handleProceedToBookingFromCalculator}
        />

        {/* Signature All-Inclusive Packages */}
        <PackagesSection
          onSelectPackage={handleSelectPackage}
        />

        {/* Luxury Amenities & Standards */}
        <Amenities />

        {/* Host Testimonials & Accolades */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer with Venue Coordinates, Hours, Directions & Brochure */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Comprehensive Online Booking Wizard Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialHallId={bookingHallId}
        initialEventType={bookingEventType}
        initialGuests={bookingGuests}
        initialConfig={bookingConfig}
      />
    </div>
  );
}
