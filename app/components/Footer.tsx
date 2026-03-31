export default function Footer() {
  return (
    <footer
      className="py-14 relative overflow-hidden"
      style={{ background: '#0e2218' }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado to-transparent opacity-40" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-dorado flex items-center justify-center">
                <span className="text-dorado text-lg font-serif font-bold">V</span>
              </div>
              <div>
                <span
                  className="block text-crema font-serif text-lg leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Villa Letty
                </span>
                <span className="block text-dorado text-xs tracking-widest uppercase font-sans">
                  Chinauta
                </span>
              </div>
            </div>
            <p className="text-crema/50 font-sans font-light text-sm leading-relaxed">
              Tu refugio de paz y naturaleza en el corazón cálido de Cundinamarca. Momentos inolvidables para toda la familia.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-dorado text-xs uppercase tracking-widest font-sans mb-4">Navegación</p>
            <ul className="space-y-2">
              {['Nosotros', 'Servicios', 'Galería', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace('ó', 'o').replace('í', 'i')}`}
                    className="text-crema/60 hover:text-dorado font-sans font-light text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <p className="text-dorado text-xs uppercase tracking-widest font-sans mb-4">Síguenos</p>
            <a
              href="https://www.instagram.com/villalettyfinca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-crema/60 hover:text-dorado font-sans font-light text-sm transition-colors mb-4"
            >
              <span>📸</span> @villalettyfinca
            </a>
            <p className="text-dorado text-xs uppercase tracking-widest font-sans mb-2 mt-6">Horario</p>
            <p className="text-crema/60 font-sans font-light text-sm">Lunes a Domingo</p>
            <p className="text-crema/60 font-sans font-light text-sm">7:00 am – 8:00 pm</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-crema/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-crema/30 font-sans font-light text-xs">
            © {new Date().getFullYear()} Villa Letty · Chinauta, Cundinamarca, Colombia
          </p>
          <p className="text-crema/20 font-sans font-light text-xs">
            Hecho con ❤️ para compartir en familia
          </p>
        </div>
      </div>
    </footer>
  )
}
