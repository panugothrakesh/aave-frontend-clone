import React from 'react'
import {motion} from "framer-motion"

type SecuredTypes = {
    isInView: boolean;
  }

function Secured_Svg({ isInView }: SecuredTypes) {
    const reveal = {
        hidden: {y:0, x:0, rotate: -360},
        animate: {
            y: isInView ? [0, -75, -75, -75, 75, 0, 0] : 0,
            x: isInView ? [0, 0, 0, 0, 75, -20, 0, 0] : 0,
            rotate: isInView ? [-360, -360, 0] : -360,
            transition:{
                duration: .75,
                ease: "easeInOut",
                once: true,
            }
        }
    }
    const large_rotate = {
        hidden: {rotate: 0},
        animate: {
            rotate: isInView ? [0, 360] : 0,
            transition:{
                duration: 80,
                ease: "linear",
                repeat: Infinity,
            }
        }
    }
    const small_rotate = {
        hidden: {rotate: 0},
        animate: {
            rotate: isInView ? [0, -360] : 0,
            transition:{
                duration: 80,
                ease: "linear",
                repeat: Infinity,
            }
        }
    }
    const smallopen = {
        hidden: {scale:0, rotate: -180},
        animate: {
            scale: isInView ? [0, 1] : 0,
            rotate: isInView ? [-180, 0] : -180,
            transition:{
                duration: .5,
                delay:0,
                ease: "easeInOut",
                once: true,
            }
        }
    }
  return (
    <svg className='inline-block max-w-full h-auto align-top my-0 md:my-auto mx-auto' width="497" height="256" viewBox="0 0 497 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ transformOrigin: '248px 128px' }}>
        <motion.g initial="hidden" animate="animate" variants={large_rotate} style={{ transform: 'none', transformOrigin: '248px 128px' }}>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.3,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '248px 60px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '248px 60px' }}>
              <path d="M248 81C259.598 81 269 71.598 269 60C269 48.402 259.598 39 248 39V81Z" fill="#63BBB6"></path>
              <path d="M248 39C236.402 39 227 48.402 227 60C227 71.598 236.402 81 248 81L248 39Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.325,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '296.083px 79.9167px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '296.083px 79.9167px' }}>
              <path d="M281.234 94.7661C289.435 102.967 302.731 102.967 310.932 94.7661C319.134 86.5651 319.134 73.2686 310.932 65.0676L281.234 94.7661Z" fill="#63BBB6"></path>
              <path d="M310.932 65.0674C302.731 56.8664 289.435 56.8664 281.234 65.0674C273.033 73.2684 273.033 86.5649 281.234 94.7659L310.932 65.0674Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.35,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '316px 128px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '316px 128px' }}>
              <path d="M295 128C295 139.598 304.402 149 316 149C327.598 149 337 139.598 337 128L295 128Z" fill="#63BBB6"></path>
              <path d="M337 128C337 116.402 327.598 107 316 107C304.402 107 295 116.402 295 128L337 128Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.375,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '296.083px 176.083px' }}>
            <g style={{ transform: 'rotate(-126.39deg)', transformOrigin: '296.083px 176.083px' }}>
              <path d="M281.234 161.234C273.033 169.435 273.033 182.731 281.234 190.932C289.435 199.133 302.731 199.133 310.932 190.932L281.234 161.234Z" fill="#63BBB6"></path>
              <path d="M310.932 190.932C319.134 182.731 319.134 169.435 310.932 161.234C302.731 153.033 289.435 153.033 281.234 161.234L310.932 190.932Z" fill="#1F807B"></path>
            </g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.4,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '248px 196px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '248px 196px' }}>
              <path d="M248 217C259.598 217 269 207.598 269 196C269 184.402 259.598 175 248 175V217Z" fill="#63BBB6"></path>
              <path d="M248 175C236.402 175 227 184.402 227 196C227 207.598 236.402 217 248 217L248 175Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.425,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '199.917px 176.084px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '199.917px 176.084px' }}>
              <path d="M185.068 190.933C193.269 199.134 206.565 199.134 214.766 190.933C222.967 182.732 222.967 169.435 214.766 161.234L185.068 190.933Z" fill="#63BBB6"></path>
              <path d="M214.766 161.234C206.565 153.033 193.269 153.033 185.068 161.234C176.866 169.435 176.866 182.731 185.068 190.932L214.766 161.234Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.45,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '180px 128px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '180px 128px' }}>
              <path d="M159 128C159 139.598 168.402 149 180 149C191.598 149 201 139.598 201 128L159 128Z" fill="#63BBB6"></path>
              <path d="M201 128C201 116.402 191.598 107 180 107C168.402 107 159 116.402 159 128L201 128Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>

          <motion.g initial="hidden" animate={{...smallopen.animate,
                                transition: {
                                ...smallopen.animate.transition,
                                delay: 0.475,
                                }}} variants={reveal} style={{ transform: 'none', transformOrigin: '199.917px 79.9167px' }}>
            <motion.g initial="hidden" animate="animate" variants={small_rotate} style={{ transform: 'rotate(-126.39deg)', transformOrigin: '199.917px 79.9167px' }}>
              <path d="M185.068 65.0674C176.866 73.2684 176.866 86.5649 185.068 94.7659C193.269 102.967 206.565 102.967 214.766 94.7659L185.068 65.0674Z" fill="#63BBB6"></path>
              <path d="M214.766 94.7659C222.967 86.5649 222.967 73.2684 214.766 65.0674C206.565 56.8664 193.269 56.8664 185.068 65.0674L214.766 94.7659Z" fill="#1F807B"></path>
            </motion.g>
          </motion.g>
        </motion.g>
      </g>
      <motion.g initial="hidden" animate="animate" variants={reveal} style={{ transform: 'none', transformOrigin: '248px 184px' }}>
        <path d="M248 156C263.464 156 276 143.464 276 128C276 112.536 263.464 100 248 100V156Z" fill="#1F807B"></path>
        <path d="M248 100C232.536 100 220 112.536 220 128C220 143.464 232.536 156 248 156L248 100Z" fill="#63BBB6"></path>
      </motion.g>
    </svg>
  )
}

export default Secured_Svg