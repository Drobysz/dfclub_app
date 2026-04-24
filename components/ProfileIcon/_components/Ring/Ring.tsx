import styles from "../../pi.module.scss";
import cn from "classnames";
import { RingProps } from "./Ring.props";

export const Ring = ({
    children,
    size,
    ...props
}: RingProps
)=> {
    return (
        <div
            className={cn(
                styles.user_icon_ring,
                "border-primary-300", {
                ["w-12 h-12 border-2"]: size == "middle",
                ["w-10 h-10 border"]: size == "small",
		    })}
            {...props}
        >
            {children}
        </div>
    )
}