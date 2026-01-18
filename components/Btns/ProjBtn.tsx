import { BtnIcon } from "./components/BtnIcon/BtnIcon";
import { ProjBtnProps } from "./ProjBtn.props";
import cn from "classnames";
import { prime_medium } from "@/fonts/fonts";
import styles from "./btn.module.scss";

export const ProjBtn = ({
	colorSet="gr_md",
	size="large",
	icon="none",
	iconColor="white",
	className,
	children,
	full = false,
	...props
}: ProjBtnProps)=> {
	return (
		<button
			{...props}
			className={cn(
				className,
				full ? "w-full" : "w-fit",
				prime_medium.className,
				styles.btn_view,
				colorSet !== "gr_ghost" && styles.btn_anim, {
				["text-white"]: ["gr_dk", "gr_md", "gr_lgt"].includes(colorSet),
				["bg-primary-700"]: colorSet == "gr_dk",
				["bg-primary-600"]: colorSet == "gr_md",
				["bg-primary-500"]: colorSet == "gr_lgt",

				["bg-primary-100 text-primary-400"]: colorSet == "gr_ghost",
				["bg-primary-100 text-primary-500"]: colorSet == "gr_trsp",
				["bg-primary-300 text-primary-500"]: colorSet == "gr_demi_trsp",

				["bg-gray-800"]: colorSet == "gray_dk",
				["bg-gray-700"]: colorSet == "gray_lgt",

				["px-8 py-4"]: size == "large",
				["px-8 py-3"]: size == "medium",
				["px-4 py-2"]: size == "small",
				
				["flex justify-center gap-1 items-center"]: icon !== "none"
			})}
		>
			{icon !== "none" &&
				<BtnIcon
					icon={icon}
					color={iconColor}
				/>}
			{children}
		</button>
	)
}