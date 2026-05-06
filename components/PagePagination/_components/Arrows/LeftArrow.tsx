'use client';

import styles from "./arrow.module.scss";
import { useRouter } from "@/i18n/navigation";
import Arrow from "@/assets/arrow-right-1.svg";
import cn from "classnames";
import { ArrowProps } from "./Arrow.props";

export const LeftArrow = ({
    page,
    link
}: ArrowProps)=> {
    
    const router = useRouter();
    return (
        <span
            onClick={()=> {
                if (page != 1) {
                    router.push(link + `&page=${page - 1}`)
                }
            }}
            className={cn(
                "rotate-180",
                page == 1
                    ? styles.ghost_arrow
                    : styles.arrow
            )}
        >
            <Arrow />
        </span>
    )
}