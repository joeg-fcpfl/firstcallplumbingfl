import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Testimonials.css'

const REVIEWS = [
  {
    name: 'Jade',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'First Call Plumbing did an amazing job all around! They showed up on time, were really friendly, and got the work done efficiently. I\'ll definitely call them again for any future plumbing needs and highly recommend them to anyone looking for a reliable plumber.',
  },
  {
    name: 'Ashley Savarick',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'Gordon is absolutely the best! He helped us when our water heater broke and took care of some internal plumbing issues with ease and professionalism. He\'s knowledgeable, responsive, and always goes above and beyond to get the job done.',
  },
  {
    name: 'Tim Starkey',
    role: 'Google Review · Local Guide',
    company: 'Pompano Beach, FL',
    city: 'Pompano Beach, FL',
    stars: 5,
    text: 'Installed a tankless water heater for me. Works fantastic — made some room in my garage too. Goodbye old water tank. Great guy to work with.',
  },
  {
    name: 'Ronald',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'I hired First Call Plumbing on several occasions. They came out to replace my water heater, remove a stuck toy from the kids\' toilet, and jet the old cast iron pipes. The experience on each call was excellent from start to finish.',
  },
  {
    name: 'Nancy Mallinger',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'Gordon did an amazing job on my bathroom renovation. I\'ve also used him on multiple projects. I highly recommend him and his company.',
  },
  {
    name: 'Max M.',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'Gordon and his team are amazing. Came out quick for a water heater leak and got the job done the same day.',
  },
  {
    name: 'Joe Graubart',
    role: 'Google Review · Local Guide',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'First Call Plumbing completed lots of plumbing for me over a one year period while renovations took place — starting with a water heater replacement and main shut off valve. Great work throughout the entire project.',
  },
  {
    name: 'YRM Custom',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'We\'ve called First Call Plumbing several times for different toilet issues and they\'ve been great every time. They are fast, show up on time, and explain the problem clearly. Each repair has been done right the first time.',
  },
  {
    name: 'Michael Carter',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'I have used First Call several times since moving in. I have always been impressed by their service and would highly recommend them.',
  },
  {
    name: 'Javi Colina',
    role: 'Google Review',
    company: 'Fort Lauderdale, FL',
    city: 'Fort Lauderdale, FL',
    stars: 5,
    text: 'Excellent service!',
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
            WHAT OUR
            <br />CUSTOMERS SAY
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
            <a className="test-badge" href="https://www.google.com/search?q=first+call+plumbing#lrd=0x695a830773065c87:0x8453e6a11b50f816,1,,,," target="_blank" rel="noopener noreferrer">Google Verified</a>
            <span className="test-badge">State Licensed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
