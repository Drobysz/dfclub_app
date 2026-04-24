import { motion } from "framer-motion";
import CursorIcon from "@/assets/cursor.svg";

export const Cursor = ({
	animate	
}: {
	animate: boolean
})=> {
	return (
		<motion.div
			className="absolute transition-all duration-300 z-30"
			animate={{
				left: animate ? 134 : 150,
				bottom: animate ? -11 : -20
			}}
		>
			<CursorIcon />
		</motion.div>
	)
}