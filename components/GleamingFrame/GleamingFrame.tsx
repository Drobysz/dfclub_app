"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./gc.module.scss";

import {
  GCprops,
  Direction
} from "./GC.props";

import {
  highlight,
  movingMap
} from "./animation";

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
