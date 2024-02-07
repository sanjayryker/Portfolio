import './skillsInfoCard.scss'
import React from 'react'
import {motion} from 'framer-motion'

const variants = {
    initial:{
      opacity:0,
      x:-500
    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        staggerChildren:0.3,
        duration:1
      }
    }
  }

const SkillsInfoCard = ({heading,skills}) => {
  return (
    <motion.div className='skills-info-card' variants={variants} initial='initial' animate='animate'>
        <h6>{heading}</h6>

        <motion.div className='skills-info-content' variants={variants}>
            {skills.map((item,index) =>(
                <React.Fragment key={`skills_${index}`}>
                    <div className='skills-info'>
                        <p>{item.skills}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>

                    <div className='skill-progress-bg'>
                        <div className='skill-progress' style={{width : item.percentage}}> </div>
                    </div>
                </React.Fragment>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default SkillsInfoCard