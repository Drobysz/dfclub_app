"use client";

import { useEffect, useRef } from "react";
import { TestComment } from "./test/TestComment"

export const Comments = ({idx}: {idx: number})=> {
	const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		const el = itemsRef.current[idx];

		if (!el) return;
		console.log(idx != 0 ? "start" : "end")

		el.scrollIntoView({
			behavior: "smooth",
			inline: idx != 0 ? "start" : "end",
			block: "nearest",
		});
	}, [idx]);

	return (
		<div
			className="overflow-x-hidden flex flex-nowrap gap-8 w-full py-4 px-6"
		>
			{Array(6).fill(true).map((_, i) => (
				<div
					key={i}
					ref={(el) => {
						itemsRef.current[i] = el;
					}}
					className="shrink-0"
				>
					<TestComment />
				</div>
			))}
		</div>
	)
}