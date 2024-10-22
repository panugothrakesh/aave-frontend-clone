import App_Bg from '@/assets/svg_components/Navbar/Products/Background/App_Bg'
import GHO_Bg from '@/assets/svg_components/Navbar/Products/Background/GHO_Bg'
import App_Icon from '@/assets/svg_components/Navbar/Products/Icons/App_Icon'
import GHO_Icon from '@/assets/svg_components/Navbar/Products/Icons/GHO_Icon'

function Products_Links() {
    return (
        <>
            <a href="/" className={`p-4 w-full block rounded-lg z-0 bg-[#9896ff] relative none overflow-hidden text-white`}>
                <App_Icon />
                <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[.1px]">
                    App
                </p>
                <p className="relative z-[2] mt-.5 text-sm font-normal leading-[150%] --tracking-[.09px]">
                    Interact with Aave easily.
                </p>
                <App_Bg />
            </a>
            <a  href="/" className={`p-4 w-full mt-[10px] block rounded-lg z-0 bg-trail relative none overflow-hidden text-white`}>
                <GHO_Icon />
                <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[.1px]">
                    GHO
                </p>
                <p className="relative z-[2] mt-.5 text-sm font-normal leading-[150%] --tracking-[.09px]">
                    The Aave-native stablecoin.
                </p>
                <GHO_Bg />
            </a>
        </>
    )
}

export default Products_Links