'use client'
import { useState } from 'react'

const infoItems = [
  {
    icon: '📍',
    title: 'Ubicación',
    lines: ['Chinauta, Fusagasugá', 'Cundinamarca, Colombia'],
  },
  {
    icon: '📞',
    title: 'Teléfono / WhatsApp',
    lines: ['+57 311 XXX XXXX', 'Lunes a Domingo, 7am – 8pm'],
  },
  {
    icon: '✉️',
    title: 'Correo',
    lines: ['info@villaletty.com', 'reservas@villaletty.com'],
  },
  {
    icon: '📸',
    title: 'Instagram',
    lines: ['@villalettyfinca', 'Síguenos para más fotos'],
  },
]

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechas: '',
    personas: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #f5f0e8 0%, #e8ddc8 100%)' }}
    >
      {/* Decorative corner element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #2d6a4f 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado text-xs tracking-widest uppercase font-sans block mb-3">
            ✦ Escríbenos ✦
          </span>
          <h2
            className="text-verde-oscuro mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Contacto & Reservas
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-dorado" />
            <div className="w-1.5 h-1.5 rounded-full bg-dorado" />
            <div className="h-px w-12 bg-dorado" />
          </div>
          <p className="text-verde-oscuro/70 font-sans font-light max-w-md mx-auto">
            Estamos listos para ayudarte a planear la escapada perfecta. Contáctanos y recibirás respuesta en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-verde-oscuro mb-6 text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Información de Contacto
              </h3>
              <div className="space-y-5">
                {infoItems.map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 border border-dorado/40 flex items-center justify-center text-xl group-hover:bg-verde-oscuro transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-dorado text-xs uppercase tracking-widest font-sans mb-1">{item.title}</p>
                      {item.title === 'Instagram' ? (
                        <>
                          <a
                            href="https://www.instagram.com/villalettyfinca/?hl=es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-verde-oscuro/80 hover:text-dorado font-sans font-light text-sm transition-colors"
                          >
                            {item.lines[0]}
                          </a>
                          <p className="text-verde-oscuro/60 font-sans font-light text-sm">{item.lines[1]}</p>
                        </>
                      ) : (
                        item.lines.map((line) => (
                          <p key={line} className="text-verde-oscuro/80 font-sans font-light text-sm">{line}</p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-sm overflow-hidden border border-verde-oscuro/10 shadow-md">
              <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <rect width="400" height="220" fill="#e8f5e9" />
                {/* Roads */}
                <line x1="0" y1="110" x2="400" y2="110" stroke="#c9a84c" strokeWidth="6" opacity="0.5" />
                <line x1="200" y1="0" x2="200" y2="220" stroke="#c9a84c" strokeWidth="4" opacity="0.4" />
                <line x1="0" y1="60" x2="400" y2="160" stroke="#aaa" strokeWidth="2" opacity="0.3" />
                {/* Green areas */}
                <ellipse cx="100" cy="60" rx="60" ry="40" fill="#52b788" opacity="0.3" />
                <ellipse cx="320" cy="160" rx="50" ry="35" fill="#40916c" opacity="0.3" />
                <ellipse cx="280" cy="70" rx="45" ry="30" fill="#52b788" opacity="0.25" />
                {/* Buildings */}
                {[{x:60,y:100},{x:140,y:80},{x:260,y:120},{x:330,y:90}].map((b,i) => (
                  <rect key={i} x={b.x} y={b.y} width="20" height="20" rx="2" fill="#aaa" opacity="0.4" />
                ))}
                {/* Location pin */}
                <circle cx="200" cy="110" r="18" fill="#2d6a4f" opacity="0.9" />
                <circle cx="200" cy="110" r="10" fill="white" />
                <circle cx="200" cy="110" r="5" fill="#c9a84c" />
                <line x1="200" y1="128" x2="200" y2="145" stroke="#2d6a4f" strokeWidth="2" opacity="0.7" />
                {/* Label */}
                <rect x="145" y="148" width="110" height="28" rx="4" fill="white" opacity="0.9" />
                <text x="200" y="167" textAnchor="middle" fill="#1a3a2a" fontSize="12" fontFamily="Georgia">Villa Letty · Chinauta</text>
              </svg>
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <a
                  href="https://www.google.com/maps/place/Centro+Vacacional+Villa+Lety/@4.2855072,-74.4724188,17z/data=!4m10!1m2!2m1!1svilla+letty!3m6!1s0x8e3f1c48caf5d1e7:0xee4b053585893b1b!8m2!3d4.2855072!4d-74.4702301!15sCgt2aWxsYSBsZXR0eZIBBWhvdGVs4AEA!16s%2Fg%2F11b7hmgf4t?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-verde-oscuro text-crema text-xs font-sans tracking-widest uppercase px-4 py-2 hover:bg-verde-medio transition-colors"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/60 backdrop-blur-sm border border-verde-oscuro/10 p-8 shadow-sm">
            {enviado ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-16 h-16 border-2 border-dorado flex items-center justify-center text-3xl">✓</div>
                <h3 className="text-verde-oscuro text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-verde-oscuro/70 font-sans font-light text-sm max-w-xs">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas con toda la información sobre tu reserva.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-4 px-6 py-2 border border-dorado text-dorado text-xs tracking-widest uppercase hover:bg-dorado hover:text-verde-oscuro transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-verde-oscuro mb-6 text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Solicitar Reserva
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors placeholder-verde-oscuro/30"
                      />
                    </div>
                    <div>
                      <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+57 300..."
                        className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors placeholder-verde-oscuro/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors placeholder-verde-oscuro/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                        Fecha de visita
                      </label>
                      <input
                        type="date"
                        name="fechas"
                        value={form.fechas}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                        N° de personas
                      </label>
                      <select
                        name="personas"
                        value={form.personas}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors"
                      >
                        <option value="">Seleccionar</option>
                        {['1-5', '6-10', '11-20', '21-50', '50+'].map((n) => (
                          <option key={n} value={n}>{n} personas</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu visita, evento o necesidades especiales..."
                      className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors resize-none placeholder-verde-oscuro/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-verde-oscuro text-crema font-sans text-sm tracking-widest uppercase hover:bg-verde-medio transition-all duration-300 hover:shadow-lg mt-2"
                  >
                    Enviar Solicitud
                  </button>

                  <p className="text-verde-oscuro/40 text-xs font-sans text-center">
                    También puedes contactarnos directamente por WhatsApp para una respuesta inmediata.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
