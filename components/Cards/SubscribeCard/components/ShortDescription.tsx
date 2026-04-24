import { useTranslations } from "next-intl";

export const ShortDescription = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	const t = useTranslations('main');
	const styles = bgColor == "green"
		? "text-gray-800"
		: "text-gray-400";

	return (
		<p className={styles}>
			{t('sub_crd_short_desc')}
		</p>
	)
}