'use client'
import { useState } from 'react'

function ModalPrivacidad({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-verde-oscuro/10 px-8 py-5 flex items-center justify-between">
          <h2
            className="text-verde-oscuro text-xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Política de Privacidad
          </h2>
          <button
            onClick={onClose}
            className="text-verde-oscuro/40 hover:text-verde-oscuro text-2xl transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-5 text-verde-oscuro/80 font-sans font-light text-sm leading-relaxed">
          <p className="text-dorado text-xs uppercase tracking-widest font-sans">
            Última actualización: 2026 · Ley 1581 de 2012 — Colombia
          </p>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">1. Responsable del tratamiento</h3>
            <p>Centro Vacacional Villa Letty, ubicado en la Vía Panamericana Bogotá-Girardot Km. 69, Chinauta, Fusagasugá, Cundinamarca, Colombia. Contacto: +57 313 494 1865.</p>
          </div>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">2. Datos que recolectamos</h3>
            <p>A través del formulario de reservas recolectamos: nombre completo, fechas de estadía, número de personas y mensaje opcional. Esta información es suministrada voluntariamente por el usuario.</p>
          </div>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">3. Finalidad del tratamiento</h3>
            <p>Los datos recolectados se utilizan exclusivamente para: gestionar solicitudes de reserva, responder consultas enviadas por WhatsApp, y coordinar la estadía del huésped. No se utilizan para fines publicitarios ni se comparten con terceros.</p>
          </div>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">4. Transferencia de datos</h3>
            <p>La información del formulario se transmite directamente a través de WhatsApp (Meta Platforms Inc.) mediante un enlace generado en el dispositivo del usuario. Villa Letty no almacena esta información en servidores propios.</p>
          </div>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">5. Derechos del titular</h3>
            <p>De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013, usted tiene derecho a: conocer, actualizar, rectificar y suprimir sus datos personales. Para ejercer estos derechos comuníquese al número +57 324 230 7424.</p>
          </div>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">6. Seguridad</h3>
            <p>Villa Letty adopta medidas razonables para proteger la información suministrada. Al usar el formulario de contacto, el usuario acepta que la transmisión de datos se realiza a través de la plataforma WhatsApp.</p>
          </div>

          <div>
            <h3 className="text-verde-oscuro font-medium mb-2">7. Consentimiento</h3>
            <p>Al diligenciar y enviar el formulario de reservas, el usuario otorga su consentimiento libre, previo, expreso e informado para el tratamiento de sus datos personales según los términos descritos en esta política.</p>
          </div>
        </div>

        <div className="px-8 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-verde-oscuro text-crema font-sans text-sm tracking-widest uppercase hover:bg-verde-medio transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const [showPrivacidad, setShowPrivacidad] = useState(false)

  return (
    <>
      {showPrivacidad && <ModalPrivacidad onClose={() => setShowPrivacidad(false)} />}

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
                {['Nosotros', 'Servicios', 'Tarifas', 'Galería', 'Contacto'].map((item) => (
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
                href="https://www.instagram.com/villalettyfinca/?hl=es"
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
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPrivacidad(true)}
                className="text-crema/30 hover:text-dorado font-sans font-light text-xs transition-colors underline underline-offset-2"
              >
                Política de Privacidad
              </button>
              <span className="text-crema/20 text-xs">·</span>
              <p className="text-crema/20 font-sans font-light text-xs">
                Hecho con ❤️ para compartir en familia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
