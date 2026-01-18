import { CSprops } from "./CS.props";
import cn from "classnames";
import { prime_semibold } from "@/fonts/fonts";

export const CourseTag = ({ type, children }: CSprops)=> {
	return (
		<span className={cn(
			"p-2 rounded-lg h-fit w-fit text-sm",
			prime_semibold.className, {
			["bg-violet-light text-violet-dark"]: type == "category",
			["bg-blue-light text-blue-dark"]: 	  type == "course_qntty",
			["bg-banana-light text-banana-dark"]: type == "experience",
			["bg-orange-light text-orange-dark"]: type == "time"
		})}>
			{children}
		</span>
	)
}