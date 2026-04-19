import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import './Stats.css'

const STATS = [
  { value: 25, suffix: '+', label: 'Years in Business', sub: 'Serving South Florida since 1999' },
  { value: 500, suffix: '+', label: 'Commercial Projects', sub: 'From Miami to West Palm Beach' },
  { value: 3,   suffix: '',  label: 'Counties Covered', sub: 'Palm Beach · Broward · Miami-Dade' },
  { value: 100, suffix: '%', label: 'Licensed & Insured', sub: 'Fully bonded & insured' },
]

function StatItem({ value, suffix, label, sub, active, delay }) {
  const count = useCounter(value, 1800, active)
  return (
    <div className="stat-item" style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView(0.3)

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className={`stats-grid ${inView ? 'visible' : ''}`}>
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} active={inView} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
