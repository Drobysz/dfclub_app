import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";
import { TimeProps } from "./Time.props";
import { convertTime } from "@/helpers";

export const Time = ({
	cardType,
	total_time,
	progress = 0,
	nbCourses
}: TimeProps)=> {
	const raw_time = cardType != "incompleted"
		? total_time
		: total_time - progress
	const hours = convertTime(raw_time);
	const lw = nbCourses > 1 ? "уроков" : "урок";

	return (
		<div className={cn(
			prime_regular.className,
			"text-gray-700"
		)}>
			{cardType == "incompleted" && "Осталось "} 
			{hours}
			{ cardType != "incompleted" &&
				` | ${nbCourses} ${lw}`
			}
		</div>
	)
}