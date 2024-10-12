import React, { useState } from 'react'
import { StackText } from '../ui/stack-text'
import FadeInOnView from '../ui/FadeInOnView'
import Meet_Interaction from './Meet_components/Meet_Interaction';
const title_animation = ["Meet", "Aave."]

function Meet() {
    const [isSupply, setIsSupply] = useState(true);
    const [isBorrow, setIsBorrow] = useState(false);

    return (
        <div className='relative py-[100px] pt-[150px] flex flex-col items-center w-full px-24 after:content-[""] after:absolute after:bottom-0 after:max-w-[1082px] after:w-full after:border-bordercolor after:border-b-[1px] after:border-solid'>
            <div className='relative max-w-[986px] w-full '>
                <h2 className='flex items-center justify-center gap-2'>
                    {title_animation.map((word, index) => (
                        <StackText
                            key={index}
                            direction="up"
                            className='text-center text-[40px] w-full font-regola leading-[135%] -tracking-[0.8px] text-primaryHeadingGray'
                            framerProps={{
                                show: { transition: { delay: 0.4 + (0.2 + index * 0.05) } },
                            }}
                            text={word}
                        />
                    ))}
                </h2>
                <FadeInOnView transitionDelay={0.5} transitionDuration={1} className='mt-3 text-center font-inter text-xl font-regular leading-[135%] -tracking-[0.33px] text-primaryParagraph'>
                    Earn interest and borrow assets.
                </FadeInOnView>

                <Meet_Interaction isSupply={isSupply} isBorrow={isBorrow} />
                
                <div className='overflow-hidden h-auto mt-24 '>
                    <div className={`grid gap-x-12 px-6 duration-300 ease transition-all ${isBorrow ? "grid-cols-[4fr_11fr]" : "grid-cols-[11fr_4fr]"}`}>
                        <button className='flex flex-col gap-y-4 h-fit bg-none text-start text-inherit'
                            onClick={() => {
                                setIsSupply(true)
                                setIsBorrow(false)
                            }}
                        >
                            <span className={`block rounded-full transition-all duration-300 ease-in-out ${isSupply ? "bg-[#008aff]" : "bg-primaryGrayInActive"} w-full h-[3px]`} />
                            <span className={`block font-inter text-2xl ${isSupply ? "text-[#008aff]" : "text-primaryHeadingGrayInActive"} transition-all duration-300 ease-in-out font-medium leading-[135%] tracking-[-0.47px]`}>
                                Supply
                            </span>
                            <span className={`font-inter text-base font-normal leading-[150%] tracking-[-0.18px] text-primaryParagraph ease-in-out transition-all ${isSupply ? 'duration-300 delay-300 opacity-100 translate-y-0' : "opacity-0 -translate-y-[6px] delay-0 duration-0"}`}>
                                Earn interest by supplying assets to liquidity pools.
                            </span>
                        </button>
                        <button className='flex flex-col gap-y-4 h-fit bg-none text-start text-inherit'
                            onClick={() => {
                                setIsBorrow(true)
                                setIsSupply(false)
                            }}>
                            <span className={`block rounded-full transition-all duration-300 ease-in-out ${isBorrow ? "bg-[#008aff]" : "bg-primaryGrayInActive"} w-full h-[3px]`} />
                            <span className={`block font-inter text-2xl ${isBorrow ? "text-[#008aff]" : "text-primaryHeadingGrayInActive"} transition-all duration-300 ease-in-out font-medium leading-[135%] tracking-[-0.47px]`}>
                                Borrow
                            </span>
                            <span className={`font-inter text-base font-normal leading-[150%] tracking-[-0.18px] text-primaryParagraph ease-in-out transition-all ${isBorrow ? 'duration-300 delay-300 opacity-100 translate-y-0' : "opacity-0 -translate-y-[6px] delay-0 duration-0"}`}>
                                Borrow against your collateral from across multiple networks and assets.
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meet