import Bug_Bounty_Icon from '@/assets/svg_components/Navbar/Developers/Icons/Bug_Bounty_Icon'
import Documentation_Icon from '@/assets/svg_components/Navbar/Developers/Icons/Documentation_Icon'
import Security_Icon from '@/assets/svg_components/Navbar/Developers/Icons/Security_Icon'
import React from 'react'

function Developers_Links() {
    return (
        <>
            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <Documentation_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        Documentation
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        Technical guides for developers.
                    </p>
                </div>
            </a>


            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <Security_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        Security
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        Audit reports and information.
                    </p>
                </div>
            </a>


            <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                <Bug_Bounty_Icon />
                <div>
                    <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                        Bug Bounty
                    </p>
                    <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                        Report responsibly and get rewarded.
                    </p>
                </div>
            </a>
        </>
    )
}

export default Developers_Links