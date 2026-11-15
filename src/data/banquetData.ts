import { Facility, MahalAmenity, GalleryItem } from '../types';

export const VENUE_INFO = {
  name: "Varathambal Chockalingam Kalyana Mahal",
  tagline: "Premier Wedding & Social Gathering Venue",
  phone: "+91-9962621652",
  phoneDisplay: "+91-9962621652",
  telLink: "tel:+919962621652",
  whatsapp: "+919962621652",
  whatsappDigits: "919962621652",
  whatsappUrl: "https://wa.me/919962621652",
  additionalPhones: [
    { number: "+91-9600095411", telLink: "tel:+919600095411" },
    { number: "+91-9094912929", telLink: "tel:+919094912929" }
  ],
  allPhones: [
    { number: "+91-9962621652", telLink: "tel:+919962621652", label: "Primary" },
    { number: "+91-9600095411", telLink: "tel:+919600095411", label: "Support" },
    { number: "+91-9094912929", telLink: "tel:+919094912929", label: "Inquiry" }
  ],
  address: "X59R+H25, junction, koot road, Defence Colony, Madipakkam, Moovarasampettai, Tamil Nadu 600091",
  landmark: "Defence Colony, Madipakkam, Moovarasampettai, Chennai",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=X59R%2BH25%2C+junction%2C+koot+road%2C+Defence+Colony%2C+Madipakkam%2C+Moovarasampettai%2C+Tamil+Nadu+600091",
  capacity: "600+ Seated (1500+ Floating)",
  diningCapacity: "200+ Dining Seating",
  aboutHeading: "Book Varathambal Chockalingam Kalyana Mahal for Your Dream Celebration",
  aboutText: "Varathambal Chockalingam Kalyana Mahal is an ideal venue for weddings and grand social gatherings, accommodating over 600+ seated guests (1500+ floating) comfortably. With an expansive, elegant layout and 200+ dining hall seating capacity, it offers customizable seating arrangements to suit your event's needs. The hall is equipped with modern amenities including 100% generator power backup, wheelchair accessible facilities, and provides a blend of comfort and style, ensuring a memorable experience for all. Known for its professional staff and attention to detail, Varathambal Chockalingam Kalyana Mahal guarantees smooth event execution. Conveniently located with ample parking, it ensures easy access for guests. Varathambal Chockalingam Kalyana Mahal ambiance and excellent service make it a top choice for unforgettable celebrations.",
  aboutImage: "",
  aboutImageAlt: "Varathambal Chockalingam Kalyana Mahal Grand Hall",
  heroImage: ""
};

export const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Conference",
  "Birthday / Party",
  "Other"
];

export const FACILITIES: Facility[] = [
  {
    id: "f-seating",
    title: "600+ Seating Capacity",
    iconImg: "https://lakshmihall.com/assets/laks-img/seating-capacity.webp",
    desc: "Grand air-conditioned hall with 600+ seated capacity and 1500+ floating guests"
  },
  {
    id: "f-dining",
    title: "200+ Dining Seating",
    iconImg: "https://lakshmihall.com/assets/laks-img/dining-table.webp",
    desc: "Dedicated traditional dining hall with 200+ seating capacity"
  },
  {
    id: "f-rooms",
    title: "13 AC Rooms Available (Including Bride and Groom)",
    iconImg: "https://lakshmihall.com/assets/laks-img/rooms.webp",
    desc: "13 fully equipped AC rooms including exclusive bride & groom suites"
  },
  {
    id: "f-generator",
    title: "100% Generator Power Backup",
    iconImg: "https://lakshmihall.com/assets/laks-img/hours.webp",
    desc: "Heavy-duty DG generator ensuring uninterrupted power for lights, AC, and lifts"
  },
  {
    id: "f-wheelchair",
    title: "Wheelchair Accessible & Ramp Facility",
    iconImg: "https://lakshmihall.com/assets/laks-img/comfortable.webp",
    desc: "Barrier-free entry, dedicated ramps, and elevator access for easy movement"
  },
  {
    id: "f-cars-valet",
    title: "Cars + Valet Drivers Available",
    iconImg: "https://lakshmihall.com/assets/laks-img/valet-drivers.webp",
    desc: "Comfortable car parking with courteous valet drivers"
  },
  {
    id: "f-bikes",
    title: "Bikes Can Be Parked",
    iconImg: "https://lakshmihall.com/assets/laks-img/motorcycle.webp",
    desc: "Secure, designated parking area for two-wheelers"
  },
  {
    id: "f-ac",
    title: "Fully Air-Conditioned Mahal",
    iconImg: "https://lakshmihall.com/assets/laks-img/air-conditioner.webp",
    desc: "100% centralized air-conditioning covering all floors"
  },
  {
    id: "f-brahmin-package",
    title: "Specialized Brahmin Package Available (2½ Days)",
    iconImg: "https://lakshmihall.com/assets/laks-img/temple.webp",
    desc: "Tailored 2.5-day traditional Brahmin ceremony arrangement"
  },
  {
    id: "f-lift",
    title: "Lift is available for all floors",
    iconImg: "https://lakshmihall.com/assets/laks-img/hydraulics-lift.webp",
    desc: "Safety & style: Hydraulics and passenger lifts for all floors"
  }
];

