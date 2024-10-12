import Segment from '@/assets/svg_components/Hero/Segments/Segment';
import React, { useState, useRef } from 'react';

const Svg_Components = () => {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);
    const maskRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const maskRect = maskRef.current?.getBoundingClientRect();
        if (!maskRect) return;

        const { clientX } = e;
        const sectionWidth = maskRect.width / 6;
        const adjustedX = clientX - maskRect.left;

        const part = Math.floor(adjustedX / sectionWidth);

        if (part >= 0 && part < 6) {
            setHoveredBar(part);
        } else {
            setHoveredBar(null);
        }
    };

    const handleMouseLeave = () => {
        setHoveredBar(null);
    };
    return(
        <div className='relative pt-16 md:pt-0 overflow-hidden md:overflow-visible' ref={maskRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="985"
            height="438"
            fill="none"
            viewBox="0 0 985 438"
            className=' block overflow-visible m-0 md:-mt-[110px] mx-auto mb-0 px-2 md:px-12 w-full h-auto align-top max-w-none md:max-w-[1082px]'
        >
            <g clipPath="url(#hero-animation-mask)">
            <g transform="scale(1.08)">
                <g opacity="1">
                {/* Segments */}
                <Segment hovered={hoveredBar === 0} path1stroke='#D9F7FF' rect1='#39D1F9' rect2='#A7E9FD' translatex='0px' translatey='220px'/>
                <Segment hovered={hoveredBar === 1} path1stroke='#FFF7A5' rect1='#FFB000' rect2='#FFD400' translatex='152px' translatey='210px'/>
                <Segment hovered={hoveredBar === 2} path1stroke='#83EEE8' rect1='#00827B' rect2='#39BEB7' translatex='304px' translatey='190px'/>
                <Segment hovered={hoveredBar === 3} path1stroke='#96E9FF' rect1='#008AFF' rect2='#00AEFF' translatex='456px' translatey='170px'/>
                <Segment hovered={hoveredBar === 4} path1stroke='#FFC693' rect1='#F24900' rect2='#FF8947' translatex='608px' translatey='120px'/>
                <Segment hovered={hoveredBar === 5} path1stroke='#E2E0FF' rect1='#9896FF' rect2='#BDBBFF' translatex='760px' translatey='60px'/>
                </g>
            </g>
            </g>
            <clipPath id="hero-animation-mask">
            <rect width="1185" height="1438" x="-100" y="-1000" fill="#fff"></rect>
            </clipPath>
        </svg>
        <div className='w-full h-1 flex items-center justify-center'>
            <div className='bg-colorful-bar animate-width_height_reveal max-w-[1082px] h-1 rounded-full'></div>
         </div>
        </div>
)
};

export default Svg_Components;
