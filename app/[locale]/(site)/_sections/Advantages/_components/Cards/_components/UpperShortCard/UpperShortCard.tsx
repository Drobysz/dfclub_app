import { useTranslations } from "next-intl";
import { ShortCard } from "../card_templates/index";

export const UpperShortCard = ()=> {
	const t = useTranslations('main');

	return (
		<ShortCard
			title={t('adv_crd_up_short_title')}
			subtitle={t('adv_crd_up_short_subtitle')}
			icon="book"
		/>
	)
}