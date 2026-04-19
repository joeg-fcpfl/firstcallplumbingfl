import { useEffect, useState } from 'react'
import './Hero.css'

const BADGES = [
  { icon: '🏗️', text: 'New Construction' },
  { icon: '🔧', text: 'Tenant Buildouts' },
  { icon: '🚰', text: 'Backflow Testing' },
  { icon: '💧', text: 'Grease Traps' },
  { icon: '🔥', text: 'Gas Lines' },
  { icon: '📋', text: 'Code Compliance' },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Background geometry */}
      <div className="hero-bg">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow glow-1" />
        <div className="hero-bg-glow glow-2" />
        <svg className="hero-pipe-deco" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="300" cy="300" r="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          <circle cx="300" cy="300" r="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          <circle cx="300" cy="300" r="120" stroke="rgba(232,136,26,0.08)" strokeWidth="1"/>
          <path d="M20 300 H580" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          <path d="M300 20 V580" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <div className={`hero-label fade-up ${loaded ? 'visible' : ''}`}>
            <span className="hero-label-dot" />
            Licensed Commercial Contractor · CFC1432753
          </div>

          <h1 className={`hero-title fade-up delay-1 ${loaded ? 'visible' : ''}`}>
            SOUTH FLORIDA'S
            <br />
            <span className="hero-title-accent">COMMERCIAL</span>
            <br />
            PLUMBING
            <br />
            AUTHORITY
          </h1>

          <p className={`hero-sub fade-up delay-2 ${loaded ? 'visible' : ''}`}>
            Serving Palm Beach, Broward &amp; Miami-Dade counties with
            industrial-grade commercial plumbing solutions. On-time, on-budget,
            built to code.
          </p>

          <div className={`hero-actions fade-up delay-3 ${loaded ? 'visible' : ''}`}>
            <a href="tel:9547382255" className="hero-btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.91a19.79 19.79 0 01-3.07-8.67A2 2 0 012.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              CALL 954-738-CALL
            </a>
            <a href="#contact" className="hero-btn-secondary">
              REQUEST A QUOTE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className={`hero-trust fade-up delay-4 ${loaded ? 'visible' : ''}`}>
            <div className="trust-item">
              <span className="trust-num">25+</span>
              <span className="trust-label">Years in Business</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">500+</span>
              <span className="trust-label">Commercial Projects</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">3</span>
              <span className="trust-label">Counties Served</span>
            </div>
          </div>
        </div>

        {/* Right visual card */}
        <div className={`hero-card-wrap fade-up delay-2 ${loaded ? 'visible' : ''}`}>
          <div className="hero-card">
            <div className="hero-card-header">
              <svg width="36" height="44" viewBox="0 0 44 52" fill="none" aria-hidden="true">
                <path d="M22 49C22 49 5 35.5 5 22C5 13.163 12.611 6 22 6C31.389 6 39 13.163 39 22C39 35.5 22 49 22 49Z"
                  stroke="#E8881A" strokeWidth="2.2" fill="rgba(232,136,26,0.12)"/>
                <g stroke="white" strokeLinecap="round">
                  <line x1="17" y1="15" x2="27" y2="37" strokeWidth="3"/>
                  <circle cx="17.5" cy="13.5" r="4.5" strokeWidth="2" fill="none"/>
                  <circle cx="26.5" cy="38.5" r="4" strokeWidth="2" fill="none"/>
                  <path d="M13.5 13C13.5 10.5 16 8 18.5 9.5L17 15L13.5 13Z" fill="white" stroke="none"/>
                  <path d="M27 37C29.5 39 30 42 27.5 43.5L24 40L27 37Z" fill="white" stroke="none"/>
                </g>
              </svg>
              <div>
                <p className="hero-card-title">FIRST CALL PLUMBING</p>
                <p className="hero-card-lic">License #CFC1432753</p>
              </div>
            </div>

            <div className="hero-card-divider" />

            <p className="hero-card-section-label">OUR SERVICES</p>
            <div className="hero-badges">
              {BADGES.map((b, i) => (
                <span key={i} className="hero-badge" style={{ animationDelay: `${0.4 + i * 0.07}s` }}>
                  {b.text}
                </span>
              ))}
            </div>

            <div className="hero-card-divider" />

            <div className="hero-card-info">
              <div className="hero-info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.91a19.79 19.79 0 01-3.07-8.67A2 2 0 012.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>954-738-CALL (2255)</span>
              </div>
              <div className="hero-info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </div>
              <div className="hero-info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Fort Lauderdale, FL 33317</span>
              </div>
            </div>

            <a href="tel:9547382255" className="hero-card-cta">
              CALL NOW — FREE ESTIMATE
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="hero-scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </section>
  )
}
