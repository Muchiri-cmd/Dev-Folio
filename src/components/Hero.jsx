import { motion } from 'framer-motion'
import { styles } from '../styles'
import { devimg } from '../assets'
import { socialLinks } from '../info'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden">  
      <div
        className={`${styles.paddingX}  absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start`}
      >
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-yellow-300">Davis 🤓 ,<br></br> Software Developer 👨🏽‍💻</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I leverage technology to <br className="sm:block hidden"/>build solutions to problems and drive businesses growth
            </p>
        </div>
        <div className="flex">
          <div
            className="flex flex-col justify-center gap-4"
          >
            <div className='flex items-start'>
              <a href="resume.docx" download="resume.docx" className="relative inline-flex items-center justify-start overflow-hidden font-bold bg-transparent border-2 border-secondary text-secondary rounded-full px-4 py-2 group hover:font-bold transition-all duration-400 ease-out">
                    <span className="relative z-10 pr-4 group-hover:text-white">Download CV</span>
                      <span className="relative z-10 inline-flex items-center justify-center text-white rounded-full p-2 ml-2">
                        <i className="fas fa-download"></i>
                      </span>
                      <span className="absolute inset-0 bg-secondary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              </a>
            </div>
            <div className="flex">
              <a href="#projects" className="relative inline-flex items-center justify-start overflow-hidden font-bold bg-transparent border-2 border-secondary text-secondary rounded-full px-4 py-2 group hover:font-bold transition-all duration-400 ease-out">
                <span className="relative z-10 pr-4 group-hover:text-white">View Projects</span>
                <span className="relative z-10 inline-flex items-center justify-center text-white rounded-full p-2 ml-2">
                  👀
                </span>
                <span className="absolute inset-0 bg-secondary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              </a>
            </div>
          </div>
          <img src={devimg} alt="developer-image" 
            className="w-full max-w-[600px] object-contain opacity-92"
          />
            <div
            className="hidden md:block"
          >
            <ul>
              {socialLinks.map((link)=>(
                <li key={link.name}
                  className="flex justify-center mt-8"
                >
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <i className={`${link.icon} text-white text-[24px]`}></i>
                  </a>
                </li>
              ))  
              }
            </ul>
          </div>
        </div>
      </div>
    
      <div
        className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center"
      >
          <a href="#about">
            <div
              className="w-[35px] h-[65px] rounded-3xl border-4 border-white-500 flex justify-center items-start p-2"
            >
              <motion.div
               animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
              >
              </motion.div>
            </div>
          </a>
      </div>
    </section>
  )
}

export default Hero