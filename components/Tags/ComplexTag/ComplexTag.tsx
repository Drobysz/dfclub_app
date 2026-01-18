import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const ComplexTag = ({
	complexity
}: {
	complexity: "Легкая" | "Средняя" | "Сложная"
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