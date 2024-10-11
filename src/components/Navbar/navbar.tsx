"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Logo from "../../assets/svg_components/Navbar/logo"
import FlyOutLink from "./Navbar_component/FlyOutLink";

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


export default Navbar