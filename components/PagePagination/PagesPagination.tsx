import cn from "classnames";
import styles from "./ps.module.scss";
import { prime_regular } from "@/fonts/fonts";
import {
    LeftArrow,
    RightArrow,
    Pagination
} from "./_components";
import { PagesPaginationProps } from "./PagesPagination.props";

export const PagesPagination = ({
    via,
    className,
    page,
    setPage,
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
                via={via}
                page={page}
                pagesNum={pagesNum}
                link={link}
                setPage={setPage}
            />
            <Pagination
                via={via}
                page={page}
                pagesNum={pagesNum}
                link={link}
                setPage={setPage}
            />
            <RightArrow
                via={via}
                page={page}
                pagesNum={pagesNum}
                link={link}
                setPage={setPage}
            />
        </div>
    )
}