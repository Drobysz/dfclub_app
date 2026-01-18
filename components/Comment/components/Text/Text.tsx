import { prime_regular } from "@/fonts/fonts";
import { TextProps } from "./Text.props";
import cn from "classnames";

export const Text = ({ title, comment }: TextProps)=> {
	return (
		<div className={cn(
			prime_regular.className,
			"flex flex-col gap-8 text-gray-800"
		)}>
			<h3>
				Пройден курс: &quot;{title}&quot;
			</h3>

			<p>
				&quot;{comment}&quot;
			</p>
		</div>
	)
}