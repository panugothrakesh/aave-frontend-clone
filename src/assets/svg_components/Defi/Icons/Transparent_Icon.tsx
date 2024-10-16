import React from 'react'
import { motion } from 'framer-motion'

function Transparent_Icon() {

    const bottom_Circle = {
      initial: {
        cx: 9,
        rx: 6,
        ry: 10,
        fill: "#D4D3FC",
      },
      Up:{
        cx: [9, 6, 9, 9, 9, 6, 9],
        rx: [6, 8, 8, 8, 8, 8, 6],
        ry: [10, 13, 13, 13, 13, 13, 10],
        fill: ["#D4D3FC", "#9896FF", "#9896FF","#9896FF", "#D4D3FC"],
        transition: {
          duration: 1.2,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5,
        }
      }
    }
    const bottom_Circle_Mask = {
      initial: {
        cx: 9,
        rx: 0,
        ry: 0,
      },
      Up:{
        cx: [9, 6, 9, 9, 9, 6, 9],
        rx: [0, 11, 11, 11, 11, 11, 0],
        ry: [0, 16, 16, 16, 16, 16, 0],
        transition: {
          duration: 1.2,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5,
        }
      }
    }
    
    const top_Circle = {
      initial: {
        cx: 21,
        rx: 8,
        ry: 13,
        fill: "#9896FF",
      },
      Down:{
        cx: [21, 24, 21, 21, 21, 24, 21],
        rx: [8, 6, 6, 6, 6, 6, 8],
        ry: [13, 10, 10, 10, 10, 10, 13],
        fill: ["#9896FF", "#D4D3FC", "#D4D3FC", "#D4D3FC", "#9896FF"],
        transition: {
          duration: 1.2,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5,
        }
      }
    }
    const top_Circle_Mask = {
      initial: {
        cx: 21,
        rx: 11,
        ry: 16,
      },
      Down:{
        cx: [21, 24, 21, 21, 21, 24, 21],
        rx: [11, 0, 0, 0, 0, 0, 11],
        ry: [16, 0, 0, 0, 0, 0, 16],
        transition: {
          duration: 1.2,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5,
        }
      }
    }

  return (
    <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible' }}
  >
    <mask id="transparent-mask-left" width="32" height="32">
      <rect x="-16" y="0" width="64" height="32" fill="white" />
      <motion.ellipse initial="initial"
      animate="Up"
        variants={bottom_Circle_Mask} className="ellipse-left-outline" cx="9" cy="16" rx="0" ry="0" fill="black" />
    </mask>
    <motion.ellipse
      initial="initial"
      animate="Up"
      variants={bottom_Circle}
      mask="url(#transparent-mask-right)"
      className="ellipse-left"
      cy="16"
      fill="#D4D3FC"
    />
    <mask id="transparent-mask-right" width="32" height="32">
      <rect x="-16" y="0" width="64" height="32" fill="white" />
      <motion.ellipse initial="initial"
      animate="Down"
      variants={top_Circle_Mask} className="ellipse-right-outline" cx="21" cy="16" rx="11" ry="16" fill="black" />
    </mask>
    <motion.ellipse
      initial="initial"
      animate="Down"
      variants={top_Circle}
      mask="url(#transparent-mask-left)"
      className="ellipse-right"
      cy="16"
      fill="#9896FF"
    />
  </svg>
  )
}

export default Transparent_Icon