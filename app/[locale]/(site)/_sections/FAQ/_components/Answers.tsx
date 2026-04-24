import { InfoBlock } from "@/components";
import { useTranslations } from "next-intl";

export const Answers = ()=> {
	const t = useTranslations('main');

	const faq = [
		{
			"title": t('faq_qst1'),
			"answer": t('faq_ans1'),
		},
		{
			"title": t('faq_qst2'),
			"answer": t('faq_ans2'),
		},
		{
			"title": t('faq_qst3'),
			"answer": t('faq_ans3'),
		},
		{
			"title": t('faq_qst4'),
			"answer": t('faq_ans4'),
		},
		{
			"title": t('faq_qst5'),
			"answer": t('faq_ans5'),
		},
		{
			"title": t('faq_qst6'),
			"answer": t('faq_ans6'),
		},
	];

	return (
		<div className="flex flex-col gap-4 w-150">
			{faq.map((bl, idx)=>
				<InfoBlock
					key={`id-${idx}-${bl.title}`}
					title={bl.title}
					text={bl.answer}
				/>
			)}
		</div>
	)
}