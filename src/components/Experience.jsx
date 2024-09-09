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
