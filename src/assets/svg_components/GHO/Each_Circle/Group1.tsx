import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group1({isInView}: CircleType) {
    
    const to_and_fro = {
      hidden: {
        y: 1
      },
      animate: {
        y: isInView ? [1, -9, 1] : 1,
        transition: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }
      },
    }

  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="-53px 454px">
        <circle cx="-53" cy="454" r="74" fill="#28D358" fillOpacity="0.25" />
    </motion.g>
  )
}

export default Group1