"use client";

import { ModalWindow } from "@/components/index";
import { useState } from "react";
import styles from "./like.module.scss";
import cn from "classnames";

export const LikeTag = ()=> {
	const [liked, setLiked] = useState(false);
	const stroke = liked ? "none" : "#24272D";
	const fill   = liked ? "#FF383C" : "none";

	return (
		<ModalWindow
			className={cn("w-10 h-10 flex justify-center items-center", liked && styles.like, styles.like_inner)}
			onPointerDown={(e)=>{
				e.preventDefault()
				setLiked((v)=> !v)
			}}
		>
			<svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path d="M10.5165 17.3416C10.2332 17.4416 9.7665 17.4416 9.48317 17.3416C7.0665 16.5166 1.6665 13.075 1.6665 7.24165C1.6665 4.66665 3.7415 2.58331 6.29984 2.58331C7.8165 2.58331 9.15817 3.31665 9.99984 4.44998C10.8415 3.31665 12.1915 2.58331 13.6998 2.58331C16.2582 2.58331 18.3332 4.66665 18.3332 7.24165C18.3332 13.075 12.9332 16.5166 10.5165 17.3416Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</ModalWindow>
	)
}