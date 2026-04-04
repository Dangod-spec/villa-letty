'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// Slider component for gallery items with multiple images
function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>
      {/* Arrow right */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xs z-10 transition-all"
      >
        ›
      </button>
    </div>
  )
}

// SVG placeholder images simulating different areas of the finca
const galeríaItems = [
  {
    id: 1,
    title: 'Piscina Principal',
    category: 'Recreación',
    bg: '#000',
    svgContent: <ImageSlider images={['/piscina.png', '/piscina2.jpeg']} alt="Piscina Principal - Villa Letty" />,
  },
  {
    id: 2,
    title: 'Habitaciones Confort',
    category: 'Hospedaje',
    bg: '#2d1a0a',
    svgContent: <ImageSlider images={['/habitacion1.jpeg', '/habitacion2.jpeg', '/habitacion3.jpeg', '/habitacion4.jpeg', '/habitacion5.jpeg']} alt="Habitaciones Confort - Villa Letty" />,
  },
  {
    id: 3,
    title: 'Jardines Tropicales',
    category: 'Naturaleza',
    bg: '#1a3a2a',
    svgContent: <ImageSlider images={['/jardin1.png', '/jardin2.png']} alt="Jardines Tropicales - Villa Letty" />,
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
    title: 'Cancha Múltiple',
    category: 'Recreación',
    bg: '#1a3a2a',
    svgContent: <ImageSlider images={['/cancha1.jpeg', '/cancha2.jpeg']} alt="Cancha Múltiple - Villa Letty" />,
  },
  {
    id: 6,
    title: 'Comedor Principal',
    category: 'Gastronomía',
    bg: '#2d1a0a',
    svgContent: <ImageSlider images={['/salon1.jpeg', '/salon2.jpeg', '/salon3.jpeg', '/salon4.jpeg', '/salon5.jpeg', '/salon6.jpeg', '/salon7.jpeg']} alt="Comedor Principal - Villa Letty" />,
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
