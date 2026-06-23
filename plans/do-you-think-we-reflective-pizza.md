# Plan: Client Marquee Strip

## Context

The Hero page has strong trust signals (stats bar, proof points) but nothing that answers "who specifically trusts you?" A scrolling client strip is a standard, high-credibility pattern on corporate compliance and professional services sites (Deloitte, EY, KPMG all use variants). Since Idatum cannot name clients by NDA, we use **industry sector names** — this is actually stronger for a compliance firm because it communicates breadth across verticals and doesn't feel invented.

## Placement

Insert a new section in `src/app/components/pages/Hero.tsx` **between the Trust Bar and the Service Grid** (after line ~284, before line ~286).

Flow after the change:
```
HERO (headline + CTAs + image)
────────────────────────────────
TRUST BAR  (Trusted Since 2012 | 500+ Orgs | 98% | 50+)
────────────────────────────────
CLIENT STRIP  ← new
"Trusted by organisations across India"
[Financial Services · BFSI · Healthcare · SaaS · ...]  ← scrolling left
────────────────────────────────
SERVICE GRID (6 domain cards)
```

## Visual Design

- **Background:** `#F8FAFC` (very subtle off-white, distinct from pure white service grid)
- **Border:** `1px solid #D1DCE8` top and bottom
- **Padding:** `18px 0` (compact — this is a strip, not a section)
- **Label:** `"Trusted by organisations across India"` — `fontSize: 11`, `fontWeight: 600`, `color: "#9BB5D4"`, `textTransform: "uppercase"`, `letterSpacing: "1px"`, left-aligned in a flex row with the scroller
- **Scroller:** overflow hidden container, content duplicated to create seamless infinite loop
- **Item style:** `fontSize: 13`, `color: "#4A6080"`, `fontWeight: 500` — plain text, no pills/badges (too informal)
- **Separator:** `·` character with `padding: "0 20px"`, `color: "#D1DCE8"`
- **Animation:** CSS `@keyframes scrollLeft` injected via a `<style>` tag inside the component. Duration: `35s linear infinite`. Pauses on hover (`animation-play-state: paused`).

## Sector content (14 items, duplicated for seamless loop)

```
Financial Services · BFSI · Healthcare · Technology & SaaS · 
Manufacturing · Professional Services · IT Services · 
Pharmaceuticals · Logistics & Supply Chain · Real Estate · 
Legal & Compliance · Education · Retail & E-Commerce · Government & PSU
```

## Implementation

