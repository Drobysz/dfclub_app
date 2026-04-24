import Link from "next/link";
import styles from "../../footer.module.scss";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const LowerPart = ()=> {
	const t = useTranslations('footer');

	return (
		<div className={styles.lower}>
			<p className={cn(
				"flex flex-col",
				styles.font_dark
			)}>
				<span>
					{t('copyright')}
				</span>
				<span>
					{t('legal')}
				</span>
			</p>
			<Link href="#">
				<span className={cn(styles.page_link, styles.font_light)}>
					{t('sponsor')}
				</span>
			</Link>
		</div>
	)
}