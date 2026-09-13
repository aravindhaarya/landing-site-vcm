import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';
import { HALLS, CATERING_TIERS, ADDONS_LIST } from '../data/banquetData';

interface PackageCalculatorProps {
  initialHallId?: string;
  onProceedToBooking: (config: {
    hallId: string;
    guests: number;
    cateringTier: 'silver' | 'gold' | 'diamond' | 'none';
    selectedAddons: string[];
    estimatedTotal: number;
    timeSlot: 'morning' | 'evening' | 'full-day';
  }) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({
  initialHallId,
  onProceedToBooking,
}) => {
  const [selectedHallId, setSelectedHallId] = useState<string>(initialHallId || HALLS[0].id);
  const [guestCount, setGuestCount] = useState<number>(250);
  const [dayTier, setDayTier] = useState<'saturday' | 'friday-sunday' | 'weekday'>('saturday');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'evening' | 'full-day'>('evening');
  const [cateringTier, setCateringTier] = useState<'silver' | 'gold' | 'diamond' | 'none'>('gold');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['valet-service']);

  const selectedHall = HALLS.find((h) => h.id === selectedHallId) || HALLS[0];

  const handleHallChange = (id: string) => {
    setSelectedHallId(id);
    const hall = HALLS.find((h) => h.id === id);
    if (hall) {
      if (guestCount > hall.capacityMax) setGuestCount(hall.capacityMax);
      if (guestCount < hall.capacityMin) setGuestCount(hall.capacityMin);
    }
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Pricing calculations
  let baseRental = selectedHall.baseRentalWeekend;
  if (dayTier === 'weekday') {
    baseRental = selectedHall.baseRentalWeekday;
  } else if (dayTier === 'friday-sunday') {
    baseRental = Math.round(selectedHall.baseRentalWeekend * 0.85);
  }

  if (timeSlot === 'morning') {
    baseRental = Math.round(baseRental * 0.75);
  } else if (timeSlot === 'full-day') {
    baseRental = Math.round(baseRental * 1.35);
  }

  const cateringOption = CATERING_TIERS[cateringTier];
  const cateringSubtotal = cateringOption ? cateringOption.pricePerGuest * guestCount : 0;

  const addonsSubtotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS_LIST.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = baseRental + cateringSubtotal + addonsSubtotal;
  const perGuestAvg = Math.round(grandTotal / guestCount);

  return (
    <section id="calculator" className="py-20 bg-[#FFFFFF] border-b border-[#F1EBE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EBE4] text-[#4A1C40] text-xs uppercase tracking-widest font-bold mb-3 border border-[#C5A059]/30">
            <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Transparent Investment Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A1C40] font-normal mb-3">
            Build Your Event &amp; Estimate Pricing
          </h2>
          <p className="text-base text-[#666666] font-serif italic">
            Customize guest count, hall selection, Michelin-inspired catering tiers, and luxury production add-ons with immediate cost visibility.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div
          className="bg-[#F9F8F4] border-2 border-[#C5A059] shadow-xl overflow-hidden"
          style={{
            borderTopLeftRadius: '36px',
            borderBottomRightRadius: '36px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              
              {/* Step 1: Hall Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-3">
                  1. Select Palatial Hall
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HALLS.map((h) => {
                    const isSelected = h.id === selectedHallId;
                    return (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => handleHallChange(h.id)}
                        className={`p-3.5 text-left border rounded-xl transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFFFFF] border-[#C5A059] shadow-sm ring-1 ring-[#C5A059]'
                            : 'bg-[#FFFFFF] border-[#DDD] hover:border-[#C5A059]'
                        }`}
                      >
                        <div className="font-serif text-sm font-bold text-[#4A1C40] mb-0.5">
                          {h.name}
                        </div>
                        <div className="text-[11px] text-[#777]">
                          Capacity: {h.capacityMin} – {h.capacityMax} Guests
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Guest Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#4A1C40]">
                    2. Guest Count Attendance
                  </label>
                  <span className="font-serif text-lg font-bold text-[#C5A059] bg-[#FFFFFF] px-3 py-0.5 rounded-full border border-[#C5A059]/40">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedHall.capacityMin}
                  max={selectedHall.capacityMax}
                  step={5}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#4A1C40] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#777] mt-1">
                  <span>Min: {selectedHall.capacityMin}</span>
                  <span>Recommended: {Math.round(selectedHall.capacityMax * 0.75)}</span>
                  <span>Max: {selectedHall.capacityMax}</span>
                </div>
              </div>

              {/* Step 3: Date Tier & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                    3. Date Calendar Tier
                  </label>
                  <select
                    value={dayTier}
                    onChange={(e) => setDayTier(e.target.value as any)}
                    className="w-full bg-[#FFFFFF] border border-[#DDD] text-xs font-medium text-[#333] px-3 py-2.5 rounded focus:border-[#C5A059] focus:outline-none cursor-pointer"
                  >
                    <option value="saturday">Saturday Prime Evening (Full Rate)</option>
                    <option value="friday-sunday">Friday / Sunday Special (15% Off)</option>
                    <option value="weekday">Monday – Thursday Weekday (Best Value)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-2">
                    4. Event Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value as any)}
                    className="w-full bg-[#FFFFFF] border border-[#DDD] text-xs font-medium text-[#333] px-3 py-2.5 rounded focus:border-[#C5A059] focus:outline-none cursor-pointer"
                  >
                    <option value="evening">Evening Gala (5:00 PM – 1:00 AM)</option>
                    <option value="morning">Daytime Soiree (10:00 AM – 4:00 PM)</option>
                    <option value="full-day">Full Day &amp; Night Exclusivity (14 Hours)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Catering Tiers */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-3">
                  5. Dining &amp; Open Bar Tiers
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(Object.entries(CATERING_TIERS) as [keyof typeof CATERING_TIERS, (typeof CATERING_TIERS)['gold']][]).map(
                    ([key, tier]) => {
                      const isSelected = key === cateringTier;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setCateringTier(key as any)}
                          className={`p-3.5 text-left border rounded-xl transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#FFFFFF] border-[#C5A059] shadow-sm ring-1 ring-[#C5A059]'
                              : 'bg-[#FFFFFF] border-[#DDD] hover:border-[#C5A059]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-sm font-bold text-[#4A1C40]">
                              {tier.name}
                            </span>
                            <span className="text-xs font-bold text-[#C5A059]">
                              {tier.pricePerGuest > 0 ? `$${tier.pricePerGuest}/guest` : 'Approved Caterer'}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#666] line-clamp-2">
                            {tier.description}
                          </p>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Step 5: Add-ons checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1C40] mb-3">
                  6. Luxury Production &amp; Entertainment Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADDONS_LIST.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 border rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-[#FFFFFF] border-[#C5A059] text-[#4A1C40]'
                            : 'bg-[#FFFFFF] border-[#E5E5E5] text-[#555] hover:border-[#C5A059]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked
                                ? 'bg-[#4A1C40] border-[#4A1C40] text-white'
                                : 'border-[#CCC] bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-xs font-medium">{addon.name}</span>
                        </div>
                        <span className="text-xs font-bold text-[#C5A059]">
                          +${addon.price.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Cost Breakdown Card */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#FFFFFF] border-t lg:border-t-0 lg:border-l-2 border-[#C5A059] flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real-Time Estimation</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#4A1C40] font-normal">
                    Investment Summary
                  </h3>
                  <div className="text-xs text-[#777] font-serif italic">
                    {selectedHall.name} • {guestCount} Guests
                  </div>
                </div>

                {/* Line Items */}
                <div className="space-y-3 pt-3 border-t border-[#F1EBE4] text-xs">
                  <div className="flex justify-between text-[#444]">
                    <span>Hall Rental ({timeSlot})</span>
                    <span className="font-bold text-[#4A1C40]">${baseRental.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-[#444]">
                    <span>
                      Catering: {cateringOption?.name} ({guestCount} × ${cateringOption?.pricePerGuest || 0})
                    </span>
                    <span className="font-bold text-[#4A1C40]">${cateringSubtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-[#444]">
                    <span>Selected Add-ons ({selectedAddons.length})</span>
                    <span className="font-bold text-[#4A1C40]">${addonsSubtotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Grand Total Box */}
                <div
                  className="bg-[#4A1C40] text-white p-5 border border-[#C5A059]"
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                  }}
                >
                  <div className="text-[11px] uppercase tracking-wider text-[#C5A059] font-bold mb-1">
                    Estimated Total Package
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl text-white font-normal mb-1">
                    ${grandTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-[#F1EBE4]">
                    Approximately <span className="font-bold text-[#C5A059]">${perGuestAvg}</span> per guest
                  </div>
                </div>

                <div className="space-y-2 text-[11px] text-[#666]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Includes 48-Hour Provisional Hold Protection</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Includes tables, Chiavari chairs, stemware &amp; white linens</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>No hidden taxes — transparent venue estimate</span>
                  </div>
                </div>
              </div>

              {/* Proceed to Booking Wizard CTA */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() =>
                    onProceedToBooking({
                      hallId: selectedHallId,
                      guests: guestCount,
                      cateringTier,
                      selectedAddons,
                      estimatedTotal: grandTotal,
                      timeSlot,
                    })
                  }
                  className="w-full py-4 bg-[#C5A059] hover:bg-[#b38b44] text-[#4A1C40] font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                    border: '2px solid #4A1C40',
                  }}
                >
                  <span>Lock in Estimate &amp; Reserve Date</span>
                  <ArrowRight className="w-4 h-4 text-[#4A1C40]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
