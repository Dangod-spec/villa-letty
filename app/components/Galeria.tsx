'use client'
import { useState } from 'react'

// SVG placeholder images simulating different areas of the finca
const galeríaItems = [
  {
    id: 1,
    title: 'Piscina Principal',
    category: 'Recreación',
    bg: 'linear-gradient(160deg, #0077b6 0%, #48cae4 50%, #90e0ef 100%)',
    svgContent: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" fill="url(#poolBg)" />
        <defs>
          <linearGradient id="poolBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87ceeb" />
            <stop offset="100%" stopColor="#2d6a4f" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="180" rx="160" ry="60" fill="#0077b6" opacity="0.9" />
        <ellipse cx="200" cy="175" rx="155" ry="55" fill="#48cae4" opacity="0.8" />
        {/* Ripples */}
        <ellipse cx="200" cy="175" rx="80" ry="20" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
        <ellipse cx="200" cy="175" rx="120" ry="30" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
        {/* Pool edge */}
        <rect x="35" y="175" width="330" height="12" rx="4" fill="#e8ddc8" opacity="0.8" />
        {/* Trees around */}
        <rect x="30" y="110" width="6" height="70" fill="#6b4226" />
        <ellipse cx="33" cy="100" rx="22" ry="30" fill="#2d6a4f" />
        <rect x="360" y="100" width="6" height="80" fill="#6b4226" />
        <ellipse cx="363" cy="90" rx="25" ry="32" fill="#52b788" />
        <rect x="80" y="120" width="5" height="60" fill="#6b4226" />
        <ellipse cx="82" cy="112" rx="18" ry="22" fill="#2d6a4f" />
        {/* Sun */}
        <circle cx="340" cy="50" r="28" fill="#f9ca24" opacity="0.9" />
        <circle cx="340" cy="50" r="20" fill="#f0932b" opacity="0.7" />
        {/* Lounge chairs */}
        <rect x="60" y="192" width="50" height="12" rx="3" fill="#c9a84c" opacity="0.8" />
        <rect x="290" y="192" width="50" height="12" rx="3" fill="#c9a84c" opacity="0.8" />
        {/* Label */}
        <text x="200" y="255" textAnchor="middle" fill="white" fontSize="14" fontFamily="Georgia" opacity="0.8">Piscina Principal</text>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Zona de Descanso',
    category: 'Hospedaje',
    bg: 'linear-gradient(135deg, #6b4226 0%, #c9a84c 100%)',
    svgContent: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" fill="#f5f0e8" />
        {/* Room walls */}
        <rect x="0" y="0" width="400" height="280" fill="#e8ddc8" />
        {/* Floor */}
        <rect x="0" y="200" width="400" height="80" fill="#c9a084" />
        {/* Bed */}
        <rect x="80" y="120" width="180" height="100" rx="6" fill="white" />
        <rect x="80" y="120" width="180" height="30" rx="6" fill="#c9a84c" opacity="0.6" />
        <rect x="90" y="155" width="160" height="60" rx="4" fill="#f0e6d3" />
        {/* Pillows */}
        <rect x="90" y="125" width="70" height="20" rx="8" fill="white" />
        <rect x="180" y="125" width="70" height="20" rx="8" fill="white" />
        {/* Window */}
        <rect x="280" y="40" width="100" height="120" fill="#87ceeb" opacity="0.6" />
        <rect x="280" y="40" width="100" height="120" fill="none" stroke="#6b4226" strokeWidth="4" />
        <line x1="330" y1="40" x2="330" y2="160" stroke="#6b4226" strokeWidth="2" />
        <line x1="280" y1="100" x2="380" y2="100" stroke="#6b4226" strokeWidth="2" />
        {/* Curtains */}
        <path d="M280,40 Q260,100 280,160" fill="#2d6a4f" opacity="0.4" />
        <path d="M380,40 Q400,100 380,160" fill="#2d6a4f" opacity="0.4" />
        {/* Plant */}
        <rect x="20" y="160" width="8" height="40" fill="#6b4226" />
        <ellipse cx="24" cy="150" rx="25" ry="20" fill="#52b788" />
        <ellipse cx="24" cy="138" rx="15" ry="12" fill="#2d6a4f" />
        {/* Lamp */}
        <rect x="50" y="80" width="4" height="80" fill="#c9a84c" />
        <ellipse cx="52" cy="78" rx="20" ry="8" fill="#f9ca24" opacity="0.7" />
        <text x="200" y="265" textAnchor="middle" fill="#6b4226" fontSize="14" fontFamily="Georgia" opacity="0.9">Habitaciones Confort</text>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Jardines Tropicales',
    category: 'Naturaleza',
    bg: 'linear-gradient(160deg, #1a3a2a 0%, #52b788 100%)',
    svgContent: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87ceeb" />
            <stop offset="60%" stopColor="#b7e4c7" />
            <stop offset="100%" stopColor="#2d6a4f" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#skyG)" />
        {/* Ground */}
        <ellipse cx="200" cy="280" rx="250" ry="60" fill="#1a3a2a" />
        {/* Big trees */}
        <rect x="50" y="100" width="10" height="150" fill="#6b4226" />
        <ellipse cx="55" cy="80" rx="50" ry="65" fill="#2d6a4f" />
        <ellipse cx="55" cy="60" rx="35" ry="45" fill="#52b788" />
        <rect x="320" y="80" width="12" height="170" fill="#6b4226" />
        <ellipse cx="326" cy="60" rx="55" ry="70" fill="#2d6a4f" />
        <ellipse cx="326" cy="38" rx="38" ry="48" fill="#52b788" />
        {/* Medium trees */}
        <rect x="155" y="130" width="8" height="120" fill="#6b4226" />
        <ellipse cx="159" cy="115" rx="35" ry="45" fill="#40916c" />
        <rect x="230" y="140" width="7" height="110" fill="#6b4226" />
        <ellipse cx="233" cy="127" rx="28" ry="38" fill="#52b788" />
        {/* Flowers */}
        {[80,120,180,260,310].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={230 - (i % 2) * 10} r="6" fill={['#ff6b6b','#ffd32a','#ff9f43','#ff6b6b','#a29bfe'][i]} />
            <circle cx={x+8} cy={225 - (i%2)*8} r="4" fill={['#ffd32a','#ff6b6b','#ff6b6b','#ffd32a','#fd79a8'][i]} />
          </g>
        ))}
        {/* Path */}
        <path d="M180,280 Q190,240 200,200 Q210,240 220,280" fill="#c9a084" opacity="0.5" />
        {/* Birds */}
        <path d="M180,50 Q185,45 190,50" fill="none" stroke="#1a3a2a" strokeWidth="1.5" />
        <path d="M200,45 Q205,40 210,45" fill="none" stroke="#1a3a2a" strokeWidth="1.5" />
        <text x="200" y="268" textAnchor="middle" fill="white" fontSize="13" fontFamily="Georgia" opacity="0.9">Jardines Tropicales</text>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Zona de Fogón',
    category: 'Gastronomía',
    bg: 'linear-gradient(135deg, #6b4226 0%, #e17055 100%)',
    svgContent: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" fill="#1a0a00" />
        {/* Night sky */}
        {[30,80,150,220,300,360,60,180,280].map((x, i) => (
          <circle key={i} cx={x} cy={20 + (i % 3) * 15} r="1.5" fill="white" opacity="0.7" />
        ))}
        {/* Ground */}
        <rect x="0" y="220" width="400" height="60" fill="#2d1a0a" />
        {/* Bonfire stones */}
        {[140,160,180,200,220,240,260].map((x, i) => (
          <ellipse key={i} cx={x} cy={222} rx="12" ry="6" fill="#808080" />
        ))}
        {/* Fire */}
        <ellipse cx="200" cy="215" rx="40" ry="12" fill="#e17055" opacity="0.8" />
        <path d="M170,215 Q180,180 200,160 Q210,180 195,195 Q215,170 225,150 Q235,175 220,200 Q240,170 250,145 Q255,170 235,210 Z" fill="#f9ca24" opacity="0.9" />
        <path d="M180,215 Q190,185 200,165 Q205,185 198,200 Z" fill="white" opacity="0.3" />
        {/* Glow */}
        <ellipse cx="200" cy="215" rx="80" ry="30" fill="#e17055" opacity="0.15" />
        <ellipse cx="200" cy="215" rx="120" ry="45" fill="#f9ca24" opacity="0.07" />
        {/* Log */}
        <rect x="155" y="218" width="90" height="10" rx="5" fill="#6b4226" />
        {/* People silhouettes */}
        <circle cx="100" cy="190" r="12" fill="#1a0a00" />
        <rect x="93" y="202" width="14" height="20" rx="3" fill="#1a0a00" />
        <circle cx="300" cy="185" r="12" fill="#1a0a00" />
        <rect x="293" y="197" width="14" height="22" rx="3" fill="#1a0a00" />
        <circle cx="140" cy="195" r="10" fill="#1a0a00" />
        <rect x="134" y="205" width="12" height="18" rx="3" fill="#1a0a00" />
        {/* Chairs */}
        <rect x="85" y="218" width="28" height="5" rx="2" fill="#6b4226" />
        <rect x="283" y="215" width="28" height="5" rx="2" fill="#6b4226" />
        <text x="200" y="268" textAnchor="middle" fill="#c9a84c" fontSize="13" fontFamily="Georgia">Noches de Fogón</text>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Área Deportiva',
    category: 'Recreación',
    bg: 'linear-gradient(135deg, #00b894 0%, #2d6a4f 100%)',
    svgContent: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="courtBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87ceeb" />
            <stop offset="100%" stopColor="#b7e4c7" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#courtBg)" />
        {/* Football field */}
        <rect x="20" y="60" width="360" height="180" rx="5" fill="#40916c" />
        <rect x="20" y="60" width="360" height="180" rx="5" fill="none" stroke="white" strokeWidth="2" />
        {/* Center circle */}
        <circle cx="200" cy="150" r="40" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="200" cy="150" r="3" fill="white" />
        {/* Center line */}
        <line x1="200" y1="60" x2="200" y2="240" stroke="white" strokeWidth="2" />
        {/* Goal areas */}
        <rect x="20" y="110" width="50" height="80" fill="none" stroke="white" strokeWidth="1.5" />
        <rect x="330" y="110" width="50" height="80" fill="none" stroke="white" strokeWidth="1.5" />
        {/* Goals */}
        <rect x="15" y="125" width="12" height="50" fill="none" stroke="white" strokeWidth="2" />
        <rect x="373" y="125" width="12" height="50" fill="none" stroke="white" strokeWidth="2" />
        {/* Players */}
        {[{x:100,y:140},{x:160,y:110},{x:250,y:170},{x:300,y:130}].map((p,i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y-15} r="8" fill={i<2 ? '#c9a84c' : '#e17055'} />
            <rect cx={p.x} cy={p.y} x={p.x-5} y={p.y-7} width="10" height="15" rx="2" fill={i<2 ? '#c9a84c' : '#e17055'} />
          </g>
        ))}
        {/* Ball */}
        <circle cx="200" cy="155" r="7" fill="white" />
        <path d="M196,150 L200,148 L204,150 L205,155 L200,158 L195,155 Z" fill="#333" />
        {/* Trees border */}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <rect x={30 + i*90} y="40" width="5" height="22" fill="#6b4226" />
            <ellipse cx={32 + i*90} cy={32} rx="14" ry="18" fill="#2d6a4f" />
          </g>
        ))}
        <text x="200" y="268" textAnchor="middle" fill="white" fontSize="13" fontFamily="Georgia">Cancha Múltiple</text>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Comedor Campestre',
    category: 'Gastronomía',
    bg: 'linear-gradient(135deg, #c9a84c 0%, #6b4226 100%)',
    svgContent: (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" fill="#f5f0e8" />
        {/* Wooden ceiling beams */}
        {[0,1,2].map(i => (
          <rect key={i} x={0} y={i*25} width={400} height={8} fill="#6b4226" opacity="0.4" />
        ))}
        {/* Wall */}
        <rect x="0" y="0" width="400" height="100" fill="#e8ddc8" />
        {/* Window with view */}
        <rect x="120" y="20" width="160" height="70" fill="#87ceeb" opacity="0.7" />
        <rect x="120" y="20" width="160" height="70" fill="none" stroke="#6b4226" strokeWidth="3" />
        <line x1="200" y1="20" x2="200" y2="90" stroke="#6b4226" strokeWidth="2" />
        <ellipse cx="155" cy="90" rx="25" ry="15" fill="#52b788" />
        <ellipse cx="240" cy="90" rx="20" ry="12" fill="#2d6a4f" />
        {/* Floor */}
        <rect x="0" y="100" width="400" height="180" fill="#c9a084" />
        {/* Table 1 */}
        <ellipse cx="150" cy="195" rx="70" ry="35" fill="#6b4226" />
        <ellipse cx="150" cy="190" rx="70" ry="35" fill="#8b5e3c" />
        {/* Table cloth */}
        <ellipse cx="150" cy="188" rx="60" ry="28" fill="#f5f0e8" opacity="0.9" />
        {/* Dishes */}
        <circle cx="130" cy="185" r="12" fill="white" stroke="#ccc" strokeWidth="1" />
        <circle cx="170" cy="185" r="12" fill="white" stroke="#ccc" strokeWidth="1" />
        {/* Flower center */}
        <circle cx="150" cy="185" r="8" fill="#c9a84c" />
        <circle cx="150" cy="185" r="4" fill="#ff6b6b" />
        {/* Chairs */}
        {[100,200].map((x,i) => (
          <g key={i}>
            <ellipse cx={x} cy={215} rx="18" ry="10" fill="#6b4226" />
            <rect x={x-9} y={205} width="18" height="12" rx="2" fill="#8b5e3c" />
          </g>
        ))}
        {/* Table 2 */}
        <ellipse cx="300" cy="200" rx="60" ry="30" fill="#8b5e3c" />
        <ellipse cx="300" cy="197" rx="52" ry="25" fill="#f5f0e8" opacity="0.9" />
        <circle cx="300" cy="195" r="7" fill="#c9a84c" />
        <circle cx="278" cy="193" r="10" fill="white" stroke="#ccc" strokeWidth="1" />
        <circle cx="320" cy="193" r="10" fill="white" stroke="#ccc" strokeWidth="1" />
        {/* Hanging lights */}
        <line x1="100" y1="0" x2="100" y2="45" stroke="#6b4226" strokeWidth="1" />
        <circle cx="100" cy="48" r="8" fill="#f9ca24" opacity="0.8" />
        <line x1="200" y1="0" x2="200" y2="35" stroke="#6b4226" strokeWidth="1" />
        <circle cx="200" cy="38" r="8" fill="#f9ca24" opacity="0.8" />
        <line x1="300" y1="0" x2="300" y2="50" stroke="#6b4226" strokeWidth="1" />
        <circle cx="300" cy="53" r="8" fill="#f9ca24" opacity="0.8" />
        <text x="200" y="268" textAnchor="middle" fill="#6b4226" fontSize="13" fontFamily="Georgia">Comedor Principal</text>
      </svg>
    ),
  },
]

