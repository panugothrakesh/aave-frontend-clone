"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Logo from "../assets/svg_components/Navbar/logo"
import DropDownArrow from "@/assets/svg_components/Navbar/dropdownarrow";
import App_Icon from "@/assets/svg_components/Navbar/Products/Icons/App_Icon";
import App_Bg from "@/assets/svg_components/Navbar/Products/Background/App_Bg";
import GHO_Icon from "@/assets/svg_components/Navbar/Products/Icons/GHO_Icon";
import GHO_Bg from "@/assets/svg_components/Navbar/Products/Background/GHO_Bg";
import Brand_Icon from "@/assets/svg_components/Navbar/Resources/Icons/Brand_Icon";
import FAQ_Icon from "@/assets/svg_components/Navbar/Resources/Icons/FAQ_Icon";
import HelpNSupport_Icon from "@/assets/svg_components/Navbar/Resources/Icons/HelpNSupport_Icon";
import Governance_Icon from "@/assets/svg_components/Navbar/Resources/Icons/Governance_Icon";
import Brand_Sg from "@/assets/svg_components/Navbar/Resources/Sideground/Brand_Sg";
import Documentation_Icon from "@/assets/svg_components/Navbar/Developers/Icons/Documentation_Icon";
import Security_Icon from "@/assets/svg_components/Navbar/Developers/Icons/Security_Icon";
import Bug_Bounty_Icon from "@/assets/svg_components/Navbar/Developers/Icons/Bug_Bounty_Icon";
import Documentation_Sg from "@/assets/svg_components/Navbar/Developers/Sideground/Documentation_Sg";

function Navbar() {
    const sticky = useRef<HTMLDivElement | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (sticky.current) {
            gsap.to(sticky.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top+=24",
                    end: "top top",
                    scrub: true,
                    onEnter: () => {
                        gsap.to(sticky.current, { y: -24, duration: 0.2, ease: "cubic-bezier(.24,0,.75,1)", });
                        setIsSticky(true);
                    },
                    onLeaveBack: () => {
                        gsap.to(sticky.current, { y: 0, duration: 0.2, ease: "cubic-bezier(.24,0,.75,1)", });
                        setIsSticky(false);
                    },
                },
            });
        }
    }, []);

    return (
        <>
            <header ref={sticky}
                className={`flex bg-white justify-between items-center max-w-[1082px] mx-auto px-12 pt-6 sticky top-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? "shadow-navbarShadow" : ""
                    }`}>
                <div className="">
                    <a href="" className="flex py-5 ">
                        <Logo />
                    </a>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <FlyOutLink isSticky={isSticky} />
                    <a href="/" className="relative group left-0 flex gap-1 justify-center items-center py-[9px] px-4 rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] bg-primaryHeadingGray text-white hover:opacity-80 hover:pr-8 hover:-ml-4 hover:left-2 duration-150 ease-in-out transition-all"
                    >
                        Open App
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="absolute right-3 opacity-0 group-hover:opacity-100"
                        >
                            <path
                                d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </a>
                </div>

            </header>
        </>
    )
}


const FlyOutLink = ({ isSticky }: { isSticky: boolean }) => {
    const [open, setOpen] = useState(false);

    const [isHoveredProducts, setIsHoveredProducts] = useState(false);
    const [isHoveredResources, setIsHoveredResources] = useState(false);
    const [isHoveredDevelopers, setIsHoveredDevelopers] = useState(false);
    return (
        <nav className="flex justify-center items-center"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => [setOpen(false), setIsHoveredProducts(false), setIsHoveredResources(false), setIsHoveredDevelopers(false)]}>
            <div className="flex relative justify-center items-center gap-2">
                <button className={`py-[9px] relative px-4 navbutton cursor-pointer rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] ${isHoveredProducts ? "bg-backgroundHover" : ""}`}
                    onMouseEnter={() => {
                        setIsHoveredProducts(true)
                        setIsHoveredResources(false)
                        setIsHoveredDevelopers(false)
                    }}

                >
                    Products
                </button>
                <button className={`py-[9px] relative px-4 navbutton cursor-pointer rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] ${isHoveredResources ? "bg-backgroundHover" : ""}`}
                    onMouseEnter={() => {
                        setIsHoveredProducts(false)
                        setIsHoveredResources(true)
                        setIsHoveredDevelopers(false)
                    }}
                >
                    Resources
                </button>
                <button className={`py-[9px] relative px-4 navbutton cursor-pointer rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] ${isHoveredDevelopers ? "bg-backgroundHover" : ""}`}
                    onMouseEnter={() => {
                        setIsHoveredProducts(false)
                        setIsHoveredResources(false)
                        setIsHoveredDevelopers(true)
                    }}
                >
                    Developers
                </button>
                {open &&
                    <>
                        <DropDownArrow isHoveredDevelopers={isHoveredDevelopers} isHoveredResources={isHoveredResources} isHoveredProducts={isHoveredProducts} open={open} isSticky={isSticky} />

                        <FloatingDiv isHoveredDevelopers={isHoveredDevelopers} isHoveredResources={isHoveredResources} isHoveredProducts={isHoveredProducts} open={open} isSticky={isSticky} />
                    </>
                }
            </div>
        </nav>
    )
}



