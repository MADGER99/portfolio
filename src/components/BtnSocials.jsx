import { motion } from "framer-motion"
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

const BtnSocials = () => {
  return (
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
  )
}

export default BtnSocials
