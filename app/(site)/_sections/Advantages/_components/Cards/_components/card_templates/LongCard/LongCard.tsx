"use client";

import styles from "./long_card.module.scss";
import cn from "classnames";
import {
	Title,
	Illustration,
	VideoPlayer
} from "./_components/index";
import { useState } from "react";
import { LongCardProps } from "./LongCard.props";

export const LongCard = ({
	cardType,
	title,
	subtitle
}: LongCardProps)=> {
	const [hover, setHover] = useState(false);
	const bgStyle = cardType === "player" ? styles.player : styles.illustration;

	return (
		<article
			className={cn(
				styles.card,
				styles.long_card,
				bgStyle
			)}
			onMouseEnter={()=> setHover(true)}
			onMouseLeave={()=> setHover(false)}
		>
			<Title
				title={title}
				subtitle={subtitle}
				cardType={cardType}
			/>
			{cardType === "progress" &&
				<Illustration
					hover={hover}
				/>
			}
			{cardType === "player" &&
				<VideoPlayer
					hover={hover}
				/>
			}
		</article>
	)
}