import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Logo from "../../assets/svg_components/Navbar/logo"
import FlyOutLink from "./Navbar_components/FlyOutLink";
import Products_Links from "./Navbar_components/Products_Links";
import Resources_Links from "./Navbar_components/Resources_Links";
import Developers_Links from "./Navbar_components/Developer_Links";

function Navbar() {
    const sticky = useRef<HTMLDivElement | null>(null);
    const [isMenu, setIsMenu] = useState(false);
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
              <div className="header fixed z-[200000] top-0 left-0 right-0">
            <header ref={sticky}
                className={`flex bg-white justify-between items-center max-w-[1082px] mx-auto px-6 md:px-12 md:pt-6 py-1 md:pb-0 sticky top-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? "shadow-navbarShadow" : ""
                    }`}>
                <div className="">
                    <a href="" className="flex py-5 ">
                        <Logo />
                    </a>
                </div>

                <div className="hidden md:visible md:flex justify-center items-center gap-4">
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
                <button className={`md:hidden block before:content-[''] after:content-[''] duration-200 ease-in-out w-8 h-8 bg-none relative before:duration-200 after:duration-200
                before:top-[32%] before:absolute before:left-[13%] before:right-[13%] before:h-0.5 before:bg-primaryHeadingGray 
                after:bottom-[32%] after:absolute after:left-[13%] after:right-[13%] after:h-0.5 after:bg-primaryHeadingGray 
                ${isMenu ? "before:translate-y-[6px] before:rotate-45 after:-translate-y-[4px] after:-rotate-45 rotate-90" : ""}

                `}
                onClick={()=>setIsMenu(!isMenu)}
                >

                </button>

            </header>
            <div className={`block md:hidden z-[9999999] fixed inset-0 top-16 overflow-y-scroll px-3 pt-6 pb-16 bg-white duration-200 ease ${isMenu ? "opacity-100": "opacity-0"}`}>
                <div className={`block md:hidden duration-300 ease ${isMenu ? " transform-none" : "scale-[0.98] origin-[50%_80%]"}`}>
                    <div>
                        <Products_Links/>
                    </div>

                    <h2 className="pt-8 pb-4 text-black text-base font-medium leading-[105%] -tracking-[.00563rem]">
                        Resources
                    </h2>
                    <div>
                        <div>
                            <Resources_Links/>
                        </div>
                    </div>

                    <h2 className="pt-8 pb-4 text-black text-base font-medium leading-[105%] -tracking-[.00563rem]">
                        Developers
                    </h2>
                    <div>
                        <div>
                            <Developers_Links/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default Navbar;