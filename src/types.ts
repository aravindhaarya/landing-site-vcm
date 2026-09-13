export interface Hall {
  id: string;
  name: string;
  tagline: string;
  capacityMax: number;
  capacityMin: number;
  sqFt: number;
  ceilingHeight: string;
  image: string;
  additionalImages: string[];
  description: string;
  baseRentalWeekend: number;
  baseRentalWeekday: number;
  features: string[];
  idealFor: string[];
  layoutCapacities: {
    banquet: number;
    theater: number;
    cocktail: number;
    classroom: number;
  };
}

export type GalleryCategory = 'all' | 'weddings' | 'galas' | 'decor' | 'dining' | 'lighting';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  hallId?: string;
  hallName: string;
  image: string;
  caption: string;
  tags: string[];
  featured?: boolean;
}

export interface EventPackage {
  id: string;
  name: string;
  badge?: string;
  pricePerGuest: number;
  minGuests: number;
  tagline: string;
  description: string;
  inclusions: string[];
  popularFor: string;
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  quote: string;
  rating: number;
  date: string;
  image: string;
  hall: string;
}

export interface BookingFormData {
  hallId: string;
  eventType: string;
  date: string;
  timeSlot: 'morning' | 'evening' | 'full-day';
  guestsCount: number;
  cateringTier: 'silver' | 'gold' | 'diamond' | 'none';
  selectedAddons: string[];
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  estimatedTotal: number;
}

export interface BookingReceipt {
  bookingId: string;
  createdAt: string;
  data: BookingFormData;
  hallName: string;
  status: 'Confirmed' | 'Pending Review';
  depositAmount: number;
  totalAmount: number;
}
