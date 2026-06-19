import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Schema from '../components/Schema'
import { COUNTIES } from '../components/ServiceArea'
import { SERVICES } from '../components/Services'
import { AREA_SLUGS, SERVICE_SLUGS } from '../data/slugs'
import { AREA_COPY } from '../data/areaCopy'
import './AreaPage.css'

const BASE_URL = 'https://firstcallplumbingfl.com'

export default function AreaPage() {
  const { slug } = useParams()
  const name = Object.keys(AREA_SLUGS).find((n) => AREA_SLUGS[n] === slug)
  const county = COUNTIES.find((c) => c.name === name)

  if (!county) return <Navigate to="/404" replace />

  const copy = AREA_COPY[name]
  const pageUrl = `${BASE_URL}/areas/${slug}`
  const pageTitle = `Commercial Plumbing in ${county.name} | First Call Plumbing`
  const pageDesc = `Licensed commercial plumbing contractor serving ${county.name}: ${county.cities.slice(0, 4).join(', ')}, and more. ${county.hq ? 'Headquartered in Broward County. ' : ''}Call 954-738-CALL for a free estimate.`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Schema pageUrl={pageUrl} areaOverride={{ name: county.name, cities: county.cities }} />

      <section className="area-page">
        <div className="container">
          <nav className="area-page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <Link to="/#coverage">Service Area</Link> / <span>{county.name}</span>
          </nav>

          <div className="area-page-head">
            <div className={`area-page-badge ${county.hq ? 'hq' : ''}`}>{county.abbr}</div>
            <h1 className="area-page-title">{county.name}</h1>
            <p className="area-page-highlight">{county.highlight}</p>
          </div>

          <div className="area-page-body">
            {copy.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="area-page-cities">
            <h2>Cities We Serve in {county.name}</h2>
            <div className="area-page-cities-grid">
              {county.cities.map((city) => <span key={city} className="area-page-city">{city}</span>)}
            </div>
          </div>

          <div className="area-page-services">
            <h2>Services Available in {county.name}</h2>
            <div className="area-page-services-grid">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.title} to={`/services/${SERVICE_SLUGS[s.title]}`} className="area-page-service-link">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="area-page-cta">
            <p>Get a free estimate for your {county.name} project.</p>
            <Link to="/#contact" className="area-page-cta-btn">REQUEST A QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  )
}
