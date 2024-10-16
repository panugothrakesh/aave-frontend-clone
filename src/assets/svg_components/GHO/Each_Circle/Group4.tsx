import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group4({isInView}: CircleType) {
    
    const to_and_fro = {
      hidden: {
        y: 10
      },
      animate: {
        y: isInView ? [10, -10, 10] : 10,
        transition: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.2
        }
      },
    }

  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="575px 454px">
            <circle cx="575" cy="454" r="35" fill="#28D358" fillOpacity="0.5" />
          </motion.g>
  )
}

export default Group4