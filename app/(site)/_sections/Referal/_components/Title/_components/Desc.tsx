import cn from "classnames";
import { prime_regular } from "@/fonts/fonts";

export const Desc = ()=> {
	return (
		<p className={cn(
			prime_regular.className,
			"text-white flex flex-col leading-7"
		)}>
			Делись своей персональной ссылкой с друзьями и получай бонусы
			<span>за их участие в обучении</span>
		</p>
	)
}