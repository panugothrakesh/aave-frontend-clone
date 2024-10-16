import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group7({isInView}: CircleType) {
    
    const to_and_fro = {
      hidden: {
        y: 9
      },
      animate: {
        y: isInView ? [9, 4, 9] : 9,
        transition: {
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:.5
        }
      },
    }
    
  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform-origin="190px 151px">
        <circle cx="190" cy="151" r="13" fill="#28D358" />
    </motion.g>
  )
}

export default Group7