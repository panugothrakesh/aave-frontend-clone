import Segment from '@/assets/svg_components/Hero/Segments/Segment';
import React, { useState, useRef } from 'react';
import { delay, motion } from 'framer-motion';
const Svg_Components = () => {

    const bar1Animation = {
        hidden: { y: 420, x: 0, visibility: 'hidden'},
        visible: {
            visibility: 'visible',
          y: 220,
          x: 0,
          transition: { duration: .5, ease: 'easeInOut', delay:.4 }
        }
      };
      
      const bar2Animation = {
        hidden: { y: 430, x: 152 , visibility: 'hidden'},
        visible: {
            visibility: 'visible',
          y: 210,
          x: 152,
          transition: { duration: .5, ease: 'easeInOut', delay:.45 }
        }
      };
      
      const bar3Animation = {
        hidden: { y: 460, x: 304 , visibility: 'hidden'},
        visible: {
            visibility: 'visible',
          y: 190,
          x: 304,
          transition: { duration: .5, ease: 'easeInOut', delay:.5 }
        }
      };
      
      const bar4Animation = {
        hidden: { y: 480, x: 456 , visibility: 'hidden'},
        visible: {
            visibility: 'visible',
          y: 170,
          x: 456,
          transition: { duration: .5, ease: 'easeInOut', delay:.55 }
        }
      };
      
      const bar5Animation = {
        hidden: { y: 530, x: 608, visibility: 'hidden'},
        visible: {
            visibility: 'visible',
          y: 120,
          x: 608,
          transition: { duration: .5, ease: 'easeInOut', delay:.6 }
        }
      };
      
      const bar6Animation = {
        hidden: { y: 590, x: 760, visibility: 'hidden'},
        visible: {
            visibility: 'visible',
          y: 60,
          x: 760,
          transition: { duration: .5, ease: 'easeInOut', delay:.65 }
        }
      };

    const open = {
        hidden: { width: '0%', opacity: 0 },
        open: {
          width: '100%',
          opacity: [0, 100],
          transition: {
            duration: .75,
            ease: 'easeInOut',
            once: true,
          },
        },
      };
    
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
                    <Segment
                        hovered={hoveredBar === 0}
                        path1stroke='#D9F7FF'
                        rect1='#39D1F9'
                        rect2='#A7E9FD'
                        translatex='0px'
                        translatey='420px'
                        animation={bar1Animation}
                    />
                    <Segment
                        hovered={hoveredBar === 1}
                        path1stroke='#FFF7A5'
                        rect1='#FFB000'
                        rect2='#FFD400'
                        translatex='152px'
                        translatey='430px'
                        animation={bar2Animation}
                    />
                    <Segment
                        hovered={hoveredBar === 2}
                        path1stroke='#83EEE8'
                        rect1='#00827B'
                        rect2='#39BEB7'
                        translatex='304px'
                        translatey='460px'
                        animation={bar3Animation}
                    />
                    <Segment
                        hovered={hoveredBar === 3}
                        path1stroke='#96E9FF'
                        rect1='#008AFF'
                        rect2='#00AEFF'
                        translatex='456px'
                        translatey='480px'
                        animation={bar4Animation}
                    />
                    <Segment
                        hovered={hoveredBar === 4}
                        path1stroke='#FFC693'
                        rect1='#F24900'
                        rect2='#FF8947'
                        translatex='608px'
                        translatey='530px'
                        animation={bar5Animation}
                    />
                    <Segment
                        hovered={hoveredBar === 5}
                        path1stroke='#E2E0FF'
                        rect1='#9896FF'
                        rect2='#BDBBFF'
                        translatex='760px'
                        translatey='590px'
                        animation={bar6Animation}
                    />
                </g>
            </g>
            </g>
            <clipPath id="hero-animation-mask">
            <rect width="1185" height="1438" x="-100" y="-1000" fill="#fff"></rect>
            </clipPath>
        </svg>
        <div className='w-full h-1 flex items-center justify-center'>
            <motion.div initial="hidden" animate="open" variants={open} className='bg-colorful-bar max-w-[1082px] h-1 rounded-full'></motion.div>
         </div>
        </div>
)
};

export default Svg_Components;
