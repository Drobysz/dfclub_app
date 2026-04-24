import { useTranslations } from "next-intl";
import {
	LongCard
} from "../card_templates/index";

export const GreenCard = ()=> {
	const t = useTranslations('main');

	return (
		<LongCard
			cardType="progress"
			title={t('adv_gr_crd_title')}
			subtitle={t('adv_gr_crd_subtitle')}
		/>
	)
}