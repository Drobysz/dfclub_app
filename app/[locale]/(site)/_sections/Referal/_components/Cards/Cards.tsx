import { useTranslations } from "next-intl";
import { RefCard } from "./_components";

export const Cards = ()=> {
	const t = useTranslations('main');


	const cards = [
		{
			"title": t('refcard1_title'),
			"desc": t('refcard1_subtitle')
		},

		{
			"title": t('refcard2_title'),
			"desc": t('refcard2_subtitle')
		},

		{
			"title": t('refcard3_title'),
			"desc": t('refcard3_subtitle')
		}
	];

	return (
		<ul className="flex justify-between w-full">
			{cards.map((c, i) =>
				<RefCard
					key={`ref_card_${i}`}
					order={i + 1}
					title={c.title}
					desc={c.desc}
				/>
			)}
		</ul>
	)
}