// import React, { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

type ButtonType ={
    children: React.ReactNode;
    className?: string;
}

function BarButton({children, className}: ButtonType) {
  return (
    <motion.a href=""
    className={`cursor-pointer text-primaryHeadingGray my-8 flex items-center gap-x-1 relative pb-2 max-w-fit no-underline text-base font-regolaMedium on leading-[1] font-medium -tracking-[.18px] transition-[background-size] bg-current-linear bg-no-repeat bg-[0_1.4em] bg-0_100% hover:bg-[length:100%_100%] duration-300 hover:delay-200 ease-[cubic-bezier(.25,0,.5,1)]
        before:content-[''] before:absolute before:bottom-0 before:w-[100%] before:h-[1.5px] before:bg-hover-linear before:bg-[length:300%_2px] before:bg-no-repeat before:bg-[right_0_bottom_0] hover:before:bg-[right_100%_bottom_0] before:opacity-40 hover:before:bg-hover-linearH hover:before:opacity-100 before:delay-0 hover:before:duration-500 before:duration-500 before:ease-[cubic-bezier(.25,0,.5,1)] custom_transition
        ${className}
    `}>
        {children}
    </motion.a>
  )
}

export default BarButton