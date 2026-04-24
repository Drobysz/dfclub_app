import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Header = ()=> {
	const t = useTranslations('main');

	return (
		<h2
			className={cn(
				prime_semibold.className,
				"flex flex-col leading-12 text-[2.5rem]"
			)}
		>
			{t('ref_title1')}
			<span>{t('ref_title2')}</span>
		</h2>
	)
}