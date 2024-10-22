import React from 'react'
import { motion } from 'framer-motion'

type CircleTypes = {
    isGho: boolean | null
    yi : number
    yf : number
    cx : string
    cy : string
    r : string
    fill : string
    delay : number
}

function GHO_Bg_Circle({yi, yf, delay, cx, cy, r, isGho, fill} : CircleTypes) {
    const active_up1 = {
        hidden:{
          y: yi,
        },
        animate:{
          y: yf,
          transition:{
            type: "spring",
            duration: 0.5,
            stiffness: 200,
            damping: 18,
            delay,
            ease: "easeOut",
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
    <motion.circle initial='hidden' animate={isGho == true ? "animate" : "exit"} variants={active_up1} cx={cx} cy={cy} r={r} fill={fill}></motion.circle>
  )
}

export default GHO_Bg_Circle