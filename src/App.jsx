import { BrowserRouter }  from 'react-router-dom'
import { Hero, Navbar,About, Technologies, Experience,Projects,Contact,Footer } from './components'
import { Canvas } from '@react-three/fiber'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <div className="relative z-0">
          <Contact/>
          {/* <Canvas/> */}
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