```tsx
// Inside Hero.tsx, new section between trust bar and service grid:

<section style={{ background: "#F8FAFC", borderTop: "1px solid #D1DCE8", borderBottom: "1px solid #D1DCE8", padding: "18px 0", overflow: "hidden" }}>
  <style>{`
    @keyframes scrollLeft {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track { display: flex; width: max-content; animation: scrollLeft 35s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }
  `}</style>
  <div style={{ display: "flex", alignItems: "center", gap: 32, paddingLeft: 40 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1px", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>
      Trusted across
    </p>
    <div style={{ overflow: "hidden", flex: 1 }}>
      <div className="marquee-track">
        {/* Render items twice for seamless loop */}
        {[...sectors, ...sectors].map((sector, i) => (
          <span key={i} style={{ whiteSpace: "nowrap", padding: "0 4px" }}>
            <span style={{ color: "#4A6080", fontSize: 13, fontWeight: 500 }}>{sector}</span>
            <span style={{ color: "#D1DCE8", padding: "0 20px" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
```

The `sectors` array is defined at the top of the file (14 strings). The list renders twice inside `.marquee-track` — when the first copy scrolls fully out of view, the duplicate seamlessly takes over.

## File Modified

`src/app/components/pages/Hero.tsx` only.

---

## Verification
1. Strip appears between trust bar and service grid on the Hero page
2. Text scrolls left continuously at a comfortable reading pace
3. Hovering the strip pauses the animation
4. No layout shift — overflow hidden contains the content
5. Strip does not interfere with service grid or trust bar above/below

---

# Plan: Motion & Transitions

## Context

The site currently has zero CSS transitions — buttons and cards snap between states, pages hard-cut on navigation, and no scroll-entrance animations exist. The `motion` library (v12.23.24) is installed but completely unused. For a corporate compliance firm, the wrong animations would undermine trust; but no animation signals an unfinished prototype. This plan adds a narrow, purposeful set of micro-interactions.

## Guiding principle
Every animation must be **invisible when it works** — fast, subtle, purposeful. Nothing that draws attention to itself. No slides, no spring physics, no bounce, nothing over 200ms.

---

## Layer 1 — Hover smoothing (all interactive elements)

**What:** Add `transition: "all 0.15s ease"` to every button, card, and interactive element that currently uses `onMouseEnter/onMouseLeave` for visual state changes.

**Why:** Currently all hover states snap instantly. This makes the site feel like a prototype. A 150ms ease makes state changes feel intentional without being noticeable.

**Scope:** Apply consistently across all page components. The pattern is already used in a few places (AcademyIntro.tsx) but not enforced globally.

**Implementation:** This is an inline style addition to existing `onMouseEnter`/`onMouseLeave` handlers — no new libraries needed, no structural changes.

---

## Layer 2 — Page fade on navigation

**What:** Wrap each rendered page in a `motion.div` with a simple opacity fade.

**File:** `src/app/App.tsx`

**Implementation:**
```tsx
import { motion, AnimatePresence } from "motion/react";

// In renderPage(), wrap the return value:
<AnimatePresence mode="wait">
  <motion.div
    key={currentPage}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15, ease: "easeInOut" }}
    style={{ width: "100%" }}
  >
    {pageComponent}
  </motion.div>
</AnimatePresence>
```

`key={currentPage}` triggers a new animation cycle on every page change. Duration: 150ms. No translateY — just opacity. This keeps it feeling like a professional app, not a web-design demo.

---

## Layer 3 — Scroll-entrance on key sections (selective)

**What:** Sections that are below the fold animate in (`opacity: 0, y: 12` → `opacity: 1, y: 0`) as they enter the viewport. Use `motion`'s `whileInView` prop.

**Where to apply (only these, nowhere else):**
- Hero service grid cards (6 cards, stagger 0.05s between them)
- WhyIdatum differentiator cards (6 cards)
- WhyChooseQA reasons grid (4 cards)

**Implementation pattern:**
```tsx
import { motion } from "motion/react";

// Replace the outer <div> of each card with:
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
>
  {/* existing card content */}
</motion.div>
```

`viewport={{ once: true }}` — animates only on first scroll past, not on every scroll. `margin: "-60px"` — triggers slightly before fully in view for a natural feel.

**Why only these three sections:** They are the primary "scanning" sections where a visitor is forming a judgment. Other sections (timelines, forms, tables) don't benefit and would feel gratuitous.

---

## Files Modified

| File | Change |
|---|---|
| `src/app/App.tsx` | Add `AnimatePresence` + `motion.div` wrapper around page render |
| `src/app/components/pages/Hero.tsx` | Add `motion.div` + `whileInView` to service grid cards |
| `src/app/components/pages/WhyIdatum.tsx` | Add `motion.div` + `whileInView` to differentiator cards |
| `src/app/components/pages/WhyChooseQA.tsx` | Add `motion.div` + `whileInView` to reasons grid |

Hover smoothing (`transition: "all 0.15s ease"`) is added inline where `onMouseEnter/onMouseLeave` exists — no file list needed, it's a global polish pass.

---

## What is explicitly NOT done
- No page slide (translateX) — too playful for compliance
- No spring physics — too casual
- No staggered list reveals on every page — gratuitous
- No parallax — inappropriate for the brand
- No hover animations (only hover state transitions) — hover *play* would feel like a startup

---

## Safety Guarantees (confirmed against motion v12.23.24)

- `AnimatePresence`, `motion.div`, and `whileInView` all verified present and correctly exported from `motion/react` at the installed version
- Core routing state (`currentPage`, `navState`), all `navigate()` calls, form submissions, filter state, and every page component's internal logic are **completely untouched**
- Animations sit entirely in the render layer — they decide *how* content appears visually, never *what* or *when* state changes
- Every animated element has a trivial rollback: swap `motion.div` → `div`, remove the `AnimatePresence` wrapper

| Layer | Touches core logic? | Rollback | Risk |
|---|---|---|---|
| Hover smoothing | No | Delete one style property | None |
| Page fade | No | Remove `AnimatePresence` wrapper | Minimal |
| Scroll entrances | No | Swap `motion.div` → `div` | None |

## Verification
1. Navigate between pages — clean 150ms fade, no hard cut
2. All navigation, forms, filters still work identically
3. Scroll past Hero service grid — cards fade up with slight stagger, animate once only
4. Hover any button — state change eases, does not snap

---

# UX Audit: Multi-Persona Flow Review

## Methodology
Four personas were walked through the site end-to-end. Issues are grouped by severity and include the specific file, the problem observed, and a fix recommendation.

---

## 🔴 HIGH — Fix These First

### 1. BecomePartner form is a dead end at the most critical moment
**File:** `BecomePartner.tsx`
User fills out a full application (name, company, type, description), clicks "Apply to Partner" — and gets silently redirected to the Contact page. No confirmation. No reference number. No "we'll call you in 24 hours." This is the worst possible experience at the conversion moment.
**Fix:** Add a success state (already exists on Contact.tsx as a pattern — replicate it). Show: application received, expected response within 1 business day, what happens next.

### 2. Hero service grid is navigally inconsistent
**File:** `Hero.tsx`
POSH card navigates to `posh-detail` (a specific course). ISMS, SOC 2, ISO, ITGC cards navigate to `qa-intro` (a general page). Audit goes to `browse-courses`. Three different destination types from a single visual grid — a casual browser will be confused by the mismatch.
**Fix:** Standardise all 6 cards to navigate to either `training-tracks` (for POSH) and `qa-intro` (for the rest), or better: create a consistent pattern where each card leads to the most relevant intro/detail for that domain.

### 3. TrainingTracks doesn't pass filter state to BrowseAllCourses
**File:** `TrainingTracks.tsx` → `BrowseAllCourses.tsx`
User clicks "Browse POSH Courses" on the Training Tracks page. Expectation: sees only POSH courses. Reality: lands on Browse All Courses with "All Tracks" selected. No pre-filtering.
**Fix:** `navigate()` currently takes only a string page name. Pass a default track via a shared state or simple App-level prop (e.g. `navigate("browse-courses", { defaultTrack: "POSH" })`). BrowseAllCourses reads this on mount to set `activeTrack`.

### 4. Partner flow missing operational detail before the ask
**Files:** `PartnerIntro.tsx`, `WhyPartner.tsx`
A 30-person HR firm owner evaluating partnership will ask: Who owns the client relationship? What do I cover vs. Idatum? Is revenue share on gross or net? What if a client dispute arises? None of these are answered anywhere before the application form.
**Fix:** Add a concise FAQ section to `WhyPartner.tsx` (before the final CTA) covering: ownership, revenue share mechanics (with a worked ₹ example), support SLA, and what a pilot engagement looks like.

### 5. Hero headline too vague for cold visitors
**File:** `Hero.tsx`
"Your Partner in Compliance, Quality & Workplace Training" — a casual visitor who Googled "compliance training India" sees three abstract nouns. No anchoring to India, no clarification of what "compliance" means here.
**Fix:** Add a supporting line directly below the headline (before the sub-paragraph) that names the domains concretely: *"POSH · ISMS · SOC 2 · ISO · ITGC · Audit — for Indian organisations."* Small addition, large clarity gain.

---

## 🟡 MEDIUM — Clear Improvements

### 6. ChooseYourPath is an orphaned page
**File:** `App.tsx`, `Hero.tsx`
ChooseYourPath exists as a page but there is no link to it from the Hero. A visitor who doesn't know which path to take has no "help me choose" option.
**Fix:** Add a text link below the three CTA buttons on Hero: *"Not sure where to start? → Let us guide you"* → navigates to `choose`.

### 7. Bottom contextual nav strip appears without warning
**File:** `App.tsx`
The flow breadcrumb strip (e.g., "QA Flow: QA Overview | Partner vs Vendor | Timeline…") only appears after leaving Hero. First-time visitors hit it unexpectedly mid-session and can't tell if it's a bug or a feature.
**Fix:** Add a subtle label on the left side of the strip ("You're exploring:") and ensure it only renders on flow pages — never on Hero, ChooseYourPath, WhyIdatum, or Contact.

### 8. BrowseAllCourses: asymmetric UX for non-POSH courses
**File:** `BrowseAllCourses.tsx`
Only POSH courses show "View Course Details." All others show "Enquire About This Course" → Contact. An HR manager curious about adding Audit training after POSH hits a wall — they can't preview content.
**Fix:** Either add lightweight detail modals for at least one representative course per non-POSH track, or change the button label to "Request Course Details" to set the right expectation.

### 9. POSHCourseDetail only shows IC Member Certification — no related courses
**File:** `POSHCourseDetail.tsx`
The detail page surfaces the most advanced POSH course. An HR manager looking for employee awareness (2h, self-paced) doesn't see it. There's no "Also available" section to discover the other 5 POSH courses.
**Fix:** Add a "Other POSH Courses" row at the bottom of the page listing the other 5 courses with title, duration, and format — clicking any navigates back to `browse-courses` with POSH pre-filtered.

### 10. WhyIdatum differentiators are generic
**File:** `WhyIdatum.tsx`
All six differentiator cards use standard B2B language ("Partner, Not Vendor", "Audit-Ready, Always"). No specific evidence, no numbers.
**Fix:** Add one concrete proof point to each card. E.g., "Partner, Not Vendor: Average Idatum engagement lasts 3+ years." "Audit-Ready, Always: 96% of clients pass first-attempt certification."

### 11. Partner testimonials lack credibility depth
**File:** `WhyPartner.tsx`
Two anonymous quotes from "Managing Director, HR Advisory Firm, Pune" and "Partner, Management Consultancy, Bangalore." They are supportive but generic enough to read as invented.
**Fix:** Add at least one concrete data point per testimonial: "…3 clients referred in Q1, ₹X revenue generated." Or add a third-party verification note ("Available on request").

### 12. Footer copyright year is 2024
**File:** `Footer.tsx`
Static `© 2024 Idatum` — currently 2026.
**Fix:** Replace with `© {new Date().getFullYear()} Idatum`.

---

## 🟢 LOW — Polish Items

| # | File | Issue | Fix |
|---|------|-------|-----|
| 13 | `Hero.tsx` | Primary CTA "Partner with Us" is enterprise-first — wrong for casual browsers | Consider A/B: swap primary to "Explore Idatum QA" for organic/search traffic |
| 14 | `PartnerIntro.tsx` | "15–25% Revenue Share" shown without a worked ₹ example | Add: "e.g., on a ₹10L engagement, your share = ₹1.5–2.5L" |
| 15 | `ChooseYourPath.tsx` | Feature lists use jargon ("ISMS, SOC 2, ISO, ITGC framework implementation") — assume prior knowledge | Add one plain-English translation per bullet |
| 16 | `Footer.tsx` | No resources, blog, or engagement content | Add "Resources" column with 2–3 plain-English guide links |
| 17 | `HowWeTrain.tsx` | No POSH-specific delivery mention (e.g., monthly IC cohorts) | Add domain callout: "POSH IC Certification delivered monthly — next cohort: [month]" |
| 18 | `WhyChooseQA.tsx` | Testimonials are generic (CISO, VP Compliance) — no POSH/HR-specific proof | Add one HR-focused quote for Academy social proof |
| 19 | `PartnerIntro.tsx` | No pilot/trial engagement mentioned | Add: "New partners often begin with a single co-delivery before scaling" |

---

## Priority Summary

| Count | Severity | Action |
|-------|----------|--------|
| 5 | 🔴 High | Fix before sharing prototype with stakeholders |
| 7 | 🟡 Medium | Address in next iteration |
| 7 | 🟢 Low | Polish pass after content is locked |

---

# Plan: Hero Section Redesign — Gemini Design Spec

## Context

A design review (via Gemini) identified three specific problems with the current Hero section in `src/app/components/pages/Hero.tsx`:

1. **False affordance** — The 6 framework pills (POSH, ISMS, SOC 2, ISO, ITGC, Audit) look like interactive filters but do nothing on click. Users expect them to be clickable.
2. **Flat CTA hierarchy** — All three buttons have roughly equal visual weight. "Partner with Us" should be the primary action; the other two should be clearly secondary.
3. **Floating trust card** — The "Trusted Since 2012" element is positioned absolute over the image, which is visually busy. It should be a clean, dedicated trust bar below the fold.

The Gemini spec also recommends replacing the pill row with a **3×2 clickable service grid** below the trust bar — one card per compliance domain, each with an icon, title, tagline, and navigation target.

---

## Changes to `src/app/components/pages/Hero.tsx`

### 1. Remove pills from hero header
Delete the `frameworks` array and the pill row `<div>` (lines 63–83). The frameworks will be represented properly in the service grid below.

### 2. Reorder & reweight CTA buttons
Current order: Explore Idatum QA (filled white) | Browse Courses (outline) | Partner with Us (blue)

New order and weight:
| Button | Style | Navigates to |
|---|---|---|
| **Partner with Us** | Primary — filled white, `#fff` bg, `#0D2B5A` text | `partner-intro` |
| Explore Idatum QA | Secondary — outline, white border, white text | `qa-intro` |
| Browse Courses | Secondary — outline, white border, white text | `academy-intro` |

Both secondary buttons use the same outline style as the current "Browse Courses" button.

### 3. Remove the floating "Trusted Since 2012" card
Delete the absolute-positioned card (lines 196–229) from the image column. The trust information moves to the trust bar.

### 4. Replace the stats bar with a Trust Bar
Replace the current `#F1F5FA` stats bar (4 stats in a grid) with a slimmer, full-width trust bar. Style: white background, `1px solid #D1DCE8` top/bottom border, `padding: "20px 40px"`.

Content — 4 items separated by `|` dividers:
- Trusted Since 2012
- 500+ Organizations Served
- 98% Compliance Success Rate
- 50+ Expert Practitioners

Each item: label in `#4A6080`, value in `#0D2B5A` bold. Compact inline layout.

### 5. Replace "Three Ways We Help" section with a 6-card Service Grid
Remove the existing 3-card "Three Ways We Help" section. Replace with a section titled **"Our Compliance & Training Expertise"** containing a `3×2` grid of clickable cards.

Card data:

| Domain | Tagline | Icon | Navigates to |
|---|---|---|---|
| POSH | Ensure a safe, inclusive workplace with comprehensive POSH compliance and training | Shield person | `posh-detail` |
| ISMS | Protect your information assets with a robust ISO 27001-aligned security management system | Lock | `qa-intro` |
| SOC 2 | Build client trust through independent, rigorous SOC 2 assessment and readiness support | Checkmark badge | `qa-intro` |
| ISO | Achieve global recognition with expert ISO certification guidance and audit preparation | Globe | `qa-intro` |
| ITGC | Strengthen your digital controls with precision IT General Controls testing and audit | Server | `qa-intro` |
| Audit | Maintain operational excellence through thorough internal and external audit advisory | Document magnifier | `browse-courses` |

Card structure:
```
┌──────────────────────────┐
│ [Icon in coloured circle]│
│ POSH            →        │  ← domain label + arrow (right-aligned)
│ Ensure a safe, inclusive │
│ workplace with...        │
└──────────────────────────┘
```

- Card: `border: "1px solid #D1DCE8"`, `borderRadius: 10`, `padding: 28`, white bg
- Icon container: `48×48px`, coloured bg per domain (same palette as TrainingTracks.tsx)
- Domain label: `fontSize: 15`, `fontWeight: 700`, `color: "#0D2B5A"`
- Tagline: `fontSize: 13`, `color: "#4A6080"`, `lineHeight: 1.7`
- Hover: `borderColor` shifts to domain accent colour, `translateY(-2px)`, box-shadow
- Entire card is a `<button>` with `onClick={() => navigate(page)}`

Reuse the domain colour palette already defined in `src/app/components/pages/TrainingTracks.tsx`:
```
POSH: #1A5EA8 / #EEF4FF
ISMS: #0D6B4E / #ECFDF5
SOC 2: #6B3DAB / #F5F0FF
ISO: #8B4513 / #FFF7ED
ITGC: #B8370A / #FFF1EE
Audit: #2B6A7C / #EFF8FC
```

---

## File Modified
`src/app/components/pages/Hero.tsx` only. No routing changes, no other files touched.

---

## Page Layout After Changes
```
┌─────────────────────────────────────────────────┐
│  HERO  (navy gradient)                          │
│  Headline + sub-headline + image                │
│  [Partner with Us]  [Explore QA]  [Browse]      │
├─────────────────────────────────────────────────┤
│  TRUST BAR  (white, bordered)                   │
│  Trusted Since 2012 | 500+ Orgs | 98% | 50+    │
├─────────────────────────────────────────────────┤
│  SERVICE GRID  (white bg)                       │
│  [POSH] [ISMS] [SOC 2]                         │
│  [ISO]  [ITGC] [Audit]                         │
└─────────────────────────────────────────────────┘
```

---

## Verification
1. Hero loads — no pills visible in header, 3 buttons in new order with correct visual weight
2. "Partner with Us" is visually dominant (filled white); other two are outline
3. Trust bar appears below hero — 4 stats inline, no floating card on image
4. Service grid shows 6 cards, all clickable, hover state changes border colour to domain accent
5. All 6 cards navigate to correct pages

---

# Plan: Visually Distinguish Partnership Types Across Nav & BecomePartner

## Context

The "Partner with Us" dropdown has 5 items in a flat list — three org-level partnerships and two individual practitioner onboarding paths. They look identical in the nav, making it unclear who each is for. The BecomePartner page also has a 4-button type selector with no descriptions, so applicants can't easily tell the difference between Referral, Co-Delivery, Reseller, and Technology partnerships without reading the PartnerIntro page first.

The fix is to add visual hierarchy and contextual descriptions at both points: the dropdown and the application form.

---

## Change 1: Rich Grouped Dropdown in Nav.tsx

> **Label correction:** "Join Our Team" implies employment. Use **"Practitioner Network"** instead — it accurately describes independent trainers and auditors joining a delivery panel, not becoming employees.

**File:** `src/app/components/Nav.tsx`

Replace the current flat `.map()` over 5 buttons with a custom two-section layout. Each item gets:
- A small SVG icon (inline, 16×16)
- A one-line description in muted text below the label

Widen `minWidth` to `280px`, `padding` to `"12px 0"`.

### Visual structure

```
┌──────────────────────────────────────┐
│  PARTNER PROGRAM                     │  ← 10px uppercase label, #9BB5D4
│                                      │
│  [🔗 icon]  Partnership Overview     │
│             Explore our partner models│  ← 11px, #9BB5D4
│                                      │
│  [★ icon]   Why Partner With Us      │
│             Benefits & revenue share  │
│                                      │
│  [→ icon]   Become a Partner         │
│             Apply as an org partner   │
│──────────────────────────────────────│  ← 1px divider, #EEF2F7
│  PRACTITIONER NETWORK                │  ← 10px uppercase label, #9BB5D4
│                                      │
│  [🎓 icon]  Trainer Onboarding       │
│             Deliver Academy courses   │
│                                      │
│  [✓ icon]   Auditor Onboarding       │
│             Join the QA auditor panel │
└──────────────────────────────────────┘
```

### Implementation

Remove the `.map()` and write two explicit groups:

```tsx
// Group 1 — PARTNER PROGRAM
const programItems = [
  { label: "Partnership Overview", sub: "Explore our partner models", page: "partner-intro", icon: <...> },
  { label: "Why Partner With Us",  sub: "Benefits & revenue share",   page: "why-partner",  icon: <...> },
  { label: "Become a Partner",     sub: "Apply as an org partner",    page: "become-partner", icon: <...> },
];

// Group 2 — JOIN OUR TEAM
const teamItems = [
  { label: "Trainer Onboarding", sub: "Deliver Academy courses",    page: "trainer-onboarding", icon: <...> },
  { label: "Auditor Onboarding", sub: "Join the QA auditor panel",  page: "auditor-onboarding", icon: <...> },
];
```

Render each item as:
```tsx
<button onClick={...} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 16px", width: "100%", ... }}>
  <div style={{ width: 32, height: 32, background: "#F1F5FA", borderRadius: 6, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center" }}>
    {icon}
  </div>
  <div>
    <p style={{ fontSize: 13, fontWeight: 600, color: "#0D2B5A" }}>{label}</p>
    <p style={{ fontSize: 11, color: "#9BB5D4", marginTop: 1 }}>{sub}</p>
  </div>
</button>
```

Section label style: `fontSize: 10, fontWeight: 700, color: "#9BB5D4", letterSpacing: "1px", textTransform: "uppercase", padding: "10px 16px 6px"` — rendered as a `<div>`, not a button.

Divider: `<div style={{ height: 1, background: "#EEF2F7", margin: "6px 0" }} />`

Also update the active-page color check to include `"trainer-onboarding"` and `"auditor-onboarding"` in the array.

---

## Change 2: Descriptive Partner Type Cards in BecomePartner.tsx

**File:** `src/app/components/pages/BecomePartner.tsx`

Replace the 4 plain text toggle buttons with richer cards that each include an icon, label, and one-line description. Change the grid from `"1fr 1fr"` to `"1fr 1fr"` (keep layout) but increase card height.

### Card data to add

```tsx
const partnerTypes = [
  {
    type: "Referral Partner",
    icon: "→",  // use a lucide ArrowRight or handshake SVG
    desc: "Introduce clients, earn referral fees — no delivery needed",
    audience: "Consultants & advisors",
  },
  {
    type: "Co-Delivery Partner",
    icon: "🔗",
    desc: "Collaborate on joint client engagements",
    audience: "HR firms & consultancies",
  },
  {
    type: "Reseller Partner",
    icon: "📦",
    desc: "White-label our Academy course library",
    audience: "Training companies & LMS operators",
  },
  {
    type: "Technology Partner",
    icon: "⚙️",
    desc: "Integrate our tools into your platform",
    audience: "GRC & HR tech vendors",
  },
];
```

### Card layout

```tsx
<button style={{ padding: "16px", textAlign: "left", ... }}>
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
    <span style={{ fontSize: 18 }}>{icon}</span>
    <span style={{ fontSize: 14, fontWeight: 700, color: selected ? "#1A5EA8" : "#0D2B5A" }}>{type}</span>
  </div>
  <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.5, marginBottom: 4 }}>{desc}</p>
  <p style={{ fontSize: 11, color: "#9BB5D4" }}>Best for: {audience}</p>
</button>
```

Selected state: `borderColor: "#1A5EA8"`, `background: "#EEF4FF"`.

---

## Files Modified

| File | Change |
|---|---|
| `src/app/components/Nav.tsx` | Replace flat partner dropdown with two grouped, icon+description sections |
| `src/app/components/pages/BecomePartner.tsx` | Replace plain text type buttons with icon+description+audience cards |

No routing changes. No other page components touched.

---

## Verification

1. Hover "Partner with Us" in the nav — see two clearly labelled groups with icons and subtitles
2. Click each item — all 5 pages still navigate correctly
3. Open BecomePartner — 4 partner type cards show icon, description, and audience tag
4. Select each type — selected state highlights correctly, form textarea placeholder updates
