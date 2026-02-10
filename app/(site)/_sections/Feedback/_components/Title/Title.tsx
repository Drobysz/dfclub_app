import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./title.module.scss";
import { Switchers } from "./_components/Switchers";

export const Title = ({
	idx,
	setIdx
}: {
	idx: number,
	setIdx: (n: number)=> void
})=> {
	return (
		<div className={styles.sect}>
			<h2 className={cn(
				prime_semibold.className,
				styles.header
			)}>
				Опыт наших <span>участников</span>
			</h2>

			<div className="flex flex-col gap-8">
				<p className={cn(
					styles.desc,
					prime_regular.className
				)}>
					Изучите опыт наших участников — их отзывы
					помогут понять, подходит ли вам обучение
				</p>
				<Switchers
					idx={idx}
					setIdx={setIdx}
				/>
			</div>
		</div>
	)
}