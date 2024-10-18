import React, { useState } from 'react'
import {motion} from "framer-motion"

const Accordian = ({title, content} : {title: string, content: string}) => {
    const [isOpen, setIsOpen] = useState(false)

    const Open = {
        hidden:{ opacity: 0},
        animate:{ opacity: [0, 1], transition: { duration: .2, delay: 0.1, ease: "easeInOut", once:true,}},
        exit:{ opacity: [1, 0], transition: { duration: .2, ease: "easeInOut", once:true,}}
    }

    const Height = { hidden:{ height:0,},
        animate:{ height: 'auto', transition: { duration: .2, ease: "easeInOut", once:true, }},
        exit:{ height: 0, transition: { duration: .2, delay: 0.1, ease: "easeInOut", once:true,}}
    }

    const Icon_top = {
        hidden:{ rotateZ: 0,},
        animate:{ rotateZ: [0, 180], transition: { duration: .2, ease: "easeInOut", once:true,}},
        exit:{ rotateZ: [180, 0], transition: { duration: .2, ease: "easeInOut", once:true,}}
    }
    const Icon_bottom = {
        hidden:{ rotateZ: 0, scale: 1},
        animate:{ rotateZ: [0, 80], scale: [1, 0], transition: { duration: .2, ease: "easeInOut", once:true, }},
        exit:{ rotateZ: [80, 0], scale: [0, 1], transition: { duration: .2, ease: "easeInOut", once:true,}}
    }

    return (
        <div className='mb-2 rounded-xl bg-bg_color'>
            <button onClick={()=>setIsOpen(!isOpen)} className='flex justify-between items-center gap-x-2 relative pt-[10px] pr-2 pb-1 pl-6 w-full bg-none cursor-pointer
                                before:absolute before:left-0 before:-bottom-[6px] before:w-full before:h-[6px]'>
                <h3 className='text-left font-inter text-base md:text-lg font-medium leading-[135%] -tracking-[.33px] text-primaryHeadingGray'>
                    {title}
                </h3>
                <svg className="stroke-[#1a88f8] flex-shrink-0 h-auto align-top max-w-full inline-block" width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial="hidden" animate={isOpen ? 'animate' : 'exit'} variants={Icon_top} d="M19 25.5H26L33 25.5" strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: '26px 25.5px' }} />
                    <motion.path initial="hidden" animate={isOpen ? 'animate' : 'exit'} variants={Icon_bottom} d="M26 18.5L26 25.5L26 32.5" strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: '26px 25.5px' }} />
                </svg>
            </button>
            <motion.div initial="hidden" animate={isOpen ? 'animate' : 'exit'} variants={Height} className='overflow-hidden'>
                <motion.div initial="hidden" animate={isOpen ? 'animate' : 'exit'} variants={Open} className='pt-0 pr-2 pb-4 pl-6 w-[calc(100%_-_60px)] font-inter font-[350] text-base leading-[150%] -tracking-[.18px] text-primaryParagraph '>
                    <p>
                    {content}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Accordian;