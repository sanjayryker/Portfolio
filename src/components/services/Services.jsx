import "./services.scss"
import { SKILLS } from "../../utils/data"
import SkillCard from "./skillCard/SkillCard"
import { useRef, useState } from "react"
import SkillsInfoCard from "./skillsInfoCard/SkillsInfoCard"
import {motion, useInView} from 'framer-motion'

const variants = {
  initial :{
    x:-500,
    opcaity:0
  },
  animate:{
    x:0,
    opcaity:1,
    transition : {
      duration:2,
      staggerChildren:0.5,
    } 
  },

}

const Services = () => {

  const ref = useRef()

  const inView = useInView(ref,{margin :'-100px'})

    const [selectedSkills,setSelectedSkills] = useState(SKILLS[0])

    const handleSelectSkill = (data)=>{
        setSelectedSkills(data);
    }
  return (
    <motion.div className="skills-container" initial='initial' whileInView='animate' ref={ref} >
      <motion.div className="title"> 
      <motion.h5 variants={variants}> Technical Proficiency </motion.h5>
      </motion.div>
        <motion.div className="skills-content" variants={variants} >
              <motion.div className="skills" variants={variants} >
                  {SKILLS.map((item) => (
                    <SkillCard key={item.title} icon = {item.icon} title={item.title} isActive={selectedSkills.title === item.title} onClick={()=>{ handleSelectSkill(item)}}/>
                    ) )}
              </motion.div>

              <motion.div className="skills-info" variants={variants}>
                  <SkillsInfoCard heading={selectedSkills.title} skills={selectedSkills.skills}/>
              </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services