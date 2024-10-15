import { motion, useAnimation } from 'framer-motion';
import React, { useEffect} from 'react'

function AbstractBg_2({ isInView }: {isInView : boolean}) {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

    const reveal ={
        hidden:{rotate: -30, opacity:0 },
        show:{rotate : isInView ? 0 : -30 , opacity: isInView ? 1 : 0,
            transition: {duration:0.8, ease: "easeInOut", delay:0, once: true}
        },
    }

    useEffect(() => {
      if (isInView) {
        controls1.start({
          scale: 1,
          transition: { duration: .5, ease: 'easeInOut', delay: 0 },
        }).then(() => {
          controls1.start({
            scale: [1, .9, 1],
            transition: { duration: 4, ease: 'easeInOut', repeat: Infinity},
          });
        });
        controls2.start({
          scale: 1,
          transition: { duration: .6, ease: 'easeInOut', delay: .1 },
        }).then(() => {
          controls2.start({
            scale: [1, .9, 1],
            transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
          });
        });
        controls3.start({
          scale: 1,
          transition: { duration: .7, ease: 'easeInOut', delay: .2 },
        }).then(() => {
          controls3.start({
            scale: [1, .9, 1],
            transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
          });
        });
      }
    }, [isInView, controls1, controls2, controls3]);

  return (
    <svg
    className="absolute -z-[1] top-0 right-0 inline-block align-top"
    width="268"
    height="150"
    viewBox="0 0 268 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g initial="hidden" animate="show" variants={reveal} transform="translate(0 0)" style={{ transformOrigin: '147px 0px' }}>
      <motion.g initial={{scale:0}} animate={controls1} style={{ transformOrigin: '147px 0px' }}>
        <g style={{ transformOrigin: '147px 0px' }}>
          <circle
            mask="url(#defi-stake-circle-mask-1)"
            cx="147"
            r="147"
            fill="#DFF6FF"
          />
          <circle
            mask="url(#defi-stake-circle-mask-2)"
            cx="147"
            r="147"
            fill="#6BCEF5"
          />
        </g>
      </motion.g>
      <g style={{ transformOrigin: '147px 0px' }}>
        <motion.g initial={{scale:0}} animate={controls2} style={{transformOrigin: '147px 0px' }}>
          <circle
            mask="url(#defi-stake-circle-mask-1)"
            cx="147"
            r="121"
            fill="#6BCEF5"
          />
          <circle
            mask="url(#defi-stake-circle-mask-2)"
            cx="147"
            r="121"
            fill="#B5E7FA"
          />
        </motion.g>
      </g>
      <g style={{ transformOrigin: '147px 0px' }}>
        <motion.g initial={{scale:0}} animate={controls3} style={{transformOrigin: '147px 0px' }}>
          <circle
            mask="url(#defi-stake-circle-mask-1)"
            cx="147"
            r="71"
            fill="#DFF6FF"
          />
          <circle
            mask="url(#defi-stake-circle-mask-2)"
            cx="147"
            r="71"
            fill="#6BCEF5"
          />
        </motion.g>
      </g>
    </motion.g>
    <defs>
      <mask id="defi-stake-circle-mask-1">
        <rect y="-147" width="147" height="294" fill="white" />
      </mask>
      <mask id="defi-stake-circle-mask-2">
        <rect x="147" y="-147" width="147" height="294" fill="white" />
      </mask>
    </defs>
  </svg>
  )
}

export default AbstractBg_2