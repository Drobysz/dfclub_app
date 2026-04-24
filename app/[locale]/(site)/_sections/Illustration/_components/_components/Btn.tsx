import { ProjBtn } from "@/components"
import { useTranslations } from "next-intl"

export const Btn = ()=> {
	const t = useTranslations('main');

	return (
		<ProjBtn
			size="large"
			colorSet="gr_lgt"
		>
			{t('enter')}
		</ProjBtn>
	)
}