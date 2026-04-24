import { useTranslations } from "next-intl";
import { ShortCard } from "../card_templates";

export const LowerShortCard = ()=> {
	const t = useTranslations('main');

	return (
		<ShortCard
			title={t('adv_crd_down_short_title')}
			subtitle={t('adv_crd_down_short_subtitle')}
			icon="bonnet"
		/>
	)
}