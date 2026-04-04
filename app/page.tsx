import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Tarifas from './components/Tarifas'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Tarifas />
      <Galeria />
      <Contacto />
      <Footer />
    </main>
  )
}
