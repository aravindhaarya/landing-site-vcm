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
    title: "600+ Main Hall Seating",
    iconImg: "https://lakshmihall.com/assets/laks-img/seating-capacity.webp",
    desc: "Grand air-conditioned main hall accommodating 600+ seated guests and 1,500+ floating attendees"
  },
  {
    id: "f-dining",
    title: "200+ Dining Hall Seating",
    iconImg: "https://lakshmihall.com/assets/laks-img/dining-table.webp",
    desc: "Dedicated traditional dining hall with spacious seating for over 200 guests per batch"
  },
  {
    id: "f-rooms",
    title: "13 AC Guest & Bridal Suites",
    iconImg: "https://lakshmihall.com/assets/laks-img/rooms.webp",
    desc: "13 fully equipped air-conditioned rooms including exclusive bride & groom dressing suites"
  },
  {
    id: "f-ac",
    title: "100% Centralized Air-Conditioning",
    iconImg: "https://lakshmihall.com/assets/laks-img/air-conditioner.webp",
    desc: "Full climate control covering the party hall, dining hall, suites, common areas, and passages"
  },
  {
    id: "f-lift",
    title: "Passenger & Hydraulic Lifts",
    iconImg: "https://lakshmihall.com/assets/laks-img/hydraulics-lift.webp",
    desc: "Dedicated passenger elevator plus separate food and goods hydraulic lift serving all floors"
  },
  {
    id: "f-generator",
    title: "100% DG Power Backup",
    iconImg: "https://lakshmihall.com/assets/laks-img/hours.webp",
    desc: "Heavy-duty generator ensuring uninterrupted power for hall lighting, AC, audio, and lifts"
  },
  {
    id: "f-parking",
    title: "Car, Bike & Valet Parking",
    iconImg: "https://lakshmihall.com/assets/laks-img/valet-drivers.webp",
    desc: "Dedicated parking zones for cars and two-wheelers supported by courteous valet drivers"
  },
  {
    id: "f-brahmin-package",
    title: "2½-Day Brahmin Package",
    iconImg: "https://lakshmihall.com/assets/laks-img/temple.webp",
    desc: "Tailored 2.5-day traditional ceremony arrangement supporting authentic Vedic rituals"
  }
];

export const AMENITIES: MahalAmenity[] = [
  {
    id: "a-conference",
    title: "Conference Room & Business Center",
    category: "hall",
    availability: "Available",
    iconImg: "https://lakshmihall.com/assets/laks-img/conference.webp",
    desc: "Dedicated meeting space equipped with a high-end audio system and large-screen projectors for corporate events and briefings"
  },
  {
    id: "a-kitchen",
    title: "Client-Accessible Kitchen Facility",
    category: "hall",
    availability: "Included",
    iconImg: "https://lakshmihall.com/assets/laks-img/kitchen.webp",
    desc: "Spacious, well-equipped kitchen infrastructure available for client and external caterer usage"
  },
  {
    id: "a-av",
    title: "Studio-Quality Audio & Visual Systems",
    category: "hall",
    availability: "Included",
    iconImg: "https://lakshmihall.com/assets/laks-img/visual.webp",
    desc: "State-of-the-art sound reinforcement, microphones, and visual equipment for clear speeches and ceremonies"
  },
  {
    id: "a-music",
    title: "Whole-Building Background Music",
    category: "comfort",
    availability: "Included",
    iconImg: "https://lakshmihall.com/assets/laks-img/building.webp",
    desc: "Soothing ambient music coverage extending smoothly across halls, corridors, and common lounges"
  },
  {
    id: "a-wifi",
    title: "Multi-Gigabit High-Speed Wi-Fi",
    category: "comfort",
    availability: "On Request",
    iconImg: "https://lakshmihall.com/assets/laks-img/gigabit.webp",
    desc: "High-speed fiber internet and venue-wide Wi-Fi ideal for livestreaming rituals and guest connectivity"
  },
  {
    id: "a-housekeeping",
    title: "24-Hour Dedicated Housekeeping",
    category: "comfort",
    availability: "24/7",
    iconImg: "https://lakshmihall.com/assets/laks-img/keeping.webp",
    desc: "Round-the-clock on-site housekeeping staff keeping halls, dining spaces, suites, and restrooms spotless"
  },
  {
    id: "a-catering",
    title: "Bespoke Catering Services",
    category: "services",
    availability: "On Request",
    iconImg: "https://lakshmihall.com/assets/laks-img/catering.webp",
    desc: "Traditional South Indian banana-leaf feasts and customizable vegetarian menus coordinated for your guest count"
  },
  {
    id: "a-decor",
    title: "Custom Staging & Floral Decoration",
    category: "services",
    availability: "Available",
    iconImg: "https://lakshmihall.com/assets/laks-img/digital.webp",
    desc: "Tailored mandapam staging, floral backdrops, and entrance decor crafted to match your celebration"
  },
  {
    id: "a-photo",
    title: "Photo & Video Coverage",
    category: "services",
    availability: "On Request",
    iconImg: "https://lakshmihall.com/assets/laks-img/video.webp",
    desc: "Experienced candid and traditional photography and videography teams available on request"
  },
  {
    id: "a-welcome",
    title: "Traditional Welcome Hostesses",
    category: "services",
    availability: "On Request",
    iconImg: "https://lakshmihall.com/assets/laks-img/girls.webp",
    desc: "Courteous welcome hostesses to greet and guide arriving guests with traditional warmth at the foyer"
  },
  {
    id: "a-wheelchair",
    title: "Wheelchair Accessible & Barrier-Free Ramps",
    category: "safety",
    availability: "Included",
    iconImg: "https://lakshmihall.com/assets/laks-img/comfortable.webp",
    desc: "Step-free entryways and gentle ramps ensuring comfortable movement for elders and guests with mobility needs"
  },
  {
    id: "a-cctv",
    title: "24/7 4K CCTV Site Surveillance",
    category: "safety",
    availability: "24/7",
    iconImg: "https://lakshmihall.com/assets/laks-img/hours.webp",
    desc: "Continuous high-definition camera monitoring across entrances, halls, passages, and parking areas"
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
