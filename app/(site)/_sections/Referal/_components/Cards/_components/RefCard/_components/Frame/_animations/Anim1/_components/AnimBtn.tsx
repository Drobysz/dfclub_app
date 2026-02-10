import { ProjBtn } from "@/components";
import { motion } from "framer-motion";

export const AnimBtn = ({
	animate
}: {
	animate: boolean
})=> {
	return (
		<motion.div
			className="transition-all duration-500 z-20 relative"
			animate={{
				scale: animate ? 1.05 : 1,
			}}
		>
			<ProjBtn
				colorSet="gr_lgt"
				size="large"
			>
				Создай аккаунт
			</ProjBtn>
		</motion.div>
	)
}