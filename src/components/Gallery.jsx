import { useInView } from '../hooks/useInView'
import './Gallery.css'

const PHOTOS = [
  // Add real photos here: { src: '/gallery/job-001.jpg', caption: 'Grease Trap Install — Miami' }
]

function PlaceholderTile({ index }) {
  const icons = [
    // pipe wrench
    <path key="a" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    // droplet
    <path key="b" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />,
    // settings/gear
    <><path key="c" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path key="d" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    // flame (gas)
    <path key="e" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
    // building
    <><path key="f" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z" /><path key="g" d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path key="h" d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path key="i" d="M10 6h4M10 10h4M10 14h4M10 18h4" /></>,
    // hard hat / construction
    <><path key="j" d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" /><path key="k" d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" /><path key="l" d="M4 15v-3a8 8 0 0 1 16 0v3" /></>,
  ]

  return (
    <div className="gallery-placeholder">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        {icons[index % icons.length]}
      </svg>
      <span>Photo coming soon</span>
    </div>
  )
}

export default function Gallery() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView()

  const hasPhotos = PHOTOS.length > 0
  const tiles = hasPhotos ? PHOTOS : Array.from({ length: 6 }, (_, i) => ({ _placeholder: true, index: i }))

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div ref={headRef} className={`gallery-head fade-up ${headIn ? 'visible' : ''}`}>
          <p className="section-label">Past Projects</p>
          <h2 className="section-title">
            OUR WORK
            <br />
            <span className="gallery-title-accent">IN THE FIELD</span>
          </h2>
          <p className="gallery-sub">
            Commercial plumbing built to code, on schedule, and built to last.
            From ground-up new construction to emergency repairs across South Florida.
          </p>
        </div>

        <div ref={gridRef} className={`gallery-grid ${gridIn ? 'visible' : ''}`}>
          {tiles.map((item, i) =>
            item._placeholder ? (
              <div
                key={i}
                className={`gallery-tile gallery-tile-placeholder fade-up delay-${Math.min(i + 1, 6)} ${gridIn ? 'visible' : ''}`}
              >
                <PlaceholderTile index={item.index} />
              </div>
            ) : (
              <div
                key={item.src}
                className={`gallery-tile fade-up delay-${Math.min(i + 1, 6)} ${gridIn ? 'visible' : ''}`}
              >
                <img src={item.src} alt={item.caption || 'Project photo'} loading="lazy" />
                {item.caption && <div className="gallery-caption">{item.caption}</div>}
              </div>
            )
          )}
        </div>

        <div className="gallery-cta">
          <p className="gallery-cta-text">
            More photos available upon request — contact us for project references.
          </p>
          <a href="#contact" className="gallery-cta-btn">REQUEST REFERENCES</a>
        </div>
      </div>
    </section>
  )
}
