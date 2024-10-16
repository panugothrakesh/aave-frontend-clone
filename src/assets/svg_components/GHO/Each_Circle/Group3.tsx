import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group3({isInView}: CircleType) {
    
    const to_and_fro = {
      hidden: {
        y: -2
      },
      animate: {
        y: isInView ? [-2, 2, -2] : -2,
        transition: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.7
        }
      },
    }

  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="556px 101px">
            <circle cx="556" cy="101" r="31" fill="#92E7AA" />
          </motion.g>
  )
}

export default Group3