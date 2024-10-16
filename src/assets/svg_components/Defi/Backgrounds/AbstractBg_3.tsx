import { motion } from 'framer-motion'

function AbstractBg_3({ isInView }: {isInView : boolean}) {
    const reveal ={
        hidden:{scale: 0, rotate:360, opacity: 0},
        show:{ rotate: isInView ? 0 : 360, scale : isInView ? 1 : 0 , opacity: isInView ? 1 : 0,
            transition: {type: 'spring',
                stiffness: 150,
                damping: 20,
                mass: 1,
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0,
                once: true,}
        },
    }

    const fillColor = {
        hidden: {
          fill: "rgb(255, 228, 196, 1)",
        },
        show: {
            fill: isInView ? ["rgb(255, 228, 196, 1)", "rgb(255, 247, 174, 1)", "rgb(255, 228, 196, 1)"] : "rgb(255, 228, 196, 1)",
            transition: {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
            }
            }
      };
    
    const Stroke_and_FillColor = {
        hidden: {
            stroke: "rgb(255, 170, 70, 1)",
            fill: "rgb(255, 228, 196, 1)", 
        },
        show: {
            fill: isInView ? ["rgb(255, 228, 196, 1)","rgb(255, 247, 174, 1)","rgb(255, 228, 196, 1)"]: "rgb(255, 228, 196, 1)", 
            stroke: isInView ?  ["rgb(255, 170, 70, 1)", "rgb(255, 214, 49, 1)", "rgb(255, 170, 70, 1)"] : "rgb(255, 228, 196, 1)",
          transition: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }
      };
    
      const Inner_FillColor = {
        hidden: {
            fill: "rgb(255, 128, 0, 1)", 
        },
        show: {
            fill: isInView ? ["rgb(255, 128, 0, 1)" , "rgb(255, 184, 0, 1)", "rgb(255, 128, 0, 1)"] : "rgb(255, 128, 0, 1)",
          transition: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }
      };

    const to_and_fro = {
        initial: {rotate: 0},
        animate: {rotate: isInView ? [0, 40, 0] : [0, 1, 0], 
            transition: {
                duration: isInView ? 8 : 1, ease:"easeInOut", repeat: Infinity,
    }}}
  return (
    <motion.svg
    className="absolute -z-[1] top-0 right-0 inline-block align-top"
    width="402"
    initial={{opacity: 0}}
    animate={{opacity: isInView ? 1 : 0, transition:{ duration: .5, once: true, ease: 'easeInOut'}}}
    height="201"
    viewBox="0 0 402 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'translate(120px, -48px)' }}
  >
    <g clipPath="url(#clip0_2961_6831)">
      <g opacity="1">
        <motion.circle initial='hidden' animate='show' variants={fillColor} cx="201" cy="201" r="201" />
      </g>
      <motion.g initial='hidden' animate='show' variants={reveal} style={{ transformOrigin: '198.25px 201px' }}>
        <motion.g initial='initial' animate='animate' variants={to_and_fro} style={{ transform: 'rotate(0deg)', transformOrigin: '198.25px 201px' }}>
          <motion.circle
            initial='hidden' animate='show' variants={Stroke_and_FillColor}
            cx="201"
            cy="201"
            r="109.5"
            strokeWidth="55"
          />
          <motion.circle
            initial='hidden' animate='show' variants={Inner_FillColor}
            cx="117"
            cy="130"
            r="31"
            stroke="#FCFCFB"
            strokeWidth="12"
          />
        </motion.g>
      </motion.g>
    </g>
    <defs>
      <clipPath id="clip0_2961_6831">
        <rect width="402" height="201" fill="white" />
      </clipPath>
    </defs>
  </motion.svg>
  )
}

export default AbstractBg_3