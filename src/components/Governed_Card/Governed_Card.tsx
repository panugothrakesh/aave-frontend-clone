import React, { useRef } from 'react'
import { StackText } from '../ui/stack-text'
import Goverened_Circles from '@/assets/svg_components/Governed_Card/Background/Goverened_Circles'
import { useInView } from 'framer-motion';
import NumberTicker from '../ui/number-ticker';

const para_Animation = ["AAVE", "token", "holders", "guide", "the", "Aave", "Protocol", "via", "procedures,", "voting,", "and", "smart", "contract", "execution."] 
const title_Animation = ["Governed", "by", "you", "&", <NumberTicker className='font-regola text-[#b5e1ff] sm:w-[7.5rem] text-3xl sm:text-[40px] font-normal leading-[120%] md:leading-[135%] md:-tracking-[.8px] -tracking-[.075px]' value={193119} decimalPlaces={0} direction='up'></NumberTicker> , "others."] 

function Governed_Card() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: .5 });
  return (
    <section className='flex flex-col items-center w-full md:py-[100px] py-12 md:px-12 px-5'>
        <div className='relative w-full max-w-[986px]'>
            <div ref={ref} className='flex flex-col justify-center items-center relative z-0 rounded-2xl md:aspect-[986/480] w-full bg-[#00498b] text-center overflow-hidden p-12 aspect-auto md:px-4 md:py-16'>
            <h2 className='flex flex-wrap items-center justify-center w-full gap-x-2 mt-4 mb-4'>
                        {title_Animation.map((word, index) => (
                        <StackText
                            key={index}
                            direction="up"
                            className='font-regola text-white text-3xl sm:text-[40px] font-normal leading-[120%] md:leading-[135%] md:-tracking-[.8px] -tracking-[.075px]'
                            framerProps={{
                                show: { transition: { delay: 0.4 + (0.2 + index * 0.05) } },
                            }}
                            text={word}
                        />
                    ))}
                    </h2>
                <div className='flex sm:w-[90%] md:w-1/2 flex-wrap justify-center'>
                    {para_Animation.map((word, index) => (
                        <StackText
                            key={index}
                            direction="up"
                            className='mt-3 font-inter text-lg md:text-xl font-regular leading-[135%] -tracking-[.33px] text-[#90caff] w-full ml-1'
                            framerProps={{
                                show: { transition: { delay: 0.4 + (0.2 + index * 0.05) } },
                            }}
                            text={word}
                        />
                        ))}
                </div>
                <a href="" className='flex items-center gap-x-[6px] mt-6 rounded-full py-3 pl-5 pr-[18px] group bg-white hover:scale-[102%]
                shadow-[0_2px_2px_0_rgba(0,0,0,0.02)] text-[#00498b] font-inter text-base font-medium leading-[105%] -tracking-[.18px] transition-all duration-[180] ease-[cubic-bezier(.25,0,.5,1)] no-underline'>
                    Go to the Forum
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='block group-hover:translate-x-[.125rem] transition-all duration-[180] ease-[cubic-bezier(.25,0,.5,1)]'><path d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
                <Goverened_Circles isInView={isInView}/>
            </div>
        </div>
    </section>
  )
}

export default Governed_Card