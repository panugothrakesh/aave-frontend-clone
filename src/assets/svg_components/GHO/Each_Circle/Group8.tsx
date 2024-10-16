import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group8({isInView}: CircleType){
    
    const to_and_fro = {
      hidden: {
        y: -5
      },
      animate: {
        y: isInView ? [-5, 5, -5] : -5,
        transition: {
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.5
        }
      },
    }
    
  return (
    
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="69px 83px">
        <circle cx="69" cy="83" r="18" fill="#92E7AA" />
    </motion.g>
  )
}

export default Group8