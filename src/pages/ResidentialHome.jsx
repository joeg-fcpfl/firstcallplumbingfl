import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Schema from '../components/Schema'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { RESIDENTIAL_SERVICES } from '../data/residentialServices'
import { RESIDENTIAL_SERVICE_SLUGS, AREA_SLUGS } from '../data/slugs'
import './ResidentialHome.css'

const WHY = [
  {
    title: 'Fast Response',
    text: 'Same-day service for most calls. When something breaks, you need a plumber now, not next week.',
  },
  {
    title: 'Upfront Pricing',
    text: "You'll know the cost before we start. No surprise charges once the job's already underway.",
  },
  {
    title: 'Respect For Your Home',
    text: "We work clean, protect your floors and furniture, and leave your home the way we found it, just without the problem.",
  },
  {
    title: 'Licensed & Insured',
    text: 'State Certified Plumbing Contractor carrying full general liability and workers\' comp on every job.',
  },
]

export default function ResidentialHome() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <Helmet>
        <title>Residential Plumber | First Call Plumbing | South Florida</title>
        <meta
          name="description"
          content="Fast, upfront residential plumbing for South Florida homeowners. Drain cleaning, water heaters, leak detection, and 24-hour emergency service. Licensed CFC1432753."
        />
        <link rel="canonical" href="https://firstcallplumbingfl.com/residential" />
      </Helmet>
      <Schema pageUrl="https://firstcallplumbingfl.com/residential" />

      <section id="hero" className="res-hero">
        <div className="container">
          <p className="section-label">For Homeowners</p>
          <h1 className="res-hero-title">
            YOUR HOME'S PLUMBING,
            <br />
            HANDLED RIGHT
          </h1>
          <p className="res-hero-sub">
            Fast response, upfront pricing, and a crew that respects your home.
            Serving homeowners across Palm Beach, Broward, and Miami-Dade counties.
          </p>
          <div className="res-hero-actions">
            <a href="tel:9547382255" className="res-hero-cta-primary">Call Now</a>
            <Link to="#contact" className="res-hero-cta-secondary">Get a Free Estimate</Link>
          </div>
        </div>
      </section>

      <section id="services" className="res-services">
        <div className="container">
          <p className="section-label">What We Fix</p>
          <h2 className="section-title">
            EVERYDAY HOME
            <br />
            <span className="res-services-title-outline">PLUMBING PROBLEMS</span>
          </h2>

          <div className="res-services-grid">
            {RESIDENTIAL_SERVICES.map((s) => (
              <Link key={s.title} to={`/residential/services/${RESIDENTIAL_SERVICE_SLUGS[s.title]}`} className="res-service-card">
                <div className="res-service-icon">{s.icon}</div>
                <div className="res-service-tag">{s.tag}</div>
                <h3 className="res-service-title">{s.title}</h3>
                <p className="res-service-desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="res-why">
        <div className="container">
          <p className="section-label">Why Homeowners Call Us</p>
          <h2 className="section-title light">WHAT TO EXPECT</h2>

          <div className="res-why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="res-why-card">
                <h3 className="res-why-title">{w.title}</h3>
                <p className="res-why-text">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="res-areas">
        <div className="container res-areas-inner">
          <p className="res-areas-label">Serving Palm Beach, Broward &amp; Miami-Dade</p>
          <div className="res-areas-links">
            {Object.entries(AREA_SLUGS).map(([name, slug]) => (
              <Link key={slug} to={`/commercial/areas/${slug}`} className="res-areas-link">{name}</Link>
            ))}
          </div>
        </div>
      </section>

      <Contact audience="residential" />
    </>
  )
}
