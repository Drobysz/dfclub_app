import { Arrow } from "@/components";
import cn from "classnames";

export const Switchers = ({
	idx,
	setIdx
}: {
	idx: number,
	setIdx: (n: number)=> void
})=> {
	const len = 5;
	const lMode = idx == 0 ? "light" : "dark";
	const rMode = idx == (len - 1) ? "light" : "dark";
	const invisible = "cursor-none pointer-events-none";

	const handleSwitch = (s: "p" | "n")=> {
		if (s == "p" && rMode == "dark") {
			setIdx(idx + 1);
		} else if (s == "n" && lMode == "dark") {
			setIdx(idx - 1);
		}
	}

	return (
		<div className="flex gap-4">
			<Arrow
				dir="l"
				mode={lMode}
				onClick={()=> handleSwitch("n")}
				className={cn(lMode == "light" && invisible)}
			/>
			<Arrow
				dir="r"
				mode={rMode}
				onClick={()=> handleSwitch("p")}
				className={cn(rMode == "light" && invisible)}
			/>
		</div>
	)
}