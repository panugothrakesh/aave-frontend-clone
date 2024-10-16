import { motion } from 'framer-motion';

function Net_deposits({isInView}:{isInView : boolean}) {

    const inView = {
        initial: {y:220,},
        animate: { y : isInView ? 0 : 220,
        transition: {duration: 0.5, ease: 'easeOut', delay: 0, once: true}}
    }
    
    const to_and_fro = {
        initial: {y:-10},
        animate: { y : [-10, 0, -10],
        transition: {duration: 3, ease: 'easeInOut', delay: 0, repeat: Infinity}}
    }
  return (
    <svg className='w-full h-auto' width="457" height="250" viewBox="0 0 457 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <g>
                <path
                    d="M0 16C0 7.16345 7.16344 0 16 0H441C449.837 0 457 7.16345 457 16V234C457 242.837 449.837 250 441 250H16C7.16344 250 0 242.837 0 234V16Z"
                    fill="#9896FF"
                />
                <rect id="left" width="229" height="250" fill="#BCBBFF" />
                <motion.g initial="initial" animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: .8,
                                }}} variants={to_and_fro} style={{ transformOrigin: '229px 186px' }}>
                    <motion.g initial="initial" animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: .2,
                                }}} variants={inView} clipPath="url(#clip1_2915_1498)" id="1" style={{ transform: 'none', transformOrigin: '229px 186px' }}>
                        <g>
                            <rect x="165" y="58" width="128" height="256" rx="64" fill="white" />
                            <rect id="Rectangle 22459" x="165" y="58" width="128" height="256" fill="#E2E0FF" />
                            <rect id="Rectangle 22458" x="165" y="58" width="64" height="256" fill="#9896FF" />
                        </g>
                    </motion.g>
                </motion.g>
                <motion.g initial="initial" animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: 0.4,
                                }}} variants={to_and_fro} style={{ transformOrigin: '165px 250px' }}>
                    <motion.g initial="initial" animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: .1,
                                }}} variants={inView} id="2" style={{ transformOrigin: '165px 250px' }}>
                        <g clipPath="url(#clip2_2915_1498)">
                            <rect x="101" y="122" width="128" height="256" rx="64" fill="white" />
                            <rect id="Rectangle 22459_2" x="101" y="122" width="128" height="256" fill="#E2E0FF" />
                            <rect id="Rectangle 22458_2" x="101" y="122" width="64" height="256" fill="#9896FF" />
                        </g>
                    </motion.g>
                </motion.g>
                <motion.g initial="initial" animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: .6,
                                }}} variants={to_and_fro} style={{ transformOrigin: '101px 314px' }}>
                    <motion.g initial="initial" animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0,
                                }}} variants={inView} id="4" style={{ transformOrigin: '101px 314px' }}>
                        <g clipPath="url(#clip3_2915_1498)">
                            <rect x="37" y="186" width="128" height="256" rx="64" fill="white" />
                            <rect id="Rectangle 22459_3" x="37" y="186" width="128" height="256" fill="#E2E0FF" />
                            <rect id="Rectangle 22458_3" x="37" y="186" width="64" height="256" fill="#9896FF" />
                        </g>
                    </motion.g>
                </motion.g>
                <motion.g initial="initial" animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: 0,
                                }}} variants={to_and_fro} style={{ transformOrigin: '293px 250px' }}>
                    <motion.g initial="initial" animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: .1,
                                }}} variants={inView} id="3" style={{ transform: 'none', transformOrigin: '293px 250px' }}>
                        <g clipPath="url(#clip4_2915_1498)">
                            <rect x="229" y="122" width="128" height="256" rx="64" fill="white" />
                            <rect id="Rectangle 22459_4" x="229" y="122" width="128" height="256" fill="#E2E0FF" />
                            <rect id="Rectangle 22458_4" x="229" y="122" width="64" height="256" fill="#9896FF" />
                        </g>
                    </motion.g>
                </motion.g>
                <motion.g initial="initial" animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: .8,
                                }}} variants={to_and_fro} style={{ transformOrigin: '357px 314px' }}>
                    <motion.g initial="initial" animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0,
                                }}} variants={inView} id="6" style={{ transform: 'none', transformOrigin: '357px 314px' }}>
                        <g clipPath="url(#clip5_2915_1498)">
                            <rect x="293" y="186" width="128" height="256" rx="64" fill="white" />
                            <rect id="Rectangle 22459_5" x="293" y="186" width="128" height="256" fill="#E2E0FF" />
                            <rect id="Rectangle 22458_5" x="293" y="186" width="64" height="256" fill="#9896FF" />
                        </g>
                    </motion.g>
                </motion.g>
                <motion.g initial="initial" animate={{...to_and_fro.animate,
                                transition: {
                                ...to_and_fro.animate.transition,
                                delay: 1,
                                }}} variants={to_and_fro} style={{ transformOrigin: '229px 314px' }}>
                    <motion.g initial="initial" animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0,
                                }}} variants={inView} id="5" style={{ transform: 'none', transformOrigin: '229px 314px' }}>
                        <g clipPath="url(#clip6_2915_1498)">
                            <rect x="165" y="186" width="128" height="256" rx="64" fill="white" />
                            <rect id="Rectangle 22459_6" x="165" y="186" width="128" height="256" fill="#E2E0FF" />
                            <rect id="Rectangle 22458_6" x="165" y="186" width="64" height="256" fill="#9896FF" />
                        </g>
                    </motion.g>
                </motion.g>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_2915_1498">
                <path
                    d="M0 16C0 7.16345 7.16344 0 16 0H441C449.837 0 457 7.16345 457 16V234C457 242.837 449.837 250 441 250H16C7.16344 250 0 242.837 0 234V16Z"
                    fill="white"
                />
            </clipPath>
            <clipPath id="clip1_2915_1498">
                <rect x="165" y="58" width="128" height="256" rx="64" fill="white" />
            </clipPath>
            <clipPath id="clip2_2915_1498">
                <rect x="101" y="122" width="128" height="256" rx="64" fill="white" />
            </clipPath>
            <clipPath id="clip3_2915_1498">
                <rect x="37" y="186" width="128" height="256" rx="64" fill="white" />
            </clipPath>
            <clipPath id="clip4_2915_1498">
                <rect x="229" y="122" width="128" height="256" rx="64" fill="white" />
            </clipPath>
            <clipPath id="clip5_2915_1498">
                <rect x="293" y="186" width="128" height="256" rx="64" fill="white" />
            </clipPath>
            <clipPath id="clip6_2915_1498">
                <rect x="165" y="186" width="128" height="256" rx="64" fill="white" />
            </clipPath>
        </defs>
    </svg>
  )
}

export default Net_deposits