# Scroll Stabilization & 120FPS Performance Optimization

Eliminate page-wide scroll jitter and micro-stuttering across Varathambal Chockalingam Kalyana Mahal's landing page by fixing layout reflows, removing compositor thrashing, and optimizing animation performance while preserving global smooth scrolling.

> [!IMPORTANT]
> Based on your answers:
> - **Scroll Issue Location**: Entire page during normal scrolling.
> - **Motion Level**: Optimize animations and eliminate layout shifts for silky-smooth 120fps performance.
> - **Scroll Physics**: Preserve global smooth scrolling across the entire page.

---

## 1. Overview & Core Concept

### What It Does
This optimization overhaul addresses the root architectural causes of scroll jitter and stuttering across the Varathambal Chockalingam Kalyana Mahal website. It stabilizes the layout geometry, eliminates mid-scroll React state re-renders, optimizes compositor layers, and streamlines continuous hero background effects so the entire page glides with zero frame drops at 60fps and 120fps refresh rates.

### Target Audience & Persona
Couples, families, and event planners browsing the banquet hall features on mobile devices, laptops, and desktop computers with high-refresh displays.

### Key Value Delivered
- Silky-smooth, jitter-free scrolling from the top hero down to the contact footer.
- Zero layout jumping or content reflows when the sticky navigation bar activates.
- Preserved traditional Tamil festive ambiance (Kolams, Diyas, and celebratory aesthetics) with lightweight, GPU-optimized rendering.
- Seamless booking form access and quick WhatsApp contact points.

---

## 2. Technical Architecture & Component Mapping

```
┌─────────────────────────────────────────────────────────────┐
│                       Browser Viewport                      │
│            Global Smooth Scrolling (CSS + Compositor)       │
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
  ┌─────────────────────────┐     ┌─────────────────────────┐
  │   Sticky Navigation     │     │      Main Content       │
  │   - Fixed Height (No    │     │   - Stable DOM Geometry │
  │     layout reflows)     │     │   - Zero mid-scroll     │
  │   - Passive listener    │     │     state re-renders    │
  │   - Backdrop opacity    │     │   - Clean compositor    │
  │     transition only     │     │     layering            │
  └─────────────────────────┘     └────────────┬────────────┘
                                               │
      ┌────────────────────┬───────────────────┼────────────────────┐
      ▼                    ▼                   ▼                    ▼
┌─────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│    Hero     │    │  About Us &  │    │  Amenities   │    │  Gallery &   │
│ Background  │    │  Facilities  │    │  & Category  │    │   Footers    │
│ Lightened   │    │  Viewport-   │    │    Filter    │    │ Hardware-    │
│ Petals &    │    │  stable      │    │  Stable grid │    │ accelerated  │
│ SVGs        │    │  reveals     │    │  dimensions  │    │ dividers     │
└─────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

---

## 3. Key Changes & Implementation Strategy

### A. Fix Sticky Header Layout Reflows (`src/components/Navbar.tsx`)
- **Problem**: When scrolling past 30px, the header dynamically changes its vertical padding (`py-3.5` to `py-2.5`). Because the element is in the document flow as `sticky top-0`, shrinking its height instantly shifts the vertical position of every section below it by several pixels, causing severe scroll jumping and jitter.
- **Solution**: Keep the navbar height and padding completely fixed and constant (`h-16` / `py-3`). Only transition GPU-composited visual properties (`box-shadow`, `border-color`, and background transparency `bg-white/95` with `backdrop-blur-md`).
- **Scroll Listener**: Add `{ passive: true }` to the scroll event listener and guard state updates so `setIsScrolled` only triggers when the boolean state actually transitions.

### B. Eliminate Compositor Thrashing & Mid-Scroll Re-renders (`src/components/FadeInUp.tsx`)
- **Problem**: `FadeInUp` attaches an `onAnimationComplete` handler that invokes `setHasFinished(true)`. During active scrolling, every section entering the viewport triggers a React state re-render. Additionally, toggling `transform: 'none'` and mutating `will-change` from `'opacity, transform'` to `'auto'` on an animated `motion.div` forces the browser compositor to destroy its GPU layers and repaint synchronously on the main thread.
- **Solution**:
  - Remove mid-scroll React state mutations (`setHasFinished`) and manual inline transform toggling.
  - Let Framer Motion natively manage the transform lifecycle once (`once: true`) with pure compositor properties.
  - Consolidate to lightweight, hardware-accelerated CSS or standard Framer Motion primitives that never force synchronous layer destruction.

### C. Remove `will-change` Layer Explosion
- **Problem**: Over 20 static elements across `Hero.tsx`, `AboutStory.tsx`, `Amenities.tsx`, and `SectionDivider.tsx` specify hardcoded `will-change-transform`. Creating dozens of permanent GPU compositor layers exceeds VRAM budgets and causes composite rasterization stalls during scroll passes.
- **Solution**: Strip static `will-change-transform` declarations from non-animating cards, SVG wedges, and text wrappers. Let the browser naturally manage composition layers.

### D. Optimize Hero Festive Background Effects (`src/components/FestiveHeroBackground.tsx`)
- **Problem**: 12 continuous multi-axis 3D rotating flower petals, 8 pulsating SVG stars with individual Framer Motion timelines, and two 500px rotating SVGs run simultaneously, competing with scroll events on the main and compositor threads.
- **Solution**:
  - Consolidate petal animations using pure CSS keyframes with `transform: translate3d(...)` (running 100% off the main thread on the compositor).
  - Streamline the rotating Kolam mandalas and reduce continuous re-renders.
  - Simplify heavy stacked `blur-3xl` / `blur-2xl` ambient filters into optimized radial gradients for instant paint speeds.

### E. Unify Motion Animation Library Imports
- **Problem**: Inconsistent imports between `framer-motion` and `motion/react` across components duplicate animation runtime instances and intersection observers.
- **Solution**: Standardize all motion components to import from `framer-motion` consistently.

### F. Preserve Global Smooth Scroll Configuration (`src/index.css`)
- **Verification**: Ensure `html { scroll-behavior: smooth; }` is retained as requested, while pairing it with `overscroll-behavior-y: none` or clean container boundaries to prevent rubber-band stuttering.

---

## 4. Verification & Testing Checklist

- [ ] Smooth scrolling verified across the full page (Hero, About Us, Facilities, Amenities, Moments, FAQ, Footer).
- [ ] No layout shift when scrolling past the top 30px navbar threshold.
- [ ] No frame drops or stutter when sections enter the viewport.
- [ ] Festive background elements (Kolams, Diyas, Petals) remain visually opulent and smooth.
- [ ] Application compiles with 0 TypeScript and build errors (`compile_applet`).
