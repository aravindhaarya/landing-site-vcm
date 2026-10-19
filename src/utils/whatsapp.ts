/**
 * WhatsApp Utility for Varathambal Chockalingam Kalyana Mahal
 * Phone number for WhatsApp bookings: +919962621652
 */

export const WHATSAPP_PHONE = '+919962621652';
export const WHATSAPP_PHONE_DISPLAY = '+91 99626 21652';
export const WHATSAPP_DIGITS = '919962621652';

export interface BookingInquiryData {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  selectedDate?: string;
  timeSlot?: string;
  guestsCount?: string;
  roomsCount?: string;
  brahminPackage?: boolean;
  notes?: string;
  referenceId?: string;
}

/**
 * Formats a clean, readable, professional prefilled message for WhatsApp.
 */
export function formatWhatsAppMessage(data: BookingInquiryData): string {
  const parts: string[] = [];

  parts.push(`*VARATHAMBAL CHOCKALINGAM KALYANA MAHAL*`);
  parts.push(`*Event Booking Inquiry & Request Form*`);
  if (data.referenceId) {
    parts.push(`Reference ID: #${data.referenceId}`);
  }
  parts.push(``);

  parts.push(`*👤 Customer Details:*`);
  parts.push(`• Name: ${data.fullName.trim() || 'Guest'}`);
  parts.push(`• Phone: ${data.phone.trim()}`);
  if (data.email && data.email.trim()) {
    parts.push(`• Email: ${data.email.trim()}`);
  }
  parts.push(``);

  parts.push(`*🏛️ Event Information:*`);
  parts.push(`• Event Type: ${data.eventType || 'Wedding'}`);
  parts.push(`• Preferred Date: ${data.selectedDate || 'To be decided / Flexible'}`);
  parts.push(`• Time Slot: ${data.timeSlot || 'Full Day'}`);
  parts.push(`• Expected Guests: ${data.guestsCount || '500 to 800'}`);
  parts.push(`• AC Rooms Needed: ${data.roomsCount || '13 AC Rooms (All Rooms)'}`);
  parts.push(
    `• Brahmin Package (2½ Days): ${
      data.brahminPackage ? 'Yes (Requested 2½ Days Package)' : 'No (Standard Package)'
    }`
  );

  if (data.notes && data.notes.trim()) {
    parts.push(``);
    parts.push(`*📝 Special Requirements / Questions:*`);
    parts.push(data.notes.trim());
  }

  parts.push(``);
  parts.push(`📍 *Venue Location:*`);
  parts.push(`Defence Colony, Madipakkam, Moovarasampettai, Chennai - 600091`);
  parts.push(`Please let me know the availability, auspicious muhurtham dates, and pricing details.`);

  return parts.join('\n');
}

/**
 * Builds the official WhatsApp direct URL with the prefilled message.
 */
export function getWhatsAppBookingUrl(data: BookingInquiryData): string {
  const message = formatWhatsAppMessage(data);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodedMessage}`;
}

/**
 * Triggers safe redirect to WhatsApp URL.
 */
export function triggerWhatsAppRedirect(url: string) {
  try {
    // Standard redirection
    window.location.href = url;
  } catch (error) {
    console.warn('WhatsApp automatic redirection was prevented:', error);
  }
}
