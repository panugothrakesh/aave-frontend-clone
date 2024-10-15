import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Wallet_Icon() {
    const [animationState, setAnimationState] = useState('show');

    const wallet = {
        hidden: {rotate: 0},
        show: {
            rotate: [0, -12, 0],
            transition: { duration: .5, ease: "easeInOut",}
        },
        exit: {
            rotate: [0, -8, 0],
            transition: { duration: .5, ease: "easeInOut",}
        }
    }

    useEffect(() => {
        let showTimeout: ReturnType<typeof setTimeout>;
        let exitTimeout: ReturnType<typeof setTimeout>;
        let delayTimeout: ReturnType<typeof setTimeout>;

        const loopAnimations = () => {
          setAnimationState('show');  
          showTimeout = setTimeout(() => {
            setAnimationState('exit');  
            exitTimeout = setTimeout(() => {
              delayTimeout = setTimeout(() => {
                loopAnimations();  
              }, 4000);
    
            }, 1000);
          }, 1000);
        };
        loopAnimations();  
        return () => {
          clearTimeout(showTimeout);
          clearTimeout(exitTimeout);
          clearTimeout(delayTimeout);
        };
      }, []);

  const pathAnimation = {
    hidden : {d: 'M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z'},
    show: {
      d: [
        "M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z",
        "M26 21.5V11.5C26 10.1193 24.8807 9 23.5 9L8.5 9C7.11929 9 6 10.1193 6 11.5V21.5C6 22.8807 7.11929 24 8.5 24L23.5 24C24.8807 24 26 22.8807 26 21.5Z",  
      ],
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 2,
      }
    },
    exit: {
      d: [
        "M26 21.5V11.5C26 10.1193 24.8807 9 23.5 9L8.5 9C7.11929 9 6 10.1193 6 11.5V21.5C6 22.8807 7.11929 24 8.5 24L23.5 24C24.8807 24 26 22.8807 26 21.5Z",  
        "M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z",
      ],
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 2,
      }
    }
  }
  const up_PathAnimation = {
    hidden : {d: 'M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z'},
    show: {
      d: [
        "M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z",
        "M6 21.5V11.5C6 10.1193 7.11929 9 8.5 9L23.5 9C24.8807 9 26 10.1193 26 11.5V21.5C26 22.8807 24.8807 24 23.5 24L8.5 24C7.11929 24 6 22.8807 6 21.5",  
      ],
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 1.5,
    }
},
exit: {
    d: [
        "M6 21.5V11.5C6 10.1193 7.11929 9 8.5 9L23.5 9C24.8807 9 26 10.1193 26 11.5V21.5C26 22.8807 24.8807 24 23.5 24L8.5 24C7.11929 24 6 22.8807 6 21.5",  
        "M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z",
    ],
    transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 2,
      }
    }
  }

  return (
    <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible' }}
  >
    <motion.g
    initial='hidden'
    animate={animationState}
    variants={wallet}
      style={{ transformOrigin: '6px 16px' }}
      transform-origin="6px 16px"
    >
      <rect width="32" height="32" />
      <motion.path
      initial="hidden"
      animate={animationState} 
      variants={up_PathAnimation}
        className="back-rect"
        mask="url(#noncustodial-mask)"
        d="M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z"
        fill="#6BCEF5"
      />
      <motion.path
        initial="hidden"
        animate={animationState}  
        variants={pathAnimation}
        className="front-rect"
        fill="#B5E7FA"
      />
      <mask id="noncustodial-mask" width="32" height="32">
        <rect width="32" height="32" fill="white" />
        <path
          className="mask-shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 25.798V15.9519C29 13.4282 27.2824 11.2282 24.8339 10.6161L9.83395 6.86614C6.36264 5.99832 3 8.62379 3 12.2019V22.048C3 24.5718 4.71763 26.7717 7.16605 27.3838L22.1661 31.1338C25.6374 32.0017 29 29.3762 29 25.798Z"
          fill="black"
        />
      </mask>
    </motion.g>
  </svg>
  )
}

export default Wallet_Icon