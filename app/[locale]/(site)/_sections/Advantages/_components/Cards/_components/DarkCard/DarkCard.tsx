import { useTranslations } from "next-intl";
import { LongCard } from "../card_templates"

export const DarkCard = ()=> {
	const t = useTranslations('main');

	return (
		<LongCard
			cardType="player"
			title={t('adv_dk_crd_title')}
			subtitle={t('adv_crd_dk_subtitle')}
		/>
	)
}