import Image from "next/image";
import cn from "classnames";
import styles from "../../../footer.module.scss";
import { useTranslations } from "next-intl";

export const Logo = ()=> {
	const t = useTranslations('footer');

	return (
		<div className="flex flex-col gap-2">
			<Image
				src="/logo_white.png"
				height={37}
				width={129}
				alt="logo"
				loading="eager"
			/>
			<p className={cn(
				"flex flex-col",
				styles.font_dark
			)}>
				<span>
					{t('env1')}
				</span>
				<span>
					{t('env2')}
				</span>
			</p>
		</div>
	)
}