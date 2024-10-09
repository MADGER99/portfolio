import {HERO_CONTENT} from "../constants"
import { motion } from "framer-motion"
import Photo from "./Photo"
import { FiDownload} from 'react-icons/fi'
import cvpdf from "../assets/CV_Professional.pdf"
import { FaGithub,FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const iconVariants = (duration) => ({
  initial: { y: -5},
  animate: {
      y: [5, -5],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
      }
  }
})

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 order-2 xl:order-none">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl text-center font-thin tracking-tight lg:mt-16 lg:text-18xl">
                        Hello I'm <br/> <span className="text-accent">Surasak Jantapan</span>
                </motion.h1>
                <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Front-End Developer
                </motion.span>
                <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                </motion.p>
            </div>
             {/* btn & Socials */}
             <div className="flex flex-col xl:flex-row items-center px-8">
                <button className="border hover:border-none hover:bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 px-4 py-2 inline-flex item-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ">
                    <a href={cvpdf} download="CV" >Download Cv &nbsp;</a><FiDownload className="text-xl"/>
                </button>
             
             <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
        <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" >
                <a href="https://github.com/MADGER99"><FaGithub/></a>
        </motion.div>
        <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" >
               <a href=""><FaInstagram/></a>
        </motion.div>
        <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" >
               <a href=""><FaSquareXTwitter/></a>
        </motion.div>
    </div>
    </div>
        </div>
        {/* รูป */}
        <div className="w-full lg:w-1/2 lg:p-8 order-1 xl:order-none ">

            <motion.div 
                initial={{ x: 100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 1, delay: 1.2}}
                className="flex justify-center mix-blend-lighten">
               {/* <motion.img 
                    initial={{ x: 100, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 1.2}}
                    src={profilePic} 
                    alt="" 
                />  */}
                
                <Photo/>
            </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Hero
