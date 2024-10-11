import RainbowArrow_icon from "@/assets/svg_components/Hero/RainbowArrow_icon"

const Rainbow_Button = () => {
    return (
        <>
            <span className='z-[2] relative inline-flex items-center gap-x-[6px] rounded-full py-[9px] pr-4 pl-5 bg-white hover:bg-[#fcfcfb] hover:shadow-rainbowHovered shadow-rainbow text-base font-medium leading-[125%] -tracking-[.18px] text-primaryHeadingGray transition-all duration-150 ease-in-out'>
                Get Started
                <RainbowArrow_icon />
            </span>
            <span className='rainbow_wrap group-hover:animate-rainbow_button_animation  z-1 absolute -inset-[3px] rounded-full overflow-hidden'>
                <span className='rainbow group-hover:bg-rainbow-background group-hover:-inset-y-[200%] group-hover:-inset-x-[25%] group-hover:absolute group-hover:animate-rainbow_gradient_rotate'>
                </span>
            </span>
        </>
    )
}

export default Rainbow_Button