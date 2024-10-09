import Announcement_Icon from '@/assets/svg_components/Hero/Announcement_Icon'
import { FadeText } from "../components/ui/fade-text";
import React from 'react'
import RainbowArrow_icon from '@/assets/svg_components/Hero/RainbowArrow_icon';
import "../custom_css/rainbow.css"

const title_animation = [ "Access", "the", "full", "power", "of", "DeFi."]

function Hero() {
  return (
    <section className='pt-[150px] px-12'>
        <div className='w-full max-w-[986px] mx-auto relative'>
            <div>
                <div className="announcement pb-5">
                    <a href="" className='inline-flex h-fit items-center text-primaryHeadingGray text-xs font-normal leading-[105%] -tracking-[.00563rem] py-[0.5rem] px-[0.75rem] rounded-full bg-announcements gap-2 hover:bg-[#f0f0ef] transition-all duration-200'>
                        Introducing Aave's new visual identity
                    <div className='flex items-center text-primaryParagraph gap-2 text-xs font-light leading-[105%] -tracking-[.00563rem]
                        before:content-[""] before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-[#bcbbbb]
                    '>
                        Read more
                        <Announcement_Icon/>
                    </div>
                    </a>
                </div>
            </div>
        
        <h1 className='flex items-center'>
        {title_animation.map((word, index) => (
            <FadeText
              key={index}
              className="inline-block mr-2 items-center mb-4 text-5xl transition-all font-medium leading-[55px] -tracking-[1.44px] text-primaryHeadingGray font-regola"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 + index * 0.05 } },
              }}
              text={word}
            />
          ))}
        </h1>
        <div>
          <p className='max-w-[20em] ss01 font-inter text-xl font-normal normal text-primaryParagraph leading-[150%] -tracking-[0.47px]'>
            Aave is the world&apos;s largest liquidity protocol. Supply, borrow, swap, stake and more.
          </p>
        </div>
        <div>
          <a href="" className='cursor-pointer rainbow_hover relative inline-flex mt-7 '>
            <span className='z-[2] relative inline-flex items-center gap-x-[6px] rounded-full py-[9px] pr-4 pl-5 bg-white hover:bg-[#fcfcfb] hover:shadow-rainbowHovered shadow-rainbow text-base font-medium leading-[125%] -tracking-[.18px] text-primaryHeadingGray transition-all duration-150 ease-in-out'>
                Get Started
                <RainbowArrow_icon/>
            </span>
            <span className='rainbow_wrap z-1 absolute -inset-[3px] rounded-full overflow-hidden'>
                <span className='rainbow'>

                </span>
            </span>
          </a>
        </div>
        <div>

        </div>
        </div>
    </section>
  )
}

export default Hero