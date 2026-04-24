import { ProjBtn } from "@/components"
import { useTranslations } from "next-intl";
import Link from "next/link"

export const Btn = ()=> {
	const t = useTranslations('main');

	return (
		<Link
			href="/courses"
		>
			<ProjBtn
				colorSet="gr_lgt"
				size="large"
			>
				{t('courses_btn')}
			</ProjBtn>
		</Link>
	)
}