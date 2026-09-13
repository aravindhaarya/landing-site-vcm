import { Hall, GalleryItem, EventPackage, Amenity, Testimonial } from '../types';

export const VENUE_INFO = {
  name: "Banquet Wedding Hall",
  subname: "The Grand Éclat Luxury Venue",
  phone: "+1 (800) 582-2872",
  directLine: "+1 (415) 792-9900",
  email: "banquetwedding@example.com",
  announcement: "“New Premium Decor Themes Just Launched.”",
  address: "880 Grand Éclat Promenade, Beverly Hills / Bay Area",
  valetAddress: "Porte-Cochère Valet Gate 1, West Wing",
  hours: "Tours Daily: 9:00 AM – 8:00 PM | Events: Until 2:00 AM",
  rating: 4.98,
  reviewsCount: 420,
  estYear: 2012,
  totalCapacity: 1600,
  sqFtTotal: 34000
};

export const HALLS: Hall[] = [
  {
    id: "imperial-ballroom",
    name: "The Grand Imperial Ballroom",
    tagline: "Our majestic flagship hall featuring 24ft hand-cut Swarovski crystal chandeliers",
    capacityMax: 850,
    capacityMin: 200,
    sqFt: 12500,
    ceilingHeight: "24 ft (7.3m)",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Designed for awe-inspiring celebrations, The Grand Imperial Ballroom blends classical architectural majesty with state-of-the-art intelligent lighting and acoustic engineering. Features a hydraulic performance stage, dual motorized LED backdrops, and an adjacent VIP mezzanine.",
    baseRentalWeekend: 8500,
    baseRentalWeekday: 5200,
    features: [
      "8 Custom Swarovski Crystal Chandeliers",
      "40ft Hydraulic Center Stage & Runway Setup",
      "L-Acoustics Concert Grade Audio System",
      "Private Dual Bridal/VIP Dressing Suites with En-Suite Baths",
      "Motorized 4K Seamless Video Wall (28 x 12 ft)",
      "Dedicated Cocktail Foyer with Marble Bar"
    ],
    idealFor: ["Royal Wedding Receptions", "Gala Balls", "Corporate Award Nights", "High-Fashion Runways"],
    layoutCapacities: {
      banquet: 650,
      theater: 850,
      cocktail: 950,
      classroom: 480
    }
  },
  {
    id: "crystal-glasshouse",
    name: "The Crystal Conservatory & Glasshouse",
    tagline: "A sun-drenched botanical sanctuary surrounded by 360° architectural glass",
    capacityMax: 350,
    capacityMin: 80,
    sqFt: 5800,
    ceilingHeight: "20 ft vaulted glass",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Framed by steel arches and climate-controlled panoramic glass, The Crystal Conservatory delivers unforgettable indoor-outdoor ambiance. By day, natural light floods the botanical garden; by night, dynamic starlight projection turns the vault into an intimate celestial pavilion.",
    baseRentalWeekend: 5800,
    baseRentalWeekday: 3600,
    features: [
      "Climate-Controlled Glass Ceiling & Wall Paneling",
      "Curated Tropical & Mediterranean Living Green Walls",
      "Suspended Fairy Light & Edison Bulb Canopy",
      "White Italian Carrara Marble Flooring",
      "Acoustically Treated for Live Acoustic Jazz & String Quartets",
      "Connected Private Outdoor Rose Garden Path"
    ],
    idealFor: ["Intimate Weddings", "Bridal Showers", "Milestone Anniversaries", "VIP Cocktail Soirees"],
    layoutCapacities: {
      banquet: 280,
      theater: 350,
      cocktail: 400,
      classroom: 180
    }
  },
  {
    id: "sovereign-terrace",
    name: "The Sovereign Garden Terrace",
    tagline: "Romantic open-air terrace with grand illuminated fountains and fire tables",
    capacityMax: 450,
    capacityMin: 100,
    sqFt: 7200,
    ceilingHeight: "Open Sky (Weather Canopy Available)",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Perched over manicured estate grounds, The Sovereign Terrace offers breathtaking golden-hour sunset panoramas. Complete with stone balustrades, gas fire lounge clusters, and an artisan circular cocktail bar.",
    baseRentalWeekend: 4900,
    baseRentalWeekday: 3100,
    features: [
      "360° Circular Onyx Wet Bar with LED Backlight",
      "Dual Gas Fire Pit Lounges with Velvet Daybeds",
      "Automated Retractable Pergola with Rain Sensors",
      "Fountain Show Lighting Synced to Event Music",
      "Outdoor Heating Torches & Wind Protection Screens",
      "Direct Bridge Access to The Grand Imperial Ballroom"
    ],
    idealFor: ["Sunset Wedding Ceremonies", "Welcome Cocktail Receptions", "Summer Galas", "Corporate Mixers"],
    layoutCapacities: {
      banquet: 320,
      theater: 450,
      cocktail: 550,
      classroom: 200
    }
  },
  {
    id: "windsor-salon",
    name: "The Royal Windsor Salon",
    tagline: "Rich mahogany millwork, velvet drapery, and vintage speakeasy sophistication",
    capacityMax: 150,
    capacityMin: 30,
    sqFt: 2800,
    ceilingHeight: "16 ft coffered ceiling",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1600&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An intimate enclave of refined luxury, featuring hand-carved millwork, coffered gold-leaf ceilings, and a built-in whiskey and champagne salon. Ideal for VIP dinners, executive retreats, rehearsal dinners, and micro-weddings.",
    baseRentalWeekend: 3200,
    baseRentalWeekday: 1950,
    features: [
      "Original 1920s Hand-Carved Mahogany Bar",
      "Antique Brass Chandelier & Dimmer Ambiance",
      "Private Cigar & Digestif Veranda",
      "Integrated 85-inch Stealth Presentation Display",
      "Bespoke Soundproof Paneling for Private Speeches",
      "Custom Plated Service from Executive Chef"
    ],
    idealFor: ["Rehearsal Dinners", "Executive Summits", "Micro-Weddings", "Private Birthday Galas"],
    layoutCapacities: {
      banquet: 120,
      theater: 150,
      cocktail: 180,
      classroom: 75
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Golden Hour Royal Wedding",
    category: "weddings",
    hallId: "imperial-ballroom",
    hallName: "The Grand Imperial Ballroom",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80",
    caption: "Spectacular 500-guest wedding reception with cascading wisteria floral chandeliers and mirror aisle.",
    tags: ["Royal Wedding", "Swarovski Chandeliers", "Luxury Florals", "Mirror Tables"],
    featured: true
  },
  {
    id: "gal-2",
    title: "Botanical Glasshouse Ceremony",
    category: "weddings",
    hallId: "crystal-glasshouse",
    hallName: "The Crystal Conservatory",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    caption: "A luminous daylight vow exchange surrounded by tropical foliage and white rose arches.",
    tags: ["Daylight Ceremony", "Greenhouse", "Romantic Roses"],
    featured: true
  },
  {
    id: "gal-3",
    title: "Black-Tie Charity Gala",
    category: "galas",
    hallId: "imperial-ballroom",
    hallName: "The Grand Imperial Ballroom",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80",
    caption: "Annual Symphony Foundation Gala with ambient sapphire uplighting and 12-piece live orchestra.",
    tags: ["Charity Ball", "Orchestra", "Live Auction", "VIP Dining"],
    featured: true
  },
  {
    id: "gal-4",
    title: "Sunset Champagne Terrace Soiree",
    category: "galas",
    hallId: "sovereign-terrace",
    hallName: "The Sovereign Garden Terrace",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1400&q=80",
    caption: "Golden hour welcome drinks featuring our 360-degree backlit bar and illuminated fountains.",
    tags: ["Sunset Cocktails", "Alfresco", "Fire Lounges"],
    featured: false
  },
  {
    id: "gal-5",
    title: "Michelin-Inspired Plated Course",
    category: "dining",
    hallId: "windsor-salon",
    hallName: "The Royal Windsor Salon",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80",
    caption: "Pan-seared Chilean sea bass with saffron emulsion and edible gold leaf by Chef Laurent.",
    tags: ["Haute Cuisine", "Plated Dinner", "Sommelier Pairing"],
    featured: true
  },
  {
    id: "gal-6",
    title: "Suspended Floral Ceiling Architecture",
    category: "decor",
    hallId: "imperial-ballroom",
    hallName: "The Grand Imperial Ballroom",
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=80",
    caption: "Over 8,000 preserved orchids and white hydrangeas suspended over the marble dance floor.",
    tags: ["Floral Ceiling", "Stage Decor", "White & Gold"],
    featured: false
  },
  {
    id: "gal-7",
    title: "Interactive Laser & Moving Head Lighting",
    category: "lighting",
    hallId: "imperial-ballroom",
    hallName: "The Grand Imperial Ballroom",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=80",
    caption: "DMX-controlled ambient mood scenes transitioning from warm candlelight to high-energy dance gala.",
    tags: ["DMX Lighting", "Atmospheric Haze", "After Party"],
    featured: false
  },
  {
    id: "gal-8",
    title: "Crystal Cut Champagne Tower",
    category: "dining",
    hallId: "crystal-glasshouse",
    hallName: "The Crystal Conservatory",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80",
    caption: "7-Tier vintage coupe champagne tower pour for the grand midnight toast.",
    tags: ["Champagne Tower", "Grand Toast", "Celebration"],
    featured: false
  },
  {
    id: "gal-9",
    title: "Velvet & Gold Rehearsal Table Setting",
    category: "decor",
    hallId: "windsor-salon",
    hallName: "The Royal Windsor Salon",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
    caption: "Intimate banquet styling with French cut glassware, brushed brass cutlery, and velvet napkins.",
    tags: ["Table Scape", "Custom Linens", "Candlelit"],
    featured: false
  },
  {
    id: "gal-10",
    title: "Starlight Dance Floor Reveal",
    category: "lighting",
    hallId: "imperial-ballroom",
    hallName: "The Grand Imperial Ballroom",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    caption: "Seamless pure white infinity dance floor with customized monogram light projection.",
    tags: ["Dance Floor", "Custom Monogram", "First Dance"],
    featured: false
  },
  {
    id: "gal-11",
    title: "Artisanal Dessert & Patisserie Station",
    category: "dining",
    hallId: "sovereign-terrace",
    hallName: "The Sovereign Garden Terrace",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80",
    caption: "Handcrafted macarons, gold-leaf tartlets, and flaming crepe Suzette live culinary station.",
    tags: ["Dessert Lounge", "Live Station", "French Patisserie"],
    featured: false
  },
  {
    id: "gal-12",
    title: "Twilight Pavilion Ceremony",
    category: "weddings",
    hallId: "sovereign-terrace",
    hallName: "The Sovereign Garden Terrace",
    image: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&w=1400&q=80",
    caption: "Dusk wedding ceremony illuminated by hundreds of floating glass hurricanes and floral pillars.",
    tags: ["Twilight Vows", "Candlelight", "Garden Arch"],
    featured: false
  }
];

export const PACKAGES: EventPackage[] = [
  {
    id: "royal-palace-wedding",
    name: "The Royal Palace Wedding Experience",
    badge: "Most Coveted",
    pricePerGuest: 165,
    minGuests: 150,
    tagline: "An all-inclusive fairytale celebration with white-glove hospitality",
    description: "Our signature prestige package designed to handle every luxurious nuance of your wedding day, from morning suite prep to late-night midnight snack revelry.",
    inclusions: [
      "Exclusive 10-hour venue access including setup & strike",
      "5-Course Plated Chef's Tasting Menu or Grand Buffet",
      "4-Hour Premium Open Bar with signature his & hers cocktails",
      "Full Bridal & Groom Concierge Suites with champagne & charcuterie",
      "Custom 24ft Dance Floor with Monogram LED projection",
      "White Chiavari chairs, floor-length silk linens & gold chargers",
      "Dedicated Senior Event Director & Banquet Captain on-site",
      "Complimentary Menu Tasting for up to 4 guests"
    ],
    popularFor: "Full-scale Luxury Weddings (150 - 750 guests)",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "presidential-gala",
    name: "The Sovereign Gala & Corporate Summit",
    badge: "High-Impact",
    pricePerGuest: 135,
    minGuests: 100,
    tagline: "Flawless technical precision and high-prestige hospitality for leaders",
    description: "Built for annual galas, global product reveals, charitable auctions, and executive summits requiring broadcast-grade AV and seamless dining coordination.",
    inclusions: [
      "8-hour venue access with full technical rehearsal window",
      "Gourmet Dual-Entrée Plated Dinner & Wine Service tableside",
      "Full Concert Audio, Wireless Mic Array & 4K LED Screen playback",
      "High-Speed Redundant Wi-Fi & Live-Streaming Stage hookups",
      "Stage lighting presets for keynote addresses and award ceremonies",
      "VIP Reception Lounge & Private Green Room for dignitaries",
      "Complimentary Valet Parking for all keynote speakers and VIPs"
    ],
    popularFor: "Galas, Award Shows, Summits (100 - 850 guests)",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "celestial-cocktail",
    name: "The Starlight Cocktail & Soiree",
    badge: "Chic & Modern",
    pricePerGuest: 98,
    minGuests: 60,
    tagline: "Lively passed canapés, craft mixology, and high-energy atmosphere",
    description: "A dynamic, high-spirited package featuring roving chef stations, continuous luxury hors d'oeuvres, and an electric atmosphere on the terrace or glasshouse.",
    inclusions: [
      "6-hour venue rental with mood lighting and lounge configuration",
      "10 varieties of continuous passed hot and chilled artisanal canapés",
      "2 Live Interactive Action Stations (e.g. Oyster Bar & Carving Station)",
      "3-Hour Craft Cocktail & Wine Bar with artisan syrups and garnishes",
      "High-boy cocktail tables, velvet lounge vignettes & candle styling",
      "Resident DJ Sound & Lighting integration with wireless audio",
      "Champagne greeting toast upon guest arrival"
    ],
    popularFor: "Milestone Birthdays, Engagements, Anniversaries (60 - 400 guests)",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80"
  }
];

export const CATERING_TIERS = {
  none: {
    name: "Venue Only (Outside Caterer)",
    pricePerGuest: 0,
    description: "Approved luxury outside caterers welcome with professional kitchen prep fee ($850 flat)."
  },
  silver: {
    name: "Silver Crown Banquet",
    pricePerGuest: 85,
    description: "3-course gourmet dining, artisan bread basket, dual sides, dessert trio, iced tea and coffee service."
  },
  gold: {
    name: "Gold Royal Prestige",
    pricePerGuest: 125,
    description: "4-course plated banquet, 4 passed hors d'oeuvres during cocktail hour, tableside wine service."
  },
  diamond: {
    name: "Diamond Imperial Michelin-Inspired",
    pricePerGuest: 175,
    description: "5-course bespoke chef tasting, raw seafood bar, late night truffle flatbreads, top-shelf pairing."
  }
};

export const ADDONS_LIST = [
  { id: "valet-service", name: "Executive Valet Parking (White-Glove Staff)", price: 1200, desc: "Dedicated team of 6 valet attendants and coordinated vehicle management" },
  { id: "led-wall-av", name: "Broadcast LED Video Wall & Production Sound", price: 2400, desc: "28x12ft 4K backdrop, L-Acoustics audio, dedicated sound engineer on-site" },
  { id: "chandelier-decor", name: "Floral Suspensions & Sweetheart Backdrop", price: 1850, desc: "Bespoke fresh floral installation by master in-house floral designer" },
  { id: "champagne-tower", name: "7-Tier Crystal Coupe Champagne Tower", price: 650, desc: "Includes vintage glassware setup, sparkler presentation, and assisted pour" },
  { id: "fog-sparkler", name: "Cold-Spark Pyro & Low-Lying Cloud Fog Machine", price: 950, desc: "Indoor-safe cold sparklers and dense fog for dramatic grand entrance or first dance" },
  { id: "drone-recap", name: "Aerial Drone & 4K Cinema Teaser Package", price: 1600, desc: "Licensed drone pilot capturing exterior estate shots and 3-min highlight reel" }
];

export const AMENITIES: Amenity[] = [
  {
    id: "culinary",
    title: "Five-Star Culinary Brigade",
    description: "Led by Michelin-alumni executive chefs creating customized dietary, halal, kosher-style, and fusion menus.",
    iconName: "UtensilsCrossed",
    badge: "Award Winning"
  },
  {
    id: "suites",
    title: "Opulent Dressing Suites",
    description: "Two independent bridal & VIP dressing sanctuaries featuring illuminated vanities, private wet bars, and rainfall showers.",
    iconName: "Sparkles",
    badge: "Complimentary"
  },
  {
    id: "av-tech",
    title: "Concert Acoustic & 4K Tech",
    description: "Fully integrated intelligent moving lights, motorized 4K video walls, line-array sound, and zero dead-zones.",
    iconName: "Volume2",
    badge: "State-of-the-Art"
  },
  {
    id: "valet",
    title: "Grand Porte-Cochère & Valet",
    description: "Covered marble portico protecting guests from all elements with capacity for 500+ vehicles and limousine turns.",
    iconName: "Car",
    badge: "500+ Spaces"
  },
  {
    id: "coordination",
    title: "White-Glove Event Concierge",
    description: "From custom floorplan 3D rendering to timeline day-of execution, our seasoned captains ensure zero friction.",
    iconName: "Clock",
    badge: "Dedicated Team"
  },
  {
    id: "curfew",
    title: "Late Night Celebrations",
    description: "Unlike residential venues, our soundproof estate hosts unforgettable parties until 2:00 AM with after-party lounges.",
    iconName: "Moon",
    badge: "Until 2:00 AM"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Eleanor & Marcus Vance",
    role: "Wedding Couple",
    event: "Wedding of 450 Guests",
    quote: "Booking the Grand Imperial Ballroom was the single greatest decision of our wedding planning. The chandeliers took our guests' breath away, the food was hot and sublime, and the staff treated us like royalty from day one.",
    rating: 5,
    date: "November 2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    hall: "The Grand Imperial Ballroom"
  },
  {
    id: "test-2",
    name: "Dr. Alistair Sterling",
    role: "VP of Global Philanthropy",
    event: "Annual Medical Gala (600 Guests)",
    quote: "Our donor gala raised record funds this year. The AV team integrated our keynote slides and live auction video effortlessly on the massive LED wall. Outstanding acoustic clarity throughout the hall.",
    rating: 5,
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    hall: "The Grand Imperial Ballroom"
  },
  {
    id: "test-3",
    name: "Sophia Chen & Liam Ortiz",
    role: "Wedding Couple",
    event: "Glasshouse Ceremony & Terrace Cocktail",
    quote: "The indoor-outdoor transition between The Crystal Conservatory and the Sovereign Terrace was pure magic. At twilight with the gas fire pits and fountain lights, every photo looked like a luxury editorial.",
    rating: 5,
    date: "December 2025",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    hall: "The Crystal Conservatory"
  }
];

export const FAQS = [
  {
    q: "How does the online booking reservation process work?",
    a: "You can select your preferred hall, event date, guest count, and catering configuration directly through our Online Booking System. Once submitted, your date is placed on an immediate provisional 48-hour hold. You will receive an instant Booking Reference ID, printable confirmation voucher, and a dedicated event director will reach out to finalize your private tasting and formal contract."
  },
  {
    q: "Can we bring our own licensed outside caterer or ethnic cuisine specialists?",
    a: "Yes! While our in-house executive brigade is world-class, we warmly welcome certified outside specialty caterers (for South Asian, Kosher, Middle Eastern, East Asian, and other cultural culinary celebrations). A standard commercial prep kitchen fee ($850) applies to cover kitchen facilities and cleanup."
  },
  {
    q: "What is your payment and deposit schedule?",
    a: "To formally secure your event date after your 48-hour provisional booking, a 25% initial date deposit is required. The second installment of 25% is due 6 months prior, and the remaining balance plus guest count adjustments is due 30 days before your event."
  },
  {
    q: "Are tables, chairs, basic linens, and sound equipment included in the rental?",
    a: "Yes. All hall bookings include our luxury banquet round and long tables, high-grade Chiavari or modern velvet chairs, standard white or ivory linens, napkins, tableware, ambient architectural lighting, and wireless microphones."
  },
  {
    q: "Can we schedule a private in-person walkthrough before committing?",
    a: "Absolutely. Walkthrough appointments are available daily between 9:00 AM and 8:00 PM. You can click 'Schedule Private Tour' or note it in the booking wizard notes to coordinate an exclusive champagne-escorted walkthrough."
  }
];
