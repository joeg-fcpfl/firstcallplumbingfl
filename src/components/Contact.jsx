import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

const SERVICES = [
  'New Construction / Ground-Up',
  'Tenant Improvement / Buildout',
  'Backflow Prevention & Testing',
  'Grease Trap Installation / Service',
  'Commercial Water Heater',
  'Gas Line Services',
  'Hydro Jetting / Drain Cleaning',
  'Sewer & Water Main',
  'Code Compliance / Inspection',
  'Preventive Maintenance',
  'Emergency Service',
  'Other',
]

const INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.91a19.79 19.79 0 01-3.07-8.67A2 2 0 012.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '954-738-CALL (2255)',
    href: 'tel:9547382255',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@firstcallplumbingfl.com',
    href: 'mailto:info@firstcallplumbingfl.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: '7027 W Broward Blvd #392\nFort Lauderdale, FL 33317',
    href: 'https://maps.google.com/?q=7027+W+Broward+Blvd+Fort+Lauderdale+FL',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Business Hours',
    value: 'Monday – Friday\n8:00 AM – 5:00 PM EST',
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M8 40 L8 8 L32 8 L40 16 L40 40 Z" transform="scale(0.5) translate(4,4)"/>
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <polyline points="14 9 9 15 7 13"/>
      </svg>
    ),
    label: 'License',
    value: 'State Certified Contractor',
    href: null,
  },
]

export default function Contact() {
  const [formRef, formIn] = useInView()
  const [infoRef, infoIn] = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', service: '', county: '', message: '',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-bg" aria-hidden="true" />

      <div className="container">
        <div className="contact-head">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title light">
            REQUEST A
            <br />
            <span className="contact-title-accent">FREE ESTIMATE</span>
          </h2>
          <p className="contact-head-sub">
            Fill out the form and we'll get back to you within one business day.
            Prefer to talk? Call us directly at <a href="tel:9547382255" className="contact-phone-link">954-738-CALL</a>.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div ref={formRef} className={`contact-form-wrap fade-up ${formIn ? 'visible' : ''}`}>
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name" type="text" className="form-input" placeholder="John Smith"
                      value={form.name} onChange={set('name')} required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input
                      id="company" type="text" className="form-input" placeholder="ABC Construction LLC"
                      value={form.company} onChange={set('company')}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone *</label>
                    <input
                      id="phone" type="tel" className="form-input" placeholder="(954) 000-0000"
                      value={form.phone} onChange={set('phone')} required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      id="email" type="email" className="form-input" placeholder="john@company.com"
                      value={form.email} onChange={set('email')} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Needed *</label>
                    <select id="service" className="form-select" value={form.service} onChange={set('service')} required>
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="county">County</label>
                    <select id="county" className="form-select" value={form.county} onChange={set('county')}>
                      <option value="">Select county…</option>
                      <option value="Palm Beach">Palm Beach County</option>
                      <option value="Broward">Broward County</option>
                      <option value="Miami-Dade">Miami-Dade County</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Project Details *</label>
                  <textarea
                    id="message" className="form-textarea" rows={5}
                    placeholder="Describe your project — location, scope, timeline, any specific requirements…"
                    value={form.message} onChange={set('message')} required
                  />
                </div>

                <button type="submit" className={`form-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                  {loading ? (
                    <>
                      <span className="form-spinner" />
                      SENDING…
                    </>
                  ) : (
                    <>
                      SEND MY REQUEST
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-disclaimer">
                  We respond within one business day. No spam, no pressure.
                </p>
              </form>
            ) : (
              <div className="form-success">
                <div className="form-success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out. Joe or Gordon will be in touch within one business day. If it's urgent, call us directly at <a href="tel:9547382255">954-738-CALL</a>.</p>
                <button className="form-reset" onClick={() => { setSubmitted(false); setForm({ name:'', company:'', phone:'', email:'', service:'', county:'', message:'' }) }}>
                  Send Another Request
                </button>
              </div>
            )}
          </div>

          {/* Info sidebar */}
          <div ref={infoRef} className={`contact-info fade-up delay-2 ${infoIn ? 'visible' : ''}`}>
            {INFO.map((item) => (
              <div key={item.label} className="info-row">
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="info-value link" style={{ whiteSpace: 'pre-line' }}>
                      {item.value}
                    </a>
                  ) : (
                    <div className="info-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="info-cta-box">
              <p className="info-cta-eyebrow">NEED IMMEDIATE HELP?</p>
              <h4 className="info-cta-title">Call Us Directly</h4>
              <a href="tel:9547382255" className="info-cta-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.91a19.79 19.79 0 01-3.07-8.67A2 2 0 012.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                954-738-CALL (2255)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
