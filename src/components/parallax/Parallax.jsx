import { useRef } from 'react'
import './parallax.scss'
import {motion, useScroll,useTransform} from 'framer-motion'

const Parallax = ({type}) => {

    const parref = useRef()

    const {scrollYProgress} = useScroll({
        target : parref,
        offset:["start start", "end start"]
    })

    const ytext = useTransform(scrollYProgress,[0,1],["0%","300%"])
    const yplanets = useTransform(scrollYProgress,[0,1],["0%","40%"])
    const ystars = useTransform(scrollYProgress,[0,1],["0%","100%"])

  return (
    <div 
    className='parallax' 
    ref={parref}
    style={{background:type === "skills"? "linear-gradient(180deg, #111132, #0c0c1d)": "linear-gradient(180deg, #505064, #111132 )",
      }}>
        <motion.h1 style={{y:ytext}}>{type === "skills" ? "Skill Set" : "My Projects"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{y:yplanets, backgroundImage :`url(${type === "skills" ? "/planets.png" : "/sun.png"})` }} className="planets"></motion.div>
        <motion.div style={{x:ystars}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax