import React from 'react';
import { motion } from 'framer-motion'
import Circles from '../Each_Circle/Circles';

type introType = {
  isInView: boolean;
}

const GHO_Intro = ({ isInView }: introType) => {
  const all_groups = [
    {
      transformOrigin: '-53px_454px',
      groupProps: { cx: '-53', cy: '454', r: '74', fill: '#28D358', fillOpacity: '0.25', yValues: [1, -9, 1] as [number, number, number], delay: 0, duration: 4},
    },
    {
      transformOrigin: '56px_262px',
      groupProps: { cx: '56', cy: '262', r: '35', fill: '#28D358', fillOpacity: '0.7', yValues: [2, -10, 2] as [number, number, number], delay: 0.3, duration: 4},
    },
    {
      transformOrigin: '556px_101px',
      groupProps: { cx: '556', cy: '101', r: '31', fill: '#92E7AA', yValues: [-2, 2, -2] as [number, number, number], delay: 0.7, duration: 3.6},
    },
    {
      transformOrigin: '575px_454px',
      groupProps: { cx: '575', cy: '454', r: '35', fill: '#28D358', yValues: [10, -10, 10] as [number, number, number], delay: 0.2, fillOpacity: '0.5', duration: 4},
    },
    {
      transformOrigin: '182px_-30px',
      groupProps: { cx: '182', cy: '-30', r: '52', fill: '#28D358', yValues: [10, 3, 10] as [number, number, number], delay: 0.2, fillOpacity: '0.5', duration: 3.8},
    },
    {
      transformOrigin: '301px_528px',
      groupProps: { cx: '301', cy: '528', r: '52', fill: '#28D358', yValues: [-10, 7, -10] as [number, number, number], delay: 0, fillOpacity: '0.5', duration: 4},
    },
    {
      transformOrigin: '190px_151px',
      groupProps: { cx: '190', cy: '151', r: '13', fill: '#28D358', yValues: [9, 4, 9] as [number, number, number], delay: 0.5, duration: 2.4},
    },
    {
      transformOrigin: '69px_83px',
      groupProps: { cx: '69', cy: '83', r: '18', fill: '#92E7AA', yValues: [-5, 5, -5] as [number, number, number], delay: 0.5, duration: 2.4},
    },
    {
      transformOrigin: '489px_204px',
      groupProps: { cx: '489', cy: '204', r: '13', fill: '#28D358', yValues: [3, -7, 3] as [number, number, number], delay: 0.5, duration: 3},
    },
    {
      transformOrigin: '369px_164px',
      groupProps: { cx: '369', cy: '164', r: '6', fill: '#28D358', yValues: [-2, 7, -2] as [number, number, number], delay: 0.5, duration: 2.6},
    },
    {
      transformOrigin: '401px_329px',
      groupProps: { cx: '401', cy: '329', r: '6', fill: '#28D358', yValues: [8, -7, 8] as [number, number, number], delay: 0, duration: 3.2},
    },
    {
      transformOrigin: '223px_283px',
      groupProps: { cx: '223', cy: '283', r: '6', fill: '#28D358', yValues: [-8, 1, -8] as [number, number, number], delay: 0.2, duration: 3},
    },
    {
      transformOrigin: '216px_380px',
      groupProps: { cx: '216', cy: '380', r: '13', fill: '#92E7AA', yValues: [9, -9, 9] as [number, number, number], delay: 0.6, duration: 3.4},
    },
  ];
  
  const Outer_reveal = {
    hidden: {
      visibility: 'hidden' as const, scale: .8
    },
    animate: {
      visibility: isInView ? 'visible' as const : 'hidden' as const,
      scale: isInView ? 1 : .8,
      transition: {
        duration: 3,
        ease: "easeInOut",
        once: 'true',
      }
    },
  }

  const reveal = {
    hidden: {
      opacity: 0, scale: 0
    },
    animate: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        once: 'true',
      }
    },
  }

  return (
    <motion.svg
                initial='hidden'
                animate='animate'
                variants={Outer_reveal}
      className="h-full w-full overflow-visible"
      viewBox="0 0 650 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform-origin="324.4125px 249px">
        <motion.g 
                initial='hidden'
                animate='animate'
                variants={reveal}
        transform-origin="325px 250px">
          <circle cx="325" cy="250" r="73" fill="#28D358" />
          <clipPath id="clip0_3123_123010">
            <circle cx="325" cy="250" r="73" fill="white" />
            <circle cx="40" cy="35" r="35" />
          </clipPath>
          <path
            d="M368.738 285.357L368.52 285.295L368.406 285.49C359.557 300.581 345.135 310.162 324.432 310.162C291.524 310.162 264.841 282.969 264.841 249.43C264.841 215.891 291.524 188.699 324.432 188.699C354.101 188.699 379.406 210.803 383.973 239.728H368.305C363.967 219.153 346.093 204.211 324.432 204.211C299.483 204.211 279.552 224.013 279.552 249.43C279.552 274.85 299.476 294.289 324.422 294.289C346.916 294.289 364.905 278.486 368.308 256.75H384.012V306.638L369.581 315.629V285.808V285.591L369.373 285.528C369.267 285.496 369.157 285.468 369.05 285.44L369.021 285.433C368.924 285.407 368.83 285.383 368.738 285.357Z"
            fill="white"
            stroke="#3BE069"
            strokeWidth="0.584946"
            clipPath="url(#clip0_3123_123010)"
          />
          <circle cx="340.365" cy="240.006" r="12.3425" fill="white" stroke="#3BE069" strokeWidth="0.584946" />
          <circle cx="308.516" cy="240.006" r="12.3425" fill="white" stroke="#3BE069" strokeWidth="0.584946" />
        </motion.g>
        {all_groups.map(({ transformOrigin, groupProps }, index) => (
          <motion.g
            key={index}
            initial="hidden"
            animate="animate"
            variants={reveal}
            className={`origin-[${transformOrigin}]`}
          >
            <Circles isInView={isInView} transformOrigin={transformOrigin} {...groupProps} />
          </motion.g>
        ))}
      </g>
    </motion.svg>
  );
};

export default GHO_Intro;