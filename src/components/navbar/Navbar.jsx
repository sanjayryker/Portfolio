import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}> Sanjay Pandian </motion.span>
            <div className="social">
                <a href="https://github.com/sanjayryker"><img src="/github.png" alt=""/></a>
                <a href="https://www.instagram.com/sanjay_ryker/"><img src="/instagram.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/sanjaypandian01/"><img src="/linkedin.png" alt=""/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar