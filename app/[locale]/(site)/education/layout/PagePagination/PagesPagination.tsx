import cn from "classnames";
import styles from "./ps.module.scss";
import { prime_regular } from "@/fonts/fonts";
import {
    LeftArrow,
    RightArrow,
    Pagination
} from "./_components";

export const PagesPagination = ({
    className
}: {
    className?: string
})=> {
    return (
        <div className={cn(
            className,
            prime_regular.className,
            styles.switch_bar
        )}>
            <LeftArrow />
            <Pagination />
            <RightArrow />
        </div>
    )
}