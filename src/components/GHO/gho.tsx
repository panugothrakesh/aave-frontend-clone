import React, { useRef } from 'react'
import { StackText } from '../ui/stack-text'
import BarButton from '../ui/BarButton'
import GHO_Intro from '@/assets/svg_components/GHO/Backgrounds/Gho_Intro'
import NumberTicker from '../ui/number-ticker'
import Collateralisation_Background from '@/assets/svg_components/GHO/Backgrounds/Collateralisation_Bg'
import Minted_Background from '@/assets/svg_components/GHO/Backgrounds/Minted_Bg'
import { useInView } from 'framer-motion'

const title_animation = ["GHO"]

function GHO() {

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: .5 });

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
                    <p className='mt-3 font-inter text-lg md:text-xl font-regular leading-[135%] -tracking-[.33px] text-primaryParagraph w-full max-w-[24em]'>
                        GHO is the only decentralised, overcollateralised stablecoin native to the Aave Protocol.
                    </p>
                    <BarButton>
                        Learn More
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
                    </BarButton>
            </div>
            <div className='mt-[72px] grid grid-cols-[10fr_6fr] grid-rows-2 gap-6'>
                <div ref={ref1} className='row-span-2 relative overflow-hidden rounded-2xl bg-bg_color'>
                    <GHO_Intro isInView={isInView1}/>
                </div>
                <div className='p-8 relative overflow-hidden rounded-2xl bg-bg_color'>
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
                        <Collateralisation_Background/>
                </div>
                <div className='p-8 relative overflow-hidden rounded-2xl bg-bg_color'>
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
                        <Minted_Background/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GHO