import Announcement_Icon from '@/assets/svg_components/Hero/Announcement_Icon'
import { FadeText } from './animations/up-text';
import React from 'react'
import RainbowArrow_icon from '@/assets/svg_components/Hero/RainbowArrow_icon';
import "../custom_css/rainbow.css"
import "../custom_css/radar.css"
// import "../custom_css/hero_interaction.css"
import { StackText } from './animations/stack-text';
import Bars from './animations/Bars';
import ParentComponent from './animations/parent_Bar';

const title_animation = ["Access", "the", "full", "power", "of", "DeFi."]

function Hero() {
    return (
        <section className='pt-[150px] px-12'>
            <div className='w-full max-w-[986px] mx-auto relative z-[1]'>
                <FadeText framerProps={{ show: { transition: { delay: 2.2 } }, }} direction="up">
                    <div className="announcement pb-5">
                        <a href="" className='inline-flex h-fit items-center text-primaryHeadingGray text-xs font-normal leading-[105%] -tracking-[.00563rem] py-[0.5rem] px-[0.75rem] rounded-full bg-announcements gap-2 hover:bg-[#f0f0ef] transition-all duration-200'>
                            Introducing Aave's new visual identity
                            <div className='flex items-center text-primaryParagraph gap-2 text-xs font-light leading-[105%] -tracking-[.00563rem]
                        before:content-[""] before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-[#bcbbbb]
                    '>
                                Read more
                                <Announcement_Icon />
                            </div>
                        </a>
                    </div>
                </FadeText>

                <h1 className='flex items-center'>
                    {title_animation.map((word, index) => (
                        <StackText
                            key={index}
                            className="inline-block mr-2 items-center mb-4 text-5xl transition-all font-medium leading-[55px] -tracking-[1.44px] text-primaryHeadingGray font-regola"
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
                        Aave is the world's largest liquidity protocol. Supply, borrow, swap, stake and more.
                    </FadeText>
                </div>
                <div>
                    <a href="" className='cursor-pointer rainbow_hover relative inline-flex mt-7 '>
                        <FadeText framerProps={{ show: { transition: { delay: 1.6 } }, }} direction="up"><Rainbow_Button /></FadeText>
                    </a>
                </div>
                <div>
                    <FadeText framerProps={{ show: { transition: { delay: 1.8 } }, }} direction="up">
                        <div className='flex items-center gap-x-2 mt-6'>
                            <svg className="overflow-visible mb-[1px]" width="13" height="13">
                                <circle cx="6.5" cy="6.5" r="6.5" fill="#E2E0FF" className="radar-circle"></circle>
                                <circle cx="6.5" cy="6.5" r="3.5" fill="#9896FF"></circle>
                            </svg>
                            <p className='font-inter text-sm font-normal leading-[135%] -tracking-[0.09px] text-secondaryParagraph'>
                                <span className='text-primaryParagraph text-nowrap'>
                                    &#36; 18.42 billion
                                </span>
                                of liquidity currently supplied in Aave.
                            </p>
                        </div>
                    </FadeText>
                </div>
            </div>
            {/* <div className='z-0'>
                <Bars></Bars>
                <div className='w-full h-1 flex items-center justify-center'>
                    <div className='bg-colorful-bar animate-width_height_reveal max-w-[1082px] h-1 rounded-full'></div>
                </div>
            </div> */}
            <ParentComponent/>
        </section>
    )
}

export default Hero

const Rainbow_Button = () => {
    return (
        <>
            <span className='z-[2] relative inline-flex items-center gap-x-[6px] rounded-full py-[9px] pr-4 pl-5 bg-white hover:bg-[#fcfcfb] hover:shadow-rainbowHovered shadow-rainbow text-base font-medium leading-[125%] -tracking-[.18px] text-primaryHeadingGray transition-all duration-150 ease-in-out'>
                Get Started
                <RainbowArrow_icon />
            </span>
            <span className='rainbow_wrap z-1 absolute -inset-[3px] rounded-full overflow-hidden'>
                <span className='rainbow'>

                </span>
            </span>
        </>
    )
}