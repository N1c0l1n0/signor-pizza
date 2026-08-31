# Pizzeria Signor Pizza — Design Spec

**Date:** 2026-08-31  
**Status:** Approved  
**Author:** Brainstorming session with Nicolò

---

## 1. Overview

Professional showcase website for **Pizzeria Signor Pizza**, a gourmet pizzeria in Busto Arsizio. The site presents the restaurant, interactive menu, awards, certifications, and contact information with clear CTAs for phone, WhatsApp, Google Maps, and external booking.

### Goals

- Professional online presence reflecting gourmet positioning
- Drive visits via phone, WhatsApp, and reservations
- Showcase menu, awards (Premio Le 5 Stagioni 2024), and AIC gluten-free certification
- SEO-optimized for local search ("pizzeria Busto Arsizio")
- Fast, accessible, mobile-first experience

### Non-goals (v1)

- Online ordering / cart
- Integrated table booking
- English language (structure ready for future i18n)

---

## 2. Technical Approach

**Stack:** Astro + Tailwind CSS  
**Hosting:** Cloudflare Pages (Git-connected, automatic builds)  
**Language:** Italian only (i18n folder prepared for English)

### Why Astro

- Static HTML output → excellent performance and SEO
- Minimal JavaScript shipped to client
- Native Cloudflare Pages support
- Menu data in JSON → easy updates without touching layout
- Built-in i18n structure for future bilingual expansion

---

## 3. Site Structure

### Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Single-page scroll with anchored sections |
| Menu | `/menu` | Full interactive menu by category |

### Home Sections (scroll order)

1. **Hero** — Full-width photo, name, tagline "Pizzeria Gourmet", primary CTAs (Chiama · Prenota · Menu)
2. **Chi siamo** — Brief story, atmosphere photos, values (tradition, quality ingredients)
3. **Riconoscimenti** — Awards and certifications badges
4. **In evidenza** — 3–4 signature dishes with photos, link to full menu
5. **Servizi** — Icons for takeaway, delivery, dine-in, reservations
6. **Il locale** — Google Business attributes (accessibility, family-friendly, Wi-Fi, parking, payments, LGBTQ+ friendly)
7. **Galleria** — Photo grid (venue, pizzas, team)
8. **Orari e contatti** — Opening hours, Google Maps embed, phone, email, social links
9. **Footer** — Quick links, credits, accessibility note

### Navigation

- Fixed header: logo, section anchors, Menu link, "Prenota" CTA button
- Mobile: hamburger menu with same links
- Smooth scroll to anchors on home page
- Mobile sticky bottom bar: Chiama · Menu · Prenota

---

## 4. Visual Design

### Design Direction

Hybrid **traditional Italian + modern clean**: warm Mediterranean palette with minimal layout, elegant typography, and large photography.

### Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Rosso pomodoro | `#C0392B` | CTAs, accents, active links |
| Secondary | Verde basilico | `#2D6A4F` | Badges, service icons, hover states |
| Background | Bianco caldo | `#FFFBF5` | Body, alternating sections |
| Surface | Crema forno | `#F5EDE0` | Cards, alternate section backgrounds |
| Text | Carbone | `#1A1A1A` | Headings, body |
| Text muted | Grigio caldo | `#6B6560` | Captions, metadata |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Display | Fraunces | 600–700 |
| Body | DM Sans | 400–500 |
| Utility | DM Sans | 600 |

Loaded via Google Fonts or `@fontsource` packages.

### UI Components

- **Primary buttons:** Rosso pomodoro, `rounded-lg`, subtle shadow, darker hover
- **Secondary buttons:** Verde basilico outline, fill on hover
- **Dish cards:** Crema forno background, rounded photo, Fraunces name, bold DM Sans price
- **Section rhythm:** Alternating bianco caldo / crema forno backgrounds
- **Icons:** Lucide line-style, verde basilico color

### Signature Element

**"Forno" hero overlay:** Warm gradient (rosso → arancione forno) on hero photos, evoking wood-fired oven atmosphere without clipart.

### Motion

- Subtle fade-in on scroll (respects `prefers-reduced-motion`)
- Gallery card hover: photo scale 1.05x
- Smooth anchor scrolling

### Responsive Breakpoints

Mobile-first. Breakpoints: `640px` (sm), `768px` (md), `1024px` (lg).

---

## 5. Content & Data

### Business Information

| Field | Value |
|-------|-------|
| Name | Pizzeria Signor Pizza |
| Positioning | Pizzeria Gourmet |
| Address | Via Quintino Sella 19, Busto Arsizio 21052 |
| Tagline | La vera pizza napoletana (or similar, to be confirmed with client content) |

### Awards & Certifications (Riconoscimenti section)

1. **Vincitore Premio Le 5 Stagioni 2024** 🏆
2. **Partecipazione con la nazionale pizzaioli** 🇮🇹
3. **Certificati AIC — Alimenti gluten free** 👍

Displayed as 3 horizontal badge cards with icon, title, and brief description.

### Opening Hours

| Day | Hours | Notes |
|-----|-------|-------|
| Lunedì | 11:30–14:00, 18:30–23:00 | Fonte originale indica anche 19:00–22:00 come alternativa — confermare orario definitivo |
| Martedì | Chiuso | |
| Mercoledì | 11:30–14:00, 18:30–22:30 | |
| Giovedì | 11:30–14:00, 18:30–22:30 | |
| Venerdì | 11:30–14:00, 18:30–23:00 | |
| Sabato | 11:30–14:00, 18:30–23:00 | |
| Domenica | 18:30–22:00 | Solo cena |

### Google Business Attributes (Il locale section)

Display as compact icon grid:

