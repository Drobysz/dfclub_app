'use client';

import Link from "next/link"
import styles from "./pagination.module.scss";
import cn from "classnames";
import { PagesPaginationProps } from "../../PagesPagintaion.props";

export const Pagination = ({
    page,
    pagesNum,
    link
}: PagesPaginationProps)=> {

    return (
        <ul className="flex items-center gap-1">
            {Array(pagesNum).fill(true).map((_, i)=> (
                <Link
                    key={`page-${i}`}
                    href={link + `&page=${i + 1}`}
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