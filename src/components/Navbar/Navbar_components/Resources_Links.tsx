import Brand_Icon from '@/assets/svg_components/Navbar/Resources/Icons/Brand_Icon'
import FAQ_Icon from '@/assets/svg_components/Navbar/Resources/Icons/FAQ_Icon'
import Governance_Icon from '@/assets/svg_components/Navbar/Resources/Icons/Governance_Icon'
import HelpNSupport_Icon from '@/assets/svg_components/Navbar/Resources/Icons/HelpNSupport_Icon'
import React from 'react'

function Resources_Links() {
    return (
        <>
            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <Brand_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        Brand
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        Assets, examples and guides.
                    </p>
                </div>
            </a>

            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <FAQ_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        FAQ
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        Answers to common questions.
                    </p>
                </div>
            </a>

            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <HelpNSupport_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        Help & Support
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        Guides, articles and more.
                    </p>
                </div>
            </a>

            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <Governance_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        Governance
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        The Aave Governance forum.
                    </p>
                </div>
            </a>
        </>
    )
}

export default Resources_Links