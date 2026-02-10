import { motion } from "framer-motion";
import Cross from "@/assets/Plus.svg";
import cn from "classnames";

export const AnimatedCross = ({
	animate
}: {
	animate: boolean
})=> {
	return (
		<motion.div
			className={cn(
				"overflow-hidden rounded-full",
				"flex justify-center items-center",
				"text-white bg-primary-500",
				"h-16 w-16 -ml-4 border-3 border-gray-100",
				"duration-100"
			)}

			animate={{
				scale: animate ? 1.15 : 1
			}}
		>
			<Cross />
		</motion.div>
	)
}