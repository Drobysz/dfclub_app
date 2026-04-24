import { prime_regular, prime_semibold } from "@/fonts/fonts";
import { TitleProps } from "./Title.props";
import cn from "classnames";

export const Title = ({
	title,
	desc
}: TitleProps)=> {
	return (
		<div className="flex flex-col gap-4 items-center">
			<h3 className={cn(
				prime_semibold.className,
				"text-gray-900 text-2xl"
			)}>
				{title}
			</h3>
			<p className={cn(
				prime_regular.className,
				"text-gray-600 text-center"
			)}>
				{desc}
			</p>
		</div>
	)
}