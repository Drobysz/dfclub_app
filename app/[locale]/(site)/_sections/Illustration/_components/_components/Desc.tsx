import { prime_medium } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Desc = ()=> {
	const t = useTranslations('main');


	return (
		<p className={cn(
			prime_medium.className,
			"text-gray-700"
		)}>
			{t('iltr_desc')}
		</p>
	)
}