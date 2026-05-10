import cn from "classnames";
import styles from "./ul.module.scss";
import { UnderlinedLinkProps } from "./UnderlinedLink.props";
import { Link } from "@/i18n/navigation";


export const UnderlinedInnerLink = ({
	className,
	href,
	children,
	colorLine = "light",
}: UnderlinedLinkProps)=> {
	return (
		<Link
			href={href}
			className={cn(
				className,
				styles.underline_link
			)}
		>
			<span>{children}</span>
			<span className={cn(
				styles.underline, {
					["bg-white"]: colorLine == "light",
					["bg-gray-700"]: colorLine == "dark"
				}
			)}/>
		</Link>
	)
}