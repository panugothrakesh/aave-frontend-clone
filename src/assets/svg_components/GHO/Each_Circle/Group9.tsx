import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group9({isInView}: CircleType){
    
    const to_and_fro = {
      hidden: {
        y: 3
      },
      animate: {
        y: isInView ? [3, -7, 3] : 3,
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.2
        }
      },
    }
    
  return (
    
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform="translateY(-2.12683px)" transform-origin="489px 204px">
        <circle cx="489" cy="204" r="13" fill="#28D358" />
    </motion.g>
  )
}

export default Group9