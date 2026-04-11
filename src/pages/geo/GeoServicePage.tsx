import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowRight, CheckCircle, MapPin, Phone, Sun, Home as HomeIcon, Wrench } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface GeoServicePageProps {
  provincia: string;
  provinciaSlug: string;
  regione: string;
  regioneShort: string;
  codiceISO: string;
  lat: number;
  lng: number;
  comuni: string[];
  servizio: 'fotovoltaico' | 'infissi' | 'ristrutturazioni';
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  introText: string;
  benefici: string[];
  dettaglioServizio: string;
  faqs: FAQ[];
  ctaText: string;
}

const serviceIcons = {
  fotovoltaico: Sun,
  infissi: HomeIcon,
  ristrutturazioni: Wrench,
};

const serviceImages = {
  fotovoltaico: '/images/fotovoltaico.jpg',
  infissi: '/images/infissi.jpg',
  ristrutturazioni: '/images/ristrutturazioni.jpg',
};

export default function GeoServicePage({
  provincia,
  provinciaSlug,
  regione,
  regioneShort,
  codiceISO,
  lat,
  lng,
  comuni,
  servizio,
  heroTitle,
  heroSubtitle,
  seoTitle,
  seoDescription,
  seoKeywords,
  introText,
  benefici,
  dettaglioServizio,
  faqs,
  ctaText,
}: GeoServicePageProps) {
  const Icon = serviceIcons[servizio];
  const canonicalUrl = `https://renovasolution.it/${servizio}-${provinciaSlug}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Renova Solution - ${servizio.charAt(0).toUpperCase() + servizio.slice(1)} ${provincia}`,
    image: `https://renovasolution.it${serviceImages[servizio]}`,
    '@id': canonicalUrl,
    url: canonicalUrl,
    telephone: '+39-393-959-6194',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Friuli, 92',
      addressLocality: 'Prata di Pordenone',
      postalCode: '33080',
      addressRegion: 'PN',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    },
    areaServed: {
      '@type': 'City',
      name: provincia,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: regione,
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${servizio.charAt(0).toUpperCase() + servizio.slice(1)} a ${provincia}`,
    description: seoDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Renova Solution',
      telephone: '+39-393-959-6194',
    },
    areaServed: {
      '@type': 'City',
      name: provincia,
    },
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://renovasolution.it',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: servizio.charAt(0).toUpperCase() + servizio.slice(1),
        item: `https://renovasolution.it/${servizio === 'fotovoltaico' ? 'fotovoltaico-privati' : servizio}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${servizio.charAt(0).toUpperCase() + servizio.slice(1)} ${provincia}`,
        item: canonicalUrl,
      },
    ],
  };

  const combinedSchema = [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={canonicalUrl}
        schema={combinedSchema}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={serviceImages[servizio]}
              alt={`${servizio} a ${provincia} - Renova Solution`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <MapPin className="w-4 h-4 text-[#C8E600]" />
                <span className="text-[#C8E600] text-sm font-bold uppercase tracking-wider">
                  {provincia} — {regione}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-white/80 text-base md:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed"
              >
                {heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contatti"
                  className="group bg-[#C8E600] text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#b3cc00] transition-all flex items-center justify-center gap-2"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+393939596194"
                  className="text-white font-bold text-base hover:text-[#C8E600] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Chiama ora: 393 959 6194
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-[#C8E600] transition-colors">Home</Link>
              <span>/</span>
              <Link
                to={`/${servizio === 'fotovoltaico' ? 'fotovoltaico-privati' : servizio}`}
                className="hover:text-[#C8E600] transition-colors"
              >
                {servizio.charAt(0).toUpperCase() + servizio.slice(1)}
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{provincia} ({regioneShort})</span>
              <meta itemProp="areaServed" content={`${provincia}, ${codiceISO}`} />
            </nav>
          </div>
        </div>

        {/* INTRO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#C8E600] rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {servizio.charAt(0).toUpperCase() + servizio.slice(1)} a {provincia}
                </h2>
              </div>
              <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4">
                {introText.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENEFICI */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perché scegliere Renova Solution a {provincia}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefici.map((beneficio, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-8 h-8 text-[#C8E600] mb-4" />
                  <p className="text-gray-700 font-medium leading-relaxed">{beneficio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DETTAGLIO SERVIZIO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Come lavoriamo in provincia di {provincia}
              </h2>
              <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4">
                {dettaglioServizio.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMUNI SERVITI */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Comuni serviti in provincia di {provincia}
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Operiamo in tutta la provincia di {provincia} e zone limitrofe
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {comuni.map((comune, i) => (
                <motion.span
                  key={comune}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#C8E600] hover:text-black transition-colors cursor-default"
                >
                  {comune}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Domande frequenti — {servizio.charAt(0).toUpperCase() + servizio.slice(1)} a {provincia}
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-16 md:py-24 bg-[#C8E600]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                Richiedi un preventivo gratuito a {provincia}
              </h2>
              <p className="text-black/80 text-base md:text-lg mb-8">
                Sopralluogo gratuito, preventivo chiaro e senza impegno.
                Operiamo in tutta la provincia di {provincia}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contatti"
                  className="bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Richiedi preventivo gratuito
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+393939596194"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  393 959 6194
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LINK ALTRE PROVINCE */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {servizio.charAt(0).toUpperCase() + servizio.slice(1)} in altre province
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Trieste', 'Udine', 'Pordenone', 'Gorizia', 'Venezia', 'Padova', 'Verona', 'Vicenza', 'Treviso', 'Belluno', 'Rovigo']
                .filter((p) => p !== provincia)
                .map((p) => (
                  <Link
                    key={p}
                    to={`/${servizio}-${p.toLowerCase()}`}
                    className="text-sm text-gray-600 hover:text-[#C8E600] hover:underline transition-colors"
                  >
                    {servizio.charAt(0).toUpperCase() + servizio.slice(1)} {p}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
