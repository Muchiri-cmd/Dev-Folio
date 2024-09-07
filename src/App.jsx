import { BrowserRouter }  from 'react-router-dom'
import { Hero, Navbar,About, Technologies, Experience,Projects,Contact,Footer } from './components'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Technologies />
          <Projects />
          <div className="relative z-0">
            <Contact />
            {/* <Canvas /> */}
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
