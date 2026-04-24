import cn from "classnames";
import { prime_medium } from "@/fonts/fonts";
import { useTranslations } from "next-intl";

export const SubscribeTag = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	const t = useTranslations('main');

	return (
		<span className={cn(
			"w-fit h-fit rounded-lg p-2",
			"bg-primary-500/25",
			prime_medium.className, {
				["text-white"]: bgColor == "dark",
				["text-primary-500"]: bgColor == "green"
			}
		)}>
			{t('sub_crd_tag')}
		</span>
	)
}