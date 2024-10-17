import React, { useRef } from 'react'
import { StackText } from '../ui/stack-text'
import LogoContainer from '@/assets/svg_components/Aave_Everywhere/LogoContianer'
import { useInView } from 'framer-motion'
import Left_Holder from './Aave_Everywhere_Components/Left_Holder'
import Right_Holder from './Aave_Everywhere_Components/Right_Holder'

const title_animation = ["Aave", "everywhere."]

function Aave_Everywhere() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: .5 });
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
                    Join Aave&apos;s growing constellation of builders.
                    </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-[9px] mt-[72px]'>
                    <Left_Holder isInView={isInView}/>
                <div ref={ref}>
                    <LogoContainer/>
                </div>
                    <Right_Holder isInView={isInView}/>
            </div>
        </div>
    </section>
  )
}

export default Aave_Everywhere