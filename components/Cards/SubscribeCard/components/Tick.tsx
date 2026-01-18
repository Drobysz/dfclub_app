import TickIcon from "@/assets/checked.svg";
import cn from "classnames";

export const Tick = ()=> {
	return (
		<span className={cn(
			"bg-primary-500/25 text-primary-500",
			"w-fit h-fit px-0.5 py-1 rounded-full"
		)}>
			<TickIcon />
		</span>
	)
}