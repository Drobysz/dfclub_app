import cn from "classnames";
import styles from "./ps.module.scss";
import { prime_regular } from "@/fonts/fonts";
import {
    LeftArrow,
    RightArrow,
    Pagination
} from "./_components";
import { PagesPaginationProps } from "./PagesPagintaion.props";

export const PagesPagination = ({
    className,
    page,
    pagesNum,
    link
}: PagesPaginationProps)=> {
    return (
        <div className={cn(
            className,
            prime_regular.className,
            styles.switch_bar
        )}>
            <LeftArrow
                page={page}
                pagesNum={pagesNum}
                link={link}
            />
            <Pagination
                page={page}
                pagesNum={pagesNum}
                link={link}
            />
            <RightArrow
                page={page}
                pagesNum={pagesNum}
                link={link}
            />
        </div>
    )
}