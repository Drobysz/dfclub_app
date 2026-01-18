import { prime_regular } from "@/fonts/fonts";
import { ReactNode } from "react";
import styles from "../../ib.module.scss";
import cn from "classnames";

export const InfoParagraph = ({
	children,
	textAppearance
}: {
	children: ReactNode,
	textAppearance: string
})=> {
	return (
		<p
			className={cn(
				styles.info_text,
				prime_regular.className,
				textAppearance
			)}
		>
			{children}
		</p>
	)
}