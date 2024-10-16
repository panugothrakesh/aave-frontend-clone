import { motion } from 'framer-motion'

function AbstractBg_1({ isInView }: {isInView : boolean}) {
    const reveal ={
        hidden:{y: -300, opacity:0},
        show:{y : isInView ? 0 : -300 , opacity: isInView ? 1 : 0,
            transition: {duration:0.8, ease: "easeInOut", delay:0, once: true}
        },
    }

    const to_and_fro = {
        initial: {y:-12},
        animate: {y: isInView ? [-12, 0, -12] : -12, 
            transition: {
                duration: 4, ease:"easeInOut", repeat: Infinity,
    }}}


  return (
    <svg
    width="473"
    height="150"
    viewBox="0 0 473 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -z-[1] top-0 right-0 inline-block align-top"
  >
    <g transform="translate(0 -150)">
      <motion.g initial="hidden" animate={{...reveal.show,
                                transition: {
                                ...reveal.show.transition,
                                delay: .4,
                                }}} variants={reveal}
        style={{ mixBlendMode: 'multiply', transformOrigin: '323px 150px' }}
      >
        <motion.g initial='initial' animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: .4,
                                }}} variants={to_and_fro} style={{ transformOrigin: '323px 150px' }}>
          <g id="Ellipse 3341">
            <path
              d="M323 9.15527e-05C240.157 0.000106037 173 67.1574 173 150C173 232.843 240.157 300 323 300L323 9.15527e-05Z"
              fill="#FFD7B3"
            />
          </g>
          <g id="Ellipse 7914">
            <path
              d="M323 -3.05176e-05C405.843 -1.60329e-05 473 67.1573 473 150C473 232.843 405.843 300 323 300L323 -3.05176e-05Z"
              fill="#FF8947"
            />
          </g>
        </motion.g>
      </motion.g>
      <motion.g initial="hidden" animate='show' variants={reveal}
        style={{ mixBlendMode: 'multiply', transformOrigin: '473px 150px' }}
      >
        <motion.g initial='initial' animate='animate' variants={to_and_fro} style={{ transform: 'translateY(-7.47614px)', transformOrigin: '473px 150px' }}>
          <g id="Ellipse 3341_2">
            <path
              d="M473 9.15527e-05C555.843 0.000106037 623 67.1574 623 150C623 232.843 555.843 300 473 300L473 9.15527e-05Z"
              fill="#FFD7B3"
            />
          </g>
          <g id="Ellipse 7914_2">
            <path
              d="M473 -3.05176e-05C390.157 -1.60329e-05 323 67.1573 323 150C323 232.843 390.157 300 473 300L473 -3.05176e-05Z"
              fill="#FF8947"
            />
          </g>
        </motion.g>
      </motion.g>
    </g>
  </svg>
  )
}

export default AbstractBg_1