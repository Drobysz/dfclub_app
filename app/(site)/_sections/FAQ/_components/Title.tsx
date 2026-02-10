import { 
	prime_semibold,
	prime_regular
} from "@/fonts/fonts";
import cn from "classnames";

export const Title = ()=> {
	return (
		<div className="w-99.25 flex flex-col gap-8">
			<h2 className={cn(
				prime_semibold.className,
				"text-gray-900 text-[2.5rem]",
				"flex flex-col leading-12"
			)}>
				<span>
					Eсть вопросы?
				</span>
				<span className="flex gap-2">
					У нас есть
					<span className="text-primary-500">
						ответы
					</span>
				</span>
			</h2>
			<p className={cn(prime_regular.className, "text-gray-700")}>
				Мы собрали ключевые вопросы и подготовили понятные ответы
			</p>
		</div>
	)
}