import Image from "next/image";
import cn from "classnames";
import styles from "../../../footer.module.scss";

export const Logo = ()=> {
	return (
		<div className="flex flex-col gap-2">
			<Image
				src="/logo_white.png"
				height={37}
				width={129}
				alt="logo"
				loading="eager"
			/>
			<p className={cn(
				"flex flex-col",
				styles.font_dark
			)}>
				<span>
					Пространство для обучения,
				</span>
				<span>
					роста и общения
				</span>
			</p>
		</div>
	)
}