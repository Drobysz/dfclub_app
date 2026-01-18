import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const ActivityTag = ({ isActive = false }: { isActive?: boolean })=> {
	const tagStyles = isActive
		? "bg-green-light text-green-dark"
		: "bg-red-light text-accent";

	return (
		<span className={cn(
			"p-2 rounded-lg w-fit h-fit",
			tagStyles, prime_semibold.className
		)}>
			{isActive ? "Активный" : "Неактивный"}
		</span>
	)
}