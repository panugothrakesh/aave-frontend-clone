import React from 'react'
import {motion} from "framer-motion"

function Composability_Icon() {
  const box1={
    hidden: {
      x:-14, rotate: 45, height: 18, width: 18, opacity: 1,
    },
    animate: {
      x:[0, -14], rotate: [45, 135], height: [18, 14], width: [18, 14], opacity: [1, 0],
      transition:{
        duration: 1, ease: "easeInOut", repeatDelay: 2, repeat: Infinity,
      }
    }
  }
  const box2={
    hidden: {
      x:0, rotate: 45, height: 20, width: 20, fillOpacity: 1,
    },
    animate: {
      x:[0, -8], rotate: [45, 135], height: [20, 24], width: [20, 24], fillOpacity: [1, 0.4],
      transition:{
        duration: 1, ease: "easeInOut", repeatDelay: 2, repeat: Infinity,
      }
    }
  }
  const box3={
    hidden: {
      x:0, rotate: 45, height: 14, width: 14, fillOpacity: 1, rx: 3,
    },
    animate: {
      x:[0, -8], rotate: [45, 135], height: [14, 18], width: [14, 18], fillOpacity: [1, 0.4], rx: [3, 4],
      transition:{
        duration: 1, ease: "easeInOut", repeatDelay: 2, repeat: Infinity,
      }
    }
  }
  const box4={
    hidden: {
      x:14, rotate: 45, scale: 0, opacity: 1,
    },
    animate: {
      x:[14, 0], rotate: [45, 135], scale: [0, 1], opacity: [1, 0],
      transition:{
        duration: 1, ease: "easeInOut", repeatDelay: 2, repeat: Infinity,
      }
    }
  }
  const box5={
    hidden: {
      x:14, rotate: 45, scale: 0,
    },
    animate: {
      x:[14, 0], rotate: [45, 135], scale: [0, 1],
      transition:{
        duration: 1, ease: "easeInOut", repeatDelay: 2, repeat: Infinity,
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
    <motion.rect
      initial='hidden'
      animate='animate'
      variants={box1}
      className="square-1"
      x="3"
      y="7"
      width="14px"
      height="14px"
      rx="4"
      fill="#1F807B"
      fillOpacity="0.4"
      style={{
        transform: 'translateX(-14px) rotate(135deg)',
        transformOrigin: '12px 16px',
      }}
      opacity="0"
    />
    <motion.rect
    initial='hidden'
    animate='animate'
    variants={box2}
      className="square-2-outline"
      x="13"
      y="6"
      width="24px"
      height="24px"
      rx="5"
      fill="#F7F6F6"
      style={{
        transform: 'translateX(-8px) rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
      fillOpacity="0.4"
    />
    <motion.rect
    initial='hidden'
    animate='animate'
    variants={box3}
      className="square-2"
      x="16"
      y="9"
      width="18px"
      height="18px"
      rx="4"
      fill="#1F807B"
      style={{
        transform: 'translateX(-8px) rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
      fillOpacity="0.4"
    />
    <motion.rect
    initial='hidden'
    animate='animate'
    variants={box4}
      className="square-3-outline"
      x="13"
      y="6"
      width="20"
      height="20"
      rx="5"
      fill="#F7F6F6"
      opacity="1"
      style={{
        opacity: "100%",
        transform: 'rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
    />
    <motion.rect
    initial='hidden'
    animate='animate'
    variants={box5}
      className="square-3"
      x="16"
      y="9"
      width="14"
      height="14"
      rx="3"
      fill="#1F807B"
      opacity="1"
      style={{
        transform: 'rotate(135deg)',
        transformOrigin: '23px 16px',
      }}
    />
  </svg>
  )
}

export default Composability_Icon