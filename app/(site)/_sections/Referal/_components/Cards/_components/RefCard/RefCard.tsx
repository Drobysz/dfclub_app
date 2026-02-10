"use client";

import { RefCardProps } from "./RefCard.props";
import styles from "./rc.module.scss";
import {
	EnumTag,
	Title,
	Frame
} from "./_components";
import { useState } from "react";

export const RefCard = ({
	title,
	desc,
	order
}: RefCardProps)=> {
	const [isHovered, setHovered] = useState(false);

	return (
		<li
			className={styles.ref_card}
			onMouseEnter={()=> setHovered(true)}
			onMouseLeave={()=> setHovered(false)}
		>
			<EnumTag order={order}/>
			<div className={styles.title_frame_spacing}>
				<Title
					title={title}
					desc={desc}
				/>
				<Frame
					order={order}
					isHovered={isHovered}
				/>
			</div>
		</li>
	)
}