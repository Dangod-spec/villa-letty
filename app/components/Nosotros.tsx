'use client'

const stats = [
  { value: '15+', label: 'Años de Historia' },
  { value: '5k m²', label: 'De Naturaleza' },
  { value: '500+', label: 'Familias Felices' },
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

          {/* Visual placeholder */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-sm overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #2d6a4f 0%, #1a3a2a 40%, #3a8c5f 80%, #52b788 100%)',
              }}
            >
              {/* Decorative SVG landscape */}
              <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Sky */}
                <rect width="400" height="500" fill="url(#skyGrad)" />
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#87ceeb" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2d6a4f" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="poolGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#48cae4" />
                    <stop offset="100%" stopColor="#0077b6" />
                  </linearGradient>
                </defs>
                {/* Mountains/hills */}
                <ellipse cx="200" cy="380" rx="300" ry="180" fill="#1a3a2a" />
                <ellipse cx="350" cy="420" rx="200" ry="150" fill="#2d6a4f" />
                {/* Pool */}
                <ellipse cx="200" cy="340" rx="100" ry="30" fill="url(#poolGrad)" opacity="0.9" />
                {/* Trees */}
                <rect x="80" y="280" width="8" height="60" fill="#6b4226" />
                <ellipse cx="84" cy="270" rx="30" ry="40" fill="#52b788" />
                <ellipse cx="84" cy="255" rx="20" ry="25" fill="#2d6a4f" />
                <rect x="300" y="260" width="8" height="80" fill="#6b4226" />
                <ellipse cx="304" cy="250" rx="35" ry="45" fill="#52b788" />
                <ellipse cx="304" cy="232" rx="22" ry="28" fill="#2d6a4f" />
                {/* House */}
                <rect x="160" y="290" width="80" height="50" fill="#e8ddc8" />
                <polygon points="150,290 250,290 200,255" fill="#c9a84c" />
                <rect x="185" y="315" width="20" height="25" fill="#1a3a2a" />
                <rect x="165" y="300" width="15" height="15" fill="#87ceeb" opacity="0.7" />
                <rect x="220" y="300" width="15" height="15" fill="#87ceeb" opacity="0.7" />
                {/* Sun */}
                <circle cx="320" cy="80" r="30" fill="#c9a84c" opacity="0.8" />
                <circle cx="320" cy="80" r="22" fill="#e8c97a" opacity="0.9" />
                {/* Flowers */}
                <circle cx="130" cy="360" r="5" fill="#ff6b6b" />
                <circle cx="145" cy="355" r="4" fill="#ff9f43" />
                <circle cx="270" cy="365" r="5" fill="#ff6b6b" />
                <circle cx="255" cy="358" r="4" fill="#ffd32a" />
              </svg>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-verde-oscuro text-crema px-6 py-4 shadow-xl">
              <p className="font-sans font-light text-xs tracking-widest uppercase text-dorado mb-1">Desde</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem' }}>2008</p>
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
