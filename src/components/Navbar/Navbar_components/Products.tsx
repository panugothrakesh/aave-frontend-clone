import App_Bg from "@/assets/svg_components/Navbar/Products/Background/App_Bg";
import GHO_Bg from "@/assets/svg_components/Navbar/Products/Background/GHO_Bg";
import App_Icon from "@/assets/svg_components/Navbar/Products/Icons/App_Icon";
import GHO_Icon from "@/assets/svg_components/Navbar/Products/Icons/GHO_Icon";
import { useState } from "react";

const Products = ({ isHoveredProducts }: { isHoveredProducts: boolean | null }) => {
    const [isApp, setIsApp] = useState<boolean | null>(null);
    const [isGho, setIsGho] = useState<boolean | null>(null);

    const handleAppHover = () => {
        setIsApp(true);
        setIsGho(false);
        console.log(isApp, isGho)
    };

    const handleGhoHover = () => {
        setIsGho(true);
        setIsApp(false);
        console.log(isApp, isGho)
    };

    const handleMouseLeave = () => {
        setIsApp(null);
        setIsGho(null);
        console.log(isApp, isGho)
    };

    return (
        <div className={`absolute -top-[1px] -left-[1px] ${isHoveredProducts ? "pointer-events-auto": "pointer-events-none"}`}>
            <div className={`menu block p-[10px] transition-all duration-300 ease-in-out
            ${ isHoveredProducts === true ? "opacity-100 transform-none" : "" }
            ${ isHoveredProducts === false ? "-translate-x-20 opacity-0" : "" }
            ${ isHoveredProducts === null ? "opacity-0 transform-none" : "" }
            
            `}>
                <a onMouseEnter={handleAppHover} onMouseLeave={handleMouseLeave} href="/" className={`p-4 block rounded-lg z-0 bg-[#9896ff] relative none overflow-hidden text-white transition-all duration-200 ease-in-out ${isApp === false ? "opacity-50" : "opacity-100" }`}>
                    <App_Icon />
                    <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[.1px]">
                        App
                    </p>
                    <p className="relative z-[2] mt-.5 text-sm font-normal leading-[150%] --tracking-[.09px]">
                        Interact with Aave easily.
                    </p>
                    <App_Bg isApp={isApp}/>
                </a>
                <a onMouseEnter={handleGhoHover} onMouseLeave={handleMouseLeave}  href="/" className={`p-4 mt-[10px] block rounded-lg z-0 bg-trail relative w-[356px] none overflow-hidden text-white transition-all duration-200 ease-in-out ${isGho === false ? "opacity-50" : "opacity-100" }`}>
                    <GHO_Icon />
                    <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[.1px]">
                        GHO
                    </p>
                    <p className="relative z-[2] mt-.5 text-sm font-normal leading-[150%] --tracking-[.09px]">
                        The Aave-native stablecoin.
                    </p>
                    <GHO_Bg isGho={isGho}/>
                </a>
            </div>
        </div>
    )
}

export default Products;