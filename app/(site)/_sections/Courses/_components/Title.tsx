import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Title = ()=> {
	return (
		<div className="flex flex-col gap-4 text-center">
			<h3 className={cn(
				prime_semibold.className,
				"text-gray-900 text-[2.5rem]"
			)}>
				Наши курсы
			</h3>
			<p className={cn(
				prime_regular.className,
				"text-gray-800 w-135.5"
			)}>
				Доступ к лучшим образовательным курсам в одном месте. Осваивай новое в своём ритме и с удовольствием
			</p>
		</div>
	)
}