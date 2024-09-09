import { SectionWrapper } from "../wrapper"
import { technologies } from "../info"
import { fadeIn,textVariant } from "../utils/motion"
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from "../styles"


const TechBadge = ({ index,name,icon }) => {
  return(
   <Tilt
    className="xs:w-[80px] w-full w-[60px]
    "
   >
    <motion.div
      variants={fadeIn("right","spring",0.5 * index , 0.75)}
      className='p-[1px] rounded-[20px]'
    >
      <div
        options={{ max:45,scale:1,speed:450}}
        className='flex justify-evenly items-center flex-col hover:cursor-pointer'
      >
        <span className={` text-[50px] text-center ${icon} colored`}
        >
          <h3 className="text-white text-[14px] font-bold text-center mt-8 sm:text-[20px]">{name}</h3>
        </span>
      </div>
    </motion.div>
   </Tilt>
  )
}

const Skills = () => {
  return (
    <>  
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionHeadText}>Skills</p>
        <h2 className={styles.sectionSubText}>Tools and Technologies Iam familiar with</h2>
        <div className="mt-10 flex flex-row flex-wrap gap-7">
          {technologies.map((tech,index) => {
            return <TechBadge key={tech.name} index={index} {...tech}/>
          })}
        </div>  
      </motion.div>
    </>
    
  )
}

export default SectionWrapper(Skills,"skills")
