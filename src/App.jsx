import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <Gallery />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
