import  styles from "./frame.module.scss";
import {
	Anim1,
	Anim2,
	Anim3
} from "./_animations"
import cn from "classnames";
import { BackAnim } from "./_animations/BackAnim/BackAnim";

export const Frame = ({
	order,
	isHovered
}: {
	order: number,
	isHovered: boolean
})=> {
	const animations = [
		Anim1,
		Anim2,
		Anim3
	];

	const CurrentAnimation = animations[order - 1];

	return (
		<div className={cn(styles.frame, "bg-gray-100")}>
			<CurrentAnimation
				className="z-10"
				animate={isHovered}
			/>
			<BackAnim
				order={order - 1}
				isHovered={isHovered}
			/>
		</div>
	)
}