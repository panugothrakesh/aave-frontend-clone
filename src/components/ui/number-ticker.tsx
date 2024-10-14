"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const startValue = direction === "down" ? value : 0;
      const endValue = direction === "down" ? 0 : value;
      const duration = 1000; // 2 seconds in milliseconds
      const intervalTime = 16; // ~60 FPS, 16ms per frame
      const totalFrames = Math.round(duration / intervalTime);
      const stepValue = (endValue - startValue) / totalFrames;

      setTimeout(() => {
        let currentFrame = 0;

        const interval = setInterval(() => {
          currentFrame++;
          motionValue.set(motionValue.get() + stepValue);

          if (currentFrame >= totalFrames) {
            clearInterval(interval);
            motionValue.set(endValue); // Ensure it lands exactly on the end value
          }
        }, intervalTime);
      }, delay * 1000); // Apply the delay before the animation starts
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      motionValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [motionValue, decimalPlaces],
  );

  return (
    <span
      className={cn(
        "inline-block tabular-nums font-regolaMedium text-2xl leading-[105%] -tracking-[.48px] text-primaryHeadingGray",
        className,
      )}
      ref={ref}
    />
  );
}