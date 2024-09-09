import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../info';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../wrapper';
import { textVariant } from '../utils/motion';


const ExperienceBadge = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }} 
    contentArrowStyle={{ borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company} 
        className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  > 
    <div className="text-white text-[24px] font-bold">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin:0 }}>{experience.company}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={index} className="text-white text-[14px] pl-1 tracking-wider">{point}</li>
      ))}
    </ul>

  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}
      >
         <p className={styles.sectionHeadText}>Experience</p>
         <h2 className={styles.sectionSubText}>technical xp.</h2>
      </motion.div>
      <div className="flex flex-col justify-center gap-4 flex-1">
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
      <div
        className='mt-20 flex flex-col'
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceBadge key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience,"experience");
