'use client'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  // Aparece luego de 2 segundos
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  // Oculta el tooltip luego de 5 segundos
  useEffect(() => {
    const t = setTimeout(() => setTooltip(false), 6000)
    return () => clearTimeout(t)
  }, [])

  const phoneNumber = '573134941865'
  const message = encodeURIComponent('Hola, me gustaría obtener más información sobre Villa Letty 🌿')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="bg-white text-verde-oscuro text-sm font-sans px-4 py-2 rounded-lg shadow-lg animate-fade-in mb-1 whitespace-nowrap"
          style={{
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            animationFillMode: 'forwards',
          }}
        >
          ¡Escríbenos por WhatsApp! 💬
          {/* Triangle */}
          <div
            className="absolute right-[-6px] bottom-3 w-0 h-0"
            style={{
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '6px solid white',
            }}
          />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ background: '#25D366' }}
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: '#25D366', opacity: 0.3 }}
        />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.466 2.027 7.762L0 32l8.467-2.02A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.276 13.276 0 01-6.773-1.853l-.486-.29-5.027 1.2 1.224-4.9-.317-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.865c-.398-.199-2.354-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.682-.62-3.204-1.98-1.184-1.057-1.983-2.363-2.215-2.761-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.2-.232.266-.398.399-.664.132-.266.066-.498-.034-.697-.1-.2-.898-2.164-1.23-2.962-.324-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.064.498-.366.398-1.396 1.363-1.396 3.327 0 1.963 1.43 3.86 1.629 4.126.2.266 2.814 4.297 6.818 6.027.953.411 1.697.657 2.277.841.957.305 1.828.262 2.517.159.767-.114 2.354-.963 2.686-1.893.333-.93.333-1.727.233-1.893-.099-.166-.365-.266-.763-.465z" />
        </svg>
      </a>
    </div>
  )
}
