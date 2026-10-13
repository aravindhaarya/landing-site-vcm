# Venue Seating Capacity Update (1000+ Seated & 400+ Dining)

Update all venue capacity specifications, promotional highlights, facility cards, FAQs, booking form dropdowns, and SEO metadata to reflect **1000+ Seated (1500+ Floating)** in the main air-conditioned hall and **400+ Dining Seating**.

> [!IMPORTANT]
> **User Clarifications Confirmed**:
> - **Seating Highlighting**: "1000+ Seated (1500+ Floating) and 400+ Dining"
> - **Booking Form Tiers**: "300 to 500, 500 to 800, 800 to 1000, 1000+ guests"

---

## 1. Overview & Objective

This update aligns the landing page copy, statistics, and booking flows with the venue's grand scale:
- **Main Air-Conditioned Hall**: Updated from 450 to **1000+ Seating** (with 1500+ floating guest capacity).
- **Dedicated Dining Hall**: Updated from 150 to **400+ Seating** capacity.
- **Inquiry Form Options**: Updated guest count selections to accommodate grand weddings and events (300 to 500, 500 to 800, 800 to 1000, and 1000+ guests).
- **SEO & Schema Metadata**: Updated structured data (`maximumAttendeeCapacity: 1500`) and meta descriptions so search engines and social cards display the accurate venue scale.

---

## 2. Component & Content Mapping

```
┌────────────────────────────────────────────────────────┐
│               src/data/banquetData.ts                  │
│  Central single source of truth for venue statistics:  │
│  - VENUE_INFO (capacity, diningCapacity, descriptions) │
│  - FACILITIES (1000+ Seating, 400+ Dining)             │
│  - FAQS (Capacity & seating answers)                   │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
┌─────────────┐    ┌──────────────┐    ┌──────────────────┐
│  Hero.tsx   │    │AboutStory.tsx│    │ BookingModal.tsx │
│  - Highlights    │- Showcase badge   │ - Guest count    │
│    1000+ Hall   │  1000+ / 400+    │   tier dropdown  │
│    400+ Dining  │- Facility cards   │ - Default query  │
└──────┬──────┘    └──────┬───────┘    └─────────┬────────┘
       │                  │                      │
       └──────────────────┼──────────────────────┘
                          ▼
               ┌───────────────────────┐
               │ Footer.tsx & HTML SEO │
               │ - Top booking banner  │
               │ - Meta & JSON-LD spec │
               └───────────────────────┘
```

---

## 3. Detailed File Modifications

### A. Central Banquet Data (`src/data/banquetData.ts`)
- **`VENUE_INFO`**:
  - Update `capacity`: `"1000+ Seating (1500+ Floating)"`.
  - Update `diningCapacity`: `"400+ Dining Seating"`.
  - Update `heroDescription`: `"Premier air-conditioned marriage hall in Madipakkam accommodating 1000+ seated guests (1500+ floating) with 400+ dining seating, 8 AC rooms, and modern amenities."`
  - Update `aboutText`: Adjust narrative to describe the grand capacity accommodating 1000+ seated guests, 1500+ floating attendees, and a dedicated 400+ seat dining hall.
- **`FACILITIES`**:
  - Update `f-seating`:
    - `title`: `"1000+ Seating Hall"`
    - `desc`: `"Grand air-conditioned hall with 1000+ seated capacity and 1500+ floating guests."`
  - Update `f-dining`:
    - `title`: `"400+ Dining Hall"`
    - `desc`: `"Expansive dedicated dining space comfortably seating 400+ guests at a time."`
- **`FAQS`**:
  - Update the capacity FAQ item answer: Confirm 1000+ seated capacity in the main hall (up to 1500+ floating guests) and 400+ dining hall seating.

### B. Hero Section (`src/components/Hero.tsx`)
- Update the quick statistics badge grid:
  - Feature 1: `"1000+ Seating"` | `"Main AC Hall (1500+ Floating)"`
  - Feature 2: `"400+ Dining"` | `"Dedicated Dining Seating"`
- Update the embedded quick inquiry form defaults:
  - Default guest count parameter updated from `"300 - 450"` to `"500 - 800"` (or user selectable).
- Update the bottom guarantee badge row to reflect 1000+ Seating / 400+ Dining.

### C. About Us & Facilities Section (`src/components/AboutStory.tsx`)
- In the left venue architecture showcase card:
  - Update the prominent capacity tag to `"1000+ Seated (1500+ Floating)"`.
  - Update dining stat highlight to `"400+ Dining"`.
- Ensure the dynamic facilities list pulls from updated `FACILITIES` with proper visual alignment.

### D. Booking Inquiry Modal (`src/components/BookingModal.tsx`)
- Update the guest count dropdown `<select>` options to match the user's selected choice:
  - `"300 to 500 Guests"`
  - `"500 to 800 Guests"`
  - `"800 to 1000 Guests"`
  - `"1000+ Guests"`
- Update WhatsApp message generation payload in `src/utils/whatsapp.ts` if needed to ensure smooth pre-filled message text.

### E. Footer Section (`src/components/Footer.tsx`)
- Update the top booking banner paragraph:
  - `"Accommodating 1000+ seated guests (1500+ floating) with 400+ dining seating, 8 AC rooms, and modern amenities in Madipakkam, Chennai."`
- Update the bottom copyright and venue summary note.

### F. HTML SEO & Structured Data (`index.html`)
- Update meta tags:
  - `<meta name="description">`: `"Varathambal Chockalingam Kalyana Mahal is a grand marriage and banquet hall in Madipakkam, Chennai. Perfect for weddings, receptions, and engagements with 1000+ guest seating (1500+ floating), 400+ dining seating, 8 AC rooms, and modern amenities."`
  - `<meta property="og:description">`: Mirror 1000+ seated / 400+ dining copy.
  - `<meta name="twitter:description">`: Mirror 1000+ seated / 400+ dining copy.
- Update Schema.org JSON-LD structured data:
  - `"maximumAttendeeCapacity": 1500`
  - `"amenityFeature"`: Update `"Dining Hall 400+ Capacity"` and `"Main Hall 1000+ Seating Capacity"`.

---

## 4. Verification & Testing

- [ ] Verify Hero feature cards display **1000+ Seating (1500+ Floating)** and **400+ Dining**.
- [ ] Verify Booking inquiry modal contains the new guest tiers (300 to 500, 500 to 800, 800 to 1000, 1000+).
- [ ] Verify About Story and Facilities cards reflect the updated capacities accurately.
- [ ] Verify FAQ accordion provides the updated 1000+ / 400+ answers.
- [ ] Verify Footer call-to-action banner text displays 1000+ / 400+.
- [ ] Verify `index.html` JSON-LD and meta descriptions are in sync.
- [ ] Verify build and TypeScript linting with `compile_applet`.
