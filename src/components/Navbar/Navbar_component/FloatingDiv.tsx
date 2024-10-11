import Developers from "./Developers";
import Products from "./Products";
import Resources from "./Resources";

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
                ${isSticky ? "before:content-[''] absolute -z-[1] -top-6 left-0 w-full h-[84px]" : "before:content-[''] absolute -z-[1] -top-[10px] left-0 w-full h-[84px]"}
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

export default FloatingDiv;