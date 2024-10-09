import { motion } from "framer-motion"
import { CONTACT } from "../constants"
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

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-10 text-center text-4xl"
        >Get in Toch
        </motion.h2>
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
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" >{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
