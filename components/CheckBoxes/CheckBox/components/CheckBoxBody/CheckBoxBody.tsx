"use client";

import { CheckBoxProps } from "./body.module";
import cn from "classnames";
import styles from "../../cb.module.scss";

export const CheckBoxBody = ({
	children,
	checked,
	setCheck
}: CheckBoxProps)=> {
	const checkStyle = "border-primary-500 bg-primary-500";

	return (
		<span
			className={cn(
				styles.checkbox_view,
				"border-2 border-gray-400",
				checked && checkStyle
			)}
			onClick={()=> setCheck((v)=> !v)}
			aria-checked={checked}
			role="checkbox"
		>
			{children}
		</span>
	)
}