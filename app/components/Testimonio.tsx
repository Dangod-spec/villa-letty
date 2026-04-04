const testimonios = [
  {
    nombre: 'Laura Martínez',
    fecha: 'Marzo 2025',
    texto: 'Un lugar increíble para descansar en familia. Las piscinas son hermosas y la atención del personal es excelente. Definitivamente volveremos.',
    estrellas: 5,
  },
  {
    nombre: 'Carlos Rodríguez',
    fecha: 'Enero 2025',
    texto: 'Pasamos un fin de semana espectacular. Las habitaciones muy cómodas, la comida deliciosa y el ambiente tranquilo. Ideal para desconectarse de la ciudad.',
    estrellas: 5,
  },
  {
    nombre: 'Sandra Gómez',
    fecha: 'Diciembre 2024',
    texto: 'Celebramos el cumpleaños de mi mamá aquí y fue perfecto. Los salones tienen mucho espacio, la decoración es bonita y el servicio muy atento.',
    estrellas: 4,
  },
  {
    nombre: 'Familia Herrera',
    fecha: 'Noviembre 2024',
    texto: 'El clima de Chinauta es perfecto y Villa Letty lo aprovecha al máximo. Los niños no querían irse. Las zonas verdes y la piscina son lo mejor.',
    estrellas: 5,
  },
]

function Estrellas({ cantidad }: { cantidad: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-4 h-4"
          fill={i <= cantidad ? '#c9a84c' : 'none'}
          stroke="#c9a84c"
          strokeWidth="1.5"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="py-24 relative overflow-hidden"
      style={{ background: '#f5f0e8' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 50%),
                            radial-gradient(ellipse at 20% 80%, rgba(45,106,79,0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado text-xs tracking-widest uppercase font-sans block mb-3">
            ✦ Lo que dicen nuestros huéspedes ✦
          </span>
          <h2
            className="text-verde-oscuro mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400 }}
          >
            Testimonios
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-dorado" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado" />
          </div>

          {/* Google rating badge */}
          <div
            className="inline-flex items-center gap-4 px-6 py-3 mt-2"
            style={{
              background: 'white',
              border: '1px solid rgba(26,58,42,0.08)',
              boxShadow: '0 2px 16px rgba(26,58,42,0.06)',
            }}
          >
            <div className="flex flex-col items-center">
              <span
                className="text-dorado"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, lineHeight: 1 }}
              >
                4.6
              </span>
              <Estrellas cantidad={5} />
            </div>
            <div className="h-10 w-px bg-verde-oscuro/10" />
            <div className="text-left">
              <p className="text-verde-oscuro font-sans text-sm font-medium">Calificación en Google</p>
              <a
                href="https://www.google.com/maps/place/Centro+Vacacional+Villa+Lety/@4.2855072,-74.4724188,17z/data=!4m10!1m2!2m1!1svilla+letty!3m6!1s0x8e3f1c48caf5d1e7:0xee4b053585893b1b!8m2!3d4.2855072!4d-74.4702301!15sCgt2aWxsYSBsZXR0eZIBBWhvdGVs4AEA!16s%2Fg%2F11b7hmgf4t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dorado font-sans text-xs hover:underline transition-all"
              >
                Ver reseñas en Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="bg-white p-6 flex flex-col gap-4"
              style={{
                border: '1px solid rgba(26,58,42,0.07)',
                boxShadow: '0 2px 16px rgba(26,58,42,0.05)',
              }}
            >
              {/* Estrellas */}
              <Estrellas cantidad={t.estrellas} />

              {/* Texto */}
              <p
                className="text-verde-oscuro/75 font-sans font-light text-sm leading-relaxed flex-1"
                style={{ fontStyle: 'italic' }}
              >
                "{t.texto}"
              </p>

              {/* Autor */}
              <div className="border-t border-verde-oscuro/8 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-verde-oscuro font-sans text-sm font-medium">{t.nombre}</p>
                  <p className="text-verde-oscuro/45 font-sans text-xs">{t.fecha}</p>
                </div>
                {/* Google icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-verde-oscuro/50 font-sans font-light text-sm mt-10">
          ¿Ya nos visitaste? Déjanos tu reseña en{' '}
          <a
            href="https://www.google.com/maps/place/Centro+Vacacional+Villa+Lety/@4.2855072,-74.4724188,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dorado underline underline-offset-2 hover:text-verde-medio transition-colors"
          >
            Google Maps
          </a>
        </p>
      </div>
    </section>
  )
}
