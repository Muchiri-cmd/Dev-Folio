import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { githubIcon } from '../assets'
import { styles } from '../styles'
import { SectionWrapper } from '../wrapper';
import  { projects } from '../info'
import { fadeIn,textVariant } from '../utils/motion';


const Project = ({ index, name, description, technologies, image , code_repo, live_url }) => {
  return(
    <motion.div
      variants={fadeIn("up","spring",index * 0.5, 0.75)}
    >
      <Tilt options={{ max:45,scale:1,speed:450}}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full hover:cursor-pointer"
      >
        <div
          className="relative w-full h-[230px]"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div
          className="absolute bottom-3 right-3 flex gap-2"
        >
          {live_url && (
            <div
              onClick={() => window.open(live_url, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <i className="fa-solid fa-link w-1/2 h-1/2 object-contain" />
            </div>
          )}
          <div
            onClick={() => window.open(code_repo, "_blank")}
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={githubIcon}
              alt="github-icon"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div
          className="mt-5 "
        >
          <h3 className="text-white font-bold text-[21px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p> 
        </div>
        <div className="mt-4 flex flex-wrap gap-2 mb-8">
            {technologies.map((tech,index) => (
              <p key={tech.name} index={index} className="text-yellow-300 px-1 py-1 text-[12px]">
                {tech.name}
              </p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div>
       <motion.div
        variants={textVariant()}
      >
         <p className={styles.sectionHeadText}>Projects</p>
         <h2 className={styles.sectionSubText}>Some of the the things I've worked on</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >  
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index) => (
          <Project key={project.name} index={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Projects,"projects")
