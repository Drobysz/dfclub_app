import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Title = ({
	className,
	cardType="progress",
	title,
	subtitle
}: {
	className?: string,
	cardType?: "progress" | "player",
	title: string,
	subtitle: string
})=> {
	return (
		<div
			className={cn(
				"flex flex-col gap-4",
				"self-start text-white text-left",
				cardType === "player" && "pt-4",
				className
			)}
		>
			<h4 className={cn(
				prime_semibold.className,
				"text-2xl"
			)}>
				{title}
			</h4>
			<p
				className={prime_regular.className}
			>
				{subtitle}
			</p>
		</div>
	)
}