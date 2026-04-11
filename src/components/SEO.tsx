import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = '/logo.png',
  ogType = 'website',
  canonical,
  schema
}: SEOProps) {
  const siteName = 'Renova Solution';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Renova Solution" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IT-FR,IT-TV,IT-VE,IT-PD,IT-VI" />
      <meta name="geo.placename" content="Friuli Venezia Giulia, Veneto" />
      <meta name="geo.position" content="45.9;12.3" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

// Schema.org templates
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Renova Solution',
  url: 'https://renovasolution.it',
  logo: 'https://renovasolution.it/logo.png',
  description: 'Impianti fotovoltaici, infissi e ristrutturazioni in Friuli Venezia Giulia e Veneto',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Revedole 78/B',
    addressLocality: 'Pordenone',
    postalCode: '33170',
    addressRegion: 'PN',
    addressCountry: 'IT'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+39-393-959-6194',
    contactType: 'customer service',
    areaServed: 'IT',
    availableLanguage: ['Italian']
  },
  sameAs: [
    'https://facebook.com/renovasolution',
    'https://instagram.com/renovasolution',
    'https://linkedin.com/company/renovasolution'
  ]
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Renova Solution',
  image: 'https://renovasolution.it/logo.png',
  '@id': 'https://renovasolution.it',
  url: 'https://renovasolution.it',
  telephone: '+39-393-959-6194',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Friuli, 92',
    addressLocality: 'Prata di Pordenone',
    postalCode: '33080',
    addressRegion: 'PN',
    addressCountry: 'IT'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.9,
    longitude: 12.3
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Udine' },
    { '@type': 'City', name: 'Trieste' },
    { '@type': 'City', name: 'Gorizia' },
    { '@type': 'City', name: 'Pordenone' },
    { '@type': 'City', name: 'Treviso' },
    { '@type': 'City', name: 'Venezia' },
    { '@type': 'City', name: 'Padova' },
    { '@type': 'City', name: 'Vicenza' }
  ]
};

export const serviceSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Renova Solution'
  },
  url,
  areaServed: {
    '@type': 'State',
    name: 'Friuli Venezia Giulia, Veneto'
  }
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});
