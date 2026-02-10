import { ModalWindow } from "@/components";
import cn from "classnames";
import styles from "./tag.module.scss";
import { motion } from "framer-motion";
import { TagProps } from "./Tag.props";
import { prime_medium } from "@/fonts/fonts";
import {
	animStyles,
	colorStyles
} from "./styles";

export const Tag = ({
	colorSet = "white",
	rotationAnchor = "left",
	animate,
	className
}: TagProps)=> {
	const rotated = animStyles.rotation[rotationAnchor].rotated;
	const initial = animStyles.rotation[rotationAnchor].initial;
	const anchor = animStyles.anchor[rotationAnchor]

	return (
		<motion.div
			className={cn(
				className,
				prime_medium.className
			)}
			animate={{
				rotate: animate
					? rotated
					: initial
			}}
			style={{
				transformOrigin: anchor
			}}
		>
			<ModalWindow
				className={cn(
					styles.tag,
					colorStyles[colorSet]
				)}
				tag="span"
			>
				+25 USDT
			</ModalWindow>
		</motion.div>
	)
}