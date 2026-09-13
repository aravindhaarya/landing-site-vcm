import React, { useState } from 'react';
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
  Send
} from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/banquetData';

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'VCKM-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-[#C5A059] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#4A1C40] p-6 text-white flex items-center justify-between border-b-2 border-[#C5A059]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#4A1C40] flex items-center justify-center font-serif font-bold text-lg">
              V
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                {isSubmitted ? 'Request Submitted' : 'Request Form & Booking Inquiry'}
              </h2>
              <p className="text-xs text-[#C5A059]">
                Varathambal Chockalingam Kalyana Mahal • Chennai
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                  Inquiry Reference #{referenceId}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#4A1C40] mt-1">
                  Thank You, {fullName || 'Valued Guest'}!
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto mt-2 leading-relaxed">
                  Your event request for <strong>{eventType}</strong> has been received by Varathambal Chockalingam Kalyana Mahal. Our hall manager will get in touch with you at <strong>{phone}</strong> to confirm available muhurtham dates and arrangements.
                </p>
              </div>

              <div className="bg-[#F9F8F4] p-4 rounded-xl border border-[#E5E0D8] max-w-md mx-auto text-left text-xs space-y-2">
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
                <div className="flex justify-between">
                  <span className="text-[#777777]">Expected Guests:</span>
                  <span className="font-bold text-[#4A1C40]">{guestsCount}</span>
                </div>
                {brahminPackage && (
                  <div className="flex justify-between">
                    <span className="text-[#777777]">Package:</span>
                    <span className="font-bold text-[#C5A059]">Specialized Brahmin Package (2½ Days)</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#777777]">Rooms:</span>
                  <span className="font-bold text-[#4A1C40]">{roomsCount}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={VENUE_INFO.telLink}
                  className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] text-[#4A1C40] font-bold text-xs uppercase tracking-wider rounded-full shadow-xs hover:bg-[#b58f48] flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-[#4A1C40]" />
                  <span>Call Hall Manager: {VENUE_INFO.phone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#4A1C40] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#34122c] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
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
                          ? 'bg-[#4A1C40] text-white border-[#4A1C40]'
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
                  className="mt-1 w-4 h-4 text-[#4A1C40] border-[#C5A059] rounded focus:ring-[#C5A059]"
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
                      placeholder="Your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#555555] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-9444139077"
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
                    placeholder="Any specific arrangements, catering preferences, or questions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#E5E0D8] rounded-lg bg-[#F9F8F4] text-[#333333] focus:outline-hidden focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Direct Submit Button */}
              <button
                type="submit"
                id="modal-request-submit-btn"
                className="w-full py-3.5 bg-[#4A1C40] hover:bg-[#34122c] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  borderTopLeftRadius: '18px',
                  borderBottomRightRadius: '18px',
                }}
              >
                <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Submit Request Form</span>
              </button>

              {/* Call Now fallback */}
              <div className="text-center pt-2">
                <span className="text-xs text-[#777777]">Prefer to speak directly? </span>
                <a
                  href={VENUE_INFO.telLink}
                  className="text-xs font-bold text-[#4A1C40] hover:text-[#C5A059] inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#C5A059]" />
                  <span>Call Now: {VENUE_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
