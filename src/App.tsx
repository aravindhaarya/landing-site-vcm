/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

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
      />

      {/* Main Page Flow */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onViewGallery={handleViewGallery}
        />

        {/* About Us & Hospitality Story from Theme ("We want to give you the best services") */}
        <AboutStory
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Curated Interactive Photo Gallery with Lightbox */}
        <PhotoGallery
          onBookSetup={(hallId) => handleOpenBooking(hallId)}
        />

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
