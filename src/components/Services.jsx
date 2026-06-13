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
    desc: 'Full rough-in and finish plumbing for commercial buildings, warehouses, office parks, mixed-use developments, and new homes — from foundation to certificate of occupancy. We work alongside GCs from day one to keep your project on schedule.',
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
    title: 'Tenant Buildouts',
    tag: 'TI & Buildouts',
    desc: 'Restaurants, retail, medical offices, and corporate suites. We scope, permit, and execute plumbing for tenant improvements coordinated with your general contractor — on time and on budget.',
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
    title: 'Backflow Testing',
    tag: 'Testing & Certification',
    desc: 'Annual backflow preventer testing, repair, and certification for commercial properties. Our licensed testers file the paperwork and keep your property in compliance with local and state codes — no follow-up needed.',
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
    desc: 'Grease interceptor design, installation, and scheduled maintenance for restaurants and food service facilities. We handle permits, proper sizing, and health department requirements so your kitchen stays operational.',
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
    title: 'Gas Lines',
    tag: 'Natural Gas & LP',
    desc: 'Natural gas and LP gas piping for commercial kitchens, HVAC systems, generators, pool heaters, and industrial equipment. Underground and overhead installations, fully permitted and pressure-tested.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40 L8 16 L24 6 L40 16 L40 40 Z"/>
        <path d="M16 40 L16 28 L24 24 L32 28 L32 40"/>
        <line x1="24" y1="6" x2="24" y2="24"/>
        <path d="M12 22 L16 20 M36 22 L32 20"/>
      </svg>
    ),
    title: 'Remodels',
    tag: 'Renovations & Upgrades',
    desc: 'Replumbing and system upgrades for commercial and residential remodels. Whether you\'re reconfiguring a layout, expanding a space, or modernizing aging infrastructure, we handle the full plumbing scope from demo to finish.',
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
    title: 'Drain Cleaning',
    tag: 'Hydro Jetting & Snaking',
    desc: 'High-pressure hydro jetting and mechanical snaking for clogged drains, sewer lines, floor drains, and grease-blocked lines. Fast response, minimal disruption — for both commercial and residential.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="14" width="30" height="22" rx="3"/>
        <path d="M34 20 L44 14 L44 34 L34 28"/>
        <circle cx="19" cy="25" r="6"/>
        <circle cx="19" cy="25" r="2.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'Video Sewer Inspection',
    tag: 'Camera Inspection',
    desc: 'Camera-equipped sewer line inspections to locate blockages, root intrusion, cracks, and pipe deterioration before they become major problems. You get clear footage and a straight answer on what\'s going on underground.',
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
    title: 'Water Heaters',
    tag: 'Install, Service & Tankless',
    desc: 'Tank and tankless water heater installation, repair, and maintenance for homes, multi-family buildings, and commercial facilities. Tankless conversions available — reduce energy costs, free up space, and get endless hot water.',
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
    title: '24-Hour Service',
    tag: 'Emergency Response',
    desc: 'Plumbing emergencies don\'t wait for business hours. We\'re available around the clock for burst pipes, sewer backups, gas leaks, and any situation that can\'t wait until Monday morning.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 38 Q10 28 16 24 Q20 22 24 22"/>
        <path d="M24 22 Q30 20 34 16"/>
        <path d="M34 10 Q40 10 40 16 Q40 22 34 22 Q28 22 28 16 Q28 10 34 10"/>
        <path d="M8 42 L18 32"/>
        <line x1="12" y1="38" x2="8" y2="42"/>
      </svg>
    ),
    title: 'Kitchen & Bathroom Repairs',
    tag: 'Fixtures & Repairs',
    desc: 'Faucet and fixture repair or replacement, toilet rebuilds, sink installs, supply line repairs, and all kitchen and bathroom plumbing. Done right the first time — no callbacks, no excuses.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="32" rx="2"/>
        <line x1="6" y1="20" x2="42" y2="20"/>
        <line x1="16" y1="6" x2="16" y2="14"/>
        <line x1="32" y1="6" x2="32" y2="14"/>
        <line x1="14" y1="28" x2="18" y2="28"/>
        <line x1="23" y1="28" x2="27" y2="28"/>
        <line x1="32" y1="28" x2="36" y2="28"/>
        <line x1="14" y1="34" x2="18" y2="34"/>
        <line x1="23" y1="34" x2="27" y2="34"/>
      </svg>
    ),
    title: 'Preventative Maintenance',
    tag: 'Inspections & Upkeep',
    desc: 'Scheduled plumbing inspections and upkeep to catch small issues before they turn into expensive ones. A good fit for property managers and facility owners who want to stay ahead of repairs rather than react to them.',
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
            PLUMBING
            <br />
            <span className="services-title-outline">BUILT TO PERFORM</span>
          </h2>
          <p className="services-sub">
            From ground-up construction to kitchen repairs, First Call Plumbing handles
            it all across South Florida's tri-county area — on time, on budget, and built to last.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} index={i} />
          ))}
        </div>

        <div className="services-footer">
          <p>Don't see your project type? <strong>We do it all.</strong></p>
          <a href="#contact" className="services-cta">
            REQUEST A CUSTOM QUOTE
          </a>
        </div>
      </div>
    </section>
  )
}
