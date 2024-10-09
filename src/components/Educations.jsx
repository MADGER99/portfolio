import { motion } from "framer-motion"
import { EDUCATION } from "../constants"

const Educations = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
            Education
      </motion.h2>
      <div>
        {EDUCATION.map((educations,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{educations.year}</p>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{educations.title}</h6>
                    <ul><p>{educations.university}</p>
                       <li>สาขา {educations.major}</li>
                    </ul>
                    
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Educations
