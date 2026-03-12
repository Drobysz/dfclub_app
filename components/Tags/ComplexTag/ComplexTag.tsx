import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import { complexities } from "@/interface";

export const ComplexTag = ({
	complexity
}: {
	complexity: complexities
})=> {
	return (
		<span className={cn(
			"p-2 rounded-lg h-fit w-fit text-sm",
			"bg-cyan-light text-cyan-dark",
			prime_semibold.className
		)}>
			Сложность: {complexity}
		</span>
	)
}