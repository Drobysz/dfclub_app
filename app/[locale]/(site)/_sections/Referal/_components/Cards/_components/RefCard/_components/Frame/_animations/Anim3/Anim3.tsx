import { Tag } from "./_components/Tag";
import cn from "classnames";

export const Anim3 = ({
	animate,
	className
}: {
	animate: boolean,
	className: string
})=> {
	return (
		<div className={cn(
			"flex flex-col pt-6",
			className
		)}>
			<Tag
				colorSet="white"
				rotationAnchor="left"
				animate={animate}
				className="translate-[-35%]"
			/>
			<Tag
				colorSet="green"
				rotationAnchor="right"
				animate={animate}
				className="translate-[30%]"
			/>
		</div>
	)
}