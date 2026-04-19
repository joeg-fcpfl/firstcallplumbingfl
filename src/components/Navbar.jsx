import { useState, useEffect } from 'react'
import './Navbar.css'

const NavLogo = () => (
  <div className="nav-logo-wrap">
    <svg width="40" height="50" viewBox="0 0 46 56" fill="none" className="nav-logo-icon" aria-hidden="true">
      <path d="M9 31 Q6 25 9 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
      <path d="M6 33 Q2 24 6 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.22"/>
      <path
        d="M23 5 C23 5 8 21 8 34 C8 44.5 14.8 52 23 52 C31.2 52 38 44.5 38 34 C38 21 23 5 23 5Z"
        stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08"
      />
      <line x1="16" y1="45" x2="31" y2="19" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
      <rect x="21" y="30.5" width="7" height="4" rx="1.5"
        fill="currentColor" transform="rotate(-60 24.5 32.5)"/>
      <path d="M29 17 C27 12 34 10 36 14 C37.5 17 35 20 32 19 L30 17.5 Z" fill="currentColor"/>
      <path d="M31 21 C36 19 38 23 35 24.5 L32 22.5 Z" fill="currentColor"/>
      <ellipse cx="15.5" cy="45.5" rx="3.2" ry="2.2"
        fill="currentColor" transform="rotate(-60 15.5 45.5)"/>
    </svg>

    <div className="nav-logo-text">
      <span className="nav-logo-main">FIRST CALL</span>
      <span className="nav-logo-sub">
        <span className="nav-logo-rule" />
        PLUMBING
        <span className="nav-logo-rule" />
      </span>
      <span className="nav-logo-lic">CFC1432753</span>
    </div>
  </div>
)

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo-link">
          <NavLogo />
        </a>

        <nav className={`navbar-links ${open ? 'open' : ''}`} aria-label="Main navigation">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:9547382255" className="nav-cta-mobile">
            954-738-CALL
          </a>
        </nav>

        <a href="tel:9547382255" className="nav-phone-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.91a19.79 19.79 0 01-3.07-8.67A2 2 0 012.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          954-738-CALL
        </a>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
