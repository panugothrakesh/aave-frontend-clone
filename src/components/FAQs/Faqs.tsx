import React from 'react'
import { StackText } from '../ui/stack-text'
import BarButton from '../ui/BarButton'
import Accordian from './FAQs_components/Accordian'

const title_animation = ["FAQs"]

function Faqs() {
    return (
        <section className='flex flex-col items-center w-full md:py-[100px] py-12 md:px-12 px-5'>
            <div className='relative w-full max-w-[986px]'>
                <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-x-[72px] gap-8 md:gap-0'>
                    <h2 className='flex flex-wrap w-full gap-x-2'>
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
                    <div>
                        <div className='block'>
                            <Accordian title='What is Aave?' content='Aave is a decentralised non-custodial liquidity protocol where users can participate as suppliers or borrowers. Suppliers provide liquidity to the market while earning interest, and borrowers can access liquidity by providing collateral that exceeds the borrowed amount.'/>
                            <Accordian title='Where are supplied tokens stored??' content='Supplied tokens are stored in publicly accessible smart contracts that enable overcollateralised borrowing according to governance-approved parameters. The Aave Protocol smart contracts have been audited and formally verified by third parties.'/>
                            <Accordian title='Does Aave have risks?' content='No protocol can be considered entirely risk free, but extensive steps have been taken to minimize these risks as much as possible -- the Aave Protocol code is publicly available and auditable by anyone, and has been audited by multiple smart contract auditors. Any code changes must be executed through the onchain governance processes. Additionally, there is an ongoing bug bounty campaign and service providers specializing in technical reviews and risk mitigation.'/>
                            <Accordian title='What is the Aave token?' content='AAVE is used as the centre of gravity of Aave Protocol governance. AAVE is used to vote and decide on the outcome of Aave Improvement Proposals (AIPs). Apart from this, AAVE can be staked within the protocol Safety Module to provide a backstop in the case of a shortfall event, and earn incentives for doing so.'/>
                        </div>
                            <BarButton href="https://aave.com/faq" className='text-[#1a88f8]'>
                                See More
                            </BarButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs