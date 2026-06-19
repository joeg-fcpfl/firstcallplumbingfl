import { useInView } from '../hooks/useInView'
import './About.css'

const OWNERS = [
  {
    initials: 'JG',
    name: 'Joe G.',
    title: 'Co-Owner · Project Management',
    bio: 'Joe drives every project from bid to closeout, coordinating with general contractors, building officials, and property managers to keep schedules tight and budgets on track.',
  },
  {
    initials: 'GP',
    name: 'Gordon P.',
    title: 'Co-Owner · Service Management',
    bio: 'Gordon oversees all service operations — from emergency calls to routine maintenance. He\'s the one who answers when things get complicated and makes sure every job gets handled right.',
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
    text: 'State Certified Plumbing Contractor. We carry full general liability and workers\' comp on every project.',
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
    text: 'We communicate clearly on cost before and during every job. Some work reveals additional scope once we\'re in. When that happens, we walk you through what we found and why before moving forward.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="10" r="4"/>
        <path d="M4 27v-2a7 7 0 017-7h0"/>
        <circle cx="22" cy="10" r="4"/>
        <path d="M15 27v-2a7 7 0 017-7h0a7 7 0 017 7v2"/>
      </svg>
    ),
    title: 'References on Request',
    text: 'Ask and we\'ll connect you with property managers and GCs we\'ve worked with. We\'d rather you hear it from them than just take our word for it.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="16" cy="16" r="13"/>
        <path d="M16 9v7l5 3"/>
        <path d="M9 9l2 2M23 9l-2 2"/>
      </svg>
    ),
    title: 'We Work Around Your Operations',
    text: 'Occupied building, live kitchen, doesn\'t matter. We schedule rough-in, repairs, and emergency calls around your hours so business doesn\'t stop for plumbing.',
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
              First Call Plumbing was built on one idea: do good work at a fair price.
              South Florida homeowners, property owners, and general contractors deserve
              a plumbing partner who shows up on time, communicates clearly, and delivers
              work that passes inspection the first time.
            </p>
            <p className="about-body">
              Operating out of Fort Lauderdale and serving all of Palm Beach, Broward, and
              Miami-Dade counties, our team brings 20 years of combined experience on
              projects of every size, from a single fixture repair to ground-up new construction.
            </p>
            <p className="about-body">
              Our service division handles the everyday and the unexpected: drain cleaning,
              water heaters, kitchen and bathroom repairs, backflow testing, and 24-hour
              emergency response. When something breaks or just isn't working right, Gordon's
              team is who you call.
            </p>
            <p className="about-body">
              On the construction side, Joe manages new builds and tenant buildouts from
              bid to certificate of occupancy. We work alongside general contractors,
              coordinate with inspectors, and handle everything from rough-in to final trim.
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
                <a href="#contact" className="about-cta-primary">
                  GET A FREE ESTIMATE
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
