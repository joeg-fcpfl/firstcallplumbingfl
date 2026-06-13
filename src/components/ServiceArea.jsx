import { useInView } from '../hooks/useInView'
import './ServiceArea.css'

const COUNTIES = [
  {
    name: 'Palm Beach County',
    abbr: 'PBC',
    color: '#4B7BC4',
    cities: [
      'West Palm Beach', 'Boca Raton', 'Delray Beach',
      'Boynton Beach', 'Lake Worth', 'Jupiter',
      'Palm Beach Gardens',
    ],
    highlight: 'Northern Service Hub',
  },
  {
    name: 'Broward County',
    abbr: 'BWD',
    color: '#E8881A',
    cities: [
      'Fort Lauderdale', 'Hollywood', 'Pembroke Pines',
      'Miramar', 'Coral Springs', 'Pompano Beach',
      'Davie', 'Plantation', 'Deerfield Beach',
    ],
    highlight: '★ Headquarters County',
    hq: true,
  },
  {
    name: 'Miami-Dade County',
    abbr: 'MDC',
    color: '#4B7BC4',
    cities: [
      'Miami', 'Hialeah', 'Doral',
      'Aventura', 'North Miami', 'Miami Gardens',
      'North Miami Beach', 'South Beach',
    ],
    highlight: 'Southern Service Hub',
  },
]

export default function ServiceArea() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView()

  return (
    <section id="coverage" className="service-area">
      <div className="container">
        <div ref={headRef} className={`sa-head fade-up ${headIn ? 'visible' : ''}`}>
          <p className="section-label">Service Area</p>
          <h2 className="section-title">
            TRI-COUNTY
            <br />
            <span className="sa-title-accent">COVERAGE</span>
          </h2>
          <p className="sa-sub">
            From West Palm Beach to Homestead — we're licensed and fully operational
            across all three South Florida counties. One contractor, complete coverage.
          </p>
        </div>

        {/* Visual map strip */}
        <div className="sa-map-strip">
          <div className="sa-map-label north">NORTH</div>
          <div className="sa-map-counties">
            {COUNTIES.map((c) => (
              <div key={c.name} className={`sa-map-county ${c.hq ? 'sa-map-hq' : ''}`}>
                <div className="sa-map-county-fill" style={{ background: c.hq ? 'var(--orange)' : 'rgba(75,123,196,0.15)' }} />
                <span className="sa-map-abbr">{c.abbr}</span>
              </div>
            ))}
          </div>
          <div className="sa-map-label south">SOUTH</div>
          <div className="sa-map-legend">
            <span className="sa-legend-item"><span className="sa-legend-dot hq" />HQ County (Broward)</span>
            <span className="sa-legend-item"><span className="sa-legend-dot" />Full Service Area</span>
          </div>
        </div>

        {/* County cards */}
        <div ref={gridRef} className={`sa-grid ${gridIn ? 'visible' : ''}`}>
          {COUNTIES.map((county, i) => (
            <div
              key={county.name}
              className={`sa-card fade-up delay-${i + 1} ${gridIn ? 'visible' : ''} ${county.hq ? 'sa-card-hq' : ''}`}
            >
              <div className="sa-card-header">
                <div className={`sa-county-badge ${county.hq ? 'hq' : ''}`}>
                  {county.abbr}
                </div>
                <div>
                  <h3 className="sa-county-name">{county.name}</h3>
                  <div className={`sa-highlight ${county.hq ? 'hq' : ''}`}>
                    {county.highlight}
                  </div>
                </div>
              </div>
              <div className="sa-cities">
                {county.cities.map((city) => (
                  <span key={city} className="sa-city">{city}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="sa-cta">
          <div className="sa-cta-text">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Not sure if we cover your area? Give us a call — we probably do.</span>
          </div>
          <a href="#contact" className="sa-cta-btn">
            REQUEST A QUOTE
          </a>
        </div>
      </div>
    </section>
  )
}
