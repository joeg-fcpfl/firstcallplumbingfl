import { useEffect, useState } from 'react'
import './Hero.css'

const SERVICES = [
  'New Construction',
  'Tenant Buildouts',
  'Backflow Testing',
  'Grease Traps',
  'Gas Lines',
  'Code Compliance',
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero">

      {/* ─── Left: headline content ─── */}
      <div className="hero-left">
        <div className={`hero-label fade-up ${loaded ? 'visible' : ''}`}>
          <span className="hero-label-rule" />
          Licensed Commercial Contractor · South Florida
        </div>

        <h1 className={`hero-title fade-up delay-1 ${loaded ? 'visible' : ''}`}>
          SOUTH<br />
          FLORIDA'S<br />
          <span className="hero-title-accent">COMMERCIAL</span><br />
          PLUMBING
        </h1>

        <p className={`hero-sub fade-up delay-2 ${loaded ? 'visible' : ''}`}>
          Serving Palm Beach, Broward &amp; Miami-Dade with industrial-grade
          commercial plumbing. On-time, on-budget, built to code.
        </p>

        <div className={`hero-actions fade-up delay-3 ${loaded ? 'visible' : ''}`}>
          <a href="#contact" className="hero-btn-primary">
            REQUEST A QUOTE
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#services" className="hero-btn-secondary">
            VIEW SERVICES
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className={`hero-trust fade-up delay-4 ${loaded ? 'visible' : ''}`}>
          <div className="trust-item">
            <span className="trust-num">25+</span>
            <span className="trust-label">Years in Business</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">500+</span>
            <span className="trust-label">Commercial Projects</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">3</span>
            <span className="trust-label">Counties Served</span>
          </div>
        </div>
      </div>

      {/* ─── Right: credentials panel ─── */}
      <div className={`hero-right fade-up delay-2 ${loaded ? 'visible' : ''}`}>
        <div className="hero-panel-head">
          <p className="hero-panel-lic">License #CFC1432753</p>
        </div>


        <div className="hero-panel-divider" />

        <div className="hero-panel-services">
          <p className="hero-panel-section-label">SERVICES</p>
          <ul className="hero-service-list">
            {SERVICES.map((s) => (
              <li key={s} className="hero-service-item">
                <span className="hero-service-mark" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-panel-divider" />

        <div className="hero-panel-info">
          <div className="hero-info-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Mon–Fri: 8:00 AM – 5:00 PM
          </div>
          <div className="hero-info-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Fort Lauderdale, FL 33317
          </div>
        </div>

        <a href="#contact" className="hero-panel-cta">
          REQUEST A FREE ESTIMATE
        </a>
      </div>

    </section>
  )
}
