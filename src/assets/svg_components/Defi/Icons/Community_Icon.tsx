import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Community_Icon() {
  const [animationState, setAnimationState] = useState('show');

  useEffect(() => {
    let hiddenTimeout: ReturnType<typeof setTimeout>;
    let showTimeout: ReturnType<typeof setTimeout>;
    let backTimeout: ReturnType<typeof setTimeout>;
    let exitTimeout: ReturnType<typeof setTimeout>;
    let delayTimeout: ReturnType<typeof setTimeout>;

    const loopAnimations = () => {
      setAnimationState('hidden');
      showTimeout = setTimeout(() => {
        setAnimationState('show');
        backTimeout = setTimeout(() => {
          setAnimationState('back');
          exitTimeout = setTimeout(() => {
            setAnimationState('exit');
            delayTimeout = setTimeout(() => {
              loopAnimations();
            }, 5000);
          }, 200);
        }, 500);
      }, 200);
    };
    loopAnimations();
    return () => {
      clearTimeout(hiddenTimeout);
      clearTimeout(showTimeout);
      clearTimeout(backTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(delayTimeout);
    };
  }, []);

  const Roof_UD = {
    hidden: {y: [0, 2],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut"}
      },
    show:{
      y: [2, -4],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
      }
    },
    back:{
      y: [-4, 2],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
    }},
    exit:{
      y: [2, 0],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
    }
  }
  }
  
  const Pillars_UD = {
    hidden: {y: [0, 1], height: [11, 10],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut"}
      },
    show:{
      y: [1, -3],
      height: [10, 13],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
      }
    },
    back:{
      y: [-3, 1],
      height: [13, 10],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
    }},
    exit:{
      y: [1, 0], height: [10, 11],
      transition:{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
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
    <motion.path initial={{y:0}} animate={animationState} variants={Roof_UD}
      className="roof"
      d="M13.551 4.24983C14.823 3.4813 16.4161 3.4813 17.6881 4.24983L26.56 9.61025C28.7267 10.9194 27.7986 14.25 25.2671 14.25H5.97197C3.44046 14.25 2.51241 10.9194 4.67912 9.61025L13.551 4.24983Z"
      fill="#1C4874"
      style={{ transformOrigin: '15.6195px 8.96172px' }}
    />
    <motion.rect initial={{y:0, height: 11}} animate={animationState} variants={Pillars_UD}
      className="pillar"
      x="5"
      y="17"
      width="5"
      height="11px"
      rx="2"
      fill="#617FAA"
      style={{ transform: 'none', transformOrigin: '7.5px 22.5px' }}
    />
    <motion.rect initial={{y:0, height: 11}} animate={animationState} variants={Pillars_UD}
      className="pillar"
      x="13"
      y="17"
      width="5"
      height="11px"
      rx="2"
      fill="#617FAA"
      style={{ transform: 'none', transformOrigin: '15.5px 22.5px' }}
    />
    <motion.rect initial={{y:0, height: 11}} animate={animationState} variants={Pillars_UD}
      className="pillar"
      x="21"
      y="17"
      width="5"
      height="11px"
      rx="2"
      fill="#617FAA"
      style={{ transform: 'none', transformOrigin: '23.5px 22.5px' }}
    />
  </svg>
  )
}

export default Community_Icon