'use client'
import { useState } from 'react'
import Image from 'next/image'

// ── DateRangePicker ──────────────────────────────────────────────────────────
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const DIAS  = ['D','L','M','X','J','V','S']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}
function toISO(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
}
function parseISO(iso: string) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return { year: y, month: m - 1, day: d }
}
function isSameDay(iso: string, year: number, month: number, day: number) {
  return iso === toISO(year, month, day)
}
function isBetween(iso: string, start: string, end: string) {
  return iso > start && iso < end
}

interface DateRangePickerProps {
  llegada: string
  salida: string
  onChangeLlegada: (v: string) => void
  onChangeSalida: (v: string) => void
}

function DateRangePicker({ llegada, salida, onChangeLlegada, onChangeSalida }: DateRangePickerProps) {
  const today = new Date()
  const [viewYear, setViewYear]   = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selecting, setSelecting] = useState<'llegada' | 'salida'>('llegada')
  const [hovered, setHovered]     = useState('')

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
  }

  // second month
  const month2 = viewMonth === 11 ? 0 : viewMonth + 1
  const year2  = viewMonth === 11 ? viewYear + 1 : viewYear

  const todayISO = toISO(today.getFullYear(), today.getMonth(), today.getDate())

  function handleDayClick(iso: string) {
    if (iso < todayISO) return
    if (selecting === 'llegada') {
      onChangeLlegada(iso)
      onChangeSalida('')
      setSelecting('salida')
    } else {
      if (iso <= llegada) {
        onChangeLlegada(iso)
        onChangeSalida('')
        setSelecting('salida')
      } else {
        onChangeSalida(iso)
        setSelecting('llegada')
      }
    }
  }

  function renderMonth(year: number, month: number) {
    const totalDays = getDaysInMonth(year, month)
    const firstDay  = getFirstDayOfMonth(year, month)
    const cells: React.ReactNode[] = []

    // empty cells
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`e${i}`} />)
    }

    for (let d = 1; d <= totalDays; d++) {
      const iso     = toISO(year, month, d)
      const isPast  = iso < todayISO
      const isStart = isSameDay(llegada, year, month, d)
      const isEnd   = isSameDay(salida, year, month, d)
      const inRange = llegada && salida
        ? isBetween(iso, llegada, salida)
        : llegada && hovered && hovered > llegada
          ? isBetween(iso, llegada, hovered)
          : false
      const isHov   = hovered === iso

      let bg = 'transparent'
      let textColor = isPast ? 'rgba(26,58,42,0.25)' : '#1a3a2a'
      let border = 'none'
      let borderRadius = '50%'

      if (isStart || isEnd) {
        bg = '#1a3a2a'
        textColor = '#f5f0e8'
      } else if (inRange) {
        bg = 'rgba(26,58,42,0.08)'
        borderRadius = '0'
      } else if (isHov && !isPast) {
        border = '1px solid #c9a84c'
      }

      // range edges rounding
      if (isStart && (salida || (hovered > llegada))) borderRadius = '50% 0 0 50%'
      if (isEnd) borderRadius = '0 50% 50% 0'
      if (isStart && !salida && !hovered) borderRadius = '50%'

      cells.push(
        <div
          key={d}
          onClick={() => !isPast && handleDayClick(iso)}
          onMouseEnter={() => setHovered(iso)}
          onMouseLeave={() => setHovered('')}
          className="flex items-center justify-center text-xs font-sans select-none"
          style={{
            height: '32px',
            cursor: isPast ? 'default' : 'pointer',
            background: bg,
            color: textColor,
            borderRadius,
            border,
            fontWeight: isStart || isEnd ? 600 : 400,
            transition: 'background 0.15s',
          }}
        >
          {d}
        </div>
      )
    }
    return cells
  }

  const fmt = (iso: string) => {
    const p = parseISO(iso)
    if (!p) return null
    return `${p.day} ${MESES[p.month].slice(0,3)} ${p.year}`
  }

  return (
    <div className="border border-verde-oscuro/15 bg-white shadow-sm" style={{ borderRadius: '2px' }}>
      {/* Header selección */}
      <div className="grid grid-cols-2 border-b border-verde-oscuro/10">
        <button
          type="button"
          onClick={() => setSelecting('llegada')}
          className="p-3 text-left transition-colors"
          style={{ borderRight: '1px solid rgba(26,58,42,0.1)', background: selecting === 'llegada' ? 'rgba(201,168,76,0.06)' : 'transparent' }}
        >
          <p className="text-dorado font-sans text-xs uppercase tracking-widest mb-0.5">Llegada</p>
          <p className="font-sans text-sm" style={{ color: llegada ? '#1a3a2a' : 'rgba(26,58,42,0.35)', fontWeight: llegada ? 500 : 400 }}>
            {fmt(llegada) ?? 'Seleccionar fecha'}
          </p>
        </button>
        <button
          type="button"
          onClick={() => setSelecting('salida')}
          className="p-3 text-left transition-colors"
          style={{ background: selecting === 'salida' ? 'rgba(201,168,76,0.06)' : 'transparent' }}
        >
          <p className="text-dorado font-sans text-xs uppercase tracking-widest mb-0.5">Salida</p>
          <p className="font-sans text-sm" style={{ color: salida ? '#1a3a2a' : 'rgba(26,58,42,0.35)', fontWeight: salida ? 500 : 400 }}>
            {fmt(salida) ?? 'Seleccionar fecha'}
          </p>
        </button>
      </div>

      {/* Calendarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {[{ year: viewYear, month: viewMonth }, { year: year2, month: month2 }].map(({ year, month }, idx) => (
          <div key={idx} className="p-4" style={{ borderRight: idx === 0 ? '1px solid rgba(26,58,42,0.08)' : 'none' }}>
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              {idx === 0 ? (
                <button type="button" onClick={prevMonth} className="w-7 h-7 flex items-center justify-center text-verde-oscuro/50 hover:text-dorado transition-colors text-lg">‹</button>
              ) : <div className="w-7" />}
              <p className="font-sans text-sm font-medium text-verde-oscuro tracking-wide">
                {MESES[month]} {year}
              </p>
              {idx === 1 ? (
                <button type="button" onClick={nextMonth} className="w-7 h-7 flex items-center justify-center text-verde-oscuro/50 hover:text-dorado transition-colors text-lg">›</button>
              ) : <div className="w-7" />}
            </div>
            {/* Day headers */}
            <div className="grid grid-cols-7 mb-1">
              {DIAS.map(d => (
                <div key={d} className="text-center font-sans text-xs text-verde-oscuro/40 pb-1">{d}</div>
              ))}
            </div>
            {/* Days grid */}
            <div className="grid grid-cols-7">
              {renderMonth(year, month)}
            </div>
          </div>
        ))}
      </div>

      {/* Noches */}
      {llegada && salida && (
        <div className="border-t border-verde-oscuro/10 px-4 py-2 text-center">
          <span className="font-sans text-xs text-verde-oscuro/60">
            {Math.round((new Date(salida).getTime() - new Date(llegada).getTime()) / 86400000)} noche{Math.round((new Date(salida).getTime() - new Date(llegada).getTime()) / 86400000) !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  )
}
// ────────────────────────────────────────────────────────────────────────────

const infoItems = [
  {
    icon: '📍',
    title: 'Ubicación',
    lines: ['Chinauta, Fusagasugá', 'Cundinamarca, Colombia'],
  },
  {
    icon: '📞',
    title: 'Teléfono / WhatsApp',
    lines: ['+57 324 230 7424', 'Lunes a Domingo, 7am – 8pm'],
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
    llegada: '',
    salida: '',
    personas: '',
    mensaje: '',
  })
  // Honeypot: campo oculto — si viene lleno, es un bot
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Anti-spam: si el campo honeypot viene lleno, es un bot — no hacer nada
    if (honeypot) return

    const phoneNumber = '573242307424'

    const formatFecha = (fecha: string) =>
      fecha
        ? new Date(fecha + 'T12:00:00').toLocaleDateString('es-CO', {
            day: 'numeric', month: 'long', year: 'numeric',
          })
        : 'Por confirmar'

    const mensaje = [
      '🌿 *Solicitud de Reserva — Villa Letty*',
      '',
      `*Nombre:* ${form.nombre}`,
      `*Fecha de llegada:* ${formatFecha(form.llegada)}`,
      `*Fecha de salida:* ${formatFecha(form.salida)}`,
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
            Contacto & reservas
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
                      ) : item.title === 'Teléfono / WhatsApp' ? (
                        <>
                          <a
                            href="tel:+573134941865"
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
                <h3
                  className="text-verde-oscuro mb-6 text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Solicitar Reserva
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 border border-verde-oscuro/20 bg-crema/50 text-verde-oscuro font-sans text-sm focus:outline-none focus:border-dorado transition-colors placeholder-verde-oscuro/30"
                    />
                  </div>

                  <div>
                    <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                      Fechas de estadía *
                    </label>
                    <DateRangePicker
                      llegada={form.llegada}
                      salida={form.salida}
                      onChangeLlegada={(v) => setForm(f => ({ ...f, llegada: v }))}
                      onChangeSalida={(v) => setForm(f => ({ ...f, salida: v }))}
                    />
                  </div>

                  <div>
                    <label className="block text-verde-oscuro/70 text-xs uppercase tracking-widest font-sans mb-1.5">
                      N° de personas *
                    </label>
                    <select
                      name="personas"
                      required
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

                  {/* Honeypot: invisible para humanos, los bots lo llenan */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                  />

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
          </div>
        </div>
      </div>
    </section>
  )
}
