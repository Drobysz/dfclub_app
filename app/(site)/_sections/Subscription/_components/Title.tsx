import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Title = ()=> {
	return (
		<div className="w-107.5 flex flex-col gap-8">
			<h2 className={cn(
				prime_semibold.className,
				"flex flex-col text-[2.5rem] leading-11"
			)}> 
				<span className="text-primary-500">
					Единый доступ
				</span>
				<span className="text-white">
					к курсам платформы
				</span>
			</h2>
			<p className="text-white">
				Подписка открывает доступ к курсам, практике и материалам платформы в удобном формате и без необходимости покупки каждого курса отдельно
			</p>
		</div>
	)
}