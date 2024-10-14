import { useInView, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function Avg_Supply() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const controls = useAnimation();

  const inView = {
    initial: {y: 300, opacity: 0},
    animate: { y : isInView ? 0 : 300, opacity: 1,
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
    ref={ref}
    width="457"
    height="250"
    viewBox="0 0 457 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'scroll' }}
  >
    <rect width="457" height="250" fill="#B5E7FA" />
    <motion.g initial="initial" animate={controls} id="top" style={{ transform: 'rotate(0deg)', transformOrigin: '228.5px 250px' }}>
      <motion.g initial='initial' animate='animate' variants={inView} style={{transformOrigin: '228.5px 250px' }}>
        <circle
          mask="url(#supply-circle-outer-mask-1)"
          cx="228.5"
          cy="250"
          r="228.5"
          fill="#DFF6FF"
        />
        <mask id="supply-circle-outer-mask-1">
          <rect x="0" y="21.5" width="228.5" height="457" fill="white" />
        </mask>
        <circle
          mask="url(#supply-circle-outer-mask-2)"
          cx="228.5"
          cy="250"
          r="228.5"
          fill="#6BCEF5"
        />
        <mask id="supply-circle-outer-mask-2">
          <rect x="228.5" y="21.5" width="228.5" height="457" fill="white" />
        </mask>
        <motion.g initial='initial' animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: .025,
                                }}} variants={inView} style={{ transformOrigin: '228.684px 250px' }}>
          <circle
            mask="url(#supply-circle-inner-mask-1)"
            cx="228.684"
            cy="250"
            r="114"
            fill="#DFF6FF"
          />
          <mask id="supply-circle-inner-mask-1">
            <rect x="228.5" y="114" width="114" height="228" fill="white" />
          </mask>
          <circle
            mask="url(#supply-circle-inner-mask-2)"
            cx="228.684"
            cy="250"
            r="114"
            fill="#6BCEF5"
          />
          <mask id="supply-circle-inner-mask-2">
            <rect x="114.5" y="114" width="114" height="228" fill="white" />
          </mask>
        </motion.g>
      </motion.g>
    </motion.g>
  </svg>
  )
}

export default Avg_Supply