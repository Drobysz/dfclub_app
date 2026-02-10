import Link from "next/link";
import styles from "../../footer.module.scss";
import cn from "classnames";

export const LowerPart = ()=> {
	return (
		<div className={styles.lower}>
			<p className={cn(
				"flex flex-col",
				styles.font_dark
			)}>
				<span>
					© 2025 DF Club. Все права защищены.
				</span>
				<span>
					DF Club  образовательное сообщество. Не является финансовой организацией.
				</span>
			</p>
			<Link href="#">
				<span className={cn(styles.page_link, styles.font_light)}>
					О нашем спонсоре DexNet
				</span>
			</Link>
		</div>
	)
}