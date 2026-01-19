import cn from "classnames";
import { prime_medium } from "@/fonts/fonts";

export const SubscribeTag = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	return (
		<span className={cn(
			"w-fit h-fit rounded-lg p-2",
			"bg-primary-500/25",
			prime_medium.className, {
				["text-white"]: bgColor == "dark",
				["text-primary-500"]: bgColor == "green"
			}
		)}>
			Подписка Pro
		</span>
	)
}