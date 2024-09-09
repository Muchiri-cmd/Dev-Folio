/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { services } from '../info';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../wrapper';

const Service = ({ index,title,icon }) => {
  return(
   <Tilt
    className="xs:w-[245px] w-full"
   >
    <motion.div
      variants={fadeIn("right","spring",0.5 * index , 0.75)}
      className=' w-full p-[1px] rounded-[20px]'
    >
      <div
        options={{ max:45,scale:1,speed:450}}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col hover:border-2 border-yellow-300 cursor-pointer
        sm:min-h-[280px]
        '
      >
        <span className={` text-[50px] text-center text-yellow-300 ${icon}`}
        >
          <h3 className="text-white text-[20px] font-bold text-center mt-8">{title}</h3>
        </span>
      </div>
    </motion.div>
   </Tilt>
  )
}

const About = () => {
  return (
    <>  
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionHeadText}>About</p>
        <h2 className={styles.sectionSubText}>Overview</h2>
        <motion.p
          //params- direction,type,delay,duration of animation
          variants={fadeIn("","",0.1,1)}
          className="mt-4 text-secondary text-[17px] leading-[30px]"
        >
          I build next-gen internet applications that solve real-world problems and drive meaningful results. 
          With a solid foundation in Computer Science and a commitment to continuous improvement, I’m dedicated to delivering innovative, scalable solutions that meet your needs.
          Whether you're looking for someone to collaborate on a project, solve complex challenges or drive business growth through technology, I'm ready to help.<br className="mt-4"></br>
          <span>
            <span>Easiest way to reach me ⬇️</span><br></br>
            <span className='text-yellow-300'><a href="https://wa.me/+254104891414" target="_blank"><i className="fab fa-whatsapp"></i> Whatsapp Me</a></span>
          </span>
        </motion.p>
        <p className="mt-3 text-white text-[20px]">Some of the services i offer include:</p>
        <div className="mt-10 flex flex-wrap gap-10">
          {services.map((service,index) => {
            return <Service key={service.title} index={index} {...service}/>
          })}
        </div>  
      </motion.div>
    </>
    
  )
}

export default SectionWrapper(About,"about")