import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group10({isInView}: CircleType){
    
    const to_and_fro = {
      hidden: {
        y: -2
      },
      animate: {
        y: isInView ? [-2, 7, -2] : -2,
        transition: {
          duration: 2.6,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.6
        }
      },
    }
    
  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="369px 164px">
        <circle cx="369" cy="164" r="6" fill="#28D358" />
    </motion.g>
  )
}

export default Group10