'use client';

import styles from "./arrow.module.scss";
import { useRouter } from "@/i18n/navigation";
import Arrow from "@/assets/arrow-right-1.svg";
import cn from "classnames";
import { ArrowProps } from "./Arrow.props";

export const RightArrow = ({
    via,
    page,
    pagesNum,
    link,
    setPage
}: ArrowProps)=> {
    const router = useRouter();
    
    const handleClick = ()=> {
        if (page != pagesNum) {
            if (via == "link" && link) {
                router.push(link + `&page=${page + 1}`)
            } else if (via == "function" && setPage) {
                setPage(p=> p + 1)
            }
        }
    }

    return (
        <button
            onClick={handleClick}
            className={cn(
                page == pagesNum
                    ? styles.ghost_arrow
                    : styles.arrow
            )}
        >
            <Arrow />
        </button>
    )
}