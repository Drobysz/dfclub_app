"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./gc.module.scss";

import { GCprops, Direction } from "./GC.props";

export const GleamingFrame = ({
  children,
  duration = 1,
  clockwise = true,
  className,
  ...props
}: GCprops)=> {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>(Direction.top);

  const rotateDirection = (currentDirection: Direction): Direction => {
    const nextDirection = clockwise
      ? (currentDirection + 1) % 8
      : (currentDirection - 1 + 8) % 8;
    return nextDirection
  };

  const lightStaticData = "hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%";

  const movingMap: Record<Direction, string> = {
    [Direction.top]: `radial-gradient(20.7% 50% at 50% 0%, ${lightStaticData}`,
    [Direction.rightTop]:
      `radial-gradient(16.2% 41.199999999999996% at 100% 0%, ${lightStaticData}`,
    [Direction.rightCenter]:
      `radial-gradient(16.2% 41.199999999999996% at 100% 50%, ${lightStaticData}`,
    [Direction.rightBottom]:
      `radial-gradient(16.2% 41.199999999999996% at 100% 100%, ${lightStaticData}`,
    [Direction.bottom]:
      `radial-gradient(20.7% 50% at 50% 100%, ${lightStaticData}`,
    [Direction.leftTop]:    `radial-gradient(16.6% 43.1% at 0% 100%, ${lightStaticData})`,
    [Direction.leftCenter]: `radial-gradient(16.6% 43.1% at 0% 50%, ${lightStaticData})`,
    [Direction.leftBottom]: `radial-gradient(16.6% 43.1% at 0% 0%, ${lightStaticData})`,
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
      className={cn(styles.frame, className)}
      {...props}
    >
      <div className={styles.children_view}>
        {children}
      </div>
      <motion.div
        className={styles.light_anim}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
    </div>
  );
}
