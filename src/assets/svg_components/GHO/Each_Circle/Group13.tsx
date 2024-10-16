import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group13({isInView}: CircleType){
    
    const to_and_fro = {
      hidden: {
        y: 9
      },
      animate: {
        y: isInView ? [9, -9, 9] : 9,
        transition: {
          duration: 3.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:0.6
        }
      },
    }
    
  return (
    
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="216px 380px">
            <circle cx="216" cy="380" r="13" fill="#92E7AA" />
          </motion.g>
  )
}

export default Group13