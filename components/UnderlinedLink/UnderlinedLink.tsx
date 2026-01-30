import Link from "next/link";
import cn from "classnames";
import styles from "./ul.module.scss";
import { UnderlinedLinkProps } from "./UnderlinedLink.props";

export const UnderlinedLink = ({
	className,
	href,
	children,
	...props
}: UnderlinedLinkProps)=> {
	return (
		<li
			className={cn(
				className,
				styles.underline_link
			)}
			{...props}
		>
			<Link href={href}>
				<span>{children}</span>
				<span className={styles.underline}/>
			</Link>
		</li>
	)
}