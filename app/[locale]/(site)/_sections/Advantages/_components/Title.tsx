import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Title = ()=> {
	const t = useTranslations('main');

	return (
		<header className="flex justify-between items-center">
			<h2
				className={cn(
					prime_semibold.className,
					"text-gray-900 text-[2.5rem]",
					"flex flex-col leading-11"
				)}
			>
				<span className="text-primary-500">{t('adv_lrg1')}</span> 
				<span>{t('adv_lrg2')}</span>
				<span>{t('adv_lrg3')}</span>
			</h2>
			<p
				className={cn(
					prime_regular.className,
					"text-gray-800 w-116.25"
				)}
			>
				{t('adv_sm')}
			</p>
		</header>
	)
}