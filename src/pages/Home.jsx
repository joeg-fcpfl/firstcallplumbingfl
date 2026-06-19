import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Schema from '../components/Schema'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import ServiceArea from '../components/ServiceArea'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <Helmet>
        <title>First Call Plumbing | Commercial Plumbing | South Florida</title>
        <meta
          name="description"
          content="First Call Plumbing — South Florida's premier commercial plumbing contractor. Serving Palm Beach, Broward & Miami-Dade counties. Licensed CFC1432753."
        />
        <link rel="canonical" href="https://firstcallplumbingfl.com/" />
      </Helmet>
      <Schema pageUrl="https://firstcallplumbingfl.com/" />

      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <ServiceArea />
      <Contact />
    </>
  )
}
