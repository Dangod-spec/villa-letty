import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Villa Letty – Centro Vacacional en Chinauta',
  description: 'Refugio de paz y naturaleza en Chinauta, Cundinamarca. Piscinas, alojamiento, gastronomía y eventos para hasta 420 personas.',
  keywords: 'villa letty, chinauta, finca vacacional, cundinamarca, piscina, alojamiento, eventos, turismo',
  authors: [{ name: 'Villa Letty' }],
  // Open Graph — controla cómo se ve el link en WhatsApp, Facebook, etc.
  openGraph: {
    title: 'Villa Letty – Centro Vacacional en Chinauta',
    description: 'Tu refugio de paz y naturaleza en Chinauta. Piscinas, alojamiento, gastronomía y eventos para toda la familia.',
    url: 'https://villaletty.vercel.app',
    siteName: 'Villa Letty',
    images: [
      {
        url: '/portada.png',
        width: 1200,
        height: 630,
        alt: 'Villa Letty - Centro Vacacional en Chinauta, Cundinamarca',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  // Twitter/X card
  twitter: {
    card: 'summary_large_image',
    title: 'Villa Letty – Centro Vacacional en Chinauta',
    description: 'Tu refugio de paz y naturaleza en Chinauta. Piscinas, alojamiento y eventos para toda la familia.',
    images: ['/portada.png'],
  },
  // Otros metadatos útiles
  robots: {
    index: true,
    follow: true,
  },
  // Verification para Google Search Console (reemplazar con tu código real)
  // verification: { google: 'TU_CODIGO_DE_GOOGLE_SEARCH_CONSOLE' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect para Google Fonts — carga más rápida */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Schema.org — negocio local para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Villa Letty",
              "description": "Centro vacacional en Chinauta con piscinas, alojamiento, gastronomía y actividades para toda la familia.",
              "url": "https://villaletty.vercel.app",
              "telephone": "+573242307424",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chinauta",
                "addressRegion": "Cundinamarca",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.2855072,
                "longitude": -74.4702301
              },
              "openingHours": "Mo-Su 07:00-20:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/villalettyfinca/"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
