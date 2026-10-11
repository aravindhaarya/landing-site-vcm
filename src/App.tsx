/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { Amenities } from './components/Amenities';
import { PhotoGallery } from './components/PhotoGallery';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SectionDivider } from './components/SectionDivider';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FadeInUp } from './components/FadeInUp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingEventType, setBookingEventType] = useState<string | undefined>();

  const handleOpenBooking = (eventType?: string) => {
    setBookingEventType(eventType);
    setBookingModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-[#F9F8F4] text-[#2B2B2B] selection:bg-[#4A1C40] selection:text-white font-sans"
    >
      {/* Sticky Header with Call Now CTA */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow with immersive skewed & parallax boundary transitions */}
      <main>
        {/* Hero with Call Now & Embedded Request Form */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Boundary: Hero (#F9F8F4) -> About Us (#FFFFFF) */}
        <SectionDivider
          fromBg="#F9F8F4"
          toBg="#FFFFFF"
          slope="down-right"
          height={54}
          withOrnament={true}
          ornamentText="About Us"
        />

        {/* About Us & Facilities Section (contains internal divider between About & Facilities) */}
        <AboutStory onOpenBooking={() => handleOpenBooking()} />

        {/* Boundary: Facilities (#F9F8F4) -> Amenities (#FFFFFF) */}
        <SectionDivider
          fromBg="#F9F8F4"
          toBg="#FFFFFF"
          slope="down-right"
          height={52}
          withOrnament={true}
          ornamentText="Amenities"
        />

        {/* 17 Amenities matching attached content */}
        <FadeInUp>
          <Amenities />
        </FadeInUp>

        {/* Boundary: Amenities (#FFFFFF) -> Moments Gallery (#F9F8F4) */}
        <SectionDivider
          fromBg="#FFFFFF"
          toBg="#F9F8F4"
          slope="down-left"
          height={54}
          withOrnament={true}
          ornamentText="Moments"
        />

        {/* Varathambal Chockalingam Kalyana Mahal Moments Gallery */}
        <FadeInUp>
          <PhotoGallery onOpenBooking={() => handleOpenBooking()} />
        </FadeInUp>

        {/* Boundary: Moments Gallery (#F9F8F4) -> FAQ (#FFFFFF) */}
        <SectionDivider
          fromBg="#F9F8F4"
          toBg="#FFFFFF"
          slope="down-right"
          height={52}
          withOrnament={true}
          ornamentText="FAQ"
        />

        {/* FAQ Accordion */}
        <FadeInUp>
          <FAQAccordion />
        </FadeInUp>

        {/* Boundary: FAQ (#FFFFFF) -> Dark Luxury Footer (#2B2330) */}
        <SectionDivider
          fromBg="#FFFFFF"
          toBg="#2B2330"
          slope="down-left"
          height={60}
          withOrnament={true}
          ornamentText="Contact & Booking"
        />
      </main>

      {/* Footer with Venue Coordinates, Address & Direct Call */}
      <FadeInUp>
        <Footer onOpenBooking={() => handleOpenBooking()} />
      </FadeInUp>

      {/* Request Form & Booking Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialEventType={bookingEventType}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />
    </motion.div>
  );
}
