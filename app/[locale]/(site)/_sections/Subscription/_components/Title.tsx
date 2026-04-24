import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Title = ()=> {
	const t = useTranslations('main');

	return (
		<div className="w-107.5 flex flex-col gap-8">
			<h2 className={cn(
				prime_semibold.className,
				"flex flex-col text-[2.5rem] leading-11"
			)}> 
				<span className="text-primary-500">
					{t('sub_title1')}
				</span>
				<span className="text-white">
					{t('sub_title2')}
				</span>
			</h2>
			<p className="text-white">
				{t('sub_subtitle')}
			</p>
		</div>
	)
}