import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";

export const Price = ()=> {
	return (
		<span className="flex items-center gap-2">
			<span className={cn(
				prime_regular.className,
				"text-white text-[2.5rem]"
			)}>
				20$
			</span>
			<span className={cn(
				prime_regular.className,
				"text-gray-500 pt-1"
			)}>
				/месяц
			</span>
		</span>
	)
}