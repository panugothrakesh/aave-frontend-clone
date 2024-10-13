import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useVelocity } from 'framer-motion';

type BarsType = {
  path1stroke: string;
  rect1: string;
  rect2: string;
  translatex: string;
  translatey: string;
  hovered: boolean;
  animation: any;
};

function Segment({ path1stroke, rect1, rect2, translatex, translatey, hovered, animation }: BarsType) {
    const rotation = useMotionValue(0);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);

  const torqueX = useVelocity(velocityX);
  const torqueY = useVelocity(velocityY);

  const [leaving, setLeaving] = useState(false);
  const lastMoveTime = useRef(Date.now());
  const [lastTorque, setLastTorque] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<SVGGElement>) => {
    velocityX.set(e.movementX);
    velocityY.set(e.movementY);
    lastMoveTime.current = Date.now();
    setLeaving(false);
  };

  const handleMouseLeave = () => {
    setLeaving(true);
    const combinedTorque = torqueX.get() + torqueY.get();
    setLastTorque(combinedTorque);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastMove = Date.now() - lastMoveTime.current;

      if (hovered) {
        const currentRotation = rotation.get();
        if (timeSinceLastMove < 50) {
          const newRotation = currentRotation + (torqueX.get() + torqueY.get()) / 300;
          rotation.set(newRotation);
        } else {
          const pullBack = (currentRotation % 360) / 10;
          rotation.set((currentRotation % 360) - pullBack);
        }
      }

      if (leaving) {
       
        const currentRotation = rotation.get();
        const inertia = lastTorque / 300;
       
        const slowingFactor = Math.abs(lastTorque) > 5 ? 0.8 : 0.5;
       
        const slowedRotation = currentRotation + inertia;
        rotation.set(slowedRotation);
       
        setLastTorque(lastTorque * slowingFactor);
       
        if (Math.abs(lastTorque) < 0.01) {
          clearInterval(interval);
        }
      }
    }, 24);
    return () => clearInterval(interval);
  }, [hovered, leaving, torqueX, torqueY, rotation, lastTorque]);

  return (
    <motion.g
      animate={"visible"}
      initial={"hidden"}
      variants={animation}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      opacity="1"
      style={{
        transform: `translateX(${translatex} ${translatey})`,
        transformOrigin: '75px 227.25px',
      }}
    >
      <g transform="scale(1.5)">
        <path
          d="M50 50L50 303"
          stroke={path1stroke}
          strokeWidth="100"
          strokeLinecap="round"
        ></path>
        <mask
          id="mask0_4272_2676"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
        </mask>
        <g mask="url(#mask0_4272_2676)">
          <g>
            <motion.g style={{ rotate: rotation }} className={`origin-[50px_50px]`}>
              <rect width="100" height="100" fill={rect1}></rect>
              <rect width="50" height="100" fill={rect2}></rect>
              <mask
                id="mask1_4272_2676"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="25"
                y="25"
                width="50"
                height="50"
              >
                <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
              </mask>
              <g mask="url(#mask1_4272_2676)">
                <rect x="25" y="25" width="50" height="50" fill={rect1}></rect>
                <rect x="50" y="25" width="25" height="50" fill={rect2}></rect>
              </g>
            </motion.g>
          </g>
        </g>
      </g>
    </motion.g>
  );
}

export default Segment;