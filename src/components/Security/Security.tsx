import React, { useRef } from 'react'
import { StackText } from '../ui/stack-text'
import BarButton from '../ui/BarButton'
import Audits_Svg from '@/assets/svg_components/Security/SideGround/Audits_Svg'
import { useInView } from 'framer-motion'
import Bug_Bounty_Svg from '@/assets/svg_components/Security/SideGround/Bug_Bounty_Svg'
import Secured_Svg from '@/assets/svg_components/Security/SideGround/Secured_Svg'

const title_animation = ["Serious", "Security"]

function Security() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 1 });
    
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 1 });
    
    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true, amount: 1 });
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
                        Peace of mind by design.
                    </p>
            </div>
            <div className='flex flex-col gap-8 md:gap-y-[72px] mt-[72px]'>
                    <div ref={ref1} className='md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden'>
                        <div className='flex max-w-full h-full align-top bg-bg_color'>
                            <Audits_Svg isInView={isInView1}/>
                        </div>
                        <div className='flex flex-col gap-y-6 md:py-10 md:px-12 p-8'>
                            <h3 className='font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                                Extensive Audits
                            </h3>
                            <div className='w-full h-[1px] bg-[#e6e6e5]'></div>
                            <p className='font-inter text-base leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                                Peace of mind supported by multiple audits by the world&apos;s leading security firms.
                            </p>
                            <BarButton href='https://aave.com/security' className='mt-0 mb-0'>
                                Learn More
                            </BarButton>
                        </div>
                    </div>
                    <div ref={ref2} className='md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden'>
                        <div className='max-w-full h-full align-top bg-bg_color'>
                            <Bug_Bounty_Svg isInView={isInView2}/>
                        </div>
                        <div className='flex md:-order-1 flex-col gap-y-6 md:py-10 md:px-12 p-8'>
                            <h3 className='font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                                Bug Bounty
                            </h3>
                            <div className='w-full h-[1px] bg-[#e6e6e5]'></div>
                            <p className='font-inter text-base leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                                Security is a top priority. Report vulnerabilities or bugs responsibly and get rewarded.
                            </p>
                            <BarButton href='https://immunefi.com/bug-bounty/aave/' className='mt-0 mb-0'>
                                Learn More
                            </BarButton>
                        </div>
                    </div>
                    <div ref={ref3} className='md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden'>
                        <div className='max-w-full h-full align-top bg-bg_color'>
                            <Secured_Svg isInView={isInView3}/>
                        </div>
                        <div className='flex flex-col gap-y-6 md:py-10 md:px-12 p-8'>
                            <h3 className='font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                                Shortfall Secured
                            </h3>
                            <div className='w-full h-[1px] bg-[#e6e6e5]'></div>
                            <p className='font-inter text-base leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                                The Aave Protocol is secured with a backstop against protocol insolvency.
                            </p>
                            <BarButton href='https://aave.com/help/safety-module' className='mt-0 mb-0'>
                                Learn More
                            </BarButton>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Security