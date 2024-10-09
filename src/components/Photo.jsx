import profilePic from "../assets/photo1.png"
import { motion } from "framer-motion";

const Photo = () => {
    return (
      <div >
        {/* Photo */}
        <motion.div 
            initial={{ opacity: 0}} 
            animate={{
                opacity: 1,
                transition: {delay: 1, duration: 0.4, ease:"easeIn"}
            }}
        >
            <motion.div 
                initial={{ opacity: 0}} 
                animate={{
                    opacity: 1,
                    transition: {delay: 2, duration: 0.4, ease:"easeInOut"}
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute  "
            >
                <img className='w-full' src={profilePic} alt="" />
            </motion.div>
        
            {/* circle */}
            <motion.svg 
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="#85929e" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72","4 255 22 22"],
                        rotate: [120, 360]
  
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
  
        </motion.div>
      </div>
    )
  }

export default Photo
