import { Link, useLocation } from 'react-router-dom'
import './Footer.css'
import { SERVICES } from './Services'
import { COUNTIES } from './ServiceArea'
import { SERVICE_SLUGS, AREA_SLUGS } from '../data/slugs'

const QUICKLINKS = [
  { label: 'Services', anchor: 'services' },
  { label: 'About Us', anchor: 'about' },
  { label: 'Coverage Area', anchor: 'coverage' },
  { label: 'Reviews', anchor: 'reviews' },
  { label: 'Contact', anchor: 'contact' },
  { label: 'Request a Quote', anchor: 'contact' },
]

const NavLogo = () => (
  <div className="footer-logo-wrap">
    <svg width="40" height="48" viewBox="0 0 46 56" fill="none">
      <path d="M9 31 Q6 25 9 18" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.35"/>
      <path d="M6 33 Q2 24 6 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
      <path d="M23 5 C23 5 8 21 8 34 C8 44.5 14.8 52 23 52 C31.2 52 38 44.5 38 34 C38 21 23 5 23 5Z"
        stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.06)"/>
      <line x1="16" y1="45" x2="31" y2="19" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
      <rect x="21" y="30.5" width="7" height="4" rx="1.5" fill="white" transform="rotate(-60 24.5 32.5)"/>
      <path d="M29 17 C27 12 34 10 36 14 C37.5 17 35 20 32 19 L30 17.5 Z" fill="white"/>
      <path d="M31 21 C36 19 38 23 35 24.5 L32 22.5 Z" fill="white"/>
      <ellipse cx="15.5" cy="45.5" rx="3.2" ry="2.2" fill="white" transform="rotate(-60 15.5 45.5)"/>
    </svg>
    <div>
      <div className="footer-logo-name">FIRST CALL</div>
      <div className="footer-logo-sub">— PLUMBING —</div>
    </div>
  </div>
)

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <NavLogo />
            <p className="footer-tagline">
              South Florida's trusted commercial plumbing contractor. Serving Palm Beach,
              Broward, and Miami-Dade counties since 2023.
            </p>
            <div className="footer-contact-block">
              <a href="tel:9547382255" className="footer-phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.91a19.79 19.79 0 01-3.07-8.67A2 2 0 012.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                954-738-CALL (2255)
              </a>
              <a href="mailto:info@firstcallplumbingfl.com" className="footer-email">
                info@firstcallplumbingfl.com
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul>
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <Link to={`/services/${SERVICE_SLUGS[s.title]}`} className="footer-link">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul>
                {QUICKLINKS.map((l) => (
                  <li key={l.label}>
                    <Link to={isHome ? `#${l.anchor}` : `/#${l.anchor}`} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>

              <h4 className="footer-col-title" style={{ marginTop: '28px' }}>Coverage</h4>
              <ul>
                {COUNTIES.map((c) => (
                  <li key={c.name}>
                    <Link to={`/areas/${AREA_SLUGS[c.name]}`} className="footer-link">{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Location</h4>
              <p className="footer-address">
                7027 W Broward Blvd #392<br />
                Fort Lauderdale, FL 33317
              </p>
              <div className="footer-hours">
                <div className="footer-hours-row">
                  <span>Monday – Friday</span>
                  <span className="footer-hours-time">8:00 AM – 5:00 PM</span>
                </div>
                <div className="footer-hours-row">
                  <span>Saturday – Sunday</span>
                  <span className="footer-hours-closed">Closed</span>
                </div>
              </div>

              <Link to={isHome ? '#contact' : '/#contact'} className="footer-quote-btn">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} First Call Plumbing · All Rights Reserved
          </p>
          <p className="footer-owners">
            Joe G. &amp; Gordon P., Co-Owners · Pompano Beach, FL
          </p>
        </div>
      </div>
    </footer>
  )
}
