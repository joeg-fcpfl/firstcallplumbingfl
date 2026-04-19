import { useState, useEffect } from 'react'
import './Navbar.css'

const NavLogo = () => (
  <div className="nav-logo-wrap">
    <img src="/FirstCall-01-4.png" alt="" className="nav-logo-img" aria-hidden="true" />
    <div className="nav-logo-text">
      <span className="nav-logo-main">FIRST CALL</span>
      <span className="nav-logo-sub">PLUMBING</span>
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
