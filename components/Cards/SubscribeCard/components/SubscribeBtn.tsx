import { ProjBtn } from "@/components/index";
import { useTranslations } from "next-intl";

export const SubscribeBtn = ()=> {
	const t = useTranslations('main');
	
	return (
		<ProjBtn colorSet="gr_lgt" full>
			{t('sub_crd_btn')}
		</ProjBtn>
	)
}