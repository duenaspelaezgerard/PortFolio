
import './App.css'
import { Contacto } from './componentes/Contacto'
import { Footer } from './componentes/Footer'
import { Habilidades } from './componentes/Habilidades'
import { Header } from './componentes/Header'
import { Home } from './componentes/Home'
import { Proyectos } from './componentes/Proyectos'
import { SobreMi } from './componentes/SobreMi'
import { Trayectoria } from './componentes/Trayectoria'

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <SobreMi />
      <Habilidades />
      <Trayectoria />
      <Proyectos />
      <Contacto />
      <Footer/>
    </div>
  )
}