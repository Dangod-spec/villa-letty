'use client'

const servicios = [
  {
    numero: '01',
    title: 'Piscinas Naturales',
    desc: 'Tres piscinas de agua cristalina rodeadas de naturaleza tropical, perfectas para adultos y niños con diferentes profundidades.',
    detalle: 'Incluido en todos los paquetes',
  },
  {
    numero: '02',
    title: 'Alojamiento Campestre',
    desc: 'Habitaciones y cabañas privadas con materiales naturales y toda la comodidad moderna para un descanso verdaderamente reparador.',
    detalle: 'Disponible fines de semana y festivos',
  },
  {
    numero: '03',
    title: 'Gastronomía Local',
    desc: 'Sabores auténticos del campo colombiano: desayunos abundantes, almuerzos campestres y cenas preparadas con productos frescos de la región.',
    detalle: 'Menú incluido en paquetes de alojamiento',
  },
  {
    numero: '04',
    title: 'Actividades Recreativas',
    desc: 'Canchas de fútbol, voleibol, ping pong, senderos naturales y juegos infantiles. Entretenimiento garantizado para toda la familia.',
    detalle: 'Disponible todo el día',
  },
  {
    numero: '05',
    title: 'Eventos Especiales',
    desc: 'Salones y zonas al aire libre para cumpleaños, reuniones familiares y eventos corporativos con capacidad para hasta 200 personas.',
    detalle: 'Consulta disponibilidad de fechas',
  },
  {
    numero: '06',
    title: 'Turismo de Naturaleza',
    desc: 'Senderos ecológicos guiados, observación de aves y mariposas, y conexión con la biodiversidad única del cálido clima de Cundinamarca.',
    detalle: 'Recorridos con guía incluido',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-28 relative overflow-hidden"
      style={{ background: '#028443' }}
    >
      {/* Subtle warm texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 10% 80%, rgba(201,168,76,0.07) 0%, transparent 55%),
                            radial-gradient(ellipse at 90% 10%, rgba(82,183,136,0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Thin gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-dorado/80 text-xs tracking-widest uppercase font-sans block mb-4">
            ✦ Lo Que Ofrecemos ✦
          </span>
          <h2
            className="text-crema mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 400 }}
          >
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-dorado/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado/60" />
          </div>
          <p className="text-crema/55 max-w-lg mx-auto leading-relaxed font-sans font-light" style={{ fontSize: '1rem' }}>
            Todo lo que necesitas para una escapada perfecta, en un solo lugar lleno de naturaleza y tranquilidad.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-dorado group-hover:w-full transition-all duration-500" />

              {/* Number */}
              <div className="flex items-center justify-between mb-7">
                <span
                  className="font-sans font-light"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.7)' }}
                >
                  — {s.numero}
                </span>
                <div className="h-px w-8" style={{ background: 'rgba(201,168,76,0.2)' }} />
              </div>

              {/* Title */}
              <h3
                className="text-crema mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  lineHeight: 1.35,
                }}
              >
                {s.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px mb-4" style={{ background: 'rgba(201,168,76,0.4)' }} />

              {/* Description */}
              <p
                className="font-sans font-light text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(245,240,232,0.6)' }}
              >
                {s.desc}
              </p>

              {/* Detail tag */}
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(201,168,76,0.7)' }} />
                <span
                  className="font-sans text-xs tracking-wide"
                  style={{ color: 'rgba(201,168,76,0.65)' }}
                >
                  {s.detalle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-sans font-light text-sm mb-6" style={{ color: 'rgba(245,240,232,0.4)' }}>
            ¿Tienes una necesidad especial? Contáctanos y lo personalizamos para ti.
          </p>
          <a
            href="#contacto"
            className="inline-block px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 font-light"
            style={{
              border: '1px solid rgba(201,168,76,0.5)',
              color: '#c9a84c',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#c9a84c'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#1a3a2a'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c'
            }}
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>

      {/* Thin gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/40 to-transparent" />
    </section>
  )
}
