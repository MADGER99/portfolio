import { motion } from "framer-motion"
import { CONTACT } from "../constants"
import BtnSocials from "./btnSocials"


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
        <BtnSocials/>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" >{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