- **Accessibility:** Wheelchair-accessible entrance, bathroom, parking, tables
- **Service:** Contactless delivery, delivery, takeaway, dine-in
- **Highlights:** Great desserts, great coffee
- **Atmosphere:** Casual, quiet
- **Crowd:** Family-friendly, LGBTQ+ friendly, transgender safe space
- **Planning:** Dinner reservations recommended, accepts reservations
- **Payments:** Credit cards, debit cards, NFC mobile payments
- **Children:** Kid-friendly, high chairs
- **Parking:** Free parking, free street parking
- **Amenities:** Gender-neutral bathrooms, bar, toilets, Wi-Fi, free Wi-Fi

### Data Files

#### `src/data/site.json`

```json
{
  "name": "Pizzeria Signor Pizza",
  "tagline": "Pizzeria Gourmet",
  "description": "...",
  "phone": "+39 ...",
  "email": "...",
  "whatsapp": "+39 ...",
  "address": {
    "street": "Via Quintino Sella 19",
    "city": "Busto Arsizio",
    "zip": "21052",
    "country": "IT"
  },
  "social": {
    "instagram": "...",
    "facebook": "..."
  },
  "bookingUrl": "https://...",
  "googleMapsUrl": "https://maps.google.com/...",
  "awards": [
    {
      "title": "Vincitore Premio Le 5 Stagioni",
      "year": "2024",
      "icon": "trophy"
    },
    {
      "title": "Partecipazione con la nazionale pizzaioli",
      "icon": "flag-it"
    },
    {
      "title": "Certificati AIC — Alimenti gluten free",
      "icon": "shield-check"
    }
  ]
}
```

#### `src/data/hours.json`

Structured schedule as defined in opening hours table above.

#### `src/data/menu.json`

```json
{
  "categories": [
    {
      "id": "antipasti",
      "name": "Antipasti",
      "items": [
        {
          "name": "Margherita",
          "description": "Pomodoro, mozzarella, basilico",
          "price": 8.00,
          "featured": false,
          "glutenFree": false
        }
      ]
    }
  ]
}
```

Categories (to be populated with client content):

- Antipasti
- Pizze classiche
- Pizze speciali
- Calzoni
- Primi
- Secondi
- Contorni
- Dolci
- Bevande

Gluten-free items marked with `glutenFree: true` and AIC badge in menu display.

---

## 6. Menu Page

### Layout

- Sticky horizontal category tabs below header (scrollable on mobile)
- Click tab → scroll to category section
- Each item: name, description (ingredients), price right-aligned
- Featured items: "Consigliato" badge in verde basilico
- Gluten-free items: AIC badge indicator

### Home Preview

3–4 items with `"featured": true` shown as cards in "In evidenza" section, with "Vedi menu completo →" link to `/menu`.

---

## 7. CTAs

| Action | Locations | Behavior |
|--------|-----------|----------|
| Chiama | Hero, sticky mobile, Contatti | `tel:+39...` |
| WhatsApp | Hero, Contatti | `https://wa.me/39...` |
| Prenota | Header, Hero, sticky mobile | External booking URL |
| Menu | Hero, Header | Navigate to `/menu` |
| Indicazioni | Contatti section | Google Maps link (Via Quintino Sella 19) |

---

## 8. SEO & Metadata

- **Title:** `Pizzeria Signor Pizza | Pizzeria Gourmet a Busto Arsizio`
- **Description:** Mentions awards, AIC gluten-free certification, reservations
- **Schema.org** `Restaurant` JSON-LD: name, address, geo, opening hours, telephone, servesCuisine
- **Open Graph** tags for social sharing
- Automatic sitemap and `robots.txt` via Astro

---

## 9. Performance & Accessibility

### Performance Targets

- Lighthouse score 90+ (Performance, Accessibility, Best Practices, SEO)
- Images: WebP format, lazy loading, responsive `srcset`
- Minimal client-side JavaScript

### Accessibility (WCAG 2.1 AA)

- Sufficient color contrast ratios
- Visible keyboard focus indicators
- Alt text on all images
- Semantic HTML landmarks
- Skip-to-content link
- `prefers-reduced-motion` respected for animations

---

## 10. Deployment

### Cloudflare Pages

```
Git repository → Cloudflare Pages connected
Build command: npm run build
Output directory: dist/
Auto-deploy on push to main branch
Custom domain configurable in Cloudflare dashboard
SSL automatic
```

### Project Structure

```
signor-pizza/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Awards.astro
│   │   ├── FeaturedDishes.astro
│   │   ├── Services.astro
│   │   ├── VenueAttributes.astro
│   │   ├── Gallery.astro
│   │   ├── Contact.astro
│   │   ├── MenuCategory.astro
│   │   ├── MenuItem.astro
│   │   ├── DishCard.astro
│   │   ├── Badge.astro
│   │   ├── StickyBar.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── menu.astro
│   ├── data/
│   │   ├── site.json
│   │   ├── hours.json
│   │   └── menu.json
│   ├── i18n/
│   │   └── it.json
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── gallery/
│   │   └── dishes/
│   ├── favicon.ico
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

---

## 11. Assets Required from Client

Before implementation, client provides:

- [ ] Logo (SVG or PNG transparent)
- [ ] Hero photo(s) — high resolution
- [ ] Gallery photos (6–12 images)
- [ ] Featured dish photos (3–4)
- [ ] Complete menu with categories, descriptions, prices
- [ ] Phone number
- [ ] Email address
- [ ] WhatsApp number
- [ ] Social media links (Instagram, Facebook)
- [ ] External booking URL
- [ ] Google Maps place URL
- [ ] About/story text (optional, can draft placeholder)

---

## 12. Future Enhancements (out of scope v1)

- English language (`src/i18n/en.json`)
- Menu PDF download
- Online ordering integration
- Integrated reservation system
- Blog/news section
- Customer reviews widget
