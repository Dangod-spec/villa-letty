'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-crema/90 hover:text-dorado text-sm tracking-widest uppercase font-sans font-light"
            >
              {link.label}
            </a>
          ))}
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
        >
          <div className={`w-6 h-0.5 bg-crema mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-crema mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-crema transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-verde-oscuro/98 backdrop-blur-md px-6 pt-4 pb-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-crema/90 text-sm tracking-widest uppercase font-sans py-2 border-b border-verde-medio/30"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 text-center py-3 border border-dorado text-dorado text-sm tracking-widest uppercase"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  )
}
