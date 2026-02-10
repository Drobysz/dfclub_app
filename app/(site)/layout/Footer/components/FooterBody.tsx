import { ReactNode } from "react"
import styles from "../footer.module.scss";
import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";

export const FooterBody = ({
	className,
	children
}: {
	className?: string,
	children: ReactNode
})=> {
	return (
		<footer className={cn(
			className,
			styles.footer_markup,
			prime_regular.className
		)}>
			<div className={styles.footer_view}>
				{children}
			</div>
		</footer>
	)
}