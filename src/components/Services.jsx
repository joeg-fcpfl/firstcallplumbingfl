import { useInView } from '../hooks/useInView'
import './Services.css'

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="36" height="24" rx="2"/>
        <path d="M16 18V12a8 8 0 0116 0v6"/>
        <line x1="24" y1="28" x2="24" y2="34"/>
        <circle cx="24" cy="27" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'New Construction',
    tag: 'Ground-Up Builds',
    desc: 'Full rough-in and finish plumbing for commercial buildings, warehouses, office parks, and mixed-use developments from foundation to certificate of occupancy.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="32" rx="3"/>
        <line x1="4" y1="18" x2="44" y2="18"/>
        <line x1="16" y1="18" x2="16" y2="40"/>
        <path d="M22 28h8M22 33h5"/>
      </svg>
    ),
    title: 'Tenant Improvements',
    tag: 'TI & Buildouts',
    desc: 'Restaurants, retail, medical offices, and corporate suites. We coordinate with GCs to deliver precise plumbing scopes on schedule and within budget.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="4"/>
        <line x1="24" y1="6" x2="24" y2="14"/>
        <line x1="24" y1="34" x2="24" y2="42"/>
        <line x1="6" y1="24" x2="14" y2="24"/>
        <line x1="34" y1="24" x2="42" y2="24"/>
      </svg>
    ),
    title: 'Backflow Prevention',
    tag: 'Testing & Certification',
    desc: 'Annual backflow preventer testing, repair, and certification for commercial properties. Fully licensed testers — keep your property in compliance with local codes.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="20" width="28" height="16" rx="2"/>
        <path d="M16 20v-4a8 4 0 0116 0v4"/>
        <line x1="24" y1="36" x2="24" y2="42"/>
        <line x1="18" y1="42" x2="30" y2="42"/>
        <line x1="14" y1="28" x2="34" y2="28"/>
      </svg>
    ),
    title: 'Grease Trap Services',
    tag: 'Install & Maintenance',
    desc: 'Grease interceptor design, installation, and scheduled maintenance for restaurants and food service facilities. We handle permits and health inspections.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 38 Q8 10 24 10 Q40 10 40 38"/>
        <line x1="14" y1="30" x2="34" y2="30"/>
        <line x1="18" y1="38" x2="30" y2="38"/>
        <path d="M20 24 Q24 18 28 24"/>
      </svg>
    ),
    title: 'Gas Line Services',
    tag: 'Commercial Gas',
    desc: 'Natural gas and LP gas piping for commercial kitchens, HVAC systems, generators, and industrial equipment. Underground and overhead installations.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 38 C6 28 12 22 24 22 C36 22 42 28 42 38"/>
        <line x1="24" y1="22" x2="24" y2="10"/>
        <path d="M18 16 L24 10 L30 16"/>
        <line x1="12" y1="38" x2="36" y2="38"/>
        <path d="M16 32 Q24 26 32 32"/>
      </svg>
    ),
    title: 'Hydro Jetting',
    tag: 'Drain Cleaning',
    desc: 'High-pressure hydro jetting for commercial sewer lines, floor drains, and grease-clogged lines. Camera inspection included with every major service call.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="12" width="32" height="12" rx="2"/>
        <rect x="8" y="26" width="32" height="12" rx="2"/>
        <line x1="16" y1="12" x2="16" y2="8"/>
        <line x1="32" y1="12" x2="32" y2="8"/>
        <line x1="16" y1="38" x2="16" y2="42"/>
        <line x1="32" y1="38" x2="32" y2="42"/>
        <line x1="40" y1="18" x2="44" y2="18"/>
        <line x1="40" y1="32" x2="44" y2="32"/>
      </svg>
    ),
    title: 'Commercial Water Heaters',
    tag: 'Install & Service',
    desc: 'Commercial tank and tankless water heater systems for hotels, apartment complexes, laundromats, and institutional facilities. Same-day service available.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 42 L10 20 M38 42 L38 20"/>
        <path d="M6 20 L24 8 L42 20"/>
        <rect x="18" y="28" width="12" height="14"/>
        <path d="M22 28 L22 22 M26 28 L26 22"/>
        <line x1="14" y1="30" x2="18" y2="30"/>
        <line x1="30" y1="30" x2="34" y2="30"/>
      </svg>
    ),
    title: 'Sewer & Water Mains',
    tag: 'Repair & Replacement',
    desc: 'Trenchless and open-cut sewer line repair, water main replacement, and lateral connections for commercial properties. Permitted work, code-compliant.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40 L8 8 L32 8 L40 16 L40 40 Z"/>
        <path d="M32 8 L32 16 L40 16"/>
        <line x1="14" y1="22" x2="34" y2="22"/>
        <line x1="14" y1="28" x2="34" y2="28"/>
        <line x1="14" y1="34" x2="24" y2="34"/>
        <polyline points="28 33 31 36 36 30"/>
      </svg>
    ),
    title: 'Code Compliance',
    tag: 'Inspections & Upgrades',
    desc: 'Plumbing inspections, permit-ready drawings, and system upgrades to bring existing commercial properties into full Florida Building Code compliance.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18"/>
        <path d="M24 14 L24 24 L32 30"/>
        <path d="M14 8 L8 14"/>
        <path d="M34 8 L40 14"/>
      </svg>
    ),
    title: 'Preventive Maintenance',
    tag: 'Scheduled Programs',
    desc: 'Custom PM contracts for property managers and facility directors. Regular inspections, drain cleaning, and equipment checks keep you ahead of costly repairs.',
  },
]

function ServiceCard({ s, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`service-card fade-up delay-${(index % 4) + 1} ${inView ? 'visible' : ''}`}
    >
      <div className="service-icon">{s.icon}</div>
      <div className="service-tag">{s.tag}</div>
      <h3 className="service-title">{s.title}</h3>
      <p className="service-desc">{s.desc}</p>
      <div className="service-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  )
}

export default function Services() {
  const [headRef, headInView] = useInView()

  return (
    <section id="services" className="services">
      <div className="container">
        <div
          ref={headRef}
          className={`services-head fade-up ${headInView ? 'visible' : ''}`}
        >
          <p className="section-label">What We Do</p>
          <h2 className="section-title">
            COMMERCIAL PLUMBING
            <br />
            <span className="services-title-outline">BUILT TO PERFORM</span>
          </h2>
          <p className="services-sub">
            From ground-up construction to complex system retrofits, First Call Plumbing delivers
            commercial-grade plumbing solutions across South Florida's tri-county area.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} index={i} />
          ))}
        </div>

        <div className="services-footer">
          <p>Don't see your project type? <strong>We do it all.</strong></p>
          <a href="tel:9547382255" className="services-cta">
            CALL FOR A CUSTOM QUOTE
          </a>
        </div>
      </div>
    </section>
  )
}
