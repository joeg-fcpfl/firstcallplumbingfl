import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import './Stats.css'

const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience', sub: 'Combined industry experience' },
  { value: 1000, suffix: '+', label: 'Projects Completed', sub: 'From Miami to West Palm Beach' },
  { value: 3,   suffix: '',  label: 'Counties Covered', sub: 'Palm Beach · Broward · Miami-Dade' },
  { value: 100, suffix: '%', label: 'Licensed & Insured', sub: 'Licensed & insured in Florida' },
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
