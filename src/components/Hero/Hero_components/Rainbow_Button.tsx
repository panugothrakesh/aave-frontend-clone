import RainbowArrow_icon from "@/assets/svg_components/Hero/RainbowArrow_icon";
import { motion } from "framer-motion";

const Rainbow_Button = () => {
    const rainbowRotate = {
        hidden: { rotate: -180 },
        hover: {
            rotate: 180,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    const rainbowWrap = {
        hidden: { scaleX: 0.95, scaleY: 0.8 },
        hover: {
            scaleX: [0.95,1, 1,  0.95, 0.95],
            scaleY: [0.8, 1, 1, 0.8, 0.8],
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    const rainbowButton = {
        hidden: {backgroundColor: '#ffffff', boxShadow: '0 0 0 1.5px rgba(0,0,0,.06)'},
        hover:{
            backgroundColor: '#fcfcfb',
            boxShadow: '0 0 0 1.5px rgba(0,0,0,.1)',
            transition: {
                duration:0.15,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="hidden"
            whileHover="hover"
            className="relative inline-flex items-center"
            >
            <motion.span
                variants={rainbowButton}
                className="z-[2] relative inline-flex items-center gap-x-[6px] rounded-full py-[9px] pr-4 pl-5 bg-white text-base font-medium leading-[125%] -tracking-[.18px] text-primaryHeadingGray"
            >
                Get Started
                <RainbowArrow_icon />
            </motion.span>

            <motion.span
                variants={rainbowWrap}
                className="z-1 absolute -inset-[3px] rounded-full overflow-hidden"
            >
                <motion.span variants={rainbowRotate} className="rainbow absolute bg-rainbow-background -inset-y-[200%] -inset-x-[25%]" />
            </motion.span>
        </motion.div>
    );
};

export default Rainbow_Button;