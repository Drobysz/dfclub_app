import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Header = ()=> {
	return (
		<h1 className={cn(
			prime_semibold.className,
			"flex flex-col text-[2.5rem] leading-11"
		)}>
			<span>Учись у экспертов</span>
			<span>и вдохновляйся</span>
			<span>сильными людьми</span>
		</h1>
	)
}