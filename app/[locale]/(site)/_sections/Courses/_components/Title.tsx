import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Title = ()=> {
	const t = useTranslations('main');

	return (
		<div className="flex flex-col gap-4 text-center">
			<h3 className={cn(
				prime_semibold.className,
				"text-gray-900 text-[2.5rem]"
			)}>
				{t('courses_title')}
			</h3>
			<p className={cn(
				prime_regular.className,
				"text-gray-800 w-135.5"
			)}>
				{t('courses_subtitle')}
			</p>
		</div>
	)
}