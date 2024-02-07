import React, { useRef } from 'react'
import './portfolio.scss'
import{motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"react commerce",
        img:'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam ullam ad voluptates. Molestias sequi unde dolores '
    },
    {
        id:2,
        title:"react commerce",
        img:'https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=600',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam ullam ad voluptates. Molestias sequi unde dolores '
    },
    {
        id:3,
        title:"react commerce",
        img:'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam ullam ad voluptates. Molestias sequi unde dolores '
    },
    {
        id:4,
        title:"react commerce",
        img:'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam ullam ad voluptates. Molestias sequi unde dolores '
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
                    <motion.button whileHover={{scale:1.1, transition:{duration:0.5}}} whileTap={{scale:0.9}} className='button'>Demo</motion.button>
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