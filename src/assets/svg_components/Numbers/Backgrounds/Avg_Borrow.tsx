import { motion, useAnimation } from 'framer-motion';
import React, { useEffect} from 'react'

function Avg_Borrow({isInView}:{isInView : boolean}) {
  const controls = useAnimation();

  const inView = {
    initial: {y: -300, opacity: 0},
    animate: { y : isInView ? 0 : -300, opacity: 1,
    transition: {duration: .6, ease: 'easeInOut', once: true, delay: 0}}
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 30,
        transition: { duration: 7.5, ease: 'easeInOut' },
      }).then(() => {
        controls.start({
          rotate: [30, -30, 30],
          transition: { duration: 30, ease: 'easeInOut', repeat: Infinity },
        });
      });
    }
  }, [isInView, controls]);
  return (
    <svg
    className='w-full h-auto'
    width="457"
    height="250"
    viewBox="0 0 457 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="457" height="250" fill="#48ABFF" />
    <motion.g initial="initial" animate={controls} style={{ transformOrigin: '228.5px 0px' }}>
      <motion.g initial='initial' animate='animate' variants={inView} style={{ transform: 'none', transformOrigin: '228.5px 0px' }}>
        <circle
          mask="url(#borrow-circle-outer-mask-1)"
          cx="228.5"
          r="228.5"
          fill="#A9E7FF"
        />
        <mask id="borrow-circle-outer-mask-1">
          <rect x="228.5" y="-228.5" width="228.5" height="457" fill="white" />
        </mask>
        <circle
          mask="url(#borrow-circle-outer-mask-2)"
          cx="228.5"
          r="228.5"
          fill="#1A88F8"
        />
        <mask id="borrow-circle-outer-mask-2">
          <rect x="0" y="-228.5" width="228.5" height="457" fill="white" />
        </mask>
        <motion.g initial='initial' animate='animate' variants={inView} style={{ transform: 'none', transformOrigin: '228.5px 0px' }}>
          <circle
            mask="url(#borrow-circle-inner-mask-1)"
            cx="228.5"
            r="114"
            fill="#A9E7FF"
          />
          <mask id="borrow-circle-inner-mask-1">
            <rect x="114.5" y="-114" width="114" height="228" fill="white" />
          </mask>
          <circle
            mask="url(#borrow-circle-inner-mask-2)"
            cx="228.5"
            r="114"
            fill="#1A88F8"
          />
          <mask id="borrow-circle-inner-mask-2">
            <rect x="228.5" y="-114" width="114" height="228" fill="white" />
          </mask>
        </motion.g>
      </motion.g>
    </motion.g>
  </svg>
  )
}

export default Avg_Borrow