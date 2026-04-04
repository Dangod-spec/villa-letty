'use client'
import { useState } from 'react'
import Image from 'next/image'

const infoItems = [
  {
    icon: '📍',
    title: 'Ubicación',
    lines: ['Chinauta, Fusagasugá', 'Cundinamarca, Colombia'],
  },
  {
    icon: '📞',
    title: 'Teléfono / WhatsApp',
    lines: ['+57 311 494 1865', 'Lunes a Domingo, 7am – 8pm'],
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = '573134941865'

    // Formatear fecha legible
    const fechaFormateada = form.fechas
      ? new Date(form.fechas + 'T12:00:00').toLocaleDateString('es-CO', {
          day: 'numeric', month: 'long', year: 'numeric'
        })
      : 'Por confirmar'

    const mensaje = [
      '🌿 *Solicitud de Reserva — Villa Letty*',
      '',
      `*Nombre:* ${form.nombre}`,
      `*Teléfono:* ${form.telefono}`,
      form.email ? `*Correo:* ${form.email}` : null,
      `*Fecha de visita:* ${fechaFormateada}`,
      form.personas ? `*N° de personas:* ${form.personas}` : null,
      form.mensaje ? `*Mensaje:* ${form.mensaje}` : null,
      '',
      '_Enviado desde villaletty.com_',
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
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

            {/* Imagen real de la finca */}
            <div className="relative rounded-sm overflow-hidden border border-verde-oscuro/10 shadow-md">
              <div className="relative w-full h-64">
                <Image
                  src="/maps.jpg"
                  alt="Vista de Villa Letty - Chinauta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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
                    className="w-full py-4 bg-verde-oscuro text-crema font-sans text-sm tracking-widest uppercase hover:bg-verde-medio transition-all duration-300 hover:shadow-lg mt-2 flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.466 2.027 7.762L0 32l8.467-2.02A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.276 13.276 0 01-6.773-1.853l-.486-.29-5.027 1.2 1.224-4.9-.317-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.865c-.398-.199-2.354-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.682-.62-3.204-1.98-1.184-1.057-1.983-2.363-2.215-2.761-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.2-.232.266-.398.399-.664.132-.266.066-.498-.034-.697-.1-.2-.898-2.164-1.23-2.962-.324-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.064.498-.366.398-1.396 1.363-1.396 3.327 0 1.963 1.43 3.86 1.629 4.126.2.266 2.814 4.297 6.818 6.027.953.411 1.697.657 2.277.841.957.305 1.828.262 2.517.159.767-.114 2.354-.963 2.686-1.893.333-.93.333-1.727.233-1.893-.099-.166-.365-.266-.763-.465z"/>
                    </svg>
                    Enviar por WhatsApp
                  </button>

                  <p className="text-verde-oscuro/40 text-xs font-sans text-center">
                    Se abrirá WhatsApp con tu solicitud lista para enviar.
                  </p>
                </form>
            </>
          </div>
        </div>
      </div>
    </section>
  )
}
