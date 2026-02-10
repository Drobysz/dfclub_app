import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Header = ()=> {
	return (
		<h2
			className={cn(
				prime_semibold.className,
				"flex flex-col leading-12 text-[2.5rem]"
			)}
		>
			Зарабатывай, помогая
			<span>друзьям учиться</span>
		</h2>
	)
}