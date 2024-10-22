// import React, { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

type ButtonType ={
    children: React.ReactNode;
    className?: string;
    href?: string;
}

function BarButton({children, className, href}: ButtonType) {
  return (
    <motion.a href={href}
    className={`cursor-pointer my-8 flex items-center gap-x-1 relative pb-2 max-w-fit no-underline text-base font-regolaMedium on leading-[1] font-medium -tracking-[.18px] transition-[background-size] bg-current-linear bg-no-repeat bg-[0_1.4em] bg-0_100% hover:bg-[length:100%_100%] duration-300 hover:delay-200 ease-[cubic-bezier(.25,0,.5,1)]
        before:content-[''] before:absolute before:bottom-0 before:w-[100%] before:h-[1.5px] before:bg-hover-linear before:bg-[length:300%_2px] before:bg-no-repeat before:bg-[right_0_bottom_0] hover:before:bg-[right_100%_bottom_0] before:opacity-40 hover:before:bg-hover-linearH hover:before:opacity-100 before:delay-0 hover:before:duration-500 before:duration-500 before:ease-[cubic-bezier(.25,0,.5,1)] custom_transition
        ${className}
    `}>
        {children}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    </motion.a>
  )
}

export default BarButton