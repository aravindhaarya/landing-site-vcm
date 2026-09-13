import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  X,
  Calendar as CalendarIcon,
  Users,
  Check,
  ArrowRight,
  ArrowLeft,
  Crown,
  Sparkles,
  Clock,
  Mail,
  Phone,
  User,
  FileText,
  Download,
  Share2,
  Printer,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { HALLS, CATERING_TIERS, ADDONS_LIST, VENUE_INFO } from '../data/banquetData';
import { BookingFormData, BookingReceipt } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHallId?: string;
  initialEventType?: string;
  initialGuests?: number;
  initialConfig?: {
    hallId: string;
    guests: number;
    cateringTier: 'silver' | 'gold' | 'diamond' | 'none';
    selectedAddons: string[];
    estimatedTotal: number;
    timeSlot: 'morning' | 'evening' | 'full-day';
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialHallId,
  initialEventType,
  initialGuests,
  initialConfig,
}) => {
  const [step, setStep] = useState<number>(1);
  const [hallId, setHallId] = useState<string>(initialHallId || initialConfig?.hallId || HALLS[0].id);
  const [eventType, setEventType] = useState<string>(initialEventType || 'Wedding Reception');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-17'); // Default autumn Saturday
  const [timeSlot, setTimeSlot] = useState<'morning' | 'evening' | 'full-day'>(
    initialConfig?.timeSlot || 'evening'
  );
  const [guestsCount, setGuestsCount] = useState<number>(
    initialGuests || initialConfig?.guests || 250
  );
  const [cateringTier, setCateringTier] = useState<'silver' | 'gold' | 'diamond' | 'none'>(
    initialConfig?.cateringTier || 'gold'
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    initialConfig?.selectedAddons || ['valet-service', 'led-wall-av']
  );

  // Contact Info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Receipt once booked
  const [receipt, setReceipt] = useState<BookingReceipt | null>(null);

  // Reset or update when props change
  useEffect(() => {
    if (initialHallId) setHallId(initialHallId);
    if (initialEventType) setEventType(initialEventType);
    if (initialGuests) setGuestsCount(initialGuests);
    if (initialConfig) {
      setHallId(initialConfig.hallId);
      setGuestsCount(initialConfig.guests);
      setCateringTier(initialConfig.cateringTier);
      setSelectedAddons(initialConfig.selectedAddons);
      setTimeSlot(initialConfig.timeSlot);
    }
  }, [initialHallId, initialEventType, initialGuests, initialConfig]);

  // Compute selected hall
  const hall = HALLS.find((h) => h.id === hallId) || HALLS[0];

  // Price calculations
  const calculateTotal = () => {
    // Check if weekend
    const dateObj = new Date(selectedDate);
    const dayOfWeek = dateObj.getDay(); // 0 is Sunday, 6 is Saturday
    const isSaturday = dayOfWeek === 6;
    const isFriSun = dayOfWeek === 0 || dayOfWeek === 5;

    let base = hall.baseRentalWeekend;
    if (isSaturday) {
      base = hall.baseRentalWeekend;
    } else if (isFriSun) {
      base = Math.round(hall.baseRentalWeekend * 0.85);
    } else {
      base = hall.baseRentalWeekday;
    }

    if (timeSlot === 'morning') base = Math.round(base * 0.75);
    if (timeSlot === 'full-day') base = Math.round(base * 1.35);

    const cateringCost = CATERING_TIERS[cateringTier].pricePerGuest * guestsCount;
    const kitchenFee = cateringTier === 'none' ? 850 : 0;
    const addonsCost = selectedAddons.reduce((sum, id) => {
      const item = ADDONS_LIST.find((a) => a.id === id);
      return sum + (item ? item.price : 0);
    }, 0);

    const subtotal = base + cateringCost + kitchenFee + addonsCost;
    const serviceFee = Math.round(subtotal * 0.18);
    return subtotal + serviceFee;
  };

  const estimatedTotal = calculateTotal();
  const depositAmount = Math.round(estimatedTotal * 0.25);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email address is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Contact phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    const bookingId = `BWH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReceipt: BookingReceipt = {
      bookingId,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      data: {
        hallId,
        eventType,
        date: selectedDate,
        timeSlot,
        guestsCount,
        cateringTier,
        selectedAddons,
        fullName,
        email,
        phone,
        notes,
        estimatedTotal,
      },
      hallName: hall.name,
      status: 'Confirmed',
      depositAmount,
      totalAmount: estimatedTotal,
    };

    setReceipt(newReceipt);
    setStep(5);

    // Confetti celebration effect!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3e5ab', '#aa8014', '#ffffff'],
      });
    } catch (err) {
      // Safe fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadICS = () => {
    if (!receipt) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Banquet Wedding Hall//Booking//EN
BEGIN:VEVENT
SUMMARY:${receipt.data.eventType} at Banquet Wedding Hall
DESCRIPTION:Booking Reference: ${receipt.bookingId}\\nHall: ${receipt.hallName}\\nGuests: ${receipt.data.guestsCount}\\nTime Slot: ${receipt.data.timeSlot}
LOCATION:${VENUE_INFO.address}
DTSTART:${receipt.data.date.replace(/-/g, '')}T170000Z
DTEND:${receipt.data.date.replace(/-/g, '')}T235900Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Banquet-Wedding-Hall-${receipt.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl bg-[#FFFFFF] border-2 border-[#C5A059] shadow-2xl overflow-hidden my-6"
        style={{
          borderTopLeftRadius: '32px',
          borderBottomRightRadius: '32px',
        }}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#4A1C40] text-white border-b border-[#C5A059]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#34122c] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                {step === 5 ? 'Booking Confirmation & Voucher' : 'Reserve Your Date & Venue Hall'}
              </h3>
              <p className="text-xs text-[#F1EBE4]">
                {step === 5
                  ? 'Your provisional reservation is secured for 48 hours.'
                  : 'Instant date reservation with transparent pricing and 48-hour complimentary hold.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close Booking Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step Progress Bar (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-3 bg-[#F9F8F4] border-b border-[#F1EBE4] flex items-center justify-between text-xs">
            {[
              { num: 1, label: 'Hall & Event' },
              { num: 2, label: 'Date & Time' },
              { num: 3, label: 'Guests & Dining' },
              { num: 4, label: 'Contact & Hold' },
            ].map((s) => (
              <div
                key={s.num}
                className={`flex items-center gap-2 ${
                  step === s.num
                    ? 'text-[#4A1C40] font-bold'
                    : step > s.num
                    ? 'text-[#C5A059] font-medium'
                    : 'text-[#888888]'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    step === s.num
                      ? 'bg-[#4A1C40] text-white font-bold'
                      : step > s.num
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-[#E5E5E5] text-[#777]'
                  }`}
                >
                  {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {/* STEP 1: Hall & Event Type */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-3">
                  Select Venue Hall
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HALLS.map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setHallId(h.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex gap-3.5 ${
                        hallId === h.id
                          ? 'bg-[#1b1c28] border-[#d4af37] text-white ring-1 ring-[#d4af37]/40 shadow-lg'
                          : 'bg-[#14151e] border-white/10 text-neutral-400 hover:border-white/20'
                      }`}
                    >
                      <img
                        src={h.image}
                        alt={h.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1">
                        <div className="font-serif text-base text-white font-medium">{h.name}</div>
                        <div className="text-xs text-[#d4af37] mt-0.5">
                          Capacity: {h.capacityMin} – {h.capacityMax} guests
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-1">
                          {h.sqFt.toLocaleString()} sq. ft. • {h.ceilingHeight}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Event Occasion / Celebration Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Wedding Reception',
                    'Charity / Black-Tie Gala',
                    'Corporate Summit / Awards',
                    'Milestone Birthday / Quinceañera',
                    'Anniversary Celebration',
                    'Cultural / Engagement Ceremony',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        eventType === type
                          ? 'bg-[#d4af37] text-black font-semibold border-[#d4af37]'
                          : 'bg-[#161720] border-white/5 text-neutral-300 hover:border-white/15'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Date & Time Window */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Date Input & Quick dates */}
                <div className="md:col-span-6">
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Select Event Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#161722] border border-[#d4af37]/40 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] cursor-pointer mb-3"
                  />

                  <div className="p-3.5 rounded-xl bg-[#171824] border border-white/5 space-y-2 text-xs">
                    <div className="text-neutral-400 font-medium uppercase tracking-wider text-[10px]">
                      Popular 2026 Prime Dates Available:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'Oct 17, 2026 (Sat)', val: '2026-10-17' },
                        { label: 'Nov 07, 2026 (Sat)', val: '2026-11-07' },
                        { label: 'Dec 12, 2026 (Sat)', val: '2026-12-12' },
                        { label: 'Jan 23, 2027 (Sat)', val: '2027-01-23' },
                        { label: 'Feb 14, 2027 (Sun)', val: '2027-02-14' },
                      ].map((preset) => (
                        <button
                          key={preset.val}
                          type="button"
                          onClick={() => setSelectedDate(preset.val)}
                          className={`px-2.5 py-1 rounded text-[11px] transition-all cursor-pointer ${
                            selectedDate === preset.val
                              ? 'bg-[#d4af37] text-black font-semibold'
                              : 'bg-black/40 text-neutral-300 hover:text-white border border-white/5'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Window */}
                <div className="md:col-span-6">
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Select Time Window
                  </label>
                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'evening',
                        title: 'Grand Evening Gala (5:00 PM – 2:00 AM)',
                        desc: 'Full 9-hour window including cocktail hour, dinner, live entertainment, and dancing.',
                        tag: 'Most Popular',
                      },
                      {
                        id: 'morning',
                        title: 'Daylight Luncheon & Matinee (9:00 AM – 3:00 PM)',
                        desc: 'Ideal for sunlit ceremonies, morning receptions, brunch galas, or corporate daytime seminars.',
                        tag: '25% Rate Savings',
                      },
                      {
                        id: 'full-day',
                        title: 'Exclusive Full-Day Buyout (9:00 AM – 2:00 AM)',
                        desc: 'Full 17-hour exclusive access for multi-ceremony weddings and complex production builds.',
                        tag: 'Ultimate Privacy',
                      },
                    ].map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setTimeSlot(slot.id as any)}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          timeSlot === slot.id
                            ? 'bg-[#1b1c28] border-[#d4af37] text-white ring-1 ring-[#d4af37]/40'
                            : 'bg-[#151620] border-white/5 text-neutral-400 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-white">{slot.title}</span>
                          <span className="text-[10px] text-[#d4af37] bg-black/40 px-2 py-0.5 rounded border border-[#d4af37]/30">
                            {slot.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400">{slot.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Guests & Dining Experience */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Guest Count Slider */}
              <div className="bg-[#161722] p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                    Guest Count for {hall.name}
                  </span>
                  <span className="font-serif text-lg text-[#d4af37] font-semibold">
                    {guestsCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min={hall.capacityMin}
                  max={hall.capacityMax}
                  step={10}
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full accent-[#d4af37] h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                  <span>Minimum: {hall.capacityMin}</span>
                  <span>Maximum: {hall.capacityMax}</span>
                </div>
              </div>

              {/* Catering Package Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2.5">
                  Culinary &amp; Dining Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.entries(CATERING_TIERS) as [keyof typeof CATERING_TIERS, (typeof CATERING_TIERS)['gold']][]).map(
                    ([key, tier]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setCateringTier(key as any)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          cateringTier === key
                            ? 'bg-[#1c1e2a] border-[#d4af37] text-white ring-1 ring-[#d4af37]/40'
                            : 'bg-[#14151e] border-white/5 text-neutral-400 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-xs text-white">{tier.name}</div>
                          <span className="text-xs text-[#d4af37]">
                            {tier.pricePerGuest > 0 ? `$${tier.pricePerGuest}/guest` : 'Venue Only'}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-1 leading-snug">{tier.description}</p>
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Production Addons */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Optional Enhancements &amp; Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ADDONS_LIST.slice(0, 4).map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#1b1c28] border-[#d4af37] text-white'
                            : 'bg-[#151620] border-white/5 text-neutral-400'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'border-neutral-600'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-xs text-white">{addon.name}</span>
                        </div>
                        <span className="text-xs text-[#d4af37]">+${addon.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Contact Information & Review */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <form onSubmit={handleSubmitBooking} id="booking-final-form" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1">
                      Full Name of Host / Organizer *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Victoria & James Sterling"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full bg-[#161722] border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 ${
                          errors.fullName ? 'border-red-500 ring-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1">
                      Email Address (For Confirmation &amp; Contract) *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        placeholder="host@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full bg-[#161722] border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 ${
                          errors.email ? 'border-red-500 ring-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1">
                    Direct Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-[#161722] border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 ${
                        errors.phone ? 'border-red-500 ring-red-500' : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1">
                    Special Requests, Dietary Preferences, or Walkthrough Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. We would love a private champagne walkthrough this Saturday, halal/kosher dietary options, staging for a 10-piece orchestra..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#161722] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Review summary strip */}
                <div className="bg-[#1a1c27] p-4 rounded-xl border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-neutral-400">
                      Provisional Hold: <strong className="text-white">{hall.name}</strong> on{' '}
                      <strong className="text-[#d4af37]">{selectedDate}</strong>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">
                      {guestsCount} Guests • {CATERING_TIERS[cateringTier].name} • {timeSlot}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-neutral-400 uppercase">Estimated Total</div>
                    <div className="text-xl font-serif text-[#d4af37] font-semibold">
                      ${estimatedTotal.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-black/40 rounded-lg text-[11px] text-neutral-400 flex items-start gap-2 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    No credit card charged today. Submitting holds your date exclusively for 48 hours while our banquet director coordinates your private tasting and bespoke contract.
                  </span>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 5: Confirmation Voucher & Receipt */}
          {step === 5 && receipt && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Reservation Provisional Hold Active
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
                  Congratulations, {receipt.data.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto mt-2">
                  Your event date has been successfully locked in our system under provisional booking reference{' '}
                  <span className="text-[#d4af37] font-mono font-bold">{receipt.bookingId}</span>.
                </p>
              </div>

              {/* Digital Voucher Card */}
              <div
                id="printable-voucher"
                className="bg-gradient-to-b from-[#181a26] to-[#12131d] rounded-2xl border-2 border-[#d4af37]/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-4">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-[#d4af37]" />
                    <div>
                      <div className="font-serif text-lg text-white font-medium">AURA GRAND PALAIS</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#a09e96]">Official Booking Voucher</div>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-xs text-neutral-400">Reference ID</div>
                    <div className="text-base font-mono font-bold text-[#d4af37]">{receipt.bookingId}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-white/10 text-xs">
                  <div>
                    <div className="text-neutral-500 uppercase text-[10px]">Venue Hall</div>
                    <div className="text-white font-medium mt-0.5">{receipt.hallName}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 uppercase text-[10px]">Reserved Date</div>
                    <div className="text-[#d4af37] font-medium mt-0.5">{receipt.data.date}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 uppercase text-[10px]">Time Slot</div>
                    <div className="text-white capitalize mt-0.5">{receipt.data.timeSlot}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 uppercase text-[10px]">Guest Count</div>
                    <div className="text-white font-medium mt-0.5">{receipt.data.guestsCount} Guests</div>
                  </div>
                </div>

                <div className="py-4 border-b border-white/10 text-xs space-y-1.5">
                  <div className="flex justify-between text-neutral-300">
                    <span>Host / Point of Contact:</span>
                    <span className="text-white font-medium">{receipt.data.fullName}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Confirmation Sent To:</span>
                    <span className="text-white">{receipt.data.email} • {receipt.data.phone}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Catering Selection:</span>
                    <span className="text-white">{CATERING_TIERS[receipt.data.cateringTier].name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Provisional Hold Window:</span>
                    <span className="text-emerald-400 font-medium">48 Hours Complimentary Hold</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-neutral-400">Total Projected Investment</div>
                    <div className="font-serif text-2xl text-[#d4af37] font-normal">
                      ${receipt.totalAmount.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase text-neutral-400">Deposit Due on Contract</div>
                    <div className="text-sm font-semibold text-white">
                      ${receipt.depositAmount.toLocaleString()} (25%)
                    </div>
                  </div>
                </div>
              </div>

              {/* Voucher Action Tools */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadICS}
                  className="px-4 py-2.5 rounded-lg bg-[#1a1c27] hover:bg-[#222433] border border-[#d4af37]/40 text-xs text-white flex items-center gap-2 cursor-pointer transition-all"
                >
                  <CalendarCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2.5 rounded-lg bg-[#1a1c27] hover:bg-[#222433] border border-white/10 text-xs text-white flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Printer className="w-4 h-4 text-[#d4af37]" />
                  <span>Print Voucher</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b89122] text-[#0c0d10] font-semibold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close &amp; Return to Site
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Modal Footer Controls (Steps 1 to 4) */}
        {step < 5 && (
          <div className="p-5 sm:p-6 bg-[#F9F8F4] border-t border-[#F1EBE4] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#DDD] hover:border-[#C5A059] text-xs text-[#4A1C40] font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <div className="text-[10px] text-[#777777] uppercase tracking-wider">Estimated Subtotal</div>
                <div className="text-sm font-serif text-[#4A1C40] font-bold">
                  ${estimatedTotal.toLocaleString()}
                </div>
              </div>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-3 bg-[#4A1C40] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#34122c] shadow cursor-pointer transition-all"
                  style={{
                    borderTopLeftRadius: '14px',
                    borderBottomRightRadius: '14px',
                    border: '1px solid #C5A059',
                  }}
                >
                  <span>Continue Step {step + 1}</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitBooking}
                  className="px-6 py-3 bg-[#C5A059] hover:bg-[#b38b44] text-[#4A1C40] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer transition-all"
                  style={{
                    borderTopLeftRadius: '14px',
                    borderBottomRightRadius: '14px',
                    border: '2px solid #4A1C40',
                  }}
                >
                  <Check className="w-4 h-4 text-[#4A1C40]" />
                  <span>Lock In 48-Hour Date Hold</span>
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
