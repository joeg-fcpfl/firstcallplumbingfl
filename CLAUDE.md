# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, hot reload)
npm run build     # Production build
npm run preview   # Preview production build locally
```

No linter or test runner is configured.

## Architecture

Single-page React 18 + Vite app for **First Call Plumbing**, a South Florida commercial plumbing contractor (license CFC1432753). No routing — the page is one scrollable document.

**Section order** (rendered in `App.jsx`): Navbar → Hero → Services → Stats → About → Testimonials → ServiceArea → Contact → Footer

**Scroll animations** use `useInView` (`src/hooks/useInView.js`), an IntersectionObserver hook that fires once and unobserves. Most sections import and use `[ref, inView]` to trigger CSS class transitions.

**Styling** is per-component CSS files (e.g., `Hero.css` colocated with `Hero.jsx`) — no shared stylesheet or CSS framework. Google Fonts loaded in `index.html`: **Barlow Condensed** (headings) + **DM Sans** (body).

**Brand colors**: deep navy `#0a0f1e`, accent blue `#1565c0`, bright accent `#2979ff`, gold `#f59e0b`.

The logo asset `firstcallplumbing.jpg` lives at the project root and is referenced as `/firstcallplumbing.jpg`.
