import React from 'react';
import { motion } from 'framer-motion'
import Group1 from '../Each_Circle/Group1';
import Group2 from '../Each_Circle/Group2';
import Group3 from '../Each_Circle/Group3';
import Group4 from '../Each_Circle/Group4';
import Group5 from '../Each_Circle/Group5';
import Group6 from '../Each_Circle/Group6';
import Group7 from '../Each_Circle/Group7';
import Group8 from '../Each_Circle/Group8';
import Group9 from '../Each_Circle/Group9';
import Group10 from '../Each_Circle/Group10';
import Group11 from '../Each_Circle/Group11';
import Group12 from '../Each_Circle/Group12';
import Group13 from '../Each_Circle/Group13';

type introType = {
  isInView: boolean;
}

const GHO_Intro = ({ isInView }: introType) => {
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
        
        
        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal} transform-origin="-53px 454px">
                <Group1 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="56px 262px">
            <Group2 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="556px 101px">
          <Group3 isInView/>
        </motion.g>


        <motion.g 
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="575px 454px">
          <Group4 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="182px -30px">
          <Group5 isInView/>
        </motion.g>

        
        <motion.g 
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="301px 528px">
          <Group6 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
      transform-origin="190px 151px">
          <Group7 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="69px 83px">
          <Group8 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="489px 204px">
          <Group9 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="369px 164px">
          <Group10 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="401px 329px">
          <Group11 isInView/>
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="223px 283px">
          <Group12 isInView />
        </motion.g>


        <motion.g
              initial='hidden'
              animate='animate'
              variants={reveal}
        transform-origin="216px 380px">
          <Group13 isInView/>
        </motion.g>
      </g>
    </motion.svg>
  );
};

export default GHO_Intro;