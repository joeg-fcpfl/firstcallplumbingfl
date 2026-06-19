import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Schema from '../components/Schema'
import { SERVICES } from '../components/Services'
import { SERVICE_SLUGS } from '../data/slugs'
import { SERVICE_COPY } from '../data/serviceCopy'
import './ServicePage.css'

const BASE_URL = 'https://firstcallplumbingfl.com'

export default function ServicePage() {
  const { slug } = useParams()
  const title = Object.keys(SERVICE_SLUGS).find((t) => SERVICE_SLUGS[t] === slug)
  const service = SERVICES.find((s) => s.title === title)

  if (!service) return <Navigate to="/404" replace />

  const copy = SERVICE_COPY[title]
  const pageUrl = `${BASE_URL}/services/${slug}`

  return (
    <>
      <Helmet>
        <title>{title} | First Call Plumbing | South Florida</title>
        <meta name="description" content={service.desc} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Schema pageUrl={pageUrl} service={{ name: title, description: service.desc }} />

      <section className="service-page">
        <div className="container">
          <nav className="service-page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>{title}</span>
          </nav>

          <div className="service-page-head">
            <div className="service-page-icon">{service.icon}</div>
            <p className="service-page-tag">{service.tag}</p>
            <h1 className="service-page-title">{title}</h1>
            <p className="service-page-lede">{service.desc}</p>
          </div>

          <div className="service-page-body">
            {copy.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="service-page-cta">
            <p>Need {title.toLowerCase()} in South Florida?</p>
            <Link to="/#contact" className="service-page-cta-btn">REQUEST A QUOTE</Link>
          </div>

          <div className="service-page-other">
            <h2>Other Services</h2>
            <div className="service-page-other-grid">
              {SERVICES.filter((s) => s.title !== title).slice(0, 4).map((s) => (
                <Link key={s.title} to={`/services/${SERVICE_SLUGS[s.title]}`} className="service-page-other-link">
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
