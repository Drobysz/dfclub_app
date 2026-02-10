import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";


export const EnumTag = ({
	order
}: {
	order: number
})=> {
	return (
		<span className={cn(
			prime_regular.className,
			"text-primary-500 bg-primary-200",
			"rounded-full px-5 py-3 w-fit h-fit"
		)}>
			{order}
		</span>
	)
}