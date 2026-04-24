import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Price = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	const t = useTranslations('main');

	return (
		<span className={cn("flex items-center gap-2")}>
			<span className={cn(
				prime_regular.className,
				"text-[2.5rem]", {
					["text-white"]: bgColor == "dark",
					["text-gray-900"]: bgColor == "green"
				}
			)}>
				20$
			</span>
			<span className={cn(
				prime_regular.className,
				"pt-1", {
					["text-gray-500"]: bgColor == "dark",
					["text-gray-800"]: bgColor == "green"
				}
			)}>
				/{t('sub_crd_pricetag')}
			</span>
		</span>
	)
}