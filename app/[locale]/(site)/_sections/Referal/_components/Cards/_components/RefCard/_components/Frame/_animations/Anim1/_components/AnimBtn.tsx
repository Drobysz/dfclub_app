import { ProjBtn } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const AnimBtn = ({
	animate
}: {
	animate: boolean
})=> {
	const t = useTranslations('main');

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
				{t('refcard1_animbtn_txt')}
			</ProjBtn>
		</motion.div>
	)
}