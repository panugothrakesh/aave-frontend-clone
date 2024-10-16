import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group2({isInView}: CircleType) {
    
    const to_and_fro = {
      hidden: {
        y: 2
      },
      animate: {
        y: isInView ? [2, -10, 2] : 2,
        transition: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.3
        }
      },
    }

  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="56px 262px">
        <circle cx="56" cy="262" r="35" fill="#28D358" fillOpacity="0.7" />
    </motion.g>
  )
}

export default Group2