import { useParams, Navigate } from 'react-router-dom'

export default function RedirectWithSlug({ prefix }) {
  const { slug } = useParams()
  return <Navigate to={`${prefix}/${slug}`} replace />
}
