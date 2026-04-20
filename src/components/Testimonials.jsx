import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Testimonials.css'

const REVIEWS = [
  {
    name: 'Marcus Rivera',
    role: 'Director of Facilities',
    company: 'Pinnacle Property Group',
    city: 'Boca Raton, FL',
    stars: 5,
    text: 'First Call has been our go-to commercial plumber for three portfolio properties now. They handled the full rough-in on our Boca office park — ahead of schedule and without a single failed inspection. Joe is incredibly communicative and the crew is professional from start to finish.',
  },
  {
    name: 'Sandra Mehta',
    role: 'Owner',
    company: 'Coastline Bistro Group',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'We opened two restaurant locations in 2023 and First Call did both. Grease trap installation, gas lines, and all the rough-in work. They know the county requirements inside and out. Gordon kept us on schedule when the GC was running behind — couldn\'t have done it without them.',
  },
  {
    name: 'Derek Fontaine',
    role: 'Project Manager',
    company: 'Sunstate Commercial Builders',
    city: 'Miami, FL',
    stars: 5,
    text: 'As a general contractor, I\'ve worked with a lot of plumbing subs. First Call is one of the few that actually shows up when they say they will, submits RFIs quickly, and doesn\'t leave punch list items hanging. They\'re on every bid list we have now.',
  },
  {
    name: 'Patricia Okonkwo',
    role: 'Regional Facilities Manager',
    company: 'Solaris Hospitality — South FL Hotels',
    city: 'West Palm Beach, FL',
    stars: 5,
    text: 'We had an emergency backflow failure at one of our hotels on a Friday afternoon. First Call had a team on-site within two hours and the system was certified and back online before the weekend rush. Their response time and professionalism under pressure is unmatched.',
  },
  {
    name: 'Thomas Kramer',
    role: 'VP of Construction',
    company: 'Emerald Coast Development',
    city: 'Deerfield Beach, FL',
    stars: 5,
    text: 'We\'ve worked with First Call on four new construction projects. From permit submission to final inspection, they handle everything. Their knowledge of Broward County building department processes alone saves us weeks on every project.',
  },
  {
    name: 'Angela Soto',
    role: 'Property Manager',
    company: 'Metropolitan Office Suites',
    city: 'Coral Gables, FL',
    stars: 5,
    text: 'Our annual backflow testing, quarterly drain maintenance, and two major tenant buildouts have all been handled by First Call. Consistent quality, fair pricing, and they always leave the job site clean. Our tenants never even know they were there.',
  },
]

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [headRef, headIn] = useInView()

  const prev = () => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setActive((a) => (a + 1) % REVIEWS.length)

  const r = REVIEWS[active]

  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <div ref={headRef} className={`test-head fade-up ${headIn ? 'visible' : ''}`}>
          <p className="section-label">Client Reviews</p>
          <h2 className="section-title light">
            WHAT SOUTH FLORIDA
            <br />CONTRACTORS SAY
          </h2>
        </div>

        {/* Featured large review */}
        <div className="test-featured">
          <div className="test-quote-icon" aria-hidden="true">"</div>
          <Stars count={r.stars} />
          <p className="test-text">{r.text}</p>
          <div className="test-author">
            <div className="test-avatar">{r.name.split(' ').map(n => n[0]).join('')}</div>
            <div>
              <div className="test-name">{r.name}</div>
              <div className="test-role">{r.role} · {r.company}</div>
              <div className="test-city">{r.city}</div>
            </div>
          </div>
          <div className="test-nav">
            <button className="test-nav-btn" onClick={prev} aria-label="Previous review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="test-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`test-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button className="test-nav-btn" onClick={next} aria-label="Next review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Grid of remaining reviews */}
        <div className="test-grid">
          {REVIEWS.filter((_, i) => i !== active).slice(0, 3).map((rv, i) => (
            <div key={rv.name} className="test-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <Stars count={rv.stars} />
              <p className="test-card-text">{rv.text.slice(0, 180)}…</p>
              <div className="test-card-author">
                <div className="test-card-avatar">{rv.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <div className="test-card-name">{rv.name}</div>
                  <div className="test-card-role">{rv.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating bar */}
        <div className="test-rating-bar">
          <div className="test-rating-left">
            <Stars count={5} />
            <span className="test-rating-num">5.0</span>
            <span className="test-rating-label">Based on verified reviews</span>
          </div>
          <div className="test-rating-badges">
            <span className="test-badge">Google Verified</span>
            <span className="test-badge">BBB Accredited</span>
            <span className="test-badge">State Licensed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
