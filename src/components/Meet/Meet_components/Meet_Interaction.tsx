import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'

interface MeetInteractionProps {
    isSupply: boolean;
    isBorrow: boolean;
}

function Meet_Interaction({ isSupply, isBorrow }: MeetInteractionProps) {
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { once: true, amount: 1 });
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
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="223px 237px">
                            <g transform="translate(0 0)">
                                <g className='-translate-y-[30px] animate-up_down' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rplotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":Rplotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rplotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":Rplotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rplotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":Rplotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rplotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":Rplotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ delay: .2, duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="405px 201px">
                            <g transform="translate(182 -36)">
                                <g className='-translate-y-[30px] animate-up_down delay-two' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] delay-two ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R19lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R19lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R19lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R19lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 delay-two ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R19lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R19lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R19lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R19lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ delay: .4, duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="587px 237px">
                            <g transform="translate(364 0)">
                                <g className='-translate-y-[30px] animate-up_down delay-three' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] delay-three ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1plotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R1plotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1plotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R1plotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 delay-three ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1plotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R1plotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1plotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R1plotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ delay: .6, duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="769px 201px">
                            <g transform="translate(546 -36)">
                                <g className='-translate-y-[30px] animate-up_down delay-four' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] delay-four ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R29lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R29lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R29lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R29lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 delay-four ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R29lotq6:)" cx="223" cy="237" r="90" fill="#1A88F8" />
                                        <mask id=":R29lotq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R29lotq6H1:)" cx="223" cy="237" r="90" fill="#48ABFF" />
                                        <mask id=":R29lotq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                    </g>
                </g>
                <g id="blue-masked" clipPath="url(#clip0_3066_1499)">
                    <g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="223px 237px">
                            <g transform="translate(0 0)">
                                <g className='-translate-y-[30px] animate-up_down' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rq5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":Rq5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rq5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":Rq5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:Rq5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":Rq5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:Rq5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":Rq5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ delay: .2, duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="405px 201px">
                            <g transform="translate(182 -36)">
                                <g className='-translate-y-[30px] animate-up_down delay-two' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] delay-two ${isSupply ? "" : "animate-down1"} ${isBorrow ? "" : "animate-up1"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1a5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1a5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1a5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1a5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 delay-two ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1a5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1a5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1a5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1a5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ delay: .4, duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="587px 237px">
                            <g transform="translate(364 0)">
                                <g className='-translate-y-[30px] animate-up_down delay-three' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] delay-three ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 delay-three ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
                            </g>
                        </motion.g>
                        <motion.g
                            initial={{ y: -400 }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ delay: .6, duration: 0.5, ease: 'easeOut' }}
                            opacity="1" transform-origin="769px 201px">
                            <g transform="translate(546 -36)">
                                <g className='-translate-y-[30px] animate-up_down delay-four' transform-origin="223px 237px">
                                    <g className={`-translate-y-[184px] delay-four ${isSupply ? "animate-up1" : ""} ${isBorrow ? "animate-down1" : ""}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                    <g className={`translate-y-0 delay-four ${isSupply ? "" : ""} ${isBorrow ? "animate-down2" : "animate-up2"}`} transform-origin="223px 237px">
                                        <circle mask="url(#:R1q5otq6:)" cx="223" cy="237" r="90" fill="#6BCEF5" />
                                        <mask id=":R1q5otq6:">
                                            <rect x="223" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                        <circle mask="url(#:R1q5otq6H1:)" cx="223" cy="237" r="90" fill="#B5E7FA" />
                                        <mask id=":R1q5otq6H1:">
                                            <rect x="133" y="147" width="90" height="180" fill="white" />
                                        </mask>
                                    </g>
                                </g>
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