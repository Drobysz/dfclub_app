import Link from "next/link";
import styles from "../../../footer.module.scss";
import { UnderlinedLink } from "@/components";
import cn from "classnames";

export const Pages = ()=> {
	const pages = {
		club: "О клубе", catalog: "Каталог", 
		faq: "FAQ", finances: "Финансы", 
		partership: "Партнерство", 
	};

	return (
		<div className="flex flex-col gap-6">
			<h3 className={styles.font_dark}>Меню</h3>
			<ul className={cn(
				styles.font_light,
				"flex flex-col gap-4"
			)}>
				{Object.entries(pages).map(([k, v], i)=> 
					<UnderlinedLink
						href={`/${k}`}
						key={`id-footer-page-${i}`}
					>
						{v}
					</UnderlinedLink>
				)}
			</ul>
		</div>
	)
}