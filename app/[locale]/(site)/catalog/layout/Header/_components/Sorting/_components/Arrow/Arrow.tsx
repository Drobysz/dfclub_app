'use client';

import styles from "./arrow.module.scss";
import cn from "classnames";
import ArrowImg from "@/assets/arrow-right-1.svg";

export const Arrow = ({ open }: { open: boolean })=> {
    return (
        <span className={cn(styles.sorting_btn_arrow, {
            ["rotate-90 translate-y-[0.08rem]"]: !open,
            ["-rotate-90 -translate-y-[0.1rem]"]: open
        })}>
            <ArrowImg />
        </span>
    )
}