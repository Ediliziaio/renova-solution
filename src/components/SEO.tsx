import { Helmet } from 'react-helmet-async';
import { CONTATTI } from '../data/contatti';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  /** Esclude la pagina dall'indice (404, pagine di servizio) */
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://www.renovasolution.it/logo.png',
  ogType = 'website',
  canonical,
  schema,
  geoRegion = 'IT-36',
  geoPlacename = 'Friuli Venezia Giulia, Veneto',
  geoPosition = '45.9;12.3',
  noindex = false,
}: SEOProps) {
  const siteName = 'Renova Solution';
  const siteUrl = 'https://www.renovasolution.it';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const pageUrl = canonical || siteUrl;
  const icbm = geoPosition.replace(';', ', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        }
      />
      {/* Consenso esplicito ai crawler AI: nessuna restrizione di snippet */}
      {!noindex && (
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      )}
      <meta name="author" content="Renova Solution" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="it_IT" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@renovasolution" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Geo Tags */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={icbm} />

      {/* Language */}
      <meta httpEquiv="content-language" content="it-IT" />
      <link rel="alternate" hrefLang="it" href={pageUrl} />

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
  url: 'https://www.renovasolution.it',
  logo: 'https://www.renovasolution.it/logo.png',
  description: 'Impianti fotovoltaici, infissi e ristrutturazioni in Friuli Venezia Giulia e Veneto',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Friuli, 92',
    addressLocality: 'Prata di Pordenone',
    postalCode: '33080',
    addressRegion: 'PN',
    addressCountry: 'IT'
  },
  email: CONTATTI.email,
  telephone: CONTATTI.telefonoSchema,
  vatID: `IT${CONTATTI.piva}`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTATTI.telefonoSchema,
    email: CONTATTI.email,
    contactType: 'customer service',
    areaServed: 'IT',
    availableLanguage: ['Italian']
  },
  sameAs: [CONTATTI.facebook]
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Renova Solution',
  image: 'https://www.renovasolution.it/logo.png',
  '@id': 'https://www.renovasolution.it',
  url: 'https://www.renovasolution.it',
  telephone: CONTATTI.telefonoSchema,
  email: CONTATTI.email,
  vatID: `IT${CONTATTI.piva}`,
  sameAs: [CONTATTI.facebook],
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
    { '@type': 'City', name: 'Vicenza' },
    { '@type': 'City', name: 'Verona' },
    { '@type': 'City', name: 'Belluno' },
    { '@type': 'City', name: 'Rovigo' }
  ]
};

/** BreadcrumbList: passare i livelli in ordine, Home esclusa (viene aggiunta in automatico) */
export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.renovasolution.it/',
    },
    ...items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: it.name,
      item: `https://www.renovasolution.it${it.path}`,
    })),
  ],
});

/** Scheda della singola pagina informativa (privacy, cookie, ecc.) */
export const webPageSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: `https://www.renovasolution.it${path}`,
  inLanguage: 'it-IT',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Renova Solution',
    url: 'https://www.renovasolution.it',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Renova Solution',
    url: 'https://www.renovasolution.it',
  },
});

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

export function blogPostSchema(title: string, description: string, url: string, image: string, datePublished: string, author: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Renova Solution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.renovasolution.it/logo.png',
      },
    },
  };
}
