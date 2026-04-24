"use client";

import { useState } from "react";
import cn from "classnames";
import styles from "./short_card.module.scss";
import {
	Title,
	Tag
} from "./_components";
import { ShortCardProps } from "./ShortCard.props";

export const ShortCard = ({
	title,
	subtitle,
	icon
}: ShortCardProps)=> {
	const [hover, setHover] = useState(false);

	return (
		<article
			className={cn(
				styles.card,
				styles.gray_card
			)}
			onMouseEnter={()=> setHover(true)}
			onMouseLeave={()=> setHover(false)}
		>
			<Tag
				hover={hover}
				icon={icon}
			/>
			<Title
				title={title}
				subtitle={subtitle}
			/>
		</article>
	)
}