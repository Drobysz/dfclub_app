import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Title = ({
	title,
	subtitle
}: {
	title: string,
	subtitle: string
})=> {
	return (
		<div
			className="flex flex-col gap-4 text-left"
		>
			<h4 className={cn(
				prime_semibold.className,
				"text-2xl text-gray-900"
			)}>
				{title}
			</h4>
			<p className={cn(
				prime_regular.className,
				"text-gray-600"
			)}>
				{subtitle}
			</p>
		</div>
	)
}