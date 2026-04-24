import { 
	prime_semibold,
	prime_regular
} from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Title = ()=> {
	const t = useTranslations('main');

	return (
		<div className="w-99.25 flex flex-col gap-8">
			<h2 className={cn(
				prime_semibold.className,
				"text-gray-900 text-[2.5rem]",
				"flex flex-col leading-12"
			)}>
				<span>
					{t('faq_title1')}
				</span>
				<span className="flex gap-2">
					{t('faq_title2')}
					<span className="text-primary-500">
						{t('faq_title3')}
					</span>
				</span>
			</h2>
			<p className={cn(prime_regular.className, "text-gray-700")}>
				{t('faq_subtitle')}
			</p>
		</div>
	)
}