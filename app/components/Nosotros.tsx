'use client'

const stats = [
  { value: '30+', label: 'Años de Historia' },
  { value: '5km²', label: 'De Naturaleza' },
  { value: '1000+', label: 'Familias Felices' },
  { value: '∞', label: 'Memorias Creadas' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-crema">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-dorado text-xs tracking-widest uppercase font-sans block mb-3">
            ✦ Nuestra Historia ✦
          </span>
          <h2
            className="text-verde-oscuro mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Sobre Nosotros
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-dorado" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div className="space-y-6">
            <p
              className="text-verde-oscuro leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontStyle: 'italic' }}
            >
              "Un lugar donde el tiempo se detiene y la naturaleza te abraza."
            </p>
            <p className="text-verde-oscuro/80 leading-relaxed font-sans font-light">
              Villa Letty nació hace más de 15 años del sueño de una familia que quería compartir
              la belleza natural de Chinauta con el mundo. Ubicada en el corazón cálido de
              Cundinamarca, nuestra finca se ha convertido en el refugio favorito de familias
              que buscan escapar del ritmo acelerado de la ciudad.
            </p>
            <p className="text-verde-oscuro/80 leading-relaxed font-sans font-light">
              Rodeados de exuberante vegetación tropical, piscinas de aguas cristalinas y el
              canto de los pájaros como única banda sonora, en Villa Letty vivimos para crear
              experiencias auténticas que nutran el alma y fortalezcan los vínculos familiares.
            </p>
            <p className="text-verde-oscuro/80 leading-relaxed font-sans font-light">
              Cada rincón de nuestra finca ha sido diseñado con amor y atención al detalle,
              desde nuestros amplios espacios sociales hasta las zonas íntimas donde encontrarás
              paz y tranquilidad.
            </p>

            <div className="pt-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 text-dorado font-sans text-sm tracking-widest uppercase border-b border-dorado/40 pb-1 hover:border-dorado transition-all"
              >
                Ver nuestros servicios
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Imagen real */}
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/historia.png"
                alt="Historia de Villa Letty - Chinauta"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-verde-oscuro text-crema px-6 py-4 shadow-xl">
              <p className="font-sans font-light text-xs tracking-widest uppercase text-dorado mb-1">Desde</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem' }}>2016</p>
            </div>

            {/* Gold border accent */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-dorado/30 rounded-sm pointer-events-none" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-verde-oscuro/10 pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-dorado mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300 }}
              >
                {stat.value}
              </p>
              <p className="text-verde-oscuro/70 text-xs tracking-widest uppercase font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
