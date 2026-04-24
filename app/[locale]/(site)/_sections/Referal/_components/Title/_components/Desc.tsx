import cn from "classnames";
import { prime_regular } from "@/fonts/fonts";
import { useTranslations } from "next-intl";

export const Desc = ()=> {
	const t = useTranslations('main');

	return (
		<p className={cn(
			prime_regular.className,
			"text-white flex flex-col leading-7"
		)}>
			{t('ref_subtitle1')}
			<span>{t('ref_subtitle2')}</span>
		</p>
	)
}