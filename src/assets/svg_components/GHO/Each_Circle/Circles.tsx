import React from 'react';
import { motion } from 'framer-motion';

type CirclesProps = {
  cx: string;
  cy: string;
  r: string;
  fill: string;
  fillOpacity?: string;
  transformOrigin: string;
  yValues: [number, number, number];
  delay?: number;
  duration: number;
  isInView: boolean;
};

const Circles = ({ cx, cy, r, fill, fillOpacity, transformOrigin, yValues, delay = 0, isInView, duration }: CirclesProps) => {
  const to_and_fro = {
    hidden: { y: yValues[0] },
    animate: {
      y: isInView ? yValues : yValues[0],
      transition: {
        duration,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      },
    },
  };

  return (
    <motion.g
      initial="hidden"
      animate="animate"
      variants={to_and_fro}
      className={`origin-[${transformOrigin}]`}
    >
      <circle cx={cx} cy={cy} r={r} fill={fill} fillOpacity={fillOpacity} />
    </motion.g>
  );
};

export default Circles;
