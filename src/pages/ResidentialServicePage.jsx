import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Schema from '../components/Schema'
import { RESIDENTIAL_SERVICES } from '../data/residentialServices'
import { RESIDENTIAL_SERVICE_SLUGS } from '../data/slugs'
import { RESIDENTIAL_SERVICE_COPY } from '../data/residentialServiceCopy'
import './ResidentialServicePage.css'

const BASE_URL = 'https://firstcallplumbingfl.com'

export default function ResidentialServicePage() {
  const { slug } = useParams()
  const title = Object.keys(RESIDENTIAL_SERVICE_SLUGS).find((t) => RESIDENTIAL_SERVICE_SLUGS[t] === slug)
  const service = RESIDENTIAL_SERVICES.find((s) => s.title === title)

  if (!service) return <Navigate to="/404" replace />

  const copy = RESIDENTIAL_SERVICE_COPY[title]
  const pageUrl = `${BASE_URL}/residential/services/${slug}`

  return (
    <>
      <Helmet>
        <title>{title} | First Call Plumbing | South Florida Residential Plumber</title>
        <meta name="description" content={service.desc} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Schema pageUrl={pageUrl} service={{ name: title, description: service.desc }} />

      <section className="res-service-page">
        <div className="container">
          <nav className="res-service-page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/residential">Home</Link> / <Link to="/residential#services">Services</Link> / <span>{title}</span>
          </nav>

          <div className="res-service-page-head">
            <div className="res-service-page-icon">{service.icon}</div>
            <p className="res-service-page-tag">{service.tag}</p>
            <h1 className="res-service-page-title">{title}</h1>
            <p className="res-service-page-lede">{service.desc}</p>
          </div>

          <div className="res-service-page-body">
            {copy.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="res-service-page-cta">
            <p>Need {title.toLowerCase()} at your home?</p>
            <Link to="/residential#contact" className="res-service-page-cta-btn">GET A FREE ESTIMATE</Link>
          </div>

          <div className="res-service-page-other">
            <h2>Other Services</h2>
            <div className="res-service-page-other-grid">
              {RESIDENTIAL_SERVICES.filter((s) => s.title !== title).slice(0, 4).map((s) => (
                <Link key={s.title} to={`/residential/services/${RESIDENTIAL_SERVICE_SLUGS[s.title]}`} className="res-service-page-other-link">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
