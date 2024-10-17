import Minted_Background from '@/assets/svg_components/GHO/Backgrounds/Minted_Bg'
import NumberTicker from '@/components/ui/number-ticker'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

function Gho_MintedBox() {
    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true, amount: 1 });
  return (
    <div ref={ref3} className='p-8 relative overflow-hidden rounded-2xl bg-bg_color'>
                    <p className='mb-2 font-regola text-2xl leading-[105%] -tracking-[.48px] text-primaryHeadingGray text-wrap'>
                        +<NumberTicker value={131663961}/>
                    </p>
                    <p className='flex items-center'>
                        <span className='text-base font-inter text-primaryParagraph -tracking-[.09px] leading-[135%]'>
                            GHO Minted
                        </span>
                        <svg className="mx-[.375em] align-[.25em]" width='4' height='4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4" fill="none">
                            <circle cx="1.83325" cy="2" r="1.5" fill="#BCBBBB"></circle>
                        </svg>
                        <span className='font-inter text-base leading-[135%] -tracking-[.09px] text-secondaryParagraph'>
                            1 Yr
                        </span>
                    </p>
                        <Minted_Background isInView={isInView3}/>
                </div>
  )
}

export default Gho_MintedBox