import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AudiencePicker from './pages/AudiencePicker'
import CommercialHome from './pages/CommercialHome'
import ServicePage from './pages/ServicePage'
import AreaPage from './pages/AreaPage'
import ResidentialHome from './pages/ResidentialHome'
import ResidentialServicePage from './pages/ResidentialServicePage'
import RedirectWithSlug from './components/RedirectWithSlug'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AudiencePicker />} />

        <Route path="commercial" element={<CommercialHome />} />
        <Route path="commercial/services/:slug" element={<ServicePage />} />
        <Route path="commercial/areas/:slug" element={<AreaPage />} />

        <Route path="residential" element={<ResidentialHome />} />
        <Route path="residential/services/:slug" element={<ResidentialServicePage />} />

        <Route path="services/:slug" element={<RedirectWithSlug prefix="/commercial/services" />} />
        <Route path="areas/:slug" element={<RedirectWithSlug prefix="/commercial/areas" />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
