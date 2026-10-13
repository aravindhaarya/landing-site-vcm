import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar as CalendarIcon,
  Users,
  Check,
  Phone,
  User,
  Sparkles,
  Clock,
  CheckCircle2,
  Building2,
  Send,
  Copy,
  ExternalLink,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/banquetData';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  getWhatsAppBookingUrl,
  formatWhatsAppMessage,
  triggerWhatsAppRedirect,
  WHATSAPP_PHONE,
  WHATSAPP_PHONE_DISPLAY,
  BookingInquiryData
} from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEventType,
}) => {
  const [eventType, setEventType] = useState<string>(initialEventType || 'Wedding');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('Full Day');
  const [guestsCount, setGuestsCount] = useState<string>('300 - 450');
  const [brahminPackage, setBrahminPackage] = useState<boolean>(false);
  const [roomsCount, setRoomsCount] = useState<string>('8 Rooms (All Rooms)');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [redirectCountdown, setRedirectCountdown] = useState<number>(3);

  // Sync initialEventType if it updates when opening
  useEffect(() => {
    if (initialEventType) {
      setEventType(initialEventType);
    }
  }, [initialEventType]);

  // Handle countdown ticker when submitted
  useEffect(() => {
    if (isSubmitted && redirectCountdown > 0) {
      const timer = setTimeout(() => {
        setRedirectCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, redirectCountdown]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'VCKM-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);

    const inquiryData: BookingInquiryData = {
      fullName,
      phone,
      email,
      eventType,
      selectedDate,
      timeSlot,
      guestsCount,
      roomsCount,
      brahminPackage,
      notes,
      referenceId: ref,
    };

    const targetUrl = getWhatsAppBookingUrl(inquiryData);
    const formattedText = formatWhatsAppMessage(inquiryData);

    setWhatsappUrl(targetUrl);
    setPrefilledMessage(formattedText);
    setIsSubmitted(true);
    setRedirectCountdown(3);

    // Automatically trigger redirection to WhatsApp
    triggerWhatsAppRedirect(targetUrl);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(prefilledMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCopied(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-[#C5A059] overflow-hidden my-6 transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#4A1C40] p-5 sm:p-6 text-white flex items-center justify-between border-b-2 border-[#C5A059]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#4A1C40] flex items-center justify-center font-serif font-bold text-lg shrink-0">
              V
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold flex items-center gap-2">
                <span>{isSubmitted ? 'Redirecting to WhatsApp' : 'Request Form & Booking Inquiry'}</span>
              </h2>
              <p className="text-xs text-[#C5A059] flex items-center gap-1.5 mt-0.5">
                <span>Varathambal Chockalingam Kalyana Mahal</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-emerald-300 font-medium">
                  <WhatsAppIcon className="w-3 h-3 fill-emerald-300" />
                  <span>{WHATSAPP_PHONE}</span>
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-5">
              {/* WhatsApp Redirect Status Card */}
              <div className="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-500/40 space-y-3">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md animate-pulse">
                  <WhatsAppIcon className="w-8 h-8 fill-white" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquiry Reference #{referenceId}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A1C40]">
                    Redirecting to WhatsApp...
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto mt-1">
                    Your request has been formulated with a prefilled message for WhatsApp number{' '}
                    <strong className="text-emerald-700">{WHATSAPP_PHONE}</strong>.
                  </p>
                </div>

                {/* Primary Direct WhatsApp Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    id="whatsapp-redirect-primary-btn"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                    <span>Open WhatsApp with Prefilled Response</span>
                    <ExternalLink className="w-4 h-4 text-white/90" />
                  </a>

                  <button
                    onClick={handleCopyMessage}
                    type="button"
                    className="w-full sm:w-auto px-4 py-3 bg-white border border-gray-300 hover:border-emerald-500 text-gray-700 font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Message Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gray-500" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-gray-500">
                  Click the green button above if WhatsApp didn&apos;t open automatically.
                </p>
              </div>

              {/* Prefilled Response Preview Box */}
              <div className="text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A1C40] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Prefilled WhatsApp Message Preview</span>
                  </span>
                  <span className="text-[11px] text-[#777777]">
                    Sent to: <strong>{WHATSAPP_PHONE}</strong>
                  </span>
                </div>
                
                <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#E5E0D8] text-xs font-mono text-gray-800 whitespace-pre-line leading-relaxed max-h-48 overflow-y-auto selection:bg-emerald-200">
                  {prefilledMessage}
                </div>
              </div>

              {/* Summary Summary Card */}
              <div className="bg-[#F9F8F4] p-3.5 rounded-xl border border-[#E5E0D8] text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#777777]">Customer Name:</span>
                  <span className="font-bold text-[#4A1C40]">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777777]">Customer Phone:</span>
                  <span className="font-bold text-[#4A1C40]">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777777]">Event Type:</span>
                  <span className="font-bold text-[#4A1C40]">{eventType}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between">
                    <span className="text-[#777777]">Preferred Date:</span>
                    <span className="font-bold text-[#4A1C40]">{selectedDate}</span>
                  </div>
                )}
                {brahminPackage && (
                  <div className="flex justify-between">
                    <span className="text-[#777777]">Package:</span>
                    <span className="font-bold text-[#C5A059]">Specialized Brahmin Package (2½ Days)</span>
                  </div>
                )}
              </div>

              {/* Secondary Navigation Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F1EBE4]">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#4A1C40] hover:text-[#C5A059] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Edit Request Details</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={VENUE_INFO.telLink}
                    className="w-full sm:w-auto px-4 py-2 bg-[#F1EBE4] text-[#4A1C40] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#E5E0D8] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                    <span>Call: {VENUE_INFO.phone}</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2 bg-[#4A1C40] text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#34122c] cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* WhatsApp Redirection Notice */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-emerald-900">
                    Instant WhatsApp Redirection ({WHATSAPP_PHONE})
                  </p>
                  <p className="text-emerald-700 text-[11px] mt-0.5 leading-snug">
                    Submitting this form immediately redirects to WhatsApp with your prefilled inquiry response directly to the hall manager.
                  </p>
                </div>
              </div>

              {/* Event Type selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                  Select your event <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EVENT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-left flex items-center justify-between cursor-pointer ${
                        eventType === type
                          ? 'bg-[#4A1C40] text-white border-[#4A1C40] shadow-xs'
                          : 'bg-[#F9F8F4] text-[#333333] border-[#E5E0D8] hover:border-[#C5A059]'
                      }`}
                    >
                      <span>{type}</span>
                      {eventType === type && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialized Brahmin Package Checkbox */}
              <div className="bg-[#FFF9EE] p-3.5 rounded-xl border border-[#C5A059] flex items-start gap-3">
                <input
                  id="modal-brahmin-package"
                  type="checkbox"
                  checked={brahminPackage}
                  onChange={(e) => setBrahminPackage(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#4A1C40] border-[#C5A059] rounded focus:ring-[#C5A059] cursor-pointer"
                />
                <label htmlFor="modal-brahmin-package" className="text-xs text-[#4A1C40] cursor-pointer">
                  <span className="font-bold block">Specialized Brahmin Package Available (2½ Days)</span>
                  <span className="text-[#666666] text-[11px]">
                    Includes extended muhurtham setup, traditional rituals, and kitchen facilities.
                  </span>
                </label>
              </div>

              {/* Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  >
                    <option value="Morning / Muhurtham">Morning / Muhurtham</option>
                    <option value="Evening / Reception">Evening / Reception</option>
                    <option value="Full Day">Full Day (Morning to Evening)</option>
                    <option value="2½ Days Package">2½ Days Traditional Package</option>
                  </select>
                </div>
              </div>

              {/* Guest Count & Rooms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1.5">
                    Expected Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  >
                    <option value="Up to 150 (Dining)">Up to 150 (Dining capacity)</option>
                    <option value="150 - 300 Guests">150 - 300 Guests</option>
                    <option value="300 - 450 Guests">300 - 450 Guests (Full Seating)</option>
                    <option value="450+ Guests">450+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-1.5">
                    AC Rooms Needed (8 Available)
                  </label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  >
                    <option value="2 Rooms (Bride & Groom)">2 Rooms (Bride &amp; Groom Suites)</option>
                    <option value="4 Rooms">4 Rooms</option>
                    <option value="8 Rooms (All Rooms)">8 Rooms (All Rooms)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-[#F1EBE4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A1C40]">
                  Your Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#555555] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#555555] mb-1">
                      WhatsApp / Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#555555] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#555555] mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Catering preferences, muhurtham timing, flower decorations..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Direct Submit & WhatsApp Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="modal-request-submit-btn"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-[#4A1C40] hover:from-emerald-700 hover:to-[#34122c] text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    borderTopLeftRadius: '18px',
                    borderBottomRightRadius: '18px',
                  }}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send Request to WhatsApp ({WHATSAPP_PHONE})</span>
                </button>
                <p className="text-[11px] text-center text-[#777777] mt-2">
                  Automatically opens WhatsApp with your prefilled inquiry response to{' '}
                  <strong>{WHATSAPP_PHONE}</strong>
                </p>
              </div>

              {/* Call Now fallback */}
              <div className="text-center pt-1 border-t border-[#F1EBE4]">
                <span className="text-xs text-[#777777]">Prefer a quick phone call? </span>
                <a
                  href={VENUE_INFO.telLink}
                  className="text-xs font-bold text-[#4A1C40] hover:text-[#C5A059] inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#C5A059]" />
                  <span>Call Hall Manager: {VENUE_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
