import React from 'react'
import Gho_IntroBox from './GHO_components/Gho_IntroBox'
import Gho_CollateralisationBox from './GHO_components/Gho_CollateralisationBox'
import Gho_MintedBox from './GHO_components/Gho_MintedBox'
import Gho_Head from './GHO_components/Gho_Head'

function GHO() {
  return (
    <section className='flex flex-col items-center w-full md:py-[100px] py-12 md:px-12 px-5'>
        <div className='relative w-full max-w-[986px]'>
            <Gho_Head/>
            <div className='mt-[72px] grid grid-cols-1 md:grid-cols-[10fr_6fr] md:grid-rows-2 gap-6'>
                <Gho_IntroBox/>
                <Gho_CollateralisationBox/>
                <Gho_MintedBox/>
            </div>
        </div>
    </section>
  )
}

export default GHO