import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <section style={{ padding: '120px 24px', textAlign: 'center' }}>
      <Helmet>
        <title>404 - Page Not Found | First Call Plumbing</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-dark)' }}>
        PAGE NOT FOUND
      </h1>
      <p style={{ color: 'var(--text-med)', margin: '16px 0 32px' }}>
        Call 954-738-CALL or head back to the homepage.
      </p>
      <Link to="/" style={{ color: 'var(--amber)', fontWeight: 600 }}>
        Back to Home
      </Link>
    </section>
  )
}
