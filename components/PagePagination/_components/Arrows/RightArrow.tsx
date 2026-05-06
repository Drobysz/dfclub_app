'use client';

import styles from "./arrow.module.scss";
import { useRouter } from "@/i18n/navigation";
import Arrow from "@/assets/arrow-right-1.svg";
import cn from "classnames";
import { ArrowProps } from "./Arrow.props";

export const RightArrow = ({
    page,
    pagesNum,
    link
}: ArrowProps)=> {
    const router = useRouter();
    return (
        <span
            onClick={()=> {
                if (page != pagesNum) {
                    router.push(link + `&page=${page + 1}`)
                }
            }}
            className={cn(
                page == pagesNum
                    ? styles.ghost_arrow
                    : styles.arrow
            )}
        >
            <Arrow />
        </span>
    )
}