'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)

  const links = [
    { href: '#nosotros', label: 'Nosotros', id: 'nosotros' },
    { href: '#servicios', label: 'Servicios', id: 'servicios' },
    { href: '#tarifas', label: 'Tarifas', id: 'tarifas' },
    { href: '#galeria', label: 'Galería', id: 'galeria' },
    { href: '#contacto', label: 'Contacto', id: 'contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY

      // Navbar background
      setScrolled(y > 60)

      // Botón volver arriba: aparece después de 400px
      setShowBackToTop(y > 400)

      // Sección activa: detecta cuál está más cerca del top
      const sectionIds = links.map((l) => l.id)
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 120) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-verde-oscuro/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-dorado flex items-center justify-center">
              <span className="text-dorado text-lg font-serif font-bold">V</span>
            </div>
            <div>
              <span
                className="block text-crema font-serif text-lg leading-tight tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Villa Letty
              </span>
              <span className="block text-dorado text-xs tracking-widest uppercase font-sans">
                Chinauta
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-widest uppercase font-sans font-light transition-colors duration-300"
                  style={{ color: isActive ? '#c9a84c' : 'rgba(245,240,232,0.85)' }}
                >
                  {link.label}
                  {/* Underline activo */}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-dorado transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                </a>
              )
            })}
            <a
              href="#contacto"
              className="ml-4 px-5 py-2 border border-dorado text-dorado text-sm tracking-widest uppercase font-sans hover:bg-dorado hover:text-verde-oscuro transition-all duration-300"
            >
              Reservar
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-crema focus:outline-none"
            aria-label="Abrir menú"
          >
            <div className={`w-6 h-0.5 bg-crema mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-crema mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-crema transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-verde-oscuro/98 backdrop-blur-md px-6 pt-4 pb-6 flex flex-col gap-4">
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-widest uppercase font-sans py-2 border-b border-verde-medio/30 transition-colors duration-200"
                  style={{ color: isActive ? '#c9a84c' : 'rgba(245,240,232,0.85)' }}
                >
                  {link.label}
                  {isActive && <span className="ml-2 text-dorado">✦</span>}
                </a>
              )
            })}
            <a
              href="#contacto"
              className="mt-2 text-center py-3 border border-dorado text-dorado text-sm tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Reservar
            </a>
          </div>
        )}
      </nav>

      {/* Botón volver arriba */}
      <button
        onClick={scrollToTop}
        aria-label="Volver al inicio"
        className="fixed bottom-24 right-6 z-50 w-10 h-10 flex items-center justify-center border border-dorado/60 bg-verde-oscuro/90 backdrop-blur-sm text-dorado hover:bg-dorado hover:text-verde-oscuro transition-all duration-300 hover:scale-110"
        style={{
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transform: showBackToTop ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.3s, color 0.3s, scale 0.2s',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  )
}