const FloatingDiv = ({ isHoveredProducts, isHoveredDevelopers, isHoveredResources, isSticky, open }
    :
    { isHoveredProducts: boolean; isHoveredDevelopers: boolean; isHoveredResources: boolean; isSticky: boolean; open: boolean; }) => {
    return (
        <div className={`absolute left-0 -top-[6px] -translate-y-[10px] transition-all ease-in-out duration-300 ${isSticky ? "top-[8px]" : ""} ${open ? "opacity-100 transform-none" : "opacity-0"}`}>
            <div className={`absolute z-[999] transition-all duration-300 ease-in-out will-change-transform top-12 left-0
                ${open ? "" : "-translate-x-[181px]"}
                ${isHoveredProducts ? "-translate-x-[146px]" : ""}
                ${isHoveredResources ? "-translate-x-[151px]" : ""}
                ${isHoveredDevelopers ? "-translate-x-[181px]" : ""}
                ${isSticky ? "wrappersticky" : "wrapper"}
                `}
            >
                <div className={`styles relative transition-all duration-300 ease-in-out shadow-navbarCard rounded-2xl p-[10px] bg-white overflow-hidden 
                    ${isHoveredProducts ? "w-[376px] h-[272.594px]" : ""}
                    ${isHoveredResources ? "w-[575.531px] h-[276px]" : ""}
                    ${isHoveredDevelopers ? "w-[615.703px] h-[212px]" : ""}
                    `}>

                    <Products isHoveredProducts={isHoveredProducts} />
                    <Resources isHoveredResources={isHoveredResources} />
                    <Developers isHoveredDevelopers={isHoveredDevelopers} />

                </div>
            </div>
        </div>
    )
}


const Products = ({ isHoveredProducts }: { isHoveredProducts: boolean }) => {
    return (
        <div className={`absolute -top-[1px] -left-[1px] pointer-events-auto`}>
            <div className={`menu block p-[10px] transition-all duration-300 ease-in-out ${isHoveredProducts ? "opacity-100" : "-translate-x-20 opacity-0"}`}>
                <a href="/" className="p-4 block rounded-lg z-0 bg-[#9896ff] relative none overflow-hidden text-white">
                    <App_Icon />
                    <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[.1px]">
                        App
                    </p>
                    <p className="relative z-[2] mt-.5 text-sm font-normal leading-[150%] --tracking-[.09px]">
                        Interact with Aave easily.
                    </p>
                    <App_Bg />
                </a>
                <a href="/" className="p-4 mt-[10px] block rounded-lg z-0 bg-trail relative w-[356px] none overflow-hidden text-white">
                    <GHO_Icon />
                    <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[.1px]">
                        GHO
                    </p>
                    <p className="relative z-[2] mt-.5 text-sm font-normal leading-[150%] --tracking-[.09px]">
                        The Aave-native stablecoin.
                    </p>
                    <GHO_Bg />
                </a>
            </div>
        </div>
    )
}


const Resources = ({ isHoveredResources }: { isHoveredResources: boolean }) => {
    return (

        <div className="absolute -top-[1px] -left-[1px] pointer-events-auto">
            <div className={`grid grid-flow-col transition-all duration-300 ease-in-out  auto-cols-max gap-x-[10px] p-[10px] ${isHoveredResources ? "opacity-100" : "-translate-x-20 opacity-0"}`}>
                <div>
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
                </div>
                <Brand_Sg />
            </div>
        </div>
    )
}

const Developers = ({ isHoveredDevelopers }: { isHoveredDevelopers: boolean }) => {
    return (
        <div className="absolute -top-[1px] -left-[1px]">
            <div className={`grid grid-flow-col transition-all duration-300 ease-in-out  auto-cols-max gap-x-[10px] p-[10px] ${isHoveredDevelopers ? "opacity-100" : "-translate-x-20 opacity-0"}`}>
                <div>
                    <a href="" className="flex items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full">
                        <Documentation_Icon/>
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
                        <Security_Icon/>
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
                        <Bug_Bounty_Icon/>
                        <div>
                            <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">
                                Bug Bounty
                            </p>
                            <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">
                                Report responsibly and get rewarded.
                            </p>
                        </div>
                    </a>
                </div>
                <Documentation_Sg/>
            </div>
        </div>
    )
}


export default Navbar