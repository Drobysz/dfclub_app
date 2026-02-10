import cn from "classnames";
import {
	Logo,
	Profile,
	NavBar
} from "./_components";
import { LiquidGlass } from "@/components";
import styles from "./header.module.scss";

export const Header = ({
	className
}: {
	className?: string
})=> {
	return (
		<header className={cn(
			className,
			styles.padding
		)}>
			<LiquidGlass
				className={styles.header}
			>
				<div className={styles.left_part}>
					<Logo />
					<NavBar />
				</div>
				<div className={styles.right_part}>
					<Profile />
				</div>
			</LiquidGlass>
		</header>
	)
}