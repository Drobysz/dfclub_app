'use client';

import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./lob.module.scss";
import Arrow from "@/assets/logout sign.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const LogOutBtn = ()=> {
    const [hover, setHover] = useState(false);

    const animInitial = { opacity: 0, x: -10 };
    const animHovered = { opacity: 1, x: 0 };

    const t = useTranslations('header');

    return (
        <button
            className={cn(
                prime_regular.className,
                styles.btn_logout,
                "text-accent active:bg-accent/10"
            )}
            type="button"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
           
            <motion.span
                className="absolute"
                initial={animInitial}
                animate={hover ? animHovered : animInitial}
            >
                <Arrow />
            </motion.span>

            <motion.span
                animate={hover ? {x: 25} : {x: 0}}
            >
                {t('exit')}
            </motion.span>
        </button>
    )
}