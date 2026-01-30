"use client";

import { KeyboardEvent, useState } from "react";
import { Star } from "../Star/Star";
import { Ratingprops } from "./Ratings.props";
import cn from "classnames";

export const Rating = ({ isEditable = false, rating, setRating, ...props }: Ratingprops) => {
	const [hoverRating, setHoverRating] = useState<number | null>(null);
	const displayRating = hoverRating ?? rating;

	const handleMouseEnter = (i: number) => {
		if (!isEditable) return;
			setHoverRating(i);
	};

	const handleMouseLeave = () => {
		if (!isEditable) return;
		setHoverRating(null);
	};

	const handleClick = (i: number) => {
		if (!isEditable || !setRating) return;
		setRating(i);
	};

	const handleSpace = (e: KeyboardEvent<HTMLSpanElement>, i: number) => {
		if (e.code !== "Space" || !setRating) return;
		setRating(i);
	};

	return (
		<div className="flex w-fit" {...props}>
			{Array.from({ length: 5 }, (_, i) => (
				<span 
					key={i}
					className={cn("px-0.5", isEditable && "cursor-pointer")}
					onMouseEnter={() => handleMouseEnter(i + 1)}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(i + 1)}
					onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) =>
						isEditable && handleSpace(e, i + 1)
					}

				>
					<Star
						className={"transition-all duration-100"}
						note={i <= displayRating - 1 ? 5 : 0}
						tabIndex={isEditable ? 0 : -1}
						uid={`rating-${rating}-star-${i}`}
					/>
				</span>
			))}
		</div>
	)
}