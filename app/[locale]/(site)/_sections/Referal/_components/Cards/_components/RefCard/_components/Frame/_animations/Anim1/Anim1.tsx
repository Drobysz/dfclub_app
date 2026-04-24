import {
	AnimBtn,
	Cursor
} from "./_components";
import cn from "classnames";

export const Anim1 = ({
	animate,
	className
}: {
	animate: boolean,
	className?: string
})=> {
	return (
		<div className={cn(
			"relative isolate",
			className
		)}>
			<AnimBtn animate={animate} />
			<Cursor animate={animate} />
		</div>
	)
}