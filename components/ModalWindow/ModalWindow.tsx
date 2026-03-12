import cn from "classnames";
import styles from "./mv.module.scss";
import { MVprops } from "./MW.props";

export const ModalWindow = ({
	className,
	children,
	tag = "span",
	...props
}: MVprops)=> {
	return (
		<>
			{tag == "span" &&
				<span
					{...props}
					className={cn(
						className,
						styles.mod_window_span_view
					)}
				>
					{children}
				</span>
			}

			{tag == "div" &&
				<div
					{...props}
					className={cn(
						className,
						styles.mod_window_section_view
					)}
				>
					{children}
				</div>
			}
		</>
	)
}