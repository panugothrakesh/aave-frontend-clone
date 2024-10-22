import React from 'react'
import { motion } from 'framer-motion'

function App_Bg({isApp} : {isApp : boolean | null} ) {
  const active_up = {
    hidden:{
      rotate: 0,
    },
    animate:{
      rotate: 180,
      transition:{
        duration: 0.5,
        ease: "easeInOut",
      }
    },
    exit:{
      rotate: 0,
      transition:{
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  }
  const active_down = {
    hidden:{
      rotate: 0,
    },
    animate:{
      rotate: -180,
      transition:{
        duration: 0.5,
        ease: "easeInOut",
      }
    },
    exit:{
      rotate: 0,
      transition:{
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  }
  return (
    <svg style={{position:"absolute", top:-64, right:-128}} width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g initial="hidden" animate={isApp === true ? "animate" : "exit"} variants={active_up} style={{transform: "none", transformOrigin: 128}}>
        <circle mask="url(#menu1-circle-mask-2-:R1ldkm6:)" cx="128" cy="128" r="128" fill="#E2E0FF"></circle>
        <circle mask="url(#menu1-circle-mask-1-:R1ldkm6:)" cx="128" cy="128" r="128" fill="#BCBBFF"></circle>
      </motion.g>
      <motion.g initial="hidden" animate={isApp === true ? "animate" : "exit"} variants={active_down} style={{transform: "none", transformOrigin: 128}}>
        <circle mask="url(#menu1-circle-mask-2-:R1ldkm6:)" cx="128" cy="128" r="64" fill="#9896FF"></circle>
        <circle mask="url(#menu1-circle-mask-1-:R1ldkm6:)" cx="128" cy="128" r="64" fill="#E2E0FF"></circle>
      </motion.g>
      <defs>
        <mask id="menu1-circle-mask-1-:R1ldkm6:">
          <rect y="128" width="256" height="128" fill="white"></rect>
        </mask>
        <mask id="menu1-circle-mask-2-:R1ldkm6:">
          <rect width="256" height="128" fill="white"></rect>
        </mask></defs></svg>
  )
}

export default App_Bg