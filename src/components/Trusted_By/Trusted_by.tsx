import React from 'react'
import { StackText } from '../ui/stack-text'
import logoData from '../../assets/Data/Trusted_Logos_Data'
import {motion} from "framer-motion"

const title_animation = ["Trusted", "by", "the", "best."]

function Trusted_By() {
    const infinite = {
        animate: {x : [0, '-50%'],
            transition: {duration: 20, ease: 'linear', repeat: Infinity}
        }
    }
  return (
    <section className='flex flex-col items-center w-full md:py-[100px] py-12 md:px-12 px-5'>
        <div className='relative w-full max-w-[986px]'>
            <div className='md:px-6 px-0'>
                <h2 className='flex flex-wrap items-center w-full gap-x-2'>
                        {title_animation.map((word, index) => (
                        <StackText
                            key={index}
                            direction="up"
                            className='text-primaryHeadingGray font-regola text-[40px] font-normal leading-[135%] -tracking-[0.8px]'
                            framerProps={{
                                show: { transition: { delay: 0.4 + (0.2 + index * 0.05) } },
                            }}
                            text={word}
                        />
                    ))}
                    </h2>
                    <p className='mt-3 font-inter text-lg md:text-xl font-regular leading-[135%] -tracking-[.33px] text-primaryParagraph w-full'>
                        Aave Protocol has been trusted by leading institutions and companies.
                    </p>
            </div>
            <div className='relative overflow-hidden before:content-[""] before:left-0 before:z-[2] before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:w-40 before:bg-left-fade
            after:content-[""] after:right-0 after:z-[2] after:pointer-events-none after:absolute after:top-0 after:bottom-0 after:w-40 after:bg-right-fade'>
                <div className='relative overflow-hidden pt-20 w-[400%] md:w-[200%]'>
                    <motion.div animate="animate" variants={infinite} className='flex flex-nowrap'>
                        <div className='flex flex-nowrap md:gap-12 md:pr-12 gap-6 pr-6'>
                            {logoData.map((logo, index) => (
                                <div className='flex items-center justify-center' key={index}>
                                    {logo.logo}
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-nowrap md:gap-12 md:pr-12 gap-6 pr-6'>
                            {logoData.map((logo, index) => (
                                <div className='flex items-center justify-center' key={index}>
                                    {logo.logo}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trusted_By