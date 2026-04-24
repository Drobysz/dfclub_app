import styles from "../../../footer.module.scss";
import { UnderlinedLink } from "@/components";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Pages = ()=> {
	const t = useTranslations('footer');
	const pages = {
		club: t('club'), catalog: t('catalog'), 
		faq: "FAQ", finances: t('finances'), 
		partership: t('partner'), 
	};

	return (
		<div className="flex flex-col gap-6">
			<h3 className={styles.font_dark}>{t('menu')}</h3>
			<ul className={cn(
				styles.font_light,
				"flex flex-col gap-4"
			)}>
				{Object.entries(pages).map(([k, v], i)=> 
					<UnderlinedLink
						href={`/${k}`}
						key={`id-footer-page-${i}`}
					>
						{v}
					</UnderlinedLink>
				)}
			</ul>
		</div>
	)
}