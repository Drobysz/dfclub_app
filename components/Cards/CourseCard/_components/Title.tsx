import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";


export const Title = ({ title }: { title: string })=> {
	return (
		<h3 className={cn(
			prime_semibold.className,
			"text-gray-900 text-xl"
		)}>
			{title}
		</h3>
	)
}