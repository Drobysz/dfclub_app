import { ModalWindow } from "@/components";
import { motion } from "framer-motion";
import { Ring } from "./Ring";
import { useEffect, useRef, useState } from "react";

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export const ProgressTag = ({
	hover
}: {
	hover: boolean
})=> {
	const [pct, setPct] = useState(50);
  	const raf = useRef<number | null>(null);

  	const ringPct = hover ? 100 : 50;

	useEffect(() => {
		const from = hover ? 50 : 100;
		const to = hover ? 100 : 50;

		const duration = 400;
		const start = performance.now();

		if (raf.current) cancelAnimationFrame(raf.current);

		const tick = (now: number) => {
			const t = clamp((now - start) / duration, 0, 1);
			const v = Math.round(from + (to - from) * easeOutCubic(t));
			setPct(v);

			if (t < 1) raf.current = requestAnimationFrame(tick);
		};

		raf.current = requestAnimationFrame(tick);

		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, [hover]);
  
	return (
		<motion.div
			className="absolute -top-10 -right-2"
			style={{
				transformOrigin: "bottom right"
			}}
			animate={{
				rotate: hover ? 15 : 10
			}}
		>
			<ModalWindow tag="div">
				<div className="flex flex-col items-center gap-1 bg-white p-4 rounded-2xl">
					<div className="flex items-center gap-1">
						<Ring percent={ringPct} />
						<div className="text-xl font-extrabold">{pct}%</div>
					</div>

					<div className="leading-none flex flex-col items-center">
						<div className="text-gray-500">Курс пройден</div>
					</div>
				</div>
			</ModalWindow>
		</motion.div>
	)
}