import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeInOnViewProps = {
  children: React.ReactNode;
  className?: string;
  transitionDelay?: number;
  transitionDuration?: number;
};

const FadeInOnView: React.FC<FadeInOnViewProps> = ({
  children,
  className,
  transitionDelay = 0,
  transitionDuration = 0.8, // You can adjust these defaults
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 }); // Trigger when 30% is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delay: transitionDelay, duration: transitionDuration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnView;
