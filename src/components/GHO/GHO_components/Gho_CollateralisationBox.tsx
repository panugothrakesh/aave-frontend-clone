import Collateralisation_Background from '@/assets/svg_components/GHO/Backgrounds/Collateralisation_Bg'
import NumberTicker from '@/components/ui/number-ticker'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

function Gho_CollateralisationBox() {
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 1 });
  return (
    <div ref={ref2} className='p-8 relative overflow-hidden rounded-2xl bg-bg_color'>
        <p className='mb-2 font-regola text-2xl leading-[105%] -tracking-[.48px] text-primaryHeadingGray text-wrap'>
            <NumberTicker value={245}/>%
        </p>
        <p className='flex items-center'>
            <span className='text-base font-inter text-primaryParagraph -tracking-[.09px] leading-[135%]'>
                Collateralisation
            </span>
            <svg className="mx-[.375em] align-[.25em]" width='4' height='4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4" fill="none">
                <circle cx="1.83325" cy="2" r="1.5" fill="#BCBBBB"></circle>
            </svg>
            <span className='font-inter text-base leading-[135%] -tracking-[.09px] text-secondaryParagraph'>
                30 Day Avg
            </span>
        </p>
            <Collateralisation_Background isInView={isInView2}/>
    </div>
  )
}

export default Gho_CollateralisationBox