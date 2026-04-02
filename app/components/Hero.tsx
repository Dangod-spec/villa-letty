'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen real de fondo con overlay oscuro */}
      <div className="absolute inset-0">
        <img
          src="/portada.png"
          alt="Villa Letty - Chinauta"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(10,30,15,0.45) 0%,
              rgba(10,30,15,0.3) 40%,
              rgba(10,30,15,0.65) 100%
            )`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 mb-8 px-5 py-2 border border-dorado/60 text-dorado text-xs tracking-widest uppercase font-sans">
          <span>✦</span>
          <span>Chinauta, Cundinamarca</span>
          <span>✦</span>
        </div>

        {/* Main title */}
        <h1
          className="animate-fade-up opacity-0 mb-6 text-crema leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          Villa<br />
          <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Letty</em>
        </h1>

        {/* Divider */}
        <div className="animate-fade-in opacity-0 flex items-center justify-center gap-4 mb-8 delay-300" style={{animationFillMode:'forwards'}}>
          <div className="h-px w-16 bg-dorado/60" />
          <span className="text-dorado text-sm">✦</span>
          <div className="h-px w-16 bg-dorado/60" />
        </div>

        {/* Subtitle */}
        <p
          className="animate-fade-up opacity-0 text-crema/85 font-sans font-light mb-12 max-w-xl mx-auto delay-300 leading-relaxed"
          style={{ fontSize: '1.1rem', animationFillMode: 'forwards' }}
        >
          Tu refugio de paz y naturaleza en las cálidas tierras de Chinauta.
          Descanso, aventura y momentos inolvidables en familia.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center delay-500" style={{animationFillMode:'forwards'}}>
          <a
            href="#nosotros"
            className="px-8 py-4 bg-dorado text-verde-oscuro font-sans font-bold text-sm tracking-widest uppercase hover:bg-dorado-claro transition-all duration-300 hover:shadow-lg hover:shadow-dorado/20 hover:-translate-y-0.5"
          >
            Conoce la Finca
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border border-crema/60 text-crema font-sans font-light text-sm tracking-widest uppercase hover:bg-crema/10 hover:border-crema transition-all duration-300"
          >
            Reservar Ahora
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-700" style={{animationFillMode:'forwards'}}>
        <span className="text-crema/50 text-xs tracking-widest uppercase font-sans">Descubre</span>
        <div className="w-px h-10 bg-gradient-to-b from-dorado/60 to-transparent animate-float" />
      </div>
    </section>
  )
}
