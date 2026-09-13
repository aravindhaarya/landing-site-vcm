export interface Facility {
  id: string;
  title: string;
  iconImg: string;
  desc?: string;
}

export interface MahalAmenity {
  id: string;
  title: string;
  iconImg: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption?: string;
}

export interface BookingFormData {
  eventType: string;
  date: string;
  timeSlot: string;
  guestsCount: string;
  fullName: string;
  email?: string;
  phone: string;
  notes?: string;
}

export interface BookingReceipt {
  bookingId: string;
  createdAt: string;
  data: BookingFormData;
}
