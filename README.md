## Leo9 Studio — Hero Section + Navbar (Assignment)

This repository contains my implementation for the Leo9 Studio frontend assignment. It recreates the hero section and navigation bar inspired by `leo9studio.com`, with responsive design, smooth interactions, and tasteful animations. I also added two below-the-fold sections for bonus points.

### Submission
- Live URL: https://leo9clone.netlify.app/

### Stack
- React + Vite
- Tailwind CSS
- Framer Motion (animations)
- Vanta.js (globe background effect)

### Features
- Responsive hero with animated heading and tagline
- Sticky navbar that:
  - is transparent at top, becomes dark on scroll
  - smooth‑scrolls to sections and centers them in the viewport
  - mobile menu with micro‑interactions
- Services and Projects sections (bonus): dark themed cards, staggered fade‑up animations
- Contact section: solid dark form, subtle focus and ripple micro‑interactions

### Quick Start
```bash
npm install
npm run dev
```
The app runs at `http://localhost:5173/` by default.

### Build & Preview
```bash
npm run build
npm run preview
```

### Project Structure (key files)
- `src/components/Navbar.jsx` — sticky navbar, smooth in‑page navigation
- `src/pages/hero-section.jsx` — hero copy + animations
- `src/pages/Services.jsx` — services cards with staggered animations
- `src/pages/Projects.jsx` — projects grid with staggered animations
- `src/pages/Contact.jsx` — contact form with ripple effect and toasts
- `src/App.jsx` — composition, background canvas, global layout

### Notable Implementation Details
- Smooth scrolling is implemented with `scrollIntoView({ behavior: 'smooth', block: 'center' })` so sections land near the middle of the viewport for better context.
- Navbar background toggles based on `window.scrollY` with a throttled effect and Tailwind utility classes.
- Animations trigger once as sections enter viewport using Framer Motion `whileInView` and `staggerChildren`.

### How to Deploy
- Vercel (recommended):
  1. Push this repo to GitHub
  2. Import the repo in Vercel
  3. Framework preset: Vite; Build Command: `npm run build`; Output: `dist`
- Netlify / GitHub Pages work similarly; just deploy the `dist` folder build.

