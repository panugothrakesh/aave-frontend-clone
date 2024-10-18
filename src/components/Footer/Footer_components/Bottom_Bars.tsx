import React from 'react'
import { motion } from 'framer-motion'

function Bottom_Bars({isInView}: {isInView : boolean}) {
    const reveal={
        hidden:{
            opacity: 0,
        },
        animate:{
            opacity: isInView ? [0, 1] : 0,
            transition:{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0,
                once: true,
            }
        }
    }
    const bars_reveal={
        hidden:{
            scale: .25,
        },
        animate:{
            scale: isInView ? [.25, 1] : .25,
            transition:{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0,
                once: true,
            }
        }
    }
  return (
    <motion.div initial="hidden" animate="animate" variants={reveal} className='my-0 mx-auto'>
        <motion.div initial="hidden" animate="animate" variants={bars_reveal} className='mx-4 md:mx-[14px] relative h-[12px] max-w-full after:animate-bg-move
        after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-full after:h-1 after:bg-bottom-gradient after:bg-[length:200%_200%]'></motion.div>
        <motion.div initial="hidden" animate={{...bars_reveal.animate,
                                transition: {
                                ...bars_reveal.animate.transition,
                                delay: .1,
                                }}} variants={bars_reveal} className='mx-8 md:mx-[64px] opacity-50 relative h-[12px] max-w-full after:animate-bg-move
        after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-full after:h-1 after:bg-bottom-gradient after:bg-[length:200%_200%]'></motion.div>
        <motion.div initial="hidden" animate={{...bars_reveal.animate,
                                transition: {
                                ...bars_reveal.animate.transition,
                                delay: .2,
                                }}} variants={bars_reveal} className='mx-12 md:mx-[114px] opacity-20 relative h-[12px] max-w-full after:animate-bg-move
        after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-full after:h-1 after:bg-bottom-gradient after:bg-[length:200%_200%]'></motion.div>
        <motion.div initial="hidden" animate={{...bars_reveal.animate,
                                transition: {
                                ...bars_reveal.animate.transition,
                                delay: .3,
                                }}} variants={bars_reveal} className='mx-16 md:mx-[164px] opacity-10 relative h-[12px] max-w-full after:animate-bg-move
        after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-full after:h-1 after:bg-bottom-gradient after:bg-[length:200%_200%]'></motion.div>
    </motion.div>
  )
}

export default Bottom_Bars