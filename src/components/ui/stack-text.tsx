import { ReactNode, useMemo } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

type StackTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text: ReactNode;
};

export function StackText({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  },
  text,
}: StackTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
        transform: "rotateX(45deg) translateY(25%)",
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
        transform: "rotateX(0deg) translateY(0%)",
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={FADE_ANIMATION_VARIANTS}
    >
      <motion.span className={className}>{text}</motion.span>
    </motion.div>
  );
}