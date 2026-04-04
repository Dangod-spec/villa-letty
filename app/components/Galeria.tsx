'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

// Slider component for gallery items with multiple images
function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  // Pausar cuando el slider no está en el viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Solo correr el intervalo cuando es visible
  useEffect(() => {
    if (!isVisible) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next, isVisible])

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
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
    </div>
  )
}

// Imágenes por item para el lightbox
const itemImages: Record<number, { src: string; alt: string }[]> = {
  1: [
    { src: '/piscina.png', alt: 'Piscina - Villa Letty' },
    { src: '/piscina2.jpeg', alt: 'Piscina - Villa Letty' },
  ],
  2: [
    { src: '/habitacion.jpeg', alt: 'Habitaciones confort - Villa Letty' },
    { src: '/habitacion2.jpeg', alt: 'Habitaciones confort - Villa Letty' },
    { src: '/habitacion3.jpeg', alt: 'Habitaciones confort - Villa Letty' },
    { src: '/habitacion4.jpeg', alt: 'Habitaciones confort - Villa Letty' },
    { src: '/habitacion5.jpeg', alt: 'Habitaciones confort - Villa Letty' },
  ],
  3: [
    { src: '/jardin1.png', alt: 'Jardines tropicales - Villa Letty' },
    { src: '/jardin2.png', alt: 'Jardines tropicales - Villa Letty' },
  ],
  5: [
    { src: '/cancha1.jpeg', alt: 'Cancha Múltiple - Villa Letty' },
    { src: '/cancha2.jpeg', alt: 'Cancha Múltiple - Villa Letty' },
  ],
  6: [
    { src: '/salon1.jpeg', alt: 'Salones - Villa Letty' },
    { src: '/salon2.jpeg', alt: 'Salones - Villa Letty' },
    { src: '/salon3.jpeg', alt: 'Salones - Villa Letty' },
    { src: '/salon4.jpeg', alt: 'Salones - Villa Letty' },
    { src: '/salon5.jpeg', alt: 'Salones - Villa Letty' },
    { src: '/salon6.jpeg', alt: 'Salones - Villa Letty' },
    { src: '/salon7.jpeg', alt: 'Salones - Villa Letty' },
  ],
}

// SVG placeholder images simulating different areas of the finca
const galeríaItems = [
  {
    id: 1,
    title: 'Piscina',
    category: 'Recreación',
    bg: '#000',
    svgContent: <ImageSlider images={['/piscina.png', '/piscina2.jpeg']} alt="Piscina - Villa Letty" />,
  },
  {
    id: 2,
    title: 'Habitaciones confort',
    category: 'Hospedaje',
    bg: '#2d1a0a',
    svgContent: <ImageSlider images={['/habitacion.jpeg', '/habitacion2.jpeg', '/habitacion3.jpeg', '/habitacion4.jpeg', '/habitacion5.jpeg']} alt="Habitaciones confort - Villa Letty" />,
  },
  {
    id: 3,
    title: 'Jardines tropicales',
    category: 'Naturaleza',
    bg: '#1a3a2a',
    svgContent: <ImageSlider images={['/jardin1.png', '/jardin2.png']} alt="Jardines tropicales - Villa Letty" />,
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
    title: 'Salones',
    category: 'Espacios',
    bg: '#2d1a0a',
    svgContent: <ImageSlider images={['/salon1.jpeg', '/salon2.jpeg', '/salon3.jpeg', '/salon4.jpeg', '/salon5.jpeg', '/salon6.jpeg', '/salon7.jpeg']} alt="Salones - Villa Letty" />,
  },
]

const categories = ['Todos', 'Recreación', 'Hospedaje', 'Naturaleza', 'Espacios']

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [activePhoto, setActivePhoto] = useState(0)

  const photos = activeItem ? (itemImages[activeItem] ?? []) : []

  const closeLightbox = () => { setActiveItem(null); setActivePhoto(0) }
  const prevPhoto = () => setActivePhoto((p) => (p - 1 + photos.length) % photos.length)
  const nextPhoto = () => setActivePhoto((p) => (p + 1) % photos.length)

  // Teclado: ← → entre fotos del item activo, Escape cierra
  useEffect(() => {
    if (!activeItem) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') nextPhoto()
      else if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeItem, activePhoto])

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
              onClick={() => { setActiveItem(item.id); setActivePhoto(0) }}
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
        {activeItem && photos.length > 0 && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Flecha izquierda */}
            {photos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition-all z-10"
                aria-label="Foto anterior"
              >
                ‹
              </button>
            )}

            <div
              className="relative w-full max-w-3xl bg-verde-oscuro rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galeríaItems.find((i) => i.id === activeItem)!
                const photo = photos[activePhoto]
                return (
                  <>
                    <div className="relative w-full aspect-video" style={{ background: item.bg }}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <p className="text-dorado text-xs uppercase tracking-widest font-sans mb-1">{item.category}</p>
                        <p className="text-crema font-serif text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.title}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {photos.length > 1 && (
                          <span className="text-crema/40 font-sans text-xs">
                            {activePhoto + 1} / {photos.length}
                          </span>
                        )}
                        {photos.length > 1 && (
                          <span className="hidden md:block text-crema/30 font-sans text-xs">← → esc</span>
                        )}
                        <button
                          onClick={closeLightbox}
                          className="text-crema/60 hover:text-crema text-2xl transition-colors"
                          aria-label="Cerrar"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    {/* Dots lightbox */}
                    {photos.length > 1 && (
                      <div className="flex justify-center gap-2 pb-4">
                        {photos.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActivePhoto(i)}
                            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                            style={{ background: i === activePhoto ? '#c9a84c' : 'rgba(255,255,255,0.3)' }}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )
              })()}
            </div>

            {/* Flecha derecha */}
            {photos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition-all z-10"
                aria-label="Foto siguiente"
              >
                ›
              </button>
            )}
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
