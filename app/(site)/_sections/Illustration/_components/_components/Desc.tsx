import { prime_medium } from "@/fonts/fonts";
import cn from "classnames";

export const Desc = ()=> {
	return (
		<p className={cn(
			prime_medium.className,
			"text-gray-700"
		)}>
			Место, где обучение становится стартом к успеху
		</p>
	)
}