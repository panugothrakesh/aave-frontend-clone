import { useEffect, useState } from "react";
import Developers from "./Developers";
import Products from "./Products";
import Resources from "./Resources";
const FloatingDiv = ({ isHoveredProducts, isHoveredDevelopers, isHoveredResources, isSticky, open }
    :
    { isHoveredProducts: boolean | null; isHoveredDevelopers: boolean | null; isHoveredResources: boolean | null; isSticky: boolean; open: boolean; }) => {

    const defaultWidth = 376;
    const defaultHeight = 272.594;
    const defaultTranslate = 181;

    const [width, setWidth] = useState<number>(defaultWidth);
    const [height, setHeight] = useState<number>(defaultHeight);
    const [translate, setTranslate] = useState<number>(defaultTranslate);

    useEffect(() => {
        if (isHoveredProducts) {
            setWidth(376);
            setHeight(272.594);
            setTranslate(146);
        } else if (isHoveredResources) {
            setWidth(575.531);
            setHeight(276);
            setTranslate(151);
        } else if (isHoveredDevelopers) {
            setWidth(615.703);
            setHeight(212);
            setTranslate(181);
        }
    }, [isHoveredProducts, isHoveredResources, isHoveredDevelopers]);


    return (
        <div className={`absolute block left-0 -top-[6px] transition-all ease-in-out duration-300 ${isSticky ? "top-[8px]" : ""} ${open ? "opacity-100 transform-none pointer-events-auto" : "opacity-0 -translate-y-[10px] pointer-events-none"}`}>
            <div className={`absolute z-[999] transition-all duration-300 ease-in-out will-change-transform top-12 left-0 
                ${isSticky ? "before:absolute before:-z-[1] before:-top-6 before:left-0 before:w-full before:h-[84px]" : " before:absolute before:-z-[1] before:-top-[10px] before:left-0 before:w-full before:h-[84px]"}
                `}
                style={{ transform: `translateX(-${translate}px)` }}
            >
                <div className={`styles relative transition-all duration-300 ease-in-out shadow-navbarCard rounded-2xl p-[10px] bg-white overflow-hidden`}
                style={{ width: `${width}px`, height: `${height}px` }}>
                    <Products isHoveredProducts={isHoveredProducts} />
                    <Resources isHoveredResources={isHoveredResources} />
                    <Developers isHoveredDevelopers={isHoveredDevelopers} />
                </div>
            </div>
        </div>
    )
}
export default FloatingDiv;