import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group11({isInView}: CircleType){
    
    const to_and_fro = {
      hidden: {
        y: 8
      },
      animate: {
        y: isInView ? [8, -7, 8] : 8,
        transition: {
          duration: 3.2,
          ease: "easeInOut",
          repeat: Infinity,
          delay:0
        }
      },
    }
    
  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="401px 329px">
        <circle cx="401" cy="329" r="6" fill="#28D358" />
    </motion.g>
  )
}

export default Group11