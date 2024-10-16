import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group5({isInView}: CircleType) {
    
    const to_and_fro = {
      hidden: {
        y: -10
      },
      animate: {
        y: isInView ? [-10, 3, -10] : -10,
        transition: {
          duration: 3.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.2
        }
      },
    }

  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro}  transform-origin="182px -30px">
        <circle cx="182" cy="-30" r="52" fill="#28D358" fillOpacity="0.5" />
    </motion.g>
  )
}

export default Group5