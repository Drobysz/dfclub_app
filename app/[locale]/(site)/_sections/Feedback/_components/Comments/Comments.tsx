"use client";

import { useEffect, useRef } from "react";
import { TestComment } from "./test/TestComment"
import { SwitchProps } from "../../Feedback";

export const Comments = ({swtch}: {swtch: SwitchProps})=> {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
	const idx = swtch.idx;
	const dir = swtch.direction;

	useEffect(() => {
		const container = containerRef.current;
		const el = itemsRef.current[idx];

		if (!el) return;
		console.log(idx != 0 ? "start" : "end")

		// el.scrollIntoView({
		// 	behavior: "smooth",
		// 	inline: idx != 0 ? "start" : "end",
		// 	block: "nearest",
		// });
		container?.scrollTo({
			behavior: "smooth",
			left: el.offsetLeft - container.offsetLeft - 60
		});

		if (idx === 0) {
			container!.scrollTo({ left: 0, behavior: 'smooth' });
			return;
		}

	}, [idx]);

	return (
		<div
			ref={containerRef}
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