import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://firstcallplumbingfl.com'

const BASE_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'First Call Plumbing',
  telephone: '+1-954-738-2255',
  url: BASE_URL,
  email: 'info@firstcallplumbingfl.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2191 North Powerline Rd #2',
    addressLocality: 'Pompano Beach',
    addressRegion: 'FL',
    postalCode: '33069',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Palm Beach County, FL' },
    { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
    { '@type': 'AdministrativeArea', name: 'Miami-Dade County, FL' },
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'Florida Certified Plumbing Contractor',
    identifier: 'CFC1432753',
  },
}

export default function Schema({ pageUrl, areaOverride, service }) {
  const business = {
    ...BASE_BUSINESS,
    ...(pageUrl ? { '@id': pageUrl, url: pageUrl } : {}),
    ...(areaOverride
      ? {
          areaServed: {
            '@type': 'AdministrativeArea',
            name: areaOverride.name,
            containsPlace: areaOverride.cities.map((c) => ({
              '@type': 'City',
              name: c,
            })),
          },
        }
      : {}),
  }

  const graphs = [business]

  if (service) {
    graphs.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      description: service.description,
      provider: { '@type': 'Plumber', name: 'First Call Plumbing', telephone: '+1-954-738-2255' },
      areaServed: BASE_BUSINESS.areaServed,
    })
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(graphs.length > 1 ? graphs : graphs[0])}
      </script>
    </Helmet>
  )
}
