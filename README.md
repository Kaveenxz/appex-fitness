# APEX FITNESS — World-Class Gym Website

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🏗 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata + Google Fonts
│   ├── page.tsx            # Main page (composes all sections)
│   └── globals.css         # Global styles + Tailwind directives
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx       # Sticky responsive navbar with mobile menu
    │   └── Footer.tsx       # Full footer with newsletter signup
    │
    └── sections/
        ├── Hero.tsx         # Full-screen parallax hero
        ├── MarqueeBar.tsx   # Animated scrolling services bar
        ├── Stats.tsx        # Animated counter stats
        ├── About.tsx        # Brand story + pillars
        ├── Programs.tsx     # 8 program cards with hover reveal
        ├── Facilities.tsx   # Facility photo + feature grid
        ├── Schedule.tsx     # Interactive weekly class timetable
        ├── Trainers.tsx     # Coach profiles with hover bios
        ├── CTA.tsx          # Mid-page conversion banner
        ├── Membership.tsx   # Monthly/annual pricing toggle
        ├── Gallery.tsx      # Masonry gallery with lightbox
        ├── Testimonials.tsx # Rotating testimonials + stats
        ├── Blog.tsx         # Featured article + post grid
        └── Contact.tsx      # Contact form + map + info
```

## 🎨 Design System

**Colors:**
- `apex-red` — #E8151B (primary action)
- `apex-black` — #080808 (base background)
- `apex-white` — #F5F5F5 (primary text)

**Fonts:**
- Display: **Bebas Neue** (headings, hero, stats)
- Body: **Barlow** (paragraphs, UI text)
- Condensed: **Barlow Condensed** (labels, buttons)
- Mono: **JetBrains Mono** (metadata, section labels)

## ✅ Features

- [x] Fully responsive (mobile-first)
- [x] Sticky navbar with scroll behavior + active section detection
- [x] Parallax mouse-tracking hero
- [x] Animated counters (IntersectionObserver)
- [x] Interactive weekly class timetable (7 days)
- [x] Monthly / Annual pricing toggle
- [x] Gallery lightbox
- [x] Testimonial carousel
- [x] Contact form with success state
- [x] Custom scrollbar, text selection, CSS animations
- [x] SEO metadata

## 🌐 Deployment

Deploy instantly to **Vercel**:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.
