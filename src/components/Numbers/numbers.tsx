import Avg_Borrow from '@/assets/svg_components/Numbers/Backgrounds/Avg_Borrow'
import Avg_Supply from '@/assets/svg_components/Numbers/Backgrounds/Avg_Supply'
import Net_deposits from '@/assets/svg_components/Numbers/Backgrounds/Net_deposits'
import Volume from '@/assets/svg_components/Numbers/Backgrounds/Volume'
import React from 'react'
import { StackText } from '../ui/stack-text'
import NumberTicker from '../ui/number-ticker'
import { useRef } from "react";
import { useInView } from "framer-motion";

const title_animation = ['Aave', 'by', 'the', 'numbers.']

function Numbers() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    
    const isInView1 = useInView(ref1, { once: true, amount: 1 });
    const isInView2 = useInView(ref2, { once: true, amount: 1 });
    const isInView3 = useInView(ref3, { once: true, amount: 1 });
    const isInView4 = useInView(ref4, { once: true, amount: 1 });

  return (
    <section className='relative md:pt-[100px] flex flex-col items-center w-full py-12 md:py-[100px] px-5 md:px-12 after:content-[""] after:absolute after:bottom-0 after:max-w-[1082px] after:w-full after:border-bordercolor after:border-b-[1px] after:border-solid'>
        <div className='relative w-full max-w-[986px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[72px] '>
                <div className=' self-start relative md:sticky top-0 md:top-[150px] md:ml-6 pb-12 md:pb-[17px]'>
                    <h2 className='flex flex-wrap items-center gap-x-2'>
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
                    <p className='mt-3 font-inter text-lg md:text-xl font-regular leading-[135%] -tracking-[.33px] text-primaryParagraph'>
                        Aave is one of the largest DeFi protocols with billions of dollars in weekly volume across Ethereum and 12+ networks.
                    </p>
                </div>
                <div className='flex flex-col gap-y-12'>
                    <div ref={ref1}>
                        <div className='overflow-hidden relative z-[1] rounded-2xl'>
                            <Net_deposits isInView={isInView1}/>
                        </div>
                        <p className='flex items-center gap-x-3 mt-3 py-5'>
                            <span className='font-regolaMedium text-2xl leading-[105%] -tracking-[.48px] font-semibold text-primaryHeadingGray w-full max-w-[4.4em]'>
                                $<NumberTicker value={19.22} decimalPlaces={2} direction='up'></NumberTicker>B
                            </span>
                            <span className='font-inter text-base leading-[135%] -tracking-[.18px] text-primaryHeadingGray opacity-70'>
                                Net deposits supplied across 13 networks.
                            </span>
                        </p>
                    </div>
                    <div>
                    <div ref={ref2} className='overflow-hidden relative z-[1] rounded-2xl'>
                            <Volume isInView={isInView2}/>
                        </div>
                        <p className='flex items-center gap-x-3 mt-3 py-5'>
                            <span className='font-regolaMedium text-2xl leading-[105%] -tracking-[.48px] text-primaryHeadingGray w-full max-w-[4.4em]'>
                                $<NumberTicker value={207.73} decimalPlaces={2} direction='up'></NumberTicker>B
                            </span>
                            <span className='font-inter text-base leading-[135%] -tracking-[.18px] text-primaryHeadingGray opacity-70'>
                                Volume, past 30 days.
                            </span>
                        </p>
                    </div>
                    <div>
                    <div ref={ref3} className='overflow-hidden relative z-[1] rounded-2xl'>
                            <Avg_Supply isInView={isInView3}/>
                        </div>
                        <p className='flex items-center gap-x-3 mt-3 py-5'>
                            <span className='font-regolaMedium text-2xl leading-[105%] -tracking-[.48px] text-primaryHeadingGray w-full max-w-[4.4em]'>
                                <NumberTicker value={6.75} decimalPlaces={2} direction='up'></NumberTicker>%
                            </span>
                            <span className='font-inter text-base leading-[135%] -tracking-[.18px] text-primaryHeadingGray opacity-70'>
                                Average stablecoin supply APY Ethereum network, past year.
                            </span>
                        </p>
                    </div>
                    <div>
                    <div ref={ref4} className='overflow-hidden relative z-[1] rounded-2xl'>
                            <Avg_Borrow isInView={isInView4}/>
                        </div>
                        <p className='flex items-center gap-x-3 mt-3 py-5'>
                            <span className='font-regolaMedium text-2xl leading-[105%] -tracking-[.48px] text-primaryHeadingGray w-full max-w-[4.4em]'>
                                <NumberTicker value={9.26} decimalPlaces={2} direction='up'></NumberTicker>%
                            </span>
                            <span className='font-inter text-base leading-[135%] -tracking-[.18px] text-primaryHeadingGray opacity-70'>
                                Average stablecoin borrow APR Ethereum network, past year.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Numbers