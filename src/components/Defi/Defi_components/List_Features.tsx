import Community_Icon from '@/assets/svg_components/Defi/Icons/Community_Icon'
import Transparent_Icon from '@/assets/svg_components/Defi/Icons/Transparent_Icon'
import Wallet_Icon from '@/assets/svg_components/Defi/Icons/Wallet_Icon'
import React from 'react'
import Composability_Icon from './Composability_Icon'

function List_Features() {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-10 rounded-2xl md:p-8 py-7 px-8'>
            <div className='flex items-center gap-x-4 font-medium'>
                <Wallet_Icon/>
                <h3>
                    Non-Custodial
                </h3>
            </div>
            <p className='font-base -tracking-[.18px] text-primaryParagraph'>
                Users maintain control over their own funds throughout the supplying and borrowing process.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-10 rounded-2xl md:p-8 py-7 px-8 bg-bg_color'>
            <div className='flex items-center gap-x-4 font-medium'>
                <Transparent_Icon/>
                <h3>
                    Transparent
                </h3>
            </div>
            <p className='font-base -tracking-[.18px] text-primaryParagraph'>
                The Aave Protocol is open source and transactions are visible to anyone.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-10 rounded-2xl md:p-8 py-7 px-8'>
            <div className='flex items-center gap-x-4 font-medium'>
                <Community_Icon/>
                <h3>
                    Community Governed
                </h3>
            </div>
            <p className='font-base -tracking-[.18px] text-primaryParagraph'>
                AAVE token holders decide which assets are listed and steer protocol development.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-10 rounded-2xl md:p-8 py-7 px-8 bg-bg_color'>
            <div className='flex items-center gap-x-4 font-medium'>
                <Composability_Icon/>
                <h3>
                    Composability
                </h3>
            </div>
            <p className='font-base -tracking-[.18px] text-primaryParagraph'>
                Integrating Aave&apos;s liquidity pools and interest rate mechanisms enables the creation of diverse products and applications
            </p>
        </div>
    </>
  )
}

export default List_Features