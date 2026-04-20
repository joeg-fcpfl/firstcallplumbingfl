# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, hot reload) → localhost:5173
npm run build     # Production build
npm run preview   # Preview production build locally
```

No linter or test runner is configured.

## Deployment

Hosted on **GitHub Pages** via GitHub Actions. Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm run build` and deploys `dist/` automatically. Live at **firstcallplumbingfl.com** within ~30 seconds of a push.

To roll back: `git revert HEAD && git push`

## Architecture

Single-page React 18 + Vite app for **First Call Plumbing**, a South Florida commercial plumbing contractor (license CFC1432753). No routing — the page is one scrollable document.

**Section order** (rendered in `App.jsx`): Navbar → Hero → Services → Stats → About → Testimonials → ServiceArea → Contact → Footer

**Scroll animations** use `useInView` (`src/hooks/useInView.js`), an IntersectionObserver hook that fires once and unobserves. Sections import `[ref, inView]` to trigger `.fade-up.visible` CSS transitions.

**Styling** is per-component CSS files (e.g., `Hero.css` colocated with `Hero.jsx`) — no shared stylesheet or CSS framework. Global design tokens live in `src/index.css`.

## Fonts

Loaded via Google Fonts in `index.html`:
- **Big Shoulders Display** (weights 400–900) — headings, labels, display text (`--font-display`)
- **Hanken Grotesk** (weights 300–700) — body text (`--font-body`)

## Brand Colors (OKLCH)

All defined as CSS variables in `src/index.css`:

```css
--bg:             oklch(97% 0.008 75)   /* warm off-white, main background */
--surface:        oklch(93% 0.010 75)   /* warm cream, alternating sections */
--surface-dark:   oklch(16% 0.015 55)   /* dark charcoal, dark sections */
--surface-darker: oklch(11% 0.012 55)   /* deepest dark */
--text-dark:      oklch(17% 0.015 55)   /* primary text */
--text-med:       oklch(40% 0.012 55)   /* secondary text */
--amber:          oklch(64% 0.17 55)    /* primary accent — burnt orange */
--amber-lt:       oklch(73% 0.13 55)    /* amber hover */
--amber-dk:       oklch(52% 0.19 55)    /* amber active */
--slate:          oklch(46% 0.09 240)   /* secondary accent — slate blue */
--border:         oklch(87% 0.010 75)   /* light border */
--border-strong:  oklch(74% 0.012 75)   /* stronger border */
--white:          oklch(98% 0.005 75)   /* near-white, amber tinted */
```

Legacy aliases (`--navy`, `--navy-dark`, `--orange`, etc.) are preserved in `src/index.css` so existing component CSS doesn't break — they map to the new warm palette values.

## Logo Assets

Four PNGs in `/public/`:
| File | Description | Used in |
|------|-------------|---------|
| `FirstCall-01-1.png` | Full logo, light background | — |
| `FirstCall-01-2.png` | Full logo, navy background | Footer |
| `FirstCall-01-3.png` | Stacked logo, light background | — |
| `FirstCall-01-4.png` | Icon only | Navbar |

Reference as `/FirstCall-01-4.png` (public URL, not imported).

## Design Rules — DO NOT VIOLATE

These are hardcoded business decisions:

1. **Phone number** appears exactly **twice**: Navbar CTA button + Footer. All other CTAs link to `#contact`.
2. **License # CFC1432753** appears exactly **once**: Hero right panel only.
3. **No glassmorphism** — no `backdrop-filter: blur`, no `rgba` glass cards.
4. **No gradient text** — no `background-clip: text` with gradients.
5. **No border-left/right > 1px** as decorative accent stripes on cards.
6. **No decorative glow blurs** — no `filter: blur()` for atmosphere.

## Design Context

Full design context (audience, brand personality, aesthetic direction, principles) is in `.impeccable.md` at the project root. Read this before any design work.

**Summary**: Light theme, warm industrial aesthetic, "no-bullshit South Florida contractor." Big Shoulders Display for bold condensed headings, amber as the primary accent, dark charcoal panels for contrast sections.

## Testimonials

Currently placeholder content. Structured to swap in real Google Business reviews — just replace the `REVIEWS` array in `src/components/Testimonials.jsx`.
