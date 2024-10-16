import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group12({isInView}: CircleType){
    
    const to_and_fro = {
      hidden: {
        y: -8
      },
      animate: {
        y: isInView ? [-8, 1, -8] : -8,
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay:0.2
        }
      },
    }
    
  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="223px 283px">
        <circle cx="223" cy="283" r="6" fill="#28D358" />
    </motion.g>
  )
}

export default Group12