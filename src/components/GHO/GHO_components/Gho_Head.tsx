import BarButton from '@/components/ui/BarButton'
import { StackText } from '@/components/ui/stack-text'
import React from 'react'

const title_animation = ["GHO"]

function Gho_Head() {
  return (
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
                    </BarButton>
            </div>
  )
}

export default Gho_Head