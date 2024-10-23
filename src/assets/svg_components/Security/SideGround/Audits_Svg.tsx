import React from 'react'
import { motion } from 'framer-motion';

type AuditsTypes = {
    isInView: boolean;
  }

function Audits_Svg({ isInView }: AuditsTypes) {
    const reveal = {
        hidden: {x:460},
        animate: {
            x: isInView ? [460, 0] : 460,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeInOut",
                once: true,
            }
        }
    }
    const width_top1 = {
        hidden: { width:242},
        animate: {
            width: isInView ? [242, 142, 142, 142, 242] : 242,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_top2 = {
        hidden: { width:63, x: 0},
        animate: {
            x: isInView ? [0, -100, -100, -100, 0] : 0,
            width: isInView ? [63, 138, 138, 138, 63] : 63,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_top3 = {
        hidden: { width:63, x: 0},
        animate: {
            x: isInView ? [0, -25, -25, -25, 0] : 0,
            width: isInView ? [63, 88, 88, 88, 63] : 63,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_middle3 = {
        hidden: { x: 0},
        animate: {
            x: isInView ? [0, 50, 50, 50, 0] : 0,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .75,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_middle2 = {
        hidden: { width:151, x: 0},
        animate: {
            x: isInView ? [0, 100, 100, 100, 0] : 0,
            width: isInView ? [151, 101, 101, 101, 151] : 151,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .75,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_middle1 = {
        hidden: { width:63},
        animate: {
            width: isInView ? [63, 163, 163, 163, 63] : 63,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .75,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_bottom1 = {
        hidden: { width:182, x: 0},
        animate: {
            x: isInView ? [0, -25, -25, -25, 0] : 0,
            width: isInView ? [182, 157, 157, 157, 182] : 182,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .6,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const width_bottom2 = {
        hidden: { width:63, x: 0},
        animate: {
            x: isInView ? [0, -50, -50, -50, 0] : 0,
            width: isInView ? [63, 113, 113, 113, 63] : 63,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .6,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const circle_top = {
        hidden: { x: 0},
        animate: {
            x: isInView ? [0, -100, -100, -100, 0] : 0,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const circle_middle = {
        hidden: { x: 0},
        animate: {
            x: isInView ? [0, 50, 50, 50, 0] : 0,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .75,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
    const circle_bottom = {
        hidden: { x: 0},
        animate: {
            x: isInView ? [0, -30, -30, -30, 0] : 0,
            transition:{
                duration: 2,
                repeatDelay: 1,
                delay: .6,
                ease: "easeInOut",
                repeat: Infinity,
            }
        }
    }
  return (
    <svg className='inline-block max-w-full h-auto align-top my-0 md:my-auto mx-auto' width="493" height="257" viewBox="0 0 493 257" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g initial="hidden" animate="animate" variants={reveal} style={{ transform: 'none', transformOrigin: '263px 81px' }}>
        <motion.rect initial="hidden" animate="animate" variants={width_top1} x="39" y="65" height="32" rx="16" fill="#1F807B"></motion.rect>
        <motion.g initial="hidden" animate="animate" variants={circle_top} style={{ transformOrigin: '313px 81px' }}>
          <path  d="M313 61C324.046 61 333 69.9543 333 81C333 92.0457 324.046 101 313 101V61Z" fill="#1F807B"></path>
          <path  d="M313 101C301.954 101 293 92.0457 293 81C293 69.9543 301.954 61 313 61L313 101Z" fill="#63BBB6"></path>
        </motion.g>
        <motion.rect initial="hidden" animate="animate" variants={width_top2} x="345" y="65" height="32" rx="16" fill="#63BBB6" style={{ transform: 'translateX(-89.0366px)', transformOrigin: '376.5px 81px' }}></motion.rect>
        <motion.rect initial="hidden" animate="animate" variants={width_top3} x="424" y="65" height="32" rx="16" fill="#63BBB6" style={{ transform: 'translateX(-22.2592px)', transformOrigin: '455.5px 81px' }}></motion.rect>
      </motion.g>

      <motion.g initial="hidden" animate="animate" variants={reveal} style={{ transform: 'none', transformOrigin: '345px 129px' }}>
        <motion.rect initial="hidden" animate="animate" variants={width_middle1} x="107" y="113" height="32" rx="16" fill="#63BBB6"></motion.rect>
        <motion.rect initial="hidden" animate="animate" variants={width_middle2} x="186" y="113" height="32" rx="16" fill="#1F807B" style={{ transformOrigin: '261.5px 129px' }}></motion.rect>
        <motion.g initial="hidden" animate="animate" variants={circle_middle} style={{ transformOrigin: '369px 129px' }}>
          <path d="M369 109C380.046 109 389 117.954 389 129C389 140.046 380.046 149 369 149V109Z" fill="#1F807B"></path>
          <path d="M369 149C357.954 149 349 140.046 349 129C349 117.954 357.954 109 369 109L369 149Z" fill="#63BBB6"></path>
        </motion.g>
        <motion.rect initial="hidden" animate="animate" variants={width_middle3} x="401" y="113" width="182" height="32" rx="16" fill="#63BBB6" style={{ transformOrigin: '492px 129px' }}></motion.rect>
      </motion.g>

      <motion.g initial="hidden" animate="animate" variants={reveal} style={{ transform: 'none', transformOrigin: '335.5px 177px' }}>
        <motion.g initial="hidden" animate="animate" variants={circle_bottom} style={{ transform: 'translateX(-21.87px)', transformOrigin: '199px 177px' }}>
          <path d="M199 157C210.046 157 219 165.954 219 177C219 188.046 210.046 197 199 197V157Z" fill="#1F807B"></path>
          <path d="M199 197C187.954 197 179 188.046 179 177C179 165.954 187.954 157 199 157L199 197Z" fill="#63BBB6"></path>
        </motion.g>
        <motion.rect initial="hidden" animate="animate" variants={width_bottom1} x="231" y="161" width="163.78" height="32" rx="16" fill="#63BBB6" style={{ transform: 'translateX(-18.225px)', transformOrigin: '322px 177px' }}></motion.rect>
        <motion.rect initial="hidden" animate="animate" variants={width_bottom2} x="429" y="161" width="99.45" height="32" rx="16" fill="#1F807B" style={{ transform: 'translateX(-36.4499px)', transformOrigin: '460.5px 177px' }}></motion.rect>
      </motion.g>
    </svg>
  )
}

export default Audits_Svg