export const AMENITIES: MahalAmenity[] = [
  {
    id: "a-gen",
    title: "100% Generator power backup ensuring uninterrupted celebrations (lights, AC & lifts)",
    iconImg: "https://lakshmihall.com/assets/laks-img/hours.webp"
  },
  {
    id: "a-wheelchair",
    title: "Wheelchair accessible entry, ramps, and barrier-free movement for elders & guests",
    iconImg: "https://lakshmihall.com/assets/laks-img/comfortable.webp"
  },
  {
    id: "a-1",
    title: "Dedicated Food/Good/Service Hydraulics lift and Passenger lift for your convenience",
    iconImg: "https://lakshmihall.com/assets/laks-img/hydraulics-lift.webp"
  },
  {
    id: "a-2",
    title: "24 Hours complete site surveillance by 4K cameras for your safety",
    iconImg: "https://lakshmihall.com/assets/laks-img/hours.webp"
  },
  {
    id: "a-3",
    title: "Car parking available",
    iconImg: "https://lakshmihall.com/assets/laks-img/parking.webp"
  },
  {
    id: "a-4",
    title: "100% Air conditioned covering Party Hall, Dining hall, Rooms, Common Areas and Passages.",
    iconImg: "https://lakshmihall.com/assets/laks-img/conditioned.webp"
  },
  {
    id: "a-5",
    title: "Comfortable Party hall with great ambience having 600+ seating capacity (1500+ floating)",
    iconImg: "https://lakshmihall.com/assets/laks-img/comfortable.webp"
  },
  {
    id: "a-6",
    title: "200+ Dining Seating",
    iconImg: "https://lakshmihall.com/assets/laks-img/dshining.webp"
  },
  {
    id: "a-7",
    title: "Multi-Gigabit High speed Internet & Wi-Fi (available on request)",
    iconImg: "https://lakshmihall.com/assets/laks-img/gigabit.webp"
  },
  {
    id: "a-8",
    title: "State of the art Studio quality Audio & Visual equipments.",
    iconImg: "https://lakshmihall.com/assets/laks-img/visual.webp"
  },
  {
    id: "a-9",
    title: "Entire building covered by soothing background music",
    iconImg: "https://lakshmihall.com/assets/laks-img/building.webp"
  },
  {
    id: "a-10",
    title: "Valet parking (available)",
    iconImg: "https://lakshmihall.com/assets/laks-img/valet.webp"
  },
  {
    id: "a-11",
    title: "Welcome girls (available on request)",
    iconImg: "https://lakshmihall.com/assets/laks-img/girls.webp"
  },
  {
    id: "a-12",
    title: "24 Hours House Keeping",
    iconImg: "https://lakshmihall.com/assets/laks-img/keeping.webp"
  },
  {
    id: "a-13",
    title: "Conference Room/Business Center with High end dedicated audio system,Large screen projectors",
    iconImg: "https://lakshmihall.com/assets/laks-img/conference.webp"
  },
  {
    id: "a-14",
    title: "Staging/Decoration service (available)",
    iconImg: "https://lakshmihall.com/assets/laks-img/digital.webp"
  },
  {
    id: "a-15",
    title: "Photo/Video services (on request)",
    iconImg: "https://lakshmihall.com/assets/laks-img/video.webp"
  },
  {
    id: "a-16",
    title: "Catering services (On request)",
    iconImg: "https://lakshmihall.com/assets/laks-img/catering.webp"
  },
  {
    id: "a-17",
    title: "Kitchen facility available for client usage",
    iconImg: "https://lakshmihall.com/assets/laks-img/kitchen.webp"
  }
];

