"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import cn from "classnames";

import { GCprops, Direction } from "./GC.props";

export const GleamingCard = ({
  children,
  className,
  duration = 1,
  clockwise = true,
  ...props
}: GCprops)=> {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>(Direction.top);

  const rotateDirection = (currentDirection: Direction): Direction => {
    const nextDirection = clockwise
      ? (currentDirection + 1) % 4
      : (currentDirection - 1 + 4) % 4;
    return nextDirection
  };

  const movingMap: Record<Direction, string> = {
    [Direction.top]: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    [Direction.right]:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    [Direction.bottom]:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    [Direction.left]: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-3xl border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px box-decoration-clone w-fit"
      )}
      {...props}
    >
      <div
        className={cn(
          "text-white z-10 bg-gray-800 rounded-[inherit]",
          className
        )}
      >
        	{children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit] blur-xs h-full w-full"
        )}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
      <div className="bg-black absolute z-1 flex-none inset-0.5 rounded-[100px]" />
    </div>
  );
}
