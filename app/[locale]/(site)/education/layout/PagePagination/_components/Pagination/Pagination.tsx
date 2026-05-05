'use client';

import Link from "next/link"
import { EducationContext } from "../../../../context/education.context";
import { useContext } from "react";
import styles from "./pagination.module.scss";
import cn from "classnames";

export const Pagination = ()=> {
    const {
        page,
        pages,
        category,
        sorting
    } = useContext(EducationContext);

    return (
        <ul className="flex items-center gap-1">
            {Array(pages).fill(true).map((_, i)=> (
                <Link
                    key={`page-${i}`}
                    href={`/education?category=${category}&page=${i + 1}&sorting=${sorting}`}
                    className={cn(i + 1 == page && "pointer-events-none")}
                >
                    <li
                        key={`page-${i}`}
                        className={cn(
                            styles.page,
                            i + 1 == page && "bg-gray-800 text-white"
                        )}
                    >
                        <span>{i + 1}</span>
                    </li>
                </Link>
            ))}
        </ul>
    )
}