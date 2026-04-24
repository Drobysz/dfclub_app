import { ReactNode } from "react";
import styles from "../pi.module.scss";
import cn from "classnames";

export const OuterSpace = ({
    children,
    size,
    isActive,
}: {
	children: ReactNode,
	size: "middle" | "small",
	isActive: boolean
})=> {
    return (
        <div className={cn(
			styles.icon_outer_space,
			isActive
				? "cursor-pointer"
				: "pointer-events-none",
			{
				["w-14 h-14"]: size == "middle",
				["w-12 h-12"]: size == "small",
			}
		)}>
            {children}
        </div>
    )
}