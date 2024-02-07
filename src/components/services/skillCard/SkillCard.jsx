import './skillCard.scss'
import {motion} from'framer-motion'

const variants = {
  initial:{
    opacity:0,
    x:-800
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      staggerChildren:0.5,
      duration:2
    }
  }
}

const SkillCard = ({title,icon,isActive,onClick}) => {
  return (
    <motion.div className={`skills-card ${isActive? 'active' : ''}`} onClick={() => onClick()} variants={variants} initial='initial' animate='animate'>
        <motion.div variants={variants} className='skills-icon'><img src={icon} alt=''/></motion.div>
        <span>{title}</span>
        
    </motion.div>
  )
}

export default SkillCard