'use client';

import styles from "./pagination.module.scss";
import cn from "classnames";
import { PagesPaginationProps } from "../../PagesPagination.props";
import { useRouter } from "@/i18n/navigation";

export const Pagination = ({
    via,
    page,
    pagesNum,
    link,
    setPage
}: PagesPaginationProps)=> {
    const router = useRouter();

    const handleClick = (p: number)=> {
        if (via == "link" && link) {
            router.push(link + `&page=${p}`);
        } else if (via == "function" && setPage) {
            setPage(p)
        }
    }

    return (
        <ul className="flex items-center gap-1">
            {Array(pagesNum).fill(true).map((_, i)=> (
                <li
                    key={`page-${i}`}
                    className={cn(
                        styles.page,
                        i + 1 == page && "bg-gray-800 text-white"
                    )}
                    onClick={()=> handleClick(i + 1)}
                >
                    <span>{i + 1}</span>
                </li>
            ))}
        </ul>
    )
}