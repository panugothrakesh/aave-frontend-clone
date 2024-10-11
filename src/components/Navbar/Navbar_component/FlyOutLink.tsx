import { useState } from "react";
import FloatingDiv from "./FloatingDiv";
import DropDownArrow from "@/assets/svg_components/Navbar/dropdownarrow";

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
                <button className={`py-[9px] relative px-4 before:content-[''] before:absolute before:top-0 before:-left-1 before:w-calc-100-plus-8 h-full cursor-pointer rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] ${isHoveredProducts ? "bg-backgroundHover" : ""}`}
                    onMouseEnter={() => {
                        setIsHoveredProducts(true)
                        setIsHoveredResources(false)
                        setIsHoveredDevelopers(false)
                    }}

                >
                    Products
                </button>
                <button className={`py-[9px] relative px-4 before:content-[''] before:absolute before:top-0 before:-left-1 before:width-naw-calc-100-plus-8 h-full cursor-pointer rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] ${isHoveredResources ? "bg-backgroundHover" : ""}`}
                    onMouseEnter={() => {
                        setIsHoveredProducts(false)
                        setIsHoveredResources(true)
                        setIsHoveredDevelopers(false)
                    }}
                >
                    Resources
                </button>
                <button className={`py-[9px] relative px-4 before:content-[''] before:absolute before:top-0 before:-left-1 before:width-naw-calc-100-plus-8 h-full cursor-pointer rounded-full text-sm font-normal font-inter tracking-[-0.09px] leading-[105%] ${isHoveredDevelopers ? "bg-backgroundHover" : ""}`}
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

export default FlyOutLink