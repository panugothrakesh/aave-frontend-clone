import AbstractBg_1 from '@/assets/svg_components/Defi/Backgrounds/AbstractBg_1'
import AbstractBg_2 from '@/assets/svg_components/Defi/Backgrounds/AbstractBg_2'
import AbstractBg_3 from '@/assets/svg_components/Defi/Backgrounds/AbstractBg_3'
import AbstractBg_4 from '@/assets/svg_components/Defi/Backgrounds/AbstractBg_4'
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'

function Grid_Features() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    
    const isInView1 = useInView(ref1, { once: true, amount: 1 });
    const isInView2 = useInView(ref2, { once: true, amount: 1 });
    const isInView3 = useInView(ref3, { once: true, amount: 1 });
    const isInView4 = useInView(ref4, { once: true, amount: 1 });

    return (
        <>
            <div ref={ref1} className='flex flex-col justify-end relative z-0 overflow-hidden rounded-2xl py-8 px-6 md:px-10 bg-bg_color'>
                <h3 className='mb-4 font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                    Swap
                </h3>
                <p className='text-base font-normal leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                    Swap any ERC-20, even those borrowed or supplied.
                </p>
                <AbstractBg_1 isInView={isInView1}/>
            </div>
            <div ref={ref2} className='flex flex-col justify-end relative z-0 overflow-hidden rounded-2xl py-8 px-6 md:px-10 bg-bg_color'>
                <h3 className='mb-4 font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                    Stake
                </h3>
                <p className='text-base font-normal leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                    Earn rewards for securing the protocol.
                </p>
                <AbstractBg_2 isInView={isInView2}/>
            </div>
            <div ref={ref3} className='flex flex-col justify-end relative z-0 overflow-hidden rounded-2xl py-8 px-6 md:px-10 bg-bg_color'>
                <h3 className='mb-4 font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                    Health Factor
                </h3>
                <p className='text-base font-normal leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                    Easily track the risk level of your borrow positions.
                </p>
                <AbstractBg_3 isInView={isInView3}/>
            </div>
            <div ref={ref4} className='flex flex-col justify-end relative z-0 overflow-hidden rounded-2xl py-8 px-6 md:px-10 bg-bg_color'>
                <h3 className='mb-4 font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                    Multi-Network
                </h3>
                <p className='text-base font-normal leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                    Deployable on any EVM compatible network.
                </p>
                <AbstractBg_4 isInView={isInView4}/>
            </div>
        </>
    )
}

export default Grid_Features