import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Header = ()=> {
	const t = useTranslations('main');

	return (
		<h1 className={cn(
			prime_semibold.className,
			"flex flex-col text-[2.5rem] leading-11"
		)}>
			<span>{t('iltr_1')}</span>
			<span>{t('iltr_2')}</span>
			<span>{t('iltr_3')}</span>
		</h1>
	)
}