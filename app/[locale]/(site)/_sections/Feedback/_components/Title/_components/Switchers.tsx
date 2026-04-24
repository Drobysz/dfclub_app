import { Arrow } from "@/components";
import cn from "classnames";
import { SwitchProps } from "../../../Feedback";

export const Switchers = ({
	idx,
	setSwitch
}: {
	idx: number,
	setSwitch: (n: SwitchProps)=> void
})=> {
	const len = 6;
	const lMode = idx == 0 ? "light" : "dark";
	const rMode = idx == (len - 2) ? "light" : "dark";

	const invisible = "cursor-none pointer-events-none";

	const handleSwitch = (s: "p" | "n")=> {
		if (s == "n" && rMode == "dark") {
			setSwitch({idx: idx + 1, direction: 'right'});
		} else if (s == "p" && lMode == "dark") {
			setSwitch({idx: idx - 1, direction: 'left'});
		}
	}

	return (
		<div className="flex gap-4">
			<Arrow
				dir="l"
				mode={lMode}
				onClick={()=> handleSwitch("p")}
				className={cn(lMode == "light" && invisible)}
			/>
			<Arrow
				dir="r"
				mode={rMode}
				onClick={()=> handleSwitch("n")}
				className={cn(rMode == "light" && invisible)}
			/>
		</div>
	)
}