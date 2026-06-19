import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Schema from '../components/Schema'
import './AudiencePicker.css'

export default function AudiencePicker() {
  return (
    <>
      <Helmet>
        <title>First Call Plumbing | South Florida Commercial & Residential Plumber</title>
        <meta
          name="description"
          content="First Call Plumbing serves South Florida businesses and homeowners across Palm Beach, Broward, and Miami-Dade counties. Licensed CFC1432753."
        />
        <link rel="canonical" href="https://firstcallplumbingfl.com/" />
      </Helmet>
      <Schema pageUrl="https://firstcallplumbingfl.com/" />

      <section className="picker">
        <div className="container picker-inner">
          <p className="section-label">First Call Plumbing</p>
          <h1 className="picker-title">WHO ARE WE HELPING TODAY?</h1>
          <p className="picker-sub">
            South Florida licensed plumbing, for businesses and homeowners alike.
          </p>

          <div className="picker-grid">
            <Link to="/commercial" className="picker-card picker-card-commercial">
              <span className="picker-card-label">For Businesses</span>
              <h2 className="picker-card-title">Commercial</h2>
              <p className="picker-card-desc">
                New construction, tenant buildouts, backflow testing, and 24-hour
                emergency response for properties across the tri-county area.
              </p>
              <span className="picker-card-cta">I need a plumber for my business →</span>
            </Link>

            <Link to="/residential" className="picker-card picker-card-residential">
              <span className="picker-card-label">For Homeowners</span>
              <h2 className="picker-card-title">Residential</h2>
              <p className="picker-card-desc">
                Drain cleaning, water heaters, leak detection, and emergency
                plumbing for your home, done right and respectful of your space.
              </p>
              <span className="picker-card-cta">I need a plumber for my home →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