const categories = ['Todos', 'Recreación', 'Hospedaje', 'Naturaleza', 'Gastronomía']

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const filtered = activeCategory === 'Todos'
    ? galeríaItems
    : galeríaItems.filter((i) => i.category === activeCategory)

  return (
    <section id="galeria" className="py-24 bg-crema-oscuro">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-dorado text-xs tracking-widest uppercase font-sans block mb-3">
            ✦ Imágenes ✦
          </span>
          <h2
            className="text-verde-oscuro mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Galería
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-dorado" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado" />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs tracking-widest uppercase font-sans border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-verde-oscuro text-crema border-verde-oscuro'
                    : 'border-verde-oscuro/30 text-verde-oscuro hover:border-verde-oscuro'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery-item cursor-pointer group relative rounded-sm shadow-md"
              onClick={() => setActiveItem(item.id)}
            >
              <div className="inner w-full aspect-[4/3] rounded-sm overflow-hidden" style={{ background: item.bg }}>
                {item.svgContent}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-verde-oscuro/0 group-hover:bg-verde-oscuro/40 transition-all duration-400 flex items-center justify-center rounded-sm">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                  <div className="w-10 h-10 border border-crema rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-crema text-lg">+</span>
                  </div>
                  <p className="text-crema text-sm font-sans tracking-widest uppercase">{item.title}</p>
                </div>
              </div>
              {/* Category tag */}
              <div className="absolute top-3 left-3 bg-verde-oscuro/70 backdrop-blur-sm px-3 py-1">
                <span className="text-dorado text-xs font-sans tracking-wider uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-verde-oscuro rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galeríaItems.find((i) => i.id === activeItem)!
                return (
                  <>
                    <div className="w-full aspect-video" style={{ background: item.bg }}>
                      {item.svgContent}
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <p className="text-dorado text-xs uppercase tracking-widest font-sans mb-1">{item.category}</p>
                        <p className="text-crema font-serif text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.title}
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveItem(null)}
                        className="text-crema/60 hover:text-crema text-2xl transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        )}

        {/* CTA below gallery */}
        <p className="text-center text-verde-oscuro/50 font-sans font-light text-sm mt-10">
          ¿Quieres ver más? Síguenos en Instagram{' '}
          <a
            href="https://www.instagram.com/villalettyfinca/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dorado underline underline-offset-2 hover:text-verde-medio transition-colors"
          >
            @villalettyfinca
          </a>
        </p>
      </div>
    </section>
  )
}
