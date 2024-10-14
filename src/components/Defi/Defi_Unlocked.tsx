import React from 'react'
import { StackText } from '../ui/stack-text'
import Grid_Features from './Defi_components/Grid_Features'
import List_Features from './Defi_components/List_Features'

const title_animation = ['Defi,', 'unlocked.']

function Defi_Unlocked() {
  return (
    <section className='flex items-center flex-col w-full py-[100px] px-12'>
        <div className='relative w-full max-w-[986px]'>
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
            <div className='grid grid-cols-2 grid-rows-[300px_300px] gap-y-12 gap-x-10 mt-12'>
                <Grid_Features/>
            </div>
            <div className='mt-12'>
                    <List_Features/>
            </div>
        </div>
    </section>
  )
}

export default Defi_Unlocked