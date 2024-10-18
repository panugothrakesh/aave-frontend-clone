import { motion } from 'framer-motion';
import React from 'react'

type Mint_BGType = {
  isInView: boolean;
}

const Minted_Background = ({ isInView }: Mint_BGType) => {

  const reveal = {
    hidden: {opacity : 0},
    animate: { opacity: isInView ? 1 : 0,
      transition: {duration: .5, delay: .25, ease: "easeInOut", once : true}
    }
  }
  
  const path_Animation = {
    hidden: {opacity : 0, strokeDasharray: "0px 1px"},
    animate: { opacity: isInView ? [0,1,1,1] : 0, strokeDasharray: isInView ? "1px 1px" : "0px 1px",
      transition: {duration: 1.5, delay: .5, ease: "easeInOut", once : true}
    }
  }

  const radar_out={
    hidden: {scale: 0, opacity: 1},
    animate:{
        scale: [0, 1.6],
        opacity: [1, 0],
        transition: {
            duration: 1.5,
            repeatDelay: .5,
            ease: 'easeInOut',
            delay: 2.75,
            repeat: Infinity,
        }
    }}
  const radar_in={
    hidden: {scale: 1},
    animate:{
        scale: [1, 1.1, 1],
        transition: {
            duration: 1.5,
            repeatDelay: .5,
            delay: 3,
            ease: 'easeInOut',
            repeat: Infinity,
        }
    }}

const radar_reveal={
    hidden: { scale: 0},
    animate:{ scale: isInView ? 1 : 0,
        transition: {
            duration: .75,
            delay: 2.25,
            ease: 'easeInOut',
            once: true,
        }
    }}

  return (
    <motion.svg
    initial="hidden"
    animate="animate"
    variants={reveal}
    className='max-w-full mt-12 mx-auto'
      overflow="visible"
      width="417"
      height="76"
      viewBox="0 0 417 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 1 }}
    >
      <motion.circle
        initial="hidden"
        animate="animate"
        variants={radar_out}
        cx="414.5"
        cy="2"
        r="12"
        stroke="#28D358"
        strokeWidth="8"
        style={{ transformOrigin: '414.5px 2px' }}
      />
      <path
        stroke="#000000"
        strokeOpacity="0.075"
        d="M2 73.995C82.645 74.3047 278.148 60.3392 415 2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="1"
      />
      <motion.path
        initial="hidden"
        animate="animate"
        variants={path_Animation}
        d="M2 73.995C82.645 74.3047 278.148 60.3392 415 2"
        stroke="#28D358"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ vectorEffect: 'non-scaling-stroke' }}
        opacity="0"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="0px 1px"
      />
      <motion.g
        initial="hidden"
        animate="animate"
        variants={radar_reveal}
        style={{ transform: 'none', transformOrigin: '414.5px 2px' }}
      >
        <motion.circle
          initial="hidden"
          animate="animate"
          variants={radar_in}
          cx="414.5"
          cy="2"
          r="10"
          fill="#28D358"
          stroke="#FCFCFB"
          strokeWidth="3"
          style={{ transform: 'none', transformOrigin: '414.5px 2px' }}
        />
      </motion.g>
    </motion.svg>
  )
}

export default Minted_Background