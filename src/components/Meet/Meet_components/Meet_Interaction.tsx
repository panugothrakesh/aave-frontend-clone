import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'

interface MeetInteractionProps {
    isSupply: boolean | null;
    isBorrow: boolean | null;
}

function Meet_Interaction({ isSupply, isBorrow }: MeetInteractionProps) {
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { once: true, amount: 1 });

    const inView = {
        initial: {y:-400},
        animate: { y : isInView ? 0 : -400,
        transition: {duration: 0.5, ease: 'easeOut', delay: 0, once: true}}
    }

    const Down_Upper = {
        hidden: {translateY: -184, visibility: 'hidden' as const},
        show: {translateY: 0,visibility: 'visible' as const,
            transition:{duration: .5, ease: 'easeInOut', delay: 0}
        },
    }
    const Down_Lower = {
        hidden: {translateY: 0, visibility: 'hidden' as const},
        show: {translateY: 400,visibility: 'visible' as const,
            transition:{duration: .5, ease: 'easeInOut', delay: 0}
        },
    }
    
    const Up_Upper = {
        hidden: {translateY: 0, visibility: 'hidden' as const},
        show: {translateY: -184,visibility: 'visible' as const,
            transition:{duration: .5, ease: 'easeInOut', delay: 0}
        },
    }
    const Up_Lower = {
        hidden: {translateY: 400, visibility: 'hidden' as const},
        show: {translateY: 0,visibility: 'visible' as const,
            transition:{duration: .5, ease: 'easeInOut', delay: 0}
        },
    }

    const frequency = {
        hidden: {translateY: -30},
        show: {
            translateY: [-30, 30, -30],
            transition: {duration: 4, ease: 'easeInOut', repeat: Infinity,}
        }
    }
    return (
        <motion.svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="986" viewBox="0 0 986 450" fill="none"
            className={`inline-block max-w-full h-auto overflow-hidden rounded-2xl align-top svg mt-12 bg-announcements`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, ease: 'easeOut' }}
        >
            <g id="2">
                <rect width="986" height="450" fill="#F7F6F6" />
                <rect width="986" height="225" fill="#FCFCFB" />
                <g
                    id="gray-masked" clipPath="url(#clip1_3066_1499)">
                    <g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="223px 237px">
                            <g transform="translate(0 0)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0,
                                    }}} variants={frequency}className={`-translate-y-[400px]`} transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0}}} className={`-translate-y-[184px]`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rplotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":Rplotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rplotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":Rplotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}} animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0}} : {}} className={`translate-y-0`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rplotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":Rplotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rplotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":Rplotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0.2,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="405px 201px">
                            <g transform="translate(182 -36)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0.2,
                                    }}} variants={frequency} className='-translate-y-[400px] delay-two' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0.2}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0.2}}} className={`-translate-y-[184px] delay-two`} transform-origin="223px 237px">
                                        <circle mask="url(#:R19lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R19lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R19lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R19lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0.2}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0.2}} : {}} className={`translate-y-0 delay-two`} transform-origin="223px 237px">
                                        <circle mask="url(#:R19lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R19lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R19lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R19lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0.4,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="587px 237px">
                            <g transform="translate(364 0)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0.4,
                                    }}} variants={frequency} className='-translate-y-[400px] delay-three' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0.4}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0.4}}} className={`-translate-y-[184px] delay-three`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1plotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R1plotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1plotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R1plotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0.4}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0.4}} : {}} className={`translate-y-0 delay-three`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1plotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R1plotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1plotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R1plotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0.6,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="769px 201px">
                            <g transform="translate(546 -36)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0.6,
                                    }}} variants={frequency} className='-translate-y-[400px] delay-four' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0.6}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0.6}}} className={`-translate-y-[184px] delay-four`} transform-origin="223px 237px">
                                        <circle mask="url(#:R29lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R29lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R29lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R29lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0.6}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0.6}} : {}} className={`translate-y-0 delay-four`} transform-origin="223px 237px">
                                        <circle mask="url(#:R29lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R29lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R29lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R29lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                    </g>
                </g>
                <g id="blue-masked" clipPath="url(#clip0_3066_1499)">
                    <g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="223px 237px">
                            <g transform="translate(0 0)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0,
                                    }}} variants={frequency} className='-translate-y-[400px]' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0}}} className={`-translate-y-[184px]`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rq5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":Rq5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rq5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":Rq5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0}} : {}} className={`translate-y-0`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rq5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":Rq5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rq5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":Rq5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0.2,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="405px 201px">
                            <g transform="translate(182 -36)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0.2,
                                    }}} variants={frequency} className='-translate-y-[400px] delay-two' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0.2}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0.2}}} className={`-translate-y-[184px] delay-two`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1a5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1a5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1a5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1a5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0.2}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0.2}} : {}} className={`translate-y-0 delay-two`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1a5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1a5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1a5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1a5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0.4,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="587px 237px">
                            <g transform="translate(364 0)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0.4,
                                    }}} variants={frequency} className='-translate-y-[400px] delay-three' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0.4}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0.4}}} className={`-translate-y-[184px] delay-three`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0.4}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0.4}} : {}} className={`translate-y-0 delay-three`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial="initial"
                            animate={{...inView.animate,
                                transition: {
                                ...inView.animate.transition,
                                delay: 0.6,
                                }}}
                            variants={inView}
                            opacity="1" transform-origin="769px 201px">
                            <g transform="translate(546 -36)">
                                <motion.g initial="hidden" animate={{...frequency.show,
                                    transition: {
                                    ...frequency.show.transition,
                                    delay: 0.6,
                                    }}} variants={frequency} className='-translate-y-[400px] delay-four' transform-origin="223px 237px">
                                    <motion.g initial='hidden' variants={isBorrow ? Down_Upper: Up_Upper} animate={isBorrow ? {...Down_Upper.show, transition:{...Down_Upper.show.transition, delay: 0.6}}: {...Up_Upper.show, transition:{...Up_Upper.show.transition, delay: 0.6}}} className={`-translate-y-[184px] delay-four`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                    <motion.g initial='hidden' variants={isSupply ? Up_Lower : isBorrow ? Down_Lower : {}}  animate={isSupply ? {...Up_Lower.show, transition:{...Up_Lower.show.transition, delay: 0.6}} : isBorrow ? {...Down_Lower.show, transition:{...Down_Lower.show.transition, delay: 0.6}} : {}} className={`translate-y-0 delay-four`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </motion.g>
                                </motion.g>
                            </g>
                        </motion.g>
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_3066_1499">
                    <rect width="986" height="225" fill="white" />
                </clipPath>
                <clipPath id="clip1_3066_1499">
                    <rect width="986" height="225" y="225" fill="white" />
                </clipPath>
            </defs>
        </motion.svg>
    )
}

export default Meet_Interaction