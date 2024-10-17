import React from 'react'
import { StackText } from '../ui/stack-text'
import BarButton from '../ui/BarButton'

const title_animation = ["Serious", "Security"]

function Security() {
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
                    <div className='md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden'>
                        <div className='flex opacity-20 py-12 bg-black bg-opacity-10 max-w-full h-auto align-top items-center justify-center'>
                            SVG Not Yet Done...
                        </div>
                        <div className='flex flex-col gap-y-6 md:py-10 md:px-12 p-8'>
                            <h3 className='font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                                Extensive Audits
                            </h3>
                            <div className='w-full h-[1px] bg-[#e6e6e5]'></div>
                            <p className='font-inter text-base leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                                Peace of mind supported by multiple audits by the world&apos;s leading security firms.
                            </p>
                            <BarButton className='my-0'>
                                Learn More
                            </BarButton>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden'>
                        <div className='flex flex-col gap-y-6 md:py-10 md:px-12 p-8'>
                            <h3 className='font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                                Bug Bounty
                            </h3>
                            <div className='w-full h-[1px] bg-[#e6e6e5]'></div>
                            <p className='font-inter text-base leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                                Security is a top priority. Report vulnerabilities or bugs responsibly and get rewarded.
                            </p>
                            <BarButton className='my-0'>
                                Learn More
                            </BarButton>
                        </div>
                        <div className='flex opacity-20 py-12 bg-black bg-opacity-10 max-w-full h-auto align-top items-center justify-center'>
                            SVG Not Yet Done...
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden'>
                        <div className='flex opacity-20 py-12 bg-black bg-opacity-10 max-w-full h-auto align-top items-center justify-center'>
                            SVG Not Yet Done...
                        </div>
                        <div className='flex flex-col gap-y-6 md:py-10 md:px-12 p-8'>
                            <h3 className='font-regola text-2xl leading-[135%] -tracking-[.48px] text-primaryHeadingGray'>
                                Shortfall Secured
                            </h3>
                            <div className='w-full h-[1px] bg-[#e6e6e5]'></div>
                            <p className='font-inter text-base leading-[150%] -tracking-[.18px] text-primaryParagraph'>
                                The Aave Protocol is secured with a backstop against protocol insolvency.
                            </p>
                            <BarButton className='my-0'>
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