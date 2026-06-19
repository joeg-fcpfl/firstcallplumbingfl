import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import AreaPage from './pages/AreaPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="areas/:slug" element={<AreaPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
