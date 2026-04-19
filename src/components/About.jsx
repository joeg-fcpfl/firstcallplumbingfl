import { useInView } from '../hooks/useInView'
import logo from '../../firstcallplumbing.jpg'
import './About.css'

const OWNERS = [
  {
    initials: 'JG',
    name: 'Joe G.',
    title: 'Co-Owner · Field Operations',
    bio: 'With over two decades of hands-on commercial plumbing experience, Joe oversees every job site to ensure work is executed to the highest standards. He\'s the one who answers the phone when things get complicated.',
  },
  {
    initials: 'GX',
    name: 'Gordon X.',
    title: 'Co-Owner · Project Management',
    bio: 'Gordon drives every project from bid to closeout, coordinating with general contractors, building officials, and property managers to keep schedules tight and budgets on track.',
  },
]

const WHY = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M16 3L4 9v8c0 7 5.5 13 12 14 6.5-1 12-7 12-14V9L16 3z"/>
        <polyline points="11 16 14 19 21 12"/>
      </svg>
    ),
    title: 'Fully Licensed & Insured',
    text: 'State Certified Plumbing Contractor #CFC1432753. We carry full general liability and workers\' comp on every project.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="16" cy="16" r="13"/>
        <polyline points="16 8 16 16 21 19"/>
      </svg>
    ),
    title: 'On-Time Delivery',
    text: 'We know construction timelines have zero tolerance for delays. Our crews show up, communicate, and finish on schedule.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M28 20a10 10 0 11-20 0c0-8 10-17 10-17s10 9 10 17z"/>
        <path d="M12 22c0-3 2-5 4-5s4 2 4 5"/>
      </svg>
    ),
    title: 'South Florida Specialists',
    text: 'We know Tri-County codes, inspectors, and permit offices. That means fewer surprises and faster approvals on your project.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="4" y="10" width="24" height="18" rx="2"/>
        <path d="M10 10V8a6 6 0 0112 0v2"/>
        <line x1="16" y1="17" x2="16" y2="21"/>
        <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    text: 'Detailed written bids before any work begins. No surprise change orders — we identify scope upfront and stick to it.',
  },
]

export default function About() {
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Header */}
        <div ref={leftRef} className={`about-head fade-up ${leftIn ? 'visible' : ''}`}>
          <p className="section-label">Our Story</p>
          <h2 className="section-title">
            BUILT ON TRUST,
            <br />
            <span className="about-title-accent">BACKED BY RESULTS</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left — story + owners */}
          <div ref={leftRef} className={`about-left fade-up delay-1 ${leftIn ? 'visible' : ''}`}>
            <p className="about-body">
              First Call Plumbing was founded on a simple idea: South Florida's commercial
              property owners and general contractors deserve a plumbing partner who shows
              up on time, communicates clearly, and delivers work that passes inspection
              the first time — every time.
            </p>
            <p className="about-body">
              Operating out of Fort Lauderdale and serving all of Palm Beach, Broward, and
              Miami-Dade counties, our team brings decades of combined experience on
              projects ranging from small restaurant tenant improvements to large-scale
              commercial new construction.
            </p>

            {/* Owners */}
            <div className="owners">
              {OWNERS.map((o) => (
                <div key={o.name} className="owner-card">
                  <div className="owner-avatar">{o.initials}</div>
                  <div className="owner-info">
                    <div className="owner-name">{o.name}</div>
                    <div className="owner-title">{o.title}</div>
                    <p className="owner-bio">{o.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="about-logo-card">
              <img src={logo} alt="First Call Plumbing Business Card" className="about-logo-img" />
            </div>
          </div>

          {/* Right — why us */}
          <div ref={rightRef} className={`about-right fade-up delay-2 ${rightIn ? 'visible' : ''}`}>
            <div className="why-grid">
              {WHY.map((w, i) => (
                <div key={i} className="why-item">
                  <div className="why-icon">{w.icon}</div>
                  <div>
                    <h4 className="why-title">{w.title}</h4>
                    <p className="why-text">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-box">
              <p className="about-cta-eyebrow">READY TO GET STARTED?</p>
              <h3 className="about-cta-title">Let's talk about your project</h3>
              <p className="about-cta-sub">
                Call or email us for a free, no-pressure estimate. We respond same day.
              </p>
              <div className="about-cta-actions">
                <a href="tel:9547382255" className="about-cta-primary">
                  954-738-CALL
                </a>
                <a href="mailto:info@firstcallplumbingfl.com" className="about-cta-secondary">
                  info@firstcallplumbingfl.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
