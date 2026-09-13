/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { Amenities } from './components/Amenities';
import { PhotoGallery } from './components/PhotoGallery';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingEventType, setBookingEventType] = useState<string | undefined>();

  const handleOpenBooking = (eventType?: string) => {
    setBookingEventType(eventType);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#2B2B2B] selection:bg-[#4A1C40] selection:text-white font-sans">
      {/* Sticky Header with Call Now CTA */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow strictly structured around provided content */}
      <main>
        {/* Hero with Call Now & Embedded Request Form */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Us & Facilities Section */}
        <AboutStory onOpenBooking={() => handleOpenBooking()} />

        {/* 17 Amenities matching attached content */}
        <Amenities />

        {/* Varathambal Chockalingam Kalyana Mahal Moments Gallery */}
        <PhotoGallery onOpenBooking={() => handleOpenBooking()} />

        {/* FAQ Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer with Venue Coordinates, Address & Direct Call */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Request Form & Booking Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialEventType={bookingEventType}
      />
    </div>
  );
}
