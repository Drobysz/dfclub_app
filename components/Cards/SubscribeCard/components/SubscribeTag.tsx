import cn from "classnames";
import { prime_medium } from "@/fonts/fonts";

export const SubscribeTag = ()=> {
	return (
		<span className={cn(
			"w-fit h-fit rounded-lg p-2",
			"bg-primary-500/25 text-white",
			prime_medium.className
		)}>
			Подписка Pro
		</span>
	)
}