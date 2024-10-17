import React from 'react';
import {motion} from "framer-motion"

const LogoContainer = () => {

  const eyeMove = {
    hidden: { x: 0 },
    animate: {
      x: [0, 15 , 15, 15, 15, 15, 15, 15, -15, -15, -15, -15, -15, -15, -15, 0, 0, 0, 0, 0, 0, 0],
      transition: {
        duration: 1.5,
        ease: 'linear',
        repeat: Infinity,
        delay: 1,
        repeatDelay: 7.5,
      },
    },
  };

  const eyeBlink = {
    hidden: { scaleY: 1 },
    animate: {
      scaleY: [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: 1,
        repeatDelay: 7.5,
      },
    },
  };
  return (
    <div className="overflow-hidden rounded-2xl flex justify-center items-center relative" data-aave="true">
      <svg
        className="w-full h-full -my-[20%] sm:my-0"
        viewBox="0 0 324 324"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="324" height="324" rx="16" fill="#9896FF" />
      </svg>
      <div
        className="flex items-center justify-center absolute inset-0"
        style={{ opacity: 1, transform: 'none', willChange: 'transform' }}
      >
        <svg
        className='w-full h-full inline-block max-w-full align-top'
          width="324"
          height="324"
          viewBox="0 0 324 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
                  initial="hidden"
                  animate="animate"
                  variants={eyeMove}
             style={{ transform: 'none', transformOrigin: '161.415px 180.84px' }}>
            <motion.path
            initial="hidden"
            animate="animate"
            variants={eyeBlink}
              d="M136.871 201.968C148.54 200.074 156.464 189.079 154.57 177.41C152.675 165.741 141.68 157.817 130.011 159.711C118.342 161.605 110.418 172.6 112.312 184.269C114.207 195.938 125.202 203.862 136.871 201.968Z"
              fill="white"
            />
            <motion.path
            initial="hidden"
            animate="animate"
            variants={eyeBlink}
              d="M192.82 201.968C204.489 200.074 212.413 189.079 210.519 177.41C208.625 165.741 197.63 157.817 185.961 159.711C174.292 161.605 166.368 172.6 168.262 184.269C170.156 195.938 181.151 203.862 192.82 201.968Z"
              fill="white"
            />
          </motion.g>
          <path
            d="M161.378 92.4766C103.258 92.4766 56.1371 140.495 56.1523 199.71H83.0342C83.0342 155.333 117.832 119.353 161.378 119.353C204.923 119.353 239.721 155.333 239.721 199.71H266.603C266.613 140.495 219.492 92.4766 161.378 92.4766Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default LogoContainer;
