import React from 'react'
import {motion} from 'framer-motion'

type CircleType = {
    isInView: boolean;
  }

function Group6({isInView}: CircleType) {
    const to_and_fro = {
      hidden: {
        y: -10
      },
      animate: {
        y: isInView ? [-10, 7, -10] : -10,
        transition: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay:0
        }
      },
    }

  return (
    <motion.g initial="hidden" animate="animate" variants={to_and_fro} transform="translateY(-1.48514px)" transform-origin="301px 528px">
      <circle cx="301" cy="528" r="52" fill="#28D358" fillOpacity="0.5" />
    </motion.g>
  )
}

export default Group6