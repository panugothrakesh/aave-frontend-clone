import { motion } from 'framer-motion'
import React from 'react'

type HolderProps ={
    Text: string,
    hidden?: string,
    delay: number,
    isInView: boolean,
    children: React.ReactNode
}

function Holder_Button({Text, children, delay, isInView, hidden}: HolderProps) {
    const reveal = {
        hidden: {opacity: 0, scale: .75, y: 60},
        animate:{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1: .75,
            y: isInView ? 0 : 60,
            transition:{
                type: "spring",
                stiffness: 240,
                damping: 20,
                once: true,
                delay,
            }
        }
    }
  return (
    <motion.div initial="hidden" animate="animate" variants={reveal} className={`${hidden} sm:block`}>
        <a href="" className='flex items-center group justify-center relative'>
            <div className='group-hover:opacity-100 hidden opacity-0 duration-150 ease-in-out transition-all text-sm font-normal font-inter sm:flex justify-center items-center gap-x-[6px] absolute -top-14 group-hover:translate-y-0 translate-y-[10px] z-1 py-3 px-4 border-[1px] border-black rounded-full min-w-max bg-primaryHeadingGray shadow-link_buttons whitespace-nowrap -tracking-[.18px] text-white pointer-events-none'>
                <span>
                    {Text}
                </span>
                <svg className="shrink-0 max-w-full h-auto align-top inline-block" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="currentColor"
                >
                    <path d="M6.86188 0.709162C7.15477 0.416269 7.62965 0.416269 7.92254 0.709162L12.6862 5.47283C12.9791 5.76572 12.9791 6.2406 12.6862 6.53349L7.92254 11.2972C7.62965 11.59 7.15477 11.59 6.86188 11.2972C6.56899 11.0043 6.56899 10.5294 6.86188 10.2365L10.3452 6.75316H0.84217C0.427956 6.75316 0.0921694 6.41737 0.0921696 6.00316C0.092169 5.58895 0.427956 5.25316 0.84217 5.25316H10.3452L6.86188 1.76982C6.56899 1.47693 6.56899 1.00206 6.86188 0.709162Z"></path>
                </svg>
            </div>
            <div className='overflow-hidden rounded-2xl relative scale-100 group-hover:scale-105 duration-150 ease-in-out transition-all'>
                {children}
            </div>
        </a>
    </motion.div>
  )
}

export default Holder_Button