import React, { useRef } from 'react'
import './portfolio.scss'
import{motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"Ryker Foods",
        img:'/foodapp.png',
        desc:'Developed a responsive landing page for a food ordering application using React JS and Tailwind CSS',
        link:'https://ryker-foods.onrender.com'
    },
    {
        id:2,
        title:"Workout Hero",
        img:'/workout.png',
        desc:'developed a Workout Tracker application using the MERN stack. User authentication was implemented using JSON Web Tokens (JWT).',
        link:'https://workout-tracker-m409.onrender.com'
    },
    {
        id:3,
        title:"Ryker Blog",
        img:'/blog.png',
        desc:'Built my web application with React.js and integrated Redux for state management, ensuring a scalable and efficient architecture',
        link:'https://ryker-blog.onrender.com'
    },
    {
        id:4,
        title:"Task Manager",
        img:'/TaskManager.png',
        desc:'Created my very first MERN application - Task Manager' ,
        link :'https://mern-task-app-nzij.onrender.com'
    },
]
const Single = ({item}) =>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
    })

    const y = useTransform(scrollYProgress,[0,1],[-450,250])

    return <section >
        <div className='container'>
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=''/>
                </div>
                <motion.div className='textContainer' style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <motion.a href={item.link}><motion.button whileHover={{scale:1.1, transition:{duration:0.5}}} whileTap={{scale:0.9}} className='button'>Demo</motion.button></motion.a>
                </motion.div>
            </div>
        </div>
    </section>
}
const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
    })

    const scaleX = useSpring(scrollYProgress,{
        damping:30,
        stiffness:100,
    })

  return (
    <div className='portfolio' ref={ref}>  
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}} ></motion.div>
        </div>
        {items.map((item) =>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio