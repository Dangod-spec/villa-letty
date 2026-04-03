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
      style={{ background: '#f5f0e8' }}
    >
      {/* Decorative background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #b7e4c7 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #e8ddc8 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-dorado text-xs tracking-widest uppercase font-sans block mb-4">
            ✦ Lo Que Ofrecemos ✦
          </span>
          <h2
            className="text-verde-oscuro mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-dorado" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado" />
          </div>
          <p
            className="text-verde-oscuro/60 max-w-lg mx-auto leading-relaxed font-sans font-light"
            style={{ fontSize: '1rem' }}
          >
            Todo lo que necesitas para una escapada perfecta, en un solo lugar lleno de naturaleza y tranquilidad.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white border border-verde-oscuro/8 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                borderColor: 'rgba(26,58,42,0.08)',
                boxShadow: '0 2px 20px rgba(26,58,42,0.06)',
              }}
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-dorado group-hover:w-full transition-all duration-500" />

              {/* Number */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-dorado font-sans font-light"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                >
                  — {s.numero}
                </span>
                <div className="w-8 h-px bg-dorado/30 mt-2" />
              </div>

              {/* Title */}
              <h3
                className="text-verde-oscuro mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-dorado/50 mb-4" />

              {/* Description */}
              <p className="text-verde-oscuro/65 font-sans font-light text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Detail tag */}
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-dorado flex-shrink-0" />
                <span className="text-dorado/80 font-sans text-xs tracking-wide">
                  {s.detalle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-verde-oscuro/50 font-sans font-light text-sm mb-6">
            ¿Tienes una necesidad especial? Contáctanos y lo personalizamos para ti.
          </p>
          <a
            href="#contacto"
            className="inline-block px-10 py-4 bg-verde-oscuro text-crema font-sans text-sm tracking-widest uppercase hover:bg-verde-medio transition-all duration-300 font-light"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}
