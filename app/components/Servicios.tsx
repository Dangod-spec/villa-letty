'use client'

const servicios = [
  {
    icon: '🏊',
    title: 'Piscinas Naturales',
    desc: 'Disfruta de nuestras tres piscinas de agua cristalina rodeadas de naturaleza tropical. Perfectas para adultos y niños con diferentes profundidades.',
  },
  {
    icon: '🏡',
    title: 'Alojamiento Campestre',
    desc: 'Cómodas habitaciones y cabañas privadas decoradas con materiales naturales, con toda la comodidad moderna que necesitas para un descanso perfecto.',
  },
  {
    icon: '🍽️',
    title: 'Gastronomía Local',
    desc: 'Sabores auténticos del campo colombiano. Desayunos abundantes, almuerzos campestres y cenas especiales preparadas con productos frescos de la región.',
  },
  {
    icon: '🎯',
    title: 'Actividades Recreativas',
    desc: 'Canchas de fútbol, voleibol, ping pong, senderos naturales y espacios para juegos infantiles. ¡El entretenimiento está garantizado para toda la familia!',
  },
  {
    icon: '🎉',
    title: 'Eventos Especiales',
    desc: 'Celebra cumpleaños, reuniones familiares y eventos corporativos en nuestros amplios salones y zonas al aire libre con capacidad para hasta 200 personas.',
  },
  {
    icon: '🌿',
    title: 'Turismo de Naturaleza',
    desc: 'Recorridos guiados por senderos ecológicos, observación de aves y mariposas, y conexión con la biodiversidad única del cálido clima de Cundinamarca.',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a3a2a 0%, #2d6a4f 50%, #1a3a2a 100%)' }}
    >
      {/* Decorative pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx={100 + i * 130}
            cy={300}
            r={80 + i * 20}
            fill="none"
            stroke="#c9a84c"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado text-xs tracking-widest uppercase font-sans block mb-3">
            ✦ Lo Que Ofrecemos ✦
          </span>
          <h2
            className="text-crema mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-dorado" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado" />
          </div>
          <p className="text-crema/70 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Todo lo que necesitas para una escapada perfecta, en un solo lugar lleno de magia y naturaleza.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-verde-oscuro/40 border border-verde-claro/10 backdrop-blur-sm p-8 hover:border-dorado/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-dorado group-hover:w-full transition-all duration-500" />

              <div className="text-4xl mb-5">{s.icon}</div>
              <h3
                className="text-crema mb-3 text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.title}
              </h3>
              <p className="text-crema/65 font-sans font-light text-sm leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom number */}
              <div
                className="absolute bottom-4 right-5 text-dorado/20 font-sans font-bold select-none"
                style={{ fontSize: '3rem', lineHeight: 1 }}
              >
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-crema/60 font-sans font-light text-sm mb-5">
            ¿Tienes alguna necesidad especial? Contáctanos y lo personalizamos para ti.
          </p>
          <a
            href="#contacto"
            className="inline-block px-10 py-4 border border-dorado text-dorado font-sans text-sm tracking-widest uppercase hover:bg-dorado hover:text-verde-oscuro transition-all duration-300 font-light"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}
