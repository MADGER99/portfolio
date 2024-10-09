import Logo from './Logo'
import { motion } from "framer-motion"

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

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 mb-20'>
      <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className='flex flex-shrink-0 items-center'>
        <Logo />
      </motion.div>
    </nav>
  )
}

export default Navbar
