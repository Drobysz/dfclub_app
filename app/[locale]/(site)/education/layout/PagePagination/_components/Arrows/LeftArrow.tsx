'use client';

import { useContext } from "react";
import { EducationContext } from "../../../../context/education.context";
import styles from "./arrow.module.scss";
import { useRouter } from "@/i18n/navigation";
import Arrow from "@/assets/arrow-right-1.svg";
import cn from "classnames";

export const LeftArrow = ()=> {
    const {
        page,
        category,
        sorting
    } = useContext(EducationContext);
    const router = useRouter();
    return (
        <span
            onClick={()=> {
                if (page != 1) {
                    router.push(`/education?category=${category}&page=${page - 1}&sorting=${sorting}`)
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