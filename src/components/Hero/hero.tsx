import React from 'react'
import Announcement_Icon from '@/assets/svg_components/Hero/Announcement_Icon'
import { FadeText } from '../ui/up-text';
import { StackText } from '../ui/stack-text';
import Rainbow_Button from './Hero_components/Rainbow_Button';
import Svg_Components from '../../assets/svg_components/Hero/Segments/Svg_Components';

const title_animation = ["Access", "the", "full", "power", "of", "DeFi."]

function Hero() {
    return (
        <section className='md:pt-[150px] md:px-12 px-5 pt-24'>
            <div className='w-full max-w-[986px] mx-auto relative z-[1]'>
                <FadeText framerProps={{ show: { transition: { delay: 2.2 } }, }} direction="up">
                    <div className="announcement pb-5">
                        <a href="" className='inline-flex h-fit items-center text-primaryHeadingGray text-xs font-normal leading-[105%] -tracking-[.00563rem] py-[0.5rem] px-[0.75rem] rounded-full bg-announcements gap-2 hover:bg-[#f0f0ef] transition-all duration-200'>
                            Introducing Aave&apos;s new visual identity
                            <div className='flex items-center text-primaryParagraph gap-2 text-xs font-light leading-[105%] -tracking-[.00563rem]
                        before:content-[""] before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-[#bcbbbb] '>
                                Read more
                                <Announcement_Icon />
                            </div>
                        </a>
                    </div>
                </FadeText>

                <h1 className='flex items-center text-[2.5rem] md:text-5xl font-medium leading-[3rem] md:leading-[55px] -tracking-[.075rem] md:-tracking-[1.44px] text-primaryHeadingGray font-regola mb-4'>
                    {title_animation.map((word, index) => (
                        <StackText
                            key={index}
                            className="inline-block relative mr-2 items-center transition-all"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.4 + (0.2 + index * 0.05) } },
                            }}
                            text={word}
                        />
                    ))}
                </h1>
                <div className='max-w-[20em] text-xl'>
                    <FadeText className='text-xl font-normal normal text-primaryParagraph leading-[150%] -tracking-[0.47px]'
                        framerProps={{ show: { transition: { delay: 1.4 } }, }} direction="up">
                        Aave is the world<em className='mr-0.5 -ml-0.5'>&apos;</em>s largest liquidity protocol. Supply, borrow, swap, stake and more.
                    </FadeText>
                </div>
                <div>
                    <a href="" className='cursor-pointer group rainbow_hover relative inline-flex mt-7 '>
                        <FadeText framerProps={{ show: { transition: { delay: 1.6 } }, }} direction="up"><Rainbow_Button /></FadeText>
                    </a>
                </div>
                <div>
                    <FadeText framerProps={{ show: { transition: { delay: 1.8 } }, }} direction="up">
                        <div className='flex items-center gap-x-2 mt-6'>
                            <svg className="overflow-visible mb-[1px]" width="13" height="13">
                                <circle cx="6.5" cy="6.5" r="6.5" fill="#E2E0FF" className=" animate-radar_circle origin-center"></circle>
                                <circle cx="6.5" cy="6.5" r="3.5" fill="#9896FF"></circle>
                            </svg>
                            <p className='font-inter text-sm font-light leading-[135%] -tracking-[0.09px] text-secondaryParagraph'>
                                <span className='text-primaryParagraph text-nowrap'>
                                    <span className=' tracking-wider'>
                                    &#36;18.42
                                        </span>
                                        &#8203; billion&nbsp;
                                </span>
                                of liquidity currently supplied in Aave.
                            </p>
                        </div>
                    </FadeText>
                </div>
            </div>
            <Svg_Components />
        </section>
    )
}

export default Hero