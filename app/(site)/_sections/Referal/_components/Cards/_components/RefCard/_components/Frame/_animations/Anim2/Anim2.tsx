import {
	Images,
	AnimatedCross
} from "./_components";
import cn from "classnames";

export const Anim2 = ({
	animate,
	className
}: {
	animate: boolean,
	className: string
})=> {
	return (
		<div className={cn(
			"flex justify-between",
			className
		)}>
			<Images />
			<AnimatedCross
				animate={animate}
			/>
		</div>
	)
}