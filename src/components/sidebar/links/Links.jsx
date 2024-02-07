import {motion} from 'framer-motion'

const variants = {
    open:{
        transition:{staggerChildren : 0.1},
    },
    closed : {
        transition:{staggerChildren : 0.05,
        staggerDirection:-1,},
    },
}

const itemVariants = {
    open:{
        y:1,
        opacity:1,
        transition:{type:"spring",stiffness:120} 
    },
    closed : {
        y:50,
       opacity:0,
    },
}


const Links = () => {
    const items = ["Homepage","Skill-Set","Portfolio","Contact"]
  return (
    <motion.div className='links' variants={variants}>
        {items.map(item => (
            <motion.a variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}} href={`#${item}`} key={item}>{item}</motion.a>
        ))}
    </motion.div>
  )
}

export default Links