export const MOMENTS_GALLERY: GalleryItem[] = [
  {
    id: "moment-1",
    page: 2,
    title: "Grand Mahal Night Illumination & Royal Arch",
    thumbnail: "/gallery/thumb-page-02.webp",
    image: "/gallery/preview-page-02.webp",
    caption: "Illuminated Facade & Entrance Mandapam",
    category: "Facade"
  },
  {
    id: "moment-2",
    page: 4,
    title: "Majestic Exterior & Architecture",
    thumbnail: "/gallery/thumb-page-04.webp",
    image: "/gallery/preview-page-04.webp",
    caption: "Classical Royal Architecture & Archway",
    category: "Facade"
  },
  {
    id: "moment-3",
    page: 5,
    title: "Grand Entrance Foyer & Elephant Murals",
    thumbnail: "/gallery/thumb-page-05.webp",
    image: "/gallery/preview-page-05.webp",
    caption: "Traditional Golden Relief Carvings",
    category: "Lobby"
  },
  {
    id: "moment-4",
    page: 6,
    title: "Welcome Lobby & Lord Ganesha Glass Portal",
    thumbnail: "/gallery/thumb-page-06.webp",
    image: "/gallery/preview-page-06.webp",
    caption: "Auspicious Entrance & Management Office",
    category: "Lobby"
  },
  {
    id: "moment-5",
    page: 10,
    title: "Handcrafted Royal Peacock Wall Mural",
    thumbnail: "/gallery/thumb-page-10.webp",
    image: "/gallery/preview-page-10.webp",
    caption: "Artistic Lotus & Royal Peacock Backdrop",
    category: "Interior"
  },
  {
    id: "moment-6",
    page: 11,
    title: "Grand Marble Stairway & Chandelier",
    thumbnail: "/gallery/thumb-page-11.webp",
    image: "/gallery/preview-page-11.webp",
    caption: "Illuminated Golden Railings & Hall Passage",
    category: "Interior"
  },
  {
    id: "moment-7",
    page: 20,
    title: "Air-Conditioned Grand Dining Hall",
    thumbnail: "/gallery/thumb-page-20.webp",
    image: "/gallery/preview-page-20.webp",
    caption: "Spacious 200+ Dining Capacity",
    category: "Dining"
  },
  {
    id: "moment-8",
    page: 29,
    title: "Executive AC Guest Suite",
    thumbnail: "/gallery/thumb-page-29.webp",
    image: "/gallery/preview-page-29.webp",
    caption: "Twin Beds & Modern Air-Conditioned Comfort",
    category: "Rooms"
  },
  {
    id: "moment-9",
    page: 33,
    title: "Luxury AC Bride & Groom Suite",
    thumbnail: "/gallery/thumb-page-33.webp",
    image: "/gallery/preview-page-33.webp",
    caption: "Premium Suite with Dressing Area & Wardrobe",
    category: "Rooms"
  }
];

export const FAQS = [
  {
    q: "What is the guest seating and dining capacity?",
    a: "Varathambal Chockalingam Kalyana Mahal comfortably accommodates 600+ seated guests (up to 1500+ floating attendees) in the main air-conditioned hall, along with an expansive dedicated dining hall featuring 200+ dining seating capacity."
  },
  {
    q: "Is there generator power backup available?",
    a: "Yes, 100% heavy-duty generator (DG) power backup is available, ensuring uninterrupted power for all lighting, centralized air conditioning, sound systems, and lifts."
  },
  {
    q: "Is the venue wheelchair accessible?",
    a: "Yes, Varathambal Chockalingam Kalyana Mahal is fully wheelchair friendly with dedicated entrance ramps, barrier-free access, and passenger elevators to reach all floors comfortably."
  },
  {
    q: "Are rooms provided for the bride, groom, and family?",
    a: "Yes, 13 well-maintained air-conditioned rooms are available, including dedicated suites for the bride and groom."
  },
  {
    q: "Is there vehicle parking and valet service?",
    a: "Yes, car parking with valet driver assistance is available, along with designated parking space for two-wheelers."
  },
  {
    q: "Is the entire mahal air-conditioned?",
    a: "Yes, 100% of the facility is air-conditioned, covering the party hall, dining hall, rooms, common areas, and passages."
  },
  {
    q: "Is there a specialized Brahmin package?",
    a: "Yes, we offer a specialized 2½ Days Brahmin wedding package tailored to all traditional ritual requirements."
  },
  {
    q: "Is elevator/lift facility available?",
    a: "Yes, both dedicated food/service hydraulic lift and passenger lift are available for seamless access to all floors."
  }
];
