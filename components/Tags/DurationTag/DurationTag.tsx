import { prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./duration.module.scss";
import { convertTime } from "@/helpers/index";

export const DurationTag = ({
	totalTime,
	nbLessons
}: {
	totalTime: number,
	nbLessons: number
})=> {
	const time = convertTime(totalTime)

	return (
		<span className={cn(
			styles.dur_tag,
			prime_semibold.className,
			"bg-orange-light text-orange-dark"
		)}>
			<span>{time}</span>
			|
			<span>{nbLessons} уроков</span>
		</span>
	)
}