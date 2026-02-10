import styles from "./sc.module.scss";
import cn from "classnames";
import { SectContainerProps } from "./SectContainer.props";

export const SectContainer = ({
	className,
	children,
	bgColor
}: SectContainerProps)=> {
	return (
		<section className={cn(
			styles.section,
			bgColor
		)}>
			<div className={cn(
				styles.container,
				className
			)}>
				{children}
			</div>
		</section>
	)
}