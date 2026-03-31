import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Villa Letty – Centro Vacacional en Chinauta',
  description: 'Refugio de paz y naturaleza en Chinauta, Cundinamarca. Piscinas, alojamiento, gastronomía y actividades para toda la familia.',
  keywords: 'villa letty, chinauta, finca, vacaciones, cundinamarca, piscina, turismo